import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Notfound from "./pages/NotFound";

import { getEmotionImage } from "./util/get-emotion-image";

//1. "/" 모든 일기를 조회하는 home페이지
//2. "/new" 새로운 일기를 작성하는 new 페이지
//3. "/diary" 일기를 상세히 조회하는 diary 페이지
//4. "/*" *은 wildcard, 위에 잇는 경로에 일치하지않았을때 여기로
function App() {
  const nav = useNavigate(); // useNavigate를 호출했을 때 반환되는 내비게이팅 함수를 이 nav라는 변수에 저장

  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <div>
        <img src={getEmotionImage(1)} />
        <img src={getEmotionImage(2)} />
        <img src={getEmotionImage(3)} />
        <img src={getEmotionImage(4)} />
        <img src={getEmotionImage(5)} />
      </div>
      <div>
        <Link to={"/"}>Home</Link>
        <Link to={"/new"}>New</Link>
        <Link to={"/diary"}>Diary</Link>
      </div>
      <button omClick>New페이지로 이동</button>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary:id" element={<Diary />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
}

export default App;
