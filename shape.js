

const tagBtn = () => {
    // Title page
    document.getElementById('display').innerHTML = "Pahina ng mga hulma";
    document.getElementById('lead').innerHTML = "Ang labas na anyo, hugis ng isang tao o bagay at anyo gaya ng parihaba, bilog etc.";

    

    // Titles
    document.getElementById("circleTitle").innerHTML = "Bilog";
    document.getElementById("diamondTitle").innerHTML = "Diyamante";
    document.getElementById("ovalTitle").innerHTML = "Habilog";
    document.getElementById("rectangleTitle").innerHTML = "Parihaba";
    document.getElementById("squareTitle").innerHTML = "Parisukat";
    document.getElementById("starTitle").innerHTML = "Bituin";


    // Texts
    document.getElementById("circleTxt").innerHTML = "Ang hugis ng bilog ay makikita sa maraming bagay at ito ay walang sulok.";
    document.getElementById("diamondTxt").innerHTML = "Ang diyamante naman ay may apat na sulok, na bumubuo ng matulis na hugis.";
    document.getElementById("ovalTxt").innerHTML = "Ang habilog ay parang bilog ang hugis na may kahalintulad sa itlog at alphabetong `O`.";
    document.getElementById("rectangleTxt").innerHTML = "Ang parihaba ay may apat na sulok din, may haba lamang ito ng pahalang sa taas at baba.";
    document.getElementById("squareTxt").innerHTML = "Ang parisukat ay mayroong apay na sulok at iisa ang sukat.";
    document.getElementById("starTxt").innerHTML = "Ang butuin ay nangangahulugang 'magbigay liwanag sa kinabukasan.'";
};


const engBtn = () => {
    // Title page
    document.getElementById('display').innerHTML = "Shape page!";
    document.getElementById('lead').innerHTML = "The external form, contours, or outline of someone or something and a geometric figure such as a square, triangle, or rectangle.";

    // Titles
    document.getElementById("circleTitle").innerHTML = "Circle";
    document.getElementById("diamondTitle").innerHTML = "Diamond";
    document.getElementById("ovalTitle").innerHTML = "Oval";
    document.getElementById("rectangleTitle").innerHTML = "Rectangle";
    document.getElementById("squareTitle").innerHTML = "Square";
    document.getElementById("starTitle").innerHTML = "Star";

    // Texts
    document.getElementById("circleTxt").innerHTML = "A round plane figure whose boundary consists of points equidistant from a fixed point.";
    document.getElementById("diamondTxt").innerHTML = "A figure with four straight sides of equal length forming acute angles and two opposite obtuse angles.";
    document.getElementById("ovalTxt").innerHTML = "Having a rounded and slightly elongated outline or shape like that of an egg.";
    document.getElementById("rectangleTxt").innerHTML = "A plane figure with four straight sides and four right angles, in contrast to a square.";
    document.getElementById("squareTxt").innerHTML = "A plane figure with four equal straight sides and four right angles.";
    document.getElementById("starTxt").innerHTML = "The star shape also has the meaning of `to light up the future.`";



    // document.getElementById("").setAttribute('src','')
};



// Audio

const circle = () => {
    const circlee = new Audio();
    circlee.src = "./AUDIO/SHAPE/Circle_Bilog.m4a";
    circlee.play();
};

const diamond = () => {
    const diamondd = new Audio();
    diamondd.src = "./AUDIO/SHAPE/Diamond_Diamante.m4a";
    diamondd.play();
};


const oval = () => {
    const ovall = new Audio();
    ovall.src = "./AUDIO/SHAPE/Oval_Habilog.m4a";
    ovall.play();
};


const rectangle = () => {
    const rectanglee = new Audio();
    rectanglee.src = "./AUDIO/SHAPE/Rectangle_Parihaba.m4a";
    rectanglee.play();
};


const square = () => {
    const squaree = new Audio();
    squaree.src = "./AUDIO/SHAPE/Square_Parisukat.m4a";
    squaree.play();
};


const star = () => {
    const starr = new Audio();
    starr.src = "./AUDIO/SHAPE/Star_Butuin.m4a";
    starr.play();
};

