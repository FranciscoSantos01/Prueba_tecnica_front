import { useContext } from "react"
import { AppContext } from "../context/context"
import { useNavigate } from "react-router-dom"


function SignIn(){
    const{signIn}=useContext(AppContext)
    const navigate = useNavigate()

    const handleSubmit = (e: React.FormEvent<HTMLFormElement>)=>{
       e.preventDefault()
        const{target}=e
       const data = new FormData(target as HTMLFormElement)
       const username = data.get('username');
       const email = data.get('email');
       const password = data.get('password');

       if (typeof username === 'string' && typeof email === 'string' && typeof password === 'string') {
           const user = {
               username,
               email,
               password,
           };
            signIn(user);
           navigate("/", { replace: true });
    }
}
    return(
        <section className="w-full h-dvh p-4 flex flex-col items-center justify-center">
            <h1 className="text-green-500 text-2xl">Ricky & Morty FanPage</h1>
            <form onSubmit={handleSubmit} className="flex flex-col gap-5 mt-5 w-[25rem]">
                 <label htmlFor="username">Username</label>
                 <input id="username" name="username" className="py-2 text-black px-3 rounded-md border-1 border-gray-200" type="text" placeholder="Username" />
                 <label htmlFor="email">Email</label>
                 <input id="email" name="email" className="py-2 px-3 text-black rounded-md border-1 border-gray-200" type="email" placeholder="email@gmail.com" />
                 <label htmlFor="password">Password</label>
                 <input id="Password" name="password" className="py-2 px-3 text-black rounded-md border-1 border-gray-200 placeholder:text-black" type="password" placeholder="Password 8-10 characters" />
                 <button className="py-2 px-3 bg-black rounded-lg text-white font-bold">Log In</button>
            </form>
        </section>
    )
}

export default SignIn