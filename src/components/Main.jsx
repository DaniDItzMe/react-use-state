import languages from "../languages"
import Card from "./Card"
import Button from "./Button"
import { useState } from "react"
export default function Main(){

    const [activeButton, setActiveButton] = useState(languages[0].title)

    
    return(
        
        <main>
            <div className="">
                <ul className="buttons-container">
                    {
                        languages.map(language => (
                            <li key={language.id}><Button language={language} state={{activeButton: activeButton, setActiveButton: setActiveButton}}></Button></li>
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