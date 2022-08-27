import React, {useState} from "react";


const RealTime =()=> {
    var realTime = new Date().toLocaleTimeString();

        const [ctime,setCtime] = useState(realTime)

        const UpdateTime = () => {
            let ctime = new Date().toLocaleTimeString();
            setCtime(ctime);
        };

        setInterval(UpdateTime,1000)

        return(
            <>
                <h1 className="time">{ctime}</h1>
            </>
        )
}
export default RealTime;