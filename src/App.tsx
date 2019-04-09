import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Home from './components/Home'
import About from './components/About'

type Props = {}

const App: React.FC<Props> = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Home} />
      <Route path="/about" component={About} />
    </div>
  </BrowserRouter>
)

export default App
