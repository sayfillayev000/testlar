const form = document.querySelector('.quiz-form');
const userscore = document.querySelector('.score');
const result = document.querySelector('.result');

form.addEventListener('submit', e => {
    let score = 0;
    e.preventDefault()
    const javoblar = [e.target.q1.value, e.target.q2.value, e.target.q3.value, e.target.q4.value]
    for (let i = 0; i < javoblar.length; i++) {
        if ('true' == javoblar[i]) {
            score += 25;
        }
    }
    scrollTo(0, 0)
    result.classList.remove('d-none')
    let i = 0;
    let timer = setInterval(() => {
        userscore.textContent = `${i}%`
        if (i === score) {
            clearInterval(timer)
        }else{
            i++
        }
      console.log(score);
    }, 20)
})


// setTimeout(()=>{
//     console.log('salom');
// }, 1000)