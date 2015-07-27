({
	myAction : function(component, event, helper) {
		alert('in myAction JS controller. Implement your own')
	},
     handlePress : function(component, event, helper) {
		alert('in handlePress JS controller. Implement your own')
	},
    scroll: function(component,event, helper) {
       location.hash = event.target.dataset.href;
    }
    
})