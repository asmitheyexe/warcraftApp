import axios from "axios";

const clientId = process.env.REACT_APP_WC_LOGS_CLIENTID;
const secret = process.env.REACT_APP_WC_LOGS_SECRET;

let instance = null;

class api {
  constructor() {
    if (!instance) {
      instance = this;
      fetchToken();
    }
  }

  fetchToken = async () => {
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
        scope: "public",
      },
    });
    token = data;
  };
}
axios.defaults.baseURL = "http://localhost:1010/";

axios.headers.common = { Authorization: `bearer ${token}` };
