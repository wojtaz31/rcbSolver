function waitFor(delay) {
    return new Promise(resolve => { setTimeout(resolve, delay) })
}

let inps = true

while (inps) {
    let inputBody = document.querySelector('.render').shadowRoot.querySelector('#lw-18').querySelector('#lw-22').shadowRoot
    let submitBody = document.querySelector('.render').shadowRoot.querySelector('#lw-18').querySelector('#lw-21').shadowRoot

    inps = Array.from(inputBody.querySelectorAll('input'))
    let i = Math.floor(Math.random() * 3)
    inps[i].click()
    inps[i].checked = true
    submitBody.querySelector('button').click()
    await waitFor(500)
}
