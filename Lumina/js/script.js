function getProperty(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}

function setProperty(name, value) {
    document.documentElement.style.setProperty(name, value);
}

function saveToLocalStorage(value) {
    localStorage.setItem("isDarkModeEnabled", value)
}

function switchDarkMode(toDarkMode) {
    var primaryStr = '--primary-color'
    var secondaryStr = '--secondary-color'
    var primaryColor = getProperty(primaryStr)
    var secondaryColor = getProperty(secondaryStr)
    setProperty(primaryStr, secondaryColor)
    setProperty(secondaryStr, primaryColor)
    let html = document.querySelector("html");
    html.classList.toggle("dark");
}

function updateDarkThemeButtons(toDarkMode) {
    let sun = document.getElementById("darktheme__sun")
    let moon = document.getElementById("darktheme__moon")
    if(toDarkMode) {
        moon.setAttribute("display", "none")
        sun.removeAttribute("display")
    } else {
        sun.setAttribute("display", "none")
        moon.removeAttribute("display")
    }
}

function toggleDarkMode() {
    const darkMode = JSON.parse(localStorage.getItem("isDarkModeEnabled"))
    switchDarkMode(!darkMode)
    updateDarkThemeButtons(!darkMode)
    saveToLocalStorage(!darkMode);
}

const darkMode = JSON.parse(localStorage.getItem("isDarkModeEnabled"))
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches
if(darkMode || darkMode === null && darkModeMediaQuery) {
    switchDarkMode(true)
    updateDarkThemeButtons(true)
    saveToLocalStorage(true);
} else {
    updateDarkThemeButtons(false)
}
