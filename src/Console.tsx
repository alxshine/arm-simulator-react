import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

import './Console.css';

export function Console() {

    function setup(editor: monacoEditor.editor.IStandaloneCodeEditor) {
        editor.addCommand(
            monacoEditor.KeyCode.Enter,
            _ => {
                alert(editor.getValue())
                editor.setValue("")
            }
        )
    }

    return (
        <div id="Console">
            <MonacoEditor
                width="800"
                height="3ex"
                language="cpp"
                theme="vs-dark"
                options={{
                    lineNumbers: _ => '>',
                    minimap: { enabled: false },
                }}
                editorDidMount={setup}
            />
        </div>)
}