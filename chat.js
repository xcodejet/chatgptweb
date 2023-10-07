const EveloCode = {
    sendMessage: (text) => {
        fetch(`https://vihangayt.me/tools/chatgpt3?q=`+text)
        .then((evelocode)=> evelocode.json())
        .then(data => {reply = data.data;
          if(data){
            EveloCode.sendReply(reply)
          }else{
            return 'no-reply'
          }
        })
    },
    sendReply: (reply) => {
        chatMessages.innerHTML += `<h3 class="reciever">${reply}</h3>`
        chatMessages.scrollTo(0, chatMessages.scrollHeight)
    }
}
const send = () => {
    let text = typingBar.value || 'hi'
    chatMessages.innerHTML += `<h3 class="sender">${text}</h3>`
    typingBar.value = ""
    chatMessages.scrollTo(0, chatMessages.scrollHeight)
    EveloCode.sendMessage(text)
}
//<input type="text" id="typingBar"></input>
//<button onclick="send()"></button>

typingBar.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    send()
  }
});