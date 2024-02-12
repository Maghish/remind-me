import Navbar from "../components/Navbar"
import TaskBox from "../components/TaskBox"

function Home(props) {
    return (
        <>
            <Navbar username={props.username} />
            <div className="w-full min-h-screen flex flex-col items-center">
                <p className="font-mono text-white text-4xl pt-9">Welcome Back {props.username}!</p>
                <div className="flex flex-wrap justify-between w-full min-h-32 h-auto px-32 pt-7 flex-shrink-0 backdrop-filter backdrop-blur-lg rounded-2xl">
                    <TaskBox title="Do Freelance" description="Freelancing is a great way to earn money and if you reach 18 then you can be a millionare in no time!" rank="Very Important" />
                    <TaskBox title="Learn Next.js" description="Next.js is important" rank="Important" />
                    <TaskBox title="Learn AWS" description="Recruiters expect applicants to know AWS so it's important" rank="Important" />
                    <TaskBox title="Complete this project" description="Yes you need to do a lot of projects but is THIS project necessary.. well it's mid you can do it if you want else you can ignore" rank="Mid" />
                    <TaskBox title="Learn MEAN Stack" description="MEAN Stack is harder than MERN Stack but it's worth a glance" rank="Not necessary" />
                </div>
            </div>
        </>
    )
}

export default Home