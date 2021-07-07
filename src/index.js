import React from 'react';
import reactDom from 'react-dom';
import ReactDOM from 'react-dom';
import App from './App';
import WarcraftLogsAPI from './util/WarcraftLogsAPI';

const rootNode = document.getElementById('root');

const TokenApp = () => {

  const [token, setToken] = React.useState(null);

  React.useEffect(() => {
    const getToken = async () => {
      const newToken = await WarcraftLogsAPI.initToken();
      setToken(newToken);
    }
    getToken();
  },[setToken])
  return (
    token? <App warcraftLogsToken={token} /> : <div></div>
  )
}


ReactDOM.render(
    <TokenApp />,
  rootNode
);


