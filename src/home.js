const homePage = (() => {
    const content = document.querySelector('#content')
    const main = document.createElement('main')
    const mainContainer = document.createElement('div')

    main.setAttribute('data-tab-content', '')
    main.setAttribute('id', 'home')

    mainContainer.innerHTML = `
            <div id="main-card">
                <h1 class="main__title">Make a reservation to our Irish Bar</h1>
                <p class="main__paragraph">The best bar in Dublin</p>
                <button class="btn main__btn" data-type-target="#contact">Make a reservation now</button>
            </div>

            <div class="information-card">
                <p class="bar-location"></p>
                <p class="Work schedule"></p>
            </div>
    `

    main.classList.add('active')
    mainContainer.className = 'container main-container'
    content.appendChild(main)
    main.appendChild(mainContainer)
})()
