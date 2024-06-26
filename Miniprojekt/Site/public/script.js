function addToCart(dishID){
    fetch('/addtocart',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({dishID: dishID})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
        }else{
            alert('Failed to add item to cart!');
        }
    })
    .catch((error) => {
        console.error('Error: ',error);
        alert("An error occured while adding the item to the cart.");
    })
}
function callSupplierOrder(productID){
    console.log(productID);
    fetch('/callsupplierorder',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({productID: productID})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
        }else{
            alert('Failed to call supplier!');
        }
    }
    )
    .catch((error) => {
        console.error('Error: ',error);
        alert("An error occured while calling the supplier.");
    }
    )
}


function clearCart(){
    fetch('/clearcart',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            window.location.reload();
        }else{
            alert('Failed to clear the cart!');
        }
    })
    .catch((error) => {
        console.error('Error: ',error);
        alert("An error occured while clearing the cart.");
    })
}

function deleteProduct(itemID){
    fetch('/deleteproduct',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({itemID: itemID})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            window.location.reload();
        }else{
            alert('Failed to delete the product!');
        }
    })
    .catch((error) => {
        console.error('Error: ',error);
        alert("An error occured while clearing the cart.");
    })
}

function cancelReservation(reservationID){
    console.log(reservationID);
    fetch('/cancelreservation',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({reservationID: reservationID})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            window.location.reload();
        }else{
            alert('Failed to cancel the reservation!');
        }
    })
    .catch((error) => {
        console.error('Error: ',error);
        alert("An error occured while canceling the reservation.");
    })
}

function makeOrder(){
    fetch('/makeorder',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify()
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            alert('Order made successfully!');
            window.location.reload();
        }else{
            alert('The cart is empty!');
        }
    })
    .catch((error) => {
        console.error('Error: ',error);
        alert("An error occured while making order.");
    })
}

function orderDelivered(orderID,clientID){
    fetch('/deliverorder',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({orderID: orderID, clientID: clientID})
    })
    .then(response => response.json())
    .then(data => {
        if(data.success){
            alert('Delivered!');
            window.location.reload();
        }else{
            alert('Couldnt set as delivered!');
        }
    })
    .catch((error) => {
        console.error('Error: ',error);
        alert("An error occured while seting order to delivered.");
    })
}