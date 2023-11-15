// input: Khi người dùng nhập 3 số nguyên , ép chuỗi thành number và lấy giá trị người dụng nhập
// xử lí:từng số nguyên của người dùng nhập vào xem có chia hết cho 2 không nếu có thì tăng lên soChan tăng 1 và số lẽ nếu không chia hết cho 2 thì soLe tăng lên 1

// output:xuất cho người dùng biết: số chẵn có bao nhiêu số và số lẻ cũng có bao nhiêu số 

document.getElementById('btnB3').onclick=function(e){
  e.preventDefault();
  var numberOne=Number(document.getElementById('numberOne').value);
  var numberTwo=Number(document.getElementById('numberTwo').value);
  var numberThree=Number(document.getElementById('numberThree').value);
  soChan=0;
  soLe=0;

  numberOne%2==0?soChan++:soLe++;
  numberTwo%2==0?soChan++:soLe++;
  numberThree%2==0?soChan++:soLe++;
  console.log(numberOne);
  console.log(numberTwo);
  console.log(numberThree);
  console.log(soChan,soLe);
  document.getElementById('kq').innerHTML='Số chẵn là: '+soChan+' Số lẻ là: '+soLe;
}
