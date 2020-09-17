import React, { Component } from "react";
import "./Document.css";
import {client} from "./../../../index";
import {gql} from "@apollo/client";

const GET_USER_DETAILS=gql`
query GetUserDetail($userid:ID){
  GetUserDetail(userid:$userid){
    email
    name
  }
}

`

class DocumentLink2 extends Component {

state={}

componentDidMount=async()=>{

let UrlPath=window.location.pathname;
let customerId=parseInt(UrlPath.substring(UrlPath.indexOf(":")+4,UrlPath.length))
console.log("customerId",customerId)
let response=await client.query({query:GET_USER_DETAILS,variables:{userid:customerId}})
this.setState({name:response.data.GetUserDetail.name})



}


  render() {
    
    return (
      <div className="docContainer">
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            padding: "20px",
          }}
        >
          <h4 style={{ fontWeight: "600", color: "blue", fontSize: "20px" }}>
            Bolt Energy Services
          </h4>
          <h4>RESIDENTIAL AND SMALL COMMERCIAL</h4>
          <h4>Carbon Offset Program</h4>
          <h4>NATURAL GAS TERMS OF SERVICE</h4>
          <h4>INDIANA MARKETS</h4>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Terms of Service</h5>
          <p>
            Public Utilities Code Section 986 requires that each registered Core
            Transport Agent (CTA) offering natural gas (gas) service to
            residential and small commercial customers provide the potential
            customer with this written notice prior to the commencement of
            service. This written notice describes the price, terms and
            conditions of service that will apply to you, if you decide to
            purchase gas from us. Bolt Energy is a registered CTA with the
            California Public Utilities Commission. Our CTA registration number
            is CTA0039. Our address is 75 Lake Road Suite 215 Congers, N.Y.
            10920. Our toll-free telephone number is (800) 213-2870.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Summary</h5>
          <p>
            This notice contains important information regarding the price,
            terms, and conditions of service with our company. This summary
            describes some of the more important points covered in this notice.
            You should, however, read the entire notice so that you understand
            all of the price, terms, and conditions which apply to you. Your
            total price of gas is estimated to be $1.49 per day. This total
            price of gas includes the estimated price of gas, the estimated
            price to transport the gas to your home or business, and all other
            estimated charges. In addition to your payments to us, you are also
            obligated to pay your existing gas utility certain recurring charges
            for gas service, and charges regulated by the California Public
            Utilities Commission. You may also have to pay your gas utility for
            certain non-recurring charges regulated by the California Public
            Utilities Commission. You should refer to your gas utility bill or
            contact your gas utility to determine the amount for each of those
            charges. If you choose our company to be your CTA, you agree to let
            us be your gas provider for a period of 24 months from the
            enrollment effective date, and then on a month-to-month basis,
            unless you choose another gas service provider or sign a new service
            agreement with us. Should you decide to terminate this arrangement
            earlier, you will be responsible of paying a cancellation fee of
            $199. You may rescind this agreement by calling our toll free number
            within 3 business days of the sales agreement, or by sending 30 days
            written notice prior to the expiration of the term.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Your Right To Choose</h5>
          <p>
            You have the right to choose who you want to purchase your gas from.
            If you select a CTA to supply you with gas, your existing gas
            utility will still be responsible for ensuring that the gas is
            transported to your residence or business. If you choose our company
            to be your CTA, we do not offer a low income assistance program that
            provides a discount on your gas bill. You may be eligible for low
            income assistance for the gas transport service provided by your
            existing gas utility. You should contact the gas utility to see if
            you are eligible for such assistance, and to apply with the gas
            utility if you are eligible for such assistance .In selecting a CTA,
            you should be aware that the CTA will require you to enter into a
            contract for a fixed period of time, rather than on a month to month
            basis. If you enter into a contract for a fixed period of time, and
            you decide to switch your gas provider before the contract term is
            up, you may be obligated to pay certain fees or penalties for early
            termination of the contracts. If you choose Bolt Energy to be your
            CTA, then you agree to let us be your natural gas provider for the
            number of months specified in your contract. Should any CTA refuse
            to provide you with gas service, you have the right to request,
            within thirty days from the date service was denied, that the CTA
            send you a written explanation of why the CTA denied you service.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Verification That You Want A New Provider of Gas</h5>
          <p>
            If you decide to purchase your gas from someone other than your
            current provider of gas, the law requires the new CTA or the gas
            utility to verify that you agree to the change in your provider.
            This verification can take place in several ways. If you are a
            residential customer and you are contacted by a CTA, and you agree
            to switch to the CTA as your new gas provider, the CTA is required
            to connect you to a “third-party verification company,” or to have
            the third-party verification company call you, to confirm that you
            agree to switch to the new CTA. The third-party verification company
            may ask you for certain identifying information such as your name,
            your address, your current gas provider and account number, and
            whether you agree to the switch to the new CTA that you have
            selected. You should be careful not to disclose any more information
            than necessary to confirm the switch. The third-party verification
            company can use the information that you provide only to confirm
            that you agree to the switch in provider. An unauthorized release of
            the information you supplied to the third- party verification
            company is grounds for a civil lawsuit. You may also request the
            third-party verification company for a copy of the record that
            confirms you have agreed to switch to the new provider of your
            choice. If you are a residential customer and you directly call the
            CTA that you want to switch to, your new gas provider is not
            required to use the third-party verification process described
            above. Instead, your contact with the new provider is sufficient to
            confirm that you agree to switch to the CTA you called. If you are a
            small commercial customer, the CTA must confirm your agreement to
            switch to the new provider in one of four ways. First, the new CTA
            can use the third-party verification process described above. The
            second method is for the new CTA to mail you an information package
            regarding your agreement to switch, and you return the written
            confirmation to switch. The third method is that the new CTA may
            have you sign a document which explains to you the effect of the
            change to a new CTA. And the fourth method is for the new CTA to
            obtain your consent through electronic means, such as e-mail or a
            facsimile authorization consenting to the switch to the new CTA.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Your Total Price Of Gas</h5>
          <p>
            You will pay a daily fee of $1.49, plus taxes and fees. Admin fee of
            $0.33 per day may apply. In addition to your payments to us, you are
            also obligated to pay your existing gas utility certain recurring
            charges for gas service, and charges regulated by the California
            Public Utilities Commission. You may also have to pay your gas
            utility for certain non-recurring charges regulated by the
            California Public Utilities Commission. You should refer to your gas
            utility bill or contact your gas utility to determine the amount for
            each of those charges.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Your total price will consist of the following:</h5>
          <h5>1.Our Recurring Charges: </h5>
          <p>
            You will pay a daily fee of $1.49, plus taxes and fees. Admin fee of
            $0.33 per day may apply
          </p>
          <h5>2.Gas Utility Charges: </h5>
          <p>
            In addition to your payments to us, you are also obligated to pay
            your existing gas utility certain recurring charges for gas service,
            and charges regulated by the California Public Utilities Commission.
            You may also have to pay your gas utility for certain non-recurring
            charges regulated by the California Public Utilities Commission. You
            should refer to your gas utility bill or contact your gas utility to
            determine the amount for each of those charges.{" "}
          </p>
        </div>
        <p>
          The following table provides you with an estimate of your monthly gas
          bill based on the total price of gas delivered to your home or
          business and estimated monthly usage. All usage levels may not be
          applicable for fixed daily rate product.{" "}
        </p>
        <table style={{ border: "1px solid black" }}>
          <tr style={{ border: "1px solid black" }}>
            <th>Monthly Usage (in therms)</th>
            <th>Estimated Monthly Bill</th>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>10</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>25</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>50</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>75</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>100</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>150</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>200</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>250</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>275</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>300</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>400</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>500</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>600</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>700</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>800</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>900</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
          <tr style={{ border: "1px solid black" }}>
            <td style={{ border: "1px solid black" }}>1000</td>
            <td style={{ border: "1px solid black" }}>$44.99</td>
          </tr>
        </table>

        <div style={{ padding: "15px" }}>
          <h5>Description of Terms and Conditions of Service</h5>
          <p>
            If an advance deposit is required, Public Utilities Code Section
            985(g) provides that the deposit amount cannot be more than your
            estimated bill for a three-month period. Although you, the customer,
            will be purchasing gas from us, we will arrange to have the gas
            utility send you a single bill for the gas utility’s charges and for
            our charges. Should you own any past due amounts on your bill, the
            gas utility is responsible for collecting any past due amount from
            you. If you fail to pay any past due amount owed to the gas utility,
            the gas utility may then disconnect your service. If you fail to pay
            any past due amount owed to us, we may transfer your gas service
            back to the gas utility, who may then disconnect your gas service if
            you fail to pay the gas utility’s charge. If your gas service is
            disconnected, you may be obligated to pay a disconnect fee to the
            gas utility. In order to reestablish gas service, you may have to
            pay a reconnection fee to the gas utility
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Complaint Procedures</h5>
          <p>
            Different complaint procedures apply depending upon whom you have a
            dispute with. If you have a billing-related dispute concerning the
            gas utility’s charges, or a dispute regarding the manner in which
            the gas is distributed to your residence, an informal complaint may
            be submitted to the California Public Utilities Commission (CPUC)
            for an attempt at resolving the matter. If the matter is not
            resolved, you may file a formal complaint with the CPUC if you meet
            the conditions set forth in Article 4 of the CPUC’s Rules of
            Practice and Procedure. If you have a billing-related or
            service-related dispute with us, the CTA, you may complain to the
            CPUC. The CPUC shall first attempt to informally resolve your
            complaint through the informal complaint process. If the matter
            cannot be resolved satisfactorily, you may file a formal complaint
            against us with the CPUC or file a complaint against us in civil
            court. You must pay your bill in full, except for the disputed
            amount, during the pendency of the dispute, and such payment shall
            be refunded if warranted by the CPUC’s decision. If you file or
            submit a complaint with the CPUC against a gas utility or a CTA, you
            gas service cannot be disconnected if you deposit the disputed
            amount with the CPUC in an escrow account. If you have any questions
            regarding the CPUC complaint procedures, you may contact the
            Consumer Affairs Branch (CAB) or the Public Advisor’s Office of the
            CPUC. The CAB may be reached at 1-800 649-7570, and the Public
            Advisor’s Office may be reached at 1-866-849-8390.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Carbon Offset Program </h5>
          <p>
            Your natural gas bundle funds Carbon Offset Projects that reduce
            emissions equivalent to your usage. .A Carbon Offset is a voluntary
            reduction in greenhouse gas emissions that can be used to balance
            emissions produced elsewhere. Since every ccf of natural gas used
            will emit about 11.8 lbs of CO2 (5.34 kg CO2), your bundled product
            negates the environmental impact from natural gas use in your home
            by our purchase of a Carbon Offset through a Carbon Offset Program.
            A Carbon Offset purchased through a Carbon Offset Program represents
            the removal of 1 metric ton of CO2 equivalent (CO2e) from the
            atmosphere. Carbon Offset: A GHG reduction that is created and
            monetized after being evaluated to ensure it is real, additional,
            quantifiable, permanent, verifiable and enforceable. Carbon Offset
            Project: Infrastructure created to produce an offset. Carbon Offset
            Program: An established entity with a set of rules that exist to
            ensure offsets meet stringent requirements to ensure transparency
            and credibility. Some examples include the American Carbon Registry
            (ACR), the Climate Action Reserve (CAR), the Gold Standard (GS), and
            the Verified Carbon Standard (VCS) Program
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Notice Of Your Right To Cancel</h5>
          <p>
            You have the right to cancel your contract for gas service that you
            have entered into with us. For a residential gas customer, you have
            the right to cancel the contract until midnight of the thirtieth day
            after the date of the first bill for CTA service has been issued to
            you the customer. For a core commercial gas customer, you have the
            right to cancel the contract until midnight of the third business
            day after the day on which you the customer signs an agreement or
            offer to purchase from us, the CTA. Core commercial gas customers
            can also waive their right to cancel under Public Utilities Code
            §989.1(a) by signing a separate written waiver of your right to
            cancel and returning that waiver to the CTA. This separate written
            waiver must be presented to you at the time you sign the agreement
            or offer to purchase from us, the CTA. Should you decide to
            terminate this arrangement within the 24 months term, you will be
            responsible of paying a cancellation fee of $199. To cancel the CTA
            contract with us, you may send us, at the address listed on page 1
            of this notice, written notice of your cancellation within the time
            period specified above. You may also exercise your right to cancel
            by contacting us at the telephone number listed on page 1 of this
            notice, and informing us that you want to cancel the CTA contract
            with us. No fee or penalty may be imposed against you for exercising
            your right to cancel within the applicable time periods.
          </p>
        </div>

        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>Class Action Waiver: </h5>
          <p>
            By entering into this contract, you are giving up your right to
            arbitrate or litigate in court any dispute or claim as a class
            action or collective action, either as a class representative or
            member or collective action participant. You further agree that your
            rights as a consumer under the CCPA are neither waived nor impaired
            by virtue of proceeding in a non-class, non-consolidated and
            non-joint arbitration authorized under this agreement, nor shall
            proceeding in a non-class, non-collective impairment of your rights.
            In the event an arbitrator deems this class action waiver invalid,
            then the arbitration provision above shall be null and void.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>
            Waiver of Right to Trial by Jury{" "}
          </h5>
          <p>
            In arbitration. each party expressly and irrevocably waives their
            right to a trial by jury of any dispute or claim arising out of or
            relating to this agreement, including claims arising under the
            California Consumer Privacy Act or any other federal state laws.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Assignment. </h5>
          <p>
            You may not assign this agreement without prior written consent of
            the Company. Company reserves the right to sell, transfer, pledge or
            assign this Agreement and your account, and related revenues and
            proceeds for financial purposes or in connection with a sale. This
            agreement is binding upon the parties hereto and their respective
            successors and legal assigns.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>Your Rights If You Are Denied Service By The CTA</h5>
          <p>
            If you are offered gas service by us, the CTA, and we decline to
            provide the service to you, you have the right to request that we
            provide you with a written reason as to why we declined to provide
            you with service. Bolt reserves the right at its discretion to
            terminate this agreement. Your request for the written reason must
            be made within 35 days from the date that we declined to provide
            service to you. We then have 30 days from your request to provide
            you with the written reason as to why we declined to provide service
            to you. If you disagree with the written reason as to why we
            declined to provide service to you, you may submit an informal
            complaint to the CPUC to see if the CPUC can informally resolve this
            issue.
          </p>
        </div>
        <div style={{ margin: "0" }}>
          Contact Information.
          <p style={{ margin: "0" }}>Bolt Energy Services LLC </p>
          <p style={{ margin: "0" }}>
            Address: 75 Lake Road Suite 215 Congers, N.Y. 10920
          </p>
          <p style={{ margin: "0" }}>
            Website:
            <a href="http://www.Boltenergyservices.com">
              www.Boltenergyservices.com
            </a>
          </p>
          <p style={{ margin: "0" }}>Phone: 800-213-2870 (Toll Free)</p>
          <p style={{ margin: "0" }}>
            Hours of Operation: Mon-Fri 9:00am – 5:00pm (Eastern Time)
          </p>
          {this.state.name!=undefined?this.state.name:""}
        </div>
      </div>
    );
  }
}

export default DocumentLink2;
