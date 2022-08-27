import React, {useState} from "react";


const App = () => {

        var realTime = new Date().toLocaleTimeString();
        const greetStyle = {}

        const [ctime,setCtime] = useState(realTime)

        const UpdateTimes = () => {
            let ctime = new Date().toLocaleTimeString();
            setCtime(ctime);
        };


        let time =new Date().getHours();
        let greeting = '';
            if (time<12){
                greeting = 'Good Morning';
                greetStyle.color='green';

            }
            else if(time>=12 && time<16){
                greeting = 'Good Afternoon';
                greetStyle.color="red"
            }
            else if (time>=16 && time <19){
                greeting = "Good Evening"
                greetStyle.color='yellow'
            }
            else{
                greeting = 'Good Night';
                greetStyle.color="black";
            }
        return(
            <>
            <div className="parent">
            <h1 className='heading'>Welcome to React Time App</h1>
            <h1 className='myname'>Made By 💖 Vikash Chaurasia</h1>
            <h1 className="time">{ctime}</h1>
            <button onClick={UpdateTimes}>Refresh</button>
            <div className="child">
            <h1 className="hsir">Hello Sir , <span style={greetStyle}>{greeting}</span></h1>
            </div>
            </div>
            </>
        )

};

export default App ;