import React from 'react'
import Card from './Card'

function CardContainer({allCourses}) {

  
    
  return (
    <div className='w-full h-fit px-8 py-8 bg-slate-900 flex flex-row flex-wrap justify-center'>
        {
            allCourses.map((courseInfo)=>{
                return (
                  <Card 
                    key={courseInfo.id}
                    courseInfo={courseInfo}
                  />
                )
            })
        }
    </div>
  )
}

export default CardContainer