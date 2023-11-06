"use client"
import React, { useEffect, useState } from 'react'

const gamepad = () => {    

    const [gamepadIsConnected, setGamepadIsConnected] = useState<boolean>(false)
    const [duration, setDuration] = useState<number>(4999)

    useEffect(() => {
        window.addEventListener("gamepadconnected", (e) => {
            setGamepadIsConnected(true)
        })
    
        window.addEventListener("gamepaddisconnected", (e) => {
            setGamepadIsConnected(false)
        })
    }, [])
    
    
   

    const handleVibrate = () => {
        const gamepads = navigator.getGamepads()   

        gamepads.forEach((gamepad) => {
            if(gamepad !== null) {
                vibrateGamepad(gamepad)
                console.log("Gamepad found:", gamepad)
            } else {                
                console.log("No gamepads found", gamepad)
            }
        })


        function vibrateGamepad (gamepad:Gamepad) {
            gamepad.vibrationActuator?.playEffect("dual-rumble", {
                startDelay: 0,
                duration: duration,
                weakMagnitude: 1.0,
                strongMagnitude: 1.0,
            })
        }


        
    }

  return (
    <section className="gamepad-ui" >
        <button disabled={ !gamepadIsConnected } onClick={ handleVibrate } >Vibrate</button>
        <div>
            <label>Select duration:</label>
            <button className={`gamepad-btn ${duration === 500 && "durationBtnSelected"}`} disabled={ !gamepadIsConnected } onClick={ () => setDuration(500) } >0.5 Sec</button>
            <button className={`gamepad-btn ${duration === 1000 && "durationBtnSelected"}`} disabled={ !gamepadIsConnected } onClick={ () => setDuration(1000) } >1 Sec</button>
            <button className={`gamepad-btn ${duration === 3000 && "durationBtnSelected"}`} disabled={ !gamepadIsConnected } onClick={ () => setDuration(3000) } >3 Sec</button>
            <button className={`gamepad-btn ${duration === 4999 && "durationBtnSelected"}`} disabled={ !gamepadIsConnected } onClick={ () => setDuration(4999) } >5 Sec</button>
            
        </div>
        <h1 className={`${ !!gamepadIsConnected && "display-none" }`} >Press any button in your controller!</h1>
    </section>
  )
}

export default gamepad