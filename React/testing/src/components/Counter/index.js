import { useState } from 'react'


function Counter() {
    const [count, setCount] = useState(0);
  return (
    <div>
        <h1>Counter</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count - 1)}>Azalt</button>
        <button onClick={() => setCount(count + 1)}>Arttır</button>   
    </div>
  )
}

export default Counter