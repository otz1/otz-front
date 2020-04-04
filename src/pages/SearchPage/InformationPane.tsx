import React from 'react'
import './InformationPane.css'

import { SearchMeasurement as SearchMeasurementModel } from 'model/model'

// a second is 1000 ms.
const SECOND_DURATION = 1000

interface InformationPaneProps {
  measurements: SearchMeasurementModel
}

const InformationPane = ({ measurements }: InformationPaneProps) => {
  const { elapsedTime } = measurements
  
  let elapsed = parseInt(elapsedTime || '0')
  let unit = 'ms'

  // if we were really slow and took more than 3 seconds
  // show that in seconds rather than milliseconds.
  if (elapsed > 3 * SECOND_DURATION) {
    elapsed /= SECOND_DURATION
    unit = 's'
  }

  return (
    <div className='info-pane-container'>
      <p>Search executed in {Math.round(elapsed)}/{unit}.</p>
    </div>
  )
}

export {
  InformationPane
}