import { useState, useContext } from "react";
import { DiaryStateContext } from "../App";

import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

//달의 시작시간 타임스탬스 형태로 계산
//컴포넌트 밖에 선언한 이유: 함수에서 필요한 데이터는 매개변수로 받아옴, 함수 내부가 복잡하여 컴포넌트 내부에 선언 x, 내부에 선언해도 되긴함
const getMonthlyData = (pivotDate, data) => {
  const beginTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth(),
    1,
    0,
    0,
    0
  ).getTime();

  //달의 끝나는 시간 타임스탬스 형태로 계산
  const endTime = new Date(
    pivotDate.getFullYear(),
    pivotDate.getMonth() + 1,
    0,
    23,
    59,
    59
  ).getTime();
  //일기 데이터들 중에 아이템이 생성된 아이템의 생성시간이 시작시간이상이면서 마지막시간 이하로 설정되어있는 이달의 일기 데이터들만 필터링
  return data.filter(
    (item) => beginTime <= item.createdDate && item.createdDate <= endTime
  );
};

const Home = () => {
  const data = useContext(DiaryStateContext); //useContext를 통해 DiaryStateContext가 공급하는 일기데이터를 꺼내와서 사용

  const [pivotDate, setPivotDate] = useState(new Date());
  //컴포넌트가 리렌더링 될 때마다 호출해서 해당 달 일기데이터만 필터링
  const monthlyData = getMonthlyData(pivotDate, data);

  //버튼을 월 단위로 변경해주는 기능
  const onIncreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() + 1));
  };

  const onDecreaseMonth = () => {
    setPivotDate(new Date(pivotDate.getFullYear(), pivotDate.getMonth() - 1));
  };
  return (
    <div>
      <Header
        title={`${pivotDate.getFullYear()}년 ${pivotDate.getMonth() + 1}월`}
        leftChild={<Button onClick={onDecreaseMonth} text={"<"} />}
        rightChild={<Button onClick={onIncreaseMonth} text={">"} />}
      />
      <DiaryList data={monthlyData} />
    </div>
  );
};
export default Home;
