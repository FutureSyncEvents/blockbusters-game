var questions = {
  'A': 'Question for letter A',
  'B': 'Question for letter B',
  'C': 'Question for letter C',
  'D': 'Question for letter D',
  'E': 'Question for letter E',
  'F': 'Question for letter F',
  'G': 'Question for letter G',
  'H': 'Question for letter H',
  'I': 'Question for letter I',
  'J': 'Question for letter J',
  'K': 'Question for letter K',
  'L': 'Question for letter L',
  'M': 'Question for letter M',
  'N': 'Question for letter N',
  'O': 'Question for letter O',
  'P': 'Question for letter P',
  'Q': 'Question for letter Q',
  'R': 'Question for letter R',
  'S': 'Question for letter S',
  'T': 'Question for letter T',
  'U': 'Question for letter U',
  'V': 'Question for letter V',
  'W': 'Question for letter W',
  'X': 'Question for letter X',
  'Y': 'Question for letter Y',
  'Z': 'Question for letter Z',
};

// update by key press
document.addEventListener("keydown", event => {
  if (event.isComposing || event.keyCode >= 65 && event.keyCode <= 90) {
    var code = event.keyCode
    var letter = String.fromCharCode(code)
    document.getElementById('question').innerHTML = questions[letter];
  }
});

// update by click
document.addEventListener("click", event => {
  var letter = event.target.text
  if (letter.charCodeAt(0) >= 65 && letter.charCodeAt(0) <= 90) {
    document.getElementById('question').innerHTML = questions[letter];
  }
});
