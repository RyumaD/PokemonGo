var app = new App()
app.main = function(){

    app.centerOnGeolocalisation()
    app.actualPos()
    app.infiniteSpawn()
    app.Player()
    
}

app.$spawn.click(function() {
    app.spawn()
});
/*
app.map.addListener('click', function(event){

})
*/


document.addEventListener('keydown', (event) => {
    const keyName = event.key;
    if (keyName === 'Control') {
      return;
    }
  
    if (event.ctrlKey) {
      console.log(`Combination of ctrlKey + ${keyName}`);
    } 
    else {
        switch(keyName){
            case "ArrowUp":
                    app.actualLat = app.actualLat + 0.0001
                break;
            case "ArrowDown":
                    app.actualLat = app.actualLat - 0.0001
                break; 
            case "ArrowLeft":
                    app.actualLng = app.actualLng - 0.0001
                break; 
            case "ArrowRight":
                    app.actualLng = app.actualLng + 0.0001
                break; 
        }
        var pos = {
            lat : app.actualLat,
            lng : app.actualLng
        }

        app.map.setCenter(pos)
        app.searchInCercle()
        app.movePlayer(app.map, app.player.marker)
    }
  }, false);
  
    document.addEventListener('keyup', (event) => {
        
    }, false);

   