import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/views/Home';
// import Bar from "@/components/Bar";
// 如何提取其他组件的props类型
// React.ComponentProps<T>
// 对于内置的jsx元素的类型 我们直接使用标签名字符串来计算 如div
// React.ComponentProps<"div">
// const a: React.ComponentProps<typeof Bar>["a"]
// const b: React.ComponentProps<"a">
function App() {
  return (
    <>
    {/* <Bar
      a={1}
      c={{
        width:100,
        height:100,
        backgroundColor:"red",
      }}
      d={[1,2,3]}
      >
        <div>124996</div>
        </Bar> */}
        <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
