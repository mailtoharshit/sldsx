({
    init: function(component, event, helper) {
        var t1 = Date.now();
        helper.update(component);
        var t2 = Date.now();
        //console.warn(component.getLocalId() + " init time: ", (t2 - t1) + " ms");
    },
    
    update: function(component, event, helper) {
        //console.warn("update: ", event);
        var t1 = Date.now();
        helper.update(component);
        var t2 = Date.now();
        //console.warn(component.getLocalId() + " update time: ", (t2 - t1) + " ms");
    }
})