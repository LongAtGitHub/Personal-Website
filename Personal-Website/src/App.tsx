import NavBar1 from "./Components/NavBar1"
import Home from "./Components/Home"
import About from "./Components/About"
import { MyColors } from "./Components/MyColors"
function App() {
  return (
  <div style={{backgroundColor: MyColors.gray200}}>
      <NavBar1/> 
      <div style={{height:"10vh", backgroundColor: MyColors.lightWhite}}> {"\u00A0"}</div> 
      <div><Home/></div>
      
      
  </div>
  )
}

export default App
