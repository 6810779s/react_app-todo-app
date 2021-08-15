import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md';
import '../style/TodoInsert.css';

const TodoInsert = () => {
  const [value, setValue] = useState('');
  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []);
  return (
    <div className="TodoInsert">
      <input
        placeholder="할 일을 입력하세요"
        value={value}
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd />
      </button>
    </div>
  );
};

export default TodoInsert;
