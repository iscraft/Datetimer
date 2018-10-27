# Datetimer
简单的日期时间选择器


![Alt text](https://raw.githubusercontent.com/iscraft/Datetimer/gh-pages/datetimer.png)



使用方法:
```html
	<link href="datetimer.css" rel="stylesheet">
	<input name="time" id="time" readonly = "readonly" value="<?=date("Y-m-d")?>"/>
    <input name="etime" id="etime" readonly = "readonly" value="2017-01-16"/>
    <script src="datetimer.js"></script>
    <script>
    $(function(){
        $('#time').datetimer();
        $('#etime').datetimer();
    });
    </script>
```
或者
```html
	<link href="datetimer.css" rel="stylesheet">
    <input name="time" id="time" readonly = "readonly" value="<?=date("Y-m-d H:i")?>"/>
    <input name="etime" id="etime" readonly = "readonly" value="2017-01-16 12:30"/>
    <script src="datetimer.js"></script>
    <script>
    $(function(){
        $('#time').datetimer();
        $('#etime').datetimer();
    });
    </script>
```
或者
```html
	<link href="datetimer.css" rel="stylesheet">
    <input name="time" id="time" readonly = "readonly" value="<?=date("Y-m-d H:i")?>"/>
    <script src="datetimer.js"></script>
    <script>
    $(function(){
        $('#time').datetimer();
    });
    </script>
```
或者
```html
<input type="text" name="starttime" id="starttime" placeholder="开始时间" value="" autocomplete="off">
<input type="text" name="stoptime" id="stoptime" placeholder="结束时间" value="" autocomplete="off">
$(function() {
	$('#starttime').datetimer({showhm:1});//显示小时分钟
	$('#stoptime').datetimer({showhm:0});//不显示小时分钟
});
```


		2016年1月22日 v0.3 重写datetimer.js,便于调用两个时间
		2016年1月15日 v0.2 判断初始日期中是否包含有时间,可以使用<?=date("Y-m-d H:i")?>或者<?=date("Y-m-d")?>来分别调用两种方式
		2016年12月25日 v0.4 添加pc版 #date_box跟随input
		2018年10月27日 v0.5 在pc版内添加是否显示小时分钟的功能
