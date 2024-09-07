import React from 'react'
import CV from '../../assets/cv.pdf'

const CTA = () => {
  return (
    <div className='cta'>
        <a href={CV} target="_blank" className='btn'>Resume</a>
        <a href={CV} download target="_blank" className='btn btn-primary'>Download CV</a>
    </div>
  )
}

export default CTA