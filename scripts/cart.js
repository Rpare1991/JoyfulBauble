if (document.readyState == 'loading') {
    document.addEventListener('DOMContentLoaded', ready)
}
else {
    ready()
}


function ready () {
    var removeCartItemButtons = document.getElementsByClassName('removebtn')


    for (var i = 0; i < removeCartItemButtons.length; i ++) {
        var button = removeCartItemButtons[i]
        button.addEventListener('click', function(event) {
            var buttonClicked = event.target
            buttonClicked.parentElement.parentElement.parentElement.remove()
            updateCartTotal()
        })
    }
}



function updateCartTotal() {
    var cartItemContainer = document.getElementsByClassName('cart-items')[0]
    var cartRows = cartItemContainer.getElementsByClassName('cart-row')
    var total = 0
    for (var i = 0; i < cartRows.length; i++) {
        var cartInfo = cartRows[i]
        var priceElement = cartInfo.getElementsByClassName('cart-price')[0]
        var quantityElement = cartInfo.getElementsByClassName('cart-quantity-input')
        [0]
        console.log(priceElement, quantityElement)
        var price = parseFloat(priceElement.innerText.replace('$', ''))
        total = total + (price * quantity)
        console.log(price)
    }

}