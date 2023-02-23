let list = 1;
function addToCard(calc,idName){
     
    const ul =  document.getElementById('ul-list');
    const li = document.createElement('list');
 
    // ul.appendChild(li);
    
     const button = document.createElement('button');

     button.innerText = "Conver to m"
     button.style.backgroundColor = "#1090D8";
     button.style.borderRadius = "4px";
     button.style.border = "#1090D8"
     button.style.color = "white"
     button.style.padding = "3px"
     button.style.marginLeft = "20px";

  

     li.innerText = list+"."+"  "+idName+ "   "+calc;
    
     li.appendChild(button);
     li.style.display = "block";
     li.style.marginBottom = "10px"

     ul.appendChild(li);
     list++;

     console.log(document.getElementsByClassName('my-btn'));

   
        
}