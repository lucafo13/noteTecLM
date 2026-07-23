import { Routes, Route, Navigate, useNavigate} from 'react-router-dom'

import Home from './pages/home'
import { Toaster } from '#components/ui/sonner'
import Login from './pages/login'
import Cadastro from './pages/Cadastro'

 const App = () => {
  const navigate = useNavigate()
  return(<>
    <Routes>
      <Route path='/' element={<Navigate to={'/Cadastro'} replace/>} />
      <Route path='/home' element={<Home />}/>
      <Route path='/login' element={<Login/>}/>
      <Route path='/Cadastro' element={<Cadastro/>}/>
      
    </Routes>
    <Toaster richColors position="top-right"/>
  </>
    

  )
}

export default App