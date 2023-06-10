var integerNum=[]
document.getElementById('addNum').onclick= function(){
	integerNum.push(document.getElementById('integerNum').value)
	document.getElementById("arrayNum").innerHTML=integerNum.join(", ")
}

// Câu 1
document.getElementById('btnPosTotal').onclick= function(){
	var sum=0;
	for(var i=0; i< integerNum.length;i++){
		if(integerNum[i]>0){
			sum+= +integerNum[i]
		}
	}
	document.getElementById('posTotal').innerHTML=sum;
}

// Câu 2
document.getElementById('btnPosNum').onclick= function(){
	var sum=0;
	for(var i=0; i< integerNum.length;i++){
		if(integerNum[i]>0){
			sum+=1
		}
	}
	document.getElementById('posNum').innerHTML=sum;
}

// Câu 3
document.getElementById('btnminimum').onclick= function(){
	var minimum=+integerNum[0];
	for(var i=1; i< integerNum.length;i++){
		if(minimum>=+integerNum[i]){
			minimum=integerNum[i]
		}
	}
	document.getElementById('minimumNum').innerHTML=minimum;
}

// Câu 4
document.getElementById('btnPosMinimum').onclick= function(){
	var posNum=[]
	for(var i=1; i< integerNum.length;i++){
		if(integerNum[i]>0){
		posNum.push(integerNum[i])
		}
	}
	if(posNum.length===0){
		document.getElementById('posMinimum').innerHTML="Mảng không có số dương";
		return;
	}
	var minimum=+posNum[0];
	for(var i=1; i< posNum.length;i++){
		if(minimum>=+posNum[i]){
			minimum=posNum[i]
		}
	}
	document.getElementById('posMinimum').innerHTML=minimum;
}

// Câu 5
document.getElementById('btnLastEven').onclick= function(){
	var even;
	var flag=false;
	for(var i=1; i< integerNum.length;i++){
		if(integerNum[i]%2===0){
			flag=true
		even=integerNum[i];
		}
	}
	if(!flag){
		document.getElementById('lastEven').innerHTML="Mảng không có số chẵn";
		return	
	}

	document.getElementById('lastEven').innerHTML=even;
}

// Câu 6
document.getElementById('btnConvert').onclick= function(){
	var place1=+document.getElementById('place1').value
	var place2=+document.getElementById('place2').value
	var value1=integerNum[place1];
	integerNum[place1]=integerNum[place2]
	integerNum[place2]=value1

	document.getElementById('convertNum').innerHTML=integerNum;
}

// Câu 7
document.getElementById('btnIncrea').onclick= function(){
	var arr = integerNum
	for (var k = arr.length - 1; k >= 0; k--) {
	  var isSwapped = false;
  
	  for (var i = 0; i < k; i++) {

		if (+arr[i] > +arr[i + 1]) {
		  var temp = arr[i];
		  arr[i] = arr[i + 1];
		  arr[i + 1] = temp;
		  isSwapped = true;
		}
	  }
  
	  if (!isSwapped) {
		document.getElementById("increaNum").innerHTML=arr
		return;
	  }
	}
  
	document.getElementById("increaNum").innerHTML=arr
}

// Câu 8
document.getElementById('btnElement').onclick= function(){
	for(var i=0;i<integerNum.length;i++){
		var integer=true;
		if(integerNum[i]==2){
			document.getElementById("firstElement").innerHTML= integerNum[i]
			return
		}
		
		if(integerNum[i]>2){

			for(var k=2; k< +integerNum[i];k++){
				if(+integerNum[i]%k==0){
					integer=false
				}
			}
			if(integer==true){
			document.getElementById("firstElement").innerHTML= integerNum[i]
			return}
		}
	}
	document.getElementById("firstElement").innerHTML= "Không có số nguyên tố"
}

// Câu 9

var realNum=[]
document.getElementById('btnRealPlus').onclick= function(){
	realNum.push(document.getElementById('realNumPlus').value)
	document.getElementById("arrayRealNum").innerHTML=realNum.join(", ")
}

document.getElementById('btnReal').onclick= function(){
	var count=0;
	for(var i=0; i<realNum.length;i++){
		if(Number.isInteger(+realNum[i])===true){
			count++
			
		}
	}
	document.getElementById("realNum").innerHTML=count
}

// Câu 10
document.getElementById('btnCompare').onclick= function(){
	var pos=0;
	var nag=0;
	for(var i=0;i<integerNum.length;i++){
		if(integerNum[i]<0){
			nag++
		}else if(integerNum[i]>0){
			pos++
		}
	}
	if(nag>pos){
		document.getElementById("compareNum").innerHTML="Số âm nhiều hơn số dương" 
	}
	else if(nag<pos){
		document.getElementById("compareNum").innerHTML="Số dương nhiều hơn số âm" 
	}
	else{
		document.getElementById("compareNum").innerHTML="Số dương bằng số âm" 

	}
}
