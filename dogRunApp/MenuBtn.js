#pragma strict


var MStop:Texture2D;
var MPlay:Texture2D;

var SStop:Texture2D;
var SPlay:Texture2D;



var MenuSite:int;
var a:int;
var b:int;

var Menu_GUISkin:GUISkin;

//貼圖
private var imageWidth:int;
private var imageHeight:int;
//螢幕
private var screenWidth:int;
private var screenHeight:int;


//disableBtn
static var Titledisable=false;


public var oriScale : Vector2 = Vector2(1280.0f, 800.0f);

function Start () {
 //Btn_GUISkin.customStyles[4].normal.background=iT2;
 
 

  

 screenWidth=Screen.width;
 screenHeight=Screen.height;
 
 //imageWidth=iT1.width;
 //imageHeight=iT1.height;
 
 imageWidth=105;
 imageHeight=105;

//螢幕解析度大小設定
 var guis : GUITexture[] = FindObjectsOfType(typeof(GUITexture));
 var size : Vector2;
 /*
 size.x = Screen.width / 1280.0f;
 size.y = Screen.height / 800.0f;
 */
 size.x = Screen.width / 800.0f;
 size.y = Screen.height / 1280.0f;
 
 for(var gui : GUITexture in guis)
 {
  gui.pixelInset = Rect(gui.pixelInset.x * size.x, gui.pixelInset.y * size.y, gui.pixelInset.width * size.x, gui.pixelInset.height * size.y);
 }

}


function OnGUI () {

GUI.skin=Menu_GUISkin;

//first x 
 MenuSite=40;
 a=100;
 b=5;
 
 
 
//功能列 
 
if(GUI.Button(Rect(MenuSite,b,imageWidth/1.5,imageHeight/1.5),"","Music")){

 Menu_GUISkin.customStyles[2].normal.background=MStop;
 Menu_GUISkin.customStyles[2].normal.background=MPlay;


}
if(GUI.Button(Rect(MenuSite,b+90,imageWidth/1.5,imageHeight/1.5),"","Sound")){

  Menu_GUISkin.customStyles[1].normal.background=SStop;
  Menu_GUISkin.customStyles[1].normal.background=SPlay;

}



}



function Update() {
 
 

}