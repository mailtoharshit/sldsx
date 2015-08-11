<aura:application access="GLOBAL">
  <ltng:require styles="/resource/slds/assets/styles/salesforce-lightning-design-system-vf.css"/>
    <div class="slds">
        <sldsx:grid wrap="true" class="topHeader">
            <sldsx:col size="1-of-1" mdSize="1-of-12" lgSize="1-of-12">
         		<img src="/resource/logo" label="logo" size="large"/>
            </sldsx:col>
                <sldsx:col size="1-of-1" mdSize="10-of-12" lgSize="10-of-12"> 
                <h1 class="slds-text-heading--large slds-truncate">Salesforce Lightning Design System</h1>
            </sldsx:col>
        </sldsx:grid>
        <sldsx:grid wrap="true">
          <sldsx:col size="1-of-1" mdSize="2-of-12" lgSize="2-of-12" class="sidebar">
             
               <sldsx:list direction="block">
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#breadCrumbs">Bread Crumbs</a></sldsx:listItem>
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#buttonGroups">Button Groups</a></sldsx:listItem>
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#buttons">Buttons</a></sldsx:listItem>
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#gridSystem">Grid System</a></sldsx:listItem>
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#images">Images</a></sldsx:listItem>
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#labels">Labels</a></sldsx:listItem>
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#lists">Lists</a></sldsx:listItem>
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#mediaObjects">Media Objects</a></sldsx:listItem>
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#pills">Pills</a></sldsx:listItem>
                 <sldsx:listItem itemClass="item"><a onclick="{!c.scroll}" data-href="#tabs">Tabs</a></sldsx:listItem>
         		</sldsx:list>
            </sldsx:col>
           <sldsx:col size="1-of-1" mdSize="10-of-12" lgSize="10-of-12">              
            <sldsx:docHeader name="Bread Crumbs" top="false" anchorName="breadCrumbs"/>
            <sldsx:breadCrumbsDoc />
            <a name="buttonGroups"></a>
            <sldsx:docHeader name="Button Groups" anchorName="buttonGroups"/>   
            <sldsx:buttonGroupsDoc />
            <sldsx:docHeader name="Buttons" anchorName="buttons"/>   
            <sldsx:buttonsDoc />
            <sldsx:docHeader name="Grid System" anchorName="gridSystem"/>   
            <sldsx:gridDoc />
            <sldsx:docHeader name="Images" anchorName="images"/>   
            <sldsx:imagesDoc />
            <sldsx:docHeader name="Labels" anchorName="labels"/>        
            <sldsx:labelsDoc />
            <sldsx:docHeader name="Lists" anchorName="lists"/>  
            <sldsx:listsDoc />
            <sldsx:docHeader name="Media Objects" anchorName="mediaObjects"/> 
            <sldsx:mediaObjectsDoc />
            <sldsx:docHeader name="Pills" anchorName="pills"/>
            <sldsx:pillsDoc />
            <sldsx:docHeader name="Tabs" anchorName="tabs"/>
            <sldsx:tabsDoc />
           </sldsx:col>
        </sldsx:grid>
    </div>
</aura:application>