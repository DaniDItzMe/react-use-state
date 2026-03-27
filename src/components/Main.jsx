import languages from "../languages"
import Card from "./Card"
export default function Main(){

    return(
        
        <main>
            <div className="card-container">
                
                {
                    languages.map(language =>(
                        <Card key={language.id} language={language.title} description={language.description}></Card>
                    ))
                }
            </div>
        </main>
        
    )

}