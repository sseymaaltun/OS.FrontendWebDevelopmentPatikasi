import React from 'react';
import { useState } from 'react';

function TodoApp() {
    // newTodo adında bir state oluşturduk,
    // Input’a bağladık (value={newTodo}),
    // Input değiştikçe state güncelleniyor (onChange),
    // Form gönderilince handleSubmit çalışıyor, alert gösteriyor ve inputu temizliyor.   
    const [newTodo, setNewTodo] = useState('');
    const [todos, setTodos] = useState([]); // yazılan todo’ların tam listesi
    const [filter, setFilter] = useState("all");


    function handleSubmit(e) {
    e.preventDefault(); 
     if (!newTodo.trim()) return; // boşlukları önle
    const newItem = { //listeye yeni todo eklemek
    id: Date.now(), // Her todo’ya özel benzersiz bir ID veriyoruz
    text: newTodo,  // Yazılan metin burada tutuluyor
    completed: false // Şimdilik yapılmamış olarak başlıyor
    };
    setTodos([...todos, newItem]); //Bu objeyi todo listesine ekliyoruz Mevcut todos dizisini alır (...todos) Yeni oluşturduğumuz newItem'i en sona ekler Yeni bir dizi olarak setTodos ile günceller
    setNewTodo(''); 
    }

    function  toggleTodo(id){
      setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo ))
    }

    function deleteTodo(id) {
      setTodos(todos.filter((todo) => todo.id !== id));
    }

    function clearCompleted() {
      setTodos(todos.filter((todo) => !todo.completed));
    }

  function getFilteredTodos() {
    if (filter === "active") {
      return todos.filter((todo) => !todo.completed);
    } else if (filter === "completed") {
      return todos.filter((todo) => todo.completed);
    }
    return todos;
}


  return (
    <section className="todoapp">
      <header className="header">
        <h1>todos</h1>
        {/* Form ve input burada olacak */
            <form onSubmit={handleSubmit}>
                <input 
                className = "new-todo"
                placeholder='What needs to be done?'
                autoFocus
                value={newTodo}
                onChange = {(event) => {setNewTodo(event.target.value)}}/>
            </form>
        }
      </header>
      {/* todos dizisindeki her eleman için bir <li> etiketi oluşturuyor İçine yazdığın metni (todo.text) koyuyor React’in hata vermemesi için her elemana key={todo.id} veriyoruz */}
      <section className="main">
        <ul className="todo-list">
          {getFilteredTodos().map((todo) => (
            <li key={todo.id} className={todo.completed ? "completed" : ""}>
              <div className="view">
                <input
                  className="toggle"
                  type="checkbox"
                  checked={todo.completed}
                  onChange={() => toggleTodo(todo.id)}
                />
                <label>{todo.text}</label>
                <button className="destroy" onClick={() => deleteTodo(todo.id)}></button>
              </div>
            </li>
          ))}

        </ul>
      </section>
      {/* Main ve footer bölümleri burada olacak */}
      <footer className="footer">
        <span className="todo-count">
          {todos.filter((todo) => !todo.completed).length} items left
        </span>
      <ul className="filters">
        <li>
          <button
            className={filter === "all" ? "selected" : ""}
            onClick={() => setFilter("all")}
          >
            All
          </button>
        </li>
        <li>
          <button
            className={filter === "active" ? "selected" : ""}
            onClick={() => setFilter("active")}
          >
            Active
          </button>
        </li>
        <li>
          <button
            className={filter === "completed" ? "selected" : ""}
            onClick={() => setFilter("completed")}
          >
            Completed
          </button>
        </li>
      </ul>

        <button className="clear-completed" onClick={clearCompleted}>
          Clear completed
        </button>
      </footer>
    </section>
  )
}

export default TodoApp