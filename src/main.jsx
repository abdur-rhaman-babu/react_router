import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Errorpage from './Errorpage'
import Home from './Home/Home'
import Users from './Users/Users'
import Userdetails from './Users/Userdetails'
import Posts from './Posts/Posts'
import Postdetails from './Posts/Postdetails'

const router = createBrowserRouter([
  {
    path:'/',
    element:<Home/>,
    errorElement:<Errorpage/>,
    children:[
      {
        path:'/users',
        loader:()=>fetch('https://jsonplaceholder.typicode.com/users'),
        element:<Users/>,
      },
      {
        path:'/users/:userId',
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/users/${params.userId}`),
        element:<Userdetails/>,
      },
      {
        path:'/posts',
        element:<Posts/>,
        loader:()=>fetch('https://jsonplaceholder.typicode.com/posts')
      },
      {
        path:'/posts/:postId',
        element:<Postdetails/>,
        loader:({params})=>fetch(`https://jsonplaceholder.typicode.com/posts/${params.postId}`)
      },
    ],
  },
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
      <RouterProvider router = {router}/>
  </React.StrictMode>,
)
