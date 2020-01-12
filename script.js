
fetch('https://api.nasa.gov/planetary/apod?api_key=fGVoWj387Kqq5cOSPh1nHdRPDWRhMefq7XHDc4T9')
.then(result => result.json())
.then((res) => {
  console.log(res);
})
.catch(err => console.log(err))


$.getJSON('http://api.open-notify.org/astros.json', function(data) {
  console.log(data['number'])
});

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}