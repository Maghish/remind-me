import { useEffect, useState } from "react"

import Navbar from "../components/Navbar"
import TaskBox from "../components/TaskBox"

import axios from "axios"

function Home(props) {
    
    const [allTasks, setAllTasks] = useState([])

    useEffect(() => {
        async function getAllTasks() {
            try {
                const res = await axios.get("/api")
                setAllTasks(res.data)
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
                <div className="flex flex-wrap w-full min-h-32 h-auto px-32 pt-7 flex-shrink-0 backdrop-filter backdrop-blur-lg rounded-2xl">
                    {/* <TaskBox title="Do Freelance" description="Freelancing is a great way to earn money and if you reach 18 then you can be a millionare in no time!" rank="78" />
                    <TaskBox title="Learn Next.js" description="Next.js is important" rank="45" />
                    <TaskBox title="Learn AWS" description="Recruiters expect applicants to know AWS so it's important" rank="35" />
                    <TaskBox title="Complete this project" description="Yes you need to do a lot of projects but is THIS project necessary.. well it's mid you can do it if you want else you can ignore" rank="21" />
                    <TaskBox title="Learn MEAN Stack" description="MEAN Stack is harder than MERN Stack but it's worth a glance" rank="5" /> */}
                    {allTasks.map(task => {
                        return <TaskBox title={task.name} description={task.description} rank={task.rank} />
                    })}
                </div>
            </div>
        </>
    )
}

export default Home