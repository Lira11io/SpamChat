import { useState } from "react";
import "./chat.css";

export default function Chat() {
  const [message, setMessage] = useState([]);
  const [inputValue, setInputValue] = useState("");

  const checkSpam = (str) => {
    const regex = /viagra|xxx/gi;
    return str.replace(regex, "***");
  };

  const handlInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleAddMessege = (e) => {
    e.preventDefault();
    const newMessege = checkSpam(inputValue);
    setMessage([newMessege, ...message]);
    setInputValue("");
  };

  return (
    <div className="chat">
      <header className="chat-header">
        <h1 className="chat-title">Форум с комментариями</h1>
      </header>
      <main className="chat-main">
        <div className="container">
          <div className="comments-chat">
            <div className="comments-chat-input">
              {message.map((message, index) => (
                <p key={index}>{message}</p>
              ))}
            </div>
          </div>
          <div className="comments">
            <div className="comments-form">
              <label className="comments-form-label" htmlFor="form-input">
                Добавьте свой комментарий:
              </label>
              <textarea
                className="comments-form-input"
                id="form-input"
                value={inputValue}
                onChange={handlInputChange}
              />
            </div>
            <button className="comments_btn" onClick={handleAddMessege}>
              SEND
            </button>
          </div>
        </div>
      </main>
    </div>
  );
}
