function TaskBox(props) {
    return (
        <div className="flex flex-col flex-shrink-0 flex-1 flex-grow-0 min-w-[220px] h-[220px] mt-5 bg-gray-400 rounded-2xl p-7">
            <p className="font-mono text-white text-md">{props.title}</p>
            <div className="max-h-16 overflow-auto scrollbar-hide mt-3">
                <p className="font-mono text-white text-sm text-pre-line">{props.description}</p>
            </div>
            <p className="font-mono text-white text-sm mt-auto">#{props.rank}</p>            
        </div>    
    )
}

export default TaskBox