const axios = require("axios");

const baseURL = "https://www.warcraftlogs.com/api/v2/client";

class WarcraftLogsAPI {
  #token;
  #secret;
  #clientId;
  constructor() {
    if (!WarcraftLogsAPI.instance) {
      WarcraftLogsAPI.instance = this;
    }

    this.#secret = process.env.REACT_APP_WC_LOGS_SECRET;
    this.#clientId = process.env.REACT_APP_WC_LOGS_CLIENTID;
    return WarcraftLogsAPI.instance;
  }

  initToken = async () => {

    const tempTkn = localStorage.getItem('wcLogsToken', this.#token);

    if(tempTkn){
      return tempTkn;
    }

    const data = await axios.request({
      url: "/oauth/token",
      method: "post",
      baseURL: "https://www.warcraftlogs.com/",
      auth: {
        username: this.#clientId,
        password: this.#secret,
      },
      data: {
        grant_type: "client_credentials",
      },
    });
    this.#token = data.data.access_token;
    
    localStorage.setItem('wcLogsToken', this.#token);
    return this.#token;
  };
}

const WarcraftLogs = new WarcraftLogsAPI();
export default WarcraftLogs;
