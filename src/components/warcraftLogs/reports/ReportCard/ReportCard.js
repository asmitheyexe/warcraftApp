import React from "react";
import { Grid, CardActionArea, CircularProgress } from "@material-ui/core";

import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import { CardHeader } from "@material-ui/core";
import CardContent from "@material-ui/core/CardContent";
import CharacterCard from "../../CharacterView/CharacterCard";

import { fetchReport } from "../../../../services/warcraftLogsService";
import { useQuery , gql} from "@apollo/client";

const useStyles = makeStyles(() => {});




const ReportCard = ({ log, removeIfEmpty }) => {
  const [selected, setSelected] = React.useState(false);
  


  const handleSelect = () => {
    setSelected(!selected)


  }
  return (
    <Grid item xs={12}>
      <Card variant="outlined">
        <CardActionArea onClick={() => handleSelect()}>
          <CardHeader title={log.title} />
        </CardActionArea>
       { selected && <CardContent >
          <CharactersContainer code={log.code} />
        
        </CardContent>}
      </Card>
    </Grid>
  );
};


const REPORT_QUERY = gql`
  query ($code: String!){
    reportData{
      report(code: $code) {
        masterData{
          gameVersion
          actors(type: "Player"){
            id
            name
            server
            type
            subType
          }
        }
      }
    }
  }
`;

const CharactersContainer = ({code}) =>{   
  console.log(code) 
  const { loading, error, data } = useQuery(REPORT_QUERY,{
    variables : {
      code
    }})
  console.log(loading, error, data);

  const charactersInvolved = data && data.reportData.report.masterData.actors.map(i => {
    return i.subType !== "Unknown" && <CharacterCard person={i} key={i.id} />
  })

  return loading? <CircularProgress /> : charactersInvolved
  ;



}

export default ReportCard;
