import TodoApp from "./components/Todo"

export default function App() {
  return (
      <div className="bg-gray-200 w-full h-screen flex justify-center items-center flex-col">
          <h1 className="font-bold text-4xl">My Todo List</h1>
          <TodoApp />
      </div>
  )
};