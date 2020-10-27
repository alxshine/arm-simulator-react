import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monaco from "monaco-editor/esm/vs/editor/editor.api";

export function Console() {

    return (
        <div id="Console">
            <MonacoEditor
                width="800"
                height="3ex"
                language="cpp"
                theme="vs-dark"
                value=">"
                options={{ "lineNumbers": "off" }}
            />
        </div>)
}