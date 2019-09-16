import React from 'react';
import { 
  Route,
  Switch
} from 'react-router-dom';
import { AuthRoute } from '../util/route_util';

import HeaderContainer from './header/header_container';
import MainContainer from './main/main_container';
import PlayControls from './playcontrols/play_controls';
import SplashContainer from './splash/splash-container';

const MainSite = () => (
  <div className="wrapper">
    <HeaderContainer />
    <MainContainer />
  </div>
);

const App = () => (
  <div className="wrapper">
    <Switch>
      <AuthRoute exact path="/" component={SplashContainer}/>
      <Route component={MainSite}/>
    </Switch>
    <PlayControls />
  </div>
);

export default App;