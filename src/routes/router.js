import Counter from "../Pages/Counter"
import About from "../Pages/About"
import Blog from "../Pages/Blog"
import Detail from "../Pages/Detail"

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