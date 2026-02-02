import React, { useState } from "react";
import StatusBadge from "./StatusBadge";

function Btap4() {
    const [status, setStatus] = useState("online");

    return (
        <div>
            <h2>User Status</h2>

            <StatusBadge status={status} />

            <div style={{ marginTop: "20px" }}>
                <button onClick={() => setStatus("online")}>Online</button>
                <button onClick={() => setStatus("offline")}>Offline</button>
                <button onClick={() => setStatus("busy")}>Busy</button>
            </div>
        </div>
    );
}

export default Btap4;