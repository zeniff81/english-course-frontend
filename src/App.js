import React, {useEffect, useState} from 'react'
import Header from './components/header/Header';
import Lessons from './components/lessons/Lessons';
import "./App.css"
import dummyLessons from './resources/dummy/dummyTileInfo'
console.clear();


function App() {  
  const [lessons, setLessons] = useState(dummyLessons)

  const [currentInfo, setCurrentInfo] = useState({})

  const fetchLessons = () => {
    setTimeout(() => {
      setLessons(dummyLessons)
      setCurrentInfo({
        ...currentInfo,
        lessons: dummyLessons
      })
    }, 0);
  }

  useEffect(() => {
    fetchLessons()
  }, [])

  return (
    <div className="app">
        <Header />
        <Lessons currentInfo={currentInfo}/>
    </div>
  );
}

export default App;
