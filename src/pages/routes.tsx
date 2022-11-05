import Home from './Home';
import SignUp from './SignUp';
import Login from './Login';

export type RoutesArray = {
    path: string;
    element: JSX.Element;
}[]

export const routes:RoutesArray = [
    {
        path: "/",
        element: <Home />
    },
    {
        path: "/signup",
        element: <SignUp />
    },
    {
        path: "/login",
        element: <Login />
    },
]


export default routes