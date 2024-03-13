import { TermsModalStyled } from "./TermsModal.styled";
import {ReactComponent as CloseSVG} from "../../../images/svg-icons/close.svg";
import { NavLink } from "react-router-dom";



export const TermsModal = ({handleClickClose}) => {
    const currentOrigin = window.location.origin;
    const handleReloadPage = () => {
        window.location.reload();
    };

    
    return(
        <TermsModalStyled>
            <button type="button" className="modal-close-btn" onClick={handleClickClose}>
                <CloseSVG className="close-svg" width={18} height={18}/>
            </button>
            <h1 className="modal-h1-title">title</h1>
            <h2 className="modal-title">Terms of use</h2>
            <h3 className="paragraf-title">General</h3>
            <p className="paragraf-text">
                The <span><NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                Web Site (the "Site") is an online informational and educational service provided by 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink></span>, 
                subject to your compliance with the terms and conditions set for the below.
            </p>
            <p className="paragraf-text">
                PLEASE READ THIS DOCUMENT CAREFULLY BEFORE ACCESSING OR USING THE SITE. BY ACCESSING OR USING THE SITE, YOU AGREE TO BE BOUND BY THE TERMS AND CONDITIONS SET FORTH BELOW. IF YOU DO NOT WISH TO BE BOUND BY THESE TERMS AND CONDITIONS, YOU MAY NOT ACCESS OR USE THE SITE.
            </p>
            <p className="paragraf-text">
                <span><NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink></span> may modify this agreement at any time, and such modifications shall be effective immediately upon posting of the modified agreement on the site. you agree to review the agreement periodically to be aware of such modifications and your continued access or use of the site shall be deemed your conclusive acceptance of the modified agreement.
            </p>
            <h3 className="paragraf-title">Risk Warning</h3>
            <p className="paragraf-text">
                In spread betting there is a degree of leverage and as such there will be a high level of risk to yourcapital with the possibility of losing more than your initial investment and this will be not suitable for allinvestors.
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                does not make representations that all customers will achieve similar profits asadvertised on this site. The past performance of our system is not necessarily indicative of futuresmovements. Before subscribing to our information system, and placing any trades, please ensure youfully understand the risks, and seek independent advice if necessary
            </p>
            <h3 className="paragraf-title">Copyright, Licenses and Idea Submissions</h3>
            <p className="paragraf-text">
                The entire contents of the Site are protected by international copyright and trademark laws. The owner of the copyrights and trademarks are 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink></span>
                , its affiliates or other third party licensors. You may not modify, copy, reproduce, republish, upload, post, transmit, or distribute, in any manner, thematerial on the site, including text, graphics, code and/or software. You may print and download portions of material from the different areas of the Site solely for your own non-commercial use provided that you agree not to change or delete any copyright or proprietary notices from the materials. You agree to grant to 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span>
                a non-exclusive, royalty-free, worldwide, perpetual license,with the right to sub-license, to reproduce, distribute, transmit, create derivative works of, publicly display and publicly perform any materials and other information (including, without limitation, ideas contained there in for new or improved products and services) you submit to any public areas of the Site(such as bulletin boards, forums and newsgroups) or by e-mail to 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                by all means and in any media now known or hereafter developed. You also grant to 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                the right to use your name in connection with the submitted materials and other information as well as in connection with all advertising, marketing and promotional material related there to. You agree that you shall have no recourse against 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span>
                for any alleged or actual infringement or misappropriation of any proprietary right in your communications to 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink></span>.
            </p>
            <h3 className="paragraf-title">Trademarks</h3>
            <p className="paragraf-text">
                Publications, products, content or services referenced here in or on the Site are the exclusive trademarks or servicemarks of 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink></span>. 
                Other product and company names mentioned in the Site may be the trademarks of their respective owners.
            </p>
            <h3 className="paragraf-title">Use of the Site</h3>
            <p className="paragraf-text">
                This service is an informational and educational service only. It is not Individual Advice, or an invitation to trade. To use the system will require you to open an account with an independent provider of such accounts. The choice of such accounts is only yours. We are not responsible for charges, advice or the operation of any such account. Under no circumstance can we or will we give individual advice on the merits or otherwise of any particular trade in any option, bet, security asset or market. You understand that, except for information, products or services clearly identified as being supplied by
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink></span>, 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                does not operate, control or endorse any information, productsor services on the Internet in any way. Except for 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                - identified information, productsor services, all information, products and services offered through the Site or on the Internet generally are offered by third parties, that are not affiliated with 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink></span>. 
                You also understand that
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                cannot and does not guarantee or warrant that files available for downloading through the Site will be free of infection or viruses, worms, Trojan horses or other code that manifest contaminating or destructive properties. You are responsible for implementing sufficient procedures and checkpoints to satisfy your particular requirements for accuracy of data input and output, and formaintaining a means external to the Site for the reconstruction of any lost data.You assume total responsibility and risk for your use of the site and the internet. 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                the site and related information "as is" and does not make any express or implied warranties, representations or endorsements whatsoever (including without limitation warranties of title or no infringement, or the implied warranties of merchantability or fitness for a particular purpose) withregard to the service, any merchandise information or service provided through the service or on the internet generally, and 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                shall not be liable for any cost or damage arising either directly or indirectly from any such transaction. It is solely your responsibility to evaluate theaccuracy, completeness and usefulness of all opinions, advice, services, merchandise and other information provided through the service or on the internet generally. 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                does not warrant that theservice will be uninterrupted or error-free or that defects in the service will be corrected.
            </p>
            <h3 className="paragraf-title">LIMITATION OF LIABILITY</h3>
            <p className="paragraf-text">
                In no event will 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span>
                be liable for (i) any incidental, consequential, or indirect damages(including, but not limited to, damages for loss of profits, business interruption, loss of programs or information, and the like) arising out of the use of or inability to use the service, or any information, ortransactions provided on the service, or downloaded from the service, or any delay of such information or service. Even if 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                or its authorized representatives have been advised of the possibility of such damages, or (ii) any claim attributable to errors, omissions, or other inaccuracies in the service and/or materials or information downloaded through the service. Because some states do not allow the exclusion or limitation of liability for consequential or incidental damages, the above limitation may not apply to you. In such states, 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                liability is limited to the greatest extent permitted by law. 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                makes no representations whatsoever about any other web site which you may access through this one or which may link to this Site. When you access a non 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                website, please understand that it is independent from 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink></span>,
                and that 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                has no control over the content on that web site. In addition, a link to a 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                web site does not mean that 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                end or ses or accepts any responsibility for the content, or the use, of such web site.
            </p>
            <h3 className="paragraf-title">Indemnification</h3>
            <p className="paragraf-text">
                You agree to indemnify, defend and hold harmless 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink></span>, 
                its officers, directors, employees, agents, licensors, suppliers and any third party information providers to the Service from and against all losses, expenses, damages and costs, including reasonable attorneys' fees, resulting from any violation of this Agreement (including negligent or wrongful conduct) by you or any other person accessing the Service
            </p>
            <h3 className="paragraf-title">Third Party Rights</h3>
            <p className="paragraf-text">
                The provisions of paragraphs Use of the Site and Indemnification are for the benefit of BorisFedotov.com and its officers, directors, employees, agents, licensors, suppliers, and any third party information providers to the Service. Each of these individuals or entities shall have the right to assertand enforce those provisions directly against you on its own behalf.
            </p>
            <h3 className="paragraf-title">Miscellaneous</h3>
            <p className="paragraf-text">
                This Agreement shall all be governed and construed in accordance with the laws of the United Kingdom applicable to agreements made and to be performed in the United Kingdom. Any cause of action or claim you may have with respect to the Service must be commenced within one (1) year after the claimor cause of action arises or such claim or cause of action is barred. 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                failure to insist upon or enforce strict performance of any provision of this Agreement shall not be construed as awaiver of any provision or right. Neither the course of conduct between the parties nor trade practiceshall act to modify any provision of this Agreement. 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span> 
                may assign its rights and duties under this Agreement to any party at any time without noticing you. Any rights not expressly granted here in are reserved.
            </p>
            <h3 className="paragraf-title">Subscription details</h3>
            <p className="paragraf-text for-margin">
                To become a subscriber, you must be at least 18 years of age and will have to complete the Subscription Registration Form. If you register, you will be required to pay a subscription fee and will be making certain promises and agreements and will be legally obligated to observe the terms and conditions of the 
                <span> <NavLink className="link" to={currentOrigin} aria-label="link" rel="noreferrer noopener" onClick={handleReloadPage}>{currentOrigin}</NavLink> </span>  
                which follow. Please read them together with the Risk Warningand Disclaimer before completing the Subscription Registration Form.
            </p>
        </TermsModalStyled>
    )
};