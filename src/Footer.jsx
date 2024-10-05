import { useContext } from "react";
import { ThemeContext } from "./App";
export default function Footer(){
    const theme = useContext(ThemeContext);
    return (
        <div id='appFooter' className={`${theme.theme}`}>
            <h4>Copyright&copy; {new Date().getFullYear()}</h4>
        </div>
    )
}