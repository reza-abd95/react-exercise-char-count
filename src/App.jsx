import { useState } from "react"
import Input from "./components/Input";
import Paragraph from "./components/Paragraph";


function App() {

  const [val , setVal] = useState("") ;
  const setValue = (e) => {
    setVal(e.target.value.length) 
  }

  return (
    <div>
      <Input fun = {setValue}/>
      <Paragraph text={"Character Count :"} val={val} />
    </div>

  )
}

export default App
