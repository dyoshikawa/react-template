import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../containers/Home'
import About from '../containers/About'

export default class App extends React.Component<any, any> {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
        </div>
      </BrowserRouter>
    )
  }
}
