import { useEffect, useState } from "react";
import "./DigitalClock.css";

function DigitalClock() {
    const [time, setTime] = useState(new Date());

    useEffect(() => {
        const timer = setInterval(() => {
            setTime(new Date());
        }, 1000);

        // cleanup
        return () => clearInterval(timer);
    }, []);

    return (
        <div className="clock">
            <h2>Digital Clock</h2>
            <p>{time.toLocaleTimeString()}</p>
        </div>
    );
}

export default DigitalClock;