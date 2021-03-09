import React, { useState, useEffect } from 'react';
function Home () {
  const [count, setCount] = useState(0);
  const [flag] = useState(0);
  // 每次渲染都会调用这个副作用函数
  useEffect(() => {
    setTimeout(() => {
      console.log('get data');
    });
  }, [flag]);
  return (
    <div>
      <span>{count}</span>
      <button onClick={() => setCount(count + 1)}>+</button>
      <button onClick={() => setCount(count - 1)}>-</button>
    </div>
  );
}
export default Home;
