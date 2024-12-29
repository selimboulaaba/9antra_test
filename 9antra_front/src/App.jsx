import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom'
import './App.css'
import Home from './pages/Home'
import AddCourse from './pages/dashboard/AddCourse'
import Courses from './pages/dashboard/Courses'
import EditCourse from './pages/dashboard/EditCourse'
import Admin from './pages/dashboard/Admin'
import { Bounce, ToastContainer } from 'react-toastify'

function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path='' element={<Navigate to='/home' />} />
        <Route path='/home' element={<Home />} />
        <Route path='/admin' element={<Admin />}>
          <Route path='' element={<Courses />} />
          <Route path='addCourse' element={<AddCourse />} />
          <Route path=':id' element={<EditCourse />} />
        </Route>
      </Routes>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </BrowserRouter>
  )
}

export default App
