import CreateTicket from "./CreateTicket";
import Hero from "./Hero";

function SupportPage() {
  return (
    <div className="container-fluid" style={{padding:"0"}}>
      <Hero />
      <CreateTicket/>
    </div>
  );
}

export default SupportPage;