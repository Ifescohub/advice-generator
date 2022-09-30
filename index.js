
document.getElementById("dice-icon").addEventListener("click", ()=>{
    fetch("https://api.adviceslip.com/advice")
        .then(response => response.json())
        .then(data => {
            document.getElementById("advice-id").textContent = data.slip.id;
            document.getElementById("advice").textContent = data.slip.advice;
        });
});