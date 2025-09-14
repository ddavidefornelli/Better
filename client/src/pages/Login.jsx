import { useState } from "react"
import Header from "../components/Header"
import registerUser from "../login.mjs" 

export default function Login() {
  const [password, setPassword] = useState('')
  const [passwordConfirm, setPasswordConfirm] = useState()
  const [email, setEmail] = useState()
  const [userName, setUserName] = useState('')

  function isInputValid(password, passwordConfirm, userName) {
    let userNameValid = userName.length > 5 
    let passwordValid = password === passwordConfirm && password.length >= 8
    if(passwordValid && userNameValid) return true
    return false
  }

  function handleSend() {
    if(isInputValid(password, passwordConfirm, userName)) registerUser()
  }

  return (
    <>
      <Header inLp={false}/>
      <div 
        className="flex flex-col justify-center items-center w-full h-[50vh]">
        <div className="flex flex-col items-center">
        <div className="border-2 p-8">

          <h1 className="mb-8 text-xl font-semibold">Login</h1>
          <form 
            className="flex flex-col"
            onSubmit={handleSend}
          >
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
            type="email"
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
          <button 
              type="submit"
              className={`border ${isInputValid(password, passwordConfirm, userName) ? "bg-orange-400" : "bg-orange-200"} p-1 text-white cursor-pointer hover:bg-white hover:text-black transition ease-in `}>
            accedi
          </button>
          </form>
        </div>
          <h3 className="mt-4 font-semibold text-center">
            userName: &gt; 5 caratteri
            <br/>password: &gt; 8 caratteri 
            <br/>email: no cazzate pls 
          </h3>
        </div>
      </div>
    </>
  )
}
