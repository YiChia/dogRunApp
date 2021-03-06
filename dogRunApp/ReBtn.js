﻿// Draws 2 buttons, one with an image, and other with a text
	// And print a message when they got clicked.
	var btnTexture : Texture;
	function OnGUI() {
		if (!btnTexture) {
			Debug.LogError("Please assign a texture on the inspector");
			return;
		}
		if (GUI.RepeatButton(Rect(10,10,50,50),btnTexture))
			Debug.Log("Clicked the button with an image");
		if (GUI.RepeatButton(Rect(10,70,50,30),"Click"))
			Debug.Log("Clicked the button with text");
	}