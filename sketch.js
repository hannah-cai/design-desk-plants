////quantitative variables
//var age, yearsWorked, salary, skills, satisfaction, disciplines, hoursWorked;
////yes/no variables
//var positiveValues = [];
//var worthwhileProblems, roleValued, respectCoworkers, creativelySatisfied;
//
////internal data variables
//var dataSize = 9428;
//var dataPoints = [];
//var dataPoint;
//var count = [];
//var i = 0;
//var plants = [];
//var scale;
//
////image assets
//var pot_bottom, pot_top, pot_lip, glimmer_low, glimmer_mid, glimmer, 
//    stem_0_tall, stem_0_short,
//    stem_1_1_tall, stem_1_2_tall, stem_1_3_tall, stem_1_4_tall, stem_1_5_tall,
//    stem_1_1_short, stem_1_2_short, stem_1_3_short, stem_1_4_short, stem_1_5_short,
//    stem_2_1_tall, stem_2_2_tall, stem_2_3_tall, stem_2_4_tall, stem_2_5_tall,
//    stem_2_1_short, stem_2_2_short, stem_2_3_short, stem_2_4_short, stem_2_5_short,
//    stem_3_1_tall, stem_3_2_tall, stem_3_3_tall, stem_3_4_tall, stem_3_5_tall,
//    stem_3_1_short, stem_3_2_short, stem_3_3_short, stem_3_4_short, stem_3_5_short,
//    stem_4_1_tall, stem_4_2_tall, stem_4_3_tall, stem_4_4_tall, stem_4_5_tall,
//    stem_4_1_short, stem_4_2_short, stem_4_3_short, stem_4_4_short, stem_4_5_short, 
//    stem_5_1_short, stem_5_2_short, stem_5_3_short, stem_5_4_short, stem_5_5_short, 
//    stem_5_1_tall, stem_5_2_tall, stem_5_3_tall, stem_5_4_tall, stem_5_5_tall,
//    leaf_0_1, leaf_0_2, leaf_0_3, leaf_0_4, leaf_0_5, leaf_0_6,
//    leaf_1_1, leaf_1_2, leaf_1_3, leaf_1_4, leaf_1_5, leaf_1_6,
//    leaf_2_1, leaf_2_2, leaf_2_3, leaf_2_4, leaf_2_5, leaf_2_6,
//    leaf_3_1, leaf_3_2, leaf_3_3, leaf_3_4, leaf_3_5, leaf_3_6,
//    leaf_4_1, leaf_4_2, leaf_4_3, leaf_4_4, leaf_4_5, leaf_4_6, 
//    leaf_5_1, leaf_5_2, leaf_5_3, leaf_5_4, leaf_5_5, leaf_5_6, 
//    leafpattern_1_1, leafpattern_1_2, leafpattern_1_3, leafpattern_1_4, leafpattern_1_5, leafpattern_1_6,
//    leafpattern_2_1, leafpattern_2_2, leafpattern_2_3, leafpattern_2_4, leafpattern_2_5, leafpattern_2_6,
//    leafpattern_3_1, leafpattern_3_2, leafpattern_3_3, leafpattern_3_4, leafpattern_3_5, leafpattern_3_6,
//    leafpattern_4_1, leafpattern_4_2, leafpattern_4_3, leafpattern_4_4, leafpattern_4_5, leafpattern_4_6,
//    leafpattern_5_1, leafpattern_5_2, leafpattern_5_3, leafpattern_5_4, leafpattern_5_5, leafpattern_5_6,
//    flower_animation, flower_ARVR, flower_communicationgraphic, flower_data, flower_education, 
//    flower_environmental, flower_experience, flower_game, flower_illustration, flower_interaction, flower_motion, flower_AI,
//    flower_other, flower_packaging, flower_service, flower_social, flower_UI, flower_UX, flower_strategy, flower_research,
//    bees_1, bees_2, bees_3, bees_4;
////image asset arrays
//var leaves = [leaf_0_1, leaf_0_2, leaf_0_3, leaf_0_4, leaf_0_5, leaf_0_6,
//              leaf_1_1, leaf_1_2, leaf_1_3, leaf_1_4, leaf_1_5, leaf_1_6,
//              leafpattern_1_1, leafpattern_1_2, leafpattern_1_3, leafpattern_1_4, leafpattern_1_5, leafpattern_1_6,
//              leaf_2_1, leaf_2_2, leaf_2_3, leaf_2_4, leaf_2_5, leaf_2_6,
//              leafpattern_2_1, leafpattern_2_2, leafpattern_2_3, leafpattern_2_4, leafpattern_2_5, leafpattern_2_6,
//              leaf_3_1, leaf_3_2, leaf_3_3, leaf_3_4, leaf_3_5, leaf_3_6,
//              leafpattern_3_1, leafpattern_3_2, leafpattern_3_3, leafpattern_3_4, leafpattern_3_5, leafpattern_3_6,
//              leaf_4_1, leaf_4_2, leaf_4_3, leaf_4_4, leaf_4_5, leaf_4_6,
//              leafpattern_4_1, leafpattern_4_2, leafpattern_4_3, leafpattern_4_4, leafpattern_4_5, leafpattern_4_6,
//              leaf_5_1, leaf_5_2, leaf_5_3, leaf_5_4, leaf_5_5, leaf_5_6, 
//              leafpattern_5_1, leafpattern_5_2, leafpattern_5_3, leafpattern_5_4, leafpattern_5_5, leafpattern_5_6];
//var leaves_names = ['leaf_0_1', 'leaf_0_2', 'leaf_0_3', 'leaf_0_4', 'leaf_0_5', 'leaf_0_6',
//                    'leaf_1_1', 'leaf_1_2', 'leaf_1_3', 'leaf_1_4', 'leaf_1_5', 'leaf_1_6',
//                    'leafpattern_1_1', 'leafpattern_1_2', 'leafpattern_1_3', 'leafpattern_1_4', 'leafpattern_1_5', 'leafpattern_1_6',
//                    'leaf_2_1', 'leaf_2_2', 'leaf_2_3', 'leaf_2_4', 'leaf_2_5', 'leaf_2_6',
//                    'leafpattern_2_1', 'leafpattern_2_2', 'leafpattern_2_3', 'leafpattern_2_4', 'leafpattern_2_5', 'leafpattern_2_6',
//                    'leaf_3_1', 'leaf_3_2', 'leaf_3_3', 'leaf_3_4', 'leaf_3_5', 'leaf_3_6',
//                    'leafpattern_3_1', 'leafpattern_3_2', 'leafpattern_3_3', 'leafpattern_3_4', 'leafpattern_3_5', 'leafpattern_3_6',
//                    'leaf_4_1', 'leaf_4_2', 'leaf_4_3', 'leaf_4_4', 'leaf_4_5', 'leaf_4_6',
//                    'leafpattern_4_1', 'leafpattern_4_2', 'leafpattern_4_3', 'leafpattern_4_4', 'leafpattern_4_5', 'leafpattern_4_6',
//                    'leaf_5_1', 'leaf_5_2', 'leaf_5_3', 'leaf_5_4', 'leaf_5_5', 'leaf_5_6', 
//                    'leafpattern_5_1', 'leafpattern_5_2', 'leafpattern_5_3', 'leafpattern_5_4', 'leafpattern_5_5', 'leafpattern_5_6'];
//var stems = [stem_0_short, stem_0_tall, 
//             stem_1_1_short, stem_1_2_short, stem_1_3_short, stem_1_4_short, stem_1_5_short, 
//             stem_1_1_tall, stem_1_2_tall, stem_1_3_tall, stem_1_4_tall, stem_1_5_tall,
//             stem_2_1_short, stem_2_2_short, stem_2_3_short, stem_2_4_short, stem_2_5_short, 
//             stem_2_1_tall, stem_2_2_tall, stem_2_3_tall, stem_2_4_tall, stem_2_5_tall,
//             stem_3_1_short, stem_3_2_short, stem_3_3_short, stem_3_4_short, stem_3_5_short, 
//             stem_3_1_tall, stem_3_2_tall, stem_3_3_tall, stem_3_4_tall, stem_3_5_tall,
//             stem_4_1_short, stem_4_2_short, stem_4_3_short, stem_4_4_short, stem_4_5_short, 
//             stem_4_1_tall, stem_4_2_tall, stem_4_3_tall, stem_4_4_tall, stem_4_5_tall,
//             stem_5_1_short, stem_5_2_short, stem_5_3_short, stem_5_4_short, stem_5_5_short, 
//             stem_5_1_tall, stem_5_2_tall, stem_5_3_tall, stem_5_4_tall, stem_5_5_tall];
//var stems_names = ['stem_0_short', 'stem_0_tall', 
//                   'stem_1_1_short', 'stem_1_2_short', 'stem_1_3_short', 'stem_1_4_short', 'stem_1_5_short', 
//                   'stem_1_1_tall', 'stem_1_2_tall', 'stem_1_3_tall', 'stem_1_4_tall', 'stem_1_5_tall',
//                   'stem_2_1_short', 'stem_2_2_short', 'stem_2_3_short', 'stem_2_4_short', 'stem_2_5_short', 
//                   'stem_2_1_tall', 'stem_2_2_tall', 'stem_2_3_tall', 'stem_2_4_tall', 'stem_2_5_tall',
//                   'stem_3_1_short', 'stem_3_2_short', 'stem_3_3_short', 'stem_3_4_short', 'stem_3_5_short', 
//                   'stem_3_1_tall', 'stem_3_2_tall', 'stem_3_3_tall', 'stem_3_4_tall', 'stem_3_5_tall',
//                   'stem_4_1_short', 'stem_4_2_short', 'stem_4_3_short', 'stem_4_4_short', 'stem_4_5_short', 
//                   'stem_4_1_tall', 'stem_4_2_tall', 'stem_4_3_tall', 'stem_4_4_tall', 'stem_4_5_tall',
//                   'stem_4_1_short', 'stem_4_2_short', 'stem_4_3_short', 'stem_4_4_short', 'stem_4_5_short', 
//                   'stem_4_1_tall', 'stem_4_2_tall', 'stem_4_3_tall', 'stem_4_4_tall', 'stem_4_5_tall'];
//
//function preload() {
//    //data
//    table = loadTable('https://raw.githubusercontent.com/hannah-cai/design-desk-plants/master/data.csv', 'csv', 'header');
//
//    //image assets
//    pot_bottom = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/pot_bottom.png');
//    pot_top = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/pot_top.png');
//    pot_lip = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/pot_lip.png');
//    glimmer_low = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/glimmer_low.png');
//    glimmer_mid = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/glimmer_mid.png');
//    glimmer = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/glimmer.png');
//    for (i = 0; i < stems.length; i++) {
//        stems[i] = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/' + stems_names[i] + '.png');
//    }
//    for (i = 0; i < leaves.length; i++) {
//        leaves[i] = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/' + leaves_names[i] + '.png');
//    }
//    flower_animation = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_animation.png');
//    flower_ARVR = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_ARVR.png');
//    flower_communicationgraphic = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_communicationgraphic.png');
//    flower_data = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_data.png');
//    flower_education = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_education.png');
//    flower_environmental = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_environmental.png');  
//    flower_experience = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_experience.png');
//    flower_game = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_game.png');
//    flower_illustration = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_illustration.png');  
//    flower_interaction = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_interaction.png');
//    flower_motion = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_motion.png');
//    flower_other = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_other.png');  
//    flower_packaging = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_packaging.png');
//    flower_service = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_service.png');
//    flower_social = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_social.png');  
//    flower_UI = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_UI.png');
//    flower_UX = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_UX.png');
//    flower_strategy = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_strategy.png');
//    flower_research = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_research.png');
//    flower_AI = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/flower_AI.png');
//    bees_1 = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/bees_1.png');
//    bees_2 = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/bees_2.png');
//    bees_3 = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/bees_3.png');
//    bees_4 = loadImage('https://hannah-cai.github.io/design-desk-plants/assets/bees_4.png');
//}
//
//var columns;
//var rows; 
//
//function setup() {
//    createCanvas(windowWidth, windowHeight);
//    dataPoints = table.getRows();
//
//    imageMode(CENTER);
//    scale = 0.45;
//    columns = 5;
//    rows = 5; 
//
//    for (i = 0; i < rows * columns; i++) {
//        append(plants, floor(random(1, dataSize)));
//    }
//    print(plants);
//}
//
//var movement = 1;
//
//function draw() {
//    background(236,229,216);
//
//    for (x = 1; x <= columns; x++) {
//        count[x - 1] = x;
//        for (y = 1; y < rows; y++) {
//            count[x] = rows * y + (x - columns);
//            print(count[x]);
//            dataPoint = dataPoints[plants[count[x] - 1]].arr;
//
//            age = dataPoint[0];
//            yearsWorked = dataPoint[1];
//            salary = dataPoint[2];
//            positiveValues = dataPoint[3];
//            skills = dataPoint[4];
//            satisfaction = dataPoint[5];
//            disciplines = dataPoint[6];
//            hoursWorked = dataPoint[7];
//
//            positiveValues = split(positiveValues, '|');
//            skills = split(skills, '|');
//            disciplines = split(disciplines, '|');
//
//            //reset yes/no variables
//            worthwhileProblems = false;
//            roleValued = false;
//            respectCoworkers = false;
//            creativelySatisfied = false;
//
//            if (positiveValues.includes("I'm solving worthwhile problems")) {
//                worthwhileProblems = true;
//            } 
//            if (positiveValues.includes("I feel creatively satisfied")) {
//                creativelySatisfied = true;
//            }
//            if (positiveValues.includes("My role is valued")) {
//                roleValued = true;
//            } 
//            if (positiveValues.includes("I respect the people I work with")) {
//                respectCoworkers  = true;
//            }
//
//            var offset = map(1.5, 1, columns, 0, width) + y;
//
//            noStroke();
////            ellipse(mouseX, mouseY, 10);
//            // var perspective_shift = map(mouseY, 0, height, 100, 500);
//
//            drawPlant(map(x, 1, columns, - offset, width - offset) + movement * y, 
//                map(y, 1, rows, (950/8) * scale, height + 550 * scale), scale, age, 
//                yearsWorked, salary, worthwhileProblems, 
//                skills, satisfaction, creativelySatisfied, roleValued, 
//                disciplines, respectCoworkers, hoursWorked);
//        }
//    }
//
//    movement += .5;
//}
//
//function drawPlant(x, y, scale, age, yearsWorked, salary, worthwhileProblems, 
//                    skills, satisfaction, creativelySatisfied, roleValued, 
//                    disciplines, respectCoworkers, hoursWorked) {
//
//    //pot
//    var pot_height;
//    var pot_width;
//    var pot_pos;
//    //height
//    if (age <= 20) {
//        pot_height = 250 * scale;
//    } else if (age >= 21 && age <= 30) {
//        pot_height = map(2, 1, 6, 250 * scale, 400 * scale);
//    } else if (age >= 31 && age <= 40) {
//        pot_height = map(3, 1, 6, 250 * scale, 400 * scale);
//    } else if (age >= 41 && age <= 50) {
//        pot_height = map(4, 1, 6, 250 * scale, 400 * scale);
//    } else if (age >= 51 && age <= 60) {
//        pot_height = map(5, 1, 6, 250 * scale, 400 * scale);
//    } else if (age >= 61) {
//        pot_height = 400 * scale;
//    }
//    pot_pos = (y - pot_height/2);
//
//    //width
//    if (yearsWorked == 'Less than 1 year') {
//        pot_width = 250 * scale;
//    } else if (yearsWorked == '1 - 4 years') {
//        pot_width = map(2, 1, 6, 250 * scale, 400 * scale);
//    } else if (yearsWorked == '5 - 9 years') {
//        pot_width = map(3, 1, 6, 250 * scale, 400 * scale);
//    } else if (yearsWorked == '10 - 14 years') {
//        pot_width = map(4, 1, 6, 250 * scale, 400 * scale);
//    } else if (yearsWorked == '15 - 20 years') {
//        pot_width = map(5, 1, 6, 250 * scale, 400 * scale);
//    } else if (yearsWorked == '20+ years') {
//        pot_width = 400 * scale;
//    }
//    image(pot_bottom, x, pot_pos, pot_width, pot_height);
//
//    //speckle opacity
//    glimmer_low.mask(pot_bottom);
//    glimmer_mid.mask(pot_bottom);
//    glimmer.mask(pot_bottom);
//    if (salary == "Less than $25,000") {
//        //no speckle
//    } else if (salary == "$25,000 to $34,999" || salary == "$35,000 to $49,999") {
//        //low speckle
//        image(glimmer_low, x, pot_pos, pot_width, pot_height);
//    } else if (salary == "$50,000 to $74,999" || salary == "$75,000 to $99,999") {
//        //medium speckle
//        image(glimmer_mid, x, pot_pos, pot_width, pot_height);
//    } else if (salary == "$100,000 to $149,999" || salary == "$150,000 to $199,999") {
//        //speckle
//        image(glimmer, x, pot_pos, pot_width, pot_height);
//    }
//    image(pot_top, x, pot_pos, pot_width, pot_height);
//
//    //stem height
//    var stem_pos = y - pot_height - 185 * scale;
//    var stem_height;
//    var stem_draw;
//    if (worthwhileProblems) {
//        stem_draw = stems[1];
//        stem_height = 'tall';
//    } else {
//        stem_draw = stems[0];
//        stem_height = 'short';
//    }
//
//    //leaves (number)
//    var leaf_pos = y - pot_height - 30 * scale;
//    var leaf_draw;
//    var leaf_number = skills.length;
//    leaf_draw = leaves[leaf_number - 1];
//
//    //green saturation
//    var saturation;
//    if (satisfaction == "Ready to call it quits") {
//        saturation = 1;
//    } else if (satisfaction == "Not really satisfied, but I deal") {
//        saturation = 2;
//    } else if (satisfaction == "Happy, but there's room for improvement") {
//        saturation = 3;
//    } else if (satisfaction == "Extremely satisfied with my work situation") {
//        saturation = 4;
//    } else if (satisfaction == "Not sure") {
//        saturation = 5;
//    }
//    leaf_draw = leaves[6 + (saturation - 1)*12 + leaf_number - 1];
//    stem_draw = stems[2 + (saturation - 1)*10];
//    if (worthwhileProblems) {
//        stem_draw = stems[2 + (saturation - 1)*10 + 5 - 1];
//    }
//
//    //pattern
//    if (creativelySatisfied) {
//        leaf_draw = leaves[6 + (saturation - 1)*12 + 6 + leaf_number - 1];
//    }
//
//    //leaf size
//    var leaf_height, leaf_width;
//    if (roleValued) {
//        leaf_height = 400 * scale;
//        leaf_width = 210 * scale;
//    } else {
//        leaf_height = 320 * scale;
//        leaf_width = 170 * scale;
//    }
//
//    //flowers
//    var flower_1_pos = createVector(1000, 1000);
//    var flower_2_pos = createVector(1000, 1000);
//    var flower_3_pos = createVector(1000, 1000);
//    var flower_4_pos = createVector(1000, 1000);
//    var flower_5_pos = createVector(1000, 1000);
//    var flower_draw1, flower_draw2, flower_draw3, flower_draw4, flower_draw5;
//    var flowers = [flower_draw1, flower_draw2, flower_draw3, flower_draw4, flower_draw5];
//    for (i = 0; i <= disciplines.length; i++) {
//        if (disciplines[i] == 'Animation') {
//            flowers[i] = flower_animation;
//        } else if (disciplines[i] == 'AR / VR design') {
//            flowers[i] = flower_ARVR;
//        } else if (disciplines[i] == 'Communication / Graphic design') {
//            flowers[i] = flower_communicationgraphic;
//        } else if (disciplines[i] == 'Data science') {
//            flowers[i] = flower_data;
//        } else if (disciplines[i] == 'Education') {
//            flowers[i] = flower_education;
//        } else if (disciplines[i] == 'Experience design') {
//            flowers[i] = flower_experience;
//        } else if (disciplines[i] == 'Game design') {
//            flowers[i] = flower_game;
//        } else if (disciplines[i] == 'Illustration') {
//            flowers[i] = flower_illustration;
//        } else if (disciplines[i] == 'Interaction design') {
//            flowers[i] = flower_interaction;
//        } else if (disciplines[i] == 'Motion graphics') {
//            flowers[i] = flower_motion;
//        } else if (disciplines[i] == 'Strategy') {
//            flowers[i] = flower_strategy;
//        } else if (disciplines[i] == 'Packaging design') {
//            flowers[i] = flower_packaging;
//        } else if (disciplines[i] == 'Service design') {
//            flowers[i] = flower_service;
//        } else if (disciplines[i] == 'Social impact design') {
//            flowers[i] = flower_social;
//        } else if (disciplines[i] == 'UI design') {
//            flowers[i] = flower_UI;
//        } else if (disciplines[i] == 'Environmental design') {
//            flowers[i] = flower_environmental;
//        } else if (disciplines[i] == 'UX design') {
//            flowers[i] = flower_UX;
//        } else if (disciplines[i] == 'AI design') {
//            flowers[i] = flower_AI;
//        } else if (disciplines[i] == 'Research') {
//            flowers[i] = flower_research;
//        } else {
//            flowers[i] = flower_other;
//        }
//    }
//    if (disciplines.length == 1 && stem_height == 'short') {
//        flower_1_pos = createVector(x, stem_pos - 45 * scale);
//    } else if (disciplines.length == 1 && stem_height == 'tall') {
//        flower_1_pos = createVector(x, stem_pos - 155 * scale);
//    }    
//    if (disciplines.length == 2 && stem_height == 'short') {
//        flower_1_pos = createVector(x - 90 * scale, stem_pos - 45 * scale);
//        flower_2_pos = createVector(x + 90 * scale, stem_pos - 45 * scale);
//    } else if (disciplines.length == 2 && stem_height == 'tall') {
//        flower_1_pos = createVector(x - 90 * scale, stem_pos - 155 * scale);
//        flower_2_pos = createVector(x + 90 * scale, stem_pos - 155 * scale);
//    }
//    if (disciplines.length == 3 && stem_height == 'short') {
//        flower_1_pos = createVector(x - 90 * scale, stem_pos - 45 * scale);
//        flower_2_pos = createVector(x, stem_pos - 45 * scale);
//        flower_3_pos = createVector(x + 90 * scale, stem_pos - 45 * scale);
//    } else if (disciplines.length == 3 && stem_height == 'tall') {
//        flower_1_pos = createVector(x - 90 * scale, stem_pos - 155 * scale);
//        flower_2_pos = createVector(x, stem_pos - 155 * scale);
//        flower_3_pos = createVector(x + 90 * scale, stem_pos - 155 * scale);
//    }
//    if (disciplines.length == 4 && stem_height == 'short') {
//        flower_1_pos = createVector(x - 80 * scale, stem_pos - 45 * scale);
//        flower_2_pos = createVector(x, stem_pos - 120 * scale);
//        flower_3_pos = createVector(x + 80 * scale, stem_pos - 45 * scale);
//        flower_4_pos = createVector(x, stem_pos + 45 * scale);
//    } else if (disciplines.length == 4 && stem_height == 'tall') {
//        flower_1_pos = createVector(x - 80 * scale, stem_pos - 160 * scale);
//        flower_2_pos = createVector(x, stem_pos - 240 * scale);
//        flower_3_pos = createVector(x + 80 * scale, stem_pos - 160 * scale);
//        flower_4_pos = createVector(x, stem_pos - 77 * scale);
//    }
//    if (disciplines.length == 5 && stem_height == 'short') {
//        flower_1_pos = createVector(x - 75 * scale, stem_pos - 70 * scale);
//        flower_2_pos = createVector(x, stem_pos - 120 * scale);
//        flower_3_pos = createVector(x + 75 * scale, stem_pos - 70 * scale);
//        flower_4_pos = createVector(x + 45 * scale, stem_pos + 20 * scale);
//        flower_5_pos = createVector(x - 45 * scale, stem_pos + 20 * scale);
//    } else if (disciplines.length == 5 && stem_height == 'tall') {
//        flower_1_pos = createVector(x - 75 * scale, stem_pos - 185 * scale);
//        flower_2_pos = createVector(x, stem_pos - 240 * scale);
//        flower_3_pos = createVector(x + 75 * scale, stem_pos - 185 * scale);
//        flower_4_pos = createVector(x + 45 * scale, stem_pos + (20 - 115) * scale);
//        flower_5_pos = createVector(x - 45 * scale, stem_pos + (20 - 115) * scale);
//    }
//    stem_draw = stems[2 + (saturation - 1)*10 + disciplines.length - 1];
//    if (worthwhileProblems) {
//        stem_draw = stems[2 + (saturation - 1)*10 + 5 + disciplines.length - 1];
//    }
//
//    //flower size
//    var flower_size;
//    if (respectCoworkers) {
//        flower_size = 80 * scale;
//    } else {
//        flower_size = 60 * scale;
//    }
//
//    image(stem_draw, x, stem_pos, 180 * scale, 470 * scale);
//    image(pot_lip, x, pot_pos - 1, pot_width, pot_height);
//    image(leaf_draw, x, leaf_pos, leaf_height, leaf_width);
//
//    if (disciplines.length == 1) {
//        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
//    }
//    if (disciplines.length == 2) {
//        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
//        image(flowers[1], flower_2_pos.x, flower_2_pos.y, flower_size, flower_size);
//    }
//    if (disciplines.length == 3) {
//        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
//        image(flowers[1], flower_2_pos.x, flower_2_pos.y, flower_size, flower_size);
//        image(flowers[2], flower_3_pos.x, flower_3_pos.y, flower_size, flower_size);
//    }
//    if (disciplines.length == 4) {
//        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
//        image(flowers[1], flower_2_pos.x, flower_2_pos.y, flower_size, flower_size);
//        image(flowers[2], flower_3_pos.x, flower_3_pos.y, flower_size, flower_size);
//        image(flowers[3], flower_4_pos.x, flower_4_pos.y, flower_size, flower_size);
//    }
//    if (disciplines.length == 5) {
//        image(flowers[0], flower_1_pos.x, flower_1_pos.y, flower_size, flower_size);
//        image(flowers[1], flower_2_pos.x, flower_2_pos.y, flower_size, flower_size);
//        image(flowers[2], flower_3_pos.x, flower_3_pos.y, flower_size, flower_size);
//        image(flowers[3], flower_4_pos.x, flower_4_pos.y, flower_size, flower_size);
//        image(flowers[4], flower_5_pos.x, flower_5_pos.y, flower_size, flower_size);
//    }
//
//    //bees
//    var bee_pos;
//    if (disciplines.length == 1 || disciplines.length == 2 || disciplines.length == 3) {
//        bee_pos = flower_1_pos.y - 140 * scale;
//    } else {
//        bee_pos = flower_2_pos.y - 140 * scale;
//    }
//    if (hoursWorked == "Less than 40 hours") {
//        //draw no bees
//    } else if (hoursWorked == "40 hours") {
//        //draw 1 bee
//        image(bees_1, x, bee_pos, 170 * scale, 120 * scale);
//    } else if (hoursWorked == "41 - 50 hours") {
//        //draw 2 bees
//        image(bees_2, x, bee_pos, 170 * scale, 120 * scale);
//    } else if (hoursWorked == "51 - 60 hours") {
//        //draw 3 bees
//        image(bees_3, x, bee_pos, 170 * scale, 120 * scale);
//    } else if (hoursWorked == "61+ hours") {
//        //draw 4 bees
//        image(bees_4, x, bee_pos, 170 * scale, 120 * scale);
//    }
//
//}