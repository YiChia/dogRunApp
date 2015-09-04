

//陣列讀取遊戲成績  遊戲秒數


var HomeTexture:Texture;
var L1pass:GUISkin;
var bestScore:String; //最佳分數





var Bs:int;
var Score:int;
var BestScore:int;//比較最佳成績變數  用於儲存

var a:int;//前次
var b:int;//本次



function Awake(){

 
 // Bs=0;
  a=4;//初始值
 
}

public var oriScale : Vector2 = Vector2(1280.0f, 800.0f);
// Use this for initialization
function Start () {

  
//  print("real a:"+a); 
 // a=PlayerPrefs.GetInt("Bss",a);//****
  //無此行  a<b a無法儲存 a值
  
  Score=TScript.a; //本次成績
 //兩個變數
 
  b=Score;
  
  //讀取值
 //Bs=PlayerPrefs.GetInt("Bss",a);
 // Bs=Score;

 


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

 
 Bs=PlayerPrefs.GetInt("Bss",a);
 print("GUI BS:"+Bs);
 GUI.skin=L1pass;
 GUI.Label(Rect(80,135,300,400),"你的紀錄:"+Score+"秒"); //儲存陣列 Animate.LastT:int
 GUI.Label(Rect(80,185,300,400),"最佳紀錄:"+Bs+"秒"); 
 

 
 if(GUI.Button(Rect(30,30,105/1.5,105/1.5),"","Home")){
  
  Application.LoadLevel("Menu");
  Animate.disableBtn=false;
 
 }

}

// Update is called once per frame
function Update () {


   a=PlayerPrefs.GetInt("Bss",a); //("Bss",a) a為上次儲存之a
   //跟前次最佳成績比較  if(最佳成績>本次成績){最佳成績與本次成績交換  儲存最佳成績}
   
   if(a>Score){
    // print("交換前a:"+a+"b:"+b);
     a=b;
   //  print("交換後a:"+a+"b:"+b);
       
   
   }
   PlayerPrefs.SetInt("Bss",a);  // 未執行if  a=4
 //  print("final a:"+a);
   

}
