#pragma strict


private var Lft:Object[];
private var Rft:Object[];
private var ft:Object[]; 
static var fall:Object[];
private var GrassL:Object[];
private var GrassR:Object[];

//dog
static var tex:Object[];
private var grass:Object[];

//position of god
private var x:int;
private var y:int;
//frame
private var nowFram:int;

private var mFrameCount:int;

private var fps:float=10;
private var time:float=0;

//Btn Boolean
private var LBtn: boolean; //:Boolean=false;
private var RBtn: boolean;
private var Btn:boolean;


//footprint
var L:Texture;
var R:Texture;

public var skin:GUISkin;

//貼圖
private var imageWidth:int;
private var imageHeight:int;

//貼圖
private var textSingle:Texture2D;

//貼圖數組
private var textAll:Object[];

//footprint

//計算步數 

private var calu:int;
private var Rcalu:int;
private var Lcalu:int;
private var A:int;
static var LastT:int;

//陣列
var FP_Ary:Array;

//disableBtn

static var disableBtn=false;
static var j:String;


public var oriScale : Vector2 = Vector2(1280.0f, 800.0f);

function Awake(){

 calu=10;
 Rcalu=0;
 Lcalu=0;
 A=0;

}

function Start () {

Resources.UnloadUnusedAssets(); 

//load textures
Lft=Resources.LoadAll("01"); //LL1
Rft=Resources.LoadAll("02"); //RL1
ft=Resources.LoadAll("04");
fall=Resources.LoadAll("03");
tex=ft;

/*
 GrassL=Resources.LoadAll("1");
 GrassR=Resources.LoadAll("2");
*/
//設定圖片大小
 imageWidth=L.width;
 imageHeight=L.height;
 
 //螢幕解析度大小設定
 var guis : GUITexture[] = FindObjectsOfType(typeof(GUITexture));
 var size : Vector2;
 
 /*
 size.x = Screen.width / 1280.0f;
 size.y = Screen.height / 800.0f;
 */
 size.x = Screen.width / 800.0f;
 size.y = Screen.height /1280.0f;
 
 
 for(var gui : GUITexture in guis)
 {
  gui.pixelInset = Rect(gui.pixelInset.x * size.x, gui.pixelInset.y * size.y, gui.pixelInset.width * size.x, gui.pixelInset.height * size.y);
 }
   
  
}

function OnGUI(){

GUI.skin = skin;

//遊戲暫停  
if(disableBtn) GUI.enabled=false; 

DrawAnimation(tex,Rect(0,20,Screen.width,Screen.height));


//左右按鈕
if(GUI.Button(Rect(5,650,imageWidth/2,imageHeight/2),L)){
  
  tex=Lft;
  LBtn=true;
}
if(GUI.Button(Rect(325,650,imageWidth/2,imageHeight/2),R)){

  tex=Rft;
  RBtn=true;
  
  if(LBtn){
  
   calu--;
   LBtn=false;
  
  }
  
  
 }

 
//計算步數
var i:String;
i=calu.ToString();
GUI.Label(Rect(400,100,100,50),i+"/10");

//讀取時間
   
     j=(TScript.a).ToString();
}


//動畫

function DrawAnimation(tex:Object[],rect:Rect){

GUI.DrawTexture(rect,tex[nowFram],ScaleMode.StretchToFill,true,0);

//GUI.DrawTexture(rect,grass[nowFram],ScaleMode.StretchToFill,true,0);

time+=Time.deltaTime;

if(time>=1.0/fps){

nowFram++;

time=0;

if(nowFram>= tex.Length){

 nowFram=0;

}

}


}  



function Update () {

 //時間停止
 if(calu==0){
   
     
     disableBtn=true;
     Time.timeScale=0;
     LastT=TScript.a;//抓取遊戲成功秒數
     Application.LoadLevel("L1_Pass"); //過關
     
     
      
    } 
    //時間到 狗跌倒
    if(TScript.a==10){
    tex=fall;
    }
    
    


}