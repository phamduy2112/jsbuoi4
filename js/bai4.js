// input: khi người dùng nhập 3 cạnh mình sẽ ép kiểu Number và lấy giá trị
// xử lí:đầu tiên Nếu 3 cạnh hoặc 1 cạnh nhỏ hơn 0 thì không phải tam giác và nếu nó lớn hơn 0 , nếu 3 cạnh bằng nhau hết thì là tam giác đều , nếu 2 cạnh bằng nhau thì là tam giác cân, nếu canh1 bình + canh2 bình= canh3 bình thì là tam giác vuông còn lại tam giác thường

//output: xuất ra tam giác

document.getElementById('btnB4').onclick=function(e){
  e.preventDefault();
  var canh1=Number(document.getElementById('numberOne').value);
  var canh2=Number(document.getElementById('numberTwo').value);
  var canh3=Number(document.getElementById('numberThree').value);
  var output='';
  if(canh1>0&&canh2>0&&canh3>0){
    if(canh1===canh2&&canh2===canh3&&canh1===canh3){
 output='Tam giác đều';

      }
    else if(canh1===canh2||canh2===canh3||canh1===canh3){
      output='Tam giác cân';      
    }
    
    else if((canh1*canh1 == canh2*canh2 + canh3*canh3)||(canh2*canh2 ==canh1*canh1 + canh3*canh3)||(canh3*canh3 ==canh1*canh1 + canh2*canh2)){
      output='Tam giác vuông'
    }else{
      output ='Tam giác thường'
      
    }
  }else{
    output ='Không phải tam giác'
  }
 document.getElementById('kq').innerHTML=output;
  }

