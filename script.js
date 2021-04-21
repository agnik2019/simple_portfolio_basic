console.log("It's working");
let theme = localStorage.getItem('theme')

if(theme == null){
	setThemes('light');
}else{
	setThemes(theme)
}
let themedots = document.getElementsByClassName('theme-dot');

for(var i = 0; themedots.length >i; i++)
{
    themedots[i].addEventListener('click', function(){
        let mode=this.dataset.mode
        console.log("options clicked",mode);
        setThemes(mode);
    })
}

function setThemes(mode){
    if(mode=="light"){
        document.getElementById('theme-style').href="default.css";
    }
    if(mode=="blue"){
        document.getElementById('theme-style').href="blue.css";
    }
    if(mode=="green"){
        document.getElementById('theme-style').href="green.css";
    }
    if(mode=="purple"){
        document.getElementById('theme-style').href="purple.css";
    }
    localStorage.setItem('theme', mode)
}



