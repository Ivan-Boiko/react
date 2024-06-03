import { useState } from 'react';
import generateRandomNum from "../tools/generateRandomNum";


function RandomNumber(props) {
    const {maxNum} = props;
  const [randomNum, setRandomNum] = useState(generateRandomNum(maxNum));
const changeRandomNum = () => {
    setRandomNum(generateRandomNum(maxNum))
}
  return (
    <div>
      <h1>{randomNum}</h1>
      <button onClick={changeRandomNum}>Generate</button>
    </div>
  );
}
export default RandomNumber;
