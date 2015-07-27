({
	afterScriptsLoaded : function(component, event, helper) {
		 hljs.highlightBlock(component.getElement());
	}
})