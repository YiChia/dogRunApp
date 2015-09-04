
var L1GUI:GUISkin;
function Start () {

}
function OnGUI(){

GUI.skin=L1GUI;
GUI.Label(Rect(160,50,60,100),"任意碰觸 進行遊戲");


}



function Update () {


  var nowTouchCount = Input.touchCount;
  // 假使 觸控數量大於 0
 if (nowTouchCount > 0){
 
   Application.LoadLevel("Level1");
   
   }

}