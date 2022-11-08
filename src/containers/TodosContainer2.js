import React from 'react'
import { useCallback } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeInput, insert, toggle, remove } from '../modules/todos'
import Todos from '../components/Todos';
import useActions from '../lib/useAction';

const TodosContainer2 = () => {
  const { input, todos } = useSelector(({ todos }) => ({
    input: todos.input,
    todos: todos.todos
  }));
  
  // v1
  // const dispatch = useDispatch();
  // const onChangeInput = useCallback(input => dispatch(changeInput(input)), [dispatch]);
  // const onInsert = useCallback(text => dispatch(insert(text)), [dispatch]);
  // const onToggle = useCallback(id => dispatch(toggle(id)), [dispatch]);
  // const onRemove = useCallback(id => dispatch(remove(id)), [dispatch]);

  // v2 useActions 사용
  const [onChangeInput, onInsert, onToggle, onRemove] = useActions(
    [changeInput, insert, toggle, remove],
    []
  );

  return (
    <Todos
      input={input}
      todos={todos}
      onChangeInput={onChangeInput}
      onInsert={onInsert}
      onToggle={onToggle}
      onRemove={onRemove}
    />
  );
};

export default React.memo(TodosContainer2);