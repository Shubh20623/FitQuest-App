import React, { useState } from 'react'
import SectionWrapper from './SectionWrapper'
import {WORKOUTS} from "../utils/excercises"

function Header(props) {
    const { index, title, description } = props
    return (
        <div className='flex flex-col gap-4'>
            <div className='flex items-center justify-center gap-2'>
                <p className='text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400'>{index}</p>
                <h4 className='text-xl sm:text-2xl md:text-3xl'>{title}</h4>
            </div>
            <p className='text-sm sm:text-base mx-auto'>{description}</p>
        </div>
    )
}

const Generator = () => {

    const [modal, setModal]=useState(false);
    let showModal=false;
    function toggleModal(){
        setModal(!modal);
    }

  return (
    <SectionWrapper header={"Generate your workout"} title={["It's ","huge", " o'clock"]}>
    <Header index={"01"} title={"Pick your Poison"} description={"Select the workout you want to start"} />
    <div className='grid grid-cols-2 sm:grid-cols-4'>
    {Object.keys(WORKOUTS).map((type, typeIdx)=>{
        return (
        <button className=" bg-slate-950 border border-blue-400 duration-200 hover:border-blue-600 py-3 m-3 rounded-lg" key={typeIdx}>
        <p className='capitalize'>{type.replaceAll("_", " ")}</p>
        </button>
        )
    })}
    </div>

    <Header index={"02"} title={"Muscle Group"} description={"Select the muscle group you want to train"} />
    <div className='bg-slate-950 border border-blue-400 rounded-lg flex flex-col'>
    <button onClick={toggleModal} className='relative flex items-center p-3 justify-center'>   
    <p>Muscle group</p>
    <i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
    </button>
    {modal && (
        <div>Modal</div>
    )}
    </div>
    </SectionWrapper>
  )
}

export default Generator