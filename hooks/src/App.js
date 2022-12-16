import React ,{useState,useReducer,useEffect,useRef,useCallback,useMemo} from "react";
import Auth from "./Auth";
import AuthContext from "./auth-context";
import Todos from "./Todo";

function App() {
  const SlowDown = (num) => {
    for (let i = 0; i < 100000000; i++) {
      num += 1;
    }
    return num;
  };  

  const Reducer=(state,action) =>{
    switch(action.type){
      case "INCREMENT":
      return {count2: state.count2+1 ,show: state.show }
      case "toggleShowText":
      return {count2: state.count2 ,show: !state.show }
      default:
        return state
    }
}
  const inputRef = useRef(null)
  const [state,setState] = useReducer(Reducer, {count2:0, show:true })
  const [value,setValue] = useState(0)
  const [authstatus, setauthstatus] = useState(false);
  const [count, setCount] = useState(0);
  const calculation = useMemo(() => SlowDown(count), [count]);
  const [todos, setTodos] = useState([]);
  
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  const login = () => {
    setauthstatus(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setValue((value) => value + 1);
    }, 0);  
  }, []);
  
  const MemoIncrement = () => {
    setCount((c) => c + 1);
  };

  const Increment =() =>{
    setValue(value+1)
  }

  const Decrement =() =>{
    setValue(value-1)
  }

  const RefExample = () =>{
    inputRef.current.value="I am here with the help of refHook :)"
  } 

  return (
    <div >
      <button onClick={Decrement} >Deccrement</button>
      {value}
      <button onClick={Increment}>Increment</button>
      <p>-----------------------------------------------------------------------------------</p> 
      <br/>
      {state.count2}
      <button onClick={ () =>{
            setState({type:"INCREMENT"});
            setState({type:"toggleShowText"});
          }}>Increment</button>
      {state.show && <h3> Use Reducer do the trick here </h3>}
      <p>-----------------------------------------------------------------------------------</p>
      <br/>
      <input size={30} type="text" placeholder="Its Refhook, Give it a try........" ref={inputRef}></input>
      <button onClick={RefExample} >Refhook</button>
      <p>-----------------------------------------------------------------------------------</p>
      <React.Fragment>
        <AuthContext.Provider value={{ status: authstatus, login: login }}>
          <Auth />
        </AuthContext.Provider>
      </React.Fragment>
      <p>-----------------------------------------------------------------------------------</p>
      <div>
        Count: {count}
        <button onClick={MemoIncrement}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <p>-----------------------------------------------------------------------------------</p>
      <Todos todos={todos} addTodo={addTodo} />
    </div>
  );
}

export default App;
