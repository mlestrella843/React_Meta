import React, { useState, useEffect } from 'react';

export function Timer() {
  const [seconds, setSeconds] = useState(0);
  useEffect(() => {
    const interval = setInterval(() => {
        // Update the seconds state every second. La función dentro de setInterval 
        //se ejecutará repetidamente, una vez por segundo.
        console.log('tick');  // for testing purposes only. Uncomment it to see the effect.   
      setSeconds((prev) => prev + 1);
    }, 1000);
    return () => clearInterval(interval); // Cleanup function
  }, []);

  return <p>Time: {seconds} seconds</p>;
}

//setSeconds usa la función de actualización (prev) => prev + 1, 
//donde prev representa el valor anterior de seconds. Esto asegura 
//que el valor de seconds aumente en 1 cada segundo.
//Esta función es una actualización basada en el valor previo, una 
//técnica recomendada para evitar problemas si el estado seconds cambia 
//rápidamente o si hay varios intervalos.