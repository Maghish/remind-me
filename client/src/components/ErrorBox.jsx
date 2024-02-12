function ErrorBox(props) {
    return (
        <>
            <div className='w-full h-max bg-red-500 mt-3 mb-2 rounded-sm p-2 px-4'>
                <p className='text-stone-200 font-mono' >{props.errorMessage}</p>
            </div>
        </>
    )
}

export default ErrorBox