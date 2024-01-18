import React from 'react'

const Paragraph = ({title, desc1, desc2, desc3, desc4, disclaimer}) => {
  return (
    <div>
      <div className="flex flex-col space-y-2 px-0.5">
        {title &&        
          <p className="text-[16px] font-semibold text-white">
            {title}
          </p>
        }
        {desc1 &&        
          <p className="text-[14px] text-[#d3d3d3]">
            {desc1}
          </p>
        }
        {desc2 &&        
          <p className="text-[14px] text-[#d3d3d3]">
            {desc2}
          </p>
        }
        {desc3 &&        
          <p className="text-[14px] text-[#d3d3d3]">
            {desc3}
          </p>
        }
        {desc4 &&        
          <p className="text-[14px] text-[#d3d3d3]">
            {desc4}
          </p>
        }
        {disclaimer &&        
          <p className="text-[14px] text-[#FF8F8F]">
            {disclaimer}
          </p>
        }
      </div>
    </div>
  )
}

export default Paragraph