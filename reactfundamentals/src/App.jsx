import Header from "./components/Btap1/Header";
import StudentInfo from "./components/Btap1/StudentInfo";
import Footer from "./components/Btap1/Footer";

function App() {
  const student = {
    name: "Lê Hồng Nhung",
    mssv: "23652131",
    lop: "DHKTPM19B",
  };

  return (
    <div>
      <Header />
      <StudentInfo {...student} />
      <Footer />
    </div>
  );
}

export default App;