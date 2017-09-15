class App{

    constructor(){
        this.$map = $("#map")
        this.$spawn= $("#spawn")
        this.$capture = $("#capture")
        this.map = null
        this.setInterval = 0;
        this.actualLat = 0;
        this.actualLng = 0;
        this.player = 0;
        this.pokemon = [];
        this.pokedex = [];
    }
    initMap() {
        this.map = new google.maps.Map(this.$map[0], {
          center: {lat: 42, lng: 3},
          zoom: 18,
          scrollwheel: false,
          disableDefaultUI: true,
          disableDoubleClickZoom:true,
          //draggable : false,
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
        var that = this
        var random = new Random()
        this.spawnInterval = setInterval(function(){
            var poke = new Pokemon(random.getRandomInt(0,3))
            that.pokemon.push(poke)
            var icon = poke.addPoke(poke.name)
            poke.autoDelete()
        },2000)
    }
    spawn(){
        var random = new Random()
        var poke = new Pokemon(random.getRandomInt(0,3))
        this.pokemon.push(poke)
        var icon = poke.addPoke(poke.name)
        poke.autoDelete()
    }
    Player(){
        var spawn = new Player()
        this.player = spawn;
        spawn.addPlayer()
    }
    getLat( callBack ){
        navigator.geolocation.getCurrentPosition(function (position){
            var lat = position.coords.latitude 
            callBack( lat )
        })
    }
    getLng( callback ){
        navigator.geolocation.getCurrentPosition(function (position){
            var lng = position.coords.longitude
            callback( lng );
        })
    }
    actualPos(){
        var that = this
        this.getLat(function(lat){
            that.actualLat = lat
        })
        this.getLng(function(lng){
            that.actualLng = lng
        })
    }
    movePlayer( map, marker ) {
        var latlng = new google.maps.LatLng( this.actualLat,this.actualLng )
        marker.setPosition( latlng );
    
    };
    searchInCercle(){
        var findedMarkers = [];
        for( var poke of this.pokemon){
            for( var marker of poke.mark ) {
                var finded = google.maps.geometry.spherical.computeDistanceBetween(this.player.marker.position , marker.position);
                if( finded < 110 ){
                    findedMarkers.push( marker );
                    marker.setMap(app.map)
                }
                else{
                    marker.setMap(null)
                }

            }
        }

        return findedMarkers;
    }
}