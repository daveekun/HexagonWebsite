import React from 'react'
import CardTitle from './CardTitle'

export default function CardFront(props) {
  return (
    <div className='cardfront'>
      <CardTitle title={props.title} />
    </div>
  )
}
