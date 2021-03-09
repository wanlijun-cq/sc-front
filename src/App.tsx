import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import routes from './router';
import logo from './logo.svg';
import styles from './App.less';
import { Switch } from 'react-router-dom/cjs/react-router-dom.min';

function App () {
  // eslint-disable-next-line no-undef
  // console.log(WS_PORT);
  return (
    <div className="App">
      <Router>
        <header className={styles.info}>
          <img src={logo} className={styles.logo} alt="logo" />
          <Link to="/home">Home</Link>
          <Link to="/about">About</Link>
        </header>
        <Switch>
          {routes.map((route, i) => (
            <Route
              key={i}
              path={route.path}
              render={ props => (
                <route.component {...props} />
              )}
            />
          ))}
        </Switch>
      </Router>
  </div>
  );
}

export default App;
