const arr_emps = [
    {empid : 1, name : 'Kamran', salary : 90000},
    {empid : 2, name : 'Ruman', salary : 80000},
    {empid : 3, name : 'Taman', salary : 60000},
]

arr_emps.push({empid: 4, name : 'Umar', salary : 97000})

arr_emps.forEach(emp => console.log(emp))

const arr_fun = [
    (x,y) => x + y,
    (x,y) => x - y,
    (x,y) => x * y,
    (x,y) => x / y,
]

executor = function(fn,x,y)
{
    console.log(fn(x,y))
}

executor(arr_fun[0],7,7)