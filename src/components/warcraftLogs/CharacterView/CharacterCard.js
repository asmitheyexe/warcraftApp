import React from 'react';
import {Grid} from '@material-ui/core';
import Card from '@material-ui/core/Card';
import { CardHeader } from '@material-ui/core';
import CardContent from '@material-ui/core/CardContent';

const CharacterCard = ({person}) => {
    console.log(person)
    return <Grid item xs={12}>
            <Card>
                <CardHeader title={person.name} />


            </Card>
        
    </Grid>
}


export default CharacterCard;