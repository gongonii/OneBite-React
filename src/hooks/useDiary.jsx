//함수 앞에 use가 붙으면 커스텀 훅이 됨, 컴스텀 훅으로 복잡한 코드를 관리 가능
import { useContext, useState, useEffect } from "react";
import { DiaryStateContext } from "../App";
import { useNavigate } from "react-router-dom";

const useDiary = (id) => {
  const data = useContext(DiaryStateContext); // 전체 일기 데이터 불러오기
  const [curDiaryItem, setCurDiaryItem] = useState();

  const nav = useNavigate();

  useEffect(() => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(id)
    );
    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav(`/`, { replace: true });
    }

    setCurDiaryItem(currentDiaryItem);
  }, [id]); // prams.id가 바뀌거나 일기의 data state가 변경될때만 실행,mount될때만 실행

  return curDiaryItem;
};

export default useDiary;
