import React from 'react'
import { filterData } from './data'



const Filters = ({category, setCategory}) => {

  function categoryHandler(event) {
    category = event.target.innerText;
    setCategory(category)
  }
  
  return (
    <div className='w-full flex flex-wrap justify-center my-4 py-4'>
        {
            filterData.map((filter)=>(
            <button className='bg-slate-800 px-2 py-2 mx-4 my-2 rounded-lg  hover:bg-slate-500' key={filter.id}  
            onClick={categoryHandler}>
                {filter.title}
            </button>))
        }
    </div>
  )
}

export default Filters