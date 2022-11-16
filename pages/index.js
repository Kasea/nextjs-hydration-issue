import { useDispatch, useSelector } from "react-redux";
import { selectInput, setInputValue } from "../store/store";

const Input = (props) => {
  return <input {...props} />;
};

export default function Home() {
  const dispatch = useDispatch();

  const inputValue = useSelector(selectInput);

  return (
    <div style={{ margin: "60px 60px 0px" }}>
      <Input
        value={inputValue}
        onChange={(e) => dispatch(setInputValue(e.target.value))}
      />

      <div>you wrote: {inputValue}</div>
    </div>
  );
}
