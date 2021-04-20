
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
                return a.type;  // ritorno type i tipi da visulizzare     
        });

        list=document.querySelector(".content");
        list.parentNode.innerHTML=''; // resetto content
        list.innerHTML=''; // resetto la list
        printIcon(type,list); // ristampo le icone
        
    });
    
    for (var i in tP) // creo le opzioni
    document.getElementById('selezione').innerHTML+='<option value="'+tP[i]+'">'+tP[i]+'</option>'; //template option
    printIcon(type,list); // stampo le icone
}

/*funzioni*/

/**
 * 
 * @param {string} tpl1 - classe 
 * @param {string} tpl2 - classe
 * @param {string} color - classe
 * @returns elemento i
 */
function createI(tpl1,tpl2,color){ // crea elemento i e aggiunge le classi
    var cla = document.createElement("I"); 
        cla.classList.add (tpl1);
        cla.classList.add (tpl2);
        cla.classList.add (color);
        return cla;    
}

/**
 * 
 * @param {Object} list - contenitore
 * @param {Object} cla  - elemento da appendere
 * @returns {Object} list - ritorna contenitore popolato
 */
function appendI(list,cla){ // appende cla a list
    list.appendChild(cla);
    document.querySelector('main').appendChild(list); 
    return list=(list.cloneNode(false));
}

/**
 * 
 * @param {Object[]} arr - array di oggetti icone  
 * @returns ritorna i tipi di icone solo una volta
 */
function getTp(arr){ // 
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

/**
 * 
 * @param {*} type - tipo di icone da stampare
 * @param {*} list - contenuto 
 */
function printIcon(type,list){
    type.forEach((el)=>{
        tpl1 = el.family;
        tpl2 =el.prefix+el.name;

        switch(el.type){
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