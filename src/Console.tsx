import React from 'react';
import MonacoEditor from 'react-monaco-editor';
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";
import {Uint32} from './arm-simulator/primitives'

import './Console.css';

export function Console() {

    function setup(editor: monacoEditor.editor.IStandaloneCodeEditor) {
        editor.addCommand(
            monacoEditor.KeyCode.Enter,
            _ => {
                let first = new Uint32(22);
                let intValue = parseInt(editor.getValue());
                let second = new Uint32(intValue);
                alert(first.multiply(second).toHex());
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