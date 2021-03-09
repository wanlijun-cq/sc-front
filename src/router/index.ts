import Home from '../containers/Home';
import About from '../containers/About';
import { RouteProps } from 'react-router';
const routes: RouteProps[] = [
  {
    path: '/',
    exact: true,
    component: Home
  },
  {
    path: '/home',
    component: Home
  },
  {
    path: '/about',
    component: About
  }
];
export default routes;
