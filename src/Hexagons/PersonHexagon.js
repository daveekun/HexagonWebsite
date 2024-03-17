import React from 'react'
import hexagon from '../hexagon.png'
import jordan from './Untitled-1.png'
export default function PersonHexagon(props) {
    return (
        <div className='personhexagon'>
            <img className="hexagonbackground" src={ hexagon } />
            <p className='persontitle'>{ props.title }</p>
            <img className='portrait' src={ props.src } />
        </div>
    )
}
