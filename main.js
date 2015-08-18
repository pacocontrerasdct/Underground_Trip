
var underground = {
  lineN : ['Time Square','34th','28th','23rd','Union Square','8th'],
  lineL : ['8th','6th','Union Square','3rd','1st'],
  line6 : ['Grand Central','33rd','28th','23rd','Union Square','Astor Place']
 };
//var cName = elementNodeReference.className;
var namesStops;

// Getting info form drop menus (have to add .value to tha variable)
var fromLine  = 'lineOrigin';
var toLine  = 'lineDestination';

var fromStreet;
var toStreet;

function showLines(){
    event = document.getElementById(fromLine);
    event.addEventListener("change", function(event){
      // Showing stops of the line
      showStops(this.value);
   });
};


function showStops(event){
  var event = document.getElementById(event);
  if(event === "default"){
    event.className = "hidden";
  }else{
    event.className = "show";

    selectStartingPoint(event);

  };
};

function selectStartingPoint(event){
  var event = event.getElementsByClassName('street');
  event = event[0]['id'];
  console.log("es: ", event);
  fromStreet = event.dataset.dataNum;

  console.log("es: ",fromStreet);
};

//selectStartingPoint(fromStreet);

showLines();


