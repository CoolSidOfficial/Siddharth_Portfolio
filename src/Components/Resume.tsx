import React from 'react'
import Resumecard from './Resumecard'

const Resume = () => {
  const intern=[{
    title:"Eduction",
    role:"B.Tech",
    organization:"National Institute of Technology, Bhopal",
    duration:"Year 2022- Year 2026",
    description:"During my internship at Dhanaay, I gained valuable experience in frontend development. I learned extensively about Tailwind CSS and was tasked with enhancing their frontend UI. Additionally, I worked with data visualization libraries, including Tremor X Charts and Chart.js."
  },
  {
    title:"Eduction",
    role:"12th",
    organization:"Model Higher Secondary School, Bhopal",
    duration:"Year 2022 - Year 2026",
    description:"As an undergraduate student, I have a good understanding of data science technologies such as Excel, SQL, Python,Pandas,Scikit-Learn, and Matplotlib."
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