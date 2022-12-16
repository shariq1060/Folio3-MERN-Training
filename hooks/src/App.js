import React ,{useState,useReducer,useEffect,useRef} from "react";
import Auth from "./Auth";
import AuthContext from "./auth-context";

function App() {

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

  const login = () => {
    setauthstatus(true);
  };

  useEffect(() => {
    setTimeout(() => {
      setValue((value) => value + 1);
    }, 0);  
  }, []);
  
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
          <input size={50} type="text" placeholder="Its Refhook, Give it a try........" ref={inputRef}></input>
          <button onClick={RefExample} >Refhook</button>
          <p>-----------------------------------------------------------------------------------</p>
          <React.Fragment>
            <AuthContext.Provider value={{ status: authstatus, login: login }}>
               <Auth />
            </AuthContext.Provider>
          </React.Fragment>
          <p>-----------------------------------------------------------------------------------</p>
    </div>
  );
}

export default App;
