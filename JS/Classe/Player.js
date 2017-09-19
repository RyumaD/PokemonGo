class Player{
    constructor(){
        this.markers = [];
        this.marker = 0;
        this.cercle = 0;
    }
    addPlayer(){
        var that = this
        var icon = this.getIconPlayer()

        this.getFeaturePlayer( function( feature ){
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icon,
                map: app.map,
            })
            that.marker = marker
            that.markers.push(marker);
            that.bindCercle(marker)
        });
    }
    getIconPlayer(){
        var icon = {
                url: '../pokemonGo/CSS/Images/layout/Red.png',
                scaledSize: new google.maps.Size(50, 100),
                origin: new google.maps.Point(0,0),
                anchor: new google.maps.Point(20, 50)
        }
        return icon
    }
    getFeaturePlayer( callback ){
        navigator.geolocation.getCurrentPosition(function (position){
            var features = 
                {
                position: new google.maps.LatLng(position.coords.latitude, position.coords.longitude),
                type: 'player'
                }
            ;
            callback( features );
        })
    }
    initCercle(mark){
        var optionsCercle = {
            map: app.map,
            radius: 100,
            center: mark.position 
        }
        this.cercle = new google.maps.Circle( optionsCercle );
        return this.cercle
    }
    bindCercle(mark){
            var cercle = this.initCercle(mark)
            cercle.bindTo("center" ,mark, "position" );
    }
}