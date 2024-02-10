import { Routes, Route  } from 'react-router-dom'

import Homebook from './pages/Homebook'
import CreateBook from './pages/CreateBook'
import ShowBook from './pages/ShowBook'
import Editbook from './pages/Editbook'
import DeleteBook from './pages/DeleteBook'


import SideBar from './components/SideBar'
import Header from './components/Header'
import DataValue from './components/DataValue'

function App() {
  
  return (
    
    <div className='w-screen h-screen bg-slate-100 overflow-hidden'>
      <Header/>
      <div className='flex flex-row'>
        <SideBar />
        <div className=' flex-1'>
          <Routes>
            <Route path='/' element={<Homebook/>}></Route>
            <Route path='/book/create' element={<CreateBook/>}></Route>
            <Route path='/book/details/:id' element={<ShowBook/>}></Route>
            <Route path='/book/edit/:id' element={<Editbook/>}></Route>
            <Route path='/book/delete/:id' element={<DeleteBook/>}></Route>
          </Routes>
        </div>
      </div>
    </div>

    
  )
}

export default App


















