
/* JSnack 1: */
const bike = [{

    name: 'Name1',
    weight: 10

    },
    {
        name: 'Name2',
        weight: 15
    },
    {
        name: 'Name3',
        weight: 5
    },
    {
        name: 'Name4',
        weight: 20
    }
];

/* extract weight of bikes */
let arrBike = [];
for (let i = 0; i < bike.length; i++){
    arrBike.push(bike[i]['weight']);
}

/* start: function to find index of min value in array */
function findMinIndex(arr) {
    let minIndex = 0;
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < arr[minIndex]) {
        minIndex = i;
      }
    }
    return minIndex;
}
/* end: function to find index of min value in array */

/* start: create an array of different random numbers */
function randArray(min, max, dim){
    let randArr = [];
    if (dim > max){
        console.log( 'dimension of the array should be less than max. value' ); 
    } else {
        for (let i = 0; i < dim; i++){
            let randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            while (randArr.includes(randomNumber)) {
                randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
            }
            randArr.push(randomNumber);
        }
    }
    return randArr;
}
/* end: create an array of different random numbers */

let idxMinW = findMinIndex(arrBike);
const {name, weight} = bike[idxMinW];
console.log(`La bici più leggera si chiama ${name} e pesa ${weight} kg`)

/* JSnack 2: */
const teams = [{
        teamname: 'Name1',
        fouls: 0,
        points: 0
    },
    {
        teamname: 'Name2',
        fouls: 0,
        points: 0
    },
    {
        teamname: 'Name3',
        fouls: 0,
        points: 0
    },
    {
        teamname: 'Name4',
        fouls: 0,
        points: 0
    },
    {
        teamname: 'Name5',
        fouls: 0,
        points: 0
    },
    {
        teamname: 'Name6',
        fouls: 0,
        points: 0
    }
];

/* generate the points and fouls */
let minPts = 0;
let maxPts = 100;
let minFouls = 0;
let maxFouls = 30;
teams.forEach( (element) => {
    element.fouls = parseInt(randArray(minPts, maxPts, 1));
    element.points = parseInt(randArray(minFouls, maxFouls, 1));
} )
console.log(teams)

/* extract names and fouls */
let newArr = teams.map( ({teamname, fouls}) => {
    return {teamname, fouls}
})
console.log(newArr)


/* JSnack 3: */
let arr = ['alberto', 'michele','angelo','simone'];


