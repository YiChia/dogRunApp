#pragma strict

var L1:Texture;
var L2:Texture;
var L3:Texture;

var oriSite:int;
var x:int;
var y:int;

var Stop;
var Play;


var levelGUI:GUISkin;

private var imgHeight:int;
private var imgWidth:int;



public var oriScale : Vector2 = Vector2(1280.0f, 800.0f);

function Start () {

PlayerPrefs.SetInt("LastT",Animate.LastT);//Save 本次

imgHeight=256;
imgWidth=256;

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


function OnGUI(){

GUI.skin=levelGUI;


//功能列 
 
if(GUI.Button(Rect(oriSite-25,540,imgWidth/2+25,imgHeight/2+25),"","level1")){
 Application.LoadLevel("L1_exp");
 Animate.disableBtn=false;
 Time.timeScale=1;

}
if(GUI.Button(Rect(oriSite-250,650,imgWidth/2+15,imgHeight/2+15),"","level2")){

Application.LoadLevel("Level2");

//GUI.Label(Rect(Screen.width,Screen.height,50,100),"建置中");

}




}

function Update () {

 //儲存最佳紀錄

}