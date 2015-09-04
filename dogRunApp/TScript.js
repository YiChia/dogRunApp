

var tCount:float;
var s:String;
var timeSkin:GUISkin;
var RealTime:float;
var reStart:String;
static var a:int;

function Awake(){

 

}

function Start () {
 
  //RealTime=Mathf.Floor(Time.time); //不能用Time.time
  	

  //10秒
  //tCount=10.0f;
  tCount=0.0f;
//   print("Debug");
}




function OnGUI(){


//時間標示
GUI.skin=timeSkin;
//static function TextArea (position : Rect, text : String, style : GUIStyle) : String
GUI.Label(Rect(30,100,100,50),s);

if(a==10){

if(GUI.Button(Rect(150,300,200,100),reStart)){

 //   Time.timeScale=1;
 //   GUI.enabled=false;
 //   Animate.disableBtn=false;
 //   TitleLable.disable=false;
    Application.LoadLevel("Level1");
    

}


}
}


function Update () {


  
//時間倒數
	RealTime +=Time.deltaTime;
	
  //Debug.Log("時間"+RealTime);
  if(RealTime<=11.0f){
   
   // tCount=10-RealTime;
    tCount=RealTime;
     
    a=parseInt(tCount);// float強制轉換int
  //  print("tCount:"+tCount);
    
    
    }
    s=a.ToString();
    
    //時間停止
    
    
    if(a==10){
 //   print("time:"+0);
 //   Time.timeScale=0;
 //   GUI.enabled=true;
 //   Animate.disableBtn=true;
 //   TitleLable.disable=true; 
    reStart="再試一次";
   
   // tex=fall;
    //GUI.TextArea(Rect(100,200,300,400),"失敗"); 
 
    }
    
  
}