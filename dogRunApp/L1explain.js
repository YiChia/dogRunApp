#pragma strict
var touchGuiTexture : GUITexture;

function Start () {


}



function Update () {
 // 宣告 nowTouchCount 為 目前觸控數量
 var nowTouchCount = Input.touchCount;
  // 假使 觸控數量大於 0
 if (nowTouchCount > 0){
 
   Application.LoadLevel("Level1");
   
  for (var i = 0; i < nowTouchCount;++i) {
   // 假使 觸控點 觸控起始
   if (Input.GetTouch(i).phase == TouchPhase.Began) {
    print("觸控點"+ i +"起始");
   }
   // 假使 觸控點 觸控離開
   if (Input.GetTouch(i).phase == TouchPhase.Ended) {
    print("觸控點"+ i +"離開");
   }
   // 假使 碰觸點 觸控移動 且 位置與touchGuiTexture接觸
   if (Input.GetTouch(i).phase == TouchPhase.Moved && touchGuiTexture.HitTest(Input.GetTouch(i).position)) {
    print("碰觸到 touchGuiTexture");
   }
        }
 }
}