import React, { Component, useState, useRef,useEffect } from "react";
import { exportComponentAsPDF } from "react-component-export-image";
import "./Document.css";
import SignatureCanvas from "react-signature-canvas";
import Popup from "reactjs-popup";
import SignaturePad from "react-signature-canvas";
import CustomerSignature from "../../Signature/sigCanvas";
import Config from "./../../../Config/config"
import { gql } from "@apollo/client";
import { client } from "./../../../index";
import {Button,Modal} from "react-bootstrap"

const GET_CUSTOMER_DETAILS = gql`
  query getCustomerDetails($id: ID) {
    getCustomerDetails(id: $id) {
      firstName
      lastName
      mobileNumber
    }
  }
`;

const CALLING_CUSTOMER = gql`
  query callingCustomer($mobileNumber:String){
    callingCustomer(mobileNumber:$mobileNumber)
    
  }
`;

function ModalComponent({showModal}){
  console.log("====================modalcompnent",showModal)
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  useEffect(()=>{
    if(showModal)
    {
      console.log("Oh   ...Yess")
      setShow(true)
    }
  },[])
  // const handleShow = () => setShow(true);

  return (
    <>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}


class DocumentLink2 extends Component {
  constructor(props) {
    super(props);
    this.componentRef = React.createRef();
  }
  state = { name: undefined, mobile: undefined,modal:false };

  componentDidMount = async () => {
    let UrlPath = window.location.pathname;
    let customerId = parseInt(
      UrlPath.substring(UrlPath.indexOf(":") + 4, UrlPath.length)
    );
    console.log("customerId", customerId);
    let response = await client.query({
      query: GET_CUSTOMER_DETAILS,
      variables: { id: customerId },
    });

    console.log("======", response.data.getCustomerDetails.firstName);
    this.setState({
      name: response.data.getCustomerDetails.firstName,
      mobile: response.data.getCustomerDetails.mobileNumber,
    });
  };

  render() {
    return (
      <div className="docContainer" ref={this.componentRef}>
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
          <h4>NATURAL GAS TERMS OF SERVICE</h4>
          <h4>INDIANA MARKETS</h4>
        </div>
        <div style={{ padding: "15px" }}>
          <h5>INDIANA TERMS & CONDITIONS</h5>
          <p>
            You authorize Bolt Energy Services LLC. (“Company”), to change your
            natural gas supplier, as the case may be, to Company and to supply
            your home or small business with all the Services you need, subject
            to the eligibility requirements of your local natural gas utility
            (“Utility”). Company is a supplier of energy products. These Terms
            and Conditions create your agreement with the Company (“Agreement”)
            and supersedes any oral or written statements made in connection
            with this Agreement or the supply of your Services. Capitalized
            terms used herein have the meaning ascribed to them as listed within
            the Agreement as well as in the “Definitions” section herein.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>SERVICES</h5>
          <p>
            Upon successful completion and receipt of all customer enrollment
            requirements, Company will supply gas Services for your home or
            small business. Company is a retail marketer of Services and is not
            your Utility. Your Utility will continue to deliver Services to your
            home or small business, read your meter, send your bill and make
            repairs and charge you for its services related to delivering your
            commodities. Your Utility will also respond to emergencies and
            provide other traditional utility services. You understand that you
            are not required to switch your Services to Company. This Agreement
            is subject to the eligibility requirements of your Utility and
            Company may choose not to accept this Agreement for any reason. If
            you are enrolled in any Utility or government programs, enrolling
            with Company may impact your participation in these programs
          </p>
        </div>

        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>TERM</h5>
          <p>
            . Company will begin supplying your Services when the Utility
            switches your account to Company. Your Agreement will continue for
            the 12-month Term and will renew thereafter. Your Term is based on
            monthly billing cycles as determined by your Utility and each
            monthly billing cycle may not represent a full calendar month. If
            your Utility bills bimonthly, Company will treat this as two monthly
            billing cycles. Typically it takes one to two billing cycles for
            your Service to be switched from your Utility to the Company, but
            there may be a delay before the Utility switches Services and you
            understand that Company is not responsible for any such delays. You
            may receive written notification from your Utility confirming your
            switch to Company. The Company may terminate this Agreement.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>Fixed Rate plan</h5>
          <p>
            Your commodity rate will be a fixed rate of $0.55 per therm for 12
            months and will renew thereafter. The rate you pay Bolt energy will
            include the Commodity Charge and the Interstate Transportation and
            Storage Charge and monthly administrative fee, if applicable. Your
            price does not include applicable Indiana sales tax, use tax, local
            tax or gross receipt taxes imposed by Indiana State Tax Law. You are
            responsible for any and all taxes (whether passed through to you on
            LDU’s bill as a separate line item or as part of the price of
            natural gas, as required by law, rule or regulation) and LDU charges
            for delivery and distribution services. Except as otherwise provided
            in this Agreement or as required by law, all taxes of whatsoever
            kind, nature and description, due and payable with respect to your
            performance of your obligations under this Agreement, will be paid
            by you.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>
            RESCISSION; TERMINATION
          </h5>
          <p>
            . You may rescind or terminate this Agreement as provided below. a.
            Right of Rescission. You may rescind this Agreement, without fees or
            penalties of any kind, at any time prior to the fifth (5th) business
            day after your receipt of this Agreement (“Rescission
            Period”).Customer acknowledges that Bolt energy cannot guarantee a
            switch of Customer’s account by a specific date and hereby holds
            harmless Bolt energy from any liability for, or arising out of,
            delays in this process. This Agreement shall remain in effect until
            you notify Bolt energy in writing or by phone of your intent to
            cancel at least 30 days prior to your requested end date and until
            such time as the LDU completes the termination in accordance with
            its rules.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>
            Cancellation Provisions
          </h5>
          <p>
            You may cancel this Agreement without any penalty any time by
            calling Bolt energy at 1-800-213-2870. If you request to cancel this
            Agreement, the cancellation will not take effect until the next
            actual meter read date following the date Bolt energy notifies your
            LDU. You will be responsible for all payments due hereunder until
            the cancellation of natural gas service is completed. If for any
            reason Bolt energy is no longer able to economically continue this
            Agreement, Bolt energy may terminate this Agreement at any time..
            This Agreement may be cancelled at the sole discretion of Bolt
            energy if you fail to meet any of the terms and conditions of this
            Agreement or if any of the information you have provided to Bolt
            energy is or becomes untrue. If this Agreement is canceled, expires,
            or otherwise terminated, you will receive uninterrupted service from
            the LDU until you designate another provider of natural gas service
            or service is shut off by the LDU. Only the LDU may shut off your
            natural gas service.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>BILLING AND PAYMENT</h5>
          <p>
            The Services you purchase from Company will be included in your
            Utility monthly bill or in a separate invoice from Company. If from
            the Utility, the Utility will set your payment due date and the
            payment address. Any bill not paid in full by its due date will
            incur a late payment fee in accordance with the Utility’s or the
            Company’s billing and payment policies and procedures. You may be
            liable for the costs the Company incurs if Company must terminate
            your Services for failure to pay, such as collection costs or
            attorney fees. If your Services are terminated for failure to pay,
            you will be required to re-establish eligibility with your Utility
            and enter into a new Agreement with Company. Company shall have the
            right to setoff and net against any undisputed amounts owed by you
            under this Agreement, and the Company shall additionally have the
            right to setoff and net against any deposit or security provided by
            you pursuant to this Agreement any amounts, charges or damages owed
            by you to Company. .
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>CUSTOMER INFORMATION</h5>
          <p>
            All authorizations provided herein will remain in effect for the
            Term and, if applicable, the Renewal Term of this Agreement;
            however, authorization may be rescinded by you any time by
            contacting Company.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>EMERGENCY. </h5>
          <p>
            In the event of an emergency such as a natural gas leak, you should
            call your Utility. If your Utility is Northern Indiana Public
            Service Company, call 1-800-634- 3524. You can also call your local
            emergency personnel at 911 if the emergency warrants.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>
            Agency and Point of Sale{" "}
          </h5>
          <p>
            (i) If you are receiving natural gas service, you hereby designate
            Company as your agent to: (A) arrange and administer contracts and
            service arrangements between you and your Utility, and between you
            and the interstate pipeline transporters of your natural gas
            (including capacity release, re-release, and recall arrangements);
            (B) nominate and schedule with the interstate pipelines the
            transportation of your natural gas from the Sales Points to the
            Delivery Points, and with your Utility for the transportation of
            your natural gas from the Delivery Points to your premises; and (C)
            aggregate your natural gas with the natural gas supplies of
            Company’s other customers in order for you to qualify for
            transportation service and to address and resolve imbalances (if
            any) during the term of this Agreement. As your agent, Company will
            schedule the delivery of a quantity of natural gas at the Sales
            Points necessary to meet your city gate requirements based on the
            consumption and other information that Company receives from your
            Utility. Company, as your agent, will arrange for the transportation
            of natural gas from the Sales Points to the Delivery Points, and
            from the Delivery Points to your premises; and (ii) if you are
            receiving electric service, you hereby designate Company as your
            agent for the purpose of arranging, contracting for, and
            administering transmission services (including those provided by
            your Utility) for the delivery of electricity.
          </p>
          <p>
            Change in Law/Third Party Charges. This Agreement is subject to any
            federal, state, local, or utility changes in law, which includes
            changes in legislation, regulatory actions, orders, rules, tariffs,
            regulations, policies, riders, fees, pricing structures, market
            structures, capacity charges, and changes in customer load profiles
            (each, a “Change in Law”). If there is a Change in Law which results
            in an increased cost to the Company, or Company is prevented,
            prohibited or frustrated from carrying out its intent under this
            Agreement, Company may terminate this Agreement with notice to you,
            or adjust your rate based upon such Change in Law. This provision
            applies to all rate plans, whether fixed, index or variable. f.
            Governing Law; Venue; Waiver of Jury Trial. To the maximum extent
            permitted by law, (i) Venue for any lawsuit brought to enforce any
            term or condition of this Agreement shall lie exclusively in the
            State of Indiana; (ii) the Agreement shall be construed under and
            shall be governed by the laws of the State of Indiana without regard
            to the application of its conflicts of law principles, and (iii)
            EACH OF THE PARTIES HERETO IRREVOCABLY WAIVES ANY AND ALL RIGHT TO
            TRIAL BY JURY IN ANY LEGAL, ARBITRATION OR OTHER PROCEEDING ARISING
            OUT OF OR RELATING TO THIS AGREEMENT OR THE TRANSACTIONS
            CONTEMPLATED HEREBY.
          </p>
          <p>
            Non-Waiver. The failure by one party to require performance of any
            provision shall not affect that party's right to require performance
            at any time thereafter, nor shall a waiver of any breach or default
            of this Agreement constitute a waiver of any subsequent breach or
            default or a waiver of the provision itself. h. Severability. If any
            provision of this Agreement is held unenforceable, then such
            provision will be automatically modified to reflect the parties’
            intention. All remaining provisions of this Agreement shall remain
            in full force and effect. i. Non-Reliance. You acknowledge that you
            are not relying on any advice, statements, recommendations or
            representations of the Company, other than the written
            representations in this Agreement, (ii) that you understand the
            risks of entering into this Agreement, including the risk that the
            Company’s prices may be higher than your Utility’s rates, and you
            are capable and willing to assume those risks, and (iii) you have
            made your own decision to enter into this Agreement, after
            consultation with your own advisors to the extent you deem
            necessary.
          </p>
          <p>
            Customer Representation. I am at least 18 years old and fully
            authorized to enter into this Agreement. I am the authorized account
            holder or have been given proper and binding authorization to change
            the Services and enter into this Agreement on behalf of the account
            holder.
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>
            Information Release and Authorization, Credit Review.
          </h5>
          <p>
            By accepting the Agreement, you authorize Bolt energy to obtain
            information from the LDU through the Term including, but not limited
            to, account name, account number, billing address, service address,
            telephone number, standard offer service type, historical and future
            natural gas usage, rate classification, meter readings,
            characteristics of natural gas service, and billing and payment
            information. You (and your signatory, if signatory is noted as your
            spouse/civil union partner) agree to Bolt energy obtaining a credit
            report and investigating your (and, if applicable, signatory’s)
            credit rating, credit history and Utility bill payment status and
            history. We are not obligated to accept, or continue performing,
            this Agreement if you do not meet our credit requirements. You
            further authorize Bolt energy to release that information to third
            parties who need to use or be aware of such information in
            connection with my natural gas service under the Agreement, as well
            as to Bolt energy ’s affiliates and business partners for marketing
            purposes. Bolt energy reserves the right to reject your enrollment
            or terminate the Agreement if you fail to meet minimum or maximum
            threshold natural gas consumption levels as determined by Bolt
            energy .
          </p>
          <p>
            MANDATORY ARBITRATION AND CLASS ACTION WAIVER AGREEMENT.Scope of the
            Arbitration Agreement. Any legal dispute between the parties
            concerning or arising out of your enrollment, purchase, this
            Agreement, or the relationship and communications between the
            parties (“Dispute”) shall be resolved by one arbitrator through
            binding arbitration using the process explained below. The parties
            understand and agree that they are waiving their rights to sue or go
            to court to assert or defend their rights. However, either party may
            bring an individual claim in small claims court consistent with the
            jurisdictional and dollar amount limitations that may apply, so long
            as maintained as an individual claim. The term “Dispute” refers to
            any dispute, action, claim, or other controversy between BOLT ENERGY
            , whether in contract, warranty, tort, statute, regulation,
            ordinance, or any other legal or equitable basis.
          </p>
          <p>
            Informal Dispute Resolution. Either party asserting a Dispute shall
            first try in good faith to resolve it by providing written notice as
            specified below to the other party describing the facts and
            circumstances (including any relevant documentation) and allowing
            the receiving party 30 days in which to respond. Notice shall be
            made by first class or registered mail (1) to BOLT ENERGY at the
            address below or (2) to you at the postal address on file with BOLT
            ENERGY . Both you and BOLT ENERGY agree that this dispute resolution
            procedure is a condition precedent which must be satisfied before
            initiating any arbitration against the other party
          </p>
          <p>
            Right to Opt Out of this Arbitration Agreement. You may opt out of
            this Arbitration Agreement within the first 30 days after the
            earliest of the first time you (a) enroll and begin purchasing
            services from BOLT ENERGY ; or (b) sign up for any further program
            or service provided by BOLT ENERGY . You may also opt out of this
            Arbitration Agreement within 30 days after we notify you regarding a
            material change to this Arbitration Agreement. You may opt out by
            sending an email through our website or by sending a letter to our
            address below. You should include your printed name, mailing
            address, and the words “Reject Arbitration.”
          </p>
          <p>
            How Arbitration Works. Either party may initiate arbitration, which
            shall be conducted by the American Arbitration Association (“AAA”),
            under the AAA Commercial or Consumer rules, as applicable, in effect
            at the time the claim is filed (“AAA Rules”). For information on how
            to file a claim, copies of the AAA Rules and forms can be located at
            www.adr.org, or by calling 1-800-778- 7879. Arbitration shall take
            place in the country of your residence, as determined by your
            mailing address on file with BOLT ENERGY . We agree to pay or
            reimburse all costs associated with any arbitration between the
            parties, including filing fees and arbitrator fees, and agree to
            waive any right to recover an award of attorneys’ fees and costs
            against you. The arbitrator’s decision shall be final, binding, and
            non-appealable. Judgment upon the award may be entered and enforced
            in any court having jurisdiction.
          </p>
          <p>
            Waiver of Right to Bring Class Action & Representative Claims. All
            Disputes, whether resolved informally, in small claims court, or
            through arbitration, shall be brought on an individual basis.
            Disputes must be brought in the parties’ individual capacity, and
            not as a plaintiff or class member in any purported class,
            collective, representative, multiple plaintiff, or similar
            proceeding (“Class Action”). The parties expressly waive any ability
            to maintain any Class Action in any forum, and the arbitrator shall
            not have authority to combine or aggregate similar claims or conduct
            any Class Action nor make an award to any entity or person not a
            party to the arbitration. Any claim that all or part of this Class
            Action waiver is unenforceable, unconscionable, void, or voidable
            may be determined only by a court of competent jurisdiction and not
            by an arbitrator. THE PARTIES UNDERSTAND THAT THEY WOULD HAVE HAD A
            RIGHT TO LITIGATE THROUGH A COURT, TO HAVE A JUDGE OR JURY DECIDE
            THEIR CASE AND TO BE PARTY TO A CLASS OR REPRESENTATIVE ACTION,
            HOWEVER, THEY UNDERSTAND AND CHOOSE TO HAVE ANY CLAIMS DECIDED
            INDIVIDUALLY, THROUGH ARBITRATION.
          </p>
          <p>
            Governing Law. This Arbitration Agreement shall be governed by the
            Federal Arbitration Act and interpreting federal law. To the extent
            state law applies to any aspect of this provision or the claim, the
            law of your residence, as determined by your mailing address on file
            with BOLT ENERGY , shall apply. Neither party shall sue the other
            party other than as provided herein or for enforcement of this
            clause or of the arbitrator’s award; any such suit may be brought
            only in the federal court encompassing the county where the
            arbitration took place, or if any such court lacks jurisdiction, in
            any state court that has jurisdiction. The arbitrator, and not any
            federal, state or local court, shall have exclusive authority to
            resolve any dispute relating to the interpretation, applicability,
            unconscionability, arbitrability, enforceability or formation of
            this Arbitration Agreement including any claim that all or any part
            of the Arbitration Agreement is void or voidable. However, the
            preceding sentence shall not apply to the clause above entitled
            “Waiver of Right to Bring Class Action & Representative Claims.”
          </p>
        </div>
        <div style={{ padding: "15px" }}>
          <h5 style={{ textDecoration: "underline" }}>Miscellaneous.</h5>
          <p>
            The services provided by Bolt Energy are governed by the terms and
            conditions of this document and the LDU’s tariff. In the event of
            non-payment of any charges owed to Bolt Energy , you may be subject
            to termination of natural gas service and the suspension of
            distribution service under procedures approved by the IURC. In the
            event of termination for non-payment, re- enrollment will be
            required in order to re-establish service with Bolt Energy . This
            Agreement may be terminated, with no penalty to you, in the event
            the IURC terminates the Choice program or Bolt Energy is no longer
            able to participate in the Choice program. You may obtain additional
            information by contacting Bolt Energy or the LDU by the means
            provided at the bottom of these Terms of Service
          </p>
          <p>
            If Bolt Energy is rendered unable to perform, in whole or in part,
            by a Force Majeure event, its performance under this Agreement will
            be excused for the duration of such event. “Force Majeure” means any
            act or event that is beyond the reasonable control of Bolt Energy
            that adversely affects, interrupts, or precludes its performance. In
            addition, acts of other parties, including without limitation,
            wholesale suppliers, aggregators, other Suppliers, qualified
            scheduling entities, LDUs, any governmental authority, and the
            respective employees and agents of such parties, will also be deemed
            to be events of Force Majeure.
          </p>
          <p>
            Energy delivery shall continue to be provided by your LDU. Your
            natural gas service will be provided in accordance with your
            existing connection requirements unless you request a change by the
            LDU and pay for the cost of that change. You may not resell or use
            any natural gas provided under this Agreement as an auxiliary or
            supplement to any other source of power. The supply of natural gas
            under this Agreement will be measured at the delivery point by the
            LDU providing the delivery service in accordance with the terms of
            the applicable tariff for natural gas service. Bolt Energy and you
            will be bound by the measurement from the meters owned, installed,
            maintained and read by the LDU.
          </p>
          <p>
            This Agreement will be governed by, interpreted, construed and
            enforced in accordance with the laws of the State of Indiana,
            without regard to principles of conflicts of laws.
          </p>
          <p>
            You may not assign this Agreement or your obligations under this
            Agreement without Bolt Energy ’s prior written consent. Bolt Energy
            may assign this Agreement, together with all rights and obligations
            hereunder, to (i) Bolt Energy ’s natural gas supplier, or such
            supplier’s designee, (ii) an affiliate of Bolt Energy or to any
            other person succeeding to all or substantially all of Bolt Energy
            ’s assets, or (iii) in connection with any financing or other
            financial arrangement.
          </p>
          <p>
            Any failure by Bolt Energy to enforce any term or condition of your
            natural gas service or otherwise exercise any right it may have
            under this Agreement will not be deemed a waiver of any rights to
            thereafter enforce any or all of the terms or conditions of your
            service or to exercise rights under this Agreement.
          </p>
          <p>
            Should any provision of this Agreement for any reason be declared
            invalid or unenforceable by final and applicable order by a court or
            any regulatory body having jurisdiction, such decisions shall not
            affect the validity of the remaining portions, and the remaining
            portions shall remain in effect as if this Agreement had been agreed
            to without the invalid portion. If any provision of this Agreement
            is declared invalid, the remainder of this Agreement will be
            construed so as to give effect to its original intent and effect as
            near as possible.
          </p>
          <p>
            The provisions of this Agreement concerning payment, limitation of
            liability, waivers, arbitration and waiver of class actions will
            survive the termination or expiration of this Agreement.
          </p>
          <p>
            The Indiana Office of Utility Consumers Counselor (“OUCC”) is the
            State Agency with the statutory responsibility of representing
            consumers on all utility matters. You may contact the OUCC at
            www.in.gov/oucc or 888-441-2494 with questions or concerns about
            Bolt Energy or the Choice program.
          </p>
          <p>
            The parties may execute the Agreement in counterparts, each of which
            is deemed an original and all of which constitute the same
            instrument.
          </p>
          <div style={{ margin: "0" }}>
            Contact Information.
            <p style={{ margin: "0" }}>Energy Services Company:</p>
            <p style={{ margin: "0" }}>
              Bolt Energy Services, LLC 75 Lake Road Suite 215
            </p>
            <p style={{ margin: "0" }}>Congers, N.Y. 10920</p>
            <p style={{ margin: "0" }}>1-800-213-2870</p>
          </div>
          <a href="http://www.BOLTENERGYSERVICES.com">
            www.BOLTENERGYSERVICES.com
          </a>
          <p>
            Hours of Operation: Monday through Friday 9:00 a.m. to 5:00 pm
            (Eastern Time)
          </p>
          <p style={{ margin: "0" }}>Local Distribution Utility:</p>
          <p style={{ margin: "0" }}>
            Northern Indiana Public Service Company (NIPSCO)
          </p>
          <p style={{ margin: "0" }}>801 E. 86th Ave.</p>
          <p style={{ margin: "0" }}>Merrillville, IN 46410</p>
          <p style={{ margin: "0" }}>1-800-464-7726</p>
          <span>
            <a href="http://www.nipsco.com ">www.nipsco.com </a>
          </span>
          In
          <p>Public Utilities Commission:</p>
          <p style={{ margin: "0" }}>Indiana Utility Regulatory Commission</p>
          <p style={{ margin: "0" }}>101 West Washington Street, Suite 1500E</p>
          <p style={{ margin: "0" }}>Indianapolis, IN 46204.</p>
          <p style={{ margin: "0" }}>1-800-851-4268</p>
          <span>
            <a href="http://www.in.gov/iurc ">www.in.gov/iurc</a>
          </span>
          In
          <p>
            {" "}
            <b>
              By signing below, I acknowledge and agree to the above also, that
              I am the account holder and I desire to enter into this Agreement
              with Bolt Energy.{" "}
            </b>
          </p>
          <div style={{ display: "flex" }}>
            {" "}
            <label>Customer Name: </label>{" "}
            <h4 style={{ textDecoration: "underline", marginLef: "2px" }}>
              {this.state.name != undefined ? this.state.name : ""}
            </h4>
          </div>
          <div style={{ display: "flex" }}>
            <label>Customer Signature: </label>{" "}
            <h4 style={{ textDecoration: "underline", marginLef: "2px" }}>
              ___________________
            </h4>
          </div>
          {/* <label>Date: </label> <h5 style={{textDecoration:"underline"}}>{new Date()}</h5> */}
        </div>
        {/* <CustomerSignature/> */}
        <CustomerSignature />

        <button
          onClick={async() => {

            this.setState({modal:true})
            exportComponentAsPDF(this.componentRef);

            // client.query({
            //   query: CALLING_CUSTOMER,
            //   variables: { mobileNumber: this.state.mobile },
            // });


            // if (response.status == 200) {
            //   Swal.fire({
            //     title: "File Uploaded !",
            //     text: "successfully",
            //     icon: "success",
            //   });
            // } else {
            //   console.log("error response", response.status);
            //   Swal.fire({
            //     title: "Error !",
            //     text: response.status,
            //     icon: "error",
            //   });
            // }
          }}
        >
          Submit
        </button>
        {console.log("dfhakf",this.state.modal)}
        <ModalComponent showModal={this.state.modal}/>
      </div>
    );
  }
}

export default DocumentLink2;
