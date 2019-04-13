module.exports = (maxNumber)=>{    
    if (maxNumber){
        if(isNaN(maxNumber)) throw new Error('Random function argument "maxNumber" must be a number')
        const randomNumber = Math.floor(Math.random()*maxNumber)+1        
        return randomNumber
    }
    throw new Error('Random function must contain "maxNumber" argument')    
}
