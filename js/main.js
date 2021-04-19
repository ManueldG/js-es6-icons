
function main(){
    var select = document.querySelector('#selezione');
    var tP=getTp(icons);
    var list= document.querySelector(".content");
    console.log(select);
    select.addEventListener('change',()=>{
        const selected = select.value;
    })
    //console.log(icons);
    for (var i in tP)
    document.getElementById('selezione').innerHTML+='<option value="'+tP[i]+'">'+tP[i]+'</option>';
    
    
    document.getElementById('selezione').onchange=function(){
        this.innerHTML+= 'sdafsd';
    }
    
    var color;
    var type=icons.filter((a)=>{
            
            return (a.type==tP[0]);
        })
    for(k in type){
        console.table(type[k]);// fas fa-crow <i class="fas fa-crow"></i>
        
        
        console.log(type);
        var tpl1 = type[k].family;
        var tpl2 =type[k].prefix+type[k].name;
        switch(type[k].type){
            case 'user': color= 'color1';
            break;
            case 'vegetable': color= 'color2';
            break;
            case 'animal': color= 'color3';
            break;
        }

    
        
        
        
        //console.log(listC);

        var cla = document.createElement("I");
        //var box = document.createElement("DIV");  
        //box.classList.add ('box'); 
        //console.log(box);                
        cla.classList.add (tpl1);
        cla.classList.add (tpl2);
        cla.classList.add (color);    

        list.appendChild(cla);
        //console.log(document.querySelector('main')); 
        //console.log(document.getElementsById("main"));
        document.querySelector('main').appendChild(list); 
        var list=(list.cloneNode(false));
       
}
        
        
    

}

function getTp(arr){
    var types = [];
    arr.forEach(function(a){
        //oggetto,indice,array
        if (!(types.includes(a.type))){
            console.log(types); 
            types.push(a.type);
        }
            
        return types;
    })
    return types;
}