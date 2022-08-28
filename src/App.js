import Notes from "./pages/Notes"
import Create from "./pages/Create"
import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Notes />} />
        <Route path='/create' element={<Create />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
