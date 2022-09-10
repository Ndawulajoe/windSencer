function windSencer(windspeed){
    if(windspeed>200){
        return applyWindBreaker()
    }else{
        return `stady at ${windspeed}`
    }
    
} function applyWindBreaker(){
    return 'applying Wind Breaker'
}
console.log(windSencer(100))
function speedgoverner(speed){
    if (speed<80){
        return 'narmalSpeed'
    }else{
        return 'overspeeding'
    }
}


console.log(speedgoverner(100))