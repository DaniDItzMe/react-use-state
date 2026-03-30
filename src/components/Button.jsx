export default function Button(props){

    const {language, state} = props;

    return(
        <button className={state.activeButton == language.title ? "open" : ""} onClick={()=> state.setActiveButton(language.title)}>{language.title}</button>
    )

}