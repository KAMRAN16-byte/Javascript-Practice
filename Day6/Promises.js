// function getDataFromServer(url, resolve, reject) {
//     const delay = Math.floor(Math.random() * 2000) + 500
//     setTimeout(() => {
//         if (delay < 2200)
//             resolve(`your data from server: ${url} in ${delay}ms`);
//         else
//             reject("Error time out!!")
//     }, delay)
// }
//
// getDataFromServer("google.com",
//     (data) => {
//         console.log(data);
//         getDataFromServer("Amazon.com", (data) => {
//             console.log(data);
//             getDataFromServer("Facebook.com", (data) => {
//                 console.log(data);
//                 getDataFromServer("Instagram.com", (data) => {
//                     console.log(data);
//                 },(err) => {
//                     console.log(err);
//                 })
//             }, (err) => console.log(err));
//         }, (err) => {
//             console.log(err);
//         })
//     },
//     (err) => console.log(err)
// )


function getDataFromServer(url) {
    return new Promise((resolve, reject) => {
        const delay = Math.floor(Math.random() * 2000) + 500
        setTimeout(() => {
            if (delay < 2200) {
                resolve(`your data from server: ${url} in ${delay}ms`);
            } else {
                reject("Error time out!!")
            }
        }, delay)
    })
}

getDataFromServer("google.com")
    .then((data) => {
        console.log(data)
        return getDataFromServer("Amazon.com")
    })
    .then((data) => {
        console.log(data)
        return getDataFromServer("Instagram.com")
    })
    .then((data) => {
        console.log(data)
        return getDataFromServer("Facebook.com")
    })
    .then((data) => {
        console.log(data)
    })
.catch((err) => {
    console.log(err)
})

