import React from 'react'

const Quote = ({text, author}) => {
  return (
    <div>
      <div className="flex">
        <div className="bg-[#A6D474] w-[4px]"></div>
        <div className="bg-[#A6D474] w-full bg-opacity-[8%] p-4">
          <div className="text-[16px] italic pl-2">{text}</div>
          {author &&
            <p className="text-[16px]">{author}</p>
          }
        </div>
      </div>
    </div>
  )
}

export default Quote