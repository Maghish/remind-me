import { useState } from 'react'
import axios from 'axios'

import urlconfig from '../urlconfig.json'

axios.defaults.baseURL = urlconfig.url

function App() {

    const [data, setData] = useState("No data found")

    const getData = () => {
        axios.get('/api')
        .then(response => {
            setData(response.data.msg)
        })
    }

    return (
        <>
            <button onClick={getData}>{data}</button>
        </>
    )
}

export default App
