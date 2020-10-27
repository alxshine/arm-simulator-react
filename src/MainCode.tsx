import React from 'react';
import MonacoEditor from 'react-monaco-editor';

export function MainCode() {
    return (
        <div id="MainCode">
            <MonacoEditor
                width="800"
                height="600"
                language="cpp"
                theme="vs-dark"
                value="//your code here"
            // options={options}
            // onChange={::this.onChange}
            // editorDidMount={::this.editorDidMount}
            />
        </div>)
}