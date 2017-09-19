class Random{
    constructor(){
        
    }

    getRandomFloat(min, max) {
        return Math.random() * (max - min) + min;
    }
    getRandomInt(min, max) {
        min = Math.ceil(min);
        max = Math.floor(max);
        return Math.floor(Math.random() * (max - min)) + min;
      }
}