$(function(){

  let students = [
    {name:"田中",age:24,sport:"サッカー"},
    {name:"山田",age:22,sport:"野球"},
    {name:"松本",age:40,sport:"バスケットボール"},
    {name:"山本",age:19,sport:"テニス"},
    {name:"沢田",age:22,sport:"サッカー"}
  ]

  $("#button00").on("click",function(){
    console.log(students)
  })

  $("#button01").on("click",function(){
    $("#content").text(students[0].name + ":" + students[0].sport)
  })

  $("#button02").on("click",function(){
    let students_txt = "";
    for(let i=0; i<students.length; i++){
    students_txt += students[i].name + ":" + students[i].sport + "/"
    }
    $("#content").text(students_txt);    
  })

  $("#button03").on("click",function(){
    let students_txt = "<div class='students>";
    for(let i=0; i<students.length; i++){
    students_txt += `<div id='student${i}' class='student'><p>${students[i].name}</p><p>${students[i].sport}</p><p>${students[i].age}</p></div>`
    }
    students_txt +="</div>";
    
    $("#content").html(students_txt); 
  })




})