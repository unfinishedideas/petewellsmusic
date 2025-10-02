import './App.css'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="w-full">
      <Navbar/>
      <div className="pt-20"> 
        <p>This is some text</p>
        <a>This is a link</a>
      </div>
    </div>
  )
}

export default App
