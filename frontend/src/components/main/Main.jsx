import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useCookies } from 'react-cookie'
import axios from 'axios'
import { useEffect } from 'react'
import './Main.scss'
import { AiFillMinusCircle } from 'react-icons/ai'

const Main = () => {

    const [name, setName] = useState("")
    const [from, setFrom] = useState("")
    const [amount, setAmount] = useState(0)
    const [action, setAction] = useState("")
    const [curr, setCurr] = useState("")
    const [loader, setLoader] = useState(false)
    const [msg, setMsg] = useState("")


    return (
        <>

            <div className='mainform-con flex-col mt-10'>

                <h1 className='md:text-6xl text-4xl w-1/2 md:mt-20 mt-10'>Vehicle Registration</h1>

                <div className='flex w-full py-5 mt-8'>
                    <p className='md:w-1/12 w-2/12 py-5 bg-[#eeb45c]  text-white font-bold flex justify-center md:text-3xl text-2xl'><AiFillMinusCircle /></p>
                    <p className='md:w-11/12 w-10/12 py-5 text-left bg-[#243b5a] px-4 text-white font-bold'> VEHICLE INFORMATION </p>
                </div>

                <div className='md:flex w-full gap-10 mb-10'>
                    <div className='md:w-1/2 w-full'>
                        <label className='text-xl font-bold' for="username">Drivers License</label>
                        <input className='main-file font-semibold text-black text-lg' type="file" required />

                        <label className='text-xl font-bold' for="username">Insurance Papers</label>
                        <input className='main-file font-semibold text-black text-lg' type="file" required />

                        <label className='text-xl font-bold' for="username">Insurance Policy Number</label>
                        <input className='main-input font-bold text-black text-sm' type="text" required />

                        <label className='text-xl font-bold' for="username">ID Document</label>
                        <input className='main-file font-semibold text-lg text-black' type="file" required />



                    </div>

                    <div className='md:w-1/2 w-full'>
                        <label className='text-xl font-bold' for="username">Proof of Current Address</label>
                        <input className='main-file font-semibold text-lg text-black' type="file" required />

                        <label className='text-xl font-bold' for="username">Proof Of Car Ownership</label>
                        <input className='main-file font-semibold text-lg text-black' type="file" required />


                        <label className='text-xl font-bold' for="username">Tax Identification Number</label>
                        <input className='main-input font-bold text-black text-sm' type="text" required />

                        <label className='text-xl font-bold' for="username">Custom Papers <span className="font-semibold">(Compulsory for imported vehicles)</span></label>
                        <input className='main-file font-semibold text-black text-lg' type="file" required />


                        {/* <label className='text-xl font-bold' for="action">Action</label>
                        <select className='main-select font-bold text-black text-sm' onChange={(e) => setAction(e.target.value)} name="action" id="" required>
                            <option value="">SELECT</option>
                            <option value="invested">Invested</option>
                            <option value="withDrew">Withdrew</option>
                        </select>

                        <label className='text-xl font-bold' for="currency">Currency</label>
                        <select className='main-select font-bold text-black text-sm' onChange={(e) => setCurr(e.target.value)} name="currency" id="" required>
                            <option value="">SELECT</option>
                            <option value="GBP">GBP</option>
                            <option value="EUR">EUR</option>
                            <option value="USD">USD</option>
                        </select> */}
                    </div>
                </div>

                <div className='w-full flex justify-center text-center mb-20'>
                    <p className='md:w-2/12 w-6/12 bg-[#922d50] text-white font-semibold rounded-lg py-4 text-xl'>Submit</p>
                </div>

            </div>
        </>
    )
}

export default Main