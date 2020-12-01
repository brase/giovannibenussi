import React from 'react'

function Button ({ className='' }) {
  return <button className={ `border rounded bg-pink-500 text-white py-2 px-4 ${className}` }>I&apos;m just a simple button</button>
}

export default Button
