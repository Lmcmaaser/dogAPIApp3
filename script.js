'use strict';

function watchSubmit() {  //watches for submit event and passes input value to getDogImages
    $('form').submit(event => {
      event.preventDefault();
      const text = $("#dogs").val();
      getDogImages(text);
    });
}

function getDogImages(text) { //fetches random dog images based on user input of dog breed
    const info = `https://dog.ceo/api/breed/${text}/images/random`; 
    fetch(info)
        .then(response => response.json())
        .then(responseJson => displayResults(responseJson))
        .catch(error => alert('Something went wrong. Try again later.')); 
    console.log(responseJson);
}

function displayResults(response) { //displays dog picture and clears input for new input
  console.log(response.message);
  console.log(response.status);
  if (response.status == "error") {
      $('.results').empty();
      $('.results').append(
          `<h2>Breed not found, try a different breed!</h2>`)
    } else {
        $('.results').empty();
        $('.results').append(
            `<img class="results-img" alt="dog picture" src="${response.message}">`)
    }
  $('#dogs').val('');
};


$(function() {
  console.log('App loaded! Waiting for submit!');
  watchSubmit();
});