import "./App.css";
import BaiTapComponent from "./components/BaiTap/BaiTapComponent";
import BaiTapState from "./components/CauTrucDieuKhien__Render/BaiTapState";
import DemoIf from "./components/CauTrucDieuKhien__Render/DemoIf";
import BaiTapVongLap from "./components/CauTrucLap/BaiTapVongLap";
import DemoVongLap from "./components/CauTrucLap/DemoVongLap";
import DemoVongLap2 from "./components/CauTrucLap/DemoVongLap2";
import Event from "./components/DataBinding/Event";
import SinhVien from "./components/DataBinding/SinhVien";
import BaiTapTruyenFunction from "./components/Props/BaiTapTruyenFunction/BaiTapTruyenFunction";
import DemoProps from "./components/Props/DemoProps";

function App() {
  document.title = 'tamdna'
  return (
    <div className="App">
      <BaiTapComponent></BaiTapComponent>
      {/* <SinhVien></SinhVien> */}
      {/* <Event></Event> */}
      {/* <DemoIf></DemoIf> */}
      {/* <BaiTapState></BaiTapState> */}
      {/* <DemoVongLap></DemoVongLap> */}
      {/* <DemoVongLap2></DemoVongLap2> */}
      {/* <BaiTapVongLap></BaiTapVongLap> */}
      {/* <DemoProps title={'tamdna-knock-door'}></DemoProps> */}
      {/* <BaiTapTruyenFunction></BaiTapTruyenFunction> */}
    </div>
  );
}

export default App;
