import React, { useState } from "react"
import InformationCircle from "./information-circle.inline.svg"
import { useSpring, animated } from "react-spring"
import useInterval from "@use-it/interval"

const icons = {
  info: InformationCircle,
}

function Alert({ children, title = "", type }) {
  const [top, setTop] = useState(false)
  useInterval(() => setTop(t => !t), top ? 300 : 1000)
  const props = useSpring({
    config: {
      mass: 2,
    },
    top: top ? -6 : -1,
  })
  const Icon = icons[type]

  return (
    <div className="bg-blue-200 p-4 rounded font-sans mt-2 mb-2">
      <h2 className="font-bold text-base m-0 mb-2 text-indigo-700">
        {Icon && (
          <animated.div style={props} className="inline relative">
            <Icon className="h-4 inline mr-1" />
          </animated.div>
        )}
        {title}
      </h2>
      <p className="m-0 text-blue-900">{children}</p>
    </div>
  )
}

export default Alert
