import React from 'react'
import ChipShowcase from './ChipShowcase'

const ImageLabel = ({title, desc1, desc2, chipdesc}) => {
  return (
    <div className="fixed bottom-0 pb-[100px] w-full px-6">
      <div className='md:hidden'>
        <div className="flex justify-between items-center">
          <div>
            <p className="text-[14px] font-semibold">{title}</p>
            <p className='text-[#B5B5B5] text-[14px]'>{desc1}</p>
            <p className='text-[#B5B5B5] text-[14px]'>{desc2}</p>
          </div>
          {chipdesc &&
            <ChipShowcase text={chipdesc} bg='bg-[#30FFFC]' />
          }
        </div>
      </div>
      <div className="hidden md:block">
        <div className="flex justify-center">
          <div className="flex flex-col gap-y-1 justify-center items-center">
            <div className="flex">
              <p className="text-[16px] pt-[2px] font-semibold">{title}</p>
              {chipdesc &&
                <ChipShowcase text={chipdesc} bg='bg-[#30FFFC]' />
              }
            </div>
            <div className='flex flex-col w-fit items-center'>
              <p className='text-[#B5B5B5] text-[14px]'>{desc1}</p>
              <p className='text-[#B5B5B5] text-[14px]'>{desc2}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ImageLabel