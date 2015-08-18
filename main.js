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

function showLines(){
   var line = document.getElementById('lineOrigin');
   line.addEventListener("click", function(event){
     var name = line.value;
   });
};

var name = showLines();

function showStops(){
  var lineStreets = document.getElementById(name);
  lineStreets.class = 'show';
};
