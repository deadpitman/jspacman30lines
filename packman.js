$ = function(id){return document.getElementById(id);}
$t = function(i){return ~~c[i].o.style.top.replace("px","");}
$l = function(i){return ~~c[i].o.style.left.replace("px","");}
$c = function(i, a){return a=='x'?~~(($l(i)-2)/21+1):~~(($t(i)-2)/21+1);}
onload = function(){
	'jffdjffdkjdkmfdkkiciffeckmcibhncifciebfgojeedmdljefdmdmgmffefefh'.split('').reduce(function(p, e, i, a){ return document.body.innerHTML = p += (i==0?'<table cellpadding=0 cellspacing=0 border=0 style="border-collapse:separate;">':'')+((i)%8==0?'<tr>':'')+'<td id="'+(~~(i/8)+1)+'-'+(i%8+1)+'" style="width:20px;height:20px;border:1px solid;border-color:'+((e.charCodeAt(0)-97)&1?'black':'transparent')+' '+((e.charCodeAt(0)-97)&2?'black':'transparent')+'  '+((e.charCodeAt(0)-97)&4?'black':'transparent')+' '+((e.charCodeAt(0)-97)&8?'black':'transparent')+';"><b>*</b></td>'+(i&&(i+1)%8==0?'</tr>':'')+(i==63?'</table><div id="p" style="position:absolute;top:90px;left:90px;width:15px;height:15px;background-color:yellow;border-radius:50%;border:1px solid black;">&nbsp;</div><div id="g1" style="position:absolute;top:2px;left:2px;width:15px;height:15px;background-color:pink;border-radius: 50% 50% 0% 0%; border: 1px solid black;">&nbsp;</div><div id="g2" style="position:absolute;top:156px;left:156px;width:15px;height:15px;background-color:blue;border-radius: 50% 50% 0% 0%; border: 1px solid black;">&nbsp;</div>':'');}, '');
	W = window, C = "clearInterval", K = "keyCode", S = "setInterval" , mv = [{'x':-1, 'y':0, 't':'left'}, {'x':0, 'y':-1, 't':'top'}, {'x':1, 'y':0, 't':'right'}, {'x':0, 'y':1, 't':'bottom'}],  field = "jffdjffdkjdkmfdkkiciffeckmcibhncifciebfgojeedmdljefdmdmgmffefefh", field_html="", PV="getPropertyValue", c = [{'o':$('p'), 'i': 0, 'm':0, 'pd':0}, {'o':$('g1'), 'i': 0, 'm':W[S]('if(c[1].i <= 0) m(1, getDirection(1))', 500), 'pd':0}, {'o':$('g2'), 'i': 0, 'm':W[S]('if(c[2].i <= 0) m(2, getDirection(2))', 500), 'pd':0}]  ;
	W.addEventListener('keydown', function(e){if((c[0].i <= 0) && (e[K]>=37) && (e[K]<=40)) m(0, e[K]-37);},false);
}
function m(i, d){
  if($($c(i, 'y')+"-"+$c(i, 'x')).style.getPropertyValue("border-"+mv[d].t+"-color")=="transparent")
  c[i].m = W[S](function(){
	if(c[i].i>21 && !(c[i].i=0) && (W[C](c[i].m)==undefined)){
		if (i == 0) $(~~(($t(0)-2)/21+1)+"-"+~~(($l(0)-2)/21+1)).innerHTML = "";
		if(document.getElementsByTagName('b').length==0 && alert("VICTORY!")==undefined) [c[1].m, c[2].m].forEach(function(e, i, a){W[C](e);});;
	} else {
		if((c[i].o.style.left = $l(i)+(mv[d].x)+"px") && (c[i].o.style.top = $t(i)+(mv[d].y)+"px") && (c[i].i++) )  c[i].pd = d;
		if((($t(i)>($t(0)-16)) && ($t(i)<($t(0)+16)) && i>0) && (($l(i)>($l(0)-16)) && ($l(i)<($l(0)+16)) && i>0) && alert("Game Over") == undefined) {
			[c[1].m, c[2].m].forEach(function(e, i, a){W[C](e);});
		}
	}
  },20);
}
function getDirection(i){
	var p=[0,1,2,3].filter(function(e,i,a){return (e!=(c[this].pd+2)%4 && $($c(this, 'y')+"-"+$c(this, 'x')).style[PV]("border-"+mv[e].t+"-color")=="transparent")?true:false;}, i);
	return p.length==0?(c[i].pd + 2)%4:p[~~(Math.random()*p.length)];
}