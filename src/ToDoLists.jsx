import React from 'react';

const ToDoLists = (props) => {

  return (
  <> 
    <div className='todo_style'>
        <i 
        class="fas fa-times" 
        aria-hidden="true" 
        onClick= {() => {
            props.onSelect(props.id);
        }}
        />
        <li className='list_style'> {props.text} </li>
    </div>
  </>);
};

export default ToDoLists;
