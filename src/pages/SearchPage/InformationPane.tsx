import React from 'react'

import { SearchMeasurement as SearchMeasurementModel } from 'model/model'

interface InformationPaneProps {
  measurements: SearchMeasurementModel
}

const InformationPane = ({ measurements }: InformationPaneProps) => {
  const { elapsedTime, resultCount } = measurements
  return (
    <p>Generated {resultCount} results in {elapsedTime}/ms.</p>
  )
}

export {
  InformationPane
}