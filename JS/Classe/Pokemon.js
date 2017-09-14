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
    }
    getName(){
        var pokedex = [
            "Bulbasaur",
            "Ivysaur",
            "Venusaur",
        ]
        var name = "";
        for(var pokedexe of pokedex){
            console.log(pokedexe)
            if(this.number == pokedex.indexOf(pokedexe)){
                name = pokedexe
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
            },11000)
        }
    }
    getIcone(){
        
        var i =0
        for(var icones of this.icons){
            this.array[i] = icones
            i++    
            var icon = {
                icones: {
                    icon: '../pokemonGo/CSS/Images/'+icones+'.png',
                    scaledSize: new google.maps.Size(10, 10),
                    origin: new google.maps.Point(0,0),
                    anchor: new google.maps.Point(0, 0)
                }
            }
        }
        console.log(this.array)
        return icon
    }
    getFeature(){
        var random = new Random()
        var features = [
            {
            position: new google.maps.LatLng(random.getRandomFloat(42.678100,42.684070),random.getRandomFloat(2.788690,2.794920)),
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
        });
    }
    /*Bulbasaur Ivysaur Venusaur 
    Charmander Charmeleon Charizard 
    Squirtle Wartortle Blastoise 
    Caterpie Metapod Butterfree 
    Weedle Kakuna Beedrill 
    Pidgey Pidgeotto Pidgeot 
    Rattata Raticate 
    Spearow Fearow 
    Ekans Arbok 
    Pikachu Raichu 
    Sandshrew Sandslash 
    Nidoran♀ Nidorina Nidoqueen 
    Nidoran♂ Nidorino Nidoking 
    Clefairy Clefable 
    Vulpix Ninetales 
    Jigglypuff Wigglytuff 
    Zubat Golbat 
    Oddish Gloom Vileplume 
    Paras Parasect 
    Venonat Venomoth 
    Diglett Dugtrio 
    Meowth Persian 
    Psyduck Golduck 
    Mankey Primeape 
    Growlithe Arcanine 
    Poliwag Poliwhirl Poliwrath 
    Abra Kadabra Alakazam 
    Machop Machoke Machamp 
    Bellsprout Weepinbell Victreebel 
    Tentacool Tentacruel 
    Geodude Graveler Golem 
    Ponyta Rapidash 
    Slowpoke Slowbro 
    Magnemite Magneton 
    Farfetchd 
    Doduo Dodrio 
    Seel Dewgong 
    Grimer Muk 
    Shellder Cloyster 
    Gastly Haunter Gengar 
    Onix 
    Drowzee Hypno 
    Krabby Kingler 
    Voltorb Electrode 
    Exeggcute Exeggutor 
    Cubone Marowak 
    Hitmonlee 
    Hitmonchan 
    Lickitung 
    Koffing Weezing 
    Rhyhorn Rhydon 
    Chansey 
    Tangela 
    Kangaskhan 
    Horsea Seadra 
    Goldeen Seaking 
    Staryu Starmie 
    MrMime 
    Scyther
    Jynx 
    Electabuzz 
    Magmar 
    Pinsir 
    Tauros 
    Magikarp Gyarados 
    Lapras 
    Ditto 
    Eevee Vaporeon Jolteon Flareon 
    Porygon 
    Omanyte Omastar 
    Kabuto Kabutops 
    Aerodactyl 
    Snorlax 
    Articuno 
    Zapdos 
    Moltres 
    Dratini Dragonair Dragonite 
    Mewtwo 
    Mew*/
}