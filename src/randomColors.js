function getRandomColor() {
    const letters = '456789ABCDEF'
    let color = '#'
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 10)]
    }

    return color
}

function setRandomColors() {
    document.documentElement.style.setProperty('--primary', getRandomColor())
}

window.addEventListener('load', setRandomColors)

export {setRandomColors}