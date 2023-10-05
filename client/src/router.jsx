import { createBrowserRouter } from "react-router-dom"
import Home from "./pages/Home"
import CreatePost from "./pages/CreatePost"
import MainLayout from "../MainLayout"

const router = createBrowserRouter([{
    path: "/", element: <MainLayout />, children: [
        { index: true, element: <Home /> },
        { path: "/create-post", element: <CreatePost /> }
    ]
}])

export default router