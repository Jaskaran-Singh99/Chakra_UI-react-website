import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Header from './components/header.jsx'

function App(){
    return(
        <Router>
          <Header></Header>
          <Routes>
            <Route></Route>
          </Routes>
        </Router>
    )
}

export default App