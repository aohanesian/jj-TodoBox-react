import React, {useState} from 'react';
import Item from "./Item";
import idNumbers from "./idNumbers";

function ToDoBox() {
    const [todoList, setTodoList] = useState([])
    const [inputValue, setInputVale] = useState('');
    const handleSubmit = (event) => {
        event.preventDefault()
        setTodoList([inputValue, ...todoList,]);
        setInputVale('');
    }
    const handleDelete = keyIndex => {
        return setTodoList(todoList.filter((item, itemIndex) => itemIndex !== keyIndex))
    }

    return (
        <React.Fragment>
                <div className="mb-3">
                    <form onSubmit={handleSubmit} className="d-flex">
                        <div className="me-3">
                            <input type="text"
                                   onChange={event => setInputVale(event.target.value)}
                                   required
                                   value={inputValue}
                                   className="form-control"
                                   placeholder="I am going..."/>
                        </div>
                        <button type="submit" className="btn btn-primary">add</button>
                    </form>
                </div>
            {todoList.map((item, index = Number(idNumbers().next().value)) => {
                return <Item id={index} key={index} task={item} onRemove={() => handleDelete(index)}/>
            })}
        </React.Fragment>
    )
}

export default ToDoBox;