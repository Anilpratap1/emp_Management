var empDataArray = [];


$("#empFormSubmit").click(a => {
    var fName = $("#fName").val();
    var lName = $("#lName").val();
    var email = $("#email").val();
    var pwd = $("#pwd").val();


    var empData = {
        fName: fName,
        lName: lName,
        email: email,
        pwd: pwd
    }

  

    empDataArray.push(empData);
    console.log(empDataArray);

    clearField();
    Swal.fire({
        title: "Employee Data has been stored",
        text: "You clicked the button!",
        icon: "success"
      });


  renderTable();
    
}); 

$('body').on('click','.btn-danger',function(){
  var id=$(this).attr("id") 
  empDataArray.pop(a=>a.email==id);  
  renderTable();
  
})
 
 function renderTable(){ 
   var empHtmlString = ""; 
   empDataArray.forEach(a => {
    empHtmlString  += "<tr>"
    empHtmlString  += "<td>"+ a.fName+"</td>" 
    empHtmlString  += "<td>"+ a.lName+"</td>" 
    empHtmlString  += "<td>"+ a.email+"</td>"
    empHtmlString  += "<td>"+ a.pwd+"</td>"
    empHtmlString  += `<td> <button id="${a.email}" class="btn-lg btn btn-danger fa fa-trash"></button></td>`
    empHtmlString  += "</tr>"
  })
  
$("#empData").html(empHtmlString); 

 }
function clearField()   {
    $("#fName").val("");
    $("#lName").val("");
    $("#email").val("");
    $("#pwd").val("");
}
