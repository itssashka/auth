import Login from "../pages/Login"
import Main from "../pages/Main"
import Reg from "../pages/Reg"

export const publicRoutes = [
    {path: '/login', element: <Login/>},
    {path: '/reg', element: <Reg/>},
]

export const privateRoutes = [
    {path: '/main', element: <Main/>}
]