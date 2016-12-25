/*!
* Datetimer - v0.3 (2016-01-22)
* https://github.com/iscraft/Datetimer
* Copyright 2005-2016 iscraft.com
*/
function box(val,parent_id){
	if (val){
		var now	= new Date(val.replace(/-/g,"/"));
	}else{
		var now	= new Date();
	}
	year		= now.getFullYear();
	month		= now.getMonth()+1;
	month		= month<10?'0'+month:month;
	day			= now.getDate();
	day			= day<10?'0'+day:day;
	day_number	= getDaysInMonth (year,month);
	hour		= now.getHours();
	min			= now.getMinutes();
	min			= min<10?'0'+min:min;

	window.time	= val.indexOf(" ") >=0 ? true : false;
	var time_element	= window.time == true ? '<ul id="hour"></ul><ul id="min"></ul>' : '';
	
	$('#'+parent_id).append('<div id="date_box"><div id="time_box"></div><ul id="year"></ul><ul id="month"></ul><ul id="day"></ul>'+time_element+'<ul id="action"><li data-action="ok">确定</li><li data-action="now">现在</li><li data-action="cancel">取消</li></ul></div>');

	$('#date_box').css({"top":"0","left":"0"});

	var year_before	= parseInt(year)-2;
	var last_year	= parseInt(year)-1;
	var afya		= '<li data-sn="'+year_before+'">'+year_before+'</li>'+'<li data-sn="'+last_year+'">'+last_year+'</li>';
	var after_year	= '<li data-sn="'+year+'">'+year+'</li>';
	for(var i=1;i<=3;i++){
		var after_year_tmp=parseInt(year)+parseInt(i);
		after_year+=("<li data-sn="+after_year_tmp+">"+after_year_tmp+"</li>");
	}
	year_content=afya+after_year;

	var month_content = '<li data-sn="01">01</li>';
	for(var i=2;i<=12;i++){
		i=i<10?'0'+i:i;
		month_content+=("<li data-sn="+i+">"+i+"</li>");
	}

	day_content = getdayscontent(day_number);

	var hour_content = '';
	for(var i=0;i<=23;i++){
		hour_content+=("<li data-sn="+i+">"+i+"</li>");
	}

	var min_content	= '';
	for(var i=0;i<=59;i++){
		i=i<10?'0'+i:i;
		min_content+=("<li data-sn="+i+">"+i+"</li>");
	}

	$('#year').html(year_content);
	$('#month').html(month_content);
	$('#day').html(day_content);
	$('#hour').html(hour_content);
	$('#min').html(min_content);
	default_select(year,month,day,hour,min);
}
function getDaysInMonth(year,month){
	month		= parseInt(month,10);
	var temp	= new Date(year,month,0);
	return temp.getDate();
}
function getdayscontent(day_number){
	var day_content	= '<li data-sn="01">01</li>';
	for(var i=2;i<=day_number;i++){
		i = i<10?'0'+i:i;
		day_content+=("<li data-sn="+i+">"+i+"</li>");
	}
	return day_content;
}

function default_select(year,month,day,hour,min){
	var year_e	= $('#year li[data-sn='+year+']');
	$(year_e).addClass('select');
	var month_e	= $('#month li[data-sn='+month+']');
	$(month_e).addClass('select');
	var day_e	= $('#day li[data-sn='+day+']');
	$(day_e).addClass('select');
	var hour_e	= $('#hour li[data-sn='+hour+']');
	$(hour_e).addClass('select');
	var min_e	= $('#min li[data-sn='+min+']');
	$(min_e).addClass('select');
	var time_box_text	= window.time==true ? year+'-'+month+'-'+day+' '+hour+':'+min : year+'-'+month+'-'+day;
	$('#time_box').text(time_box_text);
}
//init
(function($) {
	$.fn.datetimer = function() {
		return this.each(function() {
			$(this).click(onclick);
			function onclick() {
				$this = $(this);
				parent_id = $(this).attr("name")+"_"+$(this).attr("id");
				$(this).wrap("<div id="+parent_id+"></div>");
				$('#'+parent_id).css({'display':'inline-block','position':'relative','height':$(this).height()});
				box($this.val(),parent_id);
				
				$('#date_box').show();
				$("body").on("click","#year li",function(){
					$(this).addClass('select');
					$('#year li').not($(this)).removeClass('select');
					year = $(this).text();
					day_content =getdayscontent(getDaysInMonth(year,month));
					$('#day').html(day_content);
					default_select(year,month,day,hour,min);
				});
				$("body").on("click","#month li",function(){
					$(this).addClass('select');
					$('#month li').not($(this)).removeClass('select');
					month = $(this).text();
					day_content =getdayscontent(getDaysInMonth(year,month));
					$('#day').html(day_content);
					default_select(year,month,day,hour,min);
				});
				$("body").on("click","#day li",function(){
					$(this).addClass('select');
					$('#day li').not($(this)).removeClass('select');
					day = $(this).data('sn');
					default_select(year,month,day,hour,min);
				});
				$("body").on("click","#hour li",function(){
					$(this).addClass('select');
					$('#hour li').not($(this)).removeClass('select');
					hour = $(this).data('sn');
					default_select(year,month,day,hour,min);
				});
				$("body").on("click","#min li",function(){
					$(this).addClass('select');
					$('#min li').not($(this)).removeClass('select');
					min = $(this).data('sn');
					default_select(year,month,day,hour,min);
				});

				$("body").on("click","#action li[data-action='cancel']",function(){
					$("#date_box").parent().replaceWith( function(){
						return $(this).contents();
					});
					$('#date_box').hide();
					$('#date_box').remove();
				});
				$("body").on("click","#action li[data-action='ok']",function(){
					var select_datetime = window.time==true ? year+'-'+month+'-'+day+' '+hour+':'+min : year+'-'+month+'-'+day;
					$this.val(select_datetime);
					$("#date_box").parent().replaceWith( function(){
						return $(this).contents();
					});
					$('#date_box').hide();
					$('#date_box').remove();
				});
				$("body").on("click","#action li[data-action='now']",function(){
					var now		= new Date();
					var year	= now.getFullYear();
					var month	= now.getMonth()+1;
					month		= month<10?'0'+month:month;
					var day		= now.getDate();
					day			= day<10?'0'+day:day;
					var hour	= now.getHours();
					var min		= now.getMinutes();
					min			= min<10?'0'+min:min;
					var now_datetime = window.time==true ? year+'-'+month+'-'+day+' '+hour+':'+min : year+'-'+month+'-'+day;

					$this.val(now_datetime);
					$('#date_box').hide();
					default_select();
					$("#date_box").parent().replaceWith( function(){
						return $(this).contents();
					});
					$('#date_box').hide();
					$('#date_box').remove();
					
				});
				return false; 
			}
		});
	}
})(jQuery);
