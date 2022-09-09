import {useState,useEffect} from 'react';

import clock from 'images/clock.gif';

import './CountdownTimer.css';

const CountdownTimer=()=>{
    const [day,setDay]=useState(0);
    const [hour,setHour]=useState(0);
    const [minute,setMinute]=useState(0);
    const [second,setSecond]=useState(0);
    const [atPoint,setAtPoint]=useState(false);
    
    const targetTime=new Date("2022/12/31 23:59:59");
    useEffect(()=>{
        const intervalId=setInterval(()=>{
            const nowTime=new Date();
            const difference=targetTime.getTime()-nowTime.getTime();

            const d=Math.floor(difference/(1000*60*60*24));
            setDay(d);

            const h=Math.floor((difference%(1000*60*60*24))/(1000*60*60));
            setHour(h);

            const m=Math.floor((difference%(1000*60*60))/(1000*60));
            setMinute(m);

            const s=Math.floor(difference%(1000*60)/1000);
            setSecond(s);

            if(d<0 && h<0 && m<0 && s<0){
                setAtPoint(true);
            }
        },1000);

        return ()=>{
            clearInterval(intervalId);
        }
    },[]);
    
    return (
        <div className="countdown-timer">
            {atPoint?(<img className="image" src={clock} alt="clock" />):(
                <>
                    <div className="countdown-time">
                        <div>{day}</div>
                        <div>天</div>
                    </div>:
                    <div className="countdown-time">
                        <div>{hour}</div>
                        <div>時</div>
                    </div>:
                    <div className="countdown-time">
                        <div>{minute}</div>
                        <div>分</div>
                    </div>:
                    <div className="countdown-time">
                        <div>{second}</div>
                        <div>秒</div>
                    </div>
                </>
            )}
        </div>
    );
}

export default CountdownTimer;