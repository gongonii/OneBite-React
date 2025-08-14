//Header컴포넌트, Viewer컴포넌트로 구성
import { useParams, useNavigate } from "react-router-dom"; //현재 브라우저에 명시한 url파라미터 값을 가져오는 customHook
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const nav = useNavigate();

  const params = useParams();

  const curDiaryItem = useDiary(params.id);

  //undefined방지
  if (!curDiaryItem) {
    return <div>데이터 로딩중</div>;
  }
  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title}기록`}
        leftChild={<Button onClick={() => nav(-1)} text={"< 뒤로가기"} />}
        rightChild={
          <Button onClick={() => nav(`/edit/${params.id}`)} text={"수정하기"} />
        }
      />
      <Viewer emotionId={emotionId} content={content} />
    </div>
  );
};
export default Diary;
