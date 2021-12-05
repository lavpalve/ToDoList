
var addItem;
var editItem;
var deleteItem;
var i = 1;

addItem = () =>{
    var createItemRow = document.createElement("div");
    var inputTextValue = document.getElementById("inputBox").value;
    createItemRow.className = 'row justify-content-center mt-4';
    createItemRow.id = i;
    createItemRow.innerHTML = '<div class="col-11  bg-success py-2 rounded">'+
                              '<div class="row listRow">'+
                              '<div class="col-8">'+
                              '<input type="text" id="inputBox'+i+'" class="form-control" value="'+inputTextValue+'" disabled>'+
                              '</div>'+
                              '<div class="col-2">'+
                              '<button type="submit" onclick="editItem('+i+')" class="btn btn-warning">'+
                              '<i class="fa fa-pencil-square-o" aria-hidden="true"></i>'+
                              '</button>'+
                              '</div>'+
                              '<div class="col-2">'+
                              '<button type="submit" onclick="deleteItem('+i+')" class="btn btn-danger">'+
                              '<i class="fa fa-trash" aria-hidden="true"></i>'+
                              '</button>'+
                              '</div>'+
                              '</div>';
    var parentDiv = document.getElementById("mainDiv");
    parentDiv.append(createItemRow);
    i++;
}

editItem = (editItemId) =>{
    console.log(editItemId);
    document.getElementById('inputBox'+editItemId).removeAttribute("disabled");
    document.getElementById('inputBox'+editItemId).focus();
}

deleteItem = (editItemId) =>{
    document.getElementById(editItemId).remove();
}