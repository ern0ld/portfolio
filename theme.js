var currentTheme;

function setTheme(themee){
   currentTheme = themee;
 }
 function getTheme(){
    return currentTheme;
 }
//Set themes to map
const themeMap = {
    dark: "light",
    light: "solar",
    solar: "dark"
 
  };
  
  const theme = localStorage.getItem('theme')
    || (tmp = Object.keys(themeMap)[0],
        localStorage.setItem('theme', tmp),
        tmp);
  const bodyClass = document.body.classList;
  bodyClass.add(theme);


  //Toggle between themes
  function toggleTheme() {
 localStorage.setItem("themeChanged", true)
    const current = localStorage.getItem('theme');
    document.querySelectorAll(".theme").forEach((e)=>{ if(e.classList.contains(current+"k")){
       e.classList.remove(current+"k");}
    })
    const next = themeMap[current];
    document.querySelectorAll(".theme").forEach((e)=> e.classList.add(next+"k"))
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next)
    console.log(next)
    //if theme dark is next, change the color of elements belonging in contenttext-class
    setTheme(next);
    if(next === "default"){
      document.body.style.backgroundColor= whitesmoke;
    }
  if( next === "dark") 
   {
       document.body.style.backgroundColor = "#23232e"
  
}
if( next === "solar") 
   {
       document.body.style.backgroundColor = "#fdf6e3"

}
if( next === "light") 
   {
       document.body.style.backgroundColor = "#ffffff"

}

}

  var test = document.getElementById('themeButton')
 test.addEventListener("click", toggleTheme)

 