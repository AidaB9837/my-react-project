import React from "react";
import { LanguageContext } from "./LanguageContext";

/*Context 02: Consume the `LanguageContext` within the `DisplayLanguage` component by using the context consumer, 
and show the selected language in an `h1` tag.*/
const String = {
    en: {
        currentLanguage: "You have selected the English language!"
    },
    
    it: {
        currentLanguage: "Hai selezionato la lingua Italiana!"
    }
}

export class DisplayLanguage extends React.Component {
    render() {
        return <LanguageContext.Consumer>
            {language => {
                return <h1>{String[language].currentLanguage}</h1>
            }}
        </LanguageContext.Consumer>
    }
}