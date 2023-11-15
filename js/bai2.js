// input: khi người dùng nhập vào bản chữ ccai1 B M A E thì lấy kí tự đó còn lại sẽ xuất cho người dùng Mời bạn nhập lại
// xử lí người dùng nhập B=> Bố,M=>Mẹ,A=>Anh trai , E=>Em gái
// output: xuất ra cho người dùng biết mình nhập chữ cái nào trong 4 cái trên

document.getElementById('btnB2').onclick=function(e){
  e.preventDefault();
  var text=document.getElementById('chaohoi').value;
  console.log(text);
  var output='';
  switch(text){
    case "B":
      output='Chào Bố';
      break;
    case "M":
      output='Chào Mẹ'
      
      break;
    case "A":
      output='Chào Anh trai'
     
      break;
    case "E":
      output='Chào em gái'
      
      break;
    default:
      output='Mời bạn nhập lại B M A E';
  }
  document.getElementById('kq').innerHTML=output;
}