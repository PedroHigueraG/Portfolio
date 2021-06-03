window.onscroll = function(){
    if(document.body.scrollTop>50 || document.documentElement.scrollTop>50){
        document.getElementById('top_button').style.opacity="1";
    }else{
        document.getElementById('top_button').style.opacity="0";
    }
};