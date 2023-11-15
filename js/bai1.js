// Bài 1:
// input:lấy được giá trị của người dùng nhập vào và chuyển nó thành number 3 giá trị numberOne,numberTwo,numberThree

//  Xử lí:nếu numberOne lớn hơn numberTwo thì sẽ đổi vị trí vs số bé hơn và tương tự vs number khác

// Output: xuất ra cho người dụng biết thứ tự người dùng tăng dần

document.getElementById('btnB1').onclick=function(e){
  e.preventDefault();
  var numberOne=Number(document.getElementById('numberOne').value);
  var numberTwo=Number(document.getElementById('numberTwo').value);
  var numberThree=Number(document.getElementById('numberThree').value);
  // console.log(numberOne);
  // console.log(numberTwo);
  // console.log(numberThree);
   
var num_One=numberOne
var num_Two=numberTwo
var num_Three=numberThree;


if(numberOne>numberTwo){
num_One=numberTwo;
num_Two=numberOne;
}
else if(numberOne>numberThree){
  num_One=numberThree;
  num_Three=numberOne;
}

else if(numberTwo>numberThree){
  num_Two=numberThree;
  num_Three=numberTwo;
}
document.getElementById('kq').innerHTML='Sắp xếp tăng dần:'+num_One+','+num_Two+','+num_Three
}

