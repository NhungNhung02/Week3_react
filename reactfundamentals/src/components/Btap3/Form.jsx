import React, { useState } from "react"; // ← THÊM React

function Form() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");

    return (
        <div>
            <h2>Form Đăng Nhập</h2>

            <input
                type="text"
                placeholder="Nhập họ và tên"
                value={name}
                onChange={(e) => setName(e.target.value)}
            />

            <br /><br />

            <input
                type="text"
                placeholder="Nhập email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
            />

            <hr />
            <p>Tên: {name}</p>
            <p>Email: {email}</p>
        </div>
    );
}

export default Form;