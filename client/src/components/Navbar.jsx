import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div className="bg-[#252525] w-full min-h-[72px] flex items-center pl-7 pr-4">
            <p className="font-mono text-white text-2xl"><Link to="/">Remind Me</Link></p>
            <p className="font-mono text-stone-300 text-md pl-14 hover:text-white"><Link>Docs</Link></p>
            <p className="font-mono text-stone-300 text-md pl-10 hover:text-white"><Link to="/createtask">Create a task</Link></p>
            <p className="font-mono ml-auto text-stone-400 pl-10 text-md hover:text-white cursor-pointer">Logged in as {props.username}</p>
        </div>
    )
}

export default Navbar