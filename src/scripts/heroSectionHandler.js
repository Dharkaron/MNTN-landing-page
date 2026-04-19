export function heroHandler(){
  // Apply correct opacity and position at page load & reload
  // Unnecessery if the position is reset to pageTop at reload/load

const handleHeroSection = () => {
  const sectionHero = document.querySelector('.hero__banner')
  const backgroundTop = document.querySelector('.HG')
  const backgroundMid = document.querySelector('.MG')
  const backgroundBt = document.querySelector('.VG')

  if (window.pageYOffset === 0) {
    sectionHero.style.opacity = 1
  } 
  if (750 >= window.pageYOffset > 0) {
    sectionHero.style.opacity = `${1 - (window.pageYOffset/700)}`
    sectionHero.style.transform =  `translate3d(0, ${ -(window.pageYOffset/16)}%, 0)` 

    backgroundTop.style.transform = `translate3d(0, ${ -(window.pageYOffset/8)}%, 0)`    
    backgroundMid.style.transform = `translate3d(0, ${ -(window.pageYOffset/16)}%, 0)`    
    backgroundBt.style.transform = `translate3d(0, ${ -(window.pageYOffset/32)}%, 0)`  
    
    sectionHero.classList.remove('unselectable')
  }
  if (window.pageYOffset > 750) {
    sectionHero.style.opacity = 0
    sectionHero.classList.add('unselectable')      
  }
}

window.addEventListener('scroll', handleHeroSection)
window.addEventListener('load', handleHeroSection)
}
