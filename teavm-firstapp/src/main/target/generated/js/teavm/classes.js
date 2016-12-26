"use strict";
function $rt_cls(cls){return A(cls);}
function $rt_str(str) {if (str===null){return null;}var characters = $rt_createCharArray(str.length);var charsBuffer = characters.data;for (var i = 0; i < str.length; i = (i + 1) | 0) {charsBuffer[i] = str.charCodeAt(i) & 0xFFFF;}return B(characters);}
function $rt_ustr(str) {var result = "";var sz = C(str);var array = $rt_createCharArray(sz);D(str, 0, sz, array, 0);for (var i = 0; i < sz; i = (i + 1) | 0) {result += String.fromCharCode(array.data[i]);}return result;}
function $rt_objcls() { return E; }
function $rt_nullCheck(val) {if (val === null) {$rt_throw(F());}return val;}
function $rt_intern(str) {return G(str);}
function $rt_getThread(){return H();}
function $rt_setThread(t){return I(t);}
var TF=$rt_throw;var UF=$rt_compare;var VF=$rt_nullCheck;var WF=$rt_cls;var XF=$rt_createArray;var YF=$rt_isInstance;var ZF=$rt_nativeThread;var AG=$rt_suspending;var BG=$rt_resuming;var CG=$rt_invalidPointer;
function E(){}
function N(){var a=this;E.call(a);a.W=false;a.O=false;a.H=null;}
function S(){N.call(this);}
function P(){S.call(this);}
function IB(){P.call(this);}
function M(){E.call(this);}
function LB(){E.call(this);}
function PB(){E.call(this);}
function OB(){E.call(this);}
function AB(){E.call(this);}
function YB(){E.call(this);}
function K(){E.call(this);}
function YC(){K.call(this);}
function V(){E.call(this);}
V.E=null;V.qB=null;V.S=null;function XB(){E.call(this);}
function JC(){S.call(this);}
function EB(){N.call(this);}
function Q(){EB.call(this);}
function O(){Q.call(this);}
function DD(){O.call(this);}
function L(){E.call(this);}
function BC(){E.call(this);}
function R(){var a=this;E.call(a);a.C=null;a.o=Long_ZERO;a.lB=null;a.L=Long_ZERO;a.v=null;}
R.yB=0;R.j=null;R.z=null;R.iB=Long_ZERO;function TB(){E.call(this);}
function HB(){E.call(this);}
function QC(){E.call(this);}
function DB(){E.call(this);}
function RB(){E.call(this);}
function ZC(){IB.call(this);}
function CB(){K.call(this);this.sB=null;}
function U(){E.call(this);}
function MB(){E.call(this);}
function Y(){var a=this;E.call(a);a.p=null;a.dB=null;}
function CD(){var a=this;Y.call(a);a.P=null;a.l=0;}
function VB(){E.call(this);}
function KC(){E.call(this);}
function W(){E.call(this);}
function J(){E.call(this);this.w=null;}
J.M=null;J.B=null;J.uB=null;J.bB=null;J.R=null;J.i=null;J.F=null;function ZB(){E.call(this);}
function TC(){J.call(this);}
function FB(){E.call(this);}
function MC(){FB.call(this);}
function JB(){E.call(this);}
function SB(){E.call(this);}
function QB(){E.call(this);}
function UB(){E.call(this);}
function KB(){E.call(this);}
function Z(){E.call(this);}
function AC(){var a=this;Z.call(a);a.n=0;a.aB=0.0;a.U=null;a.N=0;a.Z=0;}
function WC(){E.call(this);}
function GC(){E.call(this);}
function NB(){E.call(this);}
function WB(){E.call(this);}
function RC(){E.call(this);}
function AD(){E.call(this);}
function GB(){E.call(this);}
function T(){var a=this;E.call(a);a.x=null;a.D=null;}
T.m=null;function CC(){E.call(this);}
function X(){P.call(this);}
function BD(){X.call(this);this.f=null;}
function BB(){var a=this;E.call(a);a.d=null;a.q=0;}
BB.A=null;BB.pB=null;function FC(){Q.call(this);}
function NC(){var a=this;CB.call(a);a.I=null;a.J=false;a.wB=null;a.u=null;}
function PC(){O.call(this);}
function DC(){E.call(this);}
function XC(){K.call(this);}
function UC(){T.call(this);}
function LC(){var a=this;E.call(a);a.G=false;a.zB=null;}
function DG(){var $r=new E();IE($r);return $r;}
function HE($t){var a,b,c;if(YF($t,HB)==0&&$t.constructor.$meta.item===null){TF(EG());}a=PF($t);b=a;c=RF();b.$id=c;return a;}
function IE($t){var a,b;a=$t;b=RF();a.$id=b;return;}
function FG(a){var $r=new N();YE($r,a);return $r;}
function GG(){var $r=new N();GE($r);return $r;}
function YE($t,a){$t.W=1;$t.O=1;DF($t);$t.H=a;return;}
function DF($t){return $t;}
function GE($t){$t.W=1;$t.O=1;DF($t);return;}
function HG(){var $r=new S();GF($r);return $r;}
function GF($t){GE($t);return;}
function IG(){var $r=new P();ID($r);return $r;}
function ID($t){GF($t);return;}
function JG(){var $r=new IB();JF($r);return $r;}
function JF($t){ID($t);return;}
function KG(){var $r=new K();ED($r);return $r;}
function ED($t){IE($t);return;}
function LG(){var $r=new YC();CF($r);return $r;}
function CF($t){ED($t);return;}
function V_$clinit(){V_$clinit=function(){};
WD=function(){return Long_fromNumber(new Date().getTime());};
TD=function(){V.S=MG(LG(),0);V.E=MG(NG(),0);V.qB=OG();return;};
TD();}
function EG(){var $r=new JC();NE($r);return $r;}
function NE($t){GF($t);return;}
function PG(a){var $r=new EB();HD($r,a);return $r;}
function HD($t,a){YE($t,a);return;}
function QG(a){var $r=new Q();XE($r,a);return $r;}
function XE($t,a){HD($t,a);return;}
function RG(a){var $r=new O();OE($r,a);return $r;}
function OE($t,a){XE($t,a);return;}
function SG(a){var $r=new DD();HF($r,a);return $r;}
function HF($t,a){OE($t,a);return;}
function MF(){return window.document;}
function R_$clinit(){R_$clinit=function(){};
H=function(){return R.z;};
BE=function(){return R.j;};
SC=function($t,a,b){IE($t);$t.v=DG();$t.lB=b;$t.C=a;b=R.iB;R.iB=Long_add(b,Long_fromInt(1));$t.L=b;return;};
I=function(a){if(R.z!==a){R.z=a;}R.z.o=WD();return;};
VC=function($t,a){SC($t,null,a);return;};
ND=function(){R.j=TG(JD($rt_s(0)));R.z=R.j;R.iB=Long_fromInt(1);R.yB=1;return;};
ND();}
function UG(a,b){var $r=new R();SC($r,a,b);return $r;}
function TG(a){var $r=new R();VC($r,a);return $r;}
function VG(){var $r=new ZC();LF($r);return $r;}
function LF($t){JF($t);return;}
function WG(a){var $r=new CB();FF($r,a);return $r;}
function FF($t,a){ED($t);$t.sB=a;return;}
function XG(a,b){var $r=new Y();JE($r,a,b);return $r;}
function JE($t,a,b){IE($t);$t.dB=a;$t.p=b;return;}
function YG(a,b){var $r=new CD();SE($r,a,b);return $r;}
function SE($t,a,b){JE($t,a,null);$t.l=b;return;}
function ZG(){var $r=new KC();GD($r);return $r;}
function GD($t){IE($t);return;}
function J_$clinit(){J_$clinit=function(){};
OC=function($t){HC($t,16);return;};
HC=function($t,a){IE($t);$t.w=$rt_createCharArray(a);return;};
AE=function(){var a,b,c,d,e,f,g,h;a=$rt_createFloatArray(6);b=a.data;b[0]=10.0;b[1]=100.0;b[2]=10000.0;b[3]=1.0E8;b[4]=1.00000003E16;b[5]=1.0E32;J.M=a;c=$rt_createDoubleArray(9);d=c.data;d[0]=10.0;d[1]=100.0;d[2]=10000.0;d[3]=1.0E8;d[4]=1.0E16;d[5]=1.0E32;d[6]=1.0E64;d[7]=1.0E128;d[8]=1.0E256;J.B=c;a=$rt_createFloatArray(6);b=a.data;b[0]=0.1;b[1]=0.01;b[2]=1.0E-4;b[3]=1.0E-8;b[4]=1.0E-16;b[5]=1.0E-32;J.bB=a;c=$rt_createDoubleArray(9);d=c.data;d[0]=0.1;d[1]=0.01;d[2]=1.0E-4;d[3]=1.0E-8;d[4]=1.0E-16;d[5]=1.0E-32;d[6]
=1.0E-64;d[7]=1.0E-128;d[8]=1.0E-256;J.R=c;e=$rt_createIntArray(10);f=e.data;f[0]=1;f[1]=10;f[2]=100;f[3]=1000;f[4]=10000;f[5]=100000;f[6]=1000000;f[7]=10000000;f[8]=100000000;f[9]=1000000000;J.uB=e;g=$rt_createLongArray(19);h=g.data;h[0]=Long_fromInt(1);h[1]=Long_fromInt(10);h[2]=Long_fromInt(100);h[3]=Long_fromInt(1000);h[4]=Long_fromInt(10000);h[5]=Long_fromInt(100000);h[6]=Long_fromInt(1000000);h[7]=Long_fromInt(10000000);h[8]=Long_fromInt(100000000);h[9]=Long_fromInt(1000000000);h[10]=new Long(1410065408, 2);h[11]
=new Long(1215752192, 23);h[12]=new Long(3567587328, 232);h[13]=new Long(1316134912, 2328);h[14]=new Long(276447232, 23283);h[15]=new Long(2764472320, 232830);h[16]=new Long(1874919424, 2328306);h[17]=new Long(1569325056, 23283064);h[18]=new Long(2808348672, 232830643);J.i=g;g=$rt_createLongArray(6);h=g.data;h[0]=Long_fromInt(1);h[1]=Long_fromInt(10);h[2]=Long_fromInt(100);h[3]=Long_fromInt(10000);h[4]=Long_fromInt(100000000);h[5]=new Long(1874919424, 2328306);J.F=g;return;};
AE();}
function AH(){var $r=new J();OC($r);return $r;}
function BH(a){var $r=new J();HC($r,a);return $r;}
function CH(){var $r=new TC();BF($r);return $r;}
function BF($t){OC($t);return;}
function DH(){var $r=new FB();FE($r);return $r;}
function FE($t){IE($t);return;}
function OG(){var $r=new MC();SD($r);return $r;}
function SD($t){FE($t);return;}
function EH(){var $r=new Z();PD($r);return $r;}
function PD($t){IE($t);return;}
function FH(a){var $r=new AC();XD($r,a);return $r;}
function GH(a,b){var $r=new AC();ME($r,a,b);return $r;}
function HH(){var $r=new AC();UD($r);return $r;}
function QF(a,b){if(a!==b&&KF(a,b)==0){a=0;}else{a=1;}return a;}
function XD($t,a){ME($t,a,0.75);return;}
function LD($t,a,b,c){var d;d=$t.U.data[b];while(d!==null){if(d.l==c){if(QF(a,d.dB)!=0){break;}}d=d.P;}return d;}
function OF(a){var b;if(a>=1073741824){return 1073741824;}if(a==0){return 16;}b=a-1|0;b=b|b>>1;b=b|b>>2;b=b|b>>4;b=b|b>>8;return (b|b>>16)+1|0;}
function ME($t,a,b){PD($t);if(a>=0&&b>0.0){a=OF(a);$t.N=0;$t.U=TE($t,a);$t.aB=b;OD($t);return;}TF(IH());}
function EE($t,a,b){var c,d,e,f,g;if(a===null){c=UE($t);if(c===null){$t.n=$t.n+1|0;c=IF($t,null,0,0);d=$t.N+1|0;$t.N=d;if(d>$t.Z){ZD($t);}}}else{e=SF(a);f=e&($t.U.data.length-1|0);c=LD($t,a,f,e);if(c===null){$t.n=$t.n+1|0;c=IF($t,a,f,e);g=$t.N+1|0;$t.N=g;if(g>$t.Z){ZD($t);}}}a=c.p;c.p=b;return a;}
function AF($t,a){var b;b=MD($t,a);if(b===null){return null;}return b.p;}
function TE($t,a){return XF(CD,a);}
function CE($t,a){var b,c,d,e,f,g,h,i;if(a==0){b=1;}else{b=a<<1;}c=OF(b);d=TE($t,c);e=0;f=c-1|0;while(e<$t.U.data.length){b=$t.U.data[e];$t.U.data[e]=null;while(b!==null){g=d.data;h=b.l&f;i=b.P;b.P=g[h];g[h]=b;b=i;}e=e+1|0;}$t.U=d;OD($t);return;}
function MD($t,a){var b;if(a===null){a=UE($t);}else{b=SF(a);a=LD($t,a,b&($t.U.data.length-1|0),b);}return a;}
function OD($t){$t.Z=$t.U.data.length*$t.aB|0;return;}
function RD($t,a,b){return EE($t,a,b);}
function IF($t,a,b,c){var d;d=YG(a,c);d.P=$t.U.data[b];$t.U.data[b]=d;return d;}
function ZD($t){CE($t,$t.U.data.length);return;}
function SF(a){return WE(a);}
function UE($t){var a;a=$t.U.data[0];while(a!==null){if(a.dB===null){break;}a=a.P;}return a;}
function UD($t){XD($t,16);return;}
function RF(){return window.$rt_nextId();}
function PF(a){var copy=new a.constructor();for(var field in a){if(!a.hasOwnProperty(field)){continue;}copy[field]=a[field];}return copy;}
function T_$clinit(){T_$clinit=function(){};
RE=function(a){if(!(a>=48&&a<=57)&&!(a>=97&&a<=122)&&a<65&&a>90){a=0;}else{a=1;}return a;};
QE=function(a){var b,c;if(FD(a)!=0){TF(JH(a));}if(RE(EF(a,0))==0){TF(JH(a));}b=1;while(b<C(a)){$ba:{c=EF(a,b);switch(c){case 43:case 45:case 46:case 58:case 95:break;default:if(RE(c)!=0){break $ba;}else{TF(JH(a));}}}b=b+1|0;}return;};
KD=function(){T.m=HH();RD(T.m,$rt_s(1),KH());return;};
IC=function($t,a,b){var c,d,e;c=b.data;IE($t);QE(a);d=c.length;e=0;while(e<d){QE(c[e]);e=e+1|0;}$t.D=a;$t.x=b.X();return;};
KD();}
function LH(a,b){var $r=new T();IC($r,a,b);return $r;}
function NF(a){var b,c,d;b=MF();c=b.createElement("div");d=b.createTextNode("TeaVM generated element");c.appendChild(d);b.body.appendChild(c);return;}
function IH(){var $r=new X();KE($r);return $r;}
function KE($t){ID($t);return;}
function JH(a){var $r=new BD();QD($r,a);return $r;}
function QD($t,a){KE($t);$t.f=a;return;}
function BB_$clinit(){BB_$clinit=function(){};
JD=function(a){return a;};
EC=function($t,a){var b,c,d;b=a.data;IE($t);c=b.length;$t.d=$rt_createCharArray(c);d=0;while(d<c){$t.d.data[d]=b[d];d=d+1|0;}return;};
LE=function(){BB.A=ZG();BB.pB=HH();return;};
LE();}
function B(a){var $r=new BB();EC($r,a);return $r;}
function FD($t){var a;if($t.d.data.length!=0){a=0;}else{a=1;}return a;}
function G($t){var a;a=AF(BB.pB,$t);if(a!==null){$t=a;}else{RD(BB.pB,$t,$t);}return $t;}
function WE($t){var a,b,c;if($t.q==0){a=$t.d.data;b=a.length;c=0;while(c<b){$t.q=(31*$t.q|0)+a[c]|0;c=c+1|0;}}return $t.q;}
function EF($t,a){if(a>=0&&a<$t.d.data.length){return $t.d.data[a];}TF(VG());}
function D($t,a,b,c,d){var e,f;if(a>=0&&a<=b&&b<=$t.tB()&&d>=0){c=c.data;if((d+(b-a|0)|0)<=c.length){while(a<b){e=d+1|0;f=a+1|0;c[d]=$t.t(a);d=e;a=f;}return;}}TF(JG());}
function C($t){return $t.d.data.length;}
function KF($t,a){var b,c;if($t===a){return 1;}if(a instanceof BB==0){return 0;}b=a;if(C(b)!=C($t)){return 0;}c=0;while(c<C(b)){if(EF($t,c)!=EF(b,c)){return 0;}c=c+1|0;}return 1;}
function MH(a){var $r=new FC();YD($r,a);return $r;}
function YD($t,a){XE($t,a);return;}
function MG(a,b){var $r=new NC();PE($r,a,b);return $r;}
function PE($t,a,b){FF($t,a);$t.u=CH();$t.wB=$rt_createCharArray(32);$t.J=b;$t.I=KH();return;}
function NH(a){var $r=new PC();VD($r,a);return $r;}
function VD($t,a){OE($t,a);return;}
function NG(){var $r=new XC();VE($r);return $r;}
function VE($t){ED($t);return;}
function KH(){var $r=new UC();DE($r);return $r;}
function DE($t){IC($t,$rt_s(1),XF(BB,0));return;}
function OH(a){var $r=new LC();ZE($r,a);return $r;}
function A(a){var b;if(a===null){return null;}b=a.classObject;if(b===null){b=OH(a);}return b;}
function ZE($t,a){var b;IE($t);$t.G=1;$t.zB=a;b=$t;a.classObject=b;return;}
$rt_metadata([E,"java.lang.Object",0,[],0,0,[],["X",function(){return HE(this);},"a",function(){IE(this);}],N,"java.lang.Throwable",E,[],0,0,[],["b",function(a){YE(this,a);},"h",function(){return DF(this);},"a",function(){GE(this);}],S,"java.lang.Exception",N,[],0,0,[],["a",function(){GF(this);}],P,"java.lang.RuntimeException",S,[],0,0,[],["a",function(){ID(this);}],IB,"java.lang.IndexOutOfBoundsException",P,[],0,0,[],["a",function(){JF(this);}],M,"org.teavm.jso.JSObject",E,[],0,0,[],[],LB,"org.teavm.jso.dom.xml.Node",
E,[M],0,0,[],[],PB,"org.teavm.jso.dom.xml.Document",E,[LB],0,0,[],[],OB,"java.lang.AutoCloseable",E,[],0,0,[],[],AB,"java.io.Closeable",E,[OB],0,0,[],[],YB,"java.io.Flushable",E,[],0,0,[],[],K,"java.io.OutputStream",E,[AB,YB],0,0,[],["a",function(){ED(this);}],YC,"java.lang.ConsoleOutputStreamStdout",K,[],0,0,[],["a",function(){CF(this);}],V,"java.lang.System",E,[],0,V_$clinit,['WD','TD'],[],XB,"java.lang.Runnable",E,[],0,0,[],[],JC,"java.lang.CloneNotSupportedException",S,[],0,0,[],["a",function(){NE(this);
}],EB,"java.lang.Error",N,[],0,0,[],["b",function(a){HD(this,a);}],Q,"java.lang.LinkageError",EB,[],0,0,[],["b",function(a){XE(this,a);}],O,"java.lang.IncompatibleClassChangeError",Q,[],0,0,[],["b",function(a){OE(this,a);}],DD,"java.lang.NoSuchFieldError",O,[],0,0,[],["b",function(a){HF(this,a);}],L,"org.teavm.jso.dom.events.EventTarget",E,[M],0,0,[],[],BC,"org.teavm.jso.dom.html.HTMLDocument",E,[PB,L],0,0,[],[],R,"java.lang.Thread",E,[XB],0,R_$clinit,['H','BE','SC','I','VC','ND'],["jB",function(a,b){SC(this,
a,b);},"b",function(a){VC(this,a);}],TB,"java.util.Map",E,[],0,0,[],[],HB,"java.lang.Cloneable",E,[],0,0,[],[],QC,"org.teavm.jso.impl.JS",E,[],0,0,[],[],DB,"java.lang.CharSequence",E,[],0,0,[],[],RB,"org.teavm.jso.dom.events.LoadEventTarget",E,[L],0,0,[],[],ZC,"java.lang.StringIndexOutOfBoundsException",IB,[],0,0,[],["a",function(){LF(this);}],CB,"java.io.FilterOutputStream",K,[],0,0,[],["oB",function(a){FF(this,a);}],U,"java.io.Serializable",E,[],0,0,[],[],MB,"java.util.Map$Entry",E,[],0,0,[],[],Y,"java.util.MapEntry",
E,[HB,MB],0,0,[],["Y",function(a,b){JE(this,a,b);}],CD,"java.util.HashMap$HashEntry",Y,[],0,0,[],["V",function(a,b){SE(this,a,b);}],VB,"java.util.Comparator",E,[],0,0,[],[],KC,"java.lang.String$1",E,[VB],0,0,[],["a",function(){GD(this);}],W,"java.lang.annotation.Annotation",E,[],0,0,[],[],J,"java.lang.AbstractStringBuilder",E,[DB,U],0,J_$clinit,['OC','HC','AE'],["a",function(){OC(this);},"c",function(a){HC(this,a);}],ZB,"java.lang.Appendable",E,[],0,0,[],[],TC,"java.lang.StringBuilder",J,[ZB],0,0,[],["a",function()
{BF(this);}],FB,"java.io.InputStream",E,[AB],0,0,[],["a",function(){FE(this);}],MC,"java.lang.ConsoleInputStream",FB,[],0,0,[],["a",function(){SD(this);}],JB,"java.lang.reflect.AnnotatedElement",E,[],0,0,[],[],SB,"org.teavm.jso.dom.events.MouseEventTarget",E,[L],0,0,[],[],QB,"org.teavm.jso.dom.events.KeyboardEventTarget",E,[L],0,0,[],[],UB,"org.teavm.jso.dom.events.FocusEventTarget",E,[L],0,0,[],[],KB,"org.teavm.jso.browser.WindowEventTarget",E,[SB,QB,RB,L,UB],0,0,[],[],Z,"java.util.AbstractMap",E,[TB],0,0,
[],["a",function(){PD(this);}],AC,"java.util.HashMap",Z,[HB,U],0,0,[],["c",function(a){XD(this,a);},"y",function(a,b,c){return LD(this,a,b,c);},"s",function(a,b){ME(this,a,b);},"cB",function(a,b){return EE(this,a,b);},"vB",function(a){return AF(this,a);},"hB",function(a){return TE(this,a);},"e",function(a){CE(this,a);},"xB",function(a){return MD(this,a);},"fB",function(){OD(this);},"nB",function(a,b){return RD(this,a,b);},"gB",function(a,b,c){return IF(this,a,b,c);},"eB",function(){ZD(this);},"g",function()
{return UE(this);},"a",function(){UD(this);}],WC,"java.lang.annotation.Retention",E,[W],0,0,[],[],GC,"java.lang.FunctionalInterface",E,[W],0,0,[],[],NB,"org.teavm.jso.core.JSArrayReader",E,[M],0,0,[],[],WB,"org.teavm.jso.browser.StorageProvider",E,[],0,0,[],[],RC,"org.teavm.jso.browser.Window",E,[M,KB,NB,WB],0,0,[],[],AD,"org.teavm.platform.Platform",E,[],0,0,[],[],GB,"java.lang.Comparable",E,[],0,0,[],[],T,"java.nio.charset.Charset",E,[GB],0,T_$clinit,['RE','QE','KD','IC'],["Q",function(a,b){IC(this,a,b);}],CC,
"com.mydomain.teavmfirstapp.Client",E,[],0,0,[],[],X,"java.lang.IllegalArgumentException",P,[],0,0,[],["a",function(){KE(this);}],BD,"java.nio.charset.IllegalCharsetNameException",X,[],0,0,[],["b",function(a){QD(this,a);}],BB,"java.lang.String",E,[DB,GB,U],0,BB_$clinit,['JD','EC','LE'],["kB",function(){return FD(this);},"k",function(){return G(this);},"r",function(){return WE(this);},"t",function(a){return EF(this,a);},"rB",function(a,b,c,d){D(this,a,b,c,d);},"tB",function(){return C(this);},"mB",function(a)
{return KF(this,a);},"K",function(a){EC(this,a);}],FC,"java.lang.NoClassDefFoundError",Q,[],0,0,[],["b",function(a){YD(this,a);}],NC,"java.io.PrintStream",CB,[],0,0,[],["AB",function(a,b){PE(this,a,b);}],PC,"java.lang.NoSuchMethodError",O,[],0,0,[],["b",function(a){VD(this,a);}],DC,"java.lang.annotation.Target",E,[W],0,0,[],[],XC,"java.lang.ConsoleOutputStreamStderr",K,[],0,0,[],["a",function(){VE(this);}],UC,"java.nio.charset.impl.UTF8Charset",T,[],0,0,[],["a",function(){DE(this);}],LC,"java.lang.Class",E,
[JB],0,0,[],["T",function(a){ZE(this,a);}]]);
$rt_stringPool(["main","UTF-8"]);
var main=NF;
(function(){var c;})();
main = $rt_mainStarter(main);

//# sourceMappingURL=classes.js.map