import React from 'react'
import ChipProfile from '../ChipProfile'

const CardProfile = ({title, desc, img, chip1, chip2, chip3, chip4, chip5, bg1, bg2, bg3, bg4, bg5}) => {
  return (
    <div>
      <div className="text-white space-y-1.5">
        {title &&        
          <p className="font-semibold text-[16px]">
            {title}
          </p>
        }
        {desc &&          
          <p className="text-[14px]">
            {desc}
          </p>
        }
        {chip1 && 
          <div className="flex flex-wrap gap-y-2 pt-1.5">
            <ChipProfile text={chip1} bg={bg1} />
            <ChipProfile text={chip2} bg={bg2} />
            <ChipProfile text={chip3} bg={bg3} />
            <ChipProfile text={chip4} bg={bg4} />
            <ChipProfile text={chip5} bg={bg5} />
          </div>
        }
        {img &&
          <img src={img} alt="" className="rounded-md w-full h-52 object-cover" />
        }
      </div>
      {/* <div className="flex flex-col p-4 bg-[#252525] rounded-lg">
      </div> */}
    </div>
  )
}

export default CardProfile