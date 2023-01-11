function countWord() {
          
  // Get the input text value
  let words = document.getElementById("word").value;

  // Initialize the word counter
  let count = 0;
 
  let split = words.split(' ');

  // Loop through the words and 
  // increase the counter when 
  // each split word is not empty
  for (let i = 0; i < split.length; i++) {
      if (split[i] != "") {
          count += 1;
      }
  }

  // Display it as output
  document.getElementById("show").innerHTML = count;
 
}

const textarea = document.getElementById('word');
textarea.value = '';

const dbtn = document.getElementById('dbtn');

dbtn.addEventListener('click', function handleClick() {
  // log value before clearing it
  // console.log(textarea.value);

  //  clear textarea value
  textarea.value = '';
  
});



const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
const sptag = new Date();
date = sptag.toLocaleDateString(undefined, options);
document.getElementById("sptag").innerHTML =  date;



     












































