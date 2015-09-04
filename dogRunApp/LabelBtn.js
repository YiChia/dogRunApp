#pragma strict

var btnTexture:Texture2D;
var btnTexture2:Texture2D;

private var str:String;


function Start () {
 str="click btn";

}

function OnGUI () {

GUI.Label(Rect(10,10,Screen.width,30),str);

 if(GUI.Button(Rect(10,50,btnTexture.width,btnTexture.height),btnTexture)){
 
 GUI.Button(Rect(10,50,btnTexture.width,btnTexture.height),btnTexture2);
 str="clicked";
 
 }
if(GUI.Button(Rect(10,200,70,30),"Label")){

str="click";


}
}