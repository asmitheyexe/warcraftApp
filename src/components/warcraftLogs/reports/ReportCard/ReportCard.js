import React from 'react';
import {Grid} from '@material-ui/core'

import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';
import CharacterCard from '../../CharacterView/CharacterCard';

import {fetchReport} from '../../../../services/warcraftLogsService';

const useStyles = makeStyles(() => {

});

const ReportCard = ({log}) => {
    const [report, setReport] = React.useState(null);

    const handleOnClick = async (code) => {
        const reportData = await fetchReport(code);
        console.log(reportData)
        setReport(reportData);
    }
    
    const detialedContainer = report && 
        <Grid container spacing={2}>
           {report.exportedCharacters.map( i => {
                        return <CharacterCard person={i} key={i.id} />
            })}

        </Grid>

    return (
        <Grid item xs={12}>
            <Card variant='outlined'>
                <CardHeader 
                    title={log.title}
                /> 
                <CardContent>
                    {!report && <Button onClick={() => handleOnClick(log.id)} variant='outlined' >fetch </Button>}

                    {detialedContainer}

                </CardContent>
            </Card>
        </Grid>
    )
}


export default ReportCard;