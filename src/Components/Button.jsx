import React from 'react'

const Button = ({bgColor, color, text, borderRadius,size}) => {
  return (
   <button className={`text-${size} p-3 hover:drop-shadow-xl`} style={{color: color, backgroundColor: bgColor, borderRadius: borderRadius}}>
    {text}
   </button>
  )
}

export default Button