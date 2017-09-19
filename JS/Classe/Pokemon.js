class Pokemon{
    constructor(number){
        this.number = number
        this.name = this.getName()
        this.type = ""
        this.pc = ""
        this.icons = [];
        this.array = [];
        this.mark = [];
        this.setInterval = 0;
        this.pokemon = 0
        this.$capture = $("#capture")
        this.$name = $("#name")
        this.$pokemon = $("#pokemon") 
    }

    getName(){
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
        app.pokedexa = pokedex
        for(var pokedexe of pokedex){
            if(this.number == pokedex.indexOf(pokedexe)){
                var name = pokedexe
            }
        }
        return name
    }
    getType(){

    }
    autoDelete(){
        var that = this
        for(var marke of this.mark){
            this.spawnInterval = setInterval(function(){
                marke.setMap(null)
                that.mark.splice(that.mark.indexOf(marke),1)
            },30000)
        }
    }
    getIcone(){
        
        var i =0
        for(var icones of this.icons){
            this.array[i] = icones
            i++    
            var icon = {
                icones: {
                    icon: '../pokemonGo/CSS/Images/pkm/'+icones+'.png',
                    scaledSize: new google.maps.Size(10, 10),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(0, 0)
                }
            }
        }   
        //console.log(this.array)
        return icon
    }
    getFeature(){
        var random = new Random()
        var lati = app.actualLat + random.getRandomFloat(-0.001,0.001)
        var long = app.actualLng + random.getRandomFloat(-0.001,0.001)
        var features = [
            {
            //position: new google.maps.LatLng(random.getRandomFloat(42.678100,42.684070),random.getRandomFloat(2.788690,2.794920)),
            //position: new google.maps.LatLng(random.getRandomFloat(42.686308,42.688429),random.getRandomFloat(2.896104,2.903550)),
            position: new google.maps.LatLng(lati,long),
            type: 'icones'
            }
        ]
        return features
    }
    addPoke(name){
        var that = this
        this.icons.push(name)
        var icon = this.getIcone()
        var features = this.getFeature()
        features.forEach(function(feature) {
            var marker = new google.maps.Marker({
                position: feature.position,
                icon: icon[feature.type].icon,
                map: app.map
            });
            that.mark.push(marker);
            that.capture(name,marker)
            that.setMapOnAll(null)
        });
    }
    setMapOnAll(map) {
        for (var i = 0; i < this.mark.length; i++) {
            this.mark[i].setMap(map);
        }
    }
    capture(content, marker){
        var that = this
        var flag = false
        marker.addListener("click", function(){
            marker.setMap(null)
            /*$("#anima").css("display","flex")
            for(var i =1; i<17; i++){
                if(flag == false){
                    flag = true
                    $("#"+i+"").fadeIn(function(){
                        flag = false
                    },1000)
                }
                else{
                    i--
                }
            }*/
            that.$name.text(content)
            app.flagforcbt = false
            var imageURL = "CSS/Images/pkm/"
            that.$pokemon.css("background-image", "url('"+imageURL+content+".png')")
            app.$combat.css("display","initial");
            app.$player.animate({ "margin-left": 0 }, 2000)
            app.$text.text("Un "+content+" sauvage apparait !")
            that.mark.splice(that.mark.indexOf(marker),1)
        })
    }
}