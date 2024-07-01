import Prism from 'prismjs';
import 'prismjs/themes/prism.css';
import React, { useState } from 'react';
import './CodeEditor.css';

const CodeEditor = () => {
  const [code, setCode] = useState('');

  const handleChange = (event) => {
    setCode(event.target.value);
  };

  return (
    <div className="code-editor">
      <div className="editor-wrapper">
        <textarea
          value={code}
          onChange={handleChange}
          spellCheck="false"
          autoComplete="off"
          autoCorrect="off"
          className="code-input"
          placeholder="Type your code here..."
        />
        <pre className="code-output">
          <code
            className="language-js"
            dangerouslySetInnerHTML={{ __html: Prism.highlight(code, Prism.languages.javascript, 'javascript') }}
          />
        </pre>
      </div>
    </div>
  );
};

export default CodeEditor;



