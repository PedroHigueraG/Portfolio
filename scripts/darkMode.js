var darkIcon = document.getElementById('dark_icon');
var lightIcon = document.getElementById('light_icon');

darkIcon.onclick = function(){
    document.body.classList.toggle('dark_mode');

        darkIcon.style.display='none';
        lightIcon.style.display='block';
    
}

lightIcon.onclick = function(){
    document.body.classList.toggle('dark_mode');
    
        darkIcon.style.display='block';
        lightIcon.style.display='none';

}