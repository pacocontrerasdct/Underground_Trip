 /*
 underground
 lineN 
 'Time Square','34th','28th','23rd','Union Square','8th'
 lineL
 '8th','6th','Union Square','3rd','1st'
 line6
 'Grand Central','33rd','28th','23rd','Union Square','Astor Place'
 */

 underground = {
  lineN : ['Time Square','34th','28th','23rd','Union Square','8th'],
  lineL : ['8th','6th','Union Square','3rd','1st'],
  line6 : ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
 };

var namesStops;
var fromStreet;

function showLines(){
   var line = document.getElementById('lineOrigin');
   line.addEventListener("change", function(event){
     namesStops = line.value;
      showStops(namesStops);
   });
};

function showStops(namesStops){
  var lineStreets = document.getElementById(namesStops);
  if(namesStops === "default"){
    lineStreets.className = "hidden";
  }else{
    lineStreets.className = "show";
  };
};

function selectStartingPoint(){
  var street = document.getElementsByClassName('street')[1];
  fromStreet = street.id;
  console.log("es: ",fromStreet);

  
};

selectStartingPoint(fromStreet);

showLines();


