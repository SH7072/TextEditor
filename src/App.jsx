import { useRef, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Editor } from '@monaco-editor/react'
import { editor } from 'monaco-editor'

const files = {
  "temp.cpp": {
    name: "temp.cpp",
    language: "cpp",
    value: "some c++ shit"
  },
  "index.html": {
    name: "index.html",
    language: "html",
    value: "<div>hello </div>"
  },
  "script.py": {
    name: "script.py",
    language: "python",
    value: "random code"

  }
}

function App() {
  const [fileName, setFileName] = useState("temp.cpp");
  const file = files[fileName];
  const editorRef=useRef(null);

  function handleEditorDidMount(editor,monaco){
    editorRef.current=editor;
  }
  function getValue(){
    alert(editorRef.current.getValue());
  }
  return (
    <div className="App">
      <button onClick={()=>setFileName("temp.cpp")}>Cpp</button>

      <button onClick={()=>setFileName("index.html")} >  HTML </button>

      <button onClick={()=>setFileName("script.py")} >Python</button>
      <button onClick={()=>getValue( )} >getEditorValue</button>

      <Editor
        height='100vh'
        width='600px'
        theme='vs-dark'
        onMount={handleEditorDidMount}
        path={file.name}
        defaultLanguage={file.language}
        defaultValue={file.value}
      />


    </div>

  )
}

export default App
