import './Password.css'
import { useState ,useCallback, useEffect,useRef} from 'react'
export default function Password() {
    const[length,setlength]=useState(8)
    const [NumberAllowed, setNumberAllowed] = useState(false)
    const [CharAllowed, setCharAllowed] = useState(false)
    const [password, setpassword] = useState("")
    const passref=useRef(null);
    function changelength(e){
        setlength(e.target.value)
    }
    function NumberAllowedBox(e){
  
      setNumberAllowed(e.target.checked)
    }
    function CharacterAllowed(e){
      setCharAllowed(e.target.checked)
    }
    const copypass=useCallback(()=>{
      passref.current?.select();
      window.navigator.clipboard.writeText(password)
    },[password])
    const letters = [
      'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M',
      'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z','a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm','n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
    ];
    const numbers = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
    const symbols = ['@', '!', '~', '$', '%', '#', '^', '&', '*', '(', ')'];
    const GeneratePass=useCallback(()=>{
      let pass='' ;
      let fullArray=[...letters]
      if(NumberAllowed) fullArray=[...fullArray,...numbers]
      if(CharAllowed) fullArray=[...fullArray,...symbols]
      for(let i=0; i<=length;i++){
        let randomNumber=Math.floor(Math.random()*fullArray.length);
       pass+=fullArray[randomNumber];
      }
      setpassword(pass);
    },[length,NumberAllowed,CharAllowed,setpassword]
  )
      useEffect(() => {
        
      GeneratePass()
        
      }, [length, NumberAllowed, CharAllowed])
      return (
        
    <div>
      <div className="container">
                <h3>Password Generator</h3>
              <div className="pass">
              <input type="text" className='passbox' name="password" id="password" value={password} ref={passref}/>
              <button className="copy" onClick={copypass}>copy</button>
        </div>
        <div className="buttons">
              <input type="range" className='rangebox' name="range" id="range" min={4} max={20} value={length} 
              onChange={changelength}  /><span>length({length})</span>
              <input type="checkbox" className='checkbox' name="checkbox" id="check" checked={NumberAllowed}
                 onChange={NumberAllowedBox}
              /><span>Number</span>
              <input type="checkbox" className='checkbox' name="checkbox" id="check2" checked={CharAllowed} 
              onChange={CharacterAllowed} /><span>Characters</span>
        </div>
      </div>
    </div>
  )
}
