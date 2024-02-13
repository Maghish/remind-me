import { useEffect } from "react"
import axios from "axios"

import GetCookie from "../hooks/GetCookie"

function CreateTask() {
    useEffect(() => {
        async function createTask() {
            axios.post('/auth', {token: GetCookie('userToken')})
            .then(currentUser => {
                axios.post('/api/createtask', {name: 'Damn345', description: 'This is damn', rank: 89, creatorID: currentUser.data.userData._id})
                .then(res => {})
            })
        }

        createTask();
    }, [])

    return (
        <>
            <p>Create Task</p>
        </>
    )
}

export default CreateTask