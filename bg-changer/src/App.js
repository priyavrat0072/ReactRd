import { useState } from "react";

function App() {
  const [color,setColor] = useState("pink")

  const colorChange =(clr)=>{
    setColor(clr)
  }

  return (
    <>
   <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div  className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-xl">
        <button onClick={()=>colorChange("red")}  className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"red"}}>Red</button>
        <button onClick={()=>colorChange("green")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"Green"}}>Green</button>
        <button onClick={()=>colorChange("blue")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"blue"}}>Blue</button>
        <button onClick={()=>colorChange("yellow")}  className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"yellow"}}>Yellow</button>
        <button onClick={()=>colorChange("orange")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"orange"}}>Orange</button>
        <button onClick={()=>colorChange("purple")} className="outline-none px-4 py-1 rounded-full shadow-lg" style={{backgroundColor:"purple"}}>Purple</button>

      </div>
    </div>
   </div>
    </>
  )
}


export default App;
