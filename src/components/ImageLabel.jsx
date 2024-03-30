import React from 'react'
import ChipShowcase from './ChipShowcase'

const ImageLabel = ({title, desc1, desc2, desc3, chipdesc}) => {
  return (
    <div className="">
      <div className='md:hidden fixed bottom-0 pb-[100px] w-full px-6'>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[20px] integral mb-1.5">{title}</p>
            <p className='text-[#B5B5B5] text-[14px]'>{desc1}</p>
            <p className='text-[#B5B5B5] text-[14px]'>{desc2}</p>
          </div>
          {chipdesc &&
            <ChipShowcase text={chipdesc} bg='bg-[#30FFFC]' />
          }
        </div>
      </div>
      <div className="hidden md:block fixed bottom-0 pb-[110px] w-full px-24">
        <div className="flex flex-col gap-y-1 ">
          <p className="text-[48px] integral">{title}</p>
          <div className='flex flex-col w-fit pt-2'>
            <p className='text-[#B5B5B5] text-[16px]'>{desc1}</p>
            <p className='text-[#B5B5B5] text-[16px]'>{desc2}</p>
            <p className='w-[640px] text-[16px] mt-2'>{desc3}</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageLabel