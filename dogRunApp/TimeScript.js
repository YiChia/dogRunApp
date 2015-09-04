

var tCount:float;
var s:String;
var timeSkin:GUISkin;

function Awake(){

  //tCount=10;
  tCount=0;

}

function Start () {

 // tCount-=Time.deltaTime;
  tCount+=Time.deltaTime;
  s=tCount.ToString();

}

function OnGUI(){


//static function TextArea (position : Rect, text : String, style : GUIStyle) : String
GUI.TextArea(Rect(140,50,30,30),s);

GUILayout.Label(tCount.ToString());


}


function Update () {


}