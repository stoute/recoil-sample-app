import React from 'react';
import { useRecoilState } from 'recoil';
import { textState } from '../recoil/atoms.js';

function TextInput() {
  const [text, setText] = useRecoilState(textState);

  const onChange = (event) => {
    setText(event.target.value);
  };

  return (
    <React.Fragment>
      <h1>Character Counter:</h1>
      <div>
        <input type="text" value={text} onChange={onChange} />
        <br />
        Echo: {text}
      </div>
    </React.Fragment>
  );
}

export default TextInput;
