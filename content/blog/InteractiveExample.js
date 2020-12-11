import React from "react"
import Alert from "./Alert"

function InteractiveExample({ children }) {
  return (
    <Alert type="info" title="Interactive Example">
      {children}
    </Alert>
  )
}

export default InteractiveExample
