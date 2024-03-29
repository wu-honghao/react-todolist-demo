import React from "react";

const TodoListItem = (props:any) => {
  return (
    <li key={props.todoItem.id}>
      第{props.index}个事项是：{props.todoItem.value}
      <button onClick={props.deleteTodoList.bind(this, props.index)}>
        删除
      </button>
    </li>
  );
};

export default TodoListItem;
