const arr = []
for(let i = 0; i < 10; i++)
    arr.push(i)

for(i of arr)
    console.log(i)


arr.splice(7,1)
console.log(arr)

arr.forEach(i => console.log(i * i))