import { PrivacyModalStyled } from "./PrivacyModal.styled";
import {ReactComponent as CloseSVG} from "../../../images/svg-icons/close.svg";


export const PrivacyModal = ({handleClickClose}) => {

    
    return(
        <PrivacyModalStyled>
            <button type="button" className="modal-close-btn" onClick={handleClickClose}>
                <CloseSVG className="close-svg" width={18} height={18}/>
            </button>
            <h1 className="modal-h1-title">title</h1>
            <h2 className="modal-title">Privacy Policy</h2>
            <h3 className="paragraf-title">Introduction</h3>
            <p className="paragraf-text">
                We, as the owner of this domain, operate this advertising website ("Website"), which provides you with information about products or services of our partner(s) ("Advertiser(s)") and enables you, as the user of this Website, to apply for these products or services from the Advertiser on its websites ("Service"). The use of the Website and the Service are subject to Website Terms of Use, which are available at the Website ("Terms").For use of the Website and/or the Service, we need to process your personal data. We issued this Privacy Policy to provide you with detailed information about such data processing.
            </p>
            <h3 className="paragraf-title">Basic principles of personal data processing</h3>
            <p className="paragraf-text">
                We always respect your privacy and process your personal data fairly, legally and pursuant to this Privacy Policy and applicable law. In case you are in the European Union, we process your personal data pursuant to the Regulation (EU) 2016/679 of the European Parliament and of the Council of 27 April 2016 on the protection of natural persons with regard to the processing of personal data and on the free movement of such data, and repealing Directive 95/46/EC (General Data Protection Regulation; "GDPR")."
            </p>
            <p className="paragraf-text">
                We established appropriate technical and organisational measures to avoid any unauthorized usage or disclosure of personal data to persons, who are not authorized to process it and to avoid other kind of breach of security of processed personal data. 
            </p>
            <p className="paragraf-text">
                In case any breach of security of processed personal data occurs, which would mean a high risk to your rights and freedoms, we will immediately inform you to your e-mail address you gave us.
            </p>
            <p className="paragraf-text">
                We do not publish your personal data, unless you give us a previous consent to do it.
            </p>
            <h3 className="paragraf-title">Personal data we process</h3>
            <p className="paragraf-text">
                We process personal data filled in the registration form available at the Website. By sending off a filled registration form we are concluding a contract under which we provide you with the Service, to process your application to enter into a contract with the Advertiser to buy products or services advertised on this Website.
            </p>
            <p className="paragraf-text">
                Moreover, we process IP address and cookies of the users of our Website. Cookies are small text files saved in your computer, which help us to make your experience with the website better. Each user has a choice to decline the cookies using the settings in his/her web browser. Limitation of use of the cookies may influence the functioning of our website.
            </p>
            <p className="paragraf-text">
                We consider personal data you gave us to be true, actual and correct. Any harm caused by incorrect personal data shall be borne by the person that gave us the respective data.
            </p>
            <h3 className="paragraf-title">Purposes, legal basis and periods of the personal data processing</h3>
            <p className="paragraf-text">
                Processing of your personal data is necessary for the provision of the Service to you. For this purpose, we process all personal data you filled in the registration form or disclosed to us otherwise. Your personal data will be processed for a period during which we provide the Service to you in accordance with the Terms.
            </p>
            <p className="paragraf-text">
                [i18n] Your IP address, e-mail address and information obtained based on the cookies is processed for the purpose of sending you newsletters about the products or services related to this Website as well as newsletters to provide you with information about commercial opportunities that may be interesting for you. The commercial offers may be of the Advertisers as well as of our other business partners. This processing is based on your consent (given by marking a checkbox in the registration form). You have a right to withdraw your consent free of charge at any time, without affecting the lawfulness of processing based on such consent before its withdrawal as well as processing performed upon other legal basis than your consent. Your e-mail address for this purpose will be processed until you withdraw your consent.
            </p>
            <h3 className="paragraf-title">Ways of the processing of the personal data</h3>
            <p className="paragraf-text">
                We process your personal data automatically. Please, be sure, that such is not a process, that could lead to an individual decision, which could have legal effects on you or similarly significantly affects you.
            </p>
            <p className="paragraf-text">
                Also, we may delegate processing or its part to processors, a provider of mass mailing services and a provider of IT services and cloud services. We choose our processors with due care, so your personal data are protected at any time of their processing.
            </p>
            <p className="paragraf-text">
                For the provision of the Service it is essential to disclose your personal data to the Advertisers.
            </p>
            <p className="paragraf-text">
                The Advertisers and processors are recipients of your personal data. The data can be transferred to any state in the world. The transfer of your personal data to Advertisers is necessary for the performance of a contract between us, as specified in the Terms. Should we transfer your personal data, we always do such upon the suitable safeguards (the recipients are bound to keep appropriate protection etc.), so appropriate protection of your personal data is ensured.
            </p>
            <h3 className="paragraf-title">Data subject rights</h3>
            <p className="paragraf-text">
                Where GDPR is applicable to the processing, you are entitled to exercise following rights of the data subject:
            </p>
            <ul className="paragraf-subject-list">
                <li className="paragraf-subject-item">
                    <p className="paragraf-text">
                        Right of access to personal data (Article 15 of GDPR)
                    </p>
                </li>
                <li className="paragraf-subject-item">
                    <p className="paragraf-text">
                        Right to rectification (Article 16 of GDPR)
                    </p>
                </li>
                <li className="paragraf-subject-item">
                    <p className="paragraf-text">
                        Right to erasure (Article 17 of GDPR)
                    </p>
                </li>
                <li className="paragraf-subject-item">
                    <p className="paragraf-text">
                        Right to restriction of processing (Article 18 of GDPR)
                    </p>
                </li>
                <li className="paragraf-subject-item">
                    <p className="paragraf-text">
                        Right to data portability (Article 20 of GDPR)
                    </p>
                </li>
                <li className="paragraf-subject-item">
                    <p className="paragraf-text">
                        Right to object (Article 21 of GDPR)
                    </p>
                </li>
                <li className="paragraf-subject-item">
                    <p className="paragraf-text">
                        Right not to be subject to a decision based solely on automated processing, including profiling, which produces legal effects concerning the data subject or similarly significantly affects the data subject (Article 22 of GDPR)
                    </p>
                </li>
                <li className="paragraf-subject-item">
                    <p className="paragraf-text">
                        Right to lodge a complaint with a supervisory authority (Article 77 of GDPR)
                    </p>
                </li>
            </ul>
            <p className="paragraf-text">
                Please, note, that in cases we are not obliged to proceed pursuant to the GDPR, we are not obliged to comply with abovementioned rights. However, even in such case, we will do our best to deal with your complaint, request or inquiry to your satisfaction.
            </p>
            <p className="paragraf-text">
                Before we start acting upon your request it may be necessary to verify your identity. This measure is necessary for the protection of your personal data, so we don't provide your personal data to a third person. In case you refuse to provide us with information allowing us to identify you, we will not be able to process your request.
            </p>
            <p className="paragraf-text">
                We will answer to your request without undue delay and in any event within one month of receipt of the request. In case it will be impossible to handle your request, we will inform you in designed period about the prolongation of the period for answer by two months maximum.
            </p>
            <p className="paragraf-text">
                We will use electronic means for the communication, e.g. we will reply via e-mail. In case you prefer other type of communication, please, let us know.
            </p>
            <p className="paragraf-text">
                We will provide any communication and any action free of charge. However, in case your request will be manifestly unfound or excessive (in particular due to its repetitive character), we may charge you a reasonable fee, taking into account the administrative costs related to providing the information or communication or taking the action requested, or refuse to act on the request.
            </p>
            <p className="paragraf-text">
                You can exercise your rights, file a complaint or inquiry by contacting us at e-mail address or correspondence address below.
            </p>
            <p className="paragraf-text for-margin">
                You can file your complaint related to personal data protection to a respective state body empowered in data protection area, and also to ask for a judicial protection in case you are of an opinion, that your rights related to data protection were breached. Should you need more information about the respective authority of your country, do not hesitate to contact us for assistance.
            </p>
        </PrivacyModalStyled>
    )
};