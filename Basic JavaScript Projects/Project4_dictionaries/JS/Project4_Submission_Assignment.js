function music_Dictionary() { //named function "music_Dictionary"
    var instrument = { //created variable instrument key=instrument class value=specific instrument
        Brass1:"Trumpet",
        Brass2:"Trombone",
        Woodwind1:"Clarinet",
        Woodwind2:"Saxophone",
        Percussion1:"Snare Drum",
        Percussion2:"Bass Drum",
        String1:"Piano",
        String2:"Violin"
    }
    delete instrument.Woodwind2; //deleted key Woodwind2
    document.getElementById("Dictionary").innerHTML=instrument.Woodwind2; //will present key "Woodwind2" as undefined in browser
}