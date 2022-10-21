import React from "react";
import Navbar from "./Components/Navbar";
import Body from "./Components/Body";
import Alerts from './Components/Alerts';
function App() {
  const [mode, set_mode] = React.useState("light");
  const [alt, set_alt] = React.useState(null);
  const showalert = (message , type)=>{
       set_alt({
        message:message,
        type:type
       })
       setTimeout(() => {
        set_alt(null);
       }, 2000);
  }
  const togglemode = () => {
    if (mode === 'light') {
      set_mode('dark');
      document.body.style.backgroundColor = '#042743';
      document.body.style.color = 'white';
      showalert("Dark Mode Has be Enable" , "success")
    } else {
      set_mode('light');
      document.body.style.backgroundColor = 'white';
      document.body.style.color = 'black';
      showalert("Light Mode Has be Enable" , "success")

    }
    console.log("button is working too much precious");
  };
  return (
    <div>
      <Navbar
        title="Home"
        second="About Us"
        mode={mode}
        togglemode={togglemode}
      />
      <Alerts alert={alt}/>
      <Body heading="Enter the text Analize Below" mode={mode} showalert={showalert} />
    </div>
  );
}

export default App;
