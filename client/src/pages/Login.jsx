import { useState } from "react"
import Header from "../components/Header"

export default function Login() {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [email, setEmail] = useState()
  const [userName, setUserName] = useState()

  return (
    <>
      <Header inLp={false}/>
      <div 
        className="flex flex-col justify-center items-center w-full h-[50vh]">
        <div className="flex flex-col border-2 p-8">

          <h1 className="mb-8 text-xl font-semibold">Login</h1>
          <input 
            name="" 
            id="" 
            type="text"
            placeholder="user name"
            className="resize-none border overflow-hidden mb-4 p-1"
            maxLength={20}
            value={userName}
            onChange={e => setUserName(e.target.value)}
          />
          <input 
            name="" 
            id="" 
            type="text"
            placeholder="email"
            className={`resize-none border texthidden mb-4 p-1`}
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input 
            name="" 
            id="" 
            type="password"
            placeholder="password"
            maxLength={16}
            className={`resize-none border overflow-hidden mb-4 ${password.length < 8 ? "border-red-400" : "border-green-500"} p-1`}
            value={password}
            onChange={e => setPassword(e.target.value)}
          />
          <input 
            name="" 
            id="" 
            type="password"
            placeholder="conferm password"
            maxLength={16}
            className={`resize-none border texthidden ${password !== passwordConfirm ? "border-red-400" : "border-green-500"} mb-4 p-1`}
            value={passwordConfirm}
            onChange={e => setPasswordConfirm(e.target.value)}
          />
          <button className="border border-orange-400 bg-orange-400 p-1 text-white cursor-pointer hover:bg-white hover:text-black transition ease-in ">
            accedi
          </button>
        </div>
      </div>
    </>
  )
}
