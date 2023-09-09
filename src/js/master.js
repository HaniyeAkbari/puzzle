const img = document.querySelectorAll('section>img')
let x = 0
let y = 0
let z = 0
img.forEach((i) => {
    i.style.top = parseInt(Math.random() * 65) + '%'
    i.style.left = parseInt(Math.random() * 75) + '%'
    
    i.addEventListener('mousedown',()=>{
        i.style.transform='translate(-50%,-50%)'
        i.style.cursor='grabbing'
        i.addEventListener('mousemove',grab)
    })
    i.addEventListener('mouseup',()=>{
        i.style.cursor='default'
        i.removeEventListener('mousemove',grab)
    })

    function grab(e){
        x = e.clientX
        y = e.clientY
        i.style.top= y + 'px'
        i.style.left= x + 'px'
        i.style.zIndex='500'
        

        
    }
    

})

