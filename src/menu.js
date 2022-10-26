const createMenuPage = (() => {
    const contentContainer = document.querySelector('#content')
    const mainMenu = document.createElement('div')

    mainMenu.setAttribute('data-tab-content', '')
    mainMenu.setAttribute('id', 'menu')

    mainMenu.innerHTML = `
       <div class="container menu-container">
            <div class="menu-content">
                <h2 class="menu-title">Season Menu</h2>
                <div class="wrapper menu-items">
                      <div class="menu__item">
                            <div class="item-name">Chefs Soup of the Day (V)</div>
                            <div class="item-description">Seasonally selected vegetable soup. Served with Fox's Bakery Brown Bread</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Fox’s Seafood Chowder</div>
                            <div class="item-description">Potato & cream-based soup with atraditional selection of shellfish, smoked & white fish. Served with Fox's Bakery Brown Bread</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Duck Pâté</div>
                            <div class="item-description">Served with peppery baby rocket & blackberry chutney</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Fox’s Wild Irish Mussels</div>
                            <div class="item-description">Steamed in cider, onion & garlic cream stock. Served with Fox's Bakery Brown Bread</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Siracha Atlantic Prawn Salad</div>
                            <div class="item-description">Served with marinated cucumber & dill dressing</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Roast Chicken Supreme</div>
                            <div class="item-description">With spring onion mash potato & roastedvegetables. Served with wild mushroom sauce</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Balsamic Puy Lentil & Roast Vegetable One Pot (v)</div>
                            <div class="item-description">Root vegetables, Puy lentils, butternut squash, roastalmonds & crispy cabbage</div>            
                      </div>
                </div>
            </div>
            <h2 class="menu_drinks">Wine & Drinks Menu</h2>
            <div class="drinks-items">
                       <div class="typeWine">White wine</div> 
                       <div class="menu__item">
                            <div class="item-name">Casa Rafael Sauvignon Blanc - <span>Chile €6.30/€24.50</span></div>
                            <div class="item-description">Bright colour with strong floral aromas & ripe fruit for a pleasant sensation</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Cotes Mas blanc - <span>France €6.30/€24.50</span></div>
                            <div class="item-description">Grenache Blanc, Vermentino and Chardonnay. A well balanced wine with tropical fruits</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Casa Rafael Chardonnay - <span>Chile €6.30/€24.50</span> </div>
                            <div class="item-description">Crisp and refreshing, it offers an abundance of grapefruit & tropical fruit flavours</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Conde Bel White - <span>€6.70 / €26.50</span></div>
                            <div class="item-description">Pale yellow in colour, with an intensely fruity bouquet that makes it an ideal single-variety wine. Clean & expressive, and extremely light on the palate</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">R & G Cielo Pinot Grigio - <span>Italy  €6.90/€28.50</span></div>
                            <div class="item-description">Wonderfully refreshing & popular grape variety, delicate flavours and clean notes</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Lakefield Estate Chardonnay - <span>Australia €29.70</span></div>
                            <div class="item-description">Fresh tropical & stone fruit notes with melon & gooseberry freshness with zesty acidity</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Jaffelin Macon Lugny Chardonnay - <span>France     €45.00</span></div>
                            <div class="item-description">Bouquet is subtle, yet vibrant, aromas of flowers and herbs, lemon and mint, honeysuckle</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Sileni Cellar Sauvignon Blanc - <span>New Zealand   €10.95/€41.00</span></div>
                            <div class="item-description">Classic gooseberry characters with stone fruit and melon overtones</div>            
                      </div>
                      <div class="typeWine">Red wines</div> 
                      <div class="menu__item">
                            <div class="item-name">Casa Rafael Cabernet Sauvgnon  - <span> Chile     €6.30/€24.50</span></div>
                            <div class="item-description">Fruity and spicy with hints of cassis and ripe dark fruits</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Cote Mas Rouge <span>France    €6.30/€24.50</span></div>
                            <div class="item-description">Grenache, Carignan, Cinsault, Merlot and Syrah. Dark crimson, with fragrant herbs and plum aromas</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Conde Bel Tempranillo - <span>€6.70 / €26.50</span></div>
                            <div class="item-description">Purple blue colour with ruby tones. Elegant on the nose with the characteristic Tempranillo fruity aromas. Soft wood & spicy tones</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Lakefield Shiraz - <span>Australia     €7.60/€29.75</span></div>
                            <div class="item-description">Deep plum. Intense black cherries supported by hints of vanilla, chocolate & earthy aromas</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Agua Santa Merlot Reserve - <span> Chile     €6.90/€28.50</span></div>
                            <div class="item-description">Smooth powerful with fruity notes dominated by red berries </div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Sogno Di Uliasse Montepulciano DAbruzzo - <span>Italy     €36.00</span></div>
                            <div class="item-description">The nose shows layers of plum and red cherry aromas with blackcurrant, blueberry and savoury red fruits</div>            
                      </div>
                      <div class="menu__item">
                            <div class="item-name">Jaffelin Pinot Noir - <span>France     €32.75</span></div>
                            <div class="item-description">The bouquet is round and explosive with aromas of cherry and small red fruits</div>            
                      </div>
                      
            </div>
       </div>
    `
    contentContainer.appendChild(mainMenu)
})();