const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.Lang = "en-US"

const btn = document.querySelector("#btn")
btn.addEventListener("click", ()=>{
    recognition.start()

    //convert text to voice
    function speak(text){
        const abc = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(abc);
    }

    function handleCommands(command){
        if(command.includes("Open youtube")){
            speak("Opening Youtube... ")
            window.open("https://www.youtube.com", "_blank")
        }else if(command.includes("Open facebook")){
            speak("Opening facebook... ")
            window.open("https://www.facebook.com", "_blank")
        }else if(command.includes("Open instagram")){
            speak("Opening instagram... ")
            window.open("https://www.instagram.com", "_blank")
        }else{
            speak("search on Youtube")
        }
    }
    speak("Hello Tom, how can i help you")

    recognition.onresult= (event)=>{
        console.log(event)


    }
});

