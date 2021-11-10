const tagalogBtn = document.getElementById("tagalogBtn");
const englishBtn = document.getElementById("englishBtn");


const englishButton = () => {
    // Title page
    document.getElementById('display').innerHTML = "Color page!";
    document.getElementById('lead').innerHTML = "Color means many different things to differ people and cultures. We all have our own favorite colors. People like different colors like they like different foods. Color also represents feelings, people, countries, cultures, and color symbolism.";

    

    document.getElementById("blueName").innerHTML = "Blue";
    document.getElementById("brownName").innerHTML = "Brown";
    document.getElementById("grayName").innerHTML = "Gray";
    document.getElementById("greenName").innerHTML = "Green";
    document.getElementById("orangeName").innerHTML = "Orange";
    document.getElementById("pinkName").innerHTML = "Pink";
    document.getElementById("redName").innerHTML = "Red";
    document.getElementById("violetName").innerHTML = "Violet";
    document.getElementById("yellowName").innerHTML = "Yellow";
    document.getElementById("blueDemo").innerHTML = "A color intermediate between green and violet, as of the sky or sea on a sunny day.";
    document.getElementById("brownDemo").innerHTML = "A color produced by mixing red, yellow, and blue, as of dark woord or rich soil."
    document.getElementById("grayDemo").innerHTML = "A color of intelect and of compromise. It is a diplomatic color between black and white."
    document.getElementById("greenDemo").innerHTML = "A color between blue and yellow in the spectrum; colored like grass or emeralds."
    document.getElementById("orangeDemo").innerHTML = "A yellow-reddish in color as well as color made by mixing red and yellow."
    document.getElementById("pinkDemo").innerHTML = "A color intermediate between red and white, as of coral or salmon. The best condition or degree."
    document.getElementById("redDemo").innerHTML = "A color at the end of the spectrum next to orange and opposite violet, as of blood, fire, or rubies."
    document.getElementById("violetDemo").innerHTML = "A bluish-purple color seen at the end of the spectrum opposite red."
    document.getElementById("yellowDemo").innerHTML = "A color between green and orange in the spectrum, colored like ripe lemons or egg yolks."
};


const tagalogButton = () => {
    document.getElementById('display').innerHTML = "Pahina ng kulay!";
    document.getElementById('lead').innerHTML = "Ang kulay ay maraming pwedeng itawag at mailarawan ang tao o kultura. Bawat isa sa atin ay may paboritong kulay. Ang mga tao ay may gustong iba't-ibang kulay gaya ng pag-gusto nito sa pagkain. Ang kulay ay inererepresenta ang kalooban, tao, bayan, kultura, at simbolismo.";

    // Color means many different things to differ people and cultures. We all have our own favorite colors. People like different colors like they like different foods. Color also represents feelings, people, countries, cultures, and color symbolism.

    document.getElementById("blueName").innerHTML = "Asul";
    document.getElementById("brownName").innerHTML = "Kayumanggi";
    document.getElementById("grayName").innerHTML = "Kulay-abo";
    document.getElementById("greenName").innerHTML = "Berde";
    document.getElementById("orangeName").innerHTML = "Kahel";
    document.getElementById("pinkName").innerHTML = "Kalimbahin";
    document.getElementById("redName").innerHTML = "Pula";
    document.getElementById("violetName").innerHTML = "Lila";
    document.getElementById("yellowName").innerHTML = "Dilaw";
    document.getElementById("blueDemo").innerHTML = "Ang asul ay pinagsamang kulay ng berde at lila, parang kalangitan at isla sa tag-araw.";
    document.getElementById("brownDemo").innerHTML = "Ang kayumanggi ay isang uri ng kulay na kulay buhangin at kung minsan at kulat ng balat ng puno."
    document.getElementById("grayDemo").innerHTML = "Kulay ng talino at compromiso. Ito ay nabibilang sa kulay ng itim and puti."
    document.getElementById("greenDemo").innerHTML = "Ang kulay na ito ay pinaghalong asul at dilaw, na parang halaman at esmeralda."
    document.getElementById("orangeDemo").innerHTML = "Kulay na pinag-samang dilaw at pula, at maari ring prutas kung tawagin."
    document.getElementById("pinkDemo").innerHTML = "Ang kulay na pinagsamang pula at puti na parang koral at salmon. Ito ay mabuti sa kondisyon."
    document.getElementById("redDemo").innerHTML = "Kulay na kabilang din sa bahaghari at kabaliktaran ng lila, parang dugo at apoy."
    document.getElementById("violetDemo").innerHTML = "Pinagsamang asul at lilang kulay na makikita rin sa dulo ng bahaghari. Kabaliktaran ng kulay pula."
    // A bluish-purple color seen at the end of the spectrum opposite red.
    document.getElementById("yellowDemo").innerHTML = "Ipinagsamang berde at kahel na kulay, ito ay gaya ng dilaw sa itlog."
    // A color between green and orange in the spectrum, colored like ripe lemons or egg yolks.
};


// Audio

const colorBlue = () => {
    const blue = new Audio();
    blue.src = "./AUDIO/COLOR/Blue_Asul.m4a";
    blue.play();
};

const colorBrown = () => {
    const brown = new Audio();
    brown.src = "./AUDIO/COLOR/Brown_Kayumanggi.m4a";
    brown.play();
};

const colorGray = () => {
    const gray = new Audio();
    gray.src = "./AUDIO/COLOR/Gray_Kulay-abo.m4a";
    gray.play();
};

const colorGreen = () => {
    const green = new Audio();
    green.src = "./AUDIO/COLOR/Green_Berde.m4a";
    green.play();
};

const colorOrange = () => {
    const orange = new Audio();
    orange.src = "./AUDIO/COLOR/Orange_Kahel.m4a";
    orange.play();
};

const colorPink = () => {
    const pink = new Audio();
    pink.src = "./AUDIO/COLOR/Pink_Kalimbahin.m4a";
    pink.play();
};

const colorRed = () => {
    const red = new Audio();
    red.src = "./AUDIO/COLOR/Red_Pula.m4a";
    red.play();
};

const colorViolet = () => {
    const violet = new Audio();
    violet.src = "./AUDIO/COLOR/Violet_Lila.m4a";
    violet.play();
};

const colorYellow = () => {
    const yellow = new Audio();
    yellow.src = "./AUDIO/COLOR/Yellow_Dilaw.m4a";
    yellow.play();
};
