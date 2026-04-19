import { smoothScroll } from "./customScroll.js"

/* renvoi vers les différentes section de la page, avec un défilement personnalisé (ease, 1500s) */
export function handleSliderMenu() {
  const slider = document.querySelector('.slider')
  const sliderLinks = document.querySelectorAll('.slider__link')
  const sliderBorder = document.querySelectorAll('.link--border')
  const sidemenuCheckbox = document.getElementById('togglemenu')
 
//// Gère l'affichage pour le redimensionnement manuel de la page / changement d'orientation du support
  window.onresize = () => { 
    if(window.innerWidth<1024){
      slider.style.opacity = '0'
      slider.style.transform = 'translateX(150%)'
    }else if(window.innerWidth>=1024){
      slider.style.opacity = '1'
      slider.style.transform = 'translateX(0)'
      sidemenuCheckbox.checked = false
    }
  }  

  //// Défilement personnalisé pour chaque lien du menu
  sliderLinks.forEach(link => {
    link.addEventListener("click", (e) =>{
      e.preventDefault()  
      let targetAnchor = e.target.hash.replace("#", "")
                    
      sidemenuCheckbox.checked = false

      if(window.innerWidth<1024){
        slider.style.opacity = '0'
        slider.style.transform = 'translateX(150%)'
      }else if(window.innerWidth>=1024){
        slider.style.opacity = '1'
        slider.style.transform = 'translateX(0)'
      }

      smoothScroll(targetAnchor, 1500)
    })
  })
  //// Animation/apparition
  sidemenuCheckbox.addEventListener('click', ()=>{
    if(sidemenuCheckbox.checked){
      console.log('true')
      slider.style.opacity = '1'
      slider.style.transform = 'translateX(0)'
      
    }else if(!sidemenuCheckbox.checked){
      console.log('false')
      slider.style.opacity = '0'
      slider.style.transform = 'translateX(150%)'
    }    
  })

  //// Changement de l'indicateur de sélection du menu
  window.addEventListener('scroll', ()=>{
    
    const slider00 = document.getElementById('slider00')
    const slider01 = document.getElementById('slider01')
    const slider02 = document.getElementById('slider02')
    const slider03 = document.getElementById('slider03')
    
    const anchor01 = document.getElementById('article01').getBoundingClientRect().y
    const anchor02 = document.getElementById('article02').getBoundingClientRect().y
    const anchor03 = document.getElementById('article03').getBoundingClientRect().y

    sliderBorder.forEach(border => { 
      if (anchor01>250) {
        border.classList.remove('link--selected')
        slider00.classList.add('link--selected')          
      }
      if (anchor01<250 && anchor02>300) {
        border.classList.remove('link--selected')
        slider01.classList.add('link--selected')         
      }
      if (anchor02<100 && anchor03>300) {
        border.classList.remove('link--selected')
        slider02.classList.add('link--selected')         
      }
      if (anchor03<100) {
        border.classList.remove('link--selected')
        slider03.classList.add('link--selected')         
      }     
    })
  })
}


export function handleBannerLink() {
  const scrollBtn = document.querySelector('.hero__banner__scroll')

  scrollBtn.addEventListener('click', ()=>{
    smoothScroll('article01',2500)
  })
}


