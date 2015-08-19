
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

//var div_list = document.querySelectorAll('div'); // returns NodeList
//var div_array = Array.prototype.slice.call(div_list); // converts NodeList to Array
//console.log("DIV: ", div_array[7]);

function showLines(){
    event = document.getElementById('selectOriginLine');

    

    console.log("es1: " , event);

    


    event.addEventListener("change", function(event){
      // Showing stops of the line
      
    console.log("es2: ", event);
      showStops(this.value);
   });
};


function showStops(event){
  console.log("es3: ", event);
  var event = document.getElementById(event);
  console.log("es4: ", event);
  
  event.addEventListener("change", function(event){
    if(event === "hidden"){
      event.className = "hidden";
    }else{
      event.className = "show";
    };
  });
    //event.addEventListener("change", function(event){
      // Showing stops of the line
     // selectStartingPoint(event);
    //});
  
};

function selectStartingPoint(event){
  var event = event.getElementsByClassName('street');
  event = event[0]['id'];
  console.log("es: ", event);
  fromStreet = event.data;

  console.log("es: ",fromStreet);
};

//selectStartingPoint(fromStreet);

showLines();


