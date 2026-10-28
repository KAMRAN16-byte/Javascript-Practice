document.body.className = 'flex w-3/4 mx-auto p-4 gap-3 flex-col'
const daisy = document.createElement('link')
daisy.rel = 'stylesheet'
daisy.href = 'https://cdn.jsdelivr.net/npm/daisyui@5'
daisy.type = 'text/css'

document.head.appendChild(daisy)

const tailwindcss = document.createElement('script')
tailwindcss.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'

document.head.appendChild(tailwindcss)

let div = document.createElement('div')
div.className = 'text-center font-bold text-2xl'
div.innerHTML = 'DOM Manipulation'
document.body.appendChild(div)

const h1 = document.createElement('h1')
h1.innerText = 'Welcome!'
h1.id = 'header'
document.body.appendChild(h1)

div = document.createElement('div')
div.id = 'mydiv'
div.innerText = 'this is div1'
document.body.appendChild(div)

const h2 = document.createElement('h2')
h2.innerText = 'Name'
document.body.appendChild(h2)

div = document.createElement('div')
const p1 = document.createElement('p')
p1.innerText = 'This is para'
const p2 = document.createElement('p')
p2.innerText = 'This is para'
p1.className = p2.className = 'para'
div.appendChild(p1)
div.appendChild(p2)
document.body.appendChild(div)

const lorem = document.createElement('p')
lorem.innerText = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem deserunt illo, aut dolore aliquam recusandae\n' +
    '        quaerat vero totam consequatur modi consequuntur incidunt maxime, dolorum eaque sapiente at velit atque odio.'
lorem.className = 'text-sm font-semibold text-justif';
document.body.appendChild(lorem)

div = document.createElement('div')
div.className = 'flex justify-between'

const buttons = [
    {innertext : 'Say Hello', onclick: btnSayHello},
    {innertext : 'Who?', onclick: btnWho},
    {innertext : 'Address', onclick: btnAddress},
    {innertext : 'Email', onclick: btnEmail}
]

buttons.forEach(info => {
    const temp = document.createElement('div')
    temp.className = 'aura'
    const btn = document.createElement('button')
    btn.className = 'btn'
    btn.innerHTML = info.innertext
    btn.onclick = info.onclick
    temp.appendChild(btn)
    div.appendChild(temp)
})

document.body.appendChild(div)

function btnSayHello() {
    document.getElementById('header').innerText = 'Hello world!'
    console.log("Hello world!")
}

function btnWho() {
    document.getElementById('mydiv').innerText = 'From K_CPAC'
}

function btnAddress() {
    document.getElementsByClassName('para')[0].innerHTML = '<b>Shaniwar Peth Near Gujar Hospital</b>'
}

function btnEmail() {
    document.getElementsByClassName('para')[1].innerText = 'siitkarad@sunbeaminfo.com'
}