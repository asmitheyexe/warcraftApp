import warcraftLogsAPI from "../util/warcraftLogsAPI";

export const fetchToken = () => {
  return warcraftLogsAPI.initToken();
};

export const fetchReportLogs = (guildName, realm, loc) => {
  return warcraftLogsAPI.fetchReports(guildName, realm, loc);
};

export const fetchReport = (logCode) => {
  return warcraftLogsAPI.fetchReport(logCode);
};

export const fetchParses = (character, timeFrame) => {
  return warcraftLogsAPI.fetchParses(character, timeFrame);
};
