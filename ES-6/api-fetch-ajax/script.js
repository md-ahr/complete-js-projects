let url = 'https://jsonplaceholder.typicode.com/posts';


// Promise

// function getWeather (id) {
//     fetch(`${url}/${id}`)
//     .then(result => {
//         return result.json();
//     })
//     .then(data => {
//         console.log(data);
//     })
//     .catch(error => {
//         console.log(error);
//     });
// }

// getWeather(10);




// Async - Await

async function getWeather (id) {
    try {
        let res = await fetch(`${url}/${id}`);
        let val = await res.json();
        console.log(val);
    } catch(error) {
        alert(`Error:- ${error}`);
    }
}

getWeather(8);