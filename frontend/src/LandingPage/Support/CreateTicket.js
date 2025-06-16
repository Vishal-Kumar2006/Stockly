import LinkComponent from "./LinkComponent";

function CreateTicket(params) {
  return (
    <div className="container">
      <div className="row">
        <p className="mt-5 text-muted fs-4 font-weight-300">To create a ticket, select a relevant topic</p>
      </div>

      <div className="row mt-3">
        <div className="col-4">
          <LinkComponent
            heading={[
              <i class="fa-solid fa-circle-plus"></i>,
              "Account Opening",
            ]}
            links={[
              "Resident individual",
              "Minor",
              "Non Resident Indian (NRI)",
              "Company, Partnership, HUF and LLP",
              "Glossary",
            ]}
          />
        </div>

        <div className="col-4">
          <LinkComponent
            heading={[
              <i class="fa-regular fa-user"></i>,
              "Your Zerodha Account",
            ]}
            links={[
              "Your Profile",
              "Account modification",
              "Client Master Report (CMR) and Depository Participant (DP)",
              "Nomination",
              "Transfer and conversion of securities",
            ]}
          />
        </div>

        <div className="col-4">
          <LinkComponent
            heading={[<i class="fa-solid fa-chart-simple"></i>, " Kite"]}
            links={[
              "IPO",
              "Trading FAQs",
              "Margin Trading Facility (MTF) and Margins",
              "Charts and orders",
              "Alerts and Nudges",
              "General",
            ]}
          />
        </div>
      </div>

      <div className="row mt-5">
        
        <div className="col-4">
          <LinkComponent
            heading={[<i class="fa fa-window-maximize"></i>, "Funds"]}
            links={[
              "Add money",
              "Withdraw money",
              "Add bank accounts",
              "eMandates",
            ]}
          />
        </div>

        <div className="col-4">
          <LinkComponent
            heading={[
             <i class="fa-regular fa-circle-notch"></i>,
              " Console",
            ]}
            links={[
              "Portfolio",
              "Corporate actions",
              "Funds statement",
              "Reports",
              "Profile",
              "Segments",
            ]}
          />
        </div>

        <div className="col-4">
          <LinkComponent
            heading={[
              <i class="fas fa-circle-notch"></i>,
              "Account Opening",
            ]}
            links={[
              "Resident individual",
              "Minor",
              "Non Resident Indian (NRI)",
              "Company, Partnership, HUF and LLP",
              "Glossary",
            ]}
          />
        </div>

      </div>

    </div>
  );
}

export default CreateTicket;