import { BrowserRouter, Routes, Route } from "react-router-dom";
import CreateNote from "./Pages/CreateNote";
import NoteRoom from "./Pages/NoteRoom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<CreateNote />} />
        <Route path="/note/:id" element={<NoteRoom />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
