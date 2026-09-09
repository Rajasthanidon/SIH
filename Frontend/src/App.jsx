import { useState } from 'react'
import { ArrowBigLeftDash, Component, Landmark } from 'lucide-react';
import Psw from './assets/components/Psw';
function App() {
  const [toggle, settoggle] = useState(() => {
    const storedToggle = localStorage.getItem('toggle');
    return storedToggle ? JSON.parse(storedToggle) : false;
  });

  const modeToggle = () => {
    const newToggle = !toggle;
    settoggle(newToggle);
    localStorage.setItem('toggle', JSON.stringify(newToggle));
  };


  return (

    <div className=" w-screen h-screen bg-[url(./assets/background.png)] justify-center  flex overflow-y-scroll">
      <div className="flex-col " style={{ display: toggle ? "none" : "block" }}>
        <div className="lg:flex sm:flex-wrap md:flex justify-center gap-4  translate-y-50  " >
          <div className="w-80 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 text-center shadow-xl mb-1 " >

            {/* Student Image */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 overflow-hidden">
              <img
                src="./asset/student.png"
                alt="Student"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-white">
              I'm an Institution
            </h2>

            {/* Description */}
            <h3 className="mt-2 text-sm leading-6 text-gray-300">
              Track skills,
              placements & industry partnerships
            </h3>

            {/* Button */}
            <button onClick={() => { modeToggle() }}
              className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3
               font-semibold text-white transition-all duration-300
               hover:bg-blue-500 hover:scale-[1.02]"
            >
              Continue
            </button>

          </div>

          <div className="w-80 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 text-center shadow-xl  ">

            {/* Student Image */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 overflow-hidden">
              <img
                src="./asset//student.png"
                alt="Student"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-white">
              I'm an Academician
            </h2>

            {/* Description */}
            <h3 className="mt-2 text-sm leading-6 text-gray-300">
              Explore FDPs,
              research & industry
              collaboration
            </h3>

            {/* Button */}
            <button onClick={() => { modeToggle() }}

              className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3
               font-semibold text-white transition-all duration-300
               hover:bg-blue-500 hover:scale-[1.02]"
            >
              Continue
            </button>

          </div>
        </div>

        <div className=" lg:flex sm:flex-wrap md:flex  justify-center gap-4 translate-y-55  ">
          <div className="w-80 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 text-center shadow-xl mb-1">

            {/* Student Image */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 overflow-hidden">
              <img
                src="./asset//student.png"
                alt="Student"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-white">
              I'm an Industry
            </h2>

            {/* Description */}
            <h3 className="mt-2 text-sm leading-6 text-gray-300">
              Find talent, post
              opportunities & hire
            </h3>

            {/* Button */}=
            <button onClick={() => { modeToggle() }}
              className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3
               font-semibold text-white transition-all duration-300
               hover:bg-blue-500 hover:scale-[1.02]"
            >
              Continue
            </button>

          </div>

          <div className="w-80 rounded-2xl bg-white/10 backdrop-blur-lg border border-white/20 p-8 text-center shadow-xl">

            {/* Student Image */}
            <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-blue-700 overflow-hidden">
              <img
                src="./asset//student.png"
                alt="Student"
                className="h-full w-full object-cover"
              />
            </div>

            {/* Heading */}
            <h2 className="text-2xl font-bold text-white">
              I'm a Student
            </h2>

            {/* Description */}
            <h3 className="mt-2 text-sm leading-6 text-gray-300">
              Find skills, internships & jobs
            </h3>

            {/* Button */}
            <button onClick={() => { modeToggle() }}
              className="mt-6 w-full rounded-xl bg-blue-600 px-6 py-3
               font-semibold text-white transition-all duration-300
               hover:bg-blue-500 hover:scale-[1.02]"
            >
              Continue
            </button>

          </div>
        </div>
      </div>
      <div className=" min-h-screen lg:w-120 " style={{ display: toggle ? "block" : "none" }}>

        {/* Login Card */}
        <div className="w-full max-w-md rounded-3xl
                  bg-white/10 backdrop-blur-xl
                  border border-white/20
                  shadow-2xl  pl-20 pr-20 pt-2 pb-2 translate-y-60">

          {/* Heading */}
          <div className="text-center mb-8">
            <div className="flex -translate-x-20 gap-20">
              <div className="mx-auto mb-4 flex h-10 w-10 items-center justify-center
                      rounded-full bg-white
                      shadow-lg shadow-blue-500/20" onClick={() => { modeToggle() }}>
                <span className="text-2xl"><ArrowBigLeftDash /></span>
              </div>
              <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center
                      rounded-full bg-blue-600/80
                      shadow-lg shadow-blue-500/20">
                <span className="text-2xl">🔐</span>
              </div>
            </div>

            <h1 className="text-3xl font-bold text-white">
              Welcome Back
            </h1>

            <p className="mt-2 text-sm text-gray-300">
              Login to continue to Edu2Industry
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5">

            {/* Email */}
            <div>
              <label className="mb-2 block text-sm font-medium text-gray-200">
                Email Address
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full rounded-xl
                     border border-white/20
                     bg-white/10
                     px-4 py-3
                     text-white
                     placeholder-gray-400
                     outline-none
                     transition
                     focus:border-blue-500
                     focus:ring-2
                     focus:ring-blue-500/30"
              />
            </div>

            {/* Password */}
            <div>



              <Psw />
            </div>

            {/* Forgot Password */}
            <div className="flex justify-center-safe">
              <button
                type="button"
                className="text-sm text-blue-400
                     hover:text-blue-300
                     transition "
              >
                Forgot Password?
              </button>
            </div>

            {/* Login Button */}
            <button onClick={() => { modeToggle() }}

              type="submit"
              className="w-full rounded-xl
                   bg-blue-600
                   px-6 py-3
                   font-semibold text-white
                   shadow-lg shadow-blue-600/20
                   transition-all duration-300
                   hover:bg-blue-500
                   hover:-translate-y-0.5
                   active:translate-y-0"
            >
              Login
            </button>

          </form>

          {/* Divider */}
          <div className="my-7 flex items-center gap-4">
            <div className="h-px flex-1 bg-white/20"></div>

            <span className="text-xs text-gray-400">
              OR
            </span>

            <div className="h-px flex-1 bg-white/20"></div>
          </div>

          {/* Sign Up */}
          <p className="text-center text-sm text-gray-300">
            Don't have an account?{" "}
            <button
              type="button"
              className="font-semibold text-blue-400
                   hover:text-blue-300
                   transition"
            >
              Sign Up
            </button>
          </p>

        </div>

      </div >
    </div >

  )
}

export default App
