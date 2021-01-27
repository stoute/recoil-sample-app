import React from 'react';
import TextInput from './textInput';
import CharacterCount from './characterCount';

function CharacterCounter() {
  return (
    <div>
      <TextInput />
      <CharacterCount />
    </div>
  );
}

export default CharacterCounter;
