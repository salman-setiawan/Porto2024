import React from 'react'

const CardSatu = ({title, desc}) => {
  return (
    <div>
      <div className="flex flex-col p-4 bg-[#252525] rounded-lg">
        <div className="text-white space-y-1">
          <p className="font-medium text-[16px]">
            {title}
          </p>
          <p className="text-[12px]">
            {desc}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardSatu