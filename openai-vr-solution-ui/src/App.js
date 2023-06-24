import './App.css';
import "primereact/resources/themes/lara-light-indigo/theme.css";  
import "primereact/resources/primereact.min.css";  
import AIprompt from './Components/AIprompt/AIprompt';
import VRcontent from './Components/VRcontent/VRcontent';
import { useState } from 'react';

function App() {
  const [generatedCode, setGeneratedCode] = useState('');

  const changeGeneratedCode = ( code ) => {
    setGeneratedCode(code);
  }
  return (
    <div>
      <AIprompt generatedCode={generatedCode} changeGeneratedCode={changeGeneratedCode} />
      <VRcontent generatedCode={generatedCode}/>
    </div>
  );
}

export default App;
