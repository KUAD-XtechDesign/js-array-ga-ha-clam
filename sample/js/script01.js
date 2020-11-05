$(function(){

  let students = ["田中","山田","松本","山本","沢田"]

  $("#button00").on("click",function(){
    console.log(students)
    $("#content").text(students)
  })

  $("#button01").on("click",function(){
    //console.log(students[0] + students.length)
    $("#content").text("最初のメンバーは" + students[0] + "、人数は" +students.length + "です。");
  })

  $("#button02").on("click",function(){
    $("#content").text(students[2] + "です。")
  })
 
  $("#button03").on("click",function(){
    $("#content").text("最後のメンバーは" + students[4] + "です。")
                                        //(↑students.length-1の値)
  })

  $("#button04").on("click",function(){
    if(students[students.length - 1] == "山下"){
    }else{
      students.push("山下")
    }
    $("#content").text("consoleに「山下」を最後尾に追加しました。")
  })

  $("#button05").on("click",function(){
　　students = students.reverse()
  })

  $("#button06").on("click",function(){
    students=[];
  })

})