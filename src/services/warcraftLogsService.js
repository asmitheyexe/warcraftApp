import warcraftLogsAPI from "../util/warcraftLogsAPI";


export const fetchReportLogs = (guildName,realm,loc) => {
    return warcraftLogsAPI.fetchReports(guildName,realm,loc);

}

export const fetchReport = (logCode) => {
    return warcraftLogsAPI.fetchReport(logCode);
}