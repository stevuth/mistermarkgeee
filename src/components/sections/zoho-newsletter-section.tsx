
"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Script from "next/script";

const ZohoNewsletter = () => {
  useEffect(() => {
    const setup = () => {
      if (window.setupSF) {
        window.setupSF('sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603','ZCFORMVIEW',false,'light',false,'0');
      }
    };

    if (document.readyState === "complete") {
      setup();
    } else {
      window.addEventListener("load", setup);
      return () => window.removeEventListener("load", setup);
    }
  }, []);

  return (
    <section id="newsletter" className="py-24 sm:py-32 bg-secondary/30">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          className="max-w-2xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <Mail className="mx-auto h-12 w-12 text-primary" />
          <h2 className="font-headline text-4xl md:text-5xl font-bold mt-6 text-foreground">
            Stay in the Loop
          </h2>
          <p className="mt-4 text-lg text-foreground/70">
            Join my newsletter to get the latest updates on projects, behind-the-scenes content, and exclusive insights delivered right to your inbox.
          </p>
        </motion.div>

        <motion.div
          className="mt-12 max-w-lg mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          viewport={{ once: true }}
        >
          <Script
            type="text/javascript"
            src="https://zgnp-zngp.maillist-manage.com/js/optin.min.js"
            strategy="lazyOnload"
            onLoad={() => {
              if (window.setupSF) {
                window.setupSF('sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603','ZCFORMVIEW',false,'light',false,'0');
              }
              window.runOnFormSubmit_sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 = function(th: any){
                /*Before submit, if you want to trigger your event, "include your code here"*/
              };
            }}
          />
          <style jsx global>{`
            ::-webkit-input-placeholder { color: rgb(106, 73, 162) !important; }
            .SIGNUP_BODY { background-color: transparent !important; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 { margin: 0 auto; max-width: 400px; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #customForm { width: 100% !important; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 [name="SIGNUP_BODY"] { width: 100% !important; height: auto !important; background: transparent !important; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 [changeitem="ELEGANTFORM_IMAGE"] { display: none !important; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 > div > div > div:nth-child(2) { all: unset; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #zcampaignOptinForm { display: flex; flex-direction: column; gap: 1rem; width: 100% !important; color: hsl(var(--foreground)) !important; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #zcampaignOptinForm > div:first-child,
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #zcampaignOptinForm > link { display: none; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #zcampaignOptinForm > div:nth-of-type(2) { all: unset; display: flex; flex-direction: column; sm:flex-direction: row; gap: 1rem; width: 100% !important; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #zcampaignOptinForm > div:nth-of-type(2) > div { all: unset; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #zcampaignOptinForm > div:nth-of-type(2) > div:nth-child(1),
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #zcampaignOptinForm > div:nth-of-type(2) > div:nth-child(2) { display: none; }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #zcampaignOptinForm input[name="CONTACT_EMAIL"] {
              flex-grow: 1;
              background-color: hsl(var(--background) / 0.8) !important;
              color: hsl(var(--foreground)) !important;
              border: 1px solid hsl(var(--border)) !important;
              border-radius: var(--radius) !important;
              height: 3rem !important; /* h-12 */
              padding: 0 1rem !important;
              width: 100% !important;
            }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #zcampaignOptinForm #zcWebOptin {
              height: 3rem !important;
              width: auto !important;
              padding: 0 2rem !important;
              border-radius: var(--radius) !important;
              background: linear-gradient(120deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary))) !important;
              background-size: 200% 200% !important;
              animation: gradient-animation 10s ease infinite !important;
              font-weight: bold !important;
            }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #Zc_SignupSuccess {
                background-color: hsl(var(--card)) !important;
                border: 1px solid hsl(var(--primary)) !important;
                padding: 1rem !important;
                width: 100% !important;
                margin: 0 !important;
            }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #signupSuccessMsg {
                color: hsl(var(--primary-foreground)) !important;
            }
          `}</style>

          <div id="sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603" data-type="signupform" style={{ opacity: 1 }}>
            <div id="customForm">
              <div id="SIGNUP_BODY" name="SIGNUP_BODY" style={{ width: '100%', position: 'relative', margin: 'auto', backgroundColor: 'transparent', overflow: 'hidden' }}>
                <div style={{ width: '100%', position: 'relative', fontFamily: '"Arial"', margin: 'auto' }}>
                  <div style={{position:'relative'}}>
                    <div id="Zc_SignupSuccess" style={{display:'none',position:'absolute',marginLeft:'4%',width:'90%',backgroundColor:'white', padding:'3px', border:'3px solid rgb(194, 225, 154)',  marginTop:'10px',marginBottom:'10px',wordBreak:'break-all'}}>
                      <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                          <tr>
                            <td width="10%">
                              <img className="successicon" src="https://zgnp-zngp.maillist-manage.com/images/challangeiconenable.jpg" align="absmiddle" />
                            </td>
                            <td>
                              <span id="signupSuccessMsg" style={{color:'rgb(73, 140, 132)', fontFamily:'sans-serif', fontSize:'14px',wordBreak:'break-word'}}>&nbsp;&nbsp;Thank you for Signing Up</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <form method="POST" id="zcampaignOptinForm" style={{ margin: '0px', width: '100%'}} action="https://zgnp-zngp.maillist-manage.com/weboptin.zc" target="_zcSignup">
                    <div style={{backgroundColor: 'rgb(255, 235, 232)', padding: '10px', color: 'rgb(210, 0, 0)', fontSize: '11px', border: '1px solid rgb(255, 217, 211)', opacity: 1, position: 'absolute', width: '80%', margin: '20px 10%', boxShadow: 'rgb(27, 27, 27) 0px 5px 12px 0px', display: 'none'}} id="errorMsgDiv">Please correct the marked field(s) below.</div>
                    <div style={{ textAlign: 'center', width: '100%', float: 'left', position: 'relative', zIndex: 2}}>
                      <div style={{ textAlign: 'center', margin: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }} className="sm:flex-row">
                          <input type="text" placeholder="Your email address" changeitem="SIGNUP_FORM_FIELD" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" />
                          <input type="button" name="SIGNUP_SUBMIT_BUTTON" id="zcWebOptin" value="Subscribe" />
                      </div>
                    </div>
                    <input type="hidden" id="fieldBorder" value="" />
                    <input type="hidden" id="submitType" name="submitType" value="optinCustomView" />
                    <input type="hidden" id="emailReportId" name="emailReportId" value="" />
                    <input type="hidden" id="formType" name="formType" value="QuickForm" />
                    <input type="hidden" name="zx" id="cmpZuid" value="135ca8958" />
                    <input type="hidden" name="zcvers" value="3.0" />
                    <input type="hidden" name="oldListIds" id="allCheckedListIds" value="" />
                    <input type="hidden" id="mode" name="mode" value="OptinCreateView" />
                    <input type="hidden" id="zcld" name="zcld" value="11571d93c42662d47" />
                    <input type="hidden" id="zctd" name="zctd" value="11571d93c42662b91" />
                    <input type="hidden" id="document_domain" value="" />
                    <input type="hidden" id="zc_Url" value="zgnp-zngp.maillist-manage.com" />
                    <input type="hidden" id="new_optin_response_in" value="0" />
                    <input type="hidden" id="duplicate_optin_response_in" value="0" />
                    <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                    <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603" />
                    <input type="hidden" id="viewFrom" value="URL_ACTION" />
                    <span style={{ display: 'none' }} id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                    <span style={{ display: 'none' }} id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                    <span style={{ display: 'none' }} id="dt_LASTNAME">1,false,1,Last Name,2</span>
                  </form>
                </div>
              </div>
            </div>
            <img src="https://zgnp-zngp.maillist-manage.com/images/spacer.gif" id="refImage" onLoad={(e: any) => e.target.style.display='none'} style={{display:'none'}} />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

declare global {
  interface Window {
    setupSF: any;
    runOnFormSubmit_sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603: any;
  }
}


export default ZohoNewsletter;
