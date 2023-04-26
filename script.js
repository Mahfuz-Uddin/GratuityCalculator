const billTotalInput =document.getElementById('billTotalInput')
const tipInput =document.getElementById('tipInput')
const numberOfPeople =document.getElementById('numberOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')

const calculateBill = () =>{
    let bill =  Number(billTotalInput.value)
    let tip = Number(tipInput.value)/100
    let total = bill + (bill*tip)
    let perPerson = total/Number(numberOfPeople.innerText)
    perPersonTotal.innerHTML =`$${perPerson.toFixed(2)}`
}

const increasePeople = ()=>{
  
  let newCount = Number(numberOfPeople.innerText)+1
  console.log(newCount)
  numberOfPeople.innerText = newCount
  calculateBill()
}

const decreasePeople = ()=>{
    
    let currentCount = Number(numberOfPeople.innerText) 
    if(currentCount<1){
        return
    }
    let newCount = currentCount -1;
    numberOfPeople.innerText = newCount
}
