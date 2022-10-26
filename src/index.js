import {pageLoader} from './pageLoad'
import {homePage} from './home'
import {createMenuPage} from './menu'
import {createContactPage} from './contact'
const links = document.querySelectorAll('[data-type-target]')
const tabContents = document.querySelectorAll('[data-tab-content]')



links.forEach(link => {
    link.addEventListener('click', () => {
        const target = document.querySelector(link.dataset.typeTarget)

        tabContents.forEach(content => {
            content.classList.remove('active')
        })

        console.log(target)

        target.classList.add('active')
    })

})