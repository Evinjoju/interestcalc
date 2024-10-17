import { TextField,Stack,Button} from '@mui/material'
import './App.css'
import {useState} from 'react'


function App() {

  const [Interest, SetInterest] = useState(0)
  const [principle,Setprinciple] = useState(0)
  const [rate,SetRate] = useState(0)
  const [year,SetYear] = useState(0)

  const [invalidPrinciple,setInvalidPrinciple]= useState(false)
  const [invalidRate,setInvalidRate]= useState(false)
  const [invalidYear,setInvalidYear]= useState(false)


  const validateInputs = (inputTag)=>{
    console.log(typeof inputTag);
    const {name,value} = inputTag
    console.log(name,value);
    console.log(!! value.match(/^[0-9]*.?[0-9]+$/));
    console.log(!! value.match(/^\d*\.?\d+$/));
    if(name=="principle"){
      Setprinciple(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidPrinciple(false)
      }else{
        setInvalidPrinciple(true)
      }
      
    }
    if(name=="rate"){
      SetRate(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidRate(false)
      }else{
        setInvalidRate(true)
      }
      
    }
    if(name=="year"){
      SetYear(value)
      if(!!value.match(/^\d*\.?\d+$/)){
        setInvalidYear(false)
      }else{
        setInvalidYear(true)
      }
      
    }


    
  }

  const handleCalculate = (e)=> {
    e.preventDefault()
    console.log("Inside handle calculate");
    if(principle && rate && year){
      SetInterest(principle*rate*year/100)
}
else {
  alert("please fill the form completly !!")
}
    
  }

  const handleReset = ()=>{
    SetInterest(0)
    Setprinciple(0)
    SetRate(0)
    SetYear(0)
    setInvalidPrinciple(false)
    setInvalidRate(false)
    setInvalidYear(false)

  }



  return (

    <div style={{ width: "100%", minHeight: '100vh' }} className='d-flex justify-content-center align-items-center bg-dark'>

      <div style={{ width: '600px' }} className='bg-light rounded p-5'>
        <h3>Simple Interest App</h3>
        <p>Calculator your Simple Interest Easily!!</p>
        <div className="bg-warning p-3 text-light text-center rounded">
          <h1>  ₹ {Interest} </h1>
          <p className='fw-bolder'>Total Simple Interest</p>
        </div>
        <form className='mt-5'>
          {/* principle */}
          <div className='mb-3'>
            <TextField value={principle ||""} name='principle' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-principle" label=" ₹ Principle Amount " variant="outlined" />
          </div>
          {/* invalid principle */}
          { invalidPrinciple && <div className='mb-3 text-danger fw-bolder'>
            Invalid Principle Amount !!
          </div>}
          {/* rate */}
          <div className='mb-3'>
            <TextField value={rate ||""} name='rate'  onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-rate" label="rate (%)" variant="outlined" />
          </div>
           {/* invalid rate */}
           { invalidRate && <div className='mb-3 text-danger fw-bolder'>
            Invalid Rate  !!
          </div>}
          {/* year */}
          <div className='mb-3'>
            <TextField value={year ||""} name='year' onChange={(e)=>validateInputs(e.target)} className='w-100' id="outlined-year" label="year (yr) " variant="outlined" />
          </div>
           {/* invalid year */}
           { invalidYear && <div className='mb-3 text-danger fw-bolder'>
            Invalid Year  !!
          </div>}
          <Stack direction="row" spacing={2}>
          <Button type='submit' onClick={handleCalculate} disabled={invalidPrinciple || invalidRate || invalidYear} style={{width:'50%',height:'70px'}} className='bg-dark' variant="contained">Calculatte</Button>
          <Button onClick={handleReset} style={{width:'50%',height:'70px'}}  variant="outlined">Reset</Button>

          </Stack>
        </form>

      </div>

    </div>

  )
}

export default App
