<aura:application access="GLOBAL" template="sdsx:sdsTemplate" useAppCache="true">
    <aura:attribute name="testData" type="Object" access="GLOBAL"/>
    <aura:attribute name="myComponents" type="Aura.Component[]" access="GLOBAL"/>
	<aura:handler name="init" value="{!this}" action="{!c.init}"/>
    
	<ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>
    
    <div class="slds">

        <div>
            <sdsx:icon category="action" name="announcement"/>
            <sdsx:icon category="action" name="announcement" size="small"/>
            <sdsx:icon category="action" name="announcement" size="medium"/>
            <sdsx:icon category="action" name="announcement" size="large"/>
            <sdsx:icon category="action" name="announcement" container="circle"/>
        </div>
        <div>
            <sdsx:icon category="doctype" name="xml"/>
            <sdsx:icon category="doctype" name="xml" container="circle"/>
            <sdsx:icon category="action" name="announcement" size="small"/>
            <sdsx:icon category="action" name="announcement" size="medium"/>
            <sdsx:icon category="action" name="announcement" size="large"/>
            <sdsx:icon category="action" name="announcement" container="circle"/>
        </div>
        <div>
            <sdsx:icon category="standard" name="account" label="Account"/>
            <sdsx:icon category="standard" name="case" label="Case"/>
            <sdsx:icon category="standard" name="lead" label="Lead"/>
            <sdsx:icon category="standard" name="opportunity" label="Opportunity"/>
            <sdsx:icon category="standard" name="contact" label="Contact"/>
            <sdsx:icon category="standard" name="account" container="circle" label="Account"/>
            <sdsx:icon category="standard" name="today" container="circle" label="Today"/>
            <sdsx:icon category="standard" name="link" container="circle" label="Link"/>
            <sdsx:icon category="standard" name="recent" container="circle" label="Recent"/>
        </div>
        <div style="background: #C0C0C0">
            <sdsx:icon category="standard" name="call"/>
            <sdsx:icon category="standard" name="call" color="blue"/>
            <sdsx:icon category="standard" name="call" color="#AA00AA"/>
            <sdsx:icon category="standard" name="call" color="rgba(50,100,200,0.5)"/>
            <sdsx:icon category="standard" name="call" style="background: green;"/>
            
            <sdsx:icon category="standard" name="call" container="circle"/>
            <sdsx:icon category="standard" name="call" container="circle" color="red"/>
            <sdsx:icon category="standard" name="call" container="circle" color="#00AA00"/>
            <sdsx:icon category="standard" name="call" container="circle" color="rgba(200,100,50,0.9)"/>
            <sdsx:icon category="standard" name="call" container="circle" color="rgba(200,100,50,0.7)"/>
            <sdsx:icon category="standard" name="call" container="circle" color="rgba(200,100,50,0.5)"/>
            <sdsx:icon category="standard" name="call" container="circle" color="rgba(200,100,50,0.3)"/>
            <sdsx:icon category="standard" name="call" container="circle" color="rgba(200,100,50,0.1)"/>
        </div>

        
        <sdsx:text type="heading" size="large">Large Heading Body</sdsx:text>
        <sdsx:text type="heading" size="large" value="Large Heading Value"/>
        <sdsx:text type="heading" size="large" value="Large Heading Value">Large Heading Body</sdsx:text>
        
        <sdsx:button press="{!c.test}" type="neutral" label="Not Stateful" iconCategory="utility" iconName="download" iconPosition="right"/>
        
        <sdsx:button press="{!c.test}" type="neutral" stateful="true" label="Stateful" iconCategory="utility" iconName="download" iconPosition="left"/>
        
        <sdsx:dialogManager />
        
        <hr/>
        
        <sdsx:button press="{!c.toggleDialog}" label="Toggle Dialog"/>
        <sdsx:button press="{!c.dynamicDialog}" label="Dynamic Dialog"/>
        
        <br/>
        
        <sdsx:dialog aura:id="dialog" heading="Testing">
        	My Dialog
        </sdsx:dialog>

        <sdsx:tabs type="task">
            <sdsx:tab title="Item One">
                <sdsx:tsPanel />
                <h1>This is a test</h1>
            </sdsx:tab>
            <sdsx:tab title="Item Two" active="true">
                <sdsx:tsPanel />
            </sdsx:tab>
            <sdsx:tab title="Item Three">
                <sdsx:tsPanel />
            </sdsx:tab>
        </sdsx:tabs>  
        
		<sdsx:tree heading="My Tree">
            <sdsx:treeBranch label="Root" expanded="true" nested="false">
                <sdsx:treeItem index="0">One</sdsx:treeItem>
                <sdsx:treeItem index="1">Two</sdsx:treeItem>
                <sdsx:treeItem index="2">Three</sdsx:treeItem>
                <sdsx:treeBranch label="3" expanded="true" nested="true">
                    <sdsx:treeItem index="0">Alpha</sdsx:treeItem>
                    <sdsx:treeItem index="1">Beta</sdsx:treeItem>
                    <sdsx:treeItem index="2">Gammma</sdsx:treeItem>
                </sdsx:treeBranch>
            </sdsx:treeBranch>
        </sdsx:tree>
        <hr/>
        
        <sdsx:tree heading="{!v.testData.heading}">
        	<aura:iteration items="{!v.testData.sobjects}" var="sobject">
	            <sdsx:treeBranch label="{!sobject.label}" expanded="true" nested="false">
                    <aura:iteration items="{!sobject.data}" var="item" indexVar="idx">
	    	            <sdsx:treeItem index="{!idx}">{!item.name} ({!item.id})</sdsx:treeItem>
                    </aura:iteration>
                </sdsx:treeBranch>
            </aura:iteration>
        </sdsx:tree>

        <hr/>
		<sdsx:tree heading="My Tree">
            <sdsx:treeBranch label="Root" expanded="true" nested="false">
                <sdsx:treeItem index="0">One</sdsx:treeItem>
                <sdsx:treeItem index="1">Two</sdsx:treeItem>
                <sdsx:treeItem index="2">Three</sdsx:treeItem>
                <sdsx:treeBranch label="3" expanded="true" nested="true">
                    <sdsx:treeItem index="0">Alpha</sdsx:treeItem>
                    <sdsx:treeItem index="1">Beta</sdsx:treeItem>
                    <sdsx:treeItem index="2">Gammma</sdsx:treeItem>
                </sdsx:treeBranch>
            </sdsx:treeBranch>
        </sdsx:tree>
        <hr/>
        
		<sdsx:tree >
            <sdsx:treeBranch label="Tree Branch" expanded="true" nested="false">
                <sdsx:treeItem index="0">Tree Item</sdsx:treeItem>
                <sdsx:treeItem index="1">Tree Item</sdsx:treeItem>
                <sdsx:treeItem index="2">Tree Item</sdsx:treeItem>
                <sdsx:treeBranch label="Tree Branch" expanded="true" nested="true">
                    <sdsx:treeItem index="0">Tree Item</sdsx:treeItem>
                    <sdsx:treeItem index="1">Tree Item</sdsx:treeItem>
                    <sdsx:treeItem index="2">Tree Item</sdsx:treeItem>
                    <sdsx:treeItem index="2">
                        <sdsx:treeBranch label="Tree Branch" expanded="true" nested="true">
                            <sdsx:treeItem index="0">Tree Item</sdsx:treeItem>
                            <sdsx:treeItem index="1">Tree Item</sdsx:treeItem>
                            <sdsx:treeItem index="2">Tree Item</sdsx:treeItem>
                        </sdsx:treeBranch>
                    </sdsx:treeItem>
                </sdsx:treeBranch>
            </sdsx:treeBranch>
        </sdsx:tree>
        <hr/>


<!--      
        <sdsx:tabs type="task">
            <sdsx:tab title="Item One">
                <sdsx:tsPanel />
                <h1>This is a test</h1>
            </sdsx:tab>
            <sdsx:tab title="Item Two" active="true">
                <sdsx:tsPanel />
            </sdsx:tab>
            <sdsx:tab title="Item Three">
                <sdsx:tsPanel />
            </sdsx:tab>
        </sdsx:tabs>    
        
        <sdsx:tabs type="task">
            <sdsx:tab title="Item One">
                <sdsx:tsPanel />
            </sdsx:tab>
            <sdsx:tab title="Item Two" lazyLoad="true">
                <sdsx:tsPanel />
            </sdsx:tab>
            <sdsx:tab title="Item Three" lazyLoad="true">
                <sdsx:tsPanel />
            </sdsx:tab>
        </sdsx:tabs>    

        <sdsx:tabs >
            <sdsx:tab title="Item One">
                Item One Content
            </sdsx:tab>
            <sdsx:tab title="Item Two">
                Item Two Content
            </sdsx:tab>
            <sdsx:tab title="Item Three">
                Item Three Content
            </sdsx:tab>
        </sdsx:tabs>    
        
        <sdsx:tabs type="default">
            <sdsx:tab title="Item One">
                Item One Content
            </sdsx:tab>
            <sdsx:tab title="Item Two">
                Item Two Content
            </sdsx:tab>
            <sdsx:tab title="Item Three">
                Item Three Content
            </sdsx:tab>
        </sdsx:tabs>
        
        <sdsx:tabs type="task">
            <sdsx:tab title="Item One">
                Item One Content
            </sdsx:tab>
            <sdsx:tab title="Item Two" active="true">
                Item Two Content
            </sdsx:tab>
            <sdsx:tab title="Item Three" active="true">
                Item Three Content
            </sdsx:tab>
        </sdsx:tabs>    
-->

        
    </div>
        
</aura:application>