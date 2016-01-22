# Datetimer
简单的日期时间选择器


![Alt text](https://raw.githubusercontent.com/iscraft/Datetimer/gh-pages/datetimer.png)



使用方法:
	<pre>
	<code>
    <input name="time" id="time" readonly = "readonly" value="<?=date("Y-m-d")?>"/>
    <input name="etime" id="etime" readonly = "readonly" value="2017-01-16"/>
    <script src="datetime.js"></script>
    <script>
    $(function(){
        $('#time').datetimer();
        $('#etime').datetimer();
    });
    </script>
    </code>
    </pre>
或者
    <input name="time" id="time" readonly = "readonly" value="<?=date("Y-m-d H:i")?>"/>
    <input name="etime" id="etime" readonly = "readonly" value="2017-01-16 12:30"/>
    <script src="datetime.js"></script>
    <script>
    $(function(){
        $('#time').datetimer();
        $('#etime').datetimer();
    });
    </script>
或者
    <input name="time" id="time" readonly = "readonly" value="<?=date("Y-m-d H:i")?>"/>
    <script src="datetime.js"></script>
    <script>
    $(function(){
        $('#time').datetimer();
    });
    </script>

2016年1月22日 v0.3 重写datetime.js,便于调用两个时间
2016年1月15日 v0.2 判断初始日期中是否包含有时间,可以使用<?=date("Y-m-d H:i")?>或者<?=date("Y-m-d")?>来分别调用两种方式
