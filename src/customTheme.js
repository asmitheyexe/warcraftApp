import { createTheme } from "@material-ui/core/styles";
import grey from "@material-ui/core/colors/grey";

const theme = createTheme({
  palette: {
    primary: {
      main: grey[900],
    },
    background:{
      default:grey[200],
      paper:grey[300]
    }
  },
});

export default theme;
