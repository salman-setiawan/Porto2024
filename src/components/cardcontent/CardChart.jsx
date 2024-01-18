import React from 'react'

const CardChart = ({metric1, metric2, metric3, metric4, metric5, metric6, metric7, result1, result2, result3, result4, result5, result6, result7, title1, desc1, desc2}) => {
  return (
    <div>
      <div className="flex flex-col h-full p-4 bg-[#252525] rounded-lg space-y-3">
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
            <div className='grid grid-cols-2'>
              {metric1 &&
                <p className="text-[12px] text-[#9E9E9E]">
                  {metric1}
                </p>
              }
              {result1 &&          
                <p className="text-[12px] text-white flex w-full justify-end">
                  {result1}
                </p>
              }
            </div>
          }
          {metric2 &&        
            <div className='grid grid-cols-2'>
              {metric2 &&
                <p className="text-[12px] text-[#9E9E9E]">
                  {metric2}
                </p>
              }
              {result2 &&          
                <p className="text-[12px] text-white flex w-full justify-end">
                  {result2}
                </p>
              }
            </div>
          }
          {metric3 &&        
            <div className='grid grid-cols-2'>
              {metric3 &&
                <p className="text-[12px] text-[#9E9E9E]">
                  {metric3}
                </p>
              }
              {result3 &&          
                <p className="text-[12px] text-white flex w-full justify-end">
                  {result3}
                </p>
              }
            </div>
          }
          {metric4 &&        
            <div className='grid grid-cols-2'>
              {metric4 &&
                <p className="text-[12px] text-[#9E9E9E]">
                  {metric4}
                </p>
              }
              {result4 &&          
                <p className="text-[12px] text-white flex w-full justify-end">
                  {result4}
                </p>
              }
            </div>
          }
          {metric5 &&        
            <div className='grid grid-cols-2'>
              {metric5 &&
                <p className="text-[12px] text-[#9E9E9E]">
                  {metric5}
                </p>
              }
              {result5 &&          
                <p className="text-[12px] text-white flex w-full justify-end">
                  {result5}
                </p>
              }
            </div>
          }
          {metric6 &&        
            <div className='grid grid-cols-2'>
              {metric6 &&
                <p className="text-[12px] text-[#9E9E9E]">
                  {metric6}
                </p>
              }
              {result6 &&          
                <p className="text-[12px] text-white flex w-full justify-end">
                  {result6}
                </p>
              }
            </div>
          }
          {metric7 &&        
            <div className='grid grid-cols-2'>
              {metric7 &&
                <p className="text-[12px] text-[#9E9E9E]">
                  {metric7}
                </p>
              }
              {result7 &&          
                <p className="text-[12px] text-white flex w-full justify-end">
                  {result7}
                </p>
              }
            </div>
          }
        </div>
        {desc2 &&                 
          <p className="text-[12px] text-[#9E9E9E]">
            {desc2}
          </p>
        }
      </div>
    </div>
  )
}

export default CardChart