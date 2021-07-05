const warcraftLogsKey = process.env.REACT_APP_WC_LOGS_API_KEY;
const baseURL = "https://www.warcraftlogs.com:443/v1/";

const axios = require('axios').create({
    baseURL
  });

let instance = null;
const apiKeyQueryParam = `?api_key=${warcraftLogsKey}`;
class warcraftLogsAPI {
    constructor(){
        if(!instance){
            instance = this;
        }
        return instance;
        
    }
    fetchReports =  async (guildName,serverName,serverRegion) => {
        const formattedGuildName = guildName.replace(' ','%20');
        const req = await axios.get(`/reports/guild/${formattedGuildName}/${serverName}/${serverRegion}${apiKeyQueryParam}`);

        return req.data;
    }    

    fetchReport = async (code) => {
        const req = await axios.get(`/report/fights/${code}${apiKeyQueryParam}`);
        return req.data;

    }

}

export default new warcraftLogsAPI();