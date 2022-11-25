import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/header.jsx'
import Home from './components/home.jsx'

function App(){
    return(
        <Router>
          <Header></Header>
          <Home></Home>
          <Routes>
            <Route></Route>
          </Routes>
        </Router>
    )
}

export default App