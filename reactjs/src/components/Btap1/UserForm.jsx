import { useState } from "react";
import "./UserForm.css";

function UserForm() {
    const [user, setUser] = useState({
        name: "",
        email: "",
        age: ""
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUser({ ...user, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(user);
    };

    return (
        <div className="container">
            <h2>Form thông tin người dùng</h2>

            <form className="form" onSubmit={handleSubmit}>
                <label>
                    Họ tên
                    <input
                        type="text"
                        name="name"
                        value={user.name}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Email
                    <input
                        type="email"
                        name="email"
                        value={user.email}
                        onChange={handleChange}
                    />
                </label>

                <label>
                    Tuổi
                    <input
                        type="number"
                        name="age"
                        value={user.age}
                        onChange={handleChange}
                    />
                </label>

                <button type="submit">Gửi</button>
            </form>
        </div>
    );
}

export default UserForm;