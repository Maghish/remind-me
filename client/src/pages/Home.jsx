import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import TaskBox from "../components/TaskBox"

import GetCookie from '../hooks/GetCookie'

import axios from "axios"

function Home(props) {
    
    const [allTasks, setAllTasks] = useState([])
    const [taskName, setTaskName] = useState(null)
    const [taskDesc, setTaskDesc] = useState(null)
    const [taskRank, setTaskRank] = useState(null)

    useEffect(() => {
        async function getAllTasks() {
            try {
                axios.post('/auth', {token: GetCookie('userToken')})
                .then(currentUser => {
                    const currentUserId = currentUser.data.userData._id;
                    axios.post("/api/gettasks", {creatorID: currentUserId})
                    .then(res => {
                        setAllTasks(res.data)
                        setTaskName(res.data[0].name)
                        setTaskDesc(res.data[0].description)
                        setTaskRank(res.data[0].rank)
                    })
                   
                })
            }

            catch (error) {
                throw error
            }
        }

        getAllTasks()
    }, [])
 
    return (
        <>
            <Navbar username={props.username} />
            <div className="w-full min-h-screen flex flex-col items-center">
                <p className="font-mono text-white text-4xl pt-9">Welcome Back {props.username}!</p>
                <div className="flex flex-row w-full h-full mt-7">
                    <div className="flex flex-wrap w-[70%] min-h-32 max-h-[70vh] px-32 pt-7 flex-shrink-0 backdrop-filter backdrop-blur-lg rounded-2xl overflow-auto scrollbar-hide">
                        {allTasks.map((task, key) => { 
                            return <TaskBox key={key} title={task.name} description={task.description} rank={task.rank} onClick={() => {setTaskName(task.name); setTaskDesc(task.description); setTaskRank(task.rank);}} />
                        })}
                    </div>
                    <div className="w-[30%] min-h-32 h-auto border-l-2 border-l-stone-600 pt-7 pl-8 ">
                        <p className="font-mono text-white text-lg mb-7">{taskName}</p>
                        <p className="font-mono text-white text-sm mb-11">{taskDesc}</p>
                        <p className="font-mono text-white text-md">#{taskRank}</p>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Home