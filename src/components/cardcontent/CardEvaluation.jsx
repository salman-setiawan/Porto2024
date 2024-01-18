import React from 'react'

const CardEvaluation = ({avatar, metric1, metric2, result1, result2, title1, title2, title3, title4, title5, desc1, desc2, desc3, desc4, desc5}) => {
  return (
    <div>
      <div className="flex flex-col h-full p-4 bg-[#252525] rounded-lg space-y-3">
        {avatar &&        
          <img src={avatar} alt="" className="w-[40px] h-[40px] object-cover rounded-md" />
        }
        {title1 &&        
          <div>
            {title1 &&
              <p className="font-medium text-[14px] text-white">
                {title1}
              </p>
            }
            {desc1 &&          
              <p className="text-[12px] text-[#9E9E9E]">
                {desc1}
              </p>
            }
          </div>
        }
        <div className="flex flex-col spac-y-1">
          {metric1 &&        
            <div className='flex justify-between'>
              {metric1 &&
                <p className="text-[12px] text-[#9E9E9E]">
                  {metric1}
                </p>
              }
              {result1 &&          
                <p className="text-[12px] text-white">
                  {result1}
                </p>
              }
            </div>
          }
          {metric2 &&        
            <div className='flex justify-between'>
              {metric2 &&
                <p className="text-[12px] text-[#9E9E9E]">
                  {metric2}
                </p>
              }
              {result2 &&          
                <p className="text-[12px] text-white">
                  {result2}
                </p>
              }
            </div>
          }
        </div>
        {title2 && desc2 &&        
          <div>
            {title2 &&
              <p className="font-medium text-[14px] text-white">
                {title2}
              </p>
            }
            {desc2 &&          
              <p className="text-[12px] text-[#9E9E9E]">
                {desc2}
              </p>
            }
          </div>
        }
        {title3 && desc3 &&        
          <div>
            {title3 &&
              <p className="font-medium text-[14px] text-white">
                {title3}
              </p>
            }
            {desc3 &&          
              <p className="text-[12px] text-[#9E9E9E]">
                {desc3}
              </p>
            }
          </div>
        }
        {title4 && desc4 &&        
          <div>
            {title4 &&
              <p className="font-medium text-[14px] text-white">
                {title4}
              </p>
            }
            {desc4 &&          
              <p className="text-[12px] text-[#9E9E9E]">
                {desc4}
              </p>
            }
          </div>
        }
        {title5 && desc5 &&        
          <div>
            {title5 &&
              <p className="font-medium text-[14px] text-white">
                {title5}
              </p>
            }
            {desc5 &&          
              <p className="text-[12px] text-[#9E9E9E]">
                {desc5}
              </p>
            }
          </div>
        }
      </div>
    </div>
  )
}

export default CardEvaluation