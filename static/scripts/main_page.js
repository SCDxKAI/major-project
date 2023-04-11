
  /* side bar animation */
  
function openNav() {
    document.getElementById("mysidebar").style.width = "250px";
    document.getElementById("navbar").style.marginLeft = "250px";
}
function closeNav() {
    document.getElementById("mysidebar").style.width = "0";
    document.getElementById("navbar").style.marginLeft= "0";
  }


/* Search box animation */


const searchBox = document.querySelector(".search_bar");
const searchBtn = document.querySelector(".search-icon");
const cancelBtn = document.querySelector(".cancel-icon");
const searchInput = document.querySelector("input");
searchBtn.onclick =()=>{
  searchBox.classList.add("active");
  searchBtn.classList.add("active");
  searchInput.classList.add("active");
  cancelBtn.classList.add("active");
  
}
cancelBtn.onclick =()=>{
  searchBox.classList.remove("active");
  searchBtn.classList.remove("active");
  searchInput.classList.remove("active");
  cancelBtn.classList.remove("active");
}

/*python file*/


/*reading json file to html welcome page*/
fetch('output.json')
.then(function(response){
  return response.json();
})
.then (function (output) {
  for(var i=0;i<output.length;i++){
    document.getElementById("productName").innerHTML += 
    output[i].name + "=>" + output[i].price + "<br/>";
  }
})
.catch(function(err){
  console.log(err);
})