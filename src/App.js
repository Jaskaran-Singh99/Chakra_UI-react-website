import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Header from './components/header.jsx'
import Home from './components/home.jsx'
import Footer from './components/footer.jsx'
import Videos from './components/Videos'
import Upload from './components/upload.jsx'

function App(){
    return(
        <Router>
          <Header></Header>
          
          <Routes>
            <Route path={'/'} element={<Home/>}></Route>
            <Route exact path='/videos' element={<Videos/>}></Route>
            <Route exact path='/upload' element={<Upload/>}></Route>

          </Routes>
          <Footer></Footer>
        </Router>
    )
}

export default App