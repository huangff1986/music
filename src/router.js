import React from 'react';
import PropTypes from 'prop-types';
import { routerRedux, Route, Switch, Redirect } from 'dva/router';
import dynamic from 'dva/dynamic'
import App from './routes/App.js';
import Footer from './components/Footer';
const { ConnectedRouter } = routerRedux


function RouterConfig({ history, app }) {
	const error = dynamic({
		app,
		component: () => import('./routes/Error')
	})

	const routes = [
		{
			path: '/find',
			component: () => import('./routes/Find/')
		}, {
			path: '/video',
			component: () => import('./routes/Video/')
		}, {
			path: '/my',
			component: () => import('./routes/My/')
		}, {
			path: '/friend',
			component: () => import('./routes/Friend/')
		}, {
			path: '/account',
			component: () => import('./routes/Account/')
		}
	]
  return (
  		<App>
			<ConnectedRouter history={history}>
		      <Switch>
				<Route exact path="/" render={() => (<Redirect to="/find" />)} />
			      	{
			      		routes.map(({ path, ...dynamics}, key) => (
			      			<Route key={key}
			      				exact
			      				path={path}
			      				component={dynamic({
			      				  app,
			      				  ...dynamics,
			      				})}
			      			/>
			      		))
			      	}
		      	<Route component={error}/>
		      </Switch>
    		</ConnectedRouter>
    	</App>
  );
}

RouterConfig.propTypes = {
  history: PropTypes.object,
  app: PropTypes.object,
}
export default RouterConfig;
