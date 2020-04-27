import React, { Fragment, useState } from 'react'
import { Button, Label, Input, Form, FormGroup, Container } from 'reactstrap';
import unirest from 'unirest'

import Display from './Display'
import Header from './Header'
import Error from './Error'
const baseUrl = 'https://blueblood-bitcoin-trading-signals.p.rapidapi.com'

const App = () => {
  const [endpoint, setEndpoint] = useState('last-signals')
  const [strategy, setStrategy] = useState('last-signals')
  const [apiKey, setApiKey] = useState(null)
  const [err, setError] = useState(null)
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(false)

  const onSubmit = () => {
    setLoading(true)
    /*
    if (endpoint === 'all-signals') {
      setStrategy('all')
    }
    */

    if (endpoint && strategy && apiKey) {
      const req = unirest('GET', `${baseUrl}/v1.0/${endpoint}/${strategy}`)
      req.headers({
        'x-rapidapi-host': 'blueblood-bitcoin-trading-signals.p.rapidapi.com',
        'x-rapidapi-key': apiKey
      })
      req.end((res) => {
        if (res.error) setError(res.error.message)
        setData(res.body)
      })
    } else {
      setLoading(false)
      setError('Missing parameters')
    }
  }

  return (
    <Container className="container">
      { !data ? <Fragment>
        <Header />
        <Form>
          <FormGroup>
            <Label for="endpoint">Endpoint</Label>
            <Input type="select" name="selectMulti" id="endpoint" onChange={(e) => setEndpoint(e.target.value)}>
              { /* <option value="signals">Signals</option> */ }
              <option value="info">All Signals</option>
            </Input>
          </FormGroup>
          { endpoint === 'signals' ? <FormGroup>
            <Label for="strategy">Strategy</Label>
            <Input type="select" name="strategy" id="strategy" onChange={(e) => setStrategy(e.target.value)}>
              <option value="one">Bitcoin One</option>
              <option value="one-2">Bitcoin One 2.0</option>
              <option value="pi">Bitcoin Pi</option>
              <option value="pi-2">Bitcoin Pi 2.0</option>
              <option value="s">Bitcoin S</option>
              <option value="s-2">Bitcoin S 2.0</option>
              <option value="s-3">Bitcoin S 3.0</option>
              <option value="f">Bitcoin F</option>
              <option value="index">Portfolio</option>
            </Input>
          </FormGroup> : null }
          <FormGroup>
            <Label for="apiKey">RapidAPI Key*</Label>
            <Input type="password" name="apiKey" id="apiKey" placeholder="RapidAPI key" onChange={(e) => setApiKey(e.target.value)} />
          </FormGroup>
          <Error err={err} />
          <p>* If you don't have API key, <a href="https://rapidapi.com/talaikis.tadas/api/blueblood-bitcoin-trading-signals/pricing">get it from RapidAPI</a>.</p>
          { loading ? null : <Button onClick={() => onSubmit()}>Submit</Button> }
        </Form>
      </Fragment> : <Display data={data} /> }
    </Container>
  )
}

export default App
