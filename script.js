let currentBalance =500



while(true){
let user = Number(prompt("  balance enter 1  deposit enter 2  withdraw enter 3  exit enter 4"))
if(user==1){

    alert(currentBalance)

}else if(user==2){
    let amt = Number(prompt("deposit ammout:"))
    currentBalance+=amt
    console.log(`enter your amout$${amt}`)
}else if(user==3){

    let withdraw = Number(prompt("enter your withdrawal ammout:"))

    if(currentBalance>=withdraw){
           currentBalance-=withdraw
           
       console.log(`enter your withdrawal amout$${withdraw}`)

    }else{
        alert('insufficent balance')
    }
   
    console.log("balance",currentBalance)

    console.log("thank you visit again")
    
   

}else if(user==4){
    alert('Thank you visit again')
    break
}

}
