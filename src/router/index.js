import Loadable from 'react-loadable';
import createBrowserHistory from 'history/createBrowserHistory';
import Loading from '@/components/Loading';

const Home = Loadable({loader: () => import('@/pages/Home'),loading: Loading});

export const history = createBrowserHistory();

export const routes = [
  {
    path:'/',
    redirect:'/home'
  },
  {
    path:'/home',
    component: Home
  },
]
