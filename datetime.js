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

function default_select(){
	if (year_tmp==undefined){
		var year_e=$('#year li[data-sn='+year+']');
		$(year_e).addClass('select');
		year_tmp	= year;
	}else{
		var year_e=$('#year li[data-sn='+year_tmp+']');
		$(year_e).addClass('select');
	}
	if (month_tmp==undefined){
		var month_e=$('#month li[data-sn='+month+']');
		$(month_e).addClass('select');
		month_tmp	= month;
	}else{
		var month_e=$('#month li[data-sn='+month_tmp+']');
		$(month_e).addClass('select');
	}
	if (day_tmp==undefined){
		var day_e=$('#day li[data-sn='+day+']');
		$(day_e).addClass('select');
		day_tmp		= day;
	}else{
		var day_e=$('#day li[data-sn='+day_tmp+']');
		$(day_e).addClass('select');
	}
	if (hour_tmp==undefined){
		var hour_e=$('#hour li[data-sn='+hour+']');
		$(hour_e).addClass('select');
		hour_tmp	= hour;
	}else{
		var hour_e=$('#hour li[data-sn='+hour_tmp+']');
		$(hour_e).addClass('select');
	}
	if (min_tmp==undefined){
		var min_e=$('#min li[data-sn='+min+']');
		$(min_e).addClass('select');
		min_tmp		= min;
	}else{
		var min_e=$('#min li[data-sn='+min_tmp+']');
		$(min_e).addClass('select');
	}
	var time_box_text	= window.time==true ? year_tmp+'-'+month_tmp+'-'+day_tmp+' '+hour_tmp+':'+min_tmp : year_tmp+'-'+month_tmp+'-'+day_tmp;
	$('#time_box').text(time_box_text);
}
//
function init (e){
	window.e	= e;
	var time_str= $(window.e).text();
	window.time	= time_str.indexOf(" ") >=0?true:false;
	var time_element	= window.time== true ? '<ul id="hour"></ul><ul id="min"></ul>' : '';
	$(e).before('<input type="hidden" name="date" id="date" value="">');
	$('#date').val($(e).text());
	$(e).after('<div id="date_box"><div id="time_box"></div><ul id="year"></ul><ul id="month"></ul><ul id="day"></ul>'+time_element+'<ul id="action"><li data-action="ok">确定</li><li data-action="now">现在</li><li data-action="cancel">取消</li></ul></div>');
}
$("body").on("click","#time",function(){
	$('#date_box').show();
	var box_width;
	box_width	= $(window.e).parent().width()==$('body').width()?($(window.e).parent().width()-300)/2:($(window.e).parent().width()-300)/2+10;

	$('#date_box').css({"left":box_width,"top":"30%"});
	year_tmp	= undefined;
	month_tmp	= undefined;
	day_tmp		= undefined;
	hour_tmp	= undefined;
	min_tmp		= undefined;
	//
	var dtstr	= $(window.e).text();
	if (dtstr){
		var now	= new Date(dtstr.replace(/-/g,"/"));
	}else{
		var now	= new Date();
	}
	year		= now.getFullYear();
	month		= now.getMonth()+1;
	month		= month<10?'0'+month:month;
	day			= now.getDate();
	day			= day<10?'0'+day:day;
	hour		= now.getHours();
	min			= now.getMinutes();
	min			=min<10?'0'+min:min;
	//
	$('#year').html(year_content);
	$('#month').html(month_content);
	$('#day').html(day_content);
	$('#hour').html(hour_content);
	$('#min').html(min_content);
	default_select();
});
//
var current		= new Date();
var year		= current.getFullYear();
var month		= current.getMonth()+1;
var day_number	= getDaysInMonth (year,month);
var day			= current.getDate();
var hour		= current.getHours();
var min			= current.getMinutes();
//
var year_before	= parseInt(year)-2;
var last_year	= parseInt(year)-1;
var afya		= '<li data-sn="'+year_before+'">'+year_before+'</li>'+'<li data-sn="'+last_year+'">'+last_year+'</li>';
var after_year	= '<li data-sn="'+year+'">'+year+'</li>';
for(var i=1;i<=3;i++){
	var after_year_tmp=parseInt(year)+parseInt(i);
	after_year+=("<li data-sn="+after_year_tmp+">"+after_year_tmp+"</li>");
}
year_content=afya+after_year;

//
var month_content = '<li data-sn="01">01</li>';
for(var i=2;i<=12;i++){
	i=i<10?'0'+i:i;
	month_content+=("<li data-sn="+i+">"+i+"</li>");
}
//
day_content = getdayscontent(day_number);
//
var hour_content = '';
for(var i=0;i<=23;i++){
	hour_content+=("<li data-sn="+i+">"+i+"</li>");
}
//
var min_content	= '';
for(var i=0;i<=59;i++){
	i=i<10?'0'+i:i;
	min_content+=("<li data-sn="+i+">"+i+"</li>");
}
var year_tmp;
var month_tmp;
var day_tmp;
var hour_tmp;
var min_tmp;

$("body").on("click","#year li",function(){
	$(this).addClass('select');
	$('#year li').not($(this)).removeClass('select');
	year_tmp = $(this).text();
	day_content =getdayscontent(getDaysInMonth(year_tmp,month_tmp));
	$('#day').html(day_content);
	default_select();
});
$("body").on("click","#month li",function(){
	$(this).addClass('select');
	$('#month li').not($(this)).removeClass('select');
	month_tmp = $(this).text();
	day_content =getdayscontent(getDaysInMonth(year_tmp,month_tmp));
	$('#day').html(day_content);
	default_select();
});
$("body").on("click","#day li",function(){
	$(this).addClass('select');
	$('#day li').not($(this)).removeClass('select');
	day_tmp = $(this).data('sn');
	default_select();
});
$("body").on("click","#hour li",function(){
	$(this).addClass('select');
	$('#hour li').not($(this)).removeClass('select');
	hour_tmp = $(this).data('sn');
	default_select();
});
$("body").on("click","#min li",function(){
	$(this).addClass('select');
	$('#min li').not($(this)).removeClass('select');
	min_tmp = $(this).data('sn');
	default_select();
});
$("body").on("click","#action li",function(){
	if ($(this).data('action')=='cancel'){
		$('#date_box').hide();
	}
	if ($(this).data('action')=='now'){
		var now		= new Date();
		var year	= now.getFullYear();
		var month	= now.getMonth()+1;
		month		= month<10?'0'+month:month;
		var day		= now.getDate();
		day			= day<10?'0'+day:day;
		var hour	= now.getHours();
		var min		= now.getMinutes();
		min			= min<10?'0'+min:min;
		var now_datetime=window.time==true?year+'-'+month+'-'+day+' '+hour+':'+min:year+'-'+month+'-'+day;
		$(window.e).text(now_datetime);
		$('#date').val(now_datetime);
		$('#date_box').hide();
		default_select();
	}
	if ($(this).data('action')=='ok'){
		var select_datetime=window.time==true?year_tmp+'-'+month_tmp+'-'+day_tmp+' '+hour_tmp+':'+min_tmp:year_tmp+'-'+month_tmp+'-'+day_tmp;
		$(window.e).text(select_datetime);
		$('#date').val(select_datetime);
		$('#date_box').hide();
	}
});