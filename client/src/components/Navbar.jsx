import { Link } from 'react-router-dom'

function Navbar(props) {
    return (
        <div className="bg-[#252525] w-full min-h-[72px] flex items-center px-9">
            <p className="font-mono text-white text-2xl"><Link to="/">Remind Me</Link></p>
            <p className="font-mono text-stone-300 text-md pl-14 hover:text-white"><Link>Docs</Link></p>
            <p className="font-mono text-stone-300 text-md pl-10 hover:text-white"><Link>Create a task</Link></p>
        </div>
    )
}

export default Navbar