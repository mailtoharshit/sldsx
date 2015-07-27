<aura:application >
  <ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>

  <div class="slds">
    <sdsx:container size="large" align="center">
      <sdsx:container class="demo-container" size="large" align="center">
        <h2 class="slds-text-heading--medium slds-m-bottom--large">Labels: Base</h2>
        <sdsx:label value="Label"/>
        <sdsx:label theme="default" value="Label"/>
        <sdsx:label theme="shade" value="Label"/>
        <sdsx:label theme="inverse" value="Label"/> 
        <br/>
        <br/>
        Code:
        <sdsx:code >
        &lt;sdsx:label value=&quot;Label&quot;/&gt;
        &lt;sdsx:label theme=&quot;default&quot; value=&quot;Label&quot;/&gt;
        &lt;sdsx:label theme=&quot;shade&quot; value=&quot;Label&quot;/&gt;
        &lt;sdsx:label theme=&quot;inverse&quot; value=&quot;Label&quot;/&gt;
        </sdsx:code>
    </sdsx:container>
</sdsx:container>
</div>
</aura:application>