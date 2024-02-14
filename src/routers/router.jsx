import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home";


export const router = createBrowserRouter([
    {
        path: '/',
        element: <App/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            // {
            //     path: '/aplicaciones',
            //     element: <Aplicaciones/>
            // },
            // {
            //     path: '/donar',
            //     element: <Donar/>
            // },
            // {
            //     path: '/verificacion',
            //     element: <Verificacion/>
            // },
            // {
            //     path: '/recursos',
            //     element: null,
            // },
            // {
            //     path: '/blog',
            //     element: <Blog/>
            // },
            // {
            //     path: '/hojaderuta',
            //     element: <HojadeRuta/>
            // },
            // {
            //     path: '/compañia',
            //     element: null,
            // },
            // {
            //     path: '/empleo',
            //     element: <Empleo/>
            // },
            // {
            //     path: '/sobrenosotros',
            //     element: <SobreNosotros/>
            // },

        ]
    }
])