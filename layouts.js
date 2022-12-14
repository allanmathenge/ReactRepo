if (!localStorage.getItem('counter')){
    localStorage.setItem('counter', 0)
}
 function count() {
    let counter = localStorage.getItem('counter')
    counter++
        document.querySelector('h1').innerHTML = counter
        localStorage.setItem('counter', counter)
            }

            document.addEventListener('DOMContentLoaded', function(){
                document.querySelector('h1').innerHTML = localStorage.getItem('counter')
                document.querySelector('button').onclick = count
                setInterval(count, 1000)
            })

document.addEventListener('DOMContentLoaded', function(){
    fetch('https://api.exchangeratesapi.io/latest?base=UAD')
    .then(response => response.json())
    .then(data => {
        const rate = data.rates.EUR
        document.querySelector('h1').innerHTML = rate
    })
})