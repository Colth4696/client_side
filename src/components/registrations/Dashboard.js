import React from "react"
import MyMapComponent from "../../MapContainer"
import AccordionMenu from "./Accordion"
import Counter from "./Counter"
import Footer from "../../Footer"


const Dashboard = () => {
const [users, setUsers] = React.useState();
const [requests, setRequests] = React.useState();
// const RequestContext = React.useContext();

return (
<div className="Dashboard">
<AccordionMenu requests={requests} />
<MyMapComponent requests={requests} setRequests={setRequests} user={users} setUsers={setUsers} />
<Counter requests={requests} user={users} />
<Footer />
</div>

);
}

export default Dashboard; 
