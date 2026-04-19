 /* => Si usage d'element personnalisé, option pour détecter si dom.webcomponents.enabled est 'true' dans le navigateur, sinon remplacer la balise 'loader' par une balise basique (aside, div) prise en charge par le navigateur */

 export function handleloading(){
  const loader = document.querySelector('.loader')
  
  loader.addEventListener('click', (e)=>{
    e.preventDefault()
    loader.classList.add('load')
    document.body.style.userSelect = 'none'
    document.body.style.pointerEvents = 'none'

    setTimeout(() => {
      document.body.style.overflowY = 'auto'
      document.body.style.userSelect = 'auto'
      document.body.style.pointerEvents = 'auto'
      loader.style.display = 'none'
      sessionStorage.setItem('pageIsLoaded', true)
    }, 1000);   
  })
}


export function handleReload(){
    
    const loader = document.querySelector('.loader')
    const altLoader = document.querySelector('.altloader')
    const navigationEntry = performance.getEntriesByType('navigation')[0];
  
    if (navigationEntry.type === 'navigate') {
      console.log('page was loaded!');
      loader.style.display = 'flex'
      altLoader.style.display = 'none'
    }
    if (navigationEntry.type === 'reload') {
      console.log('page was refreshed!');
      loader.style.display = 'none'
      altLoader.style.display = 'flex'
      /* reset le menu déroulant sur petit écran */
      document.getElementById('togglemenu').checked = false
      /* renvoi en haut de la page */
      window.scrollTo(0,0)

      setTimeout(() => {    
        altLoader.classList.add('load')
      }, 1000);
      setTimeout(() => {    
        altLoader.style.display = 'none'
        document.body.style.overflowY = 'auto'        
      }, 2000);
    }
  
}