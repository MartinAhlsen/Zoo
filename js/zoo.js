function Animal(name, group, food, description, length, weight, found, imgSmall, imgLarge) {
    this.name = name;
    this.lifespan = this.lifespan;
    this.group = group;
    this.food = food;
    this.description = description;
    this.shortDescription = this.shortDescription;
    this.length = length;
    this.weight = weight;
    this.found = found;
    this.imgSmall = imgSmall;
    this.imgLarge = imgLarge;
}



let cassowary = new Animal(
                            "Cassowary", 
                            "20 years",
                            "Bird", 
                            "Plants matter like fruit, insects and small animals like mice amd lizards",
                            "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.   These large birds cannot fly, but their extremely powerful legs propel them at great speeds. They are strong swimmers and can move quickly on both land and water. Cassowaries are shy and they are usually hard to spot, at least in their natural rain forest habitats. They are not overly aggressive, and attacks are rare. But they can do a lot of damage if they are provoked or angered. Cassowary attacks have occasionally been deadly, including a recent one which occurred in 2019, at a private collection of caged birds in Florida.",
                            "It’s not hard to imagine that cassowaries are descended from dinosaur ancestors. The largest cassowaries can stand as high as six feet and weigh up to 160 pounds.",
                            "1.7m",
                            "44kg",
                            "Queensland"
);

                            
let echidna = new Animal(
                            "Echidna",
                            "50 years",
                            "Mammal",
                            "Insects such as ants and termites, beetle larvae and worms",
                            "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs. They are often classified as long- or sort-beaked, but don't have beaks at all, in the traditional sense; they have fleshy noses that can be either on the long side or rather short. They don't really look like true anteaters (Myrmecophaga tridactyla), either, and they are not closely related to them. They are spiny, though; their bodies are covered with hollow, barbless quills. Echidnas are monotremes, egg-laying mammals. The only other living monotreme is the platypus.",
                            "Echidnas, also called spiny anteaters, are walking contradictions. They are mammals, but they lay eggs.",
                            "76cm",
                            "10kg",
                            "Throughout Australia"
);

let frillNeckedLizard = new Animal(
                            "Frill-necked lizard",
                            "20 years",
                            "reptile",
                            "Small insects and spiders",
                            "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses. If an attacker is unintimidated by these antics, the lizard simply turns tail, mouth and frill open, and bolts, legs splaying left and right. It continues its deliberate run without stopping or looking back until it reaches the safety of a tree.",
                            "When this unique creature feels threatened, it rises on its hind legs, opens its yellow-coloured mouth, unfurls the colorful, pleated skin flap that encircles its head, and hisses.",
                            "90cm",
                            "1kg",
                            "Northern Australia"

);


let animalArray = ["cassowary"];


let generateDivs = console.log("The " + animal.name + " is in the" + animal.group + "group");

function cycleArray() {
    animalArray.forEach(animal => {
        
    });
}

function logTheAnimals(animal) {
    console.log("The " + animal.name + " is in the" + animal.group + "group");
}

cycleArray(generateDivs)