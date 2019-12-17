// takeANumber // line [] // welcome you have a ticket num //  
var start = 1;

function takeANumber(deliLine) {
  deliLine.push(start);
  return "Welcome, you have ticket number " + start++;
}

function nowServing(deliLine) {
    if (deliLine.length === 0) {
      return "There is nobody waiting to be served!";
    } else {
      return "Currently serving " + deliLine.shift() +".";
      
    }
  }   