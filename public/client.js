//   Search
const url_fd = "https://api.nasa.gov/planetary/apod?api_key=gjxxudcPeMUWxBxbfJ7nqsY1FcJWv0Zrl6lTZWom";
/*let fetchData = { 
    method: 'POST', 
    body: '{"generalSearchInput":"raw +Brocoli"}', 
    headers: {
      'Content-Type': 'application/json'
    }
}*/
fetch(url_fd)
.then((resp) => resp.json()) // Transform the data into json
/*  .then(function(data) {
     document.getElementById("content").innerHTML += "<h1>Nasa</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    }) */ 
 /*  .catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Nasa Central API: " + error;
  });*/  




//  Picture of the Day
const url_fd2 = "https://api.nasa.gov/planetary/apod?api_key=gjxxudcPeMUWxBxbfJ7nqsY1FcJWv0Zrl6lTZWom";
fetch(url_fd2)
.then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
 //  document.getElementById("content").innerHTML += "<h1>Picuture of the day</h1>" + JSON.stringify(data, undefined, 2) + "<br><br>";
    document.getElementById("dhurl").src=data.url;
  
    document.getElementById("info").innerHTML +=  "<div class = title>" + data.title + "</p>";
    document.getElementById("info").innerHTML +=  "<div class = explanation>" + data.explanation + "</p>";
    })  
   /*.catch(function(error) {
     document.getElementById("content").innerHTML += "Error with Nasa Central API: " + error;
  }); */







/*

// IGalaxy images
const BASE_URL = "https://images-api.nasa.gov"; 
const url_ft = BASE_URL + "/search?q=Nebula";


// fetch 
// more info here: https://scotch.io/tutorials/how-to-use-the-javascript-fetch-api-to-get-data
 fetch(url_ft)
  .then((resp) => resp.json()) // Transform the data into json
  .then(function(data) {
       getImageData(data);
//  document.getElementById("content").innerHTML += "<h1>Images</h1><pre>" + JSON.stringify(data, undefined, 2) + "</pre>";
    // document.getElementById("data").src=links.href;
    })  
   .catch(function(error) {
     document.getElementById("content").innerHTML += "";
  });   



// pull image data
function getImageData (data){
  //console.log("length is " + data.collection.items.length);
  for (var i = 0; i < data.collection.items.length; i++) {
   var output="";
   var output = "<div class='card'>";
       
    output += "<h2>" + data.collection.items[i].data[0].title + "</h2>";
    output += "<p>"; 
    var str =  data.collection.items[i].data[0].description_508;
    if (str != undefined){
      output += str;      
    }
 
    output +=  "</p>";
    output += "<img src='" + data.collection.items[i].links[0].href + "' class='test' alt='test'><br>";
    output += "</div>";
      
   
    document.getElementById("pic").innerHTML += output;


  }
}






*/











//  Nasa search General Search
const BASE_URL = "https://images-api.nasa.gov"; 
let fetchData = {
  headers: {
    Accept: "application/vnd.api+json",
    "Content-Type": "application/vnd.api+json"
  }
};

function search() {
  let searchTerm = document.getElementById("input").value
  //perform search
  //update inner HTML of Foo
  getJSONData(searchTerm);
}



function getJSONData(searchTerm) {
  console.log('searching ' + searchTerm);
  /*let url = url_base + searchTerm;*/
  let url_fd = "https://images-api.nasa.gov/search?q=" + searchTerm;
  fetch(url_fd, fetchData)
    .then(resp => resp.json()) // Transform the data into json
    .then(function(data) {
      getImageData(data);
    });
}





function getImageData (data){
  //console.log("length is " + data.collection.items.length);
  for (var i = 0; i < data.collection.items.length; i++) {
   var output="";
   var output = "<div class='card'>";
       
    output += "<h2>" + data.collection.items[i].data[0].title + "</h2>";
    output += "<p>"; 
    var str =  data.collection.items[i].data[0].description_508;
    if (str != undefined){
      output += str;      
    }
 
    output +=  "</p>";
    output += "<img src='" + data.collection.items[i].links[0].href + "' class='test' alt='test'><br>";
    output += "</div>";
      


    document.getElementById("pic").innerHTML += output;
  }
}







/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function navBar() {
  var x = document.getElementById("topNav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}


