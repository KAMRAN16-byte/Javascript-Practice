const arr = []

for(i = 0; i < 10; i++) {
    arr.push(i+1)
}

even_arr = arr.filter(e => e % 2 === 0)
even_arr.forEach(e => console.log(e))

const square = even_arr.map(e => 'JS-'+(e * e))
console.log(square)

