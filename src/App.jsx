import { Route, Routes } from 'react-router-dom'
import { Layout } from './comoponents/Layout'
import { Home } from './comoponents/Home'
import { About } from './comoponents/About'
import './App.scss'
import { Contact } from './comoponents/Contact'



function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Layout/>}>
          <Route index element={<Home/>}/>
          <Route path='/about' element={<About/>}/>
          <Route path='/contact' element={<Contact/>}/>
        </Route>
      </Routes>
    </>
  )
}

export default App
