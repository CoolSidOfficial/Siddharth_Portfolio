import React from 'react'
import Resumecard from './Resumecard'

const Resume = () => {
  const intern=[{
    title:"Eduction",
    role:"B.Tech",
    organization:"National Institute of Technology, Bhopal",
    duration:"2022 - 2026 (CGPA: 8.05 till 6th sem)",
    description:"As a Data Scientist and Analyst, I possess strong skills in data wrangling,statistical analysis,and machine learning to uncover insights and drive data-driven decisions.I am proficient in tools like Python, SQL, Excel and Power BI."
  },
  {
    title:"Eduction",
    role:"12th",
    organization:"Model Higher Secondary School, Bhopal",
    duration:"2021 - 2022 (90.2 %)",
    description:"In 12th class, i studied the science stream with a focus on mathematics and physics, developing a strong analytical foundation. I also actively participated in academic projects and competitive exams,which helped sharpen my problem solving and reasoning skills."
  } 
]
  return (
    <section  className='w-full flex flex-col justify-center items-center py-16'>
    <div id='resume' className='w-11/12'>
    <p data-aos="fade-up" className='mt-6 text-4xl text-slate-400 font-semibold'>Resume</p>
      <hr data-aos="fade-up" className=' h-n mt-3 bg-slate-400' />
      <div className='w-full flex flex-col justify-center '>
      <p data-aos="fade-up" className='mt-4 font-medium text-3xl'> Here are my experiences and qualifications.</p>
      <div className='flex  w-full justify-center'>
      <div className=' flex mt-10 flex-col lg:flex-row  gap-10   w-full align-middle justify-between items-center'>
        {
          intern.map((item,idx)=>{
            return(
              <Resumecard {...item}></Resumecard>
            )
          })
        }

      </div>
      </div>
      </div>
    </div>
    </section>
  )
}

export default Resume