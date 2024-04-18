import { BrowserRouter, Route, Router, Routes } from "react-router-dom";

import "./App.css";
import ChatPage from "./pages/ChatPage";
import HomePage from "./pages/HomePage";

const App = () => {
  return (
    <>
        <div className="App">
          <Routes>
            <Route path="/" exact element={<HomePage />} />
            <Route path="/chats" element={<ChatPage />} />
          </Routes>
        </div>
    </>
  );
};

export default App;