import React from 'react'
import hexagon from '../hexagon.png'
import jordan from './Untitled-1.png'
export default function PersonHexagon() {
    return (
        <div className='personhexagon'>
            <img className="hexagonbackground" src={ hexagon } />
            <p className='persontitle'>The IT guy</p>
            <img className='portrait' src={ jordan } />
        </div>
    )
}
