import ReactDOM from 'react-dom';
import { HashRouter, Route, Switch } from 'react-router-dom';
import { Provider } from 'mobx-react';
import { routesMap } from '@/infra/router';
import { HomeStore } from '@/infra/stores/home';
import { BizPageRouter } from './infra/types';
import { GlobalStorage } from './infra/utils';
import React from 'react';

const routes: BizPageRouter[] = [
  BizPageRouter.PretestPage,
  BizPageRouter.Setting,
  BizPageRouter.OneToOne,
  BizPageRouter.MidClass,
  BizPageRouter.BigClass,
  BizPageRouter.LaunchPage,
];

const RouteContainer = () => (
  <HashRouter>
    <Switch>
      {routes.map((item, index) => {
        const route = routesMap[item];
        if (!route) return null;
        return <Route key={index} exact path={route.path} component={route.component} />;
      })}
      <Route
        key={'default'}
        path={'/'}
        exact
        component={routesMap[BizPageRouter.TestHomePage].component}
      />
      <Route
        key={'h5login'}
        path={'/h5login'}
        component={routesMap[BizPageRouter.TestH5HomePage].component}
      />
    </Switch>
  </HashRouter>
);

export const App = () => {
  GlobalStorage.useLocalStorage();
  return (
    <Provider store={new HomeStore()}>
      <RouteContainer />
    </Provider>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
