

function theBeatlesPlay(musicians,instruments) {
  var phrases=[];
  for (var i=0; i<musicians.length; i++){
    phrases.push(musicians[i]+" plays "+instruments[i]);
  }
  return phrases;
}

const facts = [
  "He was the last Beatle to learn to drive",
  "He was never a vegetarian",
  "He was a choir boy and boy scout",
  "He hated the sound of his own voice"
];


function johnLennonFacts(facts){
  var strings=[];
  for (vari=0; i<facts.length; i++){
    strings.push(facts[i]+"!!!");
  }
  return strings;
}