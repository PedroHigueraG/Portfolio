var darkIcon = document.getElementById('dark_icon');
var lightIcon = document.getElementById('light_icon');

darkIcon.onclick = darkTheme;
lightIcon.onclick = lightTheme;

let localData = localStorage.getItem('theme');

if(localData==null){
    localStorage.setItem('theme','light');
}else if(localData == 'light'){
    lightTheme();
    document.body.classList.remove('dark_mode');
}else{
    darkTheme();
    document.body.classList.add('dark_mode');
}

function lightTheme(){
    document.body.classList.toggle('dark_mode');
    darkIcon.style.display='block';
    lightIcon.style.display='none';
    localStorage.setItem('theme','light');
}

function darkTheme(){
    document.body.classList.toggle('dark_mode');
    darkIcon.style.display='none';
    lightIcon.style.display='block';
    localStorage.setItem('theme','dark');
}
