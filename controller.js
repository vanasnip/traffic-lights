
const red = getElement( 'red')
const amber = getElement( 'amber')
const green = getElement( 'green')
 
const lights = {red, amber, green}

function getElement( id ){
    return document.getElementById( id )
}