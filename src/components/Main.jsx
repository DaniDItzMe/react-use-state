import languages from "../languages"
import Card from "./Card"
import { useState } from "react"
export default function Main(){

    const [activeButton, setActiveButton] = useState(languages[0].title)

    console.log(languages.find(item => {return item.title === "HTML" ? item.description : languages[0].description}));
    
    return(
        
        <main>
            <div className="">
                <ul className="buttons-container">
                    {
                        languages.map(language => (
                            <li key={language.id}><button className={activeButton == language.title ? "open" : ""} onClick={()=> setActiveButton(language.title)}>{language.title}</button></li>
                        ))
                    }
                </ul>
                
            </div>
            <div className="card-container">
                
                <Card title={activeButton} description={languages.find(item => item.title === activeButton ).description}></Card>

            </div>
        </main>
        
    )

}