import React, {PropTypes} from 'react';
import { connect } from 'react-redux';
import { removeTodo, toggleTodo } from '../actions';

const TodoItem = ({onToggle, onRemove, completed, text}) => {
  const checkedProp = completed ? {checked: true} : {};

  console.warn("Item:", text)
  return (
    <li
      className="todo-item"
      style={{
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      <input className="toggle" type="checkbox" {...checkedProp} readOnly onClick={onToggle} />
      <label className="text">{text}</label>
      <button className="remove" onClick={onRemove}>×</button>
    </li>
  )
}


TodoItem.propTypes = {
  onToggle: PropTypes.func.isRequired,
  onRemove: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapDispatchToProps = (dispatch, ownProps)=>{
  const {id} = ownProps
  return {
    onToggle: ()=> dispatch(toggleTodo(id)),
    onRemove: ()=> dispatch(removeTodo(id))
  }
}

// export default TodoItem;
export default connect(null, mapDispatchToProps)(TodoItem);

