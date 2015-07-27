({
	 scroll: function(component,event, helper) {
        var newHash = event.target.dataset.href || event.target.parentNode.dataset.href;
        var currentHash = location.hash;
         if(newHash === currentHash && newHash == '#top'){ //if its already #top, use #
               location.hash = "#";
         } else {
              location.hash = newHash;
         }    
    }
})