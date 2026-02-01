function StudentInfo({ name, mssv, lop }) {
    return (
        <div>
            <p><b>Họ tên:</b> {name}</p>
            <p><b>MSSV:</b> {mssv}</p>
            <p><b>Lớp:</b> {lop}</p>
        </div>
    );
}

export default StudentInfo;