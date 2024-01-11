import React from 'react'

const CardEmpat = () => {
  return (
    <div>
      <div className="flex flex-col p-4 bg-[#252525] rounded-lg">
        <div className="text-white space-y-2">
          <p className="font-semibold text-[16px]">
            {title}
          </p>
          <div className="">
            <iframe style="border-radius:12px" src="https://open.spotify.com/embed/playlist/5fplYr3ZzQv9lvXfIrENAz?utm_source=generator" width="100%" height="352" frameBorder="0" allowfullscreen="" allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" loading="lazy"></iframe>
          </div>
        </div>
      </div>
    </div>
  )
}

export default CardEmpat