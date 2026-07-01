"use client";

import { useEffect } from "react";
import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Script from "next/script";

const ZohoNewsletter = () => {
  useEffect(() => {
    const setup = () => {
      if (window.setupSF) {
        window.setupSF('sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603','ZCFORMVIEW',false,'light',false,'2');
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
                window.setupSF('sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603','ZCFORMVIEW',false,'light',false,'2');
              }
              window.runOnFormSubmit_sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 = function(th: any){};
            }}
          />
          <style jsx global>{`
            ::-webkit-input-placeholder { color: hsl(var(--muted-foreground)) !important; }
            .SIGNUP_BODY { background-color: transparent !important; }
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
              width: 100% !important;
              sm:width: auto !important;
              padding: 0 2rem !important;
              border-radius: var(--radius) !important;
              background: linear-gradient(120deg, hsl(var(--primary)), hsl(var(--accent)), hsl(var(--primary))) !important;
              background-size: 200% 200% !important;
              animation: gradient-animation 10s ease infinite !important;
              font-weight: bold !important;
              color: hsl(var(--primary-foreground)) !important;
            }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #Zc_SignupSuccess {
                background-color: hsl(var(--card)) !important;
                border: 1px solid hsl(var(--primary)) !important;
                padding: 1rem !important;
                width: 100% !important;
                margin: 0 !important;
                position: relative !important;
                border-radius: var(--radius);
            }
            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 #signupSuccessMsg {
                color: hsl(var(--card-foreground)) !important;
                font-family: 'Inter', sans-serif !important;
                text-align: center;
            }
            #sf3zd95d9_rest_success_message{
                color: hsl(var(--card-foreground)) !important;
            }
            #sf3zd95d9_rest_success_message > a{
                color: hsl(var(--primary)) !important;
                text-decoration: underline;
            }
            #zcOptinSuccessPopup {
                background-color: hsl(var(--background)) !important;
                border: 1px solid hsl(var(--border)) !important;
                box-shadow: 0 10px 25px -5px rgb(0 0 0 / 0.1), 0 8px 10px -6px rgb(0 0 0 / 0.1) !important;
                color: hsl(var(--foreground)) !important;
                border-radius: var(--radius) !important;
            }

            #sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603 .successicon {
              display: none !important;
            }
          `}</style>

          <div id="sf3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603" data-type="signupform" className="zoho-form-container">
            <div id="customForm">
              <div name="SIGNUP_BODY" className="zoho-signup-body">
                <div className="zoho-form-inner">
                  <div className="relative">
                    <div id="Zc_SignupSuccess" className="zoho-signup-success-container">
                      <table width="100%" cellPadding="0" cellSpacing="0" border="0">
                        <tbody>
                          <tr>
                            <td width="10%">
                              <img className="successicon" src="https://zgnp-zngp.maillist-manage.com/images/challangeiconenable.jpg" alt="success" />
                            </td>
                            <td>
                              <span id="signupSuccessMsg" className="zoho-success-text">&nbsp;&nbsp;Thank you for Signing Up</span>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                  <form method="POST" id="zcampaignOptinForm" className="zoho-form-wrapper" action="https://zgnp-zngp.maillist-manage.com/weboptin.zc" target="_zcSignup">
                    <div className="zoho-error-msg" id="errorMsgDiv">Please correct the marked field(s) below.</div>
                    <div className="zoho-form-fields-container">
                      <div className="zoho-form-row">
                          <input type="text" placeholder="Your email address" name="CONTACT_EMAIL" id="EMBED_FORM_EMAIL_LABEL" />
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
                    <input type="hidden" id="new_optin_response_in" value="2" />
                    <input type="hidden" id="duplicate_optin_response_in" value="1" />
                    <input type="hidden" name="zc_trackCode" id="zc_trackCode" value="ZCFORMVIEW" />
                    <input type="hidden" id="zc_formIx" name="zc_formIx" value="3zd95d907a9dc64455d67f198836f9f9f195613cbdc16506aebc481d94cf964603" />
                    <input type="hidden" id="viewFrom" value="URL_ACTION" />
                    <span className="hidden" id="dt_CONTACT_EMAIL">1,true,6,Contact Email,2</span>
                    <span className="hidden" id="dt_FIRSTNAME">1,false,1,First Name,2</span>
                    <span className="hidden" id="dt_LASTNAME">1,false,1,Last Name,2</span>
                  </form>
                </div>
              </div>
            </div>
            <div id="zcOptinOverLay" onContextMenu={(e) => e.preventDefault()} className="hidden text-center bg-black/70 z-[100] fixed w-full top-0 left-0 h-screen"></div>
            <div id="zcOptinSuccessPopup" className="hidden z-[9999] w-[90%] max-w-[600px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 fixed p-6">
              <span className="absolute -top-4 -right-4 z-[99999] cursor-pointer" id="closeSuccess">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-x-circle"><circle cx="12" cy="12" r="10"/><path d="m15 9-6 6"/><path d="m9 9 6 6"/></svg>
              </span>
              <div id="zcOptinSuccessPanel"></div>
            </div>
            <img src="https://zgnp-zngp.maillist-manage.com/images/spacer.gif" id="refImage" onLoad={(e: any) => e.target.style.display='none'} className="hidden" alt="spacer" />
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