import React from 'react'

const CardTiga = ({title, img}) => {
  return (
    <div>
      <div className="flex flex-col p-4 bg-[#252525] rounded-lg">
        <div className="text-white space-y-2">
          <p className="font-semibold text-[16px]">
            {title}
          </p>
          <img src={img} alt="" className="rounded-md w-full h-52 object-cover" />
        </div>
      </div>
    </div>
  )
}

export default CardTiga