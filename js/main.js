
function main(){
    var select = document.querySelector('#selezione');//option
    var tP=getTp(icons); // template icone
    var list= document.querySelector(".content"); // contenitore icone
    var type=icons.filter((a)=>{
            console.log("filter",a.type);
            return a.type;
        });

    select.addEventListener('change',function(){ // evento change
        type=icons.filter((a)=>{
            if (select.value!=='all'){
                return a.type===select.value; //filtro valori corrispondenti in option
            }
            else
                return a.type;            
        });

        list=document.querySelector(".content");
        list.parentNode.innerHTML='';
        list.innerHTML=''; // resetto la list
        printIcon(type,list); // ristampo le icone
        
    });
    //console.log(icons);
    for (var i in tP)
    document.getElementById('selezione').innerHTML+='<option value="'+tP[i]+'">'+tP[i]+'</option>'; //template option
        
    
    
    printIcon(type,list);

    
    
}

/*funzioni*/

function createI(tpl1,tpl2,color){ // crea elemento
    var cla = document.createElement("I"); 
        cla.classList.add (tpl1);
        cla.classList.add (tpl2);
        cla.classList.add (color);
        return cla;    
}

function appendI(list,cla){ 
    list.appendChild(cla);
    document.querySelector('main').appendChild(list); 
    return list=(list.cloneNode(false));
}

function getTp(arr){
    var types = [];
    arr.forEach(function(a){
        //oggetto,indice,array
        if (!(types.includes(a.type))){            
            types.push(a.type);
        }            
        return types;
    })
    return types;
}

function printIcon(type,list){

    type.forEach((el,k)=>{
    
        tpl1 = type[k].family;
        tpl2 =type[k].prefix+type[k].name;
        switch(type[k].type){
            case 'user': color= 'color1';
            break;
            case 'vegetable': color= 'color2';
            break;
            case 'animal': color= 'color3';
            break;
        };
        var cla=createI(tpl1,tpl2,color);
        list = appendI(list,cla);
         
           
        return color;
    });

}