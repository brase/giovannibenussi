import React, { useRef } from "react"

function AttachingToDomExample() {
  const inputRef = useRef()

  return (
    <div>
      Name:{" "}
      <input className="rounded border-2 border-gray-300" ref={inputRef} />
    </div>
  )
}

export default AttachingToDomExample
