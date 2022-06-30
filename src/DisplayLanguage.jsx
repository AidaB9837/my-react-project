import { useContext } from "react";
import { LanguageContext } from "./LanguageContext";

/*useContext: Rewrite the DisplayLanguage component from Context 02 to be a function component,
 and access the LanguageContext through the useContext hook. */

export function DisplayLanguage() {
    const language = useContext(LanguageContext)
    
    return <h1>Current Language: {language}</h1>

}