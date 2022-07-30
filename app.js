const url = 'http://localhost:3030/jsonstore/messenger';
let showBtn = document.getElementById('refresh');
showBtn.addEventListener('click', showMsg);
let submitBtn = document.getElementById('submit');
submitBtn.addEventListener('click', addMsg);
let textArea = document.getElementById('messages');

function attachEvents(){

}

function showMsg(){

    fetch(url)
    .then(res => res.json())
    .then(data => {
        let comments = [];
        Object.values(data).forEach(m => {
            comments.push(`${m.author}: ${m.content}`);
            textArea.value = comments.join('\n');
        })
    });
}

function addMsg(){

    let authorInput = document.querySelector('[name="author"]');
    let contentInput = document.querySelector('[name="content"]');

    fetch(url, {
        method: "POST",
        headers: {
            'Content-type': 'application/json',
        },
        body: JSON.stringify({
            author: authorInput.value.trim(),
            content: contentInput.value.trim()
        })
    })
    
    authorInput.value = '';
    contentInput.value = '';
}


attachEvents();