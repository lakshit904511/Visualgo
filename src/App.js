import "./styles.css";
import SortingVisualizer from "./SortingVisualizer";
import { createContext,useEffect,useState } from "react";
import { Icon, Transition } from "semantic-ui-react";
import 'semantic-ui-css/semantic.min.css';
import TitleBar from "./TitleBar";
import Footer from "./Footer";
export const ThemeContext=createContext(null);
export default function App() {
  const [theme,setTheme]=useState(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');
  const toggleTheme=()=>{
    setTheme((curr)=>(curr==="light"?"dark":"light"));
  };
  return (
    <ThemeContext.Provider value={{theme,toggleTheme}}>
    <div className="App" id={theme}>
      <TitleBar/>
      <SortingVisualizer />
      <Footer/>
    </div>
    </ThemeContext.Provider>
  );
}
