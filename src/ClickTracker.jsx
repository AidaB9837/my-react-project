import React from "react";

/*Events 03: Create a ClickTracker component that renders three buttons. Implement a single event handler for all three buttons,
and track of which button was pressed last. Show the last button that was pressed in an h1 tag within the ClickTracker component.
Tip: you can use the event object to access the target property of the event. */

export class ClickTracker extends React.Component {
    state = {
        lastPressedButton: ""
    }

    trackLastButton = (event) => {
        this.setState({
            lastPressedButton: ""
        })

        this.setState((state) => ({
            lastPressedButton: state.lastPressedButton.concat(event.target.innerHTML)
        }))
    }

    anotherTrackLastButton = (event) => {
        this.setState({
            lastPressedButton: event.currentTarget.lastChild.alt
        })
    }

    render() {
/*        return <> 
                <h1>What was the last button pressed? {this.state.lastPressedButton}</h1>
                <button onClick={this.trackLastButton}>First</button> 
                <button onClick={this.trackLastButton}>Second</button> 
                <button onClick={this.trackLastButton}>Third</button> 
               </>
*/
/*Events 04: Modifiy the `ClickTracker` so that each button contains an image instead of a text.
How does this affect the event handler?
Tramite event.currentTarget.lastChild.alt della function anotherTrackLastButton l'utente riceverà info relative al button pressato.*/
        return <> 
        <h1>What was the last button pressed? {this.state.lastPressedButton}</h1>
        <button onClick={this.anotherTrackLastButton}><img src="https://qph.cf2.quoracdn.net/main-qimg-c4a8bb63f91785ded082be98fc8e1452-lq" alt="First"></img></button> 
        <button onClick={this.anotherTrackLastButton}><img src="https://1.bp.blogspot.com/-RMayZBSudhE/WT5kpM9lI2I/AAAAAAAACdQ/moQiwR4sqDMDjubc11soRLk8XzI5C_-ngCLcB/s1600/The_Earth_seen_from_Apollo_17%2B%25282%2529.jpg" alt="Second"></img></button> 
        <button onClick={this.anotherTrackLastButton}><img src="https://public.blenderkit.com/thumbnails/assets/0ef060ad5fda4847968c088d7828d759/files/thumbnail_d9f7cea0-d4f8-4402-b778-eabab069fddc.png.256x256_q85_crop-%2C.png" alt="Third"></img></button> 
        </>
        
            }
        }       
