import './App.css';
import logo from './logo.svg'
import Nav from './Nav';
import Counter from './Counter';
import ToDo from './ToDo';

function App() {
  function add(){
    console.log("React");
  }
  function sub(a,b){
    console.log(a-b);  }
  return (
    <div className="App">
      <img src={logo} alt="logo" />
      <h1>heading</h1>
      <button onClick={add}>Click Here</button>
      <button onClick={()=>sub(237,368)}>Subtraction</button>
      
      <Nav />
      <Counter />
      <ToDo />
    </div>
  );
}

export default App;
