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
mainDiv.className = 'w-full flex-1 min-h-0'
outerDiv.appendChild(mainDiv)

const tableDiv = document.createElement('div')
tableDiv.className = 'rounded-box border border-base-content/5 bg-base-100 overflow-y-auto h-full'
mainDiv.appendChild(tableDiv)

const table = document.createElement('table')
table.className = 'table table-pin-rows'
tableDiv.appendChild(table)

const thead = document.createElement('thead')
table.appendChild(thead)

const tr = document.createElement('tr')
thead.appendChild(tr)

let th = document.createElement('th')
tr.appendChild(th)

th = document.createElement('th')
th.innerText = 'Image'
tr.appendChild(th)

th = document.createElement('th')
th.innerText = 'Title'
tr.appendChild(th)

th = document.createElement('th')
th.innerText = 'Category'
tr.appendChild(th)

th = document.createElement('th')
th.innerText = 'Description'
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

function fetchData() {
    console.log("function called")
    const xhr = new XMLHttpRequest()

    xhr.open("GET", 'https://dummyjson.com/products')

    xhr.send()

    xhr.onreadystatechange = () => {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const result = JSON.parse(xhr.response)
            for (const product of result.products) {
                console.log(product)
                const {id, title, description, category, price,images} = product
                const tr = document.createElement('tr')
                let td = document.createElement('td')
                td.innerText = id
                tr.appendChild(td)

                td = document.createElement('td')
                const image   = document.createElement('img')
                image.src = images[0]
                image.className = 'w-16 h-16 object-cover rounded-md'
                td.appendChild(image)
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = title
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = category
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = description
                tr.appendChild(td)

                td = document.createElement('td')
                td.innerText = '$' +  price
                tr.appendChild(td)

                tbody.appendChild(tr)
            }
        }
    }
}