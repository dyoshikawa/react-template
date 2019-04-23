import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from '../containers/Home'
import About from '../containers/About'

const App: React.FC<void> = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
)

export default App
