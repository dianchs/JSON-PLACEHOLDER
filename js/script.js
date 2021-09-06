// fetch('https://jsonplaceholder.typicode.com/photos/3')
// .then(res => res.json())
// .then(json => console.log(json))
// .catch(err => console.log(err))

const BASEURL = 'https://jsonplaceholder.typicode.com'
const container = document.querySelector('.row')
const Getbase = document.querySelector('.GET')
const Getbase1 = document.querySelector('.GET1')
const Getbase2 = document.querySelector('.GET2')
const Getbase3 = document.querySelector('.GET3')
const Getbase4 = document.querySelector('.GET4')
const Getbase5 = document.querySelector('.GET5')

function fetchData(route, cb){
    fetch(`${BASEURL}/${route}`)
    .then(res => res.json())
    .then(r => {
        cb(r)
    })
}
Getbase.addEventListener('click', e =>{
    e.preventDefault()
    fetchData('photos', res =>{
        console.log(res);
        const Card = res.map(item =>{
            return `
                <div class = "div">
                    <div class = "header" >
                        <h1>${item.title}</h1>
                    </div>
                    <div class = "image" >
                        <img src = ${item.url} >
                    </div>
                </div>
            `
        }).join('')
        container.innerHTML = Card
    })
})
Getbase1.addEventListener('click', e =>{
    e.preventDefault()
    fetchData('users', res =>{
        console.log(res);
        const Card = res.map(item =>{
            return `
                <div class = "div1">
                    <p>Name:${item.name}</p>
                    <p>Username:${item.username}</p>
                    <p>Email:${item.email}</p>
                </div>
            `
        }).join('')
        container.innerHTML = Card
    })
})
Getbase2.addEventListener('click', e =>{
    e.preventDefault()
    fetchData('comments', res =>{
        console.log(res);
        const Card = res.map(item =>{
            return `
                <div class = "div2">
                    <h3>Name:${item.name}</h3>
                    <h4>Email:${item.email}</h4>
                    <p>Comment:${item.body}</p>
                </div>
            `
        }).join('')
        container.innerHTML = Card
    })
})
Getbase3.addEventListener('click', e =>{
    e.preventDefault()
    fetchData('posts', res =>{
        console.log(res);
        const Card = res.map(item =>{
            return `
                <div class = "div3">
                    <h2>${item.title}</h2>
                    <p>Comment:${item.body}</p>
                </div>
            `
        }).join('')
        container.innerHTML = Card
    })
})
Getbase4.addEventListener('click', e =>{
    e.preventDefault()
    fetchData('todos', res =>{
        console.log(res);
        const Card = res.map(item =>{
            return `
                <div class = "div4">
                    <h2>${item.title}</h2>
                    <p>Completed:${item.completed}</p>
                </div>
            `
        }).join('')
        container.innerHTML = Card
    })
})
Getbase5.addEventListener('click', e =>{
    e.preventDefault()
    fetchData('albums', res =>{
        console.log(res);
        const Card = res.map(item =>{
            return `
                <div class = "div5">
                    <h2>${item.title}</h2>
                </div>
            `
        }).join('')
        container.innerHTML = Card
    })
})