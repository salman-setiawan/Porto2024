import React from 'react'
import Chips from '../Chips'

const CardDua = ({title, img, chip1, chip2, chip3, chip4, bg1, bg2, bg3, bg4}) => {
  return (
    <div>
      <div className="flex flex-col p-4 bg-[#252525] rounded-lg">
        <div className="text-white space-y-2">
          <p className="font-semibold text-[16px]">
            {title}
          </p>
          <div className="flex flex-wrap gap-2">
            <Chips text={chip1} bg={bg1} />
            <Chips text={chip2} bg={bg2} />
            <Chips text={chip3} bg={bg3} />
            <Chips text={chip4} bg={bg4} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardDua