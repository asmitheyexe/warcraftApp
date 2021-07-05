const axios = require("axios");
const warcraftLogsKey = process.env.REACT_APP_WC_LOGS_API_KEY;
const baseURL = "https://www.warcraftlogs.com/api/v2/client";

const clientId = process.env.REACT_APP_WC_LOGS_CLIENTID;
const secret = process.env.REACT_APP_WC_LOGS_SECRET;
console.log(clientId);
let instance = null;

let token = null;

const apiKeyQueryParam = `?api_key=${warcraftLogsKey}`;
class warcraftLogsAPI {
  constructor() {
    if (!instance) {
      instance = this;
    }
    if (!token) {
    }
    return instance;
  }

  initToken = async () => {
    const data = await axios.request({
      url: "/oauth/token",
      method: "post",
      baseURL: "https://www.warcraftlogs.com/",
      auth: {
        username: clientId,
        password: secret,
      },
      data: {
        grant_type: "client_credentials",
      },
    });
    token = data.data.access_token;
    return Promise.resolve();
  };

  fetchReports = async (guildName, serverName, serverRegion) => {
    const formattedGuildName = guildName.replace(" ", "%20");
    const req = await axios({
      baseURL,
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
      },
      data: {
        query: `
          query ReportData {
            Reports() {
              firstName
                posts {
                  title
                  votes
                }
              }
            }
          `,
      },
    });
    console.log(req);
    return req.data;
  };

  fetchReport = async (code) => {};

  fetchParses = async (character, timeFrame) => {};
}

export default new warcraftLogsAPI();
