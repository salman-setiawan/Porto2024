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
              <p className="font-medium text-[14px] text-white">
                {title1}
              </p>
            }
            {desc1 &&          
              <p className="text-[14px] text-[#B5B5B5]">
                {desc1}
              </p>
            }
          </div>
        }
        {desc2 &&        
          <div>
            {title2 &&
              <p className="font-medium text-[14px] text-white">
                {title2}
              </p>
            }
            {desc2 &&          
              <p className="text-[14px] text-[#9E9E9E]">
                {desc2}
              </p>
            }
          </div>
        }
        {desc3 &&        
          <div>
            {title3 &&
              <p className="font-medium text-[14px] text-white">
                {title3}
              </p>
            }
            {desc3 &&          
              <p className="text-[14px] text-[#9E9E9E]">
                {desc3}
              </p>
            }
          </div>
        }
        {desc4 &&        
          <div>
            {title4 &&
              <p className="font-medium text-[14px] text-white">
                {title4}
              </p>
            }
            {desc4 &&          
              <p className="text-[14px] text-[#9E9E9E]">
                {desc4}
              </p>
            }
          </div>
        }
        {desc5 &&        
          <div>
            {title5 &&
              <p className="font-medium text-[14px] text-white">
                {title5}
              </p>
            }
            {desc5 &&          
              <p className="text-[14px] text-[#9E9E9E]">
                {desc5}
              </p>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default CardStandard