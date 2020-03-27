import React from 'react'

const Error = ({ err }) => (
  err ? <div className="danger">
    <p>{ err }</p>
  </div> : null
)

export default Error
