<aura:application >
  <ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>

  <div class="slds">
    <sdsx:container class="demo-container" size="large" align="center">
      <h2 class="slds-text-heading--medium slds-m-bottom--large">Pills: Base</h2>
      <sdsx:pill label="Pill Label" press="{!c.handlePress}">
        <sdsx:button press="{!c.handleClosePress}" iconCategory="utility" iconName="close" iconType="bare" />
      </sdsx:pill>
      <br/>
      Code:
      <sdsx:code >
      &lt;sdsx:pill label=&quot;Pill Label&quot; press=&quot;myJSHandler&quot;&gt;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;sdsx:button press=&quot;myCloseHandler&quot; iconCategory=&quot;utility&quot; iconName=&quot;close&quot; iconType=&quot;bare&quot; /&gt;<br />
      &lt;/sdsx:pill&gt;
     </sdsx:code>
    </sdsx:container>
    <sdsx:container class="demo-container" size="large" align="center">
      <h2 class="slds-text-heading--medium slds-m-bottom--large">Pills: Unlink</h2>
      <sdsx:pill label="Unlink" unlink="true" press="{!c.handlePress}"></sdsx:pill>
      <br/>
      Code:
      <sdsx:code >
      &lt;sdsx:pill label=&quot;Unlink&quot; unlink=&quot;true&quot; press=&quot;myJSHandler&quot;&gt;&lt;/sdsx:pill&gt;<br />
      </sdsx:code>
     </sdsx:container>

    <sdsx:container class="demo-container" size="large" align="center">
      <h2 class="slds-text-heading--medium slds-m-bottom--large">Pills: Icon</h2>
      <sdsx:pill label="Pill Label" press="{!c.handlePress}" iconCategory="standard" iconName="account" iconSize="small">
        <sdsx:button press="{!c.handleClosePress}" type="bare" iconCategory="utility" iconName="close" iconType="bare"/>
      </sdsx:pill>
      <br/>
      Code:
      <sdsx:code >
      &lt;sdsx:pill label=&quot;Pill Label&quot; press=&quot;myJSHandler&quot; iconCategory=&quot;standard&quot; iconName=&quot;account&quot; iconSize=&quot;small&quot;&gt;<br />
      &nbsp;&nbsp;&nbsp;&lt;sdsx:button press=&quot;myCloseHandler&quot; type=&quot;bare&quot; iconCategory=&quot;utility&quot; iconName=&quot;close&quot; iconType=&quot;bare&quot;/&gt;<br />
      &lt;/sdsx:pill&gt;
      </sdsx:code>
    </sdsx:container> 
      
   <sdsx:container class="demo-container" size="large" align="center">
      <h2 class="slds-text-heading--medium slds-m-bottom--large">Pills: Potrait</h2>
      <sdsx:pill label="Marc Benioff" press="{!c.handlePress}" avatarSrc="/resource/marc" avatarSize="x-small" avatarType="circle" avatarLabel="Marc">
        <sdsx:button press="{!c.handleClosePress}" type="bare" iconCategory="utility" iconName="close" iconType="bare"/>
      </sdsx:pill>
      <br/>
      Code:
      <sdsx:code >
      &lt;sdsx:pill label=&quot;Marc Benioff&quot; press=&quot;myJSHandler&quot; avatarSrc=&quot;/resource/marc&quot; avatarSize=&quot;x-small&quot; avatarType=&quot;circle&quot; avatarLabel=&quot;Marc&quot;&gt;<br />
      &nbsp;&nbsp;&nbsp;&nbsp;&lt;sdsx:button press=&quot;myCloseHandler&quot; type=&quot;bare&quot; iconCategory=&quot;utility&quot; iconName=&quot;close&quot; iconType=&quot;bare&quot;/&gt;<br />
      &lt;/sdsx:pill&gt;
      </sdsx:code>
    </sdsx:container>
  </div>
</aura:application>