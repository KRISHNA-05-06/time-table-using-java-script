// selecting button element

var btn = document.querySelector("#myBtn");
var userInput = document.querySelector("#user-input");
var container = document.querySelector("#container");
var body = document.querySelector("body");

var monday=["OS","CS","E&HV","DBMS","WT","SPORTS"]
var tuesday=["E&HV","DBMS","SE","WT","OS","LIBRARY"]
var wednesday=["SE","OS","CS","WT LAB"]
var thursday=["CS LAB","SOC","DBMS","CS"]
var friday=["WT","SE","DBMS","DBMS LAB"]
var saturday=["SOC LAB","CS","WT","COMPETITIVE CODING"]
var sunday=["No class! YAY! :)"];

// When hover over button change colour
function setHoverColour() {
  btn.style.background = "#DC143C";
}

// When not hovering restore to normal colour
function setNormalColour() {
  btn.style.background = "";
}

// Assigning event Listeners to the button
// btn.addEventListener("click", sayHello);
btn.addEventListener("mouseover",setHoverColour);
btn.addEventListener("mouseout",setNormalColour);
btn.addEventListener("click",printTimetable);

function printTimetable()
{
  // Monday's Timetable
  if(userInput.value == "Monday")
  {
    for(var i = 0; i< monday.length; i++) {
      // alert(monday[i]);
      // container.appendChild(document.createElement("p").innerHTML = monday[i]);
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(monday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Tuesday's Timetable
  if(userInput.value == "Tuesday")
  {
    for(var i = 0; i< tuesday.length; i++) {
      // alert(tuesday[i]);
      // container.appendChild(document.createElement("p").innerHTML = tuesday[i]);
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(tuesday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Wednesday's Timetable
  if(userInput.value == "Wednesday")
  {
    for(var i = 0; i< wednesday.length; i++) {
      // alert(tuesday[i]);
      // container.appendChild(document.createElement("p").innerHTML = wednesday[i]);
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(wednesday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Thursday's Timetable
  if(userInput.value == "Thursday")
  {
    for(var i = 0; i< thursday.length; i++) {
      // alert(thursday[i]);
      // container.appendChild(document.createElement("p").innerHTML = thursday[i]);
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(thursday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Friday's Timetable
  if(userInput.value == "Friday")
  {
    for(var i = 0; i< friday.length; i++) {
      // alert(friday[i]);
      // container.appendChild(document.createElement("p").innerHTML = friday[i]);
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(friday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Saturday's Timetable
  if(userInput.value == "Saturday")
  {
    for(var i = 0; i< saturday.length; i++) {
      // alert(saturday[i]);
      // container.appendChild(document.createElement("p").innerHTML = saturday[i]);
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(saturday[i]);
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
    }
  }

  // Sunday's printTimetable
  if(userInput.value=="Sunday")
  {
    for (var i=0; i< sunday.length;i++) {
      // alert(sunday[i]);
      // container.appendChild(document.createElement("p").innerHTML=sunday[i]);
      var paraText = document.createElement("p");
      var paraNode = document.createTextNode(sunday[i]);
      var img = document.createElement("img");
      img.src="sunday-meme.jfif"
      paraText.appendChild(paraNode);
      container.appendChild(paraText);
      paraText.style.cssText = "font-size:24px";
      body.appendChild(img);
    }
  }
}
