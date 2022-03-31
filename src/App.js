import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
function App() {

  let [count,setcount] = useState(0);
  // let counter = 0;
  useEffect(()=>{
    const blurring = () => {
      count++;
      setcount(count);
      if(count > 99){
        clearInterval(stop);
      }
      console.log(count)
    }
      let stop = setInterval(blurring,30);
  },[])
 
const scale = (num,in_min,in_max,out_min,out_max)=>{
  return (num - in_min) * (out_max - out_min) / (in_max-in_min) + out_min;
}
  
  return (
   <>
   {/* <section className="bg"></section> */}
   <section className="bg" style={{ filter:` blur(${scale(count,0,100,30,0)}px)`}}></section>
   <div className="loading-text" style={{opacity:`${scale(count,0,100,1,0)}`}}>{`${count}%`}</div>
     </>
  );
}

export default App;
