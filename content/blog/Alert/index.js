import React from "react"
import InformationCircle from "./information-circle.inline.svg"

const icons = {
  info: InformationCircle,
}

function Alert({ children, title = "", type }) {
  const Icon = icons[type]

  return (
    <div className="bg-blue-200 p-4 rounded font-sans mt-2 mb-2">
      <h2 className="font-bold text-base m-0 mb-2 text-indigo-700">
        {Icon && <Icon className="h-4 inline" />} {title}
      </h2>
      <p className="m-0 text-blue-900">{children}</p>
    </div>
  )
}

export default Alert
