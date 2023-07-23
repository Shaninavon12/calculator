import {  useState } from "react";
function App() {
  const [operator, setOperator ] = useState("");
  const [result, setResult]=useState("");
  const [firstVar, setFirstVar]=useState("");
  const [secondVar, setSecondVar]=useState("");
  const handleChange1 = (event) => {
     setFirstVar(event.target.value);
  };
  const handleChange2 = (event) => {
    setSecondVar(event.target.value);
 };
  const math = (a, b, sign) =>{
	if(sign === "+" ){
		return (a+b);
	}
	else if(sign === "-" ){
		return (a-b);
	}
	else if(sign === "*" ){
		return (a*b);
	}
	else if(sign === "/" ){
		return (a/b);
	}
  }
  const calculateresultult = ()=>{
	setResult(math(Number(firstVar),Number(secondVar),operator));
   };
   function onClear(){
	setFirstVar("");
	setSecondVar("");
	setResult("");
   }

	return (
		<div className="App">
			<div className="calculator">
				<input
				type="number"
				className="firstVar"
				onChange={handleChange1}
				/>
				<div className="operators">
					<button type="button" onClick={()=>setOperator('+')}>+</button>
					<button type="button" onClick={()=>setOperator('-')}>-</button>
					<button type="button" onClick={()=>setOperator('*')}>x</button>
					<button type="button" onClick={()=>setOperator('/')}>/</button>
				</div>
				<div className="digits">

          <input
           type="number"
		   className="secondVar"
		   onChange={handleChange2}
           />

		   <h1></h1>
		   <button type="button" onClick={calculateresultult}>=</button>
		   <h1></h1>
		   <label className="showresultult">result:{result}</label>
		   <h1></h1>
		   <button onClick={onClear()} >DEL</button>

				</div>
			</div>
		</div>
	);
}

export default App;
