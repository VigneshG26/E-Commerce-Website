var addItemId = 0;

function addToCart(item){

    addItemId +=1;

    var selectedItem = document.createElement('div');
    selectedItem.classList.add('cartImg');    
    selectedItem.setAttribute('id',addItemId);

    var img = document.createElement('img');
    img.setAttribute('src',item.children[0].currentSrc);

    var title = document.createElement('div');
    title.innerText = item.children[1].innerText;

    var label = document.createElement('div');
    label.innerText = item.children[2].children[0].innerText;

    var select = document.createElement('span');
    select.innerText = item.children[2].children[1].value;
    label.append(select);
    

    var delBtn = document.createElement('button');
    delBtn.innerText = "Delete";
    delBtn.setAttribute('onclick','del('+addItemId+')');

    var buyBtn = document.createElement('button');
    buyBtn.innerText = "Buy Now";
    buyBtn.setAttribute('onclick','bn()');

    var cartItems = document.getElementById('title');
    selectedItem.append(img);
    selectedItem.append(title);
    selectedItem.append(label);
    selectedItem.append(label);
    selectedItem.append(delBtn);
    cartItems.append(selectedItem);
    selectedItem.append(buyBtn);
    }

function del(item){
    document.getElementById(item).remove();
}
function bn(){
   // var rate=document.getElementById(rate);
    var amt1 = document.getElementById("amtt");
    var aa = amt1.innerHTML;
    localStorage.setItem("textvalue",aa);
    window.location.href = "checkout.html";
    
    // document.getElementById("amt").innerHTML = localStorage.getItem("amt1");

  }

