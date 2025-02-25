const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.Lang = "en-US"

const btn = document.querySelector("#btn")
btn.addEventListener("click", ()=>{
    

    //convert text to voice
    function speak(text){
        const abc = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(abc);
    }

    function handleCommands(command){
        if(command.includes("open youtube")){
            speak("Opening Youtube... ");
            window.open("https://www.youtube.com", "_blank");
        }else if(command.includes("open facebook")){
            speak("Opening facebook... ");
            window.open("https://www.facebook.com", "_blank");
        }else if(command.includes("open instagram")){
            speak("Opening instagram... ");
            window.open("https://www.instagram.com", "_blank");
        }else{
            speak("search on google")
            window.open(`https://www.google.com/search?q=${command}`, "_blank")
        }
    }
    speak("Hello Tom, how can i help you")

    setTimeout(() => {
        btn.innerHTML = "Listening..."
        btn.style.backgroundColor = "red"
        recognition.start();
    }, 2000);

    recognition.onresult= (event)=>{
        const command = event.results[0][0].transcript.toLowerCase()
        handleCommands(command)
    };
    recognition.onend = () =>{
        btn.innerHTML = "👂🏻Start Listen..."
        btn.style.backgroundColor = "#4CAF50"
    };
});

