
const red = getElement( 'red')
const amber = getElement( 'amber')
const green = getElement( 'green')
 
const lights = [red, amber, green] 

lights.forEach( light => light.addEventListener('click', function(){
    clearActive(lights) // clear active from all lights

    // add active 
    light.classList.add('active')

}))

// select elements from html file
function getElement( id ){
    return document.getElementById( id )
}

function clearActive(lights) {
    // loop over each light
    lights.forEach(light => {
        light.classList.remove('active')
    });
}