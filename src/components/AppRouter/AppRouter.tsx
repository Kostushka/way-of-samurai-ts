import { Route } from 'react-router-dom';
import Dialogs from '../../containers/Dialogs';
import Music from '../../containers/Music';
import News from '../../containers/News';
import Profile from '../../containers/Profile';
import Settings from '../../containers/Settings';
// import { routesConfig } from '../../routes/routesConfig';
import { StateType } from '../../type';

type AppRouterPropsType = {
    state: StateType;
};

function AppRouter({ state }: AppRouterPropsType) {
    return (
        <>
            <Route
                path={'/'}
                render={() => <Profile profilePage={state.profilePage} />}
                exact
            />
            <Route
                path={'/profile'}
                render={() => <Profile profilePage={state.profilePage} />}
            />
            <Route
                path={'/dialogs'}
                render={() => <Dialogs dialogsPage={state.dialogsPage} />}
            />
            <Route path={'/news'} render={() => <News />} />
            <Route path={'/music'} render={() => <Music />} />
            <Route path={'/settings'} render={() => <Settings />} />
            {/* {routesConfig.map((el) => (
                <Route
                    key={el.path}
                    path={el.path}
                    component={el.component}
                    exact={el.exact}
                />
            ))} */}
        </>
    );
}

export default AppRouter;
