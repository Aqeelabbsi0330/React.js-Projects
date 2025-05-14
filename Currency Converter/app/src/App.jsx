import { useActionState, useState } from 'react'

import './App.css'
import {Input} from './Components/Input'
import useCurrencyInfo from './Hooks/useCurrencyINfo'

function App() {
  const [Amount, setAmount] = useState(0)
  const [From, setFrom] = useState("usd")
  const [To, setTo] = useState("inr")
  const [ConvertAmount, setConvertAmount] = useState(0)
  const currencyInfo=useCurrencyInfo(From);
  const options = currencyInfo ? Object.keys(currencyInfo) : [];

  const swap=()=>{
    setFrom(To)
    setTo(From)
    setConvertAmount(Amount)
    setAmount(ConvertAmount)
  }
  const convert=()=>{
  setConvertAmount(Amount*currencyInfo[To])

  }
  return (
    <>
     <div
     
            className="container"
            style={{
                backgroundImage: `url('https://cdn.pixabay.com/photo/2014/11/04/20/21/dollars-517113_1280.jpg')`,
            }}
        >
            <div className="inner-container">
                <div className="form-wrapper">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert();
                        }}
                    >
                        <div className="input-box">
                            <Input label="From"
                            amount={Amount}
                            currencyOption={options}
                            onCurrencyChange={(c)=>{
                              // setAmount(Amount)
                              setFrom(From)
                            }}
                            onAmountChange={(amount)=>setAmount(amount)
                            }
                             selectCurrency={From}
                             />
                        </div>
                        <div className="swap-button-wrapper">
                            <button
                                type="button"
                                className="swap-button"
                                onClick={swap}
                            >
                                swap
                            </button>
                        </div>
                        <div className="input-box">
                            <Input label="To" 
                            amount={ConvertAmount}
                            currencyOption={options}
                            onCurrencyChange={(c)=>{
                              setTo(c)
                            }}
                             selectCurrency={From}
                             amountDisable
                             />
                        </div>
                        <button type="submit" className="submit-button">
                            Convert{From.toUpperCase()} To {To.toUpperCase()}
                        </button>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default App
