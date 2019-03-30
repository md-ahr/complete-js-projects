// Example of Synchronous JS

// let other = () => {
//     console.log('Second Method');
// };
// let one = () => {
//     console.log('First method');
//     other();
//     console.log('Another calling...');
// };
// one();



// Example of Asynchronous JS

// let second = () => {
//     setTimeout(() => {
//         console.log('Second Method');
//     }, 3000);
// };
// let first = () => {
//     console.log('First method');
//     second();
//     console.log('Another calling...');
// };
// first();




// Callback Chain 

// function getRecipe () {
//     setTimeout(() => {
//         let recipeId = [101, 203, 245];
//         console.log(recipeId);
//         setTimeout(id => {
//             let recipe = {title: 'Fresh tomato pasta', publisher: 'ahr'};
//             console.log(`${id}: ${recipe.title}`);
//             setTimeout(() => {
//                 console.log(recipe);
//             }, 1000);
//         }, 1000, recipeId[1]);
//     }, 1500);
// }
// getRecipe();





// Promises

// let getIds = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve([101, 203, 245]);
//     }, 1500);
// });

// let getRecipe = recipeId => {
//     return new Promise((resolve, reject) => {
//         setTimeout(id => {
//             let recipe = {title: 'Fresh tomato pasta', publisher: 'ahr'};
//             resolve(`${id}: ${recipe.title}`);
//         }, 1000, recipeId);
//     });
// };

// let getRelated = publisher => {
//     return new Promise((resolve, reject) => {
//         setTimeout(pub => {
//             let recipe = {title: 'Italian pizza', publisher: 'ahr'};
//             resolve(`${pub}: ${recipe.title}`);
//         }, 1000, publisher);
//     });
// };

// getIds
//     .then(ids => {
//         console.log(ids);
//         return getRecipe(ids[1]);
//     })
//     .then(recipe => {
//         console.log(recipe);
//         return getRelated('Abdul Halim');
//     })
//     .then(recipe => {
//         console.log(recipe);
//     })
//     .catch(error => {
//         console.log('error');
//     });





// Async-Await

let getIds = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve([101, 203, 245]);
    }, 1500);
});

let getRecipe = recipeId => {
    return new Promise((resolve, reject) => {
        setTimeout(id => {
            let recipe = {title: 'Fresh tomato pasta', publisher: 'ahr'};
            resolve(`${id}: ${recipe.title}`);
        }, 1000, recipeId);
    });
};

let getRelated = publisher => {
    return new Promise((resolve, reject) => {
        setTimeout(pub => {
            let recipe = {title: 'Italian pizza', publisher: 'ahr'};
            resolve(`${pub}: ${recipe.title}`);
        }, 1000, publisher);
    });
};

async function getRecipeAW () {
    const ids = await getIds;
    console.log(ids);
    const recipe = await getRecipe(ids[1]);
    console.log(recipe);
    const related = await getRelated('Abdul Halim');
    console.log(related);
    return recipe;
}

getRecipeAW().then(result => {
    console.log(`${result} is the best ever.`);
});
