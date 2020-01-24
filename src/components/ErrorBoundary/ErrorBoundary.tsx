import React, { useState } from 'react'

export const ErrorBoundary = ({ children }: any) => {
  const [hasError, setHasError] = useState(false)

  if (hasError) {
    return <h1>Something went wrong!</h1>
  }

  return children
}