let btn_1=document.getElementById('btn-1');
let btn_2=document.getElementById("btn-2");
let btn_3=document.getElementById("btn-3");
let btn_4=document.getElementById("btn-4");
let next=document.getElementById("next");
let questions_hedder=document.getElementById("hedder");
let question=document.getElementById("Questions");
let hedder=document.getElementById("hedder");
let hidden=document.getElementById("hidden");
let h1=document.getElementById("h1");
let section=0;
let mark=0;
let chekker=0;   


function next_button(){
    if (section==0&&chekker==1) {
        question.innerHTML="2)Which tag would you use to create a hyperlink?";
        btn_1.innerHTML="img tag";
        btn_2.innerHTML="ol tag";
        btn_3.innerHTML="a tag";
        btn_4.innerHTML="table tag";
        btn_1.style.background='#ffffff';
        btn_1.style.border='2px solid rgba(251,32,86,1)';
        btn_1.style.color="#000000";
        questions_hedder.innerHTML="Questions No:2";
       
        btn_1.addEventListener("focus",()=>{
            btn_1.style.backgroundColor="red";
            btn_1.style.color="#fff"
        })
        btn_1.addEventListener("focusout",()=>{
            btn_1.style.backgroundColor="#fff";
            btn_1.style.color="#000000"
        })
        
        
            next.style.backgroundColor=" #ffffff";
           next.style.border='2px solid rgba(251,32,86,1)';
            next.style.color="#000000";
            section=1;
            console.log(section);
            
            btn_1.style.pointerEvents= 'auto';
       
       


        
    }else if (section==1&&chekker==2) {
        question.innerHTML="3)To make your website mobile friendly, you can make your website______";
        btn_1.innerHTML="Light";
        btn_2.innerHTML="Reactive";
        btn_3.innerHTML="Fast Loading";
        btn_4.innerHTML="Responsive";
        btn_3.style.background='#ffffff';
        btn_3.style.border='2px solid rgba(251,32,86,1)';
        btn_3.style.color="#000000";
        questions_hedder.innerHTML="Questions No:3";
       
        btn_3.addEventListener("focus",()=>{
            btn_3.style.backgroundColor="red";
            btn_3.style.color="#fff"
        })
        btn_3.addEventListener("focusout",()=>{
            btn_3.style.backgroundColor="#fff";
            btn_3.style.color="#000000"
        })
        
        
            next.style.backgroundColor=" #ffffff";
           next.style.border='2px solid rgba(251,32,86,1)';
            next.style.color="#000000";
            section=2;
            console.log(section);
            btn_3.style.pointerEvents= 'auto';
             
    
       
        
    }else if (section==2&&chekker==3) {
        question.innerHTML="4)Which input type would allow a reader to select several options from a list of possibilities? ";
        btn_1.innerHTML="checkbox";
        btn_2.innerHTML="radio";
        btn_3.innerHTML="a tag";
        btn_4.innerHTML="form";
        btn_4.style.background='#ffffff';
        btn_4.style.border='2px solid rgba(251,32,86,1)';
        btn_4.style.color="#000000";
        questions_hedder.innerHTML="Questions No:4";
       
        btn_4.addEventListener("focus",()=>{
            btn_4.style.backgroundColor="red";
            btn_4.style.color="#fff"
        })
        btn_4.addEventListener("focusout",()=>{
            btn_4.style.backgroundColor="#fff";
            btn_4.style.color="#000000"
        })
        
        
            next.style.backgroundColor=" #ffffff";
           next.style.border='2px solid rgba(251,32,86,1)';
            next.style.color="#000000";
            section=3;
            console.log(section);
            
            btn_4.style.pointerEvents= 'auto';
            btn_1.style.border='2px solid rgba(251,32,86,1)';

            next.style.visibility="hidden";
    }
    
    
}



function button(trf,btn_id){
    chekker=1;
   
    if(trf&&btn_id===0&&section===0){
        mark=0;
        mark++;
        questions_hedder.innerHTML="Correct Answer";
        
        setTimeout(() => {
            questions_hedder.innerHTML="Questions No:1";
        }, 2000);
        console.log(mark);
        btn_1.style.background='rgb(3, 100, 0)';
        btn_1.style.color='#ffffff';
        btn_1.style.border='1px solid #ffff';
        
        
        chekker=1;
        next.style.color='#ffffff';
        next.style.backgroundColor="  rgba(251,32,86,1)";
       
       
    
        

    }
    else if(btn_id>0&&section==0){
        chekker=1;
        btn_1.style.pointerEvents="none";
         btn_1.style.background='rgb(3, 100, 0)';
        btn_1.style.color='#ffffff';
        btn_1.style.border='1px solid #ffff';
        questions_hedder.innerHTML="Wrong Answer";
        setTimeout(() => {
            questions_hedder.innerHTML="Questions No:1";
        }, 2000);
       
        next.style.color='#ffffff';
        next.style.backgroundColor="  rgba(251,32,86,1)";
       
       
        
       
    }
    
   
   else if (btn_id==2&&section==1) {
    chekker=2;
        mark++;
          
        
            questions_hedder.innerHTML="Correct Answer";
            setTimeout(() => {
                questions_hedder.innerHTML="Questions No:2";
            }, 2000);
            console.log(mark);
            btn_3.style.background='rgb(3, 100, 0)';
            btn_3.style.color='#ffffff';
            btn_3.style.border='1px solid #ffff';
    
            next.style.color='#ffffff';
            next.style.backgroundColor="  rgba(251,32,86,1)";
           
           
       
       
      
    }
    else if(btn_id>2&&section==1||btn_id<2&&section==1){
        chekker=2;
        btn_3.style.pointerEvents="none";
        questions_hedder.innerHTML="Wrong Answer";
        setTimeout(() => {
            questions_hedder.innerHTML="Questions No:2";
        }, 2000);
        questions_hedder.innerHTML="Questions No:2";

        btn_3.style.background='rgb(3, 100, 0)';
        btn_3.style.color='#ffffff';
        btn_3.style.border='1px solid #ffff';
        next.style.color='#ffffff';
        next.style.backgroundColor="  rgba(251,32,86,1)";
       
        next.style.color='#ffffff';
            next.style.backgroundColor="  rgba(251,32,86,1)";
       
      
   }
   else if (btn_id==3&&section==2) {
    chekker=3;
    mark++;
    questions_hedder.innerHTML="Correct Answer";
    setTimeout(() => {
        questions_hedder.innerHTML="Questions No:3";
    }, 2000);
    console.log(mark);
    btn_4.style.background='rgb(3, 100, 0)';
    btn_4.style.color='#ffffff';
    btn_4.style.border='1px solid #ffff';
    next.style.color='#ffffff';
    next.style.backgroundColor="  rgba(251,32,86,1)";
   
   
       
   } else if (btn_id<3&&section==2) {
    chekker=3;
    btn_4.style.pointerEvents="none";
    questions_hedder.innerHTML="Wrong Answer";
    setTimeout(() => {
        questions_hedder.innerHTML="Questions No:3";
    }, 2000);
    console.log(mark);
    btn_4.style.background='rgb(3, 100, 0)';
    btn_4.style.color='#ffffff';
    btn_4.style.border='1px solid #ffff';
    next.style.color='#ffffff';
    next.style.backgroundColor="  rgba(251,32,86,1)";
   
   
   }else if (btn_id==0&&section==3) {
    chekker=4;
    mark++;
    questions_hedder.innerHTML="Correct Answer";
    setTimeout(() => {
        questions_hedder.innerHTML="Questions No:4";
    }, 2000);
    console.log(mark);
    btn_1.style.background='rgb(3, 100, 0)';
    btn_1.style.color='#ffffff';
    btn_1.style.border='1px solid #ffff';
    setTimeout(() => {
        hidden.style.visibility="visible"
        
        mark_print();
    }, 2000);
    next.style.color='#ffffff';
    next.style.backgroundColor="  rgba(251,32,86,1)";

    
   
   }else if(btn_id>0&&section==3){
    chekker=4;
    btn_1.style.pointerEvents="none";
     btn_1.style.background='rgb(3, 100, 0)';
    btn_1.style.color='#ffffff';
    btn_1.style.border='1px solid #ffff';
    questions_hedder.innerHTML="Wrong Answer";
    setTimeout(() => {
        questions_hedder.innerHTML="Questions No:4";
    }, 2000); 
    setTimeout(() => {
        hidden.style.visibility="visible"
    
        mark_print();
    }, 2000);

    next.style.color='#ffffff';
    next.style.backgroundColor="  rgba(251,32,86,1)";
   

    
   
   
   
}

   
}
function mark_print(){
h1.innerHTML=mark+"/"+4;
questions_hedder.innerHTML="complited";
mark=0;
    section=0
setTimeout(() => {
    hidden.style.visibility="hidden"
    next.style.visibility="visible";
    mark=0;
    section=0
    
    btn_1.style.border='2px solid rgba(251,32,86,1)';

    btn_1.style.backgroundColor="#fff"
    btn_1.style.Color="black";
    button();
    question.innerHTML="1)Which heading tag will produce the largest text?";
    btn_1.innerHTML="h1 tag";
    btn_2.innerHTML="h3 tag";
    btn_3.innerHTML="h6 tag";
    btn_4.innerHTML="h2 tag";
    
}, 2000);


}



