import React from 'react'

import Nav from './Nav'
import Title from './Title'

function Header () {
  return (
    <header>
      <Nav />
      <div className="text-center">
        <Title />
      </div>
    </header>
  )
}

export default Header
