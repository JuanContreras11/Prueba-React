import './App.css'
import MiApi from './components/Miapi'

function App() {
 
  return (
    <>
     <div className="container">
      <header>
      <h1 className='my-4'>Últimos Sismos</h1>
      </header>
      <MiApi />
    </div>
    </>
  )
}

export default App
