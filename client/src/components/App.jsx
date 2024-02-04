import { useState } from 'react'
import axios from 'axios'

import urlconfig from '../urlconfig.json'

axios.defaults.baseURL = urlconfig.url

function App() {

    const [data, setData] = useState("No data found")

    const getData = () => {
        axios.get('/api')
        .then(response => {
            setData(response.data)
        })
    }

    const postData = () => {
        axios.post('/api/create', {
            name: "Build Portfolio Website",
            description: "Build a Portfolio Website to display all the projects",
            rank: "Important",
        })
        .then(response => {
            console.log(response.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    return (
        <>
            <p>{typeof(data)}</p>
            <button onClick={getData}>Click Here</button>
            <button onClick={postData}>Post Data</button>
        </>
    )
}

export default App
