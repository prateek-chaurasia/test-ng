
(function(app){
	app.AppModule = 
		ng.core.NgModule({
			imports: [ng.platformBrowser.BrowserModule],
			declaratons: [app.AppComponent],	
			bootstrap: [app.AppComponent]
		})
		.Class({
			constructor: function(){}
		});
})(window.app || (window.app = {}));
