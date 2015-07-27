<aura:application access="GLOBAL">
  <ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>
  	<!--scroll-to-top anchor --> 
    <a name="top"></a> 
    <div class="slds">
        <sdsx:grid wrap="true" class="topHeader">
            <sdsx:col size="1-of-1" mdSize="1-of-12" lgSize="1-of-12">
         		<img src="/resource/logo" label="logo" size="large"/>
            </sdsx:col>
                <sdsx:col size="1-of-1" mdSize="10-of-12" lgSize="10-of-12"> 
                <h1 class="slds-text-heading--large slds-truncate">Salesforce Lightning Design System</h1>
            </sdsx:col>
        </sdsx:grid>
        <sdsx:grid wrap="true">
          <sdsx:col size="1-of-1" mdSize="2-of-12" lgSize="2-of-12" class="sidebar">
             
               <sdsx:list direction="block">
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#breadCrumbs">Bread Crumbs</a></sdsx:listItem>
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#buttonGroups">Button Groups</a></sdsx:listItem>
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#buttons">Buttons</a></sdsx:listItem>
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#gridSystem">Grid System</a></sdsx:listItem>
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#images">Images</a></sdsx:listItem>
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#labels">Labels</a></sdsx:listItem>
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#lists">Lists</a></sdsx:listItem>
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#mediaObjects">Media Objects</a></sdsx:listItem>
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#pills">Pills</a></sdsx:listItem>
                 <sdsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#tabs">Tabs</a></sdsx:listItem>
         		</sdsx:list>
            </sdsx:col>
           <sdsx:col size="1-of-1" mdSize="10-of-12" lgSize="10-of-12">              
            <sdsx:docHeader name="Bread Crumbs" top="false" anchorName="breadCrumbs"/>
            <sdsx:breadCrumbsDoc />
            <a name="buttonGroups"></a>
            <sdsx:docHeader name="Button Groups" anchorName="buttonGroups"/>   
            <sdsx:buttonGroupsDoc />
            <sdsx:docHeader name="Buttons" anchorName="buttons"/>   
            <sdsx:buttonsDoc />
            <sdsx:docHeader name="Grid System" anchorName="gridSystem"/>   
            <sdsx:gridDoc />
            <sdsx:docHeader name="Images" anchorName="images"/>   
            <sdsx:imagesDoc />
            <sdsx:docHeader name="Labels" anchorName="labels"/>        
            <sdsx:labelsDoc />
            <sdsx:docHeader name="Lists" anchorName="lists"/>  
            <sdsx:listsDoc />
            <sdsx:docHeader name="Media Objects" anchorName="mediaObjects"/> 
            <sdsx:mediaObjectsDoc />
            <sdsx:docHeader name="Pills" anchorName="pills"/>
            <sdsx:pillsDoc />
            <sdsx:docHeader name="Tabs" anchorName="tabs"/>
            <sdsx:tabsDoc />
           </sdsx:col>
        </sdsx:grid>
    </div>
</aura:application>