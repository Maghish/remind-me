import '../../css/index.css'
import { useState } from 'react' 

function SignupPage() {

    const [username, setUsername] = useState(null)
    const [email, setEmail] = useState(null)
    const [password, setPassword] = useState(null) 

    const signUpUser = () => {}

    return (
        <>
            <div className='flex items-center justify-center w-full h-screen'>
                <div className='bg-stone-800 w-[400px] rounded-2xl p-5 px-9'> 
                    <p className='text-center w-full text-stone-300 font-mono text-xl'>Sign Up</p>
                    <form className='flex flex-col'>
                        <label className='text-stone-300 mt-2 font-mono'>Username: </label>
                        <input type='text' className='bg-form-input-color rounded-md mt-2 p-2 px-4 text-stone-300 text-sm font-mono outline-none placeholder:text-stone-500 placeholder:text-sm placeholder:font-mono' placeholder='John Smith' onChange={(e) => {setUsername(e.target.value)}}></input>
                        <label className='text-stone-300 mt-2 font-mono'>Email: </label>
                        <input type='email' className='bg-form-input-color rounded-md mt-2 p-2 px-4 text-stone-300 text-sm font-mono outline-none placeholder:text-stone-500 placeholder:text-sm placeholder:font-mono' placeholder='john@email.com' onChange={(e) => {setEmail(e.target.value)}}></input>
                        <label className='text-stone-300 mt-2 font-mono'>Password: </label>
                        <input type='password' className='bg-form-input-color rounded-md mt-2 p-2 px-4 text-stone-300 text-sm font-mono outline-none placeholder:text-stone-500 placeholder:text-sm placeholder:font-mono' placeholder='johnlovescat' onChange={(e) => {setPassword(e.target.value)}}></input>
                        <button type='button' className='bg-form-submit-btn-color self-center w-max p-3 mt-5 rounded-lg font-mono hover:opacity-95'>Sign Up</button>
                    </form>
                </div>
            </div>
        </>
    )
}

export default SignupPage