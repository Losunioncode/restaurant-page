const createContactPage = (() => {
    const content = document.querySelector('#content')
    const contactContainer = document.createElement('div')

    contactContainer.setAttribute('id', 'contact')
    contactContainer.setAttribute('data-tab-content', '')

    contactContainer.className = 'container'
    contactContainer.innerHTML = `
       <div class="form-container">
           <h2 class="contact-title">Contact us</h2>
           <form action="" method="get" class="contact-form">
                <div class="contact-form" id="name">
                       <label for="name">Full name</label>
                       <input type="text" name="name" required>
                </div>
                <div class="email contact-form" id="email">
                       <label for="email">Email</label>
                       <input type="email" name="email" required>
                </div>
                <div class="submit contact-form">
                       <input type="submit" value="Send" id="submit">
                </div>
           </form>
       </div>
    `

    content.appendChild(contactContainer)
})()