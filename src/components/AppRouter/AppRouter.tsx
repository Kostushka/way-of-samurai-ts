import { Route } from 'react-router-dom';
import Dialogs from '../../containers/Dialogs';
import Music from '../../containers/Music';
import News from '../../containers/News';
import Profile from '../../containers/Profile';
import Settings from '../../containers/Settings';
// import { routesConfig } from '../../routes/routesConfig';
import { ActionType, StateType } from '../../redux/type';

type AppRouterPropsType = {
    state: StateType;
    dispatch: (action: ActionType) => void;
    // addDialogMessage: (message: string) => void;
    // addPostMessage: () => void;
    // updatePostTextareaValue: (newText: string) => void;
    // errorHandler: (errorValue: boolean) => void;
};

function AppRouter({ state, dispatch }: AppRouterPropsType) {
    return (
        <>
            <Route
                path={'/'}
                render={() => (
                    <Profile
                        profilePage={state.profilePage}
                        dispatch={dispatch}
                        // addPostMessage={addPostMessage}
                        // updatePostTextareaValue={updatePostTextareaValue}
                        // errorHandler={errorHandler}
                    />
                )}
                exact
            />
            <Route
                path={'/profile'}
                render={() => (
                    <Profile
                        profilePage={state.profilePage}
                        dispatch={dispatch}
                        // addPostMessage={addPostMessage}
                        // updatePostTextareaValue={updatePostTextareaValue}
                        // errorHandler={errorHandler}
                    />
                )}
            />
            <Route
                path={'/dialogs'}
                render={() => (
                    <Dialogs
                        dialogsPage={state.dialogsPage}
                        dispatch={dispatch}
                        // addDialogMessage={addDialogMessage}
                    />
                )}
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
