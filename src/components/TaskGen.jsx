import React, { useContext, useState } from 'react'
import { Tasks } from '../apis/TaskStore'
import { MdOutlineCreate } from "react-icons/md"
import { MdOutlineDeleteForever } from "react-icons/md"
const TaskGen = () => {
    const { data, handleCreate, handleDelete } = useContext(Tasks);


    return (
        <section className='h-[100vh] overflow-hidden bg-sky-400   flex flex-col gap-8 p-8'>

            <article className='flex flex-row justify-center items-center gap-4'>

                <form className='w-[50%] flex flex-col gap-4 ' onSubmit={handleCreate}>

                    <textarea name="" id="" className='h-24 bg-yellow-100 resize-none border-2 border-yellow-300 outline-none scrollbar-thin scrollbar-track-yellow-100 scrollbar-thumb-sky-400 p-2 font-semibold text-2xl'></textarea>
                    <button className='py-2  flex justify-center bg-emerald-400 border-2 border-emerald-600  hover:bg-emerald-500'><MdOutlineCreate className='text-3xl' /></button>
                </form>

            </article>
            

            <article className='flex flex-wrap justify-center gap-2 overflow-y-scroll scrollbar-thin scrollbar-track-sky-400 scrollbar-thumb-yellow-100'>
                {

                    data.length != 0 ? data.map(value => {
                        return <div className='flex flex-col justify-between py-2 px-6 h-52 w-[30%] bg-yellow-100 border-2 border-yellow-200  rounded-lg card' key={Math.random() * 1000}>
                            <h2 className='text-xl error  scrollbar-thin scrollbar-track-yellow-100 scrollbar-thumb-sky-400'>{value.task}</h2>
                            <div className='card-child'>
                                <div className=' text-sm  w-full '>
                                    <h3>Created at</h3>{value.timestamp}
                                </div>
                                <button className='text-3xl bg-red-500 text-white p-2 rounded-lg hover:bg-red-700' onClick={() => handleDelete(value.id)}><MdOutlineDeleteForever /></button>
                            </div>
                        </div>
                    }) : <h2 className='text-5xl text-white font-bold'>NO Task Available</h2>


                }
            </article>
        </section >
    )
}

export default TaskGen;