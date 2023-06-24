import React, { useState } from "react";
import { Button } from "primereact/button";
import apiService from "../../services/axiosInstance";
import { InputTextarea } from "primereact/inputtextarea";
import "./AIprompt.css";

function AIprompt({ generatedCode, changeGeneratedCode }) {
  const [value, setValue] = useState("");

  const prompt = `Give aframe.js code with only aframe entites removing script tags and other tags such as  a-camera, a-assets and a-light for ${value} keeping ${generatedCode}. Give code in 1 block`;

  async function generateResponse() {
    try {
      const response = await apiService.post("/ask-question", {
        value: prompt,
      });
      changeGeneratedCode(response.data);
      setValue("");
    } catch (error) {
      throw new Error(error);
    }
  }

  return (
    <div className="prompt-area">
      <h1>VR Content Generator</h1><br/>
      <InputTextarea
        autoResize
        value={value}
        placeholder="Enter your prompt commands..."
        onChange={(e) => setValue(e.target.value)}
        rows={2}
        cols={30}
      />
      <Button label="Generate" onClick={() => generateResponse()} />
    </div>
  );
}

export default AIprompt;
