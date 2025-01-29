import React from 'react'

function Timercount() {
    const [seconds, setSeconds] = useState(0);
    useEffect(() => {
        const interval = setInterval(() => {
            setSeconds(prevSeconds => prevSeconds +1);
        },500);
        return () => clearInterval(interval);
    },[]);
    return (
        <div>
            <h2>Timer:</h2>
            <p>{seconds}</p>
        </div>
    )
    


export default Timercount
