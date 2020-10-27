import React from 'react';
import logo from './logo.svg';
import './App.css';
import MonacoEditor from 'react-monaco-editor';

function App() {
  return (
    <div className="App">
      <MonacoEditor
        width="800"
        height="600"
        language="cpp"
        theme="vs-dark"
        // value={code}
        // options={options}
        // onChange={::this.onChange}
        // editorDidMount={::this.editorDidMount}
      />
    </div>
  );
}

export default App;
