import { useState } from 'react'
import Header from './components/Header/Header' 
import LandingPage from './Pages/LandingPage/LandingPage'
import Footer from './components/Footer/Footer'
import Register from './Pages/Register'
import Post from './Pages/Post'
import FormControl from './Pages/FormControl'
import { Route, Routes } from 'react-router-dom'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Routes>
        <Route path='/'element={ <LandingPage />} />
        <Route path='/register'element={ <Register />} />
        <Route path='/formcontrol'element={ <FormControl />} />
        <Route path='/post'element={ <Post />} />

      </Routes>
      <Footer />
    </>
  )
}

export default App
