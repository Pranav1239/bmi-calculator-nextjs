"use client"

import { useCallback, useState } from "react"

export default function Bmi() {
    const [height , setHeight] = useState('')
    const [weight , setWeight] = useState('')
    const [bmi , setBmi] = useState('')
    const [msg , setMsg] = useState('')
    console.log(height , weight)

const Reload = ()=>{
    window.location.reload()
}

    const handleCal = (e)=>{
        e.preventDefault();

        if(weight === 0 || height === 0){
            alert("please enter a valid number")
        }

        else {
            let bmiformula = (weight / (height * height) * 703);
            setBmi(bmiformula.toFixed(2))
        }

        if(bmi < 25){
            setMsg("Your underweight")
        }

        else if(bmi >= 25 || bmi <= 30){
            setMsg("Your Healthy")
        }

        else{
            setMsg("Your unhealthy")
        }
    }

    return (
        <div className="flex justify-center items-center h-[100vh]">
            <div className="main">
                <div className="mb-4">
                    <h1 className='font-extrabold text-4xl cursor-default'>BMI <span className='text-blue-800'>CALCULATOR</span></h1>
                </div>
                <form onSubmit={handleCal}>
                <div className="mb-4">
                <input
                        type="number"
                        placeholder="weight"
                        value={weight}
                        onChange={(e) => setWeight(e.target.value)}
                        className="w-80 text-black p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-400" />
                    
                </div>
                <div className="mb-4">
                <input type="number"
                        placeholder="height"
                        value={height}
                        onChange={(e) => setHeight(e.target.value)}
                        className="w-80 text-black p-2 rounded-md bg-white border border-gray-300 focus:outline-none focus:border-blue-400" />
                </div>
                <div className="mb-4">
                    <button
                        type="submit"
                        className="bg-blue-600 mx-1 text-white py-2 px-4 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-400">
                        Submit
                    </button>
                    <button
                    onClick={Reload}
                        className="bg-white mx-2 text-black py-2 px-4 rounded-md hover:bg-slate-200 focus:outline-none focus:ring-2 focus:ring-slate-400">
                        Reload
                    </button>
                    <div className="mt-4 cursor-default text-white">
                        <h1 className="font-extrabold text-3xl">{bmi}</h1>
                        <p className="font-bold text-xl">{msg}</p>
                    </div>
                </div>
                </form>
            </div>
        </div>
    )
}
