var currentPage;
var currentPageId;
var hash;
var tmpList = [];
const app = {
    pages: [],
    show: new Event('show'),
    init: function(){
        tmpList.push("home")
        //lisätään kuuntelija jokaiseen page-luokkaan kuuluvaan osioon (div)
        //Add listener to every div which belongs to page-class
        app.pages = document.querySelectorAll('.page');
        app.pages.forEach((pg)=>{
            console.log(pg)
            pg.addEventListener('show', app.pageShown);
            
           })
        
        
        //lisätään jokaiseen osiossa olevaan "nav-link"-tunnisteella merkittyyn listan elementtiin kuuntelija
        //add listener to every element belonging to nav-link-class
        document.querySelectorAll('.nav-link').forEach((link)=>{
            link.addEventListener('click', app.nav);
        })
        //Asetetaan tilaksi (state) #home. Lisätään kuuntelija
        //Set state to home and add listener
        history.replaceState({}, 'Home', '#home');
        window.addEventListener('popstate', app.poppin);
    },
    //navigointi, valitaan currentpageksi data-targetin osoittama sivu
    //Navigation, set currentpage based on event target
    nav: function(ev){
        
        ev.preventDefault();
        
        currentPage = ev.target.getAttribute('data-target')
  
        console.log("klikattu elementtiä " + ev.target)
        console.log("currentpage " + currentPage);
        var hash = location.hash.replace('#' ,'');
        console.log("tässä hash " + hash);
        
        if(currentPage === "lang" || currentPage === null){
           currentPage = tmpList[0];
        }
        else{
            tmpList.pop();
            tmpList.push(currentPage);
        }
        console.log("currentpage " + currentPage);
        //poistetaan luokkalistasta edellinen aktiivinen sivu
        //This is were the former visible div is removed from classlist
       
            document.querySelectorAll('.active').forEach((e) =>e.classList.remove('active'));
        
    
          
           document.getElementById(currentPage).classList.add('active');

     
        //Lisätään historiaan uusi sivu
        //Add new page/div to history
        history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(currentPage).dispatchEvent(app.show);
       
        
        //localStorage.setItem("Current", currentPage)
       
       }
     
    ,
    pageShown: function(ev){
     
        console.log(ev.target);

        console.log('Page', ev.target.id, 'just shown');
        currentPage = ev.target.id ;

       //Näytetään osion otsikko suurella fontilla hetkellisesti
       //Show the header with big font momentarily
        var h1 = ev.target.querySelector('h1');
        h1.classList.add('big')
        setTimeout((h)=>{
            h.classList.remove('big');
        }, 1200, h1);
    },
    
    poppin: function(ev){
        
        console.log(location.hash, 'popstate event');

        var hash = location.hash.replace('#' ,'');
        
        //poistetaan luokkalistasta vanha aktiivinen osio/sivu
        //Remove the old active div from classlist
        document.querySelector('.active').classList.remove('active');
        
        //lisätään luokkalistaan uusi aktiivinen sivu
        //add the new active div to classlist
        document.getElementById(hash).classList.add('active');
        console.log(document.querySelector('.active').classList);
      
        
        console.log("tässä uusi hash" + hash)
       //history.pushState({}, currentPage, `#${currentPage}`);
        document.getElementById(hash).dispatchEvent(app.show);
    }
}

document.addEventListener('DOMContentLoaded', app.init);
document.addEventListener('DOMContentLoaded', animate);



//language change, changes the window location for now
function changeLanguageEN(){
    let toSet = activeEn();
    document.querySelector(".active").classList.remove('active')

        document.getElementById(toSet).classList.add("active")
      
    

           document.getElementById("fidiv").classList.remove('primary')
           document.getElementById("endiv").classList.remove('secondary')
           document.getElementById("endiv").classList.add('primary')
           document.getElementById("fidiv").classList.add('secondary')
         // document.getElementById("home2").classList.add("active")
        //  console.log("aktiivinenEN " + active.id)
           //history.replaceState({}, 'Home',  '#'+active.id+"2");
          

           
   
}
function changeLanguageFI(){


    let toSet = activeFi();
    document.querySelector(".active").classList.remove('active')

        document.getElementById(toSet).classList.add("active")
    document.getElementById("endiv").classList.remove('primary')
    document.getElementById("fidiv").classList.remove('secondary')
    document.getElementById("fidiv").classList.add('primary')
    document.getElementById("endiv").classList.add('secondary')
   // document.getElementById("home").classList.add("active")

    //console.log("aktiivinenFi " + active.id)
    //history.replaceState({}, 'Home', '#'+document.querySelector('.active').id.slice(0,-1));
}
function animate(){


    var h1 = document.querySelector('h1');
    h1.classList.add('big')
    setTimeout((h)=>{
        h.classList.remove('big');
    }, 1200, h1);
}
function activeFi(){
   return document.querySelector(".active").id === "home" ? "home" :
    document.querySelector(".active").id === "home2" ? "home" :
    document.querySelector(".active").id === "hobbies" ? "hobbies" :
    document.querySelector(".active").id === "hobbies2" ? "hobbies" :
    document.querySelector(".active").id === "reference2" ? "reference" :
    document.querySelector(".active").id === "reference" ? "reference" :  
    document.querySelector(".active").id === "gallery" ? "gallery" :
    document.querySelector(".active").id === "gallery2" ? "gallery" :
    document.querySelector(".active").id === "contact2" ? "contact" :
    document.querySelector(".active").id === "contact" ? "contact" : "home"
}

function activeEn(){
    return document.querySelector(".active").id === "home" ? "home2" :
    document.querySelector(".active").id === "home2" ? "home2" :
    document.querySelector(".active").id === "hobbies" ? "hobbies2" :
    document.querySelector(".active").id === "hobbies2" ? "hobbies2" :
    document.querySelector(".active").id === "reference2" ? "reference2" :
    document.querySelector(".active").id === "reference" ? "reference2" :  
    document.querySelector(".active").id === "gallery" ? "gallery2" :
    document.querySelector(".active").id === "gallery2" ? "gallery2" :
    document.querySelector(".active").id === "contact2" ? "contact2" :
    document.querySelector(".active").id === "contact" ? "contact2" : "home2"
}
