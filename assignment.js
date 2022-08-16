// 1. convert ana to vori
function anaToVori (ana){
    const vori = ana / 16;
    return vori;
}

const voriResult = anaToVori(128);
console.log(voriResult);


// 2. panda cost calculate
function pandaCost(singara, somucha, zilapi){
    const singaraPrice = 7;
    const somuchaPrice = 10;
    const zilapiPrice = 15;
    let allSingaraPrice = singaraPrice * singara;
    let allSomuchaPrice = somuchaPrice * somucha;
    let allZilapiPrice = zilapiPrice * zilapi;
    const totalCost = allSingaraPrice + allSomuchaPrice + allZilapiPrice;
    return totalCost;
}

const totalElement = pandaCost(6, 5, 10);
console.log(totalElement);

// Picnic budget calculate for so many students.
function picnicBudget(number){
    const first100ForVisitors = 5000;
    const secondt100ForVisitors = 4000;
    const restForVisitors = 3000;
    if(number <= 100){
        const first100Spent = number * 5000;
        return first100Spent;
    } 
    else if(number <= 200){
        const first100Spent = first100ForVisitors * 100;
        const restSpent = number - 100;
        const secnd100Spent = secondt100ForVisitors * restSpent;
        const totalSecondSpent = first100Spent + secnd100Spent;
        return totalSecondSpent;
    }
    else{
        const first100Spent = first100ForVisitors * 100;
        const second100Spent = secondt100ForVisitors * 100;
        const restVisitorsSpent = number - 200;
        const totalThirdVisitorsSpent = restForVisitors * restVisitorsSpent;
        const totalRestSpent = first100Spent + second100Spent + totalThirdVisitorsSpent;
        return totalRestSpent;
    }
}

const totalVisitors = picnicBudget(210);
console.log(totalVisitors);

// Find the first odd string from an array.
const friendArray = ['Shakil', 'Robel', 'Sujan', 'Shohag', 'jahir', 'Babul', 'Lokman'];
  function oddFriend(friendArray) {
    let array = friendArray[0];
    if (friendArray.length % 2 == 1) {
      return array;
    }
  }
  const myFriend = friendArray.find(oddFriend);
  console.log(myFriend);