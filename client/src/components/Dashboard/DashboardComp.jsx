import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { summeryRequest } from '../../APIrequest/APIrequest'
import './Summery.css'

const DashboardComp = () => {
  useEffect(()=>{
    summeryRequest()
  },[])
  const summeryList = useSelector((state)=>state.summery.value)
  return (
    <div className='summeryList'>
      {summeryList.map((item,i)=>(
        <div key={i.toString()} className="summeryitem">
            <h3>{item._id}</h3>
            <h4>{item.sum}</h4>
        </div>
      ))}
    </div>
  )
}

export default DashboardComp