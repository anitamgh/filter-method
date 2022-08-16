let sportsList = [
    {
        image: "https://www.designcap.com/res/template/large/dfe8cababaf7f0d8768b95b5800b3cf5/page0.jpg",
        title: "basketball league match!",
        sportCategory: "basketball",
    },
    {
        image: "https://www.designcap.com/res/template/large/0dc791e580cb6cf89b3d05c60ccfd96c/page0.jpg",
        title: "soccer game, bulls vs camels",
        sportCategory: "soccer",
    },
    {
        image: "https://www.designcap.com/res/template/large/befff06c43239004e2a1200c3054f7a5/page0.jpg",
        title: "tennis match at simon tennis club",
        sportCategory: "tennis",
    },
    {
        image: "https://www.designcap.com/res/template/large/682459a19668f4eb76f231dc3b3b139d/page0.jpg",
        title: "first swing golf tournament",
        sportCategory: "golf",
    },
    {
        image: "https://www.designcap.com/res/template/large/6f0ccd34ddce3e15178ce7714f9bf8e0/page0.jpg",
        title: "basketball tournament, local uni stadium",
        sportCategory: "basketball",
    },
    {
        image: "https://www.designcap.com/res/template/large/b1fbdb1c559baeefeccb569fa6b8145b/page0.jpg",
        title: "volleyball tournament, 18th annual",
        sportCategory: "volleyball",
    },
    {
        image: "https://www.designcap.com/res/template/large/c0fae89bb489a61dc705d5528e8521d7/page0.jpg",
        title: "golf tournament at golf course",
        sportCategory: "golf",
    },
    {
        image: "https://www.designcap.com/res/template/large/f542a42bffd98b5ae651f5796966704f/page0.jpg",
        title: "soccer tournament, bulls vs camels",
        sportCategory: "soccer",
    },
    {
        image: "https://www.designcap.com/res/template/large/f3904d16088ccdc52a05294f91ffc87d/page0.jpg",
        title: "basketball tryouts",
        sportCategory: "basketball",
    },
    {
        image: "https://www.designcap.com/res/template/large/51647c7cb341ac25081753c296421bbd/page0.jpg",
        title: "volley team tryout",
        sportCategory: "volleyball",
    },
    {
        image: "https://www.designcap.com/res/template/large/899733d593bd6198ef9a328ebc23ace6/page0.jpg",
        title: "footbal tournament, final league",
        sportCategory: "soccer",
    },
]
let ul = document.getElementById("ul")
let volleyballBtn = document.getElementById("volleyball")
let tennisBtn = document.getElementById("tennis")
let basketballBtn = document.getElementById("basketball")
let golfBtn = document.getElementById("golf")
let soccerBtn = document.getElementById("soccer")
let allBtn = document.getElementById("all")


function printSport(item){
    let listItem = document.createElement("li")
    let itemPoster = document.createElement("img")
    let sportName = document.createElement("p")
    listItem.style.width = 150
    itemPoster.setAttribute("src" , item.image)
    itemPoster.style.width = 150
    sportName.appendChild(document.createTextNode(item.title))
    sportName.style.fontSize = 15
    sportName.style.color = "dark-gray"
    sportName.style.fontWeight = "bold"
    listItem.appendChild(itemPoster)
    listItem.append(sportName)
    ul.appendChild(listItem)
}

function printSports(){
    sportsList.map(printSport)
}

printSports()

function volleyballOnly(item){
    return item.sportCategory == "volleyball"
}

function basketballOnly(item){
    return item.sportCategory == "basketball"
}

function tennisOnly(item){
    return item.sportCategory == "tennis"
}

function golfOnly(item){
    return item.sportCategory == "golf"
}

function soccerOnly(item){
    return item.sportCategory == "soccer"
}

volleyballBtn.addEventListener("click" , function(){
    let newarray = sportsList.filter(volleyballOnly)
    ul.innerHTML = ""
    newarray.map(printSport)
})

basketballBtn.addEventListener("click" , function(){
    let newarray = sportsList.filter(basketballOnly)
    ul.innerHTML = ""
    newarray.map(printSport)
})

tennisBtn.addEventListener("click" , function(){
    let newarray = sportsList.filter(tennisOnly)
    ul.innerHTML = ""
    newarray.map(printSport)
})

golfBtn.addEventListener("click" , function(){
    let newarray = sportsList.filter(golfOnly)
    ul.innerHTML = ""
    newarray.map(printSport)
})

soccerBtn.addEventListener("click" , function(){
    let newarray = sportsList.filter(soccerOnly)
    ul.innerHTML = ""
    newarray.map(printSport)
})

allBtn.addEventListener("click" , function(){
    ul.innerHTML = ""
    printSports()
})
