private var hit:RaycastHit;
var myStyle:GUIStyle;
var screenPos:Vector3;
private var enableUI=false;


function Start () {

}

function Update () {

 var ray=Camera.main.ScreenPointToRay(Input.mousePosition);

  if(Input.GetMouseButtonDown(0)){

      if(Physics.Raycast(ray,hit,Mathf.Infinity)){

          if(hit.collider.tag=="tower"){

                screenPos=camera.WorldToScreenPoint(hit.collider.gameObject.transform.position);

               enableUI=true;


           }

       }

   }




}

function OnGUI(){


 if(enableUI) GUI.Label(Rect(screenPos.x,screenPos.y,128,64),"",myStyle);


}