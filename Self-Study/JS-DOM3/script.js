document.body.classList = "w-full h-screen"

const daisyUI = document.createElement('link')
daisyUI.rel = "stylesheet"
daisyUI.href = "https://cdn.jsdelivr.net/npm/daisyui@5"
daisyUI.type = "text/css"
document.head.appendChild(daisyUI)

const script = document.createElement('script')
script.src = "https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4"
script.type = "text/javascript"
document.head.appendChild(script)

const outerDiv =  document.createElement('div')
outerDiv.className = "h-full flex flex-col items-center"

const divMain = document.createElement('div')
divMain.classList = "flex flex-col p-4 items-center h-full flex-1 w-full"

const fetchButtonDiv = document.createElement('div')
fetchButtonDiv.className = "aura"

const fetchButton = document.createElement('button')
fetchButton.classList = "btn"
fetchButton.onclick = fetchData
fetchButton.innerText = "Fetch"
fetchButtonDiv.appendChild(fetchButton)



const divTable = document.createElement('div')
divTable.classList = "overflow-x-auto rounded-box border border-base-content/5 bg-base-100 w-2/4 "

const table = document.createElement('table')
table.classList = "table"


const tableHead = document.createElement('thead')
table.appendChild(tableHead)

const tHeadRow = document.createElement('tr')
tableHead.appendChild(tHeadRow)

let th = document.createElement('th')
tHeadRow.appendChild(th)

th = document.createElement('th')
th.innerText = "Name"
tHeadRow.appendChild(th)

th = document.createElement('th')
th.innerText = "Author"
tHeadRow.appendChild(th)

th = document.createElement('th')
th.innerText = "price"
tHeadRow.appendChild(th)

th = document.createElement('th')
th.innerText = "book type"
tHeadRow.appendChild(th)

const tbody = document.createElement('tbody')
tbody.id = "tbody"
table.appendChild(tbody)






divTable.appendChild(table)
divMain.appendChild(divTable)
outerDiv.appendChild(divMain)
outerDiv.appendChild(fetchButtonDiv)
document.body.appendChild(outerDiv)


function fetchData() {
    const trd = document.createElement('tr')
    const td1 = document.createElement('td')
    const td2 = document.createElement('td')
    const td3 = document.createElement('td')
    const td4 = document.createElement('td')
    const td5 = document.createElement('td')
    td1.innerText = prompt("Enter Book id: ")
    td2.innerText = prompt("Enter Book name: ")
    td3.innerText = prompt("Enter Book author: ")
    td4.innerText = prompt("Enter Book price: ")
    td5.innerText = prompt("Enter Book book type: ")
    trd.appendChild(td1)
    trd.appendChild(td2)
    trd.appendChild(td3)
    trd.appendChild(td4)
    trd.appendChild(td5)
    tbody.appendChild(trd)
}









