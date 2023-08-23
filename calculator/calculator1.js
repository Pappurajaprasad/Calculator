function add(){
    var act=0, b=0;
    act=f.enter.value;
    b=act.charAt(act.length-1);
        if(b=='+' || b=='-' || b=='/' || b=='*')
        {
        f.enter.value=act.substring(0,act.length-1);
        f.enter.value+='+';
        }
        else{
            f.enter.value+='+';
        }
}

function sub(){
    var act=0, b=0;
    act=f.enter.value;
    b=act.charAt(act.length-1);
        if(b=='+' || b=='-' || b=='/' || b=='*')
        {
        f.enter.value=act.substring(0,act.length-1);
        f.enter.value+='-';
        }
        else{
            f.enter.value+='-';
        }
}


function divi(){
    var act=0, b=0;
    act=f.enter.value;
    b=act.charAt(act.length-1);
        if(b=='+' || b=='-' || b=='/' || b=='*')
        {
        f.enter.value=act.substring(0,act.length-1);
        f.enter.value+='/';
        }
        else{
            f.enter.value+='/';
        }
}

function mul(){
    var act=0, b=0;
    act=f.enter.value;
    b=act.charAt(act.length-1);
        if(b=='+' || b=='-' || b=='/' || b=='*')
        {
        f.enter.value=act.substring(0,act.length-1);
        f.enter.value+='*';
        }
        else{
            f.enter.value+='*';
        }
}


