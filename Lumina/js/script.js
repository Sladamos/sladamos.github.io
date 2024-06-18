function getProperty(name) {
    return getComputedStyle(document.documentElement).getPropertyValue(name);
}

function setProperty(name, value) {
    document.documentElement.style.setProperty(name, value);
}


function switchToDarkMode() {
    var primaryStr = '--primary-color'
    var secondaryStr = '--secondary-color'
    var primaryColor = getProperty(primaryStr)
    var secondaryColor = getProperty(secondaryStr)
    setProperty(primaryStr, secondaryColor)
    setProperty(secondaryStr, primaryColor)
    let body = document.querySelector("html");
    body.classList.toggle("dark");
}

switchToDarkMode()
