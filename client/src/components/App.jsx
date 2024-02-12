import { useEffect, useState } from 'react'
import { Navigate, useRoutes } from 'react-router-dom'
import axios from 'axios'

import urlconfig from '../urlconfig.json'

import Home from '../pages/Home'
import CreateTask from '../pages/CreateTask'
import LoginPage from '../pages/LoginPage'
import SignupPage from '../pages/SignupPage'

import GetCookie from '../hooks/getCookie'

axios.defaults.baseURL = urlconfig.url

function DecidePage() {
    const token = GetCookie('userToken')

    const [userCred, setUserCred] = useState({})
    const [page, setPage] = useState(0)

    
    useEffect(() => {
        async function getCurrentUser() {
            try {
                const res = await axios.post('/auth', {token: token})
                setPage(1)
                setUserCred(res.data.userData)
            }

            catch (error) {
                setPage(2)
            }
        }

        getCurrentUser()
    }, [])

    if (page) {
        if (page === 1) {return <Home {...userCred} />}
        if (page === 2) {return <Navigate to='/login' />}
    }
}

export default function App() {
    let routes = useRoutes([
        {
            path: '/',
            children: [
                {
                    index: true,
                    element: <DecidePage />
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