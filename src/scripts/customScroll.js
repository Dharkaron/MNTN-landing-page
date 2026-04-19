export function smoothScroll(target, duration){

  //init of all variables
  const currentTarget = document.getElementById(target)
  let targetPosition = currentTarget.getBoundingClientRect().top 
  const startPosition = window.scrollY

  let startTime = null
 
  const animation = (currentTime) => {
    if(startTime === null){
      startTime = currentTime      
    }
    
    const timeElapsed = currentTime - startTime
    
    const step = easeInOut(timeElapsed, startPosition, targetPosition, duration)
    window.scrollTo(0, step)

    if(timeElapsed < duration){      
      requestAnimationFrame(animation)
    }
  } 


  function easeInOut(t, b, c, d) {
    t /= d/2;
    if (t < 1) return c/2*t*t*t*t + b;
    t -= 2;
    return c/2*(t*t*t*t*t + 2) + b;
  }

  requestAnimationFrame(animation)
}
