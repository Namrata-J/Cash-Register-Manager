const billAmount=document.querySelector(".bill-amount");
const cashGiven=document.querySelector(".cash-given");
const checkButton=document.querySelector(".check-btn");
const errorMessage=document.querySelector(".error-message");
const displaying=document.querySelectorAll(".notes-number");

const Notes=[2000,500,100,50,20,10,5,1];

checkButton.addEventListener("click",function checkAmountValidation(){
    
  errorMessage.style.display="none";

    if(Number(billAmount.value)>0){
         if(Number(cashGiven.value)>=Number(billAmount.value)){
            const remainder = cashGiven.value - billAmount.value;
            notesReturned(remainder);
         }else{
              displayMessage("Do you wanna wash dishes!?");
         }
    }else{
        displayMessage("You entered invalid bill amount");
    }
});

function displayMessage(message){
    errorMessage.style.display="block";
    errorMessage.innerText=message;
}

function notesReturned(remainder){
 for(var i=0;i<Notes.length;i++)
{
     const number=Math.trunc(remainder/Notes[i]);
         remainder=remainder-(number*Notes[i]);
          displaying[i].innerText=number;
 }
}