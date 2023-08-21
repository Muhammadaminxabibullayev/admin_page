import './App.css'
import Sidebar from './components/sidebar/Sidebar.jsx'
import Nav from './components/nav/Nav.jsx'
import Management from './components/management/Manage.jsx'
import Students from './components/students/Students.jsx'
function App() {

  return (
    <>
      <div className='admin_page'>
        <div className='side'>
          <Sidebar/>
        </div>
        <div className='main_page'>
          <Nav/>
          <Management/>
          <Students/>
        </div>
      </div>
    </>
  )
}

export default App
