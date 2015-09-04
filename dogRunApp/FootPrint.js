#pragma strict


var Lft:Texture;
var Rft:Texture;

public var skin:GUISkin;

//貼圖
private var imageWidth:int;
private var imageHeight:int;
//螢幕
private var screenWidth:int;
private var screenHeight:int;

//貼圖
private var textSingle:Texture2D;

//貼圖數組
private var textAll:Object[];

function Start () {

//設定圖片大小
 imageWidth=Lft.width;
 imageHeight=Lft.height;

}


function OnGUI () {

GUI.skin = skin;
  
//GUI.Button(Rect(340,200,imageWidth/2,imageHeight/2),Lft);
//GUI.Button(Rect(545,200,imageWidth/2,imageHeight/2),Rft);
 if(GUI.Button(Rect(20,400,imageWidth/2,imageHeight/2),Lft)){

if(textSingle==null){

//動畫
textSingle=Resources.Load("Single/1");

}

}
if(GUI.Button(Rect(200,400,imageWidth/2,imageHeight/2),Rft)){

 if(textAll==null){
 
  textAll=Resources.LoadAll("Textures"); //草皮
 
 }

}



} 