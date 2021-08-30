import React from 'react'
// import React,{useState} from 'react'

export default function About(props) {
    let myStyle = {
        color: props.mode === 'dark' ? 'white' : '#0e1e39',
        backgroundColor: props.mode === 'dark' ? '#0e1e39' : 'white',
    }
    


    //  const [myStyle, setMyStyle] = useState( {
    //     color: "black",
    //     backgroundColor:"white"
    //  })
    
    // const [btntext, setbtntext] = useState('Enable dark mode')
    
    
    // const toggleStyle = () => {
    //     if (myStyle.color === "black") {
    //         setMyStyle({
    //             color: "white",
    //             backgroundColor:"black"
    //         })
    //         setbtntext("Enable Light mode")
    //     }
    //     else {
    //         setMyStyle({
    //             color: "black",
    //             backgroundColor : "white"
    //         })
    //         setbtntext("Enable dark mode")
        
    //     }
            
        
    // }
            return (
                <div className="container" style={myStyle} >
                    <h1>About Us</h1>
          <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button" type="button" style={myStyle} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        <strong>Analyze Your text</strong>
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Analyze Your text</strong> TextUtils is a free character counter tool and that provides instant character count $ word count statstics for a giiven text. Textutils reports the numberof words and characters. thus it is suitable for writing text with / character limit.
    
                    </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        <strong>Free to Use</strong>
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong>Free to Use.</strong> TextUtils is a free character counter tool and that provides instant character count $ word count statstics for a giiven text. Textutils reports the numberof words and characters. thus it is suitable for writing text with / character limit.
         </div>
                    </div>
                </div>
                <div className="accordion-item">
                    <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                       <strong> Browser Compatible </strong>
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                    <div className="accordion-body" style={myStyle}>
                        <strong> Browser Compatible </strong>This word counter softer works in any web browser such as chrome, Firefox, Internet Explorer, safari, Opera. It suits to count characters in facebook, Blog, Books, Excel document, pdf document, essays, etc
          </div>
                    </div>
                </div>
                    </div>
                    {/* it was a button for enable and disable the about page componenty */}
            {/* <button onClick={toggleStyle} type="button" className="btn btn-primary my-3">{btntext}</button> */}
        </div>
    )
}
