import Dialogs from '../containers/Dialogs';
import Music from '../containers/Music';
import News from '../containers/News';
import Profile from '../containers/Profile';
import Settings from '../containers/Settings';

type routesConfigType = {
    path: string;
    component: React.ComponentType;
    exact: boolean;
};

export const routesConfig: Array<routesConfigType> = [
    {
        path: '/',
        component: Profile,
        exact: true,
    },
    {
        path: '/profile',
        component: Profile,
        exact: false,
    },
    {
        path: '/dialogs',
        component: Dialogs,
        exact: false,
    },
    {
        path: '/news',
        component: News,
        exact: false,
    },
    {
        path: '/music',
        component: Music,
        exact: false,
    },
    {
        path: '/settings',
        component: Settings,
        exact: false,
    },
];
