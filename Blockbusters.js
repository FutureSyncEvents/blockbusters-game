var questions = {
  '65': 'Question for letter A',
  '66': 'Question for letter B',
  '67': 'Question for letter C',
  '68': 'Question for letter D',
  '69': 'Question for letter E',
  '70': 'Question for letter F',
  '71': 'Question for letter G',
  '72': 'Question for letter H',
  '73': 'Question for letter I',
  '74': 'Question for letter J',
  '75': 'Question for letter K',
  '76': 'Question for letter L',
  '77': 'Question for letter M',
  '78': 'Question for letter N',
  '79': 'Question for letter O',
  '80': 'Question for letter P',
  '81': 'Question for letter Q',
  '82': 'Question for letter R',
  '83': 'Question for letter S',
  '84': 'Question for letter T',
  '85': 'Question for letter U',
  '86': 'Question for letter V',
  '87': 'Question for letter W',
  '88': 'Question for letter X',
  '89': 'Question for letter Y',
  '90': 'Question for letter Z',
};

// update by key press
document.addEventListener("keydown", event => {
  var keypress = event.keyCode
  if (event.isComposing || event.keyCode >= 65 && event.keyCode <= 90) {
    document.getElementById('question').innerHTML = questions[keypress];
  }
});

// update by click
document.addEventListener("click", event => {
  var clickpress = event.target.text.charCodeAt(0)
  document.getElementById('question').innerHTML = questions[clickpress];
});
