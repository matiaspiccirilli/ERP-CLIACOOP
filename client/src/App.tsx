import './App.css'
import Home from './pages/home/Home'
import Doctors from "./pages/doctors/Doctor"
import Farmers from './pages/farmers/Farmers'
import Activities from "./pages/activities/Activities"
import Calendars from './pages/calendar/Calendar'
import Setting from './pages/settings/Settings'
import Support from './pages/support/Support'
import RootLayout from './pages/layout'
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <RootLayout> </RootLayout>
      <Routes>
        <Route path="/" element={<Home/>}></Route>
        <Route path="/doctors" element={<Doctors/>}></Route>
        <Route path="/farmers" element={<Farmers/>}></Route>
        <Route path="/activities" element={<Activities/>}></Route>
        <Route path="/calendars" element={<Calendars/>}></Route>
        <Route path="/settings" element={<Setting/>}></Route>
        <Route path="/support" element={<Support/>}></Route>
      </Routes>
    </>
  )
}

export default App
