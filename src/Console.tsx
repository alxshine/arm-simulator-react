import React from 'react';
import MonacoEditor from 'react-monaco-editor';

export function Console() {
    let options = {
        // "lineNumbers": 'off' // this is the line that breaks
    }
    return (
        <div id="Console">
            <MonacoEditor
                width="800"
                height="3ex"
                language="cpp"
                theme="vs-dark"
                value=">"
                options={options}
            />
        </div>)
}