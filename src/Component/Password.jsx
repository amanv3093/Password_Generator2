import React, { useRef, useState } from 'react'
import copy from 'clipboard-copy';
function Password() {
    let upper = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    let lower=upper.toLowerCase();
    let symbol='!@#$&*%^~';
    let number='0123456789';
   
    
    
    // let [upperState,setUpperState]=useState(false);
    // let [lowerState,setLowerState]=useState(false);
    // let [numberState,setNumberState]=useState(false);
    // let [passwordState,setPasswordState]=useState(false);
    let upperState = useRef(false);
    let lowerState = useRef(false);
    let numberState = useRef(false);
    let passwordState = useRef(false);
    const [PasswordGen,setPasswordGen]=useState('')
    let range = useRef(8);
    


    let rangeVal=(e)=>{
        range.current = e.target.value;
       
        
        
    }

    let PasswordBtn = () => {
        console.log(upperState.current.checked);
        if (range.current <= 8 && range.current>=50) {
            alert("Length out of mentioned range")
        } else {
            let ans = '';
            if (upperState.current.checked) {
                ans += upper;
            }
            if (lowerState.current.checked) {
                ans += lower;
            }
            if (numberState.current.checked) {
                ans += number;
            }
            if (passwordState.current.checked) {
                ans += symbol;
            }
    
            if (ans === '') {
                alert('--All checks are empty--')
            } else {
                let password = '';
                for (let i = 0; i < range.current; i++) { 
                    password += ans.charAt(Math.floor(Math.random() * ans.length));
                }
              
                setPasswordGen(password)
                console.log(password);
                
            }
        }
    };
    
    
   
    let copyToClipboard = () => {
        if(PasswordGen.current===''){
             alert('Password field is empty,nothing to copy!')
        }else{
            let para = document.getElementById('EncryptedPassword');
            copy(para.value);
            alert('Password copied')
        }
        
    }
      
    console.log("log");

  return (
    
 <div className='box'>
    <h1>Password Generator</h1>
    <div className='box1'>
    <input type='text' disabled value={PasswordGen} id='EncryptedPassword'  />
            <button onClick={copyToClipboard}>copy</button>
    </div>
   
   <div className='box2'>
   
    <label className='Password-length'>
    <span>
    Select Password length<b>(**8-50 characters**)</b> </span>
    <input id="bot" type='number' defaultValue={range.current}  onChange={rangeVal} />
    </label>
   
    

    <label>
    
    <input type='checkbox'  ref={upperState}  />
    Include upper case
   </label> 


    <label>
    
    <input type='checkbox' ref={lowerState} />
    Include lower case
   </label>


    <label>
    
    <input type='checkbox' ref={numberState}  />
    Include numbers
   </label>



    <label>
    
    <input type='checkbox'  ref={passwordState}/>
    Include symbols
    </label>
    <button onClick={PasswordBtn}>Generate Password</button>
    </div>
    </div>
  )
}

export default Password


