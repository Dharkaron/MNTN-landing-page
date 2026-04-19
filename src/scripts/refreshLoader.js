export function refreshLoader(){
  const refreshBtn = document.querySelector('.header__icon')
  const loader = document.querySelector('.loader')

  refreshBtn.addEventListener('click', (e)=>{
    e.preventDefault()
    loader.classList.remove('load')
    loader.style.display = 'flex'
    loader.classList.add('unload')
    
    setTimeout(() => {
      window.scrollTo(0,0)
      loader.classList.remove('unload')
      document.body.style.overflowY = 'hidden'
      sessionStorage.setItem('pageIsLoaded', false)
    }, 500);  
  })
}
