const daisyUI = document.createElement('link')
daisyUI.rel = 'stylesheet';
daisyUI.type = 'text/css';
daisyUI.href = 'https://cdn.jsdelivr.net/npm/daisyui@5'
document.head.appendChild(daisyUI);

const tailWindCSS = document.createElement('script')
tailWindCSS.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'
tailWindCSS.type = 'text/javascript'
document.head.appendChild(tailWindCSS);

const outerDiv = document.createElement('div')
outerDiv.className = 'w-full h-screen flex flex-col items-center p-3'
document.body.appendChild(outerDiv)

const headDiv = document.createElement('div')
headDiv.className = 'flex justify-center gap-2'

const h1 = document.createElement('h1')
h1.innerText = 'Fetch data using '
const b = document.createElement('b')
b.innerText = 'FETCH Axios'
b.className = 'font-sm text-2xl'
h1.className = 'font-sm text-xl mb-2'
headDiv.appendChild(h1)
headDiv.appendChild(b)
outerDiv.appendChild(headDiv)

const mainDiv = document.createElement('div')
mainDiv.className = 'w-3/5 flex-1'
outerDiv.appendChild(mainDiv)

const tableDiv = document.createElement('div')
tableDiv.className = 'overflow-x-auto rounded-box border border-base-content/5 bg-base-100'
mainDiv.appendChild(tableDiv)

const table = document.createElement('table')
table.className = 'table'
tableDiv.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const tr = document.createElement('tr')
thead.appendChild(tr)

let th = document.createElement('th')
tr.appendChild(th)

th = document.createElement('th')
th.innerText = 'Name'
tr.appendChild(th)

th = document.createElement('th')
th.innerText = 'Price'
tr.appendChild(th)

const tbody = document.createElement('tbody')
table.appendChild(tbody)

const btnDiv = document.createElement('button')
btnDiv.className = 'aura'
outerDiv.appendChild(btnDiv)

const btn = document.createElement('button')
btn.className = 'btn'
btn.innerText = 'Fetch'
btn.onclick = fetchData
btnDiv.appendChild(btn)


//load data.
async function fetchData() {
    axios.get("/Day6/AJAX/data.json")
        .then(res=>{
            for (let p of res.data.data) {
                const {pid, name, price} = p
                const tr = document.createElement('tr')
                const th = document.createElement('th')
                th.innerText = pid
                tr.appendChild(th)
                let td = document.createElement('td')
                td.innerText = name
                tr.appendChild(td)
                td = document.createElement('td')
                td.innerText = price
                tr.appendChild(td)
                tbody.appendChild(tr)
            }
        })
        .catch(err => console.log(err))
}






