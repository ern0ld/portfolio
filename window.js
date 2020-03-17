window.addEventListener("load", showTheme)

function showTheme(){
    if(localStorage.getItem("Current") === null){
        return
    }
    currentPage = localStorage.getItem("Current")
    document.querySelector('.active').classList.remove('active');
    document.getElementById(currentPage).classList.add('active');
 
    if(currentPage !== "home"){
    history.replaceState({}, 'Home', '#'+currentPage);
    }
    if(localStorage.getItem("themeChanged") === null){
        return
    }
  else{
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
    document.querySelectorAll(".theme").forEach((e)=> e.classList.add(current+"k"))
   
      if( current === "dark") 
      {
          document.body.style.backgroundColor = "#23232e"
     
   }
   if( current === "solar") 
      {
          document.body.style.backgroundColor = "#fdf6e3"
   
   }
   if( current === "light") 
      {
          document.body.style.backgroundColor = "#ffffff"
      }
   }
}