import './App.css'
import Home from './pages/Home'
import RootLayout from './pages/layout'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Home/>
      <RootLayout> </RootLayout>
      <Routes>
        <Route></Route>
      </Routes>
    </>
  )
}

export default App
