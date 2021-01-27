import React from 'react';
import { useRecoilValue } from 'recoil';
import { charCountState } from '../recoil/selectors';

function CharacterCount() {
  const count = useRecoilValue(charCountState);

  return <>Character Count: {count}</>;
}

export default CharacterCount;
