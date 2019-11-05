let data = [
    {
        "id" : "1",
        "name" : "Jenny",
        "age" : "21",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "2",
        "name" : "Thomas",
        "age" : "29",
        "gender" : "male",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img2.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "3",
        "name" : "Stefan",
        "age" : "18",
        "gender" : "male",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img2.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "4",
        "name" : "Erika",
        "age" : "34",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "5",
        "name" : "Laura",
        "age" : "33",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "6",
        "name" : "Mike",
        "age" : "27",
        "gender" : "male",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img2.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "7",
        "name" : "Benny",
        "age" : "37",
        "gender" : "male",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img2.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "8",
        "name" : "Jessica",
        "age" : "23",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "9",
        "name" : "Dorothea",
        "age" : "27",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "10",
        "name" : "Vivien",
        "age" : "19",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "11",
        "name" : "Vinzenz",
        "age" : "20",
        "gender" : "male",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img2.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "12",
        "name" : "Said",
        "age" : "29",
        "gender" : "male",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img2.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "13",
        "name" : "Ulrike",
        "age" : "31",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "14",
        "name" : "Haris",
        "age" : "32",
        "gender" : "male",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img2.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "15",
        "name" : "Sebastien",
        "age" : "38",
        "gender" : "male",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img2.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
    {
        "id" : "16",
        "name" : "Monica",
        "age" : "36",
        "gender" : "female",
        "location" : "Vienna",
        "hobbies" : ["skiing", "eating", "music"],
        "favmusic" : "Enya",
        "imgurl" : "./assets/img/img.jpg",
        "text" : "Hello World?",
        "isFav" : "false"
    },
]

let containerPeople = document.getElementById('container-people')
let containerFav = document.getElementById('container-favorites')
let images = document.querySelectorAll('.card-img-top')

init()

function init() {
    displayPeople(data)
    displayFav()
    favToggle()
    filterPeople(data)
    searchPeople(data)
    dragDrop()
}

function displayPeople(arr) {
    containerPeople.innerHTML = ""
    for(let person of arr) {
        containerPeople.innerHTML +=
        `
        <div class="col-lg-3 col-md-6 mb-3">
            <div class="card" style="width: 100%;" id="${person.id}">
                <img draggable="false" src="${person.imgurl}" class="card-img-top" alt="pic">
                    <div class="card-body">
                        <h5 class="card-title">${person.name}</h5>
                        <p class="card-text">${person.text}</p>
                        <button class="${person.isFav === "true" ? "btn btn-primary active" : "btn btn-primary"}">&hearts;</button>
                    </div>
            </div>
        </div>
        `
    }
}

function displayFav() {
    containerFav.innerHTML = ""
    for(let person of data) {
        if(person.isFav === "true") {
            containerFav.innerHTML +=
            `
            <div class="col-lg-6 col-md-6 mb-4">
                <div class="card" style="width: 100%;" id="${person.id}">
                    <img src="${person.imgurl}" class="card-img-top" alt="pic">
                    <div class="card-body">
                        <h5 class="card-title mb-0">${person.name}, <small style="color:grey">${person.age}</small></h5>
                        <p class="card-text mt-0"><i class="fa fa-map-marker"></i> ${person.location}</p>
                        <p class="card-text">My hobbies are ${person.hobbies[0]}, ${person.hobbies[1]}, ${person.hobbies[2]}.</p>
                        <p class="card-text text-right mb-0 pb-0"><i class="fa fa-music"></i> ${person.favmusic}</p>
                        <a href="#" class="btn btn-primary" style="background-color : red;border-color:darkred">&cross;</a>
                    </div>
                </div>
            </div>
            `
        } else {

        }
    }
}

function favToggle() {
    containerPeople.addEventListener('click', e => {
        if(e.target.innerText === "♥") {
            e.target.classList.toggle("active")
            data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav === "false" ? data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav = "true" : data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav = "false"
        }
        displayFav()
    })

    containerFav.addEventListener('click', e => {
        if(e.target.innerText === "✗") {
            data[parseInt(e.target.parentNode.parentNode.id) - 1].isFav = "false"
            let current = document.getElementById(e.target.parentNode.parentNode.id)
            current.lastElementChild.lastElementChild.classList.remove("active")
        }
        displayFav()
    })
}

function filterPeople(arr) {
    let btn = document.getElementById('filterBtn')
    btn.children[0].addEventListener('click', e => {
        arr.sort((a, b) => parseInt(a.age) - parseInt(b.age))
        displayPeople(arr)
        dragDrop()
    })
    btn.children[1].addEventListener('click', e => {
        let newArr = arr.filter(x => x.gender === "female")
        displayPeople(newArr)
        dragDrop()
    })
    btn.children[2].addEventListener('click', e => {
        let newArr = arr.filter(x => x.gender === "male")
        displayPeople(newArr)
        dragDrop()
    })
}

function searchPeople(arr) {
    let btn = document.getElementById('searchBtn')
    let input = document.getElementById('searchInput')
    let newArr = []
    btn.addEventListener('click', e => {
        newArr = arr.filter(x => x.name.toLowerCase().startsWith(input.value.toLowerCase()))
        displayPeople(newArr)
        e.preventDefault()
        dragDrop()
    })
}

function dragDrop() {
    let start
    let end
    images = document.querySelectorAll(".card-img-top")
    for(let img of images) {
        img.addEventListener('mousedown', e => {
            start = e.target
            start.parentNode.parentNode.style.opacity = "0.5"
        })
        
        img.addEventListener('mouseup', e => {
            end = e.target
            start.parentNode.parentNode.style.opacity = "1"
            endcontent = e.target.parentNode.parentNode.innerHTML
            end.parentNode.parentNode.innerHTML = start.parentNode.parentNode.innerHTML
            start.parentNode.parentNode.innerHTML = endcontent
            dragDrop()
        })
    }
    imgs = document.querySelectorAll(".card-img-top")
    start = undefined
    end = undefined
}