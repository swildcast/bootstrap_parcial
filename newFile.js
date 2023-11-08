document.addEventListener(DOMcontentloaded, " , function () {",
    fetch('http://localhost:3000/hola/santiago')
        .then(Response => Response.json())
        .then(data => showBooks(data))
        .catch(error => console.log(error)));
