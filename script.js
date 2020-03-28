var tempClick ;

function changeColor(){
    var objMod = document.getElementById("border");
    var title = document.getElementById("title");
    var input = document.getElementById("valorCss");
    var r = Math.floor(Math.random()*255);
    var g = Math.floor(Math.random()*255);
    var b = Math.floor(Math.random()*255);

    objMod.style.backgroundColor = "rgb("+r+","+g+","+b+")";
    title.style.color = "rgb("+r+","+g+","+b+")";
    input.style.borderBottomColor = "rgb("+r+","+g+","+b+")";
}

changeColor();

function aulu(){
    tempClick = setInterval(arrowUpLeftUp, 100);
}

function auld(){
    tempClick = setInterval(arrowUpLeftDown, 100);
}

function auru(){
    tempClick = setInterval(arrowUpRightUp, 100);
}

function aurd(){
    tempClick = setInterval(arrowUpRightDown, 100);
}

function adlu(){
    tempClick = setInterval(arrowDownLeftUp, 100);
}

function adld(){
    tempClick = setInterval(arrowDownLeftDown, 100);
}

function adru(){
    tempClick = setInterval(arrowDownRightUp, 100);
}

function adrd(){
    tempClick = setInterval(arrowDownRightDown, 100);
}

function parar(){
    clearInterval(tempClick);
    document.getElementById("valorCss").value = document.getElementById("border").style.borderRadius;
}

 
function arrowUpLeftUp() {
        
        lengthPorcen = (document.getElementById("border").style.borderTopLeftRadius.length)

        switch(lengthPorcen){

            case 2:
                valBorda = parseInt(document.getElementById("border").style.borderTopLeftRadius.substr(0,1))
        
                valBorda += 2;
        
                document.getElementById("border").style.borderTopLeftRadius = valBorda+"%";
                console.log(valBorda);
            break;

            case 3:
                valBorda = parseInt(document.getElementById("border").style.borderTopLeftRadius.substr(0,2))
        
                valBorda += 2;
        
                document.getElementById("border").style.borderTopLeftRadius = valBorda+"%";
                console.log(valBorda);
            break;

            case 4:
                valBorda = parseInt(document.getElementById("border").style.borderTopLeftRadius.substr(0,3))
                valBorda = 0;
                document.getElementById("border").style.borderTopLeftRadius = valBorda+"%";
            break;
        }
};

function arrowUpLeftDown() {
                       
    lengthPorcen = (document.getElementById("border").style.borderBottomLeftRadius.length)

    switch(lengthPorcen){

        case 2:
            valBorda = parseInt(document.getElementById("border").style.borderBottomLeftRadius.substr(0,1))
    
            valBorda += 2;
    
            document.getElementById("border").style.borderBottomLeftRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 3:
            valBorda = parseInt(document.getElementById("border").style.borderBottomLeftRadius.substr(0,2))
    
            valBorda += 2;
    
            document.getElementById("border").style.borderBottomLeftRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 4:
            valBorda = parseInt(document.getElementById("border").style.borderBottomLeftRadius.substr(0,3))
            valBorda = 0;
            document.getElementById("border").style.borderBottomLeftRadius = valBorda+"%";
        break;
    }
};

function arrowUpRightUp() {
    
    lengthPorcen = (document.getElementById("border").style.borderTopRightRadius.length)

    switch(lengthPorcen){

        case 2:
            valBorda = parseInt(document.getElementById("border").style.borderTopRightRadius.substr(0,1))
    
            valBorda += 2;
    
            document.getElementById("border").style.borderTopRightRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 3:
            valBorda = parseInt(document.getElementById("border").style.borderTopRightRadius.substr(0,2))
    
            valBorda += 2;
    
            document.getElementById("border").style.borderTopRightRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 4:
            valBorda = parseInt(document.getElementById("border").style.borderTopRightRadius.substr(0,3))
            valBorda = 0;
            document.getElementById("border").style.borderTopRightRadius = valBorda+"%";
        break;
    }
};

function arrowUpRightDown() {

    lengthPorcen = (document.getElementById("border").style.borderBottomRightRadius.length)

    switch(lengthPorcen){

        case 2:
            valBorda = parseInt(document.getElementById("border").style.borderBottomRightRadius.substr(0,1))
    
            valBorda += 2;
    
            document.getElementById("border").style.borderBottomRightRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 3:
            valBorda = parseInt(document.getElementById("border").style.borderBottomRightRadius.substr(0,2))
    
            valBorda += 2;
    
            document.getElementById("border").style.borderBottomRightRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 4:
            valBorda = parseInt(document.getElementById("border").style.borderBottomRightRadius.substr(0,3))
            valBorda = 0;
            document.getElementById("border").style.borderBottomRightRadius = valBorda+"%";
        break;
    }
};
    
/////////////////////////////////   

function arrowDownLeftUp () {

    lengthPorcen = (document.getElementById("border").style.borderTopLeftRadius.length)

    switch(lengthPorcen){

        case 2:
            valBorda = parseInt(document.getElementById("border").style.borderTopLeftRadius.substr(0,1))
    
            valBorda -= 2;
    
            document.getElementById("border").style.borderTopLeftRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 3:
            valBorda = parseInt(document.getElementById("border").style.borderTopLeftRadius.substr(0,2))
    
            valBorda -= 2;
    
            document.getElementById("border").style.borderTopLeftRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 4:
            valBorda = parseInt(document.getElementById("border").style.borderTopLeftRadius.substr(0,3))
            valBorda = 0;
            document.getElementById("border").style.borderTopLeftRadius = valBorda+"%";
        break;
    }
};

function arrowDownLeftDown() {
    
    lengthPorcen = (document.getElementById("border").style.borderBottomLeftRadius.length)

    switch(lengthPorcen){

        case 2:
            valBorda = parseInt(document.getElementById("border").style.borderBottomLeftRadius.substr(0,1))
    
            valBorda -= 2;
    
            document.getElementById("border").style.borderBottomLeftRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 3:
            valBorda = parseInt(document.getElementById("border").style.borderBottomLeftRadius.substr(0,2))
    
            valBorda -= 2;
    
            document.getElementById("border").style.borderBottomLeftRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 4:
            valBorda = parseInt(document.getElementById("border").style.borderBottomLeftRadius.substr(0,3))
            valBorda = 0;
            document.getElementById("border").style.borderBottomLeftRadius = valBorda+"%";
        break;
    }
};

function arrowDownRightUp() {
    
    lengthPorcen = (document.getElementById("border").style.borderTopRightRadius.length)

    switch(lengthPorcen){

        case 2:
            valBorda = parseInt(document.getElementById("border").style.borderTopRightRadius.substr(0,1))
    
            valBorda -= 2;
    
            document.getElementById("border").style.borderTopRightRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 3:
            valBorda = parseInt(document.getElementById("border").style.borderTopRightRadius.substr(0,2))
    
            valBorda -= 2;
    
            document.getElementById("border").style.borderTopRightRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 4:
            valBorda = parseInt(document.getElementById("border").style.borderTopRightRadius.substr(0,3))
            valBorda = 0;
            document.getElementById("border").style.borderTopRightRadius = valBorda+"%";
        break;
    }
};

function arrowDownRightDown() {
    
    lengthPorcen = (document.getElementById("border").style.borderBottomRightRadius.length)

    switch(lengthPorcen){

        case 2:
            valBorda = parseInt(document.getElementById("border").style.borderBottomRightRadius.substr(0,1))
    
            valBorda -= 2;
    
            document.getElementById("border").style.borderBottomRightRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 3:
            valBorda = parseInt(document.getElementById("border").style.borderBottomRightRadius.substr(0,2))
    
            valBorda -= 2;
    
            document.getElementById("border").style.borderBottomRightRadius = valBorda+"%";
            console.log(valBorda);
        break;

        case 4:
            valBorda = parseInt(document.getElementById("border").style.borderBottomRightRadius.substr(0,3))
            valBorda = 0;
            document.getElementById("border").style.borderBottomRightRadius = valBorda+"%";
        break;
    }
};
    
