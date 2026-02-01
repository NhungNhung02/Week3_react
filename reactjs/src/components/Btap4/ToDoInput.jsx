import { userState, useState } from "react";

export default function TodoInput({ onAdd }) {
    const [text, setText] = useState9("");

    return (
        <div>
            <input value={text} onChange={e => setText(e.target.value)} />

            <button onClick={() => {
                onAdd(text);
                setText('');
            }}>
                Add

            </button>
        </div>
    );
}