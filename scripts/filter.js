var all = document.getElementById('all');
var web = document.getElementById('web');
var python = document.getElementById('python');
var mobile = document.getElementById('mobile');

var listAll = document.getElementsByClassName('project_item');
var listWeb = document.getElementsByClassName('web');
var listPython = document.getElementsByClassName('python');
var listMobile = document.getElementsByClassName('mobile');

all.addEventListener('click',function(){
    all.style.fontWeight = 'bold';
    web.style.fontWeight = 'normal';
    python.style.fontWeight = 'normal';
    mobile.style.fontWeight = 'normal';
    for (var i=0; i<listAll.length;i++){
        listAll[i].style.display='block'
    }

});
web.addEventListener('click',function(){
    all.style.fontWeight = 'normal';
    web.style.fontWeight = 'bold';
    python.style.fontWeight = 'normal';
    mobile.style.fontWeight = 'normal';
    for (var i=0; i<listAll.length;i++){
        listAll[i].style.display='none'
    }
    for (var i=0; i<listAll.length;i++){
        listWeb[i].style.display='block'
    }
});
python.addEventListener('click',function(){
    all.style.fontWeight = 'normal';
    web.style.fontWeight = 'normal';
    python.style.fontWeight = 'bold';
    mobile.style.fontWeight = 'normal';
    for (var i=0; i<listAll.length;i++){
        listAll[i].style.display='none'
    }
    for (var i=0; i<listAll.length;i++){
        listPython[i].style.display='block'
    }

});
mobile.addEventListener('click',function(){
    all.style.fontWeight = 'normal';
    web.style.fontWeight = 'normal';
    python.style.fontWeight = 'normal';
    mobile.style.fontWeight = 'bold';
    for (var i=0; i<listAll.length;i++){
        listAll[i].style.display='none'
    }
    for (var i=0; i<listAll.length;i++){
        listMobile[i].style.display='block'
    }

});