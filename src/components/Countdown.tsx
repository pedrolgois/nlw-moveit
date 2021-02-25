import { useState , useEffect } from 'react';
import styles from '../styles/components/Countdown.module.css'

let countdownTimeout: NodeJS.Timeout;

export function Countdown(){
    const[time, setTime] = useState(0.05 * 60);
    const[isActive, setisActive] = useState(false);
    const[hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time/60);
    const seconds = time % 60;

    const [minuteLeft,minuteRight] =  String(minutes).padStart(2,'0').split('')
    const [secondsLeft,secondsRight] =  String(seconds).padStart(2,'0').split('')

    function startCountdown(){
        setisActive(true);
        setTime
    }

    function resetCountdown(){
        clearTimeout(countdownTimeout);
        setisActive(false);
        setTime(25*60);
    }

    useEffect(() => {
        if(isActive && time > 0){
            countdownTimeout = setTimeout(() =>{
                setTime(time - 1);
            }, 1000)
        } else if (isActive && time == 0){
            setHasFinished(true);
            setisActive(false);
        }
    },[isActive, time])     

    return(
        <div>
            <div className={styles.CountdownContainer}>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>
                    <span>:</span>
                <div>
                    <span>{secondsLeft}</span>
                    <span>{secondsRight}</span>
                </div>
            </div>

            { hasFinished ? (
            <button disabled className={styles.CountdownButton}>
                Ciclo encerrado
            </button>
            ) : (
                <>
                    {isActive ? (
                    <button type="button" onClick={resetCountdown} className={`${styles.CountdownButton} ${styles.CountdownButtonActive}`}>
                        Abandonar ciclo
                    </button>
                    ) : (
                    <button type="button" onClick={startCountdown} className={styles.CountdownButton}>
                        Iniciar ciclo
                    </button>
                    )}
                </>
            )}
            
        </div>
        
    );
}