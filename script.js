function gerar(){
    var num = document.querySelector('input#ntxt')
    var tab = document.querySelector('select#tab')

    if(num.value.length == 0){
        window.alert('Por favor, digite um número!')
    }
    else{
        var n = Number(num.value)
        tab.innerHTML = ''

        for(var i = 1; i <= 10; i++){
            var item = document.createElement('option')
            item.text = `${n} x ${i} = ${n*i}`
            item.value = `tab${i}`
            tab.appendChild(item)
        }
    }
}