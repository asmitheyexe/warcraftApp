import React from 'react';
import {Grid} from '@material-ui/core';

import ReportCard from './ReportCard/ReportCard';
import {fetchReportLogs} from '../../../services/warcraftLogsService';

const ReportContainer = () => {
    const [logs, setLogs] = React.useState([]);

    React.useEffect( ()=>{

        const getLogs = async () => {
            const data = await fetchReportLogs('Blitz Empire','Area-52','US');
            setLogs(data);
        }

        getLogs();
    },[]);



    const reports = logs.map( i => {
        return <ReportCard log={i} key={i.id} />
    })

    return (
        <Grid container direction='row' spacing={2}>
            {reports}

        </Grid>
    )
}



export default ReportContainer;