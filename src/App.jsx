import { SearchBarContainer } from '../lib/main'
import './App.css'

function App() {
  return (
    <div>
      <SearchBarContainer getSmartSeachState={(state)=>console.log(state.counterState)}/>
    </div>
  )
}

export default App
