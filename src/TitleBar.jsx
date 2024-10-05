import { useEffect, useContext } from "react"
import { Icon } from "semantic-ui-react";
import { ThemeContext } from "./App";

export default function TitleBar(){
    const theme = useContext(ThemeContext);
    useEffect(()=>{
        setTimeout(startAnim,1500);
    },[])

    const sleep = (ms) => {
        return new Promise((resolve) => setTimeout(resolve, ms));
      };

    const startAnim = async ()=>{
        let arrLetter = document.getElementsByClassName("titleLetter");
        for(let i=0;i<arrLetter.length-1;i+=2){
            const aStyle = arrLetter[i].style;
            const bStyle = arrLetter[i+1].style;
            const xOffsetA = arrLetter[i].getBoundingClientRect().left - arrLetter[i+1].getBoundingClientRect().left;
            const shiftA = xOffsetA*-1;
            const shiftB = xOffsetA;
            aStyle.setProperty('transform',`translateX(${shiftA}px)`);
            bStyle.setProperty('transform',`translateX(${shiftB}px)`);
            await sleep(300);
            aStyle.setProperty('transform','');
            bStyle.setProperty('transform','');
            arrLetter[i].innerHTML = "Visuorythm".charAt(i);
            arrLetter[i+1].innerHTML = "Visuorythm".charAt(i+1);
        }
        await sleep(5000);
        for(let i=0;i<arrLetter.length-1;i+=2){
            const aStyle = arrLetter[i].style;
            const bStyle = arrLetter[i+1].style;
            const xOffsetA = arrLetter[i].getBoundingClientRect().left - arrLetter[i+1].getBoundingClientRect().left;
            const shiftA = xOffsetA*-1;
            const shiftB = xOffsetA;
            aStyle.setProperty('transform',`translateX(${shiftA}px)`);
            bStyle.setProperty('transform',`translateX(${shiftB}px)`);
            await sleep(300);
            aStyle.setProperty('transform','');
            bStyle.setProperty('transform','');
            arrLetter[i].innerHTML = "iVusrotymh".charAt(i);
            arrLetter[i+1].innerHTML = "iVusrotymh".charAt(i+1);
        }
        await sleep(3000);
        for(let i=0;i<arrLetter.length-1;i+=2){
            const aStyle = arrLetter[i].style;
            const bStyle = arrLetter[i+1].style;
            const xOffsetA = arrLetter[i].getBoundingClientRect().left - arrLetter[i+1].getBoundingClientRect().left;
            const shiftA = xOffsetA*-1;
            const shiftB = xOffsetA;
            aStyle.setProperty('transform',`translateX(${shiftA}px)`);
            bStyle.setProperty('transform',`translateX(${shiftB}px)`);
            await sleep(300);
            aStyle.setProperty('transform','');
            bStyle.setProperty('transform','');
            arrLetter[i].innerHTML = "Visuorythm".charAt(i);
            arrLetter[i+1].innerHTML = "Visuorythm".charAt(i+1);
        }
    }

    return (
        <div id="titleBar">
            <div id="title">
                <div className={`titleLetter ${theme.theme}`}>i</div>
                <div className={`titleLetter ${theme.theme}`}>V</div>
                <div className={`titleLetter ${theme.theme}`}>u</div>
                <div className={`titleLetter ${theme.theme}`}>s</div>
                <div className={`titleLetter ${theme.theme}`}>r</div>
                <div className={`titleLetter ${theme.theme}`}>o</div>
                <div className={`titleLetter ${theme.theme}`}>t</div>
                <div className={`titleLetter ${theme.theme}`}>y</div>
                <div className={`titleLetter ${theme.theme}`}>m</div>
                <div className={`titleLetter ${theme.theme}`}>h</div>
            </div>
            <span className="radio-toggle">
      {(theme.theme==='light'?
        <span>
        <Icon size='large' color='black' name="moon" onClick={theme.toggleTheme} style={{cursor:'pointer'}}/>
        </span>:
        <span>
        <Icon size='large' name="lightbulb" color='yellow' onClick={theme.toggleTheme} style={{cursor:'pointer'}}/>
        </span>
      )}
      </span>
        </div>
    )
}