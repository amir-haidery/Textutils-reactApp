import React,{useState} from  'react'

export default function Textform(props) {
   
    const handleUpClick = () =>
    {
        console.log('Uppercase was clicked');
        let newtext = text.toUpperCase();
        settext(newtext);
        props.showAlert("Your text has been converted to Uppercase ","success")
    }
    /*After this, you will be able to enter text in your document and by pressing 
    the ‘Convert to uppercase’ you will be able to convert your text in uppercase*/
    
    const handleOnChange = (event) => {
        
        settext(event.target.value);
        
    }
    const handleLoClick = () => {
        let newtext = text.toLowerCase();
        settext(newtext);
        props.showAlert("Your text has been converted to lowercase ","success")
    }
    const handleclearClick = () => {
        let newtext = '';
        settext(newtext);
    }
    
    const handleCopy = () => {
        var text = document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Your text has been copied ","success")
        // alert("Copied the text: " );
    }
    
    const handleExtraSpaces = () => {
        var newtext = text.split(/[  ]+/);
        settext(newtext.join(" "))
        // alert("Extra Spaces remove from text " );
        props.showAlert("Extra spaces has been remove from your text ","success")
    }
    
    
    const [text, settext] = useState('');
    // text = ("mahdfksjhaksdjfhkj")wrong way to change the state
    // settext=("ajkhskjhdfkjhkldf")right way to change the state
    return (
        <>
        <div className="container" style={{ color:  props.mode === 'dark' ? 'white' : 'black' }}>
              <h1>{props.header}</h1>
            <div className="mb-3">
           
                    <textarea className="form-control my-2" value={text} onChange={handleOnChange} style={{ backgroundColor:  props.mode === 'dark' ? '#0e1e39' : 'white',color:props.mode === 'dark' ? 'white' : 'black'  }} id="myBox" rows="8"></textarea>
            </div>
                <button disabled={ text.length===0} className="btn btn-primary mx-2 my-2"  onClick = {handleUpClick} >Convert Uppercase</button>
            <button disabled={ text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleLoClick} >Convert Lowercase</button>
            <button disabled={ text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleclearClick} >Clear Text</button>
            <button disabled={ text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleCopy} >Copy Text</button>
            <button disabled={ text.length===0} className="btn btn-primary mx-2 my-2" onClick = {handleExtraSpaces} >Remove Spaces</button>
            
            </div>
        <div className="container my-3"  style={{ color:  props.mode === 'dark' ? 'white' : 'black' }}>
                <h1>Your Text Summary</h1>
                <p><b>{text.split(" ").filter((element)=>{return element.length !==0}).length} Word and {text.length}</b></p>
                <p>{0.008*text.split(" ").filter((element)=>{return element.length !==0}).length} Minutes Read</p>
                <h2>Preview</h2>
                <p>{text.length>0?text:"Nothing to preview"}</p>
                
        </div>
        </>
    )
}
