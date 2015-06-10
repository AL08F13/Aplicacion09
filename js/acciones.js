// JavaScript Document
$(document).ready(function(e) {
document.addEventListener("deviceready",function(){
	function cargarnombrejugador()
	{
		basedatos.transaction(function(ejecutar){
			var sql="SELECT NombreUsuario FROM Usuario";
			ejecutar.executesql(sql,undefined,function(ejecutar,resultado){
				var datosjugador=resultado.row.item(0);
				$('#jugador').text(datosjugador.NombreUsuario);
			});
		});
	}
	var basedatos=window.sqliteplugin.openDatabase({name: "coloresBD.db",createFromLocation:1});
	audio=window.plugins.LowLatencyAudio;
	audio.preloadFX('B1','audio/C.mp3',function(){},function(msg){alert("error "+msg);});
	audio.preloadFX('B2','audio/D.mp3',function(){},function(msg){alert("error "+msg);});
	audio.preloadFX('B3','audio/E.mp3',function(){},function(msg){alert("error "+msg);});
	audio.preloadFX('B4','audio/F.mp3',function(){},function(msg){alert("error "+msg);});
	$('#btnjugar').on('tap', function(){ 
		var pantalla=$.mobile.getScreenHeight();
		var encabezado=$('.ui-header').outerHeight();
		var pie=$('.ui-footer').outerHeight();
		var contenido=$('.ui-content').outerHeight();
		var alto=(pantalla-encabezado-pie)/2;
		$('.cuadro').height( alto);	
	});
	
	 // $('.cuadro').on('vmousedown',function (){
	  $('#pantalla').append(quien($(this).attr('id')));
		$(this).addClass('pulsado');
});
	$('.cuadro').on('vmouseup',function (){
		$(this).removeClass('pulsado');
		//}); 
		
		function quien (q)
		{
			audio.play(q);
			return q.substring(1);
		}
		$('btnconfigurar').on('tap',function(){
			$('#txtnombre').val($('#jugador').text());
		});
		$('#btnguardar').on('tap',function(){
			var nuevonombre=$('#txtnombre').val();
			basedatos.transaction(function(colsulta){
		consulta.exejuteSql("UPDATE Usuario SET NombreUsuario=? WHERE ClaveUsuario='1';",[nuevonombre]);
		cargarnombrejugador();	
		function flash(boton)
		{
			boton.stop(),animate({opacity:'0.5'},{
				duration:80,
				complete:function(){
					boton.stop().animate({opacity:'1'},200);
				}
			});
		}
	$('.cuadro').on('tap',function(){
		flash ($(this));
		audio.play($(this).attr('id'));
		});
	
});
});
});
});
