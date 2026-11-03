let n1 : [number, number] = [100,200]

let n2 : [number,string] = [133,'kamran']

console.log(n2);


function fx() : [number , (value : number) => void]
{
    return [5, (value : number)=>{ console.log(value) }];
}


fx()[1](10)
