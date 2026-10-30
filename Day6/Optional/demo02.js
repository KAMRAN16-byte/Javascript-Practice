const daisyUI = document.createElement('link')
daisyUI.rel = 'stylesheet';
daisyUI.type = 'text/css';
daisyUI.href = 'https://cdn.jsdelivr.net/npm/daisyui@5'
document.head.appendChild(daisyUI);

const tailWindCSS = document.createElement('script')
tailWindCSS.src = 'https://cdn.jsdelivr.net/npm/@tailwindcss/browser@4'
tailWindCSS.type = 'text/javascript'
document.head.appendChild(tailWindCSS);


const h1 = document.createElement("h1");
h1.innerText = "Enter Empid: "
document.body.appendChild(h1);

const input = document.createElement('input');
input.classList.add('input');
input.classList.add('block');
document.body.appendChild(input);

const button = document.createElement('button');
button.innerText = "Submit";
button.classList.add('btn');
button.onclick = getEmployee
document.body.appendChild(button);


function getEmployee() {
    const id = input.value;

    searchEmployee(id)
        .then(data => {
        console.log(data)
        return searchDepth(data.deptno)
    })
        .then(deptno => {
            console.log(deptno);
        })
        .catch(err => {
            console.log(err);
        })

}

