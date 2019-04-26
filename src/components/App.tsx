import * as React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import Counter from '~/containers/Counter'
import Tasks from '~/containers/Tasks'
import Api from '~/containers/Api'

const App: React.FC<void> = () => (
  <BrowserRouter>
    <div>
      <Route exact path="/" component={Counter} />
      <Route path="/tasks" component={Tasks} />
      <Route path="/api" component={Api} />
    </div>
  </BrowserRouter>
)

export default App
