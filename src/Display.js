import React from 'react'
import { Container } from 'reactstrap'

import Header from './Header'

const sttrategiesMap = {
  pi: 'Bitcoin Pi',
  'pi-2': 'Bitcoin Pi 2.0',
  one: 'Bitcoin One',
  'one-2': 'Bitcoin One 2.0',
  s: 'Bitcoin S',
  's-2': 'Bitcoin S 2.0',
  's-3': 'Bitcoin S 3.0',
  idx: 'Strategies portfolio A'
}

const keyMap = {
  strategy_description: 'Strategy description',
  date: 'Date'
}

const getReadable = (key) => {
  const keyDesc = keyMap[key]
  if (keyDesc) {
    return sttrategiesMap[key]
  }
  return keyDesc
}

const Display = ({ data }) => (
  <Container className="container">
    <Header />
    <ul>
      { data.map((point, i) => {
        return Object.keys(point).map((key) => {
          return (
            <li key={i}>
              { getReadable(key) }: point[key]
            </li>
          )
        })
      })}
    </ul>
  </Container>
)

export default Display
