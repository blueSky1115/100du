
$(function () {
//搜索切换
	(function () {
		var aLi = $('#menu li');
		var oText = $('#search').find('.form .text');

		var arrText = [
			'例如：荷棠鱼坊烧鱼 或 樱花日本料理',
			'例如：昌平区育新站龙旗广场2号楼609室',
			'例如：万达影院双人情侣券',
			'例如：东莞出事了，大老虎是谁',
			'例如：北京初春降雪，天气变幻莫测'
		];
		
		//初始化
		var iNow = 0;
		oText.val(arrText[iNow]);//输入框里面的默认显示就等于数组的第0个
		aLi.each(function (index) {
			$(this).click(function () {
				aLi.attr('class','gradient');
				$(this).attr('class','active');

				iNow = index;

				oText.val(arrText[iNow]);

			})
		});


		oText.focus(function () {//获取焦点

			if ($(this).val() == arrText[iNow]){
				$(this).val('');
			}

		});

		oText.blur(function () {//失去焦点

			if ($(this).val() == ''){

				oText.val(arrText[iNow]);

			}

		})

	})();
//搜索切换

	//登录框
	(function () {
		var oTexta = $('.login').find('.form .text');

		oTexta.focus(function () {//获取焦点
			if($(this).val() == oTexta.val()){
				$(this).val('');
			}
		});

		oTexta.blur(function () {//失去焦点
			if($(this).val() == ''){
				$(this).val('请输入用户名');
			}
		})
	})();
	//登录框

	//字体上下切换、滚动
	(function () {
		var oDiv = $('.update');
		var oUl = oDiv.find('ul');
		var iH = 0;
		var arrData = [
			{ 'name':'萱萱', 'time':4, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':5, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':6, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':7, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' },
			{ 'name':'萱萱', 'time':8, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/' },
			{ 'name':'畅畅', 'time':9, 'title':'广东3天抓获涉黄疑犯', 'url':'http://www.miaov.com/2013/#curriculum' },
			{ 'name':'萱萱', 'time':10, 'title':'国台办回应王郁琦', 'url':'http://www.miaov.com/2013/#about' },
			{ 'name':'畅畅', 'time':11, 'title':'那些灿烂华美的瞬间', 'url':'http://www.miaov.com/2013/#message' }
		];

		var str = '';
		var oBtnUp = $('#updateUpBtn');
		var oBtnDown = $('#updateDowBtn');
		var iNow = 0;
		var timer = null;

		for (var i = 0;i<arrData.length;i++){
			str += '<li><a href="+arrData[i].url+"><strong>'+arrData[i].name+'</strong><span>'+arrData[i].time+'分钟前</span>写了一篇新文章：'+arrData[i].title+'...</a></li>';
		}

		oUl.html(str);//初始化

		var iH = oUl.find('li').height();

		oBtnUp.click(function () {
			doMove(-1);
		});
		oBtnDown.click(function () {
			doMove(1);
		});

		//鼠标移动上去停止、移出开始
		// oDiv.hover(function (){
		// 	clearInterval(timer);
		// },autoPlay);
		oDiv.mouseenter(function () {
			clearInterval(timer);
		});
		oDiv.mouseleave(function () {
			autoPlay();
		});
		//鼠标移动上去停止、移出开始

		//自动切换
		function autoPlay() {
			timer = setInterval(function () {
				doMove(-1);
			},2000);
		}
		autoPlay();
		//自动切换

		//运动
		function doMove( num ) {
			iNow += num;
			if (Math.abs(iNow) > arrData.length-1){//往上走的限制判断
				iNow = 0;
			}
			if (iNow > 0){//往下走的限制判断
				iNow = -(arrData.length-1);
			}
			oUl.stop().animate({'top':iH*iNow},2200,'elasticOut');//elasticOut插件文字弹了一下
		}
		//运动

	})();
	//字体上下切换、滚动

//选项卡切换
	(function () {
		fnTab($('.tabNav1'),$('.tabCon1'),'click');
		fnTab($('.tabNav2'),$('.tabCon2'),'click');
		fnTab($('.tabNav3'),$('.tabCon3'),'mouseover');
		fnTab($('.tabNav4'),$('.tabCon4'),'mouseover');

		function fnTab(oNav, aCon, sEvent){//sEvent 作为参数传进来的事件
			var aElem = oNav.children();//children()获取下面所有的li
			aCon.hide().eq(0).show();

			aElem.each(function (index) {

				$(this).on(sEvent,function () {//sEvent 作为参数传进来的事件
					//背景色和渐变色
					aElem.removeClass('active').addClass('gradient');
					$(this).removeClass('gradient').addClass('active');

					//红色箭头
					aElem.find('a').attr('class','triangle_down_gray');
					$(this).find('a').attr('class','triangle_down');

					//选项卡里面的内容
					aCon.hide().eq(index).show();

				})
			})

		}
	})();
//选项卡切换


//焦点图自动播放
	(function () {

		var oDiv = $('#fade');
		var aUILi = oDiv.find('ul li');
		var aOILi = oDiv.find('ol li');
		var oP = oDiv.find('p');
		var arr = [ '爸爸去哪儿啦~', '人像摄影中的光影感', '娇柔妩媚、美艳大方' ];
		var iNow = 0;
		var timer = null;

//第一种自动播放——定时器
		function auotPlay() {
			clearInterval(timer);
			timer = setInterval(function () {
				iNow++;
				iNow%=arr.length;//图片等于数组的长度//这样子就不会跑出去了

				fuFade();
			},2000);
		}

		auotPlay();

		oDiv.mouseenter(function () {//鼠标进去的时候清除定时器
			clearInterval(timer);
		});
		oDiv.mouseleave(function () {//鼠标出去的时候继续调用播放
			auotPlay();
		});

		aOILi.click(function () {
			iNow = $(this).index();
			fuFade();
		});

//第二种自动播放——定时器
		// function auotPlay() {
		// 	clearInterval(timer);
		// 	timer = setInterval(function () {
		// 		if (iNow == aUILi.length - 1){
		// 			iNow = 0;
		// 		}else {
		// 			iNow++;
		// 		}
		// 		fuFade();
		// 	},1000);
		// }
		
		// auotPlay();

		fuFade();
		function fuFade() {
			aUILi.each(function (i) {
				// 这里的iNow会进行切换的，修改iNow就是切换这个
				if (i != iNow){//如果i不等于第0个的话
					aUILi.eq(i).fadeOut().css('zIndex',1);
					aOILi.eq(i).removeClass('active');
				}else {
					aUILi.eq(i).fadeIn().css('zIndex',2);
					aOILi.eq(i).addClass('active');
				}
			});
			oP.html(arr[iNow]);
		}
	})();
//焦点图自动播放


	//日历的提示说明
	(function () {
		var aSpan = $('.calendar h3 span');
		var aImg = $('.calendar .img');
		var oPrompt = $('.today_info');
		var oImg = oPrompt.find('img');
		var oStrong = oPrompt.find('strong');
		var oP = oPrompt.find('p');

		aImg.hover(function () {
			var iTop = $(this).parent().position().top-30;
			var iLeft = $(this).parent().position().left+55;

			var index = $(this).parent().index()%aSpan.size();

			oPrompt.show().css({'left':iLeft,'top':iTop});
			oP.text($(this).attr('info'));//取到文字的
			oImg.attr('src',$(this).attr('src'));//取到图片的src

			oStrong.text(aSpan.eq(index).text());
			
		},function () {
			oPrompt.hide();
		})



	})();

	//日历的提示说明


	//BBS高亮显示
	(function () {
		var oDiv = $('.bbs');
		var oLi = oDiv.find('ol li');

		oLi.mouseover(function () {
			oLi.removeClass('active').eq($(this).index);
		});
		oLi.mouseover(function () {
			$(this).addClass('active');
		})

	})();
	//BBS高亮显示

	//半透明提示层
	(function () {

		var arr = [
			'',
			'用户1<br />人气1',
			'用户名：性感宝贝<br />区域：朝阳CBD<br />人气：124987',
			'用户3<br />人气3',
			'用户4<br />人气4',
			'用户5<br />人气5',
			'用户6<br />人气6',
			'用户7<br />人气7',
			'用户8<br />人气8',
			'用户9<br />人气9',
			'用户10<br />人气10'
		];


		$('.hot_area li').mouseover(function () {

			if ( $(this).index() == 0 ) return;//第一张图片没有移入的效果，如果当前的等于0的话就别往后走了

			$('.hot_area li p').remove();

			$(this).append('<p style="width:'+($(this).width())+'px;height:'+($(this).height()-10)+'px;">'+ arr[$(this).index()] +'</p>');
		});

	})();
	//半透明提示层
});