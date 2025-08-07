
import Card  from './Card'
import React from 'react'
import img from "../Assets/Screenshot 2023-12-24 210718.png"
import img2 from "../Assets/Screenshot 2023-12-24 211750.png"
const Works = () => {
  const expens=[
    {
      title:"Customer Churn Analysis",
    content:"Built a classification pipeline on the Telco Customer Churn data to predict churn. Tried 7 supervised classification models and calculated accuracy, precision,recall and F1 score for each of them. Also performed data preprocessing, one hot encoding, feature scaling, upsampling and hyperparameter tuning.",
    git:"https://github.com/siddharthofficial/Customer-Churn-Analysis-",
    islive:true,
    link:"https://podcast-bv47-kb7xi88j0-siddak18s-projects.vercel.app/",
    img:"https://drive.google.com/file/d/1iWBIZtutqTmV1jCt0Y13GtrtY5Xvsx3b/view?usp=sharing"
    },
    {
    title:"A/B Testing - Banner CTR Analysis",
    content:"Conducted an A/B test on a dataset to evaluate if Product A's banner had a higher Click Through Rate (CTR) than Product B's. Mathematically calculated all parameters : CTR, standard error, test statistic, p-value with 95% confidence interval using 2 sample Z test.",
    git:"https://github.com/siddharthofficial/A-B-Testing-Case-Study-",
    islive:true,
    link:"https://expenses12.netlify.app",
    img:"https://siddakrajpal.netlify.app/project1.png"
  },{
    title:"Customer Segmentation using K-Means Clustering",
    content:"Applied K-Means Clustering on mall customer data to segment customers based on Annual Income and Spending Score. Selected optimal no. of clusters using Elbow method, minimizing inertia. Identified 5 different customer groups including loyal premium buyers, potential high value clients and budget shoppers.",
    git:"https://github.com/siddharthofficial/Customer--Segmentation-KMeans",
    islive:false,
    link:"#",
    img:"https://siddakrajpal.netlify.app/todo.png"
  },{
    title:"Blinkit Sales And Outlet Analysis",
    content:"Analysed sales metrics from Blinkit's retail dataset to uncover trends across outlet types, item categories and locations. Built a dynamic Power BI dashboard with filters, KPI cards, pie charts,and trend lines to highlight key item types and top performing cities. Performed EDA in Python including null handling and feature engineering.",
    git:"https://github.com/siddharthofficial/Blinkit-Data-Analyst-Project-Using-PowerBi-And-Python",
    islive:true,
    link:"http://www.uthaanfoundation.com/",
    img:img
  },{
    title:"Hospital ER Dashboard",
    content:"Designed an interactive dashboard to analyze patient records across 19 months of emergency room activity. Tracked key metrics like average wait time, satisfaction score, and department level activity. Applied DAX measures to calculate KPIs",
    git:"https://github.com/siddharthofficial/Hospital-Emergency-Room-Dashboard-Power-BI",
    islive:true,
    link:"https://vision-portfolio-gamma.vercel.app/",
    img:img2
  },{
    title:"Ecommerce Customer Spend Forecasting",
    content:"Built a linear regression model to forecast yearly customer spend using behavioral features. Performed EDA and identified mobile app engagement and membership length as key revenue drivers. Delivered actionable insights to improve mobile UX and customer retention strategy.",
    git:"https://github.com/siddharthofficial/Ecommerce-Customer-Spend-Forecasting-Model",
    islive:true,
    link:"https://vision-portfolio-gamma.vercel.app/",
    img:img2
  },
   ]
  return (
    <section className='w-full flex flex-col justify-center items-center'>
    <div id='works' className='w-11/12'>
    <p data-aos="fade-up" className='mt-6 text-4xl text-slate-400 font-semibold'>Works</p>
      <hr data-aos="fade-up" className=' h-n mt-3 bg-slate-400' />
      <div className='w-full flex flex-col justify-center '>
      <p data-aos="fade-up" className='mt-4 font-medium text-3xl'> Here are some of my works.</p>
      <div className='flex  w-full justify-center'>
      <div className='grid mt-10 grid-cols-1 md:grid-cols-2  gap-10  w-max align-middle justify-between items-center'>
    {
      expens.map((work,idx)=>{
        return (
          <Card {...work}></Card>
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

export default Works
