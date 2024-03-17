import React, { useState } from 'react'
import CardFront from './CardFront'
import CardBack from './CardBack'

export default function Card(props) {
    const [isFlipped, Flip] = useState(true);
    return (
        <div className={`center third card ${isFlipped ? "" : "card_rotate"}`} onClick={() => { Flip(!isFlipped) }} >
            <CardFront title={props.title}></CardFront>
            <CardBack content={props.content}></CardBack>
        </div>
  )
}
