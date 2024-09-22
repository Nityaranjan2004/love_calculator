function calculateLOVE(){
    const name1=document.getElementById("name1").value;
    const name2=document.getElementById("name2").value;
    const result=document.getElementById("result");
    
   
    if(name1==="" || name2===""){
        alert("Please enter both names");
    
}else{
        const lovepercentage = Math.floor(Math.random() *101);

       // const result=document.getElementById("result");

       result.innerHTML =`${name1} and ${name2}'s Love percentage: ${lovepercentage}`;
       
        if(lovepercentage<30){
            result.innerHTML+="<br> not a greate match.keep looking"
        
        }else if(lovepercentage>=30 && lovepercentage<70){
            result.innerHTML+="<br> there is a potential.give it a try";
        
        }else{
            result.innerHTML+="<br> greate Match";
        }

    }
}
calculateLOVE();