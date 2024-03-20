import React ,{ useEffect, useState} from 'react'
import Filters from './components/Filters'
import CardContainer from './components/CardContainer';
import { apiUrl } from './components/data'



function App() {

  const [coursesData, setCoursesData] = useState([]);
  const [category, setCategory] = useState('All')

    // getting the data from the API
    async function getData(){
      try {
          const response = await fetch(apiUrl);
          const data = await response.json();
          setCoursesData(data.data);
      } catch (error) {
          console.log(`api call failed due to error ${error}`);
      }
    }

  useEffect(()=>{
    getData();
  }, []);

  let allCourses = [];
  if(category === 'All'){
    Object.values(coursesData).forEach((courseCategory)=>{
      courseCategory.forEach((courseData) => allCourses.push(courseData));
    })
  }
  else{
      allCourses=coursesData[category];
  }
  
  return (
  <div className='bg-slate-900 text-white w-screen h-screen'>
    <h1 className='heading text-[3rem] text-center shadow-xl border-t-2 border-b-2 border-white bg-slate-800 py-2'>TOP COURSES</h1>
    <Filters category={category} setCategory={setCategory}/>
    <CardContainer allCourses={allCourses}  />
  </div>
  )
}

export default App