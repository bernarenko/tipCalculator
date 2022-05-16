var totalBillWithTip = 0
var tipAmount = 0
var billAmount = 0
var percent = 0

function totalBillFunc (){
    billAmount = Number(document.querySelector('input#currency').value)
    percent = (Number(document.querySelector('input#sliderPercent').value)) / 100
    
    tipAmount = billAmount * percent
    totalBillWithTip = billAmount + (billAmount*percent)

    document.querySelector('input#tipAmount').value = tipAmount
    document.querySelector('input#totalAmount').value = totalBillWithTip
    document.querySelector('input#numeralPercent').value = percent*100
}

function numeralPercent(){
    document.querySelector('input#sliderPercent').value = Number(document.querySelector('input#numeralPercent').value)
    totalBillFunc()
}
