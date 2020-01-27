document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode === 65) { // A Key
    // do something
    // alert('The A key has been pressed'); // Just for testing
    // Insert question
    document.getElementById('question').innerHTML = 'Question for letter A';
  }

});
