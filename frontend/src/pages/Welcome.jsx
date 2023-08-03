import React from "react"
import { Link } from "react-router-dom"
import logo from "../assets/Frame 46.png"

const Welcome = () => {
  return (
    <React.Fragment>
      <div className="bg-background object-cover w-screen h-screen">
      <header className="pt-8 pl-6">
        <img className="w-36 h-13" src={logo} alt="logo" />
      </header>
      <section>
      <h2 className="text-center mt-24"><span className="font-welcome text-8xl text-white font-bold tracking-wide">Welcome to</span> <br /><span className="font-span text-8xl text-gray-300 opacity-70  font-semibold tracking-wide">FEHRS</span></h2>
      <h4 className="text-center font-welcome font-normal text-white text-3xl mt-4 leading-8">FUTA Electronic Health Record System</h4>
      <div className="flex justify-center items-center">
        <Link className="font-span bg-transparent text-white text-xl font-bold text-center mr-4 px-14 py-3 border border-solid border-white rounded-lg">Login</Link>
        <Link>Sign up</Link>
      </div>
      </section>
      </div>
    </React.Fragment>
  )
}

export default Welcome
