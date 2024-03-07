import React from 'react'

const BGVid = () => {
  return (
		<div>
			<video autoPlay muted loop className='absolute min-h-screen max-h-full w-full object-cover opacity-[5%]'>
					<source src="/assets/bio/sea.webm" type="video/mp4" />
			</video>
		</div>
  )
}

export default BGVid