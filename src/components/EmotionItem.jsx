import "./EmotionItem.css";
import { getEmotionImage } from "../util/get-emotion-image";

//src속성으로 getEmotionImage함수를 호출하고 props로 받은 emotionId를 전달만 하면 됨
const EmotionItem = ({ emotionId, emotionName, isSelected, onClick }) => {
  return (
    <div
      onClick={onClick}
      className={`EmotionItem ${
        isSelected ? `EmotionItem_on_${emotionId}` : ""
      }`}
    >
      <img className="emotion_img" src={getEmotionImage(emotionId)} />
      <div className="emotion_name">{emotionName}</div>
    </div>
  );
};

export default EmotionItem;
