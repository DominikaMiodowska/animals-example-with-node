/* Global Variables */

// Create a new date instance dynamically with JS
document.getElementById('generate').addEventListener('click', performAction);

function performAction(e){
  // const newAnimal =  document.getElementById('animal').value;
  const fav =  document.getElementById('fav').value;

  getAnimal('/fakeAnimalData')
  // New Syntax!
  .then(function(data){
    // Add data
    console.log(data);
    postData('/addAnimal', {animal:data.animal, fact: data.fact, fav:fav} );
  })
  // .then(
    updateUI()
  // )
}

// Post example
const postData = async ( url = '', data = {})=>{
  // console.log(data);
    const response = await fetch(url, {
    method: 'POST', 
    credentials: 'same-origin',
    headers: {
        'Content-Type': 'application/json',
    },
   // Body data type must match "Content-Type" header        
    body: JSON.stringify(data), 
  });

    try {
      const newData = await response.json();
      console.log(newData);
      return newData;
    }catch(error) {
    console.log("error", error);
    }
}

const getAnimal = async (url) => {
  const res = await fetch(url)
  try{
    const data = await res.json();
    console.log(data);
    return data;
  } catch(error) {
    console.log("error", error);
  }
}
/* UPDATE UI */
const updateUI = async () => {
  const request = await fetch('/all')
  try{
    const allData = await request.json()
    console.log(allData);
    document.getElementById('animalName').innerHTML = allData[0].animal;
    document.getElementById('animalFact').innerHTML = allData[0].fact;
    document.getElementById('animalFav').innerHTML = allData[0].fav;
  
  }catch(error){
    console.log("error", error);
  }
}
