document.body.className = 'w-3/4 mx-auto'
document.body.innerHTML += '<h1> Welcome </h1>'
document.body.innerHTML += '<div>This is div1</div>'
document.body.innerHTML += '<div></div>'
document.body.getElementsByTagName('h1')[0].id = 'header'
document.children[0].children[1].lastElementChild.innerHTML = '<p>This is para</p>' + '<p>This is para</p>'

document.body.innerHTML += '<div class="aura">\n' +
    '  <button class="btn" onclick="btnSayHello()">Say Hello</button>\n' +
    '</div>'
document.body.innerHTML += '<div class="aura">\n' +
    '  <button class="btn" onclick="btnWho()">Who?</button>\n' +
    '</div>'
document.body.innerHTML += '<div class="aura">\n' +
    '  <button class="btn" onclick="btnAddress()">Address</button>\n' +
    '</div>'
document.body.innerHTML += '<div class="aura">\n' +
    '  <button class="btn" onclick="btnEmail()">Email</button>\n' +
    '</div>'


function btnSayHello() {
    console.log('Say Hello Clicked!')
    document.getElementById('header').innerText = 'Hello'
}

function btnWho() {
    console.log('Who? Clicked!')
    document.body.children[2].innerText = "From K_CPAC"
}

function btnAddress() {
    document.body.children[3].firstElementChild.innerHTML = '<b>Shaniwar Peth Near Gujar Hospital</b>'
}

function btnEmail() {
    document.body.children[3].lastElementChild.innerText = 'siitkarad@sunbeaminfo.com'
}

document.body.innerHTML += '<link href="https://cdn.jsdelivr.net/npm/daisyui@5" rel="stylesheet" type="text/css" />\n' +
    '<script src="https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"></script>'