import React, { useEffect, useState } from 'react';
import { DataForm } from '@bsmp/react';
import { useItemState, useUpdateItem } from '../../recoil/hooks';

export const TodoItem = () => {

  const {state, setState, stateFormatted, updateState, activeId,  entities} = useItemState()

  const renderItem = () => {
    return Object.keys(stateFormatted).map((key,i) => (
      <div>:: {stateFormatted[key]}</div>
    ));
  };

  if(!stateFormatted) return(<h4>select an item first</h4>)

  return (
    <div>
      {renderItem()}
      <hr/>
      <DataForm data={state} onFormSubmit={(formData) => updateState(formData)} />
    </div>
  );
};

export default TodoItem;
