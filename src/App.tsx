import "./App.css";
import { Button } from "antd";
import { useCountStore } from "./stores/useCountStore";
import { shallow } from "zustand/shallow";
import { PlusOutlined } from "@ant-design/icons";

function App() {
  const [count, increment] = useCountStore(
    (s) => [s.count, s.increment],
    shallow
  );

  return (
    <>
      <h1 className="text-gray-700 font-sans">Vite + React + Zustand + Antd + Uno</h1>
      <div className="p-2">
        <Button onClick={increment} icon={<PlusOutlined />}>count is {count}</Button>
      </div>
    </>
  );
}

export default App;
