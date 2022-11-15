import { Route } from 'react-router-dom';
import { routesConfig } from '../../routes/routesConfig';

function AppRouter() {
    return (
        <>
            {routesConfig.map((el) => (
                <Route
                    key={el.path}
                    path={el.path}
                    component={el.component}
                    exact={el.exact}
                />
            ))}
        </>
    );
}

export default AppRouter;
