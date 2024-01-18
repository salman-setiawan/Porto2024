import React from 'react'
import { Link } from 'react-router-dom'


const DocumentLink = ({url, icon, text}) => {
  return (
    <div>
      <div className="flex">
        <Link to={url} target="_blank" rel="noopener noreferrer" className='flex space-x-1.5'>      
            <img src={icon} alt="" className="w-[20px]" />
            <p className="text-[14px] underline underline-offset-2">{text}</p>
        </Link>
      </div>
    </div>
  )
}

export default DocumentLink