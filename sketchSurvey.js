var page = 1;

//margin variables
var marg = {
    l: 50, //left margin
    t: 50, //top margin
    x: 118,
    y: 120,
    Qx: 118,
    Qy: 120,
    Qw: 30,
    Q2x: 250,
}

//var rec = {　//next button
//    x: 150,
//    y: 630,
//    w: 90,
//    h: 35,
//}


var Q1A1;
var Q1A2;
var Q1A3;
var Q1A4;
var Q1A5;
var Q1A6;

var Q2A1;
var Q2A2;
var Q2A3;
var Q2A4;
var Q2A5;
var Q2A6;

var Q3A1;
var Q3A2;
var Q3A3;
var Q3A4;

var Q4A1;
var Q4A2;

var Q5A1;
var Q5A2;
var Q5A3;
var Q5A4;
var Q5A5;
var Q5A6;
var Q5A7;
var Q5A8;
var Q5A9;
var Q5A10;
var Q5A11;
var Q5A12;
var Q5A13;
var Q5A14;
var Q5A15;
var Q5A16;
var Q5A17;
var Q5A18;
var Q5A19;
var Q5A20;
var Q5A21;
var Q5A22;
var Q5A23;
var Q5A24;
var Q5A25;
var Q5A26;

var Q6A1;
var Q6A2;
var Q6A3;
var Q6A4;
var Q6A5;

var Q7A1;
var Q7A2;

var Q8A1;
var Q8A2;

var Q9A1;
var Q9A2;
var Q9A3;
var Q9A4;
var Q9A5;
var Q9A6;
var Q9A7;
var Q9A8;
var Q9A9;
var Q9A10;
var Q9A11;
var Q9A12;
var Q9A13;
var Q9A14;
var Q9A15;
var Q9A16;
var Q9A17;
var Q9A18;
var Q9A19;
var Q9A20;

var Q10A1;
var Q10A2;

var Q11A1;
var Q11A2;
var Q11A3;
var Q11A4;
var Q11A5;


//var plantX = 420;
//var plantY = 150;


//quantitative variables
var scale, age, yearsWorked, salary, satisfaction, hoursWorked;
var skills = [];
var disciplines = [];

// var exdisciplines;
// var exskills;
//yes/no variables
var positiveValues = [];
var worthwhileProblems, roleValued, respectCoworkers, creativelySatisfied;

//internal data variables
var sampleSize = 5;
var dataPoints = [];
var dataPoint;
var count = 0;
var i = 0;


//image assets
var pot_bottom, pot_top, pot_lip, glimmer_low, glimmer_mid, glimmer, 
    stem_0_tall, stem_0_short,
    stem_1_1_tall, stem_1_2_tall, stem_1_3_tall, stem_1_4_tall, stem_1_5_tall,
    stem_1_1_short, stem_1_2_short, stem_1_3_short, stem_1_4_short, stem_1_5_short,
    stem_2_1_tall, stem_2_2_tall, stem_2_3_tall, stem_2_4_tall, stem_2_5_tall,
    stem_2_1_short, stem_2_2_short, stem_2_3_short, stem_2_4_short, stem_2_5_short,
    stem_3_1_tall, stem_3_2_tall, stem_3_3_tall, stem_3_4_tall, stem_3_5_tall,
    stem_3_1_short, stem_3_2_short, stem_3_3_short, stem_3_4_short, stem_3_5_short,
    stem_4_1_tall, stem_4_2_tall, stem_4_3_tall, stem_4_4_tall, stem_4_5_tall,
    stem_4_1_short, stem_4_2_short, stem_4_3_short, stem_4_4_short, stem_4_5_short, 
    stem_5_1_short, stem_5_2_short, stem_5_3_short, stem_5_4_short, stem_5_5_short, 
    stem_5_1_tall, stem_5_2_tall, stem_5_3_tall, stem_5_4_tall, stem_5_5_tall,
    leaf_0_1, leaf_0_2, leaf_0_3, leaf_0_4, leaf_0_5, leaf_0_6,
    leaf_1_1, leaf_1_2, leaf_1_3, leaf_1_4, leaf_1_5, leaf_1_6,
    leaf_2_1, leaf_2_2, leaf_2_3, leaf_2_4, leaf_2_5, leaf_2_6,
    leaf_3_1, leaf_3_2, leaf_3_3, leaf_3_4, leaf_3_5, leaf_3_6,
    leaf_4_1, leaf_4_2, leaf_4_3, leaf_4_4, leaf_4_5, leaf_4_6, 
    leaf_5_1, leaf_5_2, leaf_5_3, leaf_5_4, leaf_5_5, leaf_5_6, 
    leafpattern_1_1, leafpattern_1_2, leafpattern_1_3, leafpattern_1_4, leafpattern_1_5, leafpattern_1_6,
    leafpattern_2_1, leafpattern_2_2, leafpattern_2_3, leafpattern_2_4, leafpattern_2_5, leafpattern_2_6,
    leafpattern_3_1, leafpattern_3_2, leafpattern_3_3, leafpattern_3_4, leafpattern_3_5, leafpattern_3_6,
    leafpattern_4_1, leafpattern_4_2, leafpattern_4_3, leafpattern_4_4, leafpattern_4_5, leafpattern_4_6,
    leafpattern_5_1, leafpattern_5_2, leafpattern_5_3, leafpattern_5_4, leafpattern_5_5, leafpattern_5_6,
    flower_animation, flower_ARVR, flower_communicationgraphic, flower_data, flower_education, 
    flower_environmental, flower_experience, flower_game, flower_illustration, flower_interaction, flower_motion, flower_AI,
    flower_other, flower_packaging, flower_service, flower_social, flower_UI, flower_UX, flower_strategy, flower_research,
    bees_1, bees_2, bees_3, bees_4, blank;
//image asset arrays
var leaves = [leaf_0_1, leaf_0_2, leaf_0_3, leaf_0_4, leaf_0_5, leaf_0_6,
              leaf_1_1, leaf_1_2, leaf_1_3, leaf_1_4, leaf_1_5, leaf_1_6,
              leafpattern_1_1, leafpattern_1_2, leafpattern_1_3, leafpattern_1_4, leafpattern_1_5, leafpattern_1_6,
              leaf_2_1, leaf_2_2, leaf_2_3, leaf_2_4, leaf_2_5, leaf_2_6,
              leafpattern_2_1, leafpattern_2_2, leafpattern_2_3, leafpattern_2_4, leafpattern_2_5, leafpattern_2_6,
              leaf_3_1, leaf_3_2, leaf_3_3, leaf_3_4, leaf_3_5, leaf_3_6,
              leafpattern_3_1, leafpattern_3_2, leafpattern_3_3, leafpattern_3_4, leafpattern_3_5, leafpattern_3_6,
              leaf_4_1, leaf_4_2, leaf_4_3, leaf_4_4, leaf_4_5, leaf_4_6,
              leafpattern_4_1, leafpattern_4_2, leafpattern_4_3, leafpattern_4_4, leafpattern_4_5, leafpattern_4_6,
              leaf_5_1, leaf_5_2, leaf_5_3, leaf_5_4, leaf_5_5, leaf_5_6, 
              leafpattern_5_1, leafpattern_5_2, leafpattern_5_3, leafpattern_5_4, leafpattern_5_5, leafpattern_5_6];
var leaves_names = ['leaf_0_1', 'leaf_0_2', 'leaf_0_3', 'leaf_0_4', 'leaf_0_5', 'leaf_0_6',
                    'leaf_1_1', 'leaf_1_2', 'leaf_1_3', 'leaf_1_4', 'leaf_1_5', 'leaf_1_6',
                    'leafpattern_1_1', 'leafpattern_1_2', 'leafpattern_1_3', 'leafpattern_1_4', 'leafpattern_1_5', 'leafpattern_1_6',
                    'leaf_2_1', 'leaf_2_2', 'leaf_2_3', 'leaf_2_4', 'leaf_2_5', 'leaf_2_6',
                    'leafpattern_2_1', 'leafpattern_2_2', 'leafpattern_2_3', 'leafpattern_2_4', 'leafpattern_2_5', 'leafpattern_2_6',
                    'leaf_3_1', 'leaf_3_2', 'leaf_3_3', 'leaf_3_4', 'leaf_3_5', 'leaf_3_6',
                    'leafpattern_3_1', 'leafpattern_3_2', 'leafpattern_3_3', 'leafpattern_3_4', 'leafpattern_3_5', 'leafpattern_3_6',
                    'leaf_4_1', 'leaf_4_2', 'leaf_4_3', 'leaf_4_4', 'leaf_4_5', 'leaf_4_6',
                    'leafpattern_4_1', 'leafpattern_4_2', 'leafpattern_4_3', 'leafpattern_4_4', 'leafpattern_4_5', 'leafpattern_4_6',
                    'leaf_5_1', 'leaf_5_2', 'leaf_5_3', 'leaf_5_4', 'leaf_5_5', 'leaf_5_6', 
                    'leafpattern_5_1', 'leafpattern_5_2', 'leafpattern_5_3', 'leafpattern_5_4', 'leafpattern_5_5', 'leafpattern_5_6'];
var stems = [stem_0_short, stem_0_tall, 
             stem_1_1_short, stem_1_2_short, stem_1_3_short, stem_1_4_short, stem_1_5_short, 
             stem_1_1_tall, stem_1_2_tall, stem_1_3_tall, stem_1_4_tall, stem_1_5_tall,
             stem_2_1_short, stem_2_2_short, stem_2_3_short, stem_2_4_short, stem_2_5_short, 
             stem_2_1_tall, stem_2_2_tall, stem_2_3_tall, stem_2_4_tall, stem_2_5_tall,
             stem_3_1_short, stem_3_2_short, stem_3_3_short, stem_3_4_short, stem_3_5_short, 
             stem_3_1_tall, stem_3_2_tall, stem_3_3_tall, stem_3_4_tall, stem_3_5_tall,
             stem_4_1_short, stem_4_2_short, stem_4_3_short, stem_4_4_short, stem_4_5_short, 
             stem_4_1_tall, stem_4_2_tall, stem_4_3_tall, stem_4_4_tall, stem_4_5_tall,
             stem_5_1_short, stem_5_2_short, stem_5_3_short, stem_5_4_short, stem_5_5_short, 
             stem_5_1_tall, stem_5_2_tall, stem_5_3_tall, stem_5_4_tall, stem_5_5_tall];
var stems_names = ['stem_0_short', 'stem_0_tall', 
                   'stem_1_1_short', 'stem_1_2_short', 'stem_1_3_short', 'stem_1_4_short', 'stem_1_5_short', 
                   'stem_1_1_tall', 'stem_1_2_tall', 'stem_1_3_tall', 'stem_1_4_tall', 'stem_1_5_tall',
                   'stem_2_1_short', 'stem_2_2_short', 'stem_2_3_short', 'stem_2_4_short', 'stem_2_5_short', 
                   'stem_2_1_tall', 'stem_2_2_tall', 'stem_2_3_tall', 'stem_2_4_tall', 'stem_2_5_tall',
                   'stem_3_1_short', 'stem_3_2_short', 'stem_3_3_short', 'stem_3_4_short', 'stem_3_5_short', 
                   'stem_3_1_tall', 'stem_3_2_tall', 'stem_3_3_tall', 'stem_3_4_tall', 'stem_3_5_tall',
                   'stem_4_1_short', 'stem_4_2_short', 'stem_4_3_short', 'stem_4_4_short', 'stem_4_5_short', 
                   'stem_4_1_tall', 'stem_4_2_tall', 'stem_4_3_tall', 'stem_4_4_tall', 'stem_4_5_tall',
                   'stem_4_1_short', 'stem_4_2_short', 'stem_4_3_short', 'stem_4_4_short', 'stem_4_5_short', 
                   'stem_4_1_tall', 'stem_4_2_tall', 'stem_4_3_tall', 'stem_4_4_tall', 'stem_4_5_tall'];

function preload() {
    //data
    table = loadTable('https://raw.githubusercontent.com/hannah-cai/design-desk-plants/master/data.csv', 'csv', 'header');

    //image assets
    pot_bottom = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/pot_bottom.png');
    pot_top = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/pot_top.png');
    pot_lip = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/pot_lip.png');
    glimmer_low = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/glimmer_low.png');
    glimmer_mid = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/glimmer_mid.png');
    glimmer = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/glimmer.png');
    stem_0_tall = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/stem_0_tall.png'); 
    stem_0_short = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/stem_0_short.png'); 
    for (i = 0; i < stems.length; i++) {
        stems[i] = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/' + stems_names[i] + '.png');
    }
    for (i = 0; i < leaves.length; i++) {
        leaves[i] = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/' + leaves_names[i] + '.png');
    }
    flower_animation = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_animation.png');
    flower_ARVR = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_ARVR.png');
    flower_communicationgraphic = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_communicationgraphic.png');
    flower_data = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_data.png');
    flower_education = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_education.png');
    flower_environmental = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_environmental.png');  
    flower_experience = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_experience.png');
    flower_game = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_game.png');
    flower_illustration = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_illustration.png');  
    flower_interaction = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_interaction.png');
    flower_motion = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_motion.png');
    flower_other = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_other.png');  
    flower_packaging = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_packaging.png');
    flower_service = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_service.png');
    flower_social = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_social.png');  
    flower_UI = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_UI.png');
    flower_UX = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_UX.png');
    flower_strategy = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_strategy.png');
    flower_research = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_research.png');
    flower_AI = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_AI.png');
    bees_1 = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/bees_1.png');
    bees_2 = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/bees_2.png');
    bees_3 = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/bees_3.png');
    bees_4 = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/bees_4.png');
    blank = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/blank.png');
}

var canv2;
var sketch2;
var position;

function setup() {
    canv2 = new p5(sketch2);
    sketch2 = function(p) {
    //    p.x = width;
    //    p.y = height;
    p.setup = function() {
    position = p.createCanvas(200, 200);
    p.background(0);
    position.position(1000, 500);
    position.style('position', 'fixed')

    }
    p.draw = function() {
    //PUT THINGS IN HERE//
    }
    }

    createCanvas(windowWidth, 3550);
    // dataPoints = table.getRows();

    textFont('freight-display-pro');

}

function draw() {
    background(254,246,243);
    
//    canv2.x = sketch2.width;
//    canv2.y = sketch2.height;
//    canv2.background(0);
    
    drawJuliaMess();
    
        scale = 0.65;
    
            drawPlant(width - width/3.5, height - (height*.8), scale, age, yearsWorked, salary, worthwhileProblems, skills, satisfaction, creativelySatisfied, roleValued, disciplines, respectCoworkers, hoursWorked);
    
}

var draw_stem = false;
var draw_leaf = false;
var stem_draw, leaf_draw;

function drawPlant(x, y, scale, age, yearsWorked, salary, worthwhileProblems, 
                    skills, satisfaction, creativelySatisfied, roleValued, 
                    disciplines, respectCoworkers, hoursWorked) {

    //pot
    var pot_height = 250 * scale;
    var pot_width = 250 * scale;
    var pot_pos;
    //height
    if (age <= 20) {
        pot_height = 250 * scale;
    } else if (age >= 21 && age <= 30) {
        pot_height = map(2, 1, 6, 250 * scale, 400 * scale);
    } else if (age >= 31 && age <= 40) {
        pot_height = map(3, 1, 6, 250 * scale, 400 * scale);
    } else if (age >= 41 && age <= 50) {
        pot_height = map(4, 1, 6, 250 * scale, 400 * scale);
    } else if (age >= 51 && age <= 60) {
        pot_height = map(5, 1, 6, 250 * scale, 400 * scale);
    } else if (age >= 61) {
        pot_height = 400 * scale;
    }
    pot_pos = (y - pot_height/2);

    //width
    if (yearsWorked == 'Less than 1 year') {
        pot_width = 250 * scale;
    } else if (yearsWorked == '1 - 4 years') {
        pot_width = map(2, 1, 6, 250 * scale, 400 * scale);
    } else if (yearsWorked == '5 - 9 years') {
        pot_width = map(3, 1, 6, 250 * scale, 400 * scale);
    } else if (yearsWorked == '10 - 14 years') {
        pot_width = map(4, 1, 6, 250 * scale, 400 * scale);
    } else if (yearsWorked == '15 - 20 years') {
        pot_width = map(5, 1, 6, 250 * scale, 400 * scale);
    } else if (yearsWorked == '20+ years') {
        pot_width = 400 * scale;
    }
    image(pot_bottom, x, pot_pos, pot_width, pot_height);

    //speckle opacity
    glimmer_low.mask(pot_bottom);
    glimmer_mid.mask(pot_bottom);
    glimmer.mask(pot_bottom);
    if (salary == "Less than $25,000") {
        //no speckle
    } else if (salary == "$25,000 to $34,999" || salary == "$35,000 to $49,999") {
        //low speckle
        image(glimmer_low, x, pot_pos, pot_width, pot_height);
    } else if (salary == "$50,000 to $74,999" || salary == "$75,000 to $99,999") {
        //medium speckle
        image(glimmer_mid, x, pot_pos, pot_width, pot_height);
    } else if (salary == "$100,000 to $149,999" || salary == "$150,000 to $199,999") {
        //speckle
        image(glimmer, x, pot_pos, pot_width, pot_height);
    }
    image(pot_top, x, pot_pos, pot_width, pot_height);

    //stem height
    var stem_pos = y - pot_height - 185 * scale;
    var stem_height = 'short';
    stem_draw = blank;
    if (draw_stem) {
        if (worthwhileProblems) {
            stem_draw = stem_0_tall;
            stem_height = 'tall';
        } else {
            stem_draw = stem_0_short;
            stem_height = 'short';
        }
    }

    // leaves (number)
    var leaf_pos = y - pot_height - 30 * scale;
    leaf_draw = blank;
    var leaf_number = 1;
    // if (skills.length >= 1) {
    //     draw_leaf = true;
    // }
    print(skills);
    if (skills.length > 0) {
        leaf_number = skills.length;
        leaf_draw = leaves[leaf_number - 1];
        // leaf_draw = leaves[0];
    } else {
        leaf_number = 1;
        leaf_draw = blank;
    }

    //green saturation
    var saturation = 0;
    if (satisfaction == "Ready to call it quits") {
        saturation = 1;
        if (draw_stem) {
        stem_draw = stems[2 + (saturation - 1)*10];
        if (worthwhileProblems) {
            stem_draw = stems[2 + (saturation - 1)*10 + 5];
        }
    }
    } else if (satisfaction == "Not really satisfied, but I deal") {
        saturation = 2;
        if (draw_stem) {
        stem_draw = stems[2 + (saturation - 1)*10];
        if (worthwhileProblems) {
            stem_draw = stems[2 + (saturation - 1)*10 + 5];
        }
    }
    } else if (satisfaction == "Happy, but there's room for improvement") {
        saturation = 3;
        if (draw_stem) {
        stem_draw = stems[2 + (saturation - 1)*10];
        if (worthwhileProblems) {
            stem_draw = stems[2 + (saturation - 1)*10 + 5];
        }
    }
    } else if (satisfaction == "Extremely satisfied with my work situation") {
        saturation = 4;
        if (draw_stem) {
        stem_draw = stems[2 + (saturation - 1)*10];
        if (worthwhileProblems) {
            stem_draw = stems[2 + (saturation - 1)*10 + 5];
        }
    }
    } else if (satisfaction == "Not sure") {
        saturation = 5;
        if (draw_stem) {
        stem_draw = stems[2 + (saturation - 1)*10];
        if (worthwhileProblems) {
            stem_draw = stems[2 + (saturation - 1)*10 + 5];
        }
    }
    }
    image(pot_lip, x, pot_pos - 1, pot_width, pot_height);
    if (draw_leaf && saturation > 0) {
        leaf_draw = leaves[6 + (saturation - 1)*12 + leaf_number - 1];
    }

    //pattern
    if (creativelySatisfied) {
        leaf_draw = leaves[6 + (saturation - 1)*12 + 6 + leaf_number - 1];
    }

    //leaf size
    var leaf_height, leaf_width;
    if (roleValued) {
        leaf_height = 400 * scale;
        leaf_width = 210 * scale;
    } else {
        leaf_height = 320 * scale;
        leaf_width = 170 * scale;
    }

    //flowers
    var flower_1_pos = createVector(1000, 1000);
    var flower_2_pos = createVector(1000, 1000);
    var flower_3_pos = createVector(1000, 1000);
    var flower_4_pos = createVector(1000, 1000);
    var flower_5_pos = createVector(1000, 1000);
    var flower_draw1, flower_draw2, flower_draw3, flower_draw4, flower_draw5;
    var flowers = [flower_draw1, flower_draw2, flower_draw3, flower_draw4, flower_draw5];
    for (i = 0; i <= disciplines.length; i++) {
        if (disciplines[i] == 'Animation') {
            flowers[i] = flower_animation;
        } else if (disciplines[i] == 'AR / VR design') {
            flowers[i] = flower_ARVR;
        } else if (disciplines[i] == 'Communication / Graphic design') {
            flowers[i] = flower_communicationgraphic;
        } else if (disciplines[i] == 'Data science') {
            flowers[i] = flower_data;
        } else if (disciplines[i] == 'Education') {
            flowers[i] = flower_education;
        } else if (disciplines[i] == 'Experience design') {
            flowers[i] = flower_experience;
        } else if (disciplines[i] == 'Game design') {
            flowers[i] = flower_game;
        } else if (disciplines[i] == 'Illustration') {
            flowers[i] = flower_illustration;
        } else if (disciplines[i] == 'Interaction design') {
            flowers[i] = flower_interaction;
        } else if (disciplines[i] == 'Motion graphics') {
            flowers[i] = flower_motion;
        } else if (disciplines[i] == 'Strategy') {
            flowers[i] = flower_strategy;
        } else if (disciplines[i] == 'Packaging design') {
            flowers[i] = flower_packaging;
        } else if (disciplines[i] == 'Service design') {
            flowers[i] = flower_service;
        } else if (disciplines[i] == 'Social impact design') {
            flowers[i] = flower_social;
        } else if (disciplines[i] == 'UI design') {
            flowers[i] = flower_UI;
        } else if (disciplines[i] == 'Environmental design') {
            flowers[i] = flower_environmental;
        } else if (disciplines[i] == 'UX design') {
            flowers[i] = flower_UX;
        } else if (disciplines[i] == 'AI design') {
            flowers[i] = flower_AI;
        } else if (disciplines[i] == 'Research') {
            flowers[i] = flower_research;
        } else if (disciplines[i] == 'Other') {
            flowers[i] = flower_other;
        }
    }
    if (disciplines.length == 1 && stem_height == 'short') {
        flower_1_pos = createVector(x, stem_pos - 45 * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + disciplines.length - 1];
    } else if (disciplines.length == 1 && stem_height == 'tall') {
        flower_1_pos = createVector(x, stem_pos - 155 * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + 5 + disciplines.length - 1];
    }    
    if (disciplines.length == 2 && stem_height == 'short') {
        flower_1_pos = createVector(x - 90 * scale, stem_pos - 45 * scale);
        flower_2_pos = createVector(x + 90 * scale, stem_pos - 45 * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + disciplines.length - 1];
    } else if (disciplines.length == 2 && stem_height == 'tall') {
        flower_1_pos = createVector(x - 90 * scale, stem_pos - 155 * scale);
        flower_2_pos = createVector(x + 90 * scale, stem_pos - 155 * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + 5 + disciplines.length - 1];
    }
    if (disciplines.length == 3 && stem_height == 'short') {
        flower_1_pos = createVector(x - 90 * scale, stem_pos - 45 * scale);
        flower_2_pos = createVector(x, stem_pos - 45 * scale);
        flower_3_pos = createVector(x + 90 * scale, stem_pos - 45 * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + disciplines.length - 1];
    } else if (disciplines.length == 3 && stem_height == 'tall') {
        flower_1_pos = createVector(x - 90 * scale, stem_pos - 155 * scale);
        flower_2_pos = createVector(x, stem_pos - 155 * scale);
        flower_3_pos = createVector(x + 90 * scale, stem_pos - 155 * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + 5 + disciplines.length - 1];
    }
    if (disciplines.length == 4 && stem_height == 'short') {
        flower_1_pos = createVector(x - 80 * scale, stem_pos - 45 * scale);
        flower_2_pos = createVector(x, stem_pos - 120 * scale);
        flower_3_pos = createVector(x + 80 * scale, stem_pos - 45 * scale);
        flower_4_pos = createVector(x, stem_pos + 45 * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + disciplines.length - 1];
    } else if (disciplines.length == 4 && stem_height == 'tall') {
        flower_1_pos = createVector(x - 80 * scale, stem_pos - 160 * scale);
        flower_2_pos = createVector(x, stem_pos - 240 * scale);
        flower_3_pos = createVector(x + 80 * scale, stem_pos - 160 * scale);
        flower_4_pos = createVector(x, stem_pos - 77 * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + 5 + disciplines.length - 1];
    }
    if (disciplines.length == 5 && stem_height == 'short') {
        flower_1_pos = createVector(x - 75 * scale, stem_pos - 70 * scale);
        flower_2_pos = createVector(x, stem_pos - 120 * scale);
        flower_3_pos = createVector(x + 75 * scale, stem_pos - 70 * scale);
        flower_4_pos = createVector(x + 45 * scale, stem_pos + 20 * scale);
        flower_5_pos = createVector(x - 45 * scale, stem_pos + 20 * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + disciplines.length - 1];
    } else if (disciplines.length == 5 && stem_height == 'tall') {
        flower_1_pos = createVector(x - 75 * scale, stem_pos - 185 * scale);
        flower_2_pos = createVector(x, stem_pos - 240 * scale);
        flower_3_pos = createVector(x + 75 * scale, stem_pos - 185 * scale);
        flower_4_pos = createVector(x + 45 * scale, stem_pos + (20 - 115) * scale);
        flower_5_pos = createVector(x - 45 * scale, stem_pos + (20 - 115) * scale);
        stem_draw = stems[2 + (saturation - 1)*10 + 5 + disciplines.length - 1];
    }
    // if (draw_stem) {
    //     stem_draw = stems[2 + (saturation - 1)*10 + disciplines.length - 1];
    //     if (worthwhileProblems) {
    //         stem_draw = stems[2 + (saturation - 1)*10 + 5 + disciplines.length - 1];
    //     }
    // }

    //flower size
    var flower_size;
    if (respectCoworkers) {
        flower_size = 80 * scale;
    } else {
        flower_size = 60 * scale;
    }

    if (draw_stem == true) {
        image(stem_draw, x, stem_pos, 180 * scale, 470 * scale);
    }
    image(pot_lip, x, pot_pos - 1, pot_width, pot_height);
    if (draw_leaf == true) {
        image(leaf_draw, x, leaf_pos, leaf_height, leaf_width);
    }

    if (disciplines.length == 1) {
        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
    }
    if (disciplines.length == 2) {
        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
        image(flowers[1], flower_2_pos.x, flower_2_pos.y, flower_size, flower_size);
    }
    if (disciplines.length == 3) {
        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
        image(flowers[1], flower_2_pos.x, flower_2_pos.y, flower_size, flower_size);
        image(flowers[2], flower_3_pos.x, flower_3_pos.y, flower_size, flower_size);
    }
    if (disciplines.length == 4) {
        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
        image(flowers[1], flower_2_pos.x, flower_2_pos.y, flower_size, flower_size);
        image(flowers[2], flower_3_pos.x, flower_3_pos.y, flower_size, flower_size);
        image(flowers[3], flower_4_pos.x, flower_4_pos.y, flower_size, flower_size);
    }
    if (disciplines.length == 5) {
        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
        image(flowers[1], flower_2_pos.x, flower_2_pos.y, flower_size, flower_size);
        image(flowers[2], flower_3_pos.x, flower_3_pos.y, flower_size, flower_size);
        image(flowers[3], flower_4_pos.x, flower_4_pos.y, flower_size, flower_size);
        image(flowers[4], flower_5_pos.x, flower_5_pos.y, flower_size, flower_size);
    }

    //bees
    var bee_pos;
    if (disciplines.length == 1 || disciplines.length == 2 || disciplines.length == 3) {
        bee_pos = flower_1_pos.y - 140 * scale;
    } else {
        bee_pos = flower_2_pos.y - 140 * scale;
    }
    if (hoursWorked == "Less than 40 hours") {
        //draw no bees
    } else if (hoursWorked == "40 hours") {
        //draw 1 bee
        image(bees_1, x, bee_pos, 170 * scale, 120 * scale);
    } else if (hoursWorked == "41 - 50 hours") {
        //draw 2 bees
        image(bees_2, x, bee_pos, 170 * scale, 120 * scale);
    } else if (hoursWorked == "51 - 60 hours") {
        //draw 3 bees
        image(bees_3, x, bee_pos, 170 * scale, 120 * scale);
    } else if (hoursWorked == "61+ hours") {
        //draw 4 bees
        image(bees_4, x, bee_pos, 170 * scale, 120 * scale);
    }
    

}




function drawJuliaMess() {
    {
    noStroke();
    textFont('freight-macro-pro');
    textSize(21);
    textStyle(ITALIC);
    fill(60,73,63);

        drawQ1(marg.y-100 , marg.Qy);
        drawQ2(marg.y*4-100 , marg.Qy*4);
        drawQ3(marg.y*7-100 , marg.Qy*7);
        drawQ4(marg.y*9.2-100 , marg.Qy*9.2);
        drawQ5(marg.y*10.7-100 , marg.Qy*10.7);
        drawQ6(marg.y*16-100 , marg.Qy*16);
        drawQ7(marg.y*18.6-100 , marg.Qy*18.6);
        drawQ8(marg.y*20-100 , marg.Qy*20);
        drawQ9(marg.y*21.5-100 , marg.Qy*21.5);
        drawQ10(marg.y*26-100 , marg.Qy*26);
        drawQ11(marg.y*27.5-100 , marg.Qy*27.5);
}


function drawQ1(margY, margQy) {
    
    text('how old are you?', marg.x, margY);

    if (!Q1A1) {
        Q1A1 = createButton('less than 20');
        Q1A1.class('buttons');
        Q1A1.position(marg.Qx, margQy + marg.Qw);
        Q1A1.mousePressed(function() {age = 20});
    }
    if (!Q1A2) {
        Q1A2 = createButton('21 - 30');
        Q1A2.class('buttons');
        Q1A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q1A2.mousePressed(function() {age = 21});
    } 
    if (!Q1A3) {
        Q1A3 = createButton('31 - 40');
        Q1A3.class('buttons');
        Q1A3.position(marg.Qx, margQy + 4 * marg.Qw);
        Q1A3.mousePressed(function() {age = 31});
    } 
    if (!Q1A4) {
        Q1A4 = createButton('41 - 50');
        Q1A4.class('buttons');
        Q1A4.position(marg.Qx, margQy + 5.5 * marg.Qw);
        Q1A4.mousePressed(function() {age = 41});
    }
    if (!Q1A5) {
        Q1A5 = createButton('51 - 60');
        Q1A5.class('buttons');
        Q1A5.position(marg.Qx, margQy + 7 * marg.Qw);
        Q1A5.mousePressed(function() {age = 51});
    } 
    if (!Q1A6) {
        Q1A6 = createButton('61 +');
        Q1A6.class('buttons');
        Q1A6.position(marg.Qx, margQy + 8.5 * marg.Qw);
        Q1A6.mousePressed(function() {age = 61});
    } 
}

function drawQ2(margY, margQy) {
    text('how long have you worked in design?', marg.x, margY);

    if (!Q2A1) {
        Q2A1 = createButton('<1 year');
        Q2A1.class('buttons');
        Q2A1.position(marg.Qx, margQy + marg.Qw);
        Q2A1.mousePressed(function() {yearsWorked = 'Less than 1 year'});
    }
    if (!Q2A2) {
        Q2A2 = createButton('1 - 4');
        Q2A2.class('buttons');
        Q2A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q2A2.mousePressed(function() {yearsWorked = '1 - 4 years'});
    }
    if (!Q2A3) {
        Q2A3 = createButton('5 - 9');
        Q2A3.class('buttons');
        Q2A3.position(marg.Qx, margQy + 4 * marg.Qw);
        Q2A3.mousePressed(function() {yearsWorked = '5 - 9 years'});
    } 
    if (!Q2A4) {
        Q2A4 = createButton('10 - 14');
        Q2A4.class('buttons');
        Q2A4.position(marg.Qx, margQy + 5.5 * marg.Qw);
        Q2A4.mousePressed(function() {yearsWorked = '10 - 14 years'});
    } 
    if (!Q2A5) {
        Q2A5 = createButton('15 - 19');
        Q2A5.class('buttons');
        Q2A5.position(marg.Qx, margQy + 7 * marg.Qw);
        Q2A5.mousePressed(function() {yearsWorked = '15 - 20 years'});
    } 
    if (!Q2A6) {
        Q2A6 = createButton('20 +');
        Q2A6.class('buttons');
        Q2A6.position(marg.Qx, margQy + 8.5 * marg.Qw);
        Q2A6.mousePressed(function() {yearsWorked = '20+ years'});
    }  
}

function drawQ3(margY, margQy) {
    text('how much do you make per year?', marg.x, margY);

    if (!Q3A1) {
        Q3A1 = createButton('<25,000');
        Q3A1.class('buttons');
        Q3A1.position(marg.Qx, margQy + marg.Qw);
        Q3A1.mousePressed(function() {salary = "Less than $25,000"});
    }
    if (!Q3A2) {
        Q3A2 = createButton('25,000 - 49,999');
        Q3A2.class('buttons');
        Q3A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q3A2.mousePressed(function() {salary = "$25,000 to $34,999"});
    } 
    if (!Q3A3) {
        Q3A3 = createButton('50,000 - 99,999');
        Q3A3.class('buttons');
        Q3A3.position(marg.Qx, margQy + 4 * marg.Qw);
        Q3A3.mousePressed(function() {salary = "$50,000 to $74,999"});
    } 
    if (!Q3A4) {
        Q3A4 = createButton('100,000 +');
        Q3A4.class('buttons');
        Q3A4.position(marg.Qx, margQy + 5.5 * marg.Qw);
        Q3A4.mousePressed(function() {salary = "$100,000 to $149,999"});
    } 
}

function drawQ4(margY, margQy) {
    text("do you feel like you're solving worthwhile problems?", marg.x, margY);

    if (!Q4A1) {
        Q4A1 = createButton('Yes');
        Q4A1.class('buttons');
        Q4A1.position(marg.Qx, margQy + marg.Qw);
        Q4A1.mousePressed(function() {worthwhileProblems = true; draw_stem = true; stem_draw = stem_0_tall; print(draw_stem)});
    }
    if (!Q4A2) {
        Q4A2 = createButton('No');
        Q4A2.class('buttons');
        Q4A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q4A2.mousePressed(function() {worthwhileProblems = false; draw_stem = true; stem_draw = stem_0_short});
    } 
}

function drawQ5(margY, margQy) {
    text('what skills do you have? Pick up to 6', marg.x, margY);


    if (!Q5A1) {
        Q5A1 = createCheckbox('3D/Animation Software', false);
        Q5A1.class('checks');
        Q5A1.position(marg.Qx, margQy + marg.Qw);
        Q5A1.changed(function() {if (this.checked()) {
            skills.push('3D/Animation Software');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === '3D/Animation Software') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A2) {
        Q5A2 = createCheckbox('AI/Algorithm Design', false);
        Q5A2.class('checks');
        Q5A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q5A2.changed(function() {if (this.checked()) {
            skills.push('AI/Algorithm Design');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'AI/Algorithm Design') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A3) {
        Q5A3 = createCheckbox('AR/VR Design', false);
        Q5A3.class('checks');
        Q5A3.position(marg.Qx, margQy + 4 * marg.Qw);
        Q5A3.changed(function() {if (this.checked()) {
            skills.push('AR/VR Design');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'AR/VR Design') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A4) {
        Q5A4 = createCheckbox('Art Direction', false);
        Q5A4.class('checks');
        Q5A4.position(marg.Qx, margQy + 5.5 * marg.Qw);
        Q5A4.changed(function() {if (this.checked()) {
            skills.push('Art Direction');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Art Direction') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A5) {
        Q5A5 = createCheckbox('Business Development', false);
        Q5A5.class('checks');
        Q5A5.position(marg.Qx, margQy + 7 * marg.Qw);
        Q5A5.changed(function() {if (this.checked()) {
            skills.push('Business Development');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Business Development') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A6) {
        Q5A6 = createCheckbox('Business Operations', false);
        Q5A6.class('checks');
        Q5A6.position(marg.Qx, margQy + 8.5 * marg.Qw);
        Q5A6.changed(function() {if (this.checked()) {
            skills.push('Business Operations');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Business Operations') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A7) {
        Q5A7 = createCheckbox('Coding', false);
        Q5A7.class('checks');
        Q5A7.position(marg.Qx, margQy + 10 * marg.Qw);
        Q5A7.changed(function() {if (this.checked()) {
            skills.push('Coding');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Coding') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A8) {
        Q5A8 = createCheckbox('Copywriting', false);
        Q5A8.class('checks');
        Q5A8.position(marg.Qx, margQy + 11.5 * marg.Qw);
        Q5A8.changed(function() {if (this.checked()) {
            skills.push('Copywriting');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Copywriting') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A9) {
        Q5A9 = createCheckbox('Data Analysis', false);
        Q5A9.class('checks');
        Q5A9.position(marg.Qx, margQy + 13 * marg.Qw);
        Q5A9.changed(function() {if (this.checked()) {
            skills.push('Data Analysis');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Data Analysis') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A10) {
        Q5A10 = createCheckbox('Data Visualization', false);
        Q5A10.class('checks');
        Q5A10.position(marg.Qx, margQy + 14.5 * marg.Qw);
        Q5A10.changed(function() {if (this.checked()) {
            skills.push('Data Visualization');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Data Visualization') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A11) {
        Q5A11 = createCheckbox('Drawing/Painting', false);
        Q5A11.class('checks');
        Q5A11.position(marg.Qx, margQy + 16 * marg.Qw);
        Q5A11.changed(function() {if (this.checked()) {
            skills.push('Drawing/Painting');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Drawing/Painting') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A12) {
        Q5A12 = createCheckbox('Facilitation', false);
        Q5A12.class('checks');
        Q5A12.position(marg.Qx, margQy + 17.5 * marg.Qw);
        Q5A12.changed(function() {if (this.checked()) {
            skills.push('Facilitation');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Facilitation') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A13) {
        Q5A13 = createCheckbox('Film/Video', false);
        Q5A13.class('checks');
        Q5A13.position(marg.Q2x + marg.Qx, margQy + marg.Qw);
        Q5A13.changed(function() {if (this.checked()) {
            skills.push('Film/Video');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Film/Video') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A14) {
        Q5A14 = createCheckbox('Leadership', false);
        Q5A14.class('checks');
        Q5A14.position(marg.Q2x + marg.Qx, margQy + 2.5 * marg.Qw);
        Q5A14.changed(function() {if (this.checked()) {
            skills.push('Leadership');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Leadership') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A15) {
        Q5A15 = createCheckbox('Mentoring', false);
        Q5A15.class('checks');
        Q5A15.position(marg.Q2x + marg.Qx, margQy + 4 * marg.Qw);
        Q5A15.changed(function() {if (this.checked()) {
            skills.push('Mentoring');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Mentoring') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A16) {
        Q5A16 = createCheckbox('Photography', false);
        Q5A16.class('checks');
        Q5A16.position(marg.Q2x + marg.Qx, margQy + 5.5 * marg.Qw);
        Q5A16.changed(function() {if (this.checked()) {
            skills.push('Photography');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Photography') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A17) {
        Q5A17 = createCheckbox('Project Management', false);
        Q5A17.class('checks');
        Q5A17.position(marg.Q2x + marg.Qx, margQy + 7 * marg.Qw);
        Q5A17.changed(function() {if (this.checked()) {
            skills.push('Project Management');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Project Management') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A18) {
        Q5A18 = createCheckbox('Public Speaking', false);
        Q5A18.class('checks');
        Q5A18.position(marg.Q2x + marg.Qx, margQy + 8.5 * marg.Qw);
        Q5A18.changed(function() {if (this.checked()) {
            skills.push('Public Speaking');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Public Speaking') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A19) {
        Q5A19 = createCheckbox('Research', false);
        Q5A19.class('checks');
        Q5A19.position(marg.Q2x + marg.Qx, margQy + 10 * marg.Qw);
        Q5A19.changed(function() {if (this.checked()) {
            skills.push('Research');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Research') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A20) {
        Q5A20 = createCheckbox('SEO/Social Media', false);
        Q5A20.class('checks');
        Q5A20.position(marg.Q2x + marg.Qx, margQy + 11.5 * marg.Qw);
        Q5A20.changed(function() {if (this.checked()) {
            skills.push('SEO/Social Media');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'SEO/Social Media') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A21) {
        Q5A21 = createCheckbox('UI Design', false);
        Q5A21.class('checks');
        Q5A21.position(marg.Q2x + marg.Qx, margQy + 13 * marg.Qw);
        Q5A21.changed(function() {if (this.checked()) {
            skills.push('UI Design');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'UI Design') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A22) {
        Q5A22 = createCheckbox('UX Design', false);
        Q5A22.class('checks');
        Q5A22.position(marg.Q2x + marg.Qx, margQy + 14.5 * marg.Qw);
        Q5A22.changed(function() {if (this.checked()) {
            skills.push('UX Design');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'UX Design') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A23) {
        Q5A23 = createCheckbox('Writing (Published Articles)', false);
        Q5A23.class('checks');
        Q5A23.position(marg.Q2x + marg.Qx, margQy + 16 * marg.Qw);
        Q5A23.changed(function() {if (this.checked()) {
            skills.push('Writing (Published Articles)');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Writing (Published Articles)') {
                    skills.splice(i, 1);
                }}}});
    }
    if (!Q5A24) {
        Q5A24 = createCheckbox('Other', false);
        Q5A24.class('checks');
        Q5A24.position(marg.Q2x + marg.Qx, margQy + 17.5 * marg.Qw);
        Q5A24.changed(function() {if (this.checked()) {
            skills.push('Other');
            } else {
            for (var i = 0; i < skills.length; i ++) {
                if (skills[i] === 'Other') {
                    skills.splice(i, 1);
                }}}});
    }

    if (skills.length > 0) {
        draw_leaf = true;
    }
}

function drawQ6(margY, margQy) {
    text('are you satisfied in your work situation?', marg.x, margY);

    if (!Q6A1) {
        Q6A1 = createButton('Extremely satisfied with my work situation');
        Q6A1.class('buttons');
        Q6A1.position(marg.Qx, margQy + marg.Qw);
        Q6A1.mousePressed(function() {satisfaction = "Extremely satisfied with my work situation"});
    }
    if (!Q6A2) {
        Q6A2 = createButton("Happy, but there's room for improvement");
        Q6A2.class('buttons');
        Q6A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q6A2.mousePressed(function() {satisfaction = "Happy, but there's room for improvement"});
    } 
    if (!Q6A4) {
        Q6A4 = createButton('Not really satisfied, but I deal');
        Q6A4.class('buttons');
        Q6A4.position(marg.Qx, margQy + 5.5 * marg.Qw);
        Q6A4.mousePressed(function() {satisfaction = "Not really satisfied, but I deal"});
    } 
    if (!Q6A5) {
        Q6A5 = createButton('Ready to call it quits');
        Q6A5.class('buttons');
        Q6A5.position(marg.Qx, margQy + 7 * marg.Qw);
        Q6A5.mousePressed(function() {satisfaction = "Ready to call it quits"});
    } 
    if (!Q6A3) {
        Q6A3 = createButton('Not sure');
        Q6A3.class('buttons');
        Q6A3.position(marg.Qx, margQy + 4 * marg.Qw);
        Q6A3.mousePressed(function() {satisfaction = "Not sure"});
    }
}

function drawQ7(margY, margQy) {
    text("are you being creatively challenged", marg.x, margY);

    if (!Q7A1) {
        Q7A1 = createButton('Yes');
        Q7A1.class('buttons');
        Q7A1.position(marg.Qx, margQy + marg.Qw);
        Q7A1.mousePressed(function() {creativelySatisfied = true});
    }
    if (!Q7A2) {
        Q7A2 = createButton('No');
        Q7A2.class('buttons');
        Q7A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q7A2.mousePressed(function() {creativelySatisfied = false});
    } 
}

function drawQ8(margY, margQy) {
    text("does your job value you as a designer?", marg.x, margY);

    if (!Q8A1) {
        Q8A1 = createButton('Yes');
        Q8A1.class('buttons');
        Q8A1.position(marg.Qx, margQy + marg.Qw);
        Q8A1.mousePressed(function() {roleValued = true});
    }
    if (!Q8A2) {
        Q8A2 = createButton('No');
        Q8A2.class('buttons');
        Q8A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q8A2.mousePressed(function() {roleValued = false});
    } 
}

function drawQ9(margY, margQy) {
    text('what disciplines do you work in? Pick up to 5', marg.x, margY);

    if (!Q9A1) {
        Q9A1 = createCheckbox('Animation', false);
        Q9A1.class('checks');
        Q9A1.position(marg.Qx, margQy + marg.Qw);
        Q9A1.changed(function() {if (this.checked()) {
            disciplines.push('Animation');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Animation') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A2) {
        Q9A2 = createCheckbox('AR / VR design', false);
        Q9A2.class('checks');
        Q9A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q9A2.changed(function() {if (this.checked()) {
            disciplines.push('AR / VR design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'AR / VR design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A3) {
        Q9A3 = createCheckbox('Communication / Graphic design', false);
        Q9A3.class('checks');
        Q9A3.position(marg.Qx, margQy + 4 * marg.Qw);
        Q9A3.changed(function() {if (this.checked()) {
            disciplines.push('Communication / Graphic design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Communication / Graphic design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A4) {
        Q9A4 = createCheckbox('Data science', false);
        Q9A4.class('checks');
        Q9A4.position(marg.Qx, margQy + 5.5 * marg.Qw);
        Q9A4.changed(function() {if (this.checked()) {
            disciplines.push('Data science');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Data science') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A5) {
        Q9A5 = createCheckbox('Education', false);
        Q9A5.class('checks');
        Q9A5.position(marg.Qx, margQy + 7 * marg.Qw);
        Q9A5.changed(function() {if (this.checked()) {
            disciplines.push('Education');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Education') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A6) {
        Q9A6 = createCheckbox('Experience design', false);
        Q9A6.class('checks');
        Q9A6.position(marg.Qx, margQy + 8.5 * marg.Qw);
        Q9A6.changed(function() {if (this.checked()) {
            disciplines.push('Experience design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Experience design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A7) {
        Q9A7 = createCheckbox('Game design', false);
        Q9A7.class('checks');
        Q9A7.position(marg.Qx, margQy + 10 * marg.Qw);
        Q9A7.changed(function() {if (this.checked()) {
            disciplines.push('Game design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Game design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A8) {
        Q9A8 = createCheckbox('Illustration', false);
        Q9A8.class('checks');
        Q9A8.position(marg.Qx, margQy + 11.5 * marg.Qw);
        Q9A8.changed(function() {if (this.checked()) {
            disciplines.push('Illustration');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Illustration') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A9) {
        Q9A9 = createCheckbox('Interaction design', false);
        Q9A9.class('checks');
        Q9A9.position(marg.Qx, margQy + 13 * marg.Qw);
        Q9A9.changed(function() {if (this.checked()) {
            disciplines.push('Interaction design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Interaction design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A10) {
        Q9A10 = createCheckbox('Motion graphics', false);
        Q9A10.class('checks');
        Q9A10.position(marg.Qx, margQy + 14.5 * marg.Qw);
        Q9A10.changed(function() {if (this.checked()) {
            disciplines.push('Motion graphics');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Motion graphics') {
                    disciplines.splice(i, 1);
                }}}});
    }
   if (!Q9A11) {
        Q9A11 = createCheckbox('Strategy', false);
       Q9A11.class('checks');
        Q9A11.position(marg.Q2x + marg.Qx, margQy + marg.Qw);
        Q9A11.changed(function() {if (this.checked()) {
            disciplines.push('Strategy');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Strategy') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A12) {
        Q9A12 = createCheckbox('Packaging design', false);
        Q9A12.class('checks');
        Q9A12.position(marg.Q2x + marg.Qx, margQy + 2.5 * marg.Qw);
        Q9A12.changed(function() {if (this.checked()) {
            disciplines.push('Packaging design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Packaging design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A13) {
        Q9A13 = createCheckbox('Service design', false);
        Q9A13.class('checks');
        Q9A13.position(marg.Q2x + marg.Qx, margQy + 4 * marg.Qw);
        Q9A13.changed(function() {if (this.checked()) {
            disciplines.push('Service design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Service design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A14) {
        Q9A14 = createCheckbox('Social impact design', false);
        Q9A14.class('checks');
        Q9A14.position(marg.Q2x + marg.Qx, margQy + 5.5 * marg.Qw);
        Q9A14.changed(function() {if (this.checked()) {
            disciplines.push('Social impact design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Social impact design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A15) {
        Q9A15 = createCheckbox('UI design', false);
        Q9A15.class('checks');
        Q9A15.position(marg.Q2x + marg.Qx, margQy + 7 * marg.Qw);
        Q9A15.changed(function() {if (this.checked()) {
            disciplines.push('UI design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'UI design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A16) {
        Q9A16 = createCheckbox('Environmental design', false);
        Q9A16.class('checks');
        Q9A16.position(marg.Q2x + marg.Qx, margQy + 8.5 * marg.Qw);
        Q9A16.changed(function() {if (this.checked()) {
            disciplines.push('Environmental design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Environmental design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A17) {
        Q9A17 = createCheckbox('UX design', false);
        Q9A17.class('checks');
        Q9A17.position(marg.Q2x + marg.Qx, margQy + 10 * marg.Qw);
        Q9A17.changed(function() {if (this.checked()) {
            disciplines.push('UX design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'UX design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A18) {
        Q9A18 = createCheckbox('AI design', false);
        Q9A18.class('checks');
        Q9A18.position(marg.Q2x + marg.Qx, margQy + 11.5 * marg.Qw);
        Q9A18.changed(function() {if (this.checked()) {
            disciplines.push('AI design');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'AI design') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A19) {
        Q9A19 = createCheckbox('Research', false);
        Q9A19.class('checks');
        Q9A19.position(marg.Q2x + marg.Qx, margQy + 13 * marg.Qw);
        Q9A19.changed(function() {if (this.checked()) {
            disciplines.push('Research');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Research') {
                    disciplines.splice(i, 1);
                }}}});
    }
    if (!Q9A20) {
        Q9A20 = createCheckbox('Other', false);
        Q9A20.class('checks');
        Q9A20.position(marg.Q2x + marg.Qx, margQy + 14.5 * marg.Qw);
        Q9A20.changed(function() {if (this.checked()) {
            disciplines.push('Other');
            } else {
            for (var i = 0; i < disciplines.length; i ++) {
                if (disciplines[i] === 'Other') {
                    disciplines.splice(i, 1);
                }}}});
    }
}
    
function drawQ10(margY, margQy) {
    text("do you respect your coworkers?", marg.x, margY);

    if (!Q10A1) {
        Q10A1 = createButton('Yes');
        Q10A1.class('buttons');
        Q10A1.position(marg.Qx, margQy + marg.Qw);
        Q10A1.mousePressed(function() {respectCoworkers = true});
    }
    if (!Q10A2) {
        Q10A2 = createButton('No');
        Q10A2.class('buttons');
        Q10A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q10A2.mousePressed(function() {respectCoworkers = false});
    }  
}

function drawQ11(margY, margQy) {
    text('how many hours do you work every week?', marg.x, margY);

    if (!Q11A1) {
        Q11A1 = createButton('<40 hours');
        Q11A1.class('buttons');
        Q11A1.position(marg.Qx, margQy + marg.Qw);
        Q11A1.mousePressed(function() {hoursWorked = "Less than 40 hours"});
    }
    if (!Q11A2) {
        Q11A2 = createButton('40');
        Q11A2.class('buttons');
        Q11A2.position(marg.Qx, margQy + 2.5 * marg.Qw);
        Q11A2.mousePressed(function() {hoursWorked = "40 hours"});
    } 
    if (!Q11A3) {
        Q11A3 = createButton('41 - 50');
        Q11A3.class('buttons');
        Q11A3.position(marg.Qx, margQy + 4 * marg.Qw);
        Q11A3.mousePressed(function() {hoursWorked = "41 - 50 hours"});
    } 
    if (!Q11A4) {
        Q11A4 = createButton('51 - 60');
        Q11A4.class('buttons');
        Q11A4.position(marg.Qx, margQy + 5.5 * marg.Qw);
        Q11A4.mousePressed(function() {hoursWorked = "51 - 60 hours"});
    } 
    if (!Q11A5) {
        Q11A5 = createButton('60 +');
        Q11A5.class('buttons');
        Q11A5.position(marg.Qx, margQy + 7 * marg.Qw);
        Q11A5.mousePressed(function() {hoursWorked = "61+ hours"});
    } 
}


}

