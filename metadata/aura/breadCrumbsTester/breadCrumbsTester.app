<aura:application >
  <ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>

  <div class="slds">
    <sdsx:container class="demo-container" size="large" align="center">
      <h2 class="slds-text-heading--medium slds-m-bottom--large">Bread Crumbs: Base</h2>
      <sdsx:breadCrumbs labels="Parent, Child, Grand Child"/>
      <br/>
      Code:
      <sdsx:code >
      	&lt;sdsx:breadCrumbs labels=&quot;Parent, Child, Grand Child&quot;/&gt;
     </sdsx:code>
    </sdsx:container>
  </div>
</aura:application>