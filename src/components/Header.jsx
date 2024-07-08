import React from "react";
//import {meme_face} from "https://tse1.mm.bing.net/th?id=OIP.Cfa-rVz98huiYoBoSUf5UQHaIn&pid=Api&P=0&h=180"
import image from "../assets/meme-face.jpeg"
import image1 from "../assets/face.jpeg"

export default function Header(){
    return(
        
        <header className="header">
            <img src = {image1} className="header--image" alt="meme"/>
            <h2 className="header--title">Meme Generator</h2>
            <h4 className="header--project">React project</h4>
        </header>
        
    )
}