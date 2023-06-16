import { products, categories } from './productsData.js';
import { filterByRange, filterByType } from './filters.js';
import { renderDarkMode } from './theme.js';

// RENDER CARDS ALBUMS

export function renderAlbums(array){
    const albumsList = document.querySelector(".music-albums__area")

    albumsList.innerHTML = ""

    array.forEach((album => {
        const albumCard = createAlbumCard(album)

        albumsList.append(albumCard)

    }))
} 

function createAlbumCard(album){
    const albumsListItem = document.createElement("li")
    const img = document.createElement("img")
    const span = document.createElement("span")
    const band = document.createElement("p")
    const albumYear = document.createElement("p")
    const albumTitle = document.createElement("h2")
    const div = document.createElement("div")
    const price = document.createElement("p")
    const buyButton = document.createElement("button")
    const divInfos = document.createElement("div")

    img.src = album.img
    img.classList.add("album__img")

    span.classList.add("band-title__container")
    band.innerText = album.band
    albumYear.innerText = album.year
    
    albumTitle.innerText = album.title
    albumTitle.classList.add("album__title")

    div.classList.add("album__buy")
    price.innerText = `R$ ${album.price}`
    buyButton.innerText = "Comprar"
    buyButton.classList.add("buy__buttom")

    divInfos.classList.add("album__infos")

    span.append(band, albumYear)
    div.append(price, buyButton)
    divInfos.append(span, albumTitle, div)
    albumsListItem.append(img, divInfos)
    
    return albumsListItem

}


// RENDER BUTTONS GENDER

function renderButtonsGender(array){
    const musicGender = document.querySelector(".music-gender__list") //ul

    
    array.forEach((category, index) => {
        const genderItem = document.createElement("button")
        genderItem.classList.add("gender__button")

        genderItem.innerText = category //é o valor/texto de cada item do array

        genderItem.id = index //é o index de cada item do array

        musicGender.append(genderItem)

    })
    
}



renderAlbums(products)
renderButtonsGender(categories)
filterByRange(products)
filterByType(products)
