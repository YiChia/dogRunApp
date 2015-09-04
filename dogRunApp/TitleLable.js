

//儲存變數
var iT1:Texture2D; //暫停
var iT2:Texture2D; //播放

var iT3:Texture2D; //音樂暫停
var iT4:Texture2D; //音樂播放

var iT5:Texture2D; //音效暫停
var iT6:Texture2D; //音效播放

static var MenuSite:int;
static var a:int;
static var b:int;

var Btn_GUISkin:GUISkin;

//貼圖
private var imageWidth:int;
private var imageHeight:int;

//螢幕
private var screenWidth:int;
private var screenHeight:int;



//disableBtn
static var disable=false;
//預設值為 false
var playBool:boolean;  
var MusicBool:boolean;
var SoundBool:boolean;

//musuc

var music:AudioSource;
var musicVol:float;


public var oriScale : Vector2 = Vector2(1280.0f, 800.0f);
function Awake(){

   Btn_GUISkin.customStyles[4].normal.background=iT1;  //pause鈕 一定為暫停圖示



}
function Start () {

 musicVol=0.5f;

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

GUI.skin=Btn_GUISkin;



//example
//skin.customStyles[x].normal.background = screenTexture

//first x 
 MenuSite=25;
 a=90;
 b=0;
 
 if(disable) GUI.enabled=false;  //按鈕失效
 

//回主選單
if(GUI.Button(Rect(MenuSite,b,imageWidth/1.5,imageHeight/1.5),"","Home")){

 Application.LoadLevel("Menu");

}

 //遊戲暫停

 //print(playBool);
 if(GUI.Button(Rect(MenuSite+a*4,b,imageWidth/1.5,imageWidth/1.5),"","Pause")) {
  
     
   //判斷Boolean
   if(playBool){
	 
	   //開始 
	   Animate.disableBtn=false;
	   Time.timeScale=1; //0=stop 
	   playBool=false;
	   music.Play();
	   Btn_GUISkin.customStyles[4].normal.background=iT1; //暫停
   }
   else{
	
	   // 暫停
	   Animate.disableBtn=true;	
	   Time.timeScale=0; //0=stop 
	   playBool=true;
	   music.Stop();
	   Btn_GUISkin.customStyles[4].normal.background=iT2; //撥放
	
   }
     
 }
  
 //遊戲重新開始
 if(GUI.Button(Rect(MenuSite+a*3,b,imageWidth/1.5,imageHeight/1.5),"","Replay")){
 
 //重新載入  Application.LoadLevel(Application.loadedLevelName);
 // print("a");
  if( Btn_GUISkin.customStyles[3].normal.background==iT3){
  Btn_GUISkin.customStyles[3].normal.background=iT3;
  music.Stop();
  
  }
 
  Application.LoadLevel("Level1");
  
  if( Btn_GUISkin.customStyles[3].normal.background==iT3){
  Btn_GUISkin.customStyles[3].normal.background=iT3;
  music.Stop();
  }
  
  GUI.enabled=false;
  Time.timeScale=1;
  Animate.disableBtn=false;
  
  
 }
//音效
if(GUI.Button(Rect(MenuSite+a,b,imageWidth/1.5,imageHeight/1.5),"","Sound")){

   if(SoundBool){
   
     
      Btn_GUISkin.customStyles[1].normal.background=iT5;
      SoundBool=false;
   }
   
   else{
   
      Btn_GUISkin.customStyles[1].normal.background=iT6;
     SoundBool=true;
     
   }
 
 

}
//音樂

if(GUI.Button(Rect(MenuSite+a*2,b,imageWidth/1.5,imageHeight/1.5),"","Music")){

   if(MusicBool){
   
      music.Stop();
      Btn_GUISkin.customStyles[2].normal.background=iT3;
      MusicBool=false;
   }
   
   else{
      
      music.Play();
      Btn_GUISkin.customStyles[2].normal.background=iT4;
      MusicBool=true;
     
   }





}

}



function Update() {







}