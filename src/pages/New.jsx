//Header컴포넌트, Editor컴포넌트, EmotionItem컴포넌트로 구성
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();
  //onSubmit함수를 에디터 컴포넌트에 props로 전달을 하면 에디터 컴포넌트에서 작성완료 버튼이 눌리면 여기에 inputState결과값이 들어오게
  //.getTime 메서드를 붙여서 타임스템프 값으로 변경해주어야함
  //새로운 일기를 추가하게 되면 nav를 통해서 홈페이지로 이동, 뒤로가기 방지
  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };

  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        leftChild={<Button onClick={() => nav(-1)} text={"뒤로 가기"} />}
      />
      <Editor onSubmit={onSubmit} />
    </div>
  );
};
export default New;
