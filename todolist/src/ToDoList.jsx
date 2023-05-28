import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import TodoListItem from "./components/TodoListItem";
import Button from "./components/Button";
import Input from './components/Input';

function ToDoList() {

    const [item,setItem]= useState('');
    const [list,setList]= useState([]);

    const onChangeList = (e) => {
        setItem(e.target.value);
    }
    
    const inputKeyDown = (e) => {
        switch (e.key){
            case 'Enter':
                cadastrar();
                break;
            case 'Escape':
                setItem("");
                break;
        }
    }

    const cadastrar = (e) => {
        if (item=='') return;
        setList([...list, item]);
        setItem("");
    }

    const removeFromItems = (index) => {
        let items = list;
        items.splice(index, 1);
        setList([...items]);
    }


    return (
        <div className="container">
            <h2>ToDoList</h2>
            <div className="row">
                <div className="mb-3">
                    <Input tipo={"text"} valor={item}  funOnChange={onChangeList}
                    funOnKeyDown={inputKeyDown} classe={"form-control"}
                    />
                </div>
                <div className="mb-3">
                    <Button classe="btn btn-success" funOnClick={cadastrar} texto={"Cadastrar"}/>
                </div>

                { list.map((item, index) => (
                    <TodoListItem key={index} index={index} item={item} removeFromItems={removeFromItems} />
                ))}
            </div>
        </div>
    );
}

export default ToDoList;
