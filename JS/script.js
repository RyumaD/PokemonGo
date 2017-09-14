var app = new App()
app.main = function(){

    app.centerOnGeolocalisation()
    app.infiniteSpawn()
   
}

app.$spawn.click(function() {
    app.spawn()
});