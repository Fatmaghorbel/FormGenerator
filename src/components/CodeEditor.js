import React, {Fragment} from 'react';
import { Controlled as CodeMirror } from 'react-codemirror2';
require('codemirror/lib/codemirror.css');
require('codemirror/theme/material.css');
require('codemirror/theme/neat.css');
require('codemirror/mode/xml/xml.js');
require('codemirror/mode/javascript/javascript.js');

import "./codeEditor.css"

const CodeEditor = (props) => {
  return (
    <Fragment>
      <CodeMirror
        value='<!--Your comment-->'
        options={{
          mode: 'xml',
          theme: 'material',
          lineNumbers: true,
          autocorrect: true,
        }}
        {...props}
      />
    </Fragment>
  )
}

export default CodeEditor