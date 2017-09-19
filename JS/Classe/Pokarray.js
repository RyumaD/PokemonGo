class Pokarray{
    constructor(){
        this.type = []
        this.getType()
    }

    getType(){
        this.type["Plante"] = ["Bulbasaur","Ivysaur","Venusaur","Oddish","Gloom","Vileplume","Paras","Parasect",
        "Bellsprout","Weepinbell","Victreebel","Exeggcute","Exeggutor","Tangela"]

        this.type["Feu"] = ["Charmander","Charmeleon","Charizard","Vulpix","Ninetales","Growlithe","Arcanine",
        "Ponyta","Rapidash","Magmar","Flareon"]

        this.type["Eau"] = ["Squirtle","Wartortle","Blastoise","Psyduck","Golduck","Poliwag","Poliwhirl","Poliwrath",
        "Tentacool","Tentacruel","Slowpoke","Slowbro","Seel","Dewgong","Shellder","Cloyster","Krabby","Kingler",
        "Horsea","Seadra","Goldeen","Seaking","Staryu","Starmie","Magikarp","Gyarados","Lapras","Vaporeon",
        "Omanyte","Omastar","Kabuto","Kabutops"]

        this.type["Poison"] = ["Bulbasaur","Ivysaur","Venusaur","Weedle","Kakuna","Beedrill","Ekans","Arbok",
        "Nidorana","Nidorina","Nidoqueen","Nidorano","Nidorino","Nidoking","Zubat","Golbat","Oddish","Gloom","Vileplume",
        "Venonat","Venomoth","Bellsprout","Weepinbell","Victreebel","Tentacool","Tentacruel","Grimer","Muk",
        "Gastly","Haunter","Gengar","Koffing","Weezing"]

        this.type["Acier"] = ["Magnemite","Magneton"]

        this.type["Combat"] = ["Mankey","Primeape","Poliwrath","Machop","Machoke","Machamp","Hitmonlee","Hitmonchan"]

        this.type["Electrik"] = ["Pikachu","Raichu","Magnemite","Magneton","Voltorb","Electrode","Electabuzz","Jolteon"]

        this.type["Sol"] = ["Sandshrew","Sandslash","Nidoqueen","Nidoking","Diglett","Dugtrio",
        "Geodude","Graveler","Golem","Onix","Cubone","Marowak","Rhyhorn","Rhydon"]

        this.type["Spectre"] = ["Gastly","Haunter","Gengar"]

        this.type["Fee"] = []

        this.type["Dragon"] = ["Dratini","Dragonair","Dragonite"]

        this.type["Psy"] = ["Abra","Kadabra","Alakazam","Slowpoke","Slowbro","Drowzee","Hypno","Exeggcute","Exeggutor",
        "Starmie","MrMime","Jynx"]

        this.type["Tenebres"] = []

        this.type["Roche"] = ["Geodude","Graveler","Golem","Onix","Rhyhorn","Rhydon","Omanyte","Omastar","Kabuto","Kabutops","Aerodactyl"]

        this.type["Vol"] = ["Charizard","Butterfree","Pidgey","Pidgeotto","Pidgeot","Spearow","Fearow",
        "Zubat","Golbat","Farfetchd","Doduo","Dodrio","Scyther","Gyarados","Aerodactyl"]

        this.type["Normal"] = ["Pidgey","Pidgeotto","Pidgeot","Rattata","Raticate","Spearow","Fearow",
        "Clefairy","Clefable","Jigglypuff","Wigglytuff","Meowth","Persian","Farfetchd","Doduo","Dodrio",
        "Lickitung","Chansey","Kangaskhan","Tauros","Ditto","Eevee","Porygon","Snorlax"]

        this.type["Insecte"] = ["Caterpie", "Metapod","Butterfree","Weedle","Kakuna","Beedrill",
        "Paras","Parasect","Venonat","Venomoth","Scyther","Pinsir"]

        this.type["Glace"] = ["Dewgong","Cloyster","Jynx","Lapras"]
    }

    getPokeType(type){
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
        var value = []
        for(var types of this.type[type]){
            value.push(pokedex.indexOf(types))
        }
        return value
    }
    getTypeByName(name){
        
    }
}