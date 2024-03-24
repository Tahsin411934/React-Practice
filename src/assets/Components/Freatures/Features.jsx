import { useEffect, useState } from "react";
import Feature from "./Feature";


const Features = () => {
    const [features,setFeatures]= useState([]);
    const [dataLength,setDataLength] = useState(4)

    useEffect (()=>{
        fetch('Data.json')
        .then(res=>res.json())
        .then(data=>setFeatures(data))
    },[])

    return (
        <div className="grid grid-cols-2 gap-2">
            {
                features.slice(0 , dataLength).map(feature=> <Feature key={feature.id} feature={feature}></Feature> )
            }
            <button onClick={()=> setDataLength(features.length)} className="`btn btn-primary w-30 {}`">show all</button>
        </div>
    );
};

export default Features;