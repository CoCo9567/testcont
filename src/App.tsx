import React from 'react';
import { HashRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from '@/views/Home';
// 如何提取其他组件的props类型
// React.ComponentProps<T>
// 对于内置的jsx元素的类型 我们直接使用标签名字符串来计算 如div
// React.ComponentProps<"div">
// const a: React.ComponentProps<typeof Bar>["a"]
// const b: React.ComponentProps<"a">
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
