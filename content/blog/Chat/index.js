import React from "react"
import CheckIcon from "./check.inline.svg"

const classNameLeft = "bg-white justify-self-start"
const styleLeft = {}
const classNameRight = "justify-self-end"
const styleRight = { background: "#DCF8C6" }

const Read = () => (
  <>
    <CheckIcon className="h-4 inline-block" style={{ color: "#34B7F1" }} />
    <CheckIcon
      className="h-4 inline-block"
      style={{ color: "#34B7F1", marginLeft: "-12px" }}
    />
  </>
)

const Message = ({ side, children, time }) => {
  console.log("CheckIcon", CheckIcon)
  return (
    <div
      className={`rounded px-2 py-1 ${
        side === "left" ? classNameLeft : classNameRight
      }`}
      style={side === "left" ? styleLeft : styleRight}
    >
      {children}
      <span className="text-gray-700 text-xs ml-4">
        {time}
        {side === "right" && <Read />}
      </span>
    </div>
  )
}

function Chat({ messages = [] }) {
  return (
    <div className="font-sans grid gap-2 p-4" style={{ background: "#ECE5DD" }}>
      {Object.entries(messages).map(([date, messagesArray]) => (
        <>
          <span
            className="justify-self-center rounded px-2 py-1 "
            style={{ background: "#E1F2FB" }}
          >
            {date}
          </span>
          {messagesArray.map(({ message, side, time }) => (
            <Message key={message} side={side} time={time}>
              {message}
            </Message>
          ))}
        </>
      ))}
    </div>
  )
}

export default Chat
