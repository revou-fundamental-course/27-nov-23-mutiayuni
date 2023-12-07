const alas = document.getElementById('alas')

const tinggi = document.getElementById('tinggi')

const hitung = document.getElementById('button-hitung-luas')

const reset = document.getElementById('button-reset-luas')

const output = document.getElementById('output')


hitung.addEventListener('click', function(){
    let a = alas.value
    let t = tinggi.value
    let l = 0.5*a*t
    output.innerHTML = `Luas segitiga dari alas ${a} cm dan tinggi ${t} cm adalah ${l} cm2`
})

function resetform() {
    document.getElementById("myForm").reset();
}
    


const sisia = document.getElementById('sisiA')

const sisib = document.getElementById('sisiB')

const sisic = document.getElementById('sisiC')

const hitungkeliling = document.getElementById('button-hitung-keliling')

const resetkeliling = document.getElementById('button-reset-keliling')

const outputkeliling = document.getElementById('outputkeliling')


hitungkeliling.addEventListener('click', function(){
    let s1 = sisia.value
    let s2 = sisib.value
    let s3 = sisic.value
    let k = parseInt(s1)+parseInt(s2)+parseInt(s3)
    outputkeliling.innerHTML = `Keliling segitiga dari sisi A ${s1} cm, sisi B ${s2} cm, dan sisi C ${s3} adalah ${k} cm`
})