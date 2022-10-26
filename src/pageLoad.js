const pageLoader = (() => {
    const content = document.querySelector('#content')
    const headerContainer = document.createElement('div')

    headerContainer.innerHTML= `
            <div class="container header-container">
                <h1 class="header__title">Palace Bar</h1>
                <ul class="navbar">
                    <li><a data-type-target = "#home" class="link">Home</a></li>
                    <li><a data-type-target = "#menu" class="link">Menu</a></li>
                    <li><a data-type-target = "#contact" class="link">Contact Us</a></li>
                </ul>
            </div>
    `


    headerContainer.className = 'header'
    content.appendChild(headerContainer)
})();


