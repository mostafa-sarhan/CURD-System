var inputName = document.querySelector("#productName");
var inputPrice = document.querySelector("#productPrice");
var inputCategory =document.querySelector("#productCategory");
var addProductBtn =document.querySelector("#btnAdd");
var updateBtn =document.querySelector("#btn-update");
var bookmarks =[];

var updateIndex=0;

if(localStorage.getItem("product") !==null){
    bookmarks = JSON.parse(localStorage.getItem("product"));
    displayProduct();
}


function addProduct(){
    var bookmark ={
        name:inputName.value,
        price:inputPrice.value,
        category: inputCategory.value
    }
    bookmarks.push(bookmark);
    localStorage.setItem("product" ,JSON.stringify(bookmarks));
    displayProduct();
    clear();
}

function displayProduct(){
    var container =``;
    for(var i =0 ; i<bookmarks.length ; i++){
        container += `
        <tr>
        <th>${i+1}</th>
        <th>${bookmarks[i].name}</th>
        <th>${bookmarks[i].price}</th>
        <th>${bookmarks[i].category}</th>
        <th>
            <button class="btn btn-date pe-2 btn-sm " onclick="update(${i})">
                <i class="fa-solid fa-pen-to-square"></i>
                Update
            </button>
        </th>
        <th>
            <button class="btn btn-delete pe-2 btn-sm" onclick="deleteElement (${i})">
                <i class="fa-solid fa-trash-can"></i>
                Delete
            </button>
        </th>
    </tr>
        `
    }
    document.getElementById("tbody").innerHTML=container;
}

function deleteElement(index){
    bookmarks.splice(index,1);
    localStorage.setItem("product" ,JSON.stringify(bookmarks));
    displayProduct();
}

function clear(){
    inputName.value = null;
    inputPrice.value = null;
    inputCategory.value = null;
}

function update(index){
    // console.log(index);
    inputName.value =bookmarks[index].name;
    inputPrice.value = bookmarks[index].price;
    inputCategory.value = bookmarks[index].category;
    localStorage.setItem("product" ,JSON.stringify(bookmarks));
    addProductBtn.classList.replace('d-block','d-none');
    updateBtn.classList.replace('d-none','d-block');
    updateIndex=index;
}

function updateProduct(){
    console.log("update product");
    bookmarks[updateIndex].name =inputName.value;
    bookmarks[updateIndex].price =inputPrice.value;
    bookmarks[updateIndex].category =inputCategory.value;
    displayProduct();
    localStorage.setItem("product" ,JSON.stringify(bookmarks));
    addProductBtn.classList.replace('d-none','d-block');
    updateBtn.classList.replace('d-block','d-none');
    clear();
}
function clearAll(){
    console.log("clear");
    bookmarks=[];
    displayProduct();
    clear();l
    localStorage.setItem("product" ,JSON.stringify(bookmarks));

}