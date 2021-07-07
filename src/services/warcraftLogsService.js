import WarcraftLogsAPI from "../util/WarcraftLogsAPI";

export const fetchToken = () => {
  return WarcraftLogsAPI.initToken();
};

export const fetchReportLogs = (guildName, realm, loc) => {
  return WarcraftLogsAPI.fetchReports(guildName, realm, loc);
};

export const fetchReport = (logCode) => {
  return WarcraftLogsAPI.fetchReport(logCode);
};

export const fetchParses = (character, timeFrame) => {
  return WarcraftLogsAPI.fetchParses(character, timeFrame);
};
