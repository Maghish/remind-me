import { useEffect, useState } from "react"
import { Link, useNavigate } from "react-router-dom" 
import axios from "axios"

import ErrorBox from "../components/ErrorBox"

import GetCookie from "../hooks/GetCookie"

function CreateTask() {

    const [errorMessage, setErrorMessage] = useState(null)
    const [name, setName] = useState(null)
    const [desc, setDesc] = useState(null)
    const [rank, setRank] = useState(null)
    const navigate = useNavigate()
    
    const createTask = () => {
        axios.post('/auth', {token: GetCookie('userToken')})
        .then(currentUser => {
            axios.post('/api/createtask', {name: name, description: desc, rank: rank, creatorID: currentUser.data.userData._id})
            .then(res => {
                navigate('/')
            })
            .catch(error => {
                setErrorMessage(error.message.data.errorMessage)   
            })
        })
        .catch(error => {
            setErrorMessage(error.message.data.errorMessage)
        })
    }

    return (
        <div className="w-full min-h-screen flex items-center justify-center">
            <div className="bg-stone-800 w-[400px] rounded-2xl p-5 px-9">
                <p className='text-center w-full text-stone-300 font-mono text-xl'>Create a task</p>
                {errorMessage && <ErrorBox errorMessage={errorMessage} />}
                <form className="flex flex-col">
                    <label className='text-stone-300 mt-2 font-mono'>Name: </label>
                    <input type='text' className='bg-form-input-color rounded-md mt-2 p-2 px-4 text-stone-300 text-sm font-mono outline-none placeholder:text-stone-500 placeholder:text-sm placeholder:font-mono' placeholder='Run 2 miles' onChange={(e) => {setName(e.target.value)}}></input>
                    <label className='text-stone-300 mt-2 font-mono'>Description: </label>
                    <textarea type='text' className='bg-form-input-color rounded-md mt-2 p-2 px-4 h-[7rem] text-stone-300 text-sm font-mono outline-none overflow-auto scrollbar-hide placeholder:text-stone-500 placeholder:text-sm placeholder:font-mono' placeholder='Running 2 miles everyday keeps your fit!' onChange={(e) => {setDesc(e.target.value)}}></textarea>
                    <label className='text-stone-300 mt-2 font-mono'>Rank: </label>
                    <input type='text' className='bg-form-input-color rounded-md mt-2 p-2 px-4 text-stone-300 text-sm font-mono outline-none placeholder:text-stone-500 placeholder:text-sm placeholder:font-mono' placeholder='1' onChange={(e) => {setRank(e.target.value)}}></input>
                    <button type='button' className='bg-form-submit-btn-color self-center w-max p-3 mt-5 rounded-lg font-mono hover:opacity-95' onClick={createTask}>Create task</button>  
                </form>
                <p className='font-mono text-stone-300 text-sm mt-7'>Go back to <Link className='!text-blue-600 hover:underline' to='/'>Home</Link></p>
            </div>
        </div>
    )
}

export default CreateTask