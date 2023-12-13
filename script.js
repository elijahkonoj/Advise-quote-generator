const dataset = document.querySelector('.material-symbols-outlined');
const quotes = document.getElementById('quotes')
const titleNum = document.getElementById('title-nums');

const AdviseArray = [{quote:'Never pay full price for a sofa at DFC.', number: 117},
{quote:'It is easy to sit up and take notice, whats difficult is getting up and taking actions.', number: 118},
{quote:'Make hay while the sun shines, cos time waits for no man.', number: 119}
]





dataset.addEventListener('click', function(){
  let randomAdviseArray = Math.floor(Math.random() * AdviseArray.length);
   quotes.innerHTML = AdviseArray[randomAdviseArray].quote;
   titleNum.innerHTML = AdviseArray[randomAdviseArray].number;
});


  
