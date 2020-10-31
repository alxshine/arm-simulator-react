import React from 'react';
import MonacoEditor from "react-monaco-editor";
import * as monacoEditor from "monaco-editor/esm/vs/editor/editor.api";

import {
  ShiftAmount,
  arithmetic_shift_right,
} from "./arm-simulator/barrel-shifter";
import Uint32 from "./arm-simulator/primitives";

import "./Console.css";

export const Console: React.FC = () => {
  function setup(editor: monacoEditor.editor.IStandaloneCodeEditor) {
    editor.addCommand(monacoEditor.KeyCode.Enter, () => {
      const shift_result = arithmetic_shift_right(
        new Uint32(0xf0101010),
        new ShiftAmount(1)
      );
      alert(shift_result.result.toHex());
      editor.setValue("");
    });
  }

  return (
    <div id="Console">
      <MonacoEditor
        width="800"
        height="3ex"
        language="cpp"
        theme="vs-dark"
        options={{
          lineNumbers: () => ">",
          minimap: { enabled: false },
        }}
        editorDidMount={setup}
      />
    </div>
  );
}
