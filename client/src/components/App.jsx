import { useEffect, useState } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import axios from 'axios'

import urlconfig from '../urlconfig.json'

import Home from './pages/Home'
import CreateTask from './pages/CreateTask'
import LoginPage from './pages/LoginPage'
import SignupPage from './pages/SignupPage'

axios.defaults.baseURL = urlconfig.url

function DecidePage() {}

export default function App() {
    let routes = useRoutes([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element: <SignupPage />
                },
                {
                    path: 'login',
                    element: <LoginPage />
                },
                {
                    path: 'signup',
                    element: <SignupPage />
                },
                {
                    path: 'createtask',
                    element: <CreateTask />
                }
            ]
        }
    ])

    return (
        <div className='min-h-screen max-w-full'>
            {routes}        
        </div>
    )
}