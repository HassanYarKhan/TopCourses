import React from 'react'

function Card({courseInfo}) {


  // const description = courseInfo.description.substring(0,125)+'...';
  return (
    <div className='flex flex-col flex-wrap bg-slate-600 mx-4 my-4 px-2 py-2 rounded-lg w-[350px]'>
        <img src={courseInfo.image.url} alt="" className='w-[400px] rounded-lg'/>
        <span className='text-2xl text-bold mx-2 my-2'>{courseInfo.title}</span>
        <div className='line-clamp-3'>{courseInfo.description}</div>

    </div>
  )
}

export default Card