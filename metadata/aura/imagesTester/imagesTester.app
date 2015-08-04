<aura:application >
  <ltng:require styles="/resource/sdsx__sds/assets/styles/salesforce-lightning-design-system-vf.css"/>

  <div class="slds">
    <sdsx:container size="large" align="center">
      <sdsx:container class="demo-container" size="large" align="center">
        <h2 class="slds-text-heading--medium slds-m-bottom--large">Images: Avatars</h2>
          <sdsx:avatar src="/resource/marc" label="Marc" size="x-small"/>
          <sdsx:avatar src="/resource/marc" label="Marc" size="small"/>
          <sdsx:avatar src="/resource/marc" label="Marc" size="medium"/>
          <sdsx:avatar src="/resource/marc" label="Marc" size="large"/>
          <sdsx:avatar src="/resource/marc" label="Marc" size="x-small" type="circle"/>
          <sdsx:avatar src="/resource/marc" label="Marc" size="small" type="circle"/>
          <sdsx:avatar src="/resource/marc" label="Marc" size="medium" type="circle"/>
          <sdsx:avatar src="/resource/marc" label="Marc" size="large" type="circle"/>
        <br/>
        Code:
        <sdsx:code >
          &lt;sdsx:avatar src=&quot;/resource/marc&quot; label=&quot;Marc&quot; size=&quot;x-small&quot;/&gt;<br />
          &lt;sdsx:avatar src=&quot;/resource/marc&quot; label=&quot;Marc&quot; size=&quot;small&quot;/&gt;<br />
          &lt;sdsx:avatar src=&quot;/resource/marc&quot; label=&quot;Marc&quot; size=&quot;medium&quot;/&gt;<br />
          &lt;sdsx:avatar src=&quot;/resource/marc&quot; label=&quot;Marc&quot; size=&quot;large&quot;/&gt;<br />
          &lt;sdsx:avatar src=&quot;/resource/marc&quot; label=&quot;Marc&quot; size=&quot;x-small&quot; type=&quot;circle&quot;/&gt;<br />
          &lt;sdsx:avatar src=&quot;/resource/marc&quot; label=&quot;Marc&quot; size=&quot;small&quot; type=&quot;circle&quot;/&gt;<br />
          &lt;sdsx:avatar src=&quot;/resource/marc&quot; label=&quot;Marc&quot; size=&quot;medium&quot; type=&quot;circle&quot;/&gt;<br />
          &lt;sdsx:avatar src=&quot;/resource/marc&quot; label=&quot;Marc&quot; size=&quot;large&quot; type=&quot;circle&quot;/&gt;
         </sdsx:code>
     </sdsx:container>
          <sdsx:container class="demo-only demo-container" size="large" align="center">
                    <sdsx:text type="introduction" value="Text"/>
                    <ul>
                        <li>
                            <sdsx:text >
                                body content
                            </sdsx:text>
                        </li>
                        <li>
                            <sdsx:text value="value content"/>
                        </li>
                        <li>
                            <sdsx:text value="value content">
                                body content overrides value content
                            </sdsx:text>
                        </li>
                        <li>
                            <sdsx:text size="small" value="body small"/>
                        </li>
                        <li>
                            <sdsx:text size="medium" value="body medium"/>
                        </li>
                        <li>
                            <sdsx:text size="large" value="body large"/>
                        </li>
                        <li>
                            <sdsx:text type="introduction" value="introduction"/>
                        </li>
                        <li>
                            <sdsx:text type="heading" size="small" value="heading small"/>
                        </li>
                        <li>
                            <sdsx:text type="heading" size="medium" value="heading medium"/>
                        </li>
                        <li>
                            <sdsx:text type="heading" size="large" value="heading large"/>
                        </li>
                        <li>
                            <sdsx:text type="heading" size="label" value="heading label"/>
                        </li>
                        <li>
                            <sdsx:text type="longform">
                                <p>The quick brown fox jumps over the lazy dog.</p>
                                <p>The quick brown fox jumps over the lazy dog.</p>
                                <h3 class="text-heading--small">Something</h3>
                                <ul>
                                    <li>The quick brown fox jumps over the lazy dog.</li>
                                    <li>The quick brown fox jumps over the lazy dog.</li>
                                </ul>
                            </sdsx:text>
                        </li>
                    </ul>
                </sdsx:container>
                
</sdsx:container>
</div>
</aura:application>