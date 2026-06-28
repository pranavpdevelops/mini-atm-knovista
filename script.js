let currentBalance =500

let deposit = document.getElementById("deposit")
let withdraww =document.getElementById("withdraw")
let balance = document.getElementById("balance")



while(true){
let user = Number(prompt("  balance enter 1,deposit enter 2 , withdraw enter 3,  exit enter 4"))

if(user==1){

    alert(currentBalance)

}else if(user==2){
    let amt = Number(prompt("deposit amout:"))
    currentBalance+=amt
    deposit.textContent = `Deposited Amount ${amt}`
}else if(user==3){

    let withdraw = Number(prompt("enter your withdrawal ammout:"))

    if(currentBalance>=withdraw){
           currentBalance-=withdraw
           withdraww.textContent =`Withdrawal Amount ${withdraw} `

    }else{
        alert('insufficent balance')
    }
   
    balance.textContent=`Current Balance${currentBalance}`
  
   

}else if(user==4){
    alert('Thank you visit again')
    break
}

}
