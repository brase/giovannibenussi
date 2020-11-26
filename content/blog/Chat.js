import React from "react"
import RealignLeftact from "react"

const classNameLeft = "bg-white justify-self-start"
const styleLeft = {}
const classNameRight = "justify-self-end"
const styleRight = { background: "#DCF8C6" }

const Message = ({ side, children, time }) => {
  return (
    <div
      className={`font-sans rounded px-2 py-1 ${
        side === "left" ? classNameLeft : classNameRight
      }`}
      style={side === "left" ? styleLeft : styleRight}
    >
      {children}
      <span className="text-gray-600 text-xs ml-4">{time}</span>
    </div>
  )
}

function Chat({ messages = [] }) {
  return (
    <div className="grid gap-2 p-4" style={{ background: "#ECE5DD" }}>
      {messages.map(({ message, side, time }) => (
        <Message side={side} time={time}>
          {message}
        </Message>
      ))}
    </div>
  )
}

export default Chat
