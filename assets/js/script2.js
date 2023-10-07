color = 'black'
document.addEventListener('keydown', function (event) { 
    console.log(event.key)
    console.log(color)
    if (event.key === 'a') {
        color = 'pink'
    } else if (event.key === 's') {
        color = 'orange'
    } else if (event.key === 'd') {
        color = 'skyblue'
    } else if (event.key === 'q') {
        color = 'purple'
    }else if (event.key === 'w') {
        color = 'grey'
    }else if (event.key === 'e') {
        color = 'brown'
    }
})
const changeColor = (id) => {
    const element = document.getElementById(id)
    element.style.background = color
}