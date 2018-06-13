function createRhombus(plines,psymbol){
  topLeft(plines, psymbol);
  topRight(plines, psymbol);
  bottomLeft(plines, psymbol);
  bottomRight(plines, psymbol);
}

function topLeft(plines, psymbol){
  var output = "";
  for (var i = 1; i <= plines; i++)
  {
    output += "<p>"; //create the lines
    
    for (var x = 1; x <= plines - i; x++) //create spaces
      //output += "-";
      output += "<span class = 'space'>" + psymbol + "</span>";
    
    for (var j = x; j <= plines; j++)
    {
      if (j%2===0)
        output += "<span class = 'even'>" + psymbol + "</span>";
      else
        output += "<span class = 'odd'>" + psymbol + "</span>";
    }
    output += "</p>"
  }
  console.log(output);

  document.getElementById("topLeft").innerHTML = output;
}

function topRight(plines, psymbol){
  var output = "";
  for (var i = 0; i <= plines; i++)
  {
    output += "<p>"; //create the lines

    for (var j = 1; j <= i; j++)
    {
      if (j%2===0)
        output += "<span class = 'even'>" + psymbol + "</span>";
      else
        output += "<span class = 'odd'>" + psymbol + "</span>";
    }
    output += "</p>"
  }
  console.log(output);

  document.getElementById("topRight").innerHTML = output;
}

// ----- BOTTOM LEFT OF DIAMOND ------------ 
function bottomLeft(plines, psymbol){
  var output = "";
  for (var i = plines; i > 0; i--)
  {
    output += "<p>"; //create the lines
    for(var x = 0; x < plines - i; x++)
      output += "<span class = 'space'>" + psymbol + "</span>";
    
    for (var j = x; j < plines; j++)
    {
      if (j%2===0)
        output += "<span class = 'even'>" + psymbol + "</span>";
      else
        output += "<span class = 'odd'>" + psymbol + "</span>";
    }
    output += "</p>"
  }
  console.log(output);

  document.getElementById("bottomLeft").innerHTML = output;
}

// ----- BOTTOM RIGHT OF DIAMOND ---------------
function bottomRight(plines, psymbol){
  var output = "";
  for (var i = plines; i > 0; i--)
  {
    output += "<p>"; //create the lines

    for (var j = 0; j < i; j++)
    {
      if (j%2===0)
        output += "<span class = 'even'>" + psymbol + "</span>";
      else
        output += "<span class = 'odd'>" + psymbol + "</span>";
    }
    output += "</p>"
  }
  console.log(output);

  document.getElementById("bottomRight").innerHTML = output;
}
