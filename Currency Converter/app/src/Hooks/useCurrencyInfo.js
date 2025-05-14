import {useState,useEffect} from 'react'
function useCurrencyInfo(currency){
    const [Data, setData] = useState({})
    useEffect(()=>{
        // fetch(`https://cdn.jsdelivr.net/gh/fawazahmed0/currency-api@1/latest/currencies/${currency.toLowerCase()}.json`)
        fetch(`https://api.frankfurter.app/latest?from=${currency}`)
        .then((res)=>res.json())
        .then((res)=>setData(res[currency.toLowerCase()]))

    },[currency])
    return Data
}
export default useCurrencyInfo