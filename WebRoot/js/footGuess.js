$(function(){
	var divA1 = document.getElementById("append1");
	divA1.innerHTML = '';
	var divA2 = document.getElementById("append2");
	divA2.innerHTML = '';
	var divphoto1 = document.getElementById("divviewphoto1");
	divphoto1.innerHTML = '';
	var divphoto2 = document.getElementById("divviewphoto2");
	divphoto2.innerHTML = '';
	var ConfirmPicture = document.getElementById("ConfirmPicture");
	ConfirmPicture.innerHTML = '';
	$("#Russia").click(function(){
		 divA1.innerHTML = divA1.innerText
         + '<img style="position:absolute; z-index: 2; top: 392px; left: 146px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 divphoto1.innerHTML = divphoto1.innerText
         + '<img src=" images/country/Russia.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
         '<input name="country_sb" value="俄罗斯">';
	});
	$("#SaudiArabia").click(function(){
		 divA1.innerHTML = divA1.innerText
         + '<img style="position:absolute; z-index: 2; top: 392px; left: 376px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
         + '<img src=" images/country/SaudiArabia.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
         '<input name="country_sb" value="沙特阿拉伯">';
	});
	$("#Egypt").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 392px; left: 606px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Egypt.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="埃及">';
	});
	$("#Uruguay").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 392px; left: 837px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Uruguay.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="乌拉圭">';
	});
	
	$("#Portugal").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 596px; left: 146px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Portugal.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="葡萄牙">';
	});
	$("#Spain").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 596px; left: 376px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Spain.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="西班牙">';
	});
	$("#Morocco").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 596px; left: 606px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Morocco.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="摩洛哥">';
	});
	$("#Iran").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 596px; left: 837px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Iran.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="伊朗">';
	});
	
	$("#France").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 800px; left: 146px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/France.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="法国">';
	});
	$("#Australia").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 800px; left: 376px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Australia.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="澳大利亚">';
	});
	$("#Peru").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 800px; left: 606px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Peru.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="秘鲁">';
	});
	$("#Denmark").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 800px; left: 837px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Denmark.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="丹麦">';
	});
	
	$("#Argentina").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 1004px; left: 146px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Argentina.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="阿根廷">';
	});
	$("#Iceland").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 1004px; left: 376px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Iceland.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="冰岛">';
	});
	$("#Croatia").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 1004px; left: 606px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Croatia.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="克罗地亚">';
	});
	$("#Nigeria").click(function(){
		 divA1.innerHTML = divA1.innerText
        + '<img style="position:absolute; z-index: 2; top: 1004px; left: 837px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto1.innerHTML = divphoto1.innerText
        + '<img src=" images/country/Nigeria.jpg" style="position:absolute;top: 1162px;left: 145px;height: 140px;width: 240px; z-index: 5;">'+
        '<input name="country_sb" value="尼日利亚">';
	});
	
	
	
	//下半部分
	$("#Brazil").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 1983px; left: 146px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Brazil.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="巴西">';
	});
	$("#Switzerland").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 1983px; left: 376px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Switzerland.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="瑞士">';
	});
	$("#CostaRica").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 1983px; left: 606px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/CostaRica.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="哥斯达黎加">';
	});
	$("#Serbia").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 1983px; left: 837px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Serbia.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="塞尔维亚">';
	});
	
	$("#Germany").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2187px; left: 146px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Germany.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="德国">';
	});
	$("#Mexico").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2187px; left: 376px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Mexico.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="墨西哥">';
	});
	$("#Sweden").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2187px; left: 606px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Sweden.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="瑞典">';
	});
	$("#Korea").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2187px; left: 837px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Korea.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="韩国">';
	});
	
	$("#Belgium").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2391px; left: 146px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Belgium.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="比利时">';
	});
	$("#Panama").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2391px; left: 376px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Panama.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="巴拿马">';
	});
	$("#Tunisia").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2391px; left: 606px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Tunisia.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="突尼斯">';
	});
	$("#England").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2391px; left: 837px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/England.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="英格兰">';
	});
	
	$("#Poland").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2596px; left: 146px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Poland.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="波兰">';
	});
	$("#Senegal").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2595px; left: 376px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Senegal.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="塞内加尔">';
	});
	$("#Columbia").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2595px; left: 606px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Columbia.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="哥伦比亚">';
	});
	$("#Japan").click(function(){
		 divA2.innerHTML = divA2.innerText
       + '<img style="position:absolute; z-index: 2; top: 2595px; left: 837px; width: 21px; height: 21px" src=" images/footGuess/Redbutton.png">';
		 
		 divphoto2.innerHTML = divphoto2.innerText
       + '<img src=" images/country/Japan.jpg" style="position:absolute;top: 1162px;left: 618px;height: 140px;width: 240px; z-index: 5;">'+
       '<input name="country_xb" value="日本">';
	});
	
	$("#quedingbutton").click(function(){
		var country_sb = $("input[name=country_sb]").val();
		var country_xb = $("input[name=country_xb]").val();
		var jieg = country_sb +"VS"+country_xb;
		if (country_sb != undefined && country_xb != undefined) {
			var paramData = {"jieg":jieg};
			divA1.innerHTML = '';
			divA2.innerHTML = '';
			divphoto1.innerHTML = '';
			divphoto2.innerHTML = '';
			ajaxData(paramData,"footGuess.do");
		}else{
			var tishi = "<span style='font-size:40px;text-align:center;'>你还未选择比赛球队,请返回选择!</span>";
			/*layer.open({
				icon:"2",
				area: ['700px', '400px'],
				
				content:tishi
			});
			*/
			/*layer.msg('<span style="font-size:40px">你还未选择比赛球队,请返回选择!</span>', {
				offset:1,
				shift: 0,
				area: ['100%','100%'],
				time:5000,
				scrollbar: false,
			});*/
			
			layer.open({
			  type: 1,
			  skin: 'layui-layer-demo', //样式类名
			  closeBtn: 0, //不显示关闭按钮
			  anim: 2,
			  area: ['600px', '400px'],
			  shadeClose: true, //开启遮罩关闭
			  content: tishi
			});
		}
		
	
	});
	
});

function ajaxData(dataParam,urls){
	$.ajax({
		type:"post",
		url:urls,
		data:dataParam,
		traditional:true,
		error:function(xhr){
			alert("检索失败，请刷新页面重试"+xhr.status);
		},
		success:function(msg){
			alert(msg)
			
			fixValue(msg);
		}
	});
}

//处理ajax 返回数据
function fixValue(msg){
	
	alert(msg)
	alert(msg.jieg)
	if (msg.result=="success") {
		
		//ConfirmPicture.innerHTML = ConfirmPicture.innerHTML +
		//'<img src=" images/footGuess/SucessPicture.jpg" style="position:absolute;top: 1162px;left: 300px;height: 400px;width: 400px; z-index: 5;">';
		var img = "<img id='offPicture' src='images/footGuess/SucessPicture.jpg' style='height: 100%;width: 100%;' >"; 
		layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			area: ['100%', '100%'],
			//area: '516px',
			skin: 'layui-layer-nobg', //没有背景色
			shadeClose: true,
			content:img
		});
		
		$('#offPicture').on('click', function(){
			  layer.closeAll();
		});
	}else{
		
		//ConfirmPicture.innerHTML = ConfirmPicture.innerHTML +
		//'<img src=" images/footGuess/SucessPicture.jpg" style="position:absolute;top: 1162px;left: 300px;height: 400px;width: 400px; z-index: 5;">';
		var img = "<img id='offPicture' src='images/footGuess/YCPicture.jpg' style='height: 400px;width: 400px;' >"; 
		layer.open({
			type: 1,
			title: false,
			closeBtn: 0,
			area: ['405px', '405px'],
			//area: '516px',
			skin: 'layui-layer-nobg', //没有背景色
			shadeClose: true,
			content:img
		});
		
		$('#offPicture').on('click', function(){
			  layer.closeAll();
		});
	}
	
}