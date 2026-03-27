import { useState } from "react"

export default function Card(props){

    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="card">
            <button className={isOpen && "open"} onClick={() => setIsOpen((current)=> !current)}>{props.language}</button>
            {isOpen && <p>{props.description}</p>}
        </div>
    )

}