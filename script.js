const recognition = new (window.SpeechRecognition || window.webkitSpeechRecognition)();
recognition.Lang = "en-US"

const btn = document.querySelector("#btn")
btn.addEventListener("click", ()=>{
    function speak(text){
        const abc = new SpeechSynthesisUtterance(text)
        window.speechSynthesis.speak(abc);
    }
});
