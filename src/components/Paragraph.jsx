import React from 'react'

const Paragraph = ({title, desc1, desc2, desc3, desc4, disclaimer}) => {
  return (
    <div>
      <div className="flex flex-col space-y-2 px-0.5">
        {title &&        
          <p className="text-[20px] font-semibold text-white">
            {title}
          </p>
        }
        {desc1 &&        
          <p className="text-[16px] text-[#d3d3d3] text-justify">
            {desc1}
          </p>
        }
        {desc2 &&        
          <p className="text-[16px] text-[#d3d3d3] text-justify">
            {desc2}
          </p>
        }
        {desc3 &&        
          <p className="text-[16px] text-[#d3d3d3] text-justify">
            {desc3}
          </p>
        }
        {desc4 &&        
          <p className="text-[16px] text-[#d3d3d3] text-justify">
            {desc4}
          </p>
        }
        {disclaimer &&        
          <p className="text-[16px] text-[#FF8F8F] text-justify">
            {disclaimer}
          </p>
        }
      </div>
    </div>
  )
}

export default Paragraph