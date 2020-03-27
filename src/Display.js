import React, { Fragment } from 'react'
import { Container } from 'reactstrap'

import Header from './Header'

const strategiesMap = {
  pi: 'Bitcoin Pi',
  'pi-2': 'Bitcoin Pi 2.0',
  one: 'Bitcoin One',
  'one-2': 'Bitcoin One 2.0',
  s: 'Bitcoin S',
  f: 'Bitcoin F',
  's-2': 'Bitcoin S 2.0',
  's-3': 'Bitcoin S 3.0',
  idx: 'Strategies portfolio A'
}

const keyMap = {
  strategy_description: 'Strategy description',
  date: 'Date',
}

const eachStrategy = (point, i) => {
  return Object.keys(point).map((key, k) => {
    return (
      <li key={`${i}-${k}`}>
        { getReadable(key, point) }{ key !== 'strategy_description' ? <Fragment>: { point[key] }</Fragment> : null }
      </li>
    )
  })
}

const getReadable = (key, point) => {
  const keyDesc = keyMap[key]
  if (keyDesc) {
    if (key === 'strategy_description') {
      return <a href={point[key]}>{ keyDesc }</a>
    }
    return keyDesc
  }
  return `${strategiesMap[key]} signal`
}

const Display = ({ data }) => (
  <Container className="container">
    <Header />
    { data.map((point, i) => {
      return (
        <ul key={i}>
          { eachStrategy(point, i) }
        </ul>
      )
    })}
  </Container>
)

export default Display
