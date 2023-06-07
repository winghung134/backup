import TodoList from "./List";
export function Content() {
  return (
    <div className="content">
      <div className="Left">
    normal space
    <TodoList></TodoList>
      </div>
     <br></br>
      <div className="Right">
     Special 
        <button className="Card">Testing</button>
        <button className="Card">Setting</button>
      </div>
    </div>
  );
}
