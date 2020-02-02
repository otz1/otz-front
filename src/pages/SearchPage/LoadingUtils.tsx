import React from 'react'
import './LoadingSpinner.css'

export const LoadingSpinner = () => <div data-testid='loading-spinner' className='loading-spinner'> </div>

export const LoadingContainer = () => (
  <div className='loading-container'>
    <LoadingSpinner />
  </div>
)