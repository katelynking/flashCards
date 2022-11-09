import { useState } from "react";
import { v4 as uuidv4 } from "uuid";

export default function App() {
  const [item, setItem] = useState({});
  const [items, setItems] = useState([]);

  const add = (e) => {
    e.preventDefault();
    const { question, answer } = item;
    const formValid = question && answer;
    if (!formValid) {
      return;
    }
    setItems((items) => [
      ...items,
      {
        id: uuidv4(),
        ...item
      }
    ]);
  };

  const deleteItem = (index) => {
    setItems((items) => items.filter((_, i) => i !== index));
  };

  return (
    <div className="App">
      <form onSubmit={add}>
        <div>
          <label>question</label>
          <input
            value={item.question}
            onChange={(e) =>
              setItem((item) => ({ ...item, question: e.target.value }))
            }
          />
        </div>
        <div>
          <label>answer</label>
          <input
            value={item.answer}
            onChange={(e) =>
              setItem((item) => ({ ...item, answer: e.target.value }))
            }
          />
        </div>
        <button type="submit">submit</button>
      </form>
      {items.map((item, index) => {
        return (
          <div key={item.id}>
            <b>question</b>
            <p>{item.question}</p>
            <b>answer</b>
            <p>{item.answer}</p>
            <button onClick={() => deleteItem(index)}>delete</button>
          </div>
        );
      })}
    </div>
  );
}