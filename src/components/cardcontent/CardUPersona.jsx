import React from 'react'

const CardUPersona = ({title1, title2, title3, desc1, desc2, desc3}) => {
  return (
    <div>
      <div className="flex flex-col p-4 bg-[#252525] rounded-lg space-y-3">
        <img src="/assets/avatar.png" alt="" className="w-[40px] h-[40px] object-cover rounded-md" />
        <div>
          <p className="font-medium text-[14px] text-white">
            {title1}
          </p>
          <p className="text-[12px] text-[#9E9E9E]">
            {desc1}
          </p>
        </div>
        <div>
          <p className="font-medium text-[14px] text-white">
            {title2}
          </p>
          <p className="text-[12px] text-[#9E9E9E]">
            {desc2}
          </p>
        </div>
        <div>
          <p className="font-medium text-[14px] text-white">
            {title3}
          </p>
          <p className="text-[12px] text-[#9E9E9E]">
            {desc3}
          </p>
        </div>
      </div>
    </div>
  )
}

export default CardUPersona