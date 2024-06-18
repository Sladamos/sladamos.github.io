function getProperty(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}

function setProperty(name, value) {
    document.documentElement.style.setProperty(name, value);
}

function saveToLocalStorage(value) {
    localStorage.setItem("isDarkModeEnabled", value)
}

function swapLightAndDark() {
    var lightStr = '--light-color'
    var semiLightStr = '--semi-light-color'
    var darkStr = '--dark-color'
    var semiDarkStr = '--semi-dark-color'
    var lightColor = getProperty(lightStr)
    var semiLightColor = getProperty(semiLightStr)
    var darkColor = getProperty(darkStr)
    var semiDarkColor = getProperty(semiDarkStr)
    setProperty(lightStr, semiLightColor)
    setProperty(semiLightStr, lightColor)
    setProperty(darkStr, semiDarkColor)
    setProperty(semiDarkStr, darkColor)

}

function switchDarkMode() {
    var primaryStr = '--primary-color'
    var secondaryStr = '--secondary-color'
    var primaryColor = getProperty(primaryStr)
    var secondaryColor = getProperty(secondaryStr)
    setProperty(primaryStr, secondaryColor)
    setProperty(secondaryStr, primaryColor)
    swapLightAndDark();
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
    switchDarkMode()
    updateDarkThemeButtons(!darkMode)
    saveToLocalStorage(!darkMode);
}

const darkMode = JSON.parse(localStorage.getItem("isDarkModeEnabled"))
const darkModeMediaQuery = window.matchMedia("(prefers-color-scheme: dark)").matches
if(darkMode || darkMode === null && darkModeMediaQuery) {
    switchDarkMode()
    updateDarkThemeButtons(true)
    saveToLocalStorage(true);
} else {
    updateDarkThemeButtons(false)
}
