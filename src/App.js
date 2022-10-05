import { useState, useEffect } from 'react';
import './App.css';
// 앱 실행 하자마자 현재 위치 기반의 날씨가 보임
// 현재 도시, 섭, 화씨, 날씨상태 보인다
// 5개 버튼이 보인다
// 버튼 클릭하면 그 도시의 날씨 보인다
// 현재위치 버튼누르면 다시 현재위치 날씨
// 로딩 스피너
function App() {
  const getCurrentLocation = () => {
    console.log("getCurrentLocation")
  }  
  useEffect(() => {
      getCurrentLocation()
  },[])
  return (
    <div>
      ㄷㄷ
    </div>
  );
}

export default App;
