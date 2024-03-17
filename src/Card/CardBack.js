import React from 'react'
import LinkButton from '../LinkButton'
import CardBottom from './CardBottom'

export default function CardBack(props) {
  return (
    <div className='cardback'>
      <div>{props.content}</div>
      <CardBottom/>
    </div>
  )
}
