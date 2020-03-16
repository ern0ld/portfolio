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
    const current = localStorage.getItem('theme');
    const next = themeMap[current];
    bodyClass.replace(current, next);
    localStorage.setItem('theme', next);
    //if theme dark is next, change the color of elements belonging in contenttext-class
   if( next === "dark") 
   {
       document.body.style.backgroundColor = "#23232e"
       document.getElementById("navbarid").style.zIndex = 0;
    document.querySelectorAll(".contenttext").forEach(element => {

        if(element.id ==="description"){
            element.style.color = "#b6b6b6"
           }
      
           else{
        element.style.color = "#b6b6b6"
      
        element.style.zIndex = -1;
           }
     });
}
if( next === "solar") 
   {
       document.body.style.backgroundColor = "#fdf6e3"
    document.querySelectorAll(".contenttext").forEach(element => {
        
       if(element.id ==="description"){
        element.style.color = "#35535c"
       }
       else{
        element.style.color = "#35535c"
        element.style.zIndex = -1;
       }
      
     });
}
if( next === "light") 
   {
       document.body.style.backgroundColor = "#ffffff"
    document.querySelectorAll(".contenttext").forEach(element => {
        if(element.id ==="description"){
            element.style.color = "#1f1f1f"
           }
           else{
        element.style.color = "#000000"
        element.style.zIndex = -1;
           }
     });
}

}
  
  document.getElementById('themeButton').onclick = toggleTheme;