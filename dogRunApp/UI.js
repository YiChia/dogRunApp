#pragma strict

public var oriScale : Vector2 = Vector2(1280.0f, 768.0f);

function Start () {

 var guis : GUITexture[] = FindObjectsOfType(typeof(GUITexture));
 var size : Vector2;
 size.x = Screen.width / 1280.0f;
 size.y = Screen.height / 768.0f;
 for(var gui : GUITexture in guis)
 {
  gui.pixelInset = Rect(gui.pixelInset.x * size.x, gui.pixelInset.y * size.y, gui.pixelInset.width * size.x, gui.pixelInset.height * size.y);
 }


}

function Update () {

}