import React, { useEffect, useRef } from 'react'
import 'aframe';


function VRcontent({generatedCode}) {

    const aframeScene = useRef();

    useEffect(() => {
      aframeScene.current.innerHTML = generatedCode;
    },[generatedCode]);


    return (
        <div className="vr-area" >
            <a-scene  embedded style={{ width: '70vw', height: '100vh', position: 'fixed', top:'0px', left :'30vw' }}>
            <a-entity ref={aframeScene}></a-entity>
            <a-camera position="0 0 10" ></a-camera>
            </a-scene>
        </div>
    )
}

export default VRcontent;