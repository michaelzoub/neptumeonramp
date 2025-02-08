import { BrowserRouter as Router, Route, Routes } from "react-router-dom"
import './App.css'
import LandingPage from './components/landingPage'

function App() {

  return (
    <Router>
      <Routes>
        <Route element={<LandingPage></LandingPage>} path="/"></Route>
      </Routes>
    </Router>
  )
}

export default App
