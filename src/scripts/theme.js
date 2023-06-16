export const renderDarkMode = () => {
    const darkModeButton = document.querySelector("#mode__button")
    const darkModeImg = document.querySelector("#mode__img")
    const html = document.querySelector("html")
    const localStoragePreference = JSON.parse(localStorage.getItem("darkMode"))

    if(localStoragePreference){
        darkModeImg.src = "./src/assets/img/sun.svg"
        html.classList.add("dark__mode")
    } else {
        darkModeImg.src = "./src/assets/img/moon.svg"
        html.classList.remove("dark__mode")
    }

    darkModeButton.addEventListener("click", () => {
        html.classList.toggle("dark__mode")

        if(html.classList.contains("dark__mode")){
            darkModeImg.src = "./src/assets/img/sun.svg"
            localStorage.setItem("darkMode", true)
        } else {
            darkModeImg.src = "./src/assets/img/moon.svg"
            localStorage.setItem("darkMode", false)
        }
    })
}

renderDarkMode()

