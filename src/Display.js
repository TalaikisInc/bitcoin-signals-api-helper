import React from 'react'
import { Container } from 'reactstrap'

const Display = ({ data }) => (
  <Container className="container">
    <ul>
      { data.map((point, i) => {
        return Object.keys(point).map((key) => {
          return (
            <li key={i}>
              `${key}: ${point[key]}`
            </li>
          )
        })
      })}
    </ul>
  </Container>
)

export default Display
