/*
 * Single Window Application Template:
 * A basic starting point for your application.  Mostly a blank canvas.
 * 
 * In app.js, we generally take care of a few things:
 * - Bootstrap the application with any data we need
 * - Check for dependencies like device type, platform version or network connection
 * - Require and open our top-level UI component
 *  
 */

//bootstrap and check dependencies
if (Ti.version < 1.8 ) {
	alert('Sorry - this application template requires Titanium Mobile SDK 1.8 or later');	  	
}

// This is a single context application with mutliple windows in a stack
(function() {
	//determine platform and form factor and render approproate components
	var osname = Ti.Platform.osname,
		version = Ti.Platform.version,
		height = Ti.Platform.displayCaps.platformHeight,
		width = Ti.Platform.displayCaps.platformWidth;
	
	//considering tablet to have one dimension over 900px - this is imperfect, so you should feel free to decide
	//yourself what you consider a tablet form factor for android
	var isTablet = osname === 'ipad' || (osname === 'android' && (width > 899 || height > 899));
	
	var Window;
	if (isTablet) {
		Window = require('ui/tablet/ApplicationWindow');
	}
	else {
		// Android uses platform-specific properties to create windows.
		// All other platforms follow a similar UI pattern.
		if (osname === 'android') {
			Window = require('ui/handheld/android/ApplicationWindow');
		}
		else {
			Window = require('ui/handheld/ApplicationWindow');
		}
	}
	

	var button = Titanium.UI.createButton({
   		title: 'Virtual Button'
	});
	
	
	button.addEventListener('click',function(e)
	{

	var network = Titanium.Network.createHTTPClient();
	network.onload = function()
	{
		Ti.API.info(this.responseText);
	};
	network.onerror = function()
	{
		Ti.API.info('in utf-8 error for POST');
	};
	
	network.open("POST","https://api.ninja.is/rest/v0/block/MS_QWERTY123456/data");
	network.setRequestHeader('X-Ninja-Token', 'YOUR VIRTUAL BLOCK TOKEN HERE');
	network.send({"GUID": "MS1111111111","G": "1","V": "0","D": "5","DA": "1"});
	
	network.open("POST","https://api.ninja.is/rest/v0/block/MS_QWERTY123456/data");
	network.setRequestHeader('X-Ninja-Token', 'YOUR VIRTUAL BLOCK TOKEN HERE');
	network.send({"GUID": "MS1111111111","G": "1","V": "0","D": "5","DA": "0"});
	

	});



	$window = new Window();
	$window.open();
	
	$window.add(button);

})();
