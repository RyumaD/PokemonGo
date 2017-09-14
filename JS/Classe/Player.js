class Player{
    constructor(){
        this.mark = [];

    }
    addPlayer(){
        var icon = this.getIconPlayer()
        var features = this.getFeaturePlayer()
        features.forEach(function(feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icon[feature.type].icon,
                map: app.map
            })
            that.mark.push(marker);
        })
    }
    getIconPlayer(){
        var icon = {
            icones: {
                icon: '../pokemonGo/CSS/Images/Red.png',
                scaledSize: new google.maps.Size(10, 10),
                origin: new google.maps.Point(0,0),
                anchor: new google.maps.Point(0, 0)
            }
        }
        return icon
    }
    getFeaturePlayer(){
        navigator.geolocation.getCurrentPosition(function (position){
            var features = [
                {
                position: new google.maps.LatLng(position.coords.latitude,position.coords.longitude),
                type: 'player'
                }
            ]
            return features
        })
    }
}