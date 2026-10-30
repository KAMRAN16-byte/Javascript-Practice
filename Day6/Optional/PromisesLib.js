const emps = [
    {empid: 1, name: 'Kamran', salary: 90000, deptno: 10},
    {empid: 2, name: 'Ruman', salary: 65000, deptno: 30},
    {empid: 3, name: 'Imran', salary: 54000, deptno: 40}
]

const depts = [
    {depid: 10, dname: "Operations", location: "Karad"},
    {depid: 20, dname: "Sales", location: "Satara"},
    {depid: 30, dname: "development", location: "Pune"}
]

function searchEmployee(empid) {
    return new Promise((resolve, reject) => {
        let emp = null
        for (let i = 0; i < emps.length; i++) {
            if (empid == emps[i].empid) {
                emp = {...emps[i]}
                break
            }
        }
        if (emp)
            resolve(emp)
        else
            reject("No employee found.")
    })
}

function searchDepth(depid) {
    return new Promise((resolve, reject) => {
        let dep = null
        for (let i = 0; i < depts.length; i++) {
            if (depid == depts[i].depid) {
                dep = {...depts[i]}
                break
            }
        }
        if (dep)
            resolve(dep)
        else
            reject("No Department found~!")
    })
}