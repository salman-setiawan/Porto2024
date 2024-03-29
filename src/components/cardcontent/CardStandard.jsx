import React from 'react'

const CardStandard = ({avatar, title1, title2, title3, title4, title5, desc1, desc2, desc3, desc4, desc5}) => {
  return (
    <div>
      <div className="min-w-[310px] w-full flex flex-col h-full px-4 pt-4 pb-5 bg-[#7070ca] bg-opacity-10 rounded-lg space-y-3">
        {avatar &&        
          <img src={avatar} alt="" className="w-[40px] h-[40px] object-cover rounded-md" />
        }
        {desc1 &&        
          <div>
            {title1 &&
              <div className="font-medium text-[14px] text-white">
                {title1}
              </div>
            }
            {desc1 &&          
              <div className="text-[14px] text-[#B5B5B5]">
                {desc1}
              </div>
            }
          </div>
        }
        {desc2 &&        
          <div>
            {title2 &&
              <div className="font-medium text-[14px] text-white">
                {title2}
              </div>
            }
            {desc2 &&          
              <div className="text-[14px] text-[#9E9E9E]">
                {desc2}
              </div>
            }
          </div>
        }
        {desc3 &&        
          <div>
            {title3 &&
              <div className="font-medium text-[14px] text-white">
                {title3}
              </div>
            }
            {desc3 &&          
              <div className="text-[14px] text-[#9E9E9E]">
                {desc3}
              </div>
            }
          </div>
        }
        {desc4 &&        
          <div>
            {title4 &&
              <div className="font-medium text-[14px] text-white">
                {title4}
              </div>
            }
            {desc4 &&          
              <div className="text-[14px] text-[#9E9E9E]">
                {desc4}
              </div>
            }
          </div>
        }
        {desc5 &&        
          <div>
            {title5 &&
              <div className="font-medium text-[14px] text-white">
                {title5}
              </div>
            }
            {desc5 &&          
              <div className="text-[14px] text-[#9E9E9E]">
                {desc5}
              </div>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default CardStandard