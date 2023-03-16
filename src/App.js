import Todo from "./Todo";
import "./App.css";

function App() {
  return (
    <div className="App w-full h-screen bg-blue-400 text-white">
      <h1 className="text-3xl font-bold p-6">Todo App</h1>
      <Todo />
    </div>
  );
}

export default App;
