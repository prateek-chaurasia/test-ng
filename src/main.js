(function(app){
	document.addEventListner('DOMContentLoaded', function(){
		ng.platformBrowserDynamic
		.platformBrowserDynamic()
		.bootstrapModule(app.AppModule);
	});
})(window.app || (window.app = {}));
