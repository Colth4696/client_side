
import React from "react"
import { Marker, InfoWindow } from "react-google-maps"
import RedIcon from "./red-user-icon.png"
import GreenIcon from "./green-home-icon.png"
import axios from "axios"





const MyMarker = (props) => {
 const [flag, setFlag] = React.useState(false);

   const toggle_open = () => {
    setFlag(!flag)
  }

  const  getIcon = () => {
    if (props.request.category === "Material" ) { return RedIcon }
    else { return GreenIcon }
  }

  const onVolunteerClick = async () => {

    // const data = {
    //   request_id: request_id,
    //   user_id: user_id,

    axios.post('http://localhost:3003/volunteers', )
      .catch(error =>{ 
        console.error(`error: ${error.message}`)
      })

    }

    const MarkStyle = {
      height: "30px",
      width: "30px"
    }

    return (
      <div>
        <Marker
          style={MarkStyle}
          position={props.position}
          onClick={toggle_open}
          icon={getIcon()}>

          {flag && <InfoWindow onCloseClick={toggle_open}>

            <div>
              <h4>Task ID:{props.request.id}</h4>
              <h4>Requester ID:{props.request.user_id}</h4>
              <h1>{props.request.title}</h1>
              <h3>{props.request.description}</h3>
              <button onClick={onVolunteerClick}>
                Volunteer
              </button>
            </div>
          </InfoWindow>}
        </Marker>
      </div>
    )
    }


export default MyMarker