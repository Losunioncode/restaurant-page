const homePage = (() => {
    const content = document.querySelector('#content')
    const main = document.createElement('div')
    const mainContainer = document.createElement('div')

    mainContainer.innerHTML = `
        <div class="main-card">
                <h1 class="main__title">Make a reservation to our Irish Bar</h1>
                <p class="main__paragraph">The best bar in Dublin</p>
                <button class="btn main__btn">Make a reservation now</button>
            </div>

            <div class="information-card">
                <p class="bar-location"></p>
                <p class="Work schedule"></p>
            </div>
    `

    main.className = 'main'
    mainContainer.className = 'container main-container'
    content.appendChild(main)
    main.appendChild(mainContainer)
})()
