function music_Artist() {
    var part_1 = "John Legend ";
    var part_2 = "and Anthony Hamilton ";
    var part_3 = "are a couple ";
    var part_4 = "my favorite ";
    var part_5 = "music artists.";
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Lyfe").innerHTML = whole_sentence;
}

function slice_Method() {
    var sentence = "I'm so torn up now, can't believe I lost you, lost my best friend, my soulmate and can't believe it's true...";
    var Section = sentence.slice(51,78);
    document.getElementById("Slice").innerHTML = Section;
}

function toUpperCase_Method() {
    var sentence = "go away!";
    var strUpper = sentence.toUpperCase();
    document.getElementById("Upper").innerHTML = strUpper;
}

function search_Method() {
    var sentence = "We've invested in a small house";
    var position = sentence.search('all');
    document.getElementById("Search").innerHTML = position;
}

function string_Method() {
    var X = 1985;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {
    var Y = 7181985.7241986
    document.getElementById("Precision").innerHTML = Y.toPrecision(9);
}

function toFixed_Method() {
    var num = 1.7181985
    document.getElementById("Fixed").innerHTML = num.toFixed(2);
}

function valueOf_Method() {
    var stringObject = new String('Anthony Hamilton')
    document.getElementById("Value").innerHTML = stringObject.valueOf();
}