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
        
        
        //poistetaan luokkalistasta edellinen aktiivinen sivu
        //This is were the former visible div is removed from classlist
        if( document.querySelector('.active').classList !== null){
            document.querySelector('.active').classList.remove('active');
            console.log(localStorage)
       // toRemove.classList.remove('active');
        if(localStorage.getItem(hash.toString()) !== undefined){
            localStorage.removeItem(hash.toString())
        } 
        }
        else{
            console.log("tyhjää")
        }
        
        page = currentPage === null ? hash : currentPage;
        //lisätään luokkalistaan tämän hetkinen sivu aktiiviseksi
        //And here the new div is added to classList with active keyword
       if(page === "null"){
        page = tmpList[0]
        document.getElementById(page).classList.add('active');

       }
       else{
           
           document.getElementById(page).classList.add('active');

       }
     
        //Lisätään historiaan uusi sivu
        //Add new page/div to history
        history.pushState({}, page, `#${page}`);
        document.getElementById(page).dispatchEvent(app.show);
       
        
        localStorage.setItem("Current", page)
       
       }
     
    ,
    pageShown: function(ev){
     

        console.log(ev.target);

        console.log('Page', ev.target.id, 'just shown');
        currentPage = ev.target.id ;
        console.log(currentPage);
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
function changeLanguage(){
    
    if(document.getElementById("languagespan").innerHTML === "EN"){
     
            window.location.href = "en/index.html"
         
    }
    else{
        window.location.href = "../index.html"
    }  
}

function animate(){


    var h1 = document.querySelector('h1');
    h1.classList.add('big')
    setTimeout((h)=>{
        h.classList.remove('big');
    }, 1200, h1);
}

