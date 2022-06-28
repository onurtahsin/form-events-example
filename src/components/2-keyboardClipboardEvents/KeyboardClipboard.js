import { useState } from "react"

const KeyboardClipboard = () => {
  const [inputValue , setInputValue] = useState('');
  const handleKeyDown = (e)=>{
    // console.log(e.keyCode); KEYCODE hangi tuşa basıldığının sayısal değerini bize söyleney code
    e.target.value = e.target.value.toUpperCase();
    e.keyCode === 13 && alert('did you press Enter ? really ?')
  }
  const handleAreaPaste =(e)=>{
    e.target.value = e.clipboardData.getData('text').toLowerCase(); //*büyük harf olarak aldığımız şeyleri küçük harfe çevirme yolu clipboardData.getData('text') şeklinde yapılabilir
    e.target.style.border = "3px solid red"
    e.target.style.backgroundColor = "purple"
    e.target.style.color = "white"

    e.preventDefault();
  }
  const handleAreaChange =(e)=>{
    if(!e.target.value){
      e.target.style.border = '1px solid black'
      e.target.style.backgroundColor = 'white'
      e.target.style.color = 'black'
    }
  }


    return (
      <div className="container text-center">
        <h2>Clipboard Events</h2>
      <input type="text"  value={inputValue} onChange={(e)=>setInputValue(e.target.value)} onKeyDown ={handleKeyDown}/>
      <p onCopy={()=>alert('kopyalama alarmı')} className="text-start m-4">{inputValue} </p>
      <textarea name="area" id="area" cols="30" rows="10" onPaste={handleAreaPaste} onChange = {handleAreaChange}></textarea>
    </div>
  )
  
}

export default KeyboardClipboard
