class Element {
    constructor(name, buildYear) {
        this.name = name;
        this.buildYear = buildYear;
    }
}

class Park extends Element {
    constructor(name, buildYear, area, numTrees) {
        super(name, buildYear);
        this.area = area;
        this.numTrees = numTrees;
    }
    treeDensity() {
        const density = this.numTrees / this.area;
        console.log(`${this.name} has a tree density of ${density} trees per square km.`);
    }
}

class Street extends Element {
    constructor(name, buildYear, length, size = 3) {
        super(name, buildYear);
        this.length = length;
        this.size = size;
    }
    classifyStreet() {
        const classification = new Map();
        classification.set(1, 'tiny');
        classification.set(2, 'small');
        classification.set(3, 'normal');
        classification.set(4, 'big');
        classification.set(5, 'huge');
        console.log(`${this.name}, build in ${this.buildYear}, is a ${classification.get(this.size)} street.`);
    }
}

const allParks = [new Park('Green Park', 1987, 0.2, 215), new Park('National Park', 1894, 2.9, 3541), new Park('Oak Park', 1953, 0.4, 949)];
const allStreets = [new Street('Ocean Avenue', 1999, 1.1, 4), new Street('Evergreen Street', 2008, 2.7, 2), new Street('Sunset Boulevard', 1982, 2.5, 5)];

function calc (arr) {
    const sum = arr.reduce((prev, curr, index) => prev + curr, 0);
    return [sum, sum / arr.length];
}

function reportParks (p) {

    console.log('----- Parks Report -----');

    // Density
    p.forEach(element => element.treeDensity());

    // Average age
    const ages = p.map(el => new Date().getFullYear() - el.buildYear);
    const [totalAge, aveAge] = calc(ages);
    console.log(`Our ${p.length} parks have an total ${totalAge} years and average of ${aveAge} years.`);

    // Which park has more than 1000 trees
    const i = p.map(el => el.numTrees).findIndex(el => el >= 1000);
    console.log(`${p[i].name} has more than 1000 trees.`);
}

reportParks(allParks);

function reportStreets (s) {

    console.log('----- Streets Report -----');

    // Total and average length of the town's streets
    const [totalLenght, aveLenght] = calc(s.map(el => el.length));
    console.log(`Our ${s.length} streets have a total lenght of ${totalLenght} km, with an average of ${aveLenght} km.`);

    // Classify sizes
    s.forEach(el => el.classifyStreet());

}

reportStreets(allStreets);