import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const handleIncrease = () => {
        setCount(count + 1);
    };

    const handleDecrease = () => {
        if (count > 0) {
            setCount(count - 1);
        }
    };
    const handReset = () => {
        setCount(0);
    };

    return (
        <div>
            <h2>
                Counter App
            </h2>
            <h3>
                {count}
            </h3>
            <button onClick={handleIncrease}>Nút +</button>
            <button onClick={handleDecrease}>Nút -</button>
            <button onClick={handReset}>Nút reset</button>
        </div>
    );
}

export default Counter;