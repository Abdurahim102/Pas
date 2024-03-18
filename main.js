const inp = document.querySelector('.input')
const li1 = document.querySelector('.text_rul')
const li2 = document.querySelector('.text_rul1')
const li3 = document.querySelector('.text_rul2')
const li4 = document.querySelector('.text_rul3')
const li5 = document.querySelector('.text_rul4')



function AddertoWindow() {
    if (inp.value.length >= 8) {
        li1.style.color = 'green'
    }else{
        li1.style.color = 'red'
    }

    if (!isNaN(Number(inp.value))) {
        li2.style.color = 'green'
    }else{
        li2.style.color = 'red'
    }
    if (inp.value === inp.value.toLowerCase()) {
        li3.style.color = 'red'
    }else{
        li3.style.color = 'green'
    }
    
    if (/^[a-zA-Z0-9]+$/.test(inp.value)) {
        li4.style.color = 'red'
    }else{
        li4.style.color = 'green'
    }

    if (inp.value === inp.value.toUpperCase()) {
        li5.style.color = 'red'
    }else{
        li5.style.color = 'green'
    }
}

