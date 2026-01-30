import { useState } from "react";
import "./ControlledForm.css";

function ControlledForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div className="form-container">
            <h2>Bài 3 – Controlled Form</h2>

            <div className="form-group">
                <label>Tên</label>
                <input
                    type="text"
                    placeholder="Nhập tên"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>

            <div className="form-group">
                <label>Email</label>
                <input
                    type="email"
                    placeholder="Nhập email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>

            <div className="result">
                <p><strong>Tên:</strong> {name}</p>
                <p><strong>Email:</strong> {email}</p>
            </div>
        </div>
    );
}

export default ControlledForm;