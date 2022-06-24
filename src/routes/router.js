import {lazy} from 'react'

const Counter = lazy(() => import("../Pages/Counter"))
const About = lazy(() => import("../Pages/About"))
const Blog = lazy(() => import("../Pages/Blog"))
const Detail =  lazy(() => import("../Pages/Detail"))

const routes = [
    {
        path: '/',
        element: <Counter />
    },
    {
        path: '/about',
        element: <About />
    },
    {
        path: '/blog',
        element: <Blog />,
    },
    {
        path: '/blog/:id',
        element: <Detail/>
    }
]

export default routes