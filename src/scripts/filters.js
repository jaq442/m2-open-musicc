import { renderAlbums } from "./index.js"
import { products } from "./productsData.js"

export function filterByRange (array) {
    const filterRange = document.querySelector("#filter-range") //input

    filterRange.addEventListener("input", () => {
        const priceRange = document.querySelector("#price-range")

        priceRange.innerText = Number(filterRange.value).toFixed(2)

        const albumsFilteredByRange = array.filter(album => {
            return album.price <= filterRange.value
        })

        renderAlbums(albumsFilteredByRange)

        const none = document.querySelector(".music-albums__area")
        if (none.getElementsByTagName("li").length === 0){  
            none.insertAdjacentHTML("afterbegin", `<li class="none"> 
                    <h2>Nenhum álbum encontrado</h2>
                    </li>`)

    }})
}

export function filterByType (array){
    const genderButtons = document.querySelectorAll(".gender__button")
    const none = document.querySelector(".music-albums__area")
    const filterRange = document.querySelector("#filter-range")

    genderButtons.forEach((genderButton => {
        genderButton.addEventListener("click", (event) => {
            const buttonText = event.target.innerText 
            console.log(buttonText)
            
            if (buttonText === "Todos"){
                filterRange.value = 90
                const priceRange = document.querySelector("#price-range")

                priceRange.innerText = Number(filterRange.value).toFixed(2)
                   
                renderAlbums(array)
                filterByRange(array)
            } else {
                const filtered = array.filter(album => album.category == genderButton.id)
                filterRange.value = 90

                const priceRange = document.querySelector("#price-range")

                priceRange.innerText = Number(filterRange.value).toFixed(2)

                renderAlbums(filtered)
                filterByRange(filtered)
                if (none.getElementsByTagName("li").length === 0){  
                none.insertAdjacentHTML("afterbegin", `<li class="none"> 
                        <h2>Nenhum álbum encontrado</h2>
                        </li>`)
                }
           
            }
        }
    )}
))}