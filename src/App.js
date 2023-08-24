import { useEffect, useState } from "react";

function App() {
  const [text, setText] = useState('')
  function handleTextChange(e) {
    setText(e.target.value)
  }
  const [text2, setText2] = useState('')

  function handleSendMsg(e) {
    if (e.key === 'Enter') {
      window.socket.send(text)
    }
  }

  useEffect(() => {
    window.socket.onmessage = (e) => {
      setText2(e.data)
    }
  }, [])

  return (
    <div>
      <textarea
        value={text}
        onChange={handleTextChange}
        onKeyDown={handleSendMsg}
       />
      <textarea value={text2} readOnly />
    </div>
  );
}

export default App;
