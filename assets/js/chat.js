
// This is front side.

const displayChat = document.querySelector(".chatDisplay");
const jsForm = document.querySelector(".jsForm");
const chatForm = document.querySelector(".chatForm");
const input = jsForm.querySelector("input");
const nickname = localStorage.getItem("nickname");

const displayMessage = (message, nickname) => {
    const li = document.createElement("li");
    li.innerHTML = `
    <span class="author">${nickname}:${message}</span>
    `;
    displayChat.appendChild(li);
}

const appendMsg = ({message, nickname}) => displayMessage(message, nickname);

const handleSubmit = (event) => {
    event.preventDefault();
    const {value} = input;
    window.socket.emit(window.events.sendMsg, {message:value});
    displayMessage(value, nickname);
    input.value = "";
}

if(chatForm){
    jsForm.addEventListener("submit", handleSubmit);
    window.socket.on(window.events.newMsg,appendMsg);
}