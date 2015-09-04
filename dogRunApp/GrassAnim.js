#pragma strict

private var anim:Object[];

private var nowFram:int;

private var mFrameCount:int;

private var imageHeight:int;
private var imageWeight:int;

private var fps:float=2;
private var time:float=0;


public var oriScale : Vector2 = Vector2(1280.0f, 800.0f);

function Start () {

anim=Resources.LoadAll("single");
mFrameCount=anim.Length;

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

DrawAnimation(anim,Rect(0,75,533,900));

}

function DrawAnimation(tex:Object[],rect:Rect){

//GUILayout.Label("frame"+nowFram);
GUI.DrawTexture(rect,tex[nowFram],ScaleMode.StretchToFill,true,0);

time+=Time.deltaTime;

if(time>=1.0/fps){
nowFram++;

time=0;

if(nowFram>=mFrameCount){

nowFram=0;
}

}

}

function Update () {

}