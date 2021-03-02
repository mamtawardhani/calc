const canvas = document.getElementById('c1')
const c = canvas.getContext('2d')
let q = []
let g = 0
let m = 'simple'


function draw() {
    c.canvas.width = window.innerWidth;
    c.canvas.height = window.innerHeight;
    let f,r,s

    c.strokeStyle = 'white'
    c.strokeRect(260,40,1000,550)
    c.strokeRect(2,330,250,260)

    c.fillStyle = 'white'
    c.font = '18px TimesNewRoman'
    c.fillText('Simple Calculations',30,400)
    c.fillText('Functions',30,490)

    if(m == 'simple'){
        if(g == 0){
            //numbers
            {
                document.getElementById('b.').onclick = function() {
                    q.push('.')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b1').onclick = function() {
                    q.push('1')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b2').onclick = function() {
                    q.push('2')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b3').onclick = function() {
                    q.push('3')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b4').onclick = function() {
                    q.push('4')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b5').onclick = function() {
                    q.push('5')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b6').onclick = function() {
                    q.push('6')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b7').onclick = function() {
                    q.push('7')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b8').onclick = function() {
                    q.push('8')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b9').onclick = function() {
                    q.push('9')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
                document.getElementById('b0').onclick = function() {
                    q.push('0')
                    let b = q.join("")
                    document.getElementById('n1').value=b
                }
            }
            //next steps
            {

            document.getElementById('b+').onclick = function() {
                g=1
                f = document.getElementById('n1').value
                document.getElementById('n4').value = '+'
                q = []
                s = 'add'
            }
            document.getElementById('b-').onclick = function() {
                g=1
                f = document.getElementById('n1').value
                document.getElementById('n4').value = '-'
                q = []
                s = 'subtract'
            }
            document.getElementById('b*').onclick = function() {
                g=1
                f = document.getElementById('n1').value
                document.getElementById('n4').value = '×'
                q = []
                s = 'multiply'
            }
            document.getElementById('b/').onclick = function() {
                g=1
                f = document.getElementById('n1').value
                document.getElementById('n4').value = '÷'
                q = []
                s = 'divide'
            }
            }
            
        }
        if(g == 1){
            //numbers
            {
                document.getElementById('b.').onclick = function() {
                    q.push('.')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b1').onclick = function() {
                    q.push('1')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b2').onclick = function() {
                    q.push('2')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b3').onclick = function() {
                    q.push('3')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b4').onclick = function() {
                    q.push('4')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b5').onclick = function() {
                    q.push('5')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b6').onclick = function() {
                    q.push('6')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b7').onclick = function() {
                    q.push('7')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b8').onclick = function() {
                    q.push('8')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b9').onclick = function() {
                    q.push('9')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
                document.getElementById('b0').onclick = function() {
                    q.push('0')
                    let b = q.join("")
                    document.getElementById('n2').value=b
                }
            }

            //simple calcultions
            {

            document.getElementById('b=').onclick = ()=> {
                let y = 60
                if(document.getElementById('n4').value == '+'){
                    r = document.getElementById('n2').value
                    f = document.getElementById('n1').value
                    let du = parseFloat(r)
                    let dude = parseFloat(f)
                    h = du+dude
                    c.fillText(f+' + '+r+' = '+h,300,y)
                    y+=20
                }
                if(document.getElementById('n4').value == '-'){
                    r = document.getElementById('n2').value
                    f = document.getElementById('n1').value
                    let du = parseFloat(r)
                    let dude = parseFloat(f)
                    h = dude-du
                    c.fillText(f+' - '+r+' = '+h,300,y)
                }
                if(document.getElementById('n4').value == '×'){
                    r = document.getElementById('n2').value
                    f = document.getElementById('n1').value
                    let du = parseFloat(r)
                    let dude = parseFloat(f)
                    h = du*dude
                    c.fillText(f+' * '+r+' = '+h,300,y)
                }
                if(document.getElementById('n4').value == '÷'){
                    r = document.getElementById('n2').value
                    f = document.getElementById('n1').value
                    let du = parseFloat(r)
                    let dude = parseFloat(f)
                    h = dude/du
                    c.fillText(f+' ÷ '+r+' = '+h,300,y)
                }
            }
                
            }
        }
        if(g == 2){
            if(s == 'add'){
                console.log('dungibungibu')
            }
        }
    }
    if(m=='function'){
        //numbers
        {
            document.getElementById('b1').onclick = function() {
                q.push('1')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b2').onclick = function() {
                q.push('2')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b3').onclick = function() {
                q.push('3')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b4').onclick = function() {
                q.push('4')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b5').onclick = function() {
                q.push('5')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b6').onclick = function() {
                q.push('6')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b7').onclick = function() {
                q.push('7')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b8').onclick = function() {
                q.push('8')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b9').onclick = function() {
                q.push('9')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b0').onclick = function() {
                q.push('0')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
            document.getElementById('b.').onclick = function() {
                q.push('.')
                let b = q.join("")
                document.getElementById('n3').value=b
            }
        }
        y = 60

        //functions
        {
            document.getElementById('bc').onclick = function() {
                let b = document.getElementById('n3').value
                let du = parseFloat(b)
                let dude = Math.ceil(du)
                c.fillText('ceil('+du+') = '+dude,300,y)
                y+=30
            }
            document.getElementById('bf').onclick = function() {
                let b = document.getElementById('n3').value
                let du = parseFloat(b)
                let dude = Math.floor(du)
                c.fillText('floor('+du+') = '+dude,300,y)
                y+=30
            }
            document.getElementById('ba').onclick = function() {
                let b = document.getElementById('n3').value
                let du = parseFloat(b)
                let dude = Math.abs(du)
                c.fillText('abs('+du+') = '+dude,300,y)
                y+=30
            }
            document.getElementById('bs').onclick = function() {
                let b = document.getElementById('n3').value
                let du = parseFloat(b)
                let dude = Math.sqrt(du)
                c.fillText('sqrt('+du+') = '+dude,300,y)
                y+=30
            }
            document.getElementById('bcb').onclick = function() {
                let b = document.getElementById('n3').value
                let du = parseFloat(b)
                let dude = Math.cbrt(du)
                c.fillText('cbrt('+du+') = '+dude,300,y)
                y+=30
            }
            document.getElementById('bsin').onclick = function() {
                let b = document.getElementById('n3').value
                let du = parseFloat(b)
                let dude = Math.sin(du)
                c.fillText('sin('+du+') = '+dude,300,y)
                y+=30
            }
            document.getElementById('bcos').onclick = function() {
                let b = document.getElementById('n3').value
                let du = parseFloat(b)
                let dude = Math.cos(du)
                c.fillText('cos('+du+') = '+dude,300,y)
                y+=30
            }
            document.getElementById('btan').onclick = function() {
                let b = document.getElementById('n3').value
                let du = parseFloat(b)
                let dude = Math.tan(du)
                c.fillText('tan('+du+') = '+dude,300,y)
                y+=30
            }
            document.getElementById('bpi').onclick = function() {
                let b = document.getElementById('n3').value
                let du = parseFloat(b)
                let dude = Math.PI
                c.fillText(dude,300,y)
                y+=30
            }
        }
    }
  
}

let callfunction = setInterval(draw, 100)

document.addEventListener('keydown', event => {
    if(event.keyCode == 75){
        document.getElementById('n1').value = ""
        document.getElementById('n2').value = ""
        document.getElementById('n4').value = ""
        console.log('yay')
        g = 0
        q = []
    }
})
