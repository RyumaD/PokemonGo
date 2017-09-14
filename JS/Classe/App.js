class App{

    constructor(){
        this.$map = $("#map")
        this.$spawn= $("#spawn")
        this.map = null
        this.setInterval = 0;
    }
    initMap() {
        this.map = new google.maps.Map(this.$map[0], {
          center: {lat: 42, lng: 3},
          zoom: 18,
          scrollwheel: false,
          disableDefaultUI: true,
          disableDoubleClickZoom:true,
          draggable : false,
          keyboardShortcuts: true,
          clickableIcons: true
        });
        this.main()
    }
    centerOnGeolocalisation(){
        var that = this;
        navigator.geolocation.getCurrentPosition(function (position){
            var pos = {
                lat : position.coords.latitude,
                lng : position.coords.longitude
            }
            that.map.setCenter(pos)
        })
    }
    infiniteSpawn(){
        var random = new Random()
        this.spawnInterval = setInterval(function(){
            var poke = new Pokemon(random.getRandomInt(0,3))
            var icon = poke.addPoke(poke.name)
            poke.autoDelete()
        },5000)
    }
    spawn(){
        var random = new Random()
        var poke = new Pokemon(random.getRandomInt(0,3))
        var icon = poke.addPoke(poke.name)
        poke.autoDelete()
    }
}