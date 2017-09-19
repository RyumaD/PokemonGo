class App{

    constructor(){
        this.$map = $("#map")
        this.$spawn= $("#spawn")
        this.$dex= $("#dex")
        this.$pokedex= $("#pokedex")
        this.$combat = $("#combat")
        this.$capture = $("#capture")
        this.$teampoke = $("#teampoke")
        this.$player = $("#player")
        this.$ourpkm = $("#ourpkm")
        this.$otherpoke = $("#otherpoke")
        this.$pokemon = $("#pokemon")
        this.$fuite = $("#fuite")
        this.$attaque = $("#attaque")
        this.$sacoche = $("#sacoche")
        this.$pokeballe = $("#pokeballe")
        this.$switch = $("#switch")
        this.$sac = $("#sac")
        this.$name = $("#name")
        this.$mypokname = $("#mypokname")
        this.$pkm1 = $("#pkm1")
        this.$pkm2 = $("#pkm2")
        this.$pkm3 = $("#pkm3")
        this.$pkm4 = $("#pkm4")
        this.$pkm5 = $("#pkm5")
        this.$pkm6 = $("#pkm6")
        this.$choice = ""
        this.pkm1 = "1"
        this.pkm2 = "2"
        this.pkm3 = "3"
        this.pkm4 = "4"
        this.pkm5 = "5"
        this.pkm6 = "6"
        this.choice = ""
        this.$sw1 = $("#sw1")
        this.$sw2 = $("#sw2")
        this.$sw3 = $("#sw3")
        this.$sw4 = $("#sw4")
        this.$sw5 = $("#sw5")
        this.$sw6 = $("#sw6")
        this.$text = $("#text")
        this.$allpokemon = $("#allpokemon")
        this.$imgpokemon = $("#imgpokemon")
        this.$date_debut = $("#date_debut")
        this.$date_fin = $("#date_fin")
        this.$type = $('#type')
        this.$bankpkm = $("#bankpkm")
        this.initPickers()
        this.$event = $("#event")
        this.$datevent = $("#datevent")
        this.actualpoke = ""
        this.actualpokename = ""
        this.map = null
        this.setInterval = 0;
        this.actualLat = 0;
        this.actualLng = 0;
        this.player = 0;
        this.pokemon = [];
        this.pokedex = [];
        this.pokedexa = [];
        this.pokevent = [];
        this.flagdex = true;
        this.flagbank = true;
        this.flagtext = true;
        this.flagsac = true;
        this.flagswitch = true;
        this.flagactpoke = true;
        this.flagforcbt = true;
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
            var poke = new Pokemon(random.getRandomInt(0,150))
            var icon = poke.addPoke(poke.name)
            that.pokemon.push(poke)
            poke.autoDelete()
        },5000)
    }
    spawn(){
        var random = new Random()
        var poke = new Pokemon(random.getRandomInt(0,150))
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
    pokedexOnOff(){
        if(this.flagdex == true){
            this.$pokedex.css("display","flex");
            this.flagdex = false
        }
        else{
            this.$pokedex.css("display","none");
            this.flagdex = true
        }
    }
    sacocheOnOff(){
        if(this.flagsac == true){
            this.$sacoche.css("display","flex");
            this.flagsac = false
        }
        else{
            this.$sacoche.css("display","none");
            this.flagsac = true
        }
    }
    teampokeOnOff(){
        if(this.flagswitch == true){
            this.$switch.css("display","flex");
            this.flagswitch = false
        }
        else{
            this.$switch.css("display","none");
            this.flagswitch = true
        }
    }
    bankOnOff(data){
        switch (data) {
            case app.$pkm1:
                app.choice = app.pkm1
                break;
            case app.$pkm2:
                app.choice = app.pkm2
                break;
            case app.$pkm3:
                app.choice = app.pkm3
                break;
            case app.$pkm4:
                app.choice = app.pkm4
                break;
            case app.$pkm5:
                app.choice = app.pkm5
                break;
            case app.$pkm6:
                app.choice = app.pkm6
                break;
        }
        if(this.flagbank == true){
            this.$bankpkm.css("display","flex");
            this.flagbank = false
            this.$choice = data
        }
        else{
            this.$bankpkm.css("display","none");
            this.flagbank = true
            this.$choice = ""
            this.choice = ""
        }
    }
    getListePokedex(){
        var pokedex = [
            "Bulbasaur",
            "Ivysaur",
            "Venusaur",
            "Charmander",
            "Charmeleon", 
            "Charizard", 
            "Squirtle", 
            "Wartortle",
            "Blastoise", 
            "Caterpie", 
            "Metapod", 
            "Butterfree", 
            "Weedle", 
            "Kakuna",
            "Beedrill", 
            "Pidgey",
            "Pidgeotto", 
            "Pidgeot", 
            "Rattata", 
            "Raticate", 
            "Spearow",
            "Fearow", 
            "Ekans", 
            "Arbok", 
            "Pikachu", 
            "Raichu", 
            "Sandshrew",
            "Sandslash", 
            "Nidorana", 
            "Nidorina", 
            "Nidoqueen", 
            "Nidorano", 
            "Nidorino", 
            "Nidoking", 
            "Clefairy",
            "Clefable", 
            "Vulpix", 
            "Ninetales", 
            "Jigglypuff", 
            "Wigglytuff", 
            "Zubat", 
            "Golbat", 
            "Oddish", 
            "Gloom", 
            "Vileplume",
            "Paras", 
            "Parasect", 
            "Venonat",
            "Venomoth", 
            "Diglett", 
            "Dugtrio", 
            "Meowth", 
            "Persian", 
            "Psyduck", 
            "Golduck", 
            "Mankey",
            "Primeape", 
            "Growlithe",
            "Arcanine", 
            "Poliwag",
            "Poliwhirl", 
            "Poliwrath", 
            "Abra", 
            "Kadabra", 
            "Alakazam", 
            "Machop", 
            "Machoke",
            "Machamp", 
            "Bellsprout",
            "Weepinbell",
            "Victreebel", 
            "Tentacool",
            "Tentacruel", 
            "Geodude", 
            "Graveler", 
            "Golem", 
            "Ponyta", 
            "Rapidash",
            "Slowpoke",
            "Slowbro", 
            "Magnemite", 
            "Magneton", 
            "Farfetchd", 
            "Doduo", 
            "Dodrio", 
            "Seel", 
            "Dewgong", 
            "Grimer", 
            "Muk", 
            "Shellder",
            "Cloyster", 
            "Gastly", 
            "Haunter", 
            "Gengar", 
            "Onix", 
            "Drowzee", 
            "Hypno", 
            "Krabby", 
            "Kingler",
            "Voltorb", 
            "Electrode", 
            "Exeggcute", 
            "Exeggutor", 
            "Cubone",
            "Marowak", 
            "Hitmonlee", 
            "Hitmonchan", 
            "Lickitung", 
            "Koffing", 
            "Weezing", 
            "Rhyhorn", 
            "Rhydon", 
            "Chansey", 
            "Tangela", 
            "Kangaskhan", 
            "Horsea", 
            "Seadra", 
            "Goldeen",
            "Seaking",
            "Staryu", 
            "Starmie", 
            "MrMime", 
            "Scyther",
            "Jynx", 
            "Electabuzz", 
            "Magmar", 
            "Pinsir", 
            "Tauros", 
            "Magikarp",
            "Gyarados", 
            "Lapras", 
            "Ditto", 
            "Eevee", 
            "Vaporeon", 
            "Jolteon", 
            "Flareon", 
            "Porygon", 
            "Omanyte",
            "Omastar", 
            "Kabuto",
            "Kabutops",
            "Aerodactyl",
            "Snorlax",
            "Articuno",
            "Zapdos",
            "Moltres",
            "Dratini",
            "Dragonair",
            "Dragonite",
            "Mewtwo",
            "Mew"
        ]
        this.pokedexa = pokedex
        var ol = document.getElementById("allpokemon")
        while (ol.firstChild)
        {
            ol.removeChild(ol.firstChild);
        }
        for(var pokedex of this.pokedexa){
            if(this.pokedex.indexOf(pokedex) === -1){
                this.$allpokemon.append("<li class='lis'>???</li>")
            }
            else{
                this.$allpokemon.append("<li class='lis'>"+pokedex+"</li>")
            }
        }
    }
    initPickers(){
        var option = {
            dayNames: [ "Dimanche", "Lundi", "Mardi", "Mercredi", "Jeudi", "Vendredi", "Samedi" ],
            dayNamesMin: [ "Di", "Lu", "Ma", "Me", "Je", "Ve", "Sa" ],
            monthNames: [ "Janvier", "Fevrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "Decembre" ],
            monthNamesShort: [ "Jan", "Fev", "Mar", "Avr", "Mai", "Jui", "Jul", "Aou", "Sep", "Oct", "Nov", "Dec" ],
            firstDay: 1,
            altFormat: "dd-mm-yy",
            dateFormat: "dd/mm/yy"
        }
        this.$date_debut.datepicker(option)
        this.$date_fin.datepicker(option)

    }
    addEvent(type){
        var pokarray = new Pokarray();
        var pokevent = pokarray.getPokeType(type)
        var result = pokevent[Math.floor(Math.random()*pokarray.type[type].length)]
        var poke = new Pokemon(result)
        var icon = poke.addPoke(poke.name)
        this.pokemon.push(poke)
        poke.autoDelete()
    }
    save(){
        var pokedex = JSON.stringify(this.pokedex)
        localStorage.setItem("Pokedex", pokedex)
    }
    readPokedex(){
        var pokedex = localStorage.getItem("Pokedex")
        if(!pokedex){
            return;
        }
        
        var array = JSON.parse(pokedex)
        for(var pokemon of array){
            this.pokedex.push(pokemon)
        }
    }
    checkDate(){
        var inter = setInterval(function(){
            for(var pokevents of app.pokevent){
                var now = new Date();
                if(now.getDate() >= pokevents[1].getDate() && now.getMonth() >= pokevents[1].getMonth() && now.getFullYear() >= pokevents[1].getFullYear()){
                    if(now.getDate() <= pokevents[2].getDate() && now.getMonth() <= pokevents[2].getMonth() && now.getFullYear() <= pokevents[2].getFullYear()){
                        app.addEvent(pokevents[0]);
                    }
                }
            }
            
        },1000)
    }
    teamUp(){
        var div = document.getElementById("bankpkm")
        while (div.firstChild)
        {
            div.removeChild(div.firstChild);
        }
        var imageURL = "CSS/Images/pkm/"
        
        for(var pokedex of this.pokedexa){
            if(this.pokedex.indexOf(pokedex) != -1){
                this.$bankpkm.append("<div class='pkmbk'><h4>"+pokedex+"</h4><img src='"+imageURL+pokedex+".png'></div>")
            }
        }
    }
}