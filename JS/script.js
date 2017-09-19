var app = new App()
app.main = function(){

    app.centerOnGeolocalisation()
    app.actualPos()
    app.infiniteSpawn()
    app.Player()
    app.readPokedex()
    app.getListePokedex();
    app.checkDate()
    app.teamUp()
}

app.$spawn.click(function() {
    app.spawn()
});
app.$dex.click(function() {
    app.pokedexOnOff()
});

app.$pkm1.click(function() {
    if(app.flagforcbt == true){
        app.bankOnOff(app.$pkm1)
    }
});
app.$pkm2.click(function() {
    if(app.flagforcbt == true){
        app.bankOnOff(app.$pkm2)
    }
});
app.$pkm3.click(function() {
    if(app.flagforcbt == true){
        app.bankOnOff(app.$pkm3)
    }
});
app.$pkm4.click(function() {
    if(app.flagforcbt == true){
        app.bankOnOff(app.$pkm4)
    }
});
app.$pkm5.click(function() {
    if(app.flagforcbt == true){
        app.bankOnOff(app.$pkm5)
    }
});
app.$pkm6.click(function() {
    if(app.flagforcbt == true){
        app.bankOnOff(app.$pkm6)
    }
});


app.$text.click(function() {
    if(app.pkm1 == "1"){
        console.log("Ajoute un pokemon a ton equipe")
    }
    else{
        app.actualpoke = app.pkm1
        app.$mypokname.text(app.actualpoke)
        app.$text.text(app.pkm1+" a toi de jouer !")
        app.$player.animate({ "margin-left": -340+"px" }, 2000)
        app.$ourpkm.css("background-image", "url('CSS/Images/pkm/"+app.pkm1+".png')")
        app.$ourpkm.animate({ "margin-left": 0+"px" }, 4000)
    }
    
});
app.$sw1.click(function() {
    if(app.pkm1 == "1"){
        console.log("Il ny a pas de pokemon a cet emplacement")
    }
    else{
        if(app.actualpok != app.pkm1 && app.flagactpoke == true){
            app.$otherpoke.css("background-image", "url('CSS/Images/pkm/"+app.pkm1+".png')")
            app.$ourpkm.animate({ "margin-left": -1000+"px" }, 2000)
            app.$otherpoke.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm1+"")
            app.actualpoke = app.pkm1
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = false
        }
        else if(app.actualpok != app.pkm1 && app.flagactpoke == false){
            app.$ourpkm.css("background-image", "url('CSS/Images/pkm/"+app.pkm1+".png')")
            app.$otherpoke.animate({ "margin-left": -1000+"px" }, 2000)
            app.$ourpkm.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm1+"")
            app.actualpoke = app.pkm1
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = true
        }
    }
    
});
app.$sw2.click(function() {
    if(app.pkm2 == "2"){
        console.log("Il ny a pas de pokemon a cet emplacement")
    }
    else{
        if(app.actualpok != app.pkm2 && app.flagactpoke == true){
            app.$otherpoke.css("background-image", "url('CSS/Images/pkm/"+app.pkm2+".png')")
            app.$ourpkm.animate({ "margin-left": -1000+"px" }, 2000)
            app.$otherpoke.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm2+"")
            app.actualpoke = app.pkm2
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = false
        }
        else if(app.actualpok != app.pkm2 && app.flagactpoke == false){
            app.$ourpkm.css("background-image", "url('CSS/Images/pkm/"+app.pkm2+".png')")
            app.$otherpoke.animate({ "margin-left": -1000+"px" }, 2000)
            app.$ourpkm.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm2+"")
            app.actualpoke = app.pkm2
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = true
        }
    }
});
app.$sw3.click(function() {
    if(app.pkm3 == "3"){
        console.log("Il ny a pas de pokemon a cet emplacement")
    }
    else{
        if(app.actualpok != app.pkm3 && app.flagactpoke == true){
            app.$otherpoke.css("background-image", "url('CSS/Images/pkm/"+app.pkm3+".png')")
            app.$ourpkm.animate({ "margin-left": -1000+"px" }, 2000)
            app.$otherpoke.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm3+"")
            app.actualpoke = app.pkm3
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = false
        }
        else if(app.actualpok != app.pkm3 && app.flagactpoke == false){
            app.$ourpkm.css("background-image", "url('CSS/Images/pkm/"+app.pkm3+".png')")
            app.$otherpoke.animate({ "margin-left": -1000+"px" }, 2000)
            app.$ourpkm.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm3+"")
            app.actualpoke = app.pkm3
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = true
        }
    }
});
app.$sw4.click(function() {
    if(app.pkm4 == "4"){
        console.log("Il ny a pas de pokemon a cet emplacement")
    }
    else{
        if(app.actualpok != app.pkm4 && app.flagactpoke == true){
            app.$otherpoke.css("background-image", "url('CSS/Images/pkm/"+app.pkm4+".png')")
            app.$ourpkm.animate({ "margin-left": -1000+"px" }, 2000)
            app.$otherpoke.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm4+"")
            app.actualpoke = app.pkm4
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = false
        }
        else if(app.actualpok != app.pkm4 && app.flagactpoke == false){
            app.$ourpkm.css("background-image", "url('CSS/Images/pkm/"+app.pkm4+".png')")
            app.$otherpoke.animate({ "margin-left": -1000+"px" }, 2000)
            app.$ourpkm.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm4+"")
            app.actualpoke = app.pkm4
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = true
        }
    }
});
app.$sw5.click(function() {
    if(app.pkm5 == "5"){
        console.log("Il ny a pas de pokemon a cet emplacement")
    }
    else{
        if(app.actualpok != app.pkm5 && app.flagactpoke == true){
            app.$otherpoke.css("background-image", "url('CSS/Images/pkm/"+app.pkm5+".png')")
            app.$ourpkm.animate({ "margin-left": -1000+"px" }, 2000)
            app.$otherpoke.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm5+"")
            app.actualpoke = app.pkm5
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = false
        }
        else if(app.actualpok != app.pkm5 && app.flagactpoke == false){
            app.$ourpkm.css("background-image", "url('CSS/Images/pkm/"+app.pkm5+".png')")
            app.$otherpoke.animate({ "margin-left": -1000+"px" }, 2000)
            app.$ourpkm.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm5+"")
            app.actualpoke = app.pkm5
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = true
        }
    }
});
app.$sw6.click(function() {
    if(app.pkm6 == "6"){
        console.log("Il ny a pas de pokemon a cet emplacement")
    }
    else{
        if(app.actualpok != app.pkm6 && app.flagactpoke == true){
            app.$otherpoke.css("background-image", "url('CSS/Images/pkm/"+app.pkm6+".png')")
            app.$ourpkm.animate({ "margin-left": -1000+"px" }, 2000)
            app.$otherpoke.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm6+"")
            app.actualpoke = app.pkm6
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = false
        }
        else if(app.actualpok != app.pkm6 && app.flagactpoke == false){
            app.$ourpkm.css("background-image", "url('CSS/Images/pkm/"+app.pkm6+".png')")
            app.$otherpoke.animate({ "margin-left": -1000+"px" }, 2000)
            app.$ourpkm.animate({ "margin-left": 0 }, 4000)
            app.$text.text(" Reviens"+app.actualpoke+"! En avant "+app.pkm6+"")
            app.actualpoke = app.pkm6
            app.$mypokname.text(app.actualpoke)
            app.flagactpoke = true
        }
    }
});
app.$bankpkm.on('click','div.pkmbk',function() {    
    var content = $(this).text()
    var imageURL = "CSS/Images/pkm/"
    app.$choice.css("background", "url('"+imageURL+content+".png') no-repeat bottom center")
    switch (app.choice) {
        case app.pkm1:
            app.pkm1 = content
            break;
        case app.pkm2:
            app.pkm2 = content
            break;
        case app.pkm3:
            app.pkm3 = content
            break;
        case app.pkm4:
            app.pkm4 = content
            break;
        case app.pkm5:
            app.pkm5 = content
            break;
        case app.pkm6:
            app.pkm6 = content
            break;
    }
    app.bankOnOff(app.$choice)
});

app.$allpokemon.on('click','li.lis',function() {    
    var content = $(this).text()
    var imageURL = "CSS/Images/pkm/"
    if(content == "???"){
        content = "who"
        app.$imgpokemon.css("background", "url('"+imageURL+content+".png') no-repeat bottom center")
        app.$imgpokemon.css("background-size", "contain")
    }
    else{
        app.$imgpokemon.css("background", "url('"+imageURL+content+".png') no-repeat bottom center")
    }
});


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

    app.$fuite.submit(function( event ){
        event.preventDefault();
        app.$combat.css("display","none");
        app.$switch.css("display","none")
        app.$sacoche.css("display","none")
        app.$player.css("margin-left","-340px");
        app.$ourpkm.css("margin-left","-1000px");
        app.$otherpoke.css("margin-left","-1000px");
        app.$mypokname.text("")
        app.flagforcbt = true
    })

    app.$pokeballe.submit(function( event ){
        event.preventDefault();
        var div = document.getElementById("name")
        if(app.pokedex.indexOf(div.innerHTML) === -1){
            app.pokedex.push(div.innerHTML)
        }
        app.flagforcbt = true
        app.$combat.css("display","none");
        app.$switch.css("display","none")
        app.$sacoche.css("display","none")
        app.$player.css("margin-left","-340px");
        app.$ourpkm.css("margin-left","-1000px");
        app.$otherpoke.css("margin-left","-1000px");
        app.$mypokname.text("")
        app.getListePokedex();
        app.teamUp()
    })

    app.$sac.submit(function( event ){
        event.preventDefault();
        app.sacocheOnOff()

    })

    app.$attaque.submit(function( event ){
        event.preventDefault();
        pokarray = new Pokarray()
        var nostype = pokarray.getTypeByName(app.actualpoke)
        var sontype = pokarray.getTypeByName(app.$name.html());

    })

    app.$teampoke.submit(function( event ){
        event.preventDefault();
        app.teampokeOnOff()
        app.$sw1.text(app.pkm1)
        app.$sw2.text(app.pkm2)
        app.$sw3.text(app.pkm3)
        app.$sw4.text(app.pkm4)
        app.$sw5.text(app.pkm5)
        app.$sw6.text(app.pkm6)
    })
    app.$event.submit(function( event ){
        event.preventDefault();
        var type = app.$type.val();
        if(type != "Type"){
            var date_debut = app.$date_debut.datepicker("getDate");
            var date_fin = app.$date_fin.datepicker("getDate");
            if(date_debut <= date_fin){
                var array = [type,date_debut,date_fin]
                app.pokevent.push(array)
                var ul = document.getElementById("datevent")
                while (ul.firstChild)
                {
                    ul.removeChild(ul.firstChild);
                }
                for(var pokevents of app.pokevent){
                        app.$datevent.append("<li class='datev'>"+"Type : "+pokevents[0]+" Date : "+pokevents[1]+" / "+pokevents[2]+"</li>")
                }
            }
            else{
                console.log("MauvaiseDate")
            }
        }
    })


    window.onbeforeunload = function(){
        app.save();
    }
    window.addEventListener("scroll", function (e){
        
        window.scrollTo(0,0);
        
    }, false);