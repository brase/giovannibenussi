import React, { useState } from "react"
import styles from "./styles.module.css"
import OutsideButton from "../Buttons/OutsideVariable"
import StateButton from "../Buttons/StateButton"
import RefButton from "../Buttons/RefButton"
const xTimes = (x, callback) => [...Array(x)].map(callback)

export default function App({ refs = 0, state = 0, variable = 0 }) {
  const [dummy, setDummy] = useState(0)

  return (
    <div className={styles.namedGrid}>
      <strong>Type</strong>
      <strong>Result</strong>
      {xTimes(variable, i => (
        <React.Fragment key={i}>
          <span>outside variable</span>
          <OutsideButton />
        </React.Fragment>
      ))}
      {xTimes(state, i => (
        <React.Fragment key={i}>
          <span>state</span>
          <StateButton />
        </React.Fragment>
      ))}
      {xTimes(refs, i => (
        <React.Fragment key={i}>
          <span>ref</span>
          <RefButton />
        </React.Fragment>
      ))}
      <button
        className="btn btn-purple col-span-2"
        onClick={() => setDummy(dummy + 1)}
      >
        Re-render
      </button>
    </div>
  )
}
