<!DOCTYPE html>
<html lang="en" xmlns="http://www.w3.org/1999/xhtml">
<head>
	<meta charset="utf-8" />
	<title>Datetimer</title>
	<meta name="generator" content="EverEdit" />
	<meta name="author" content="" />
	<meta name="keywords" content="" />
	<meta name="description" content="" />
	<meta charset="utf-8" />
	<meta content="yes" name="apple-mobile-web-app-capable">
	<meta name="viewport" content="width=device-width,height=device-height,initial-scale=1.0,maximum-scale=1.0">
	<link href="http://libs.baidu.com/bootstrap/3.0.3/css/bootstrap.css" rel="stylesheet">
	<script src="http://libs.baidu.com/jquery/2.0.0/jquery.min.js"></script>

</head>
<body>
<link href="datetime.css" rel="stylesheet">
<script src="datetime.js"></script>
	<div id="datetime">
	<span name="date" id="date"><?=date("Y-m-d H:i")?></span>
</div>

<script>
	$('#date').on('click',function(){
		init(this);
	});
</script>
</body>
</html>