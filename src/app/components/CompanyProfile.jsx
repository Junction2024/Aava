import React from "react";
import PropTypes from "prop-types"

export default function CompanyProfile (){
    const CompanyProfile = ({
        Yrityksenimi,
        Avoimetpaikat,
        arvostelut,
        kuvaus,
        arvoja,
      }) => {
        return (
          <div className="worker-profile">
            <div className="profile-header">
              <h2>{{Yrityksenimi}}</h2>
              <p>Avoimet työpaikat: {{Avoimetpaikat}}</p>
            </div>
       
            <div className="profile-details">
              <h3>Kuvaus</h3>
              <p>{kuvaus}</p>
       
              <h3>Arvot</h3>
              <p>{arvoja}</p>
       
              <h3>Arvostelut</h3>
              <p>{arvostelut}</p>
              <ul>
                {Työntekijä.map((kommentti, index) => (
                  <li key={index}>{kommentti}</li>
                ))}
              </ul>
</div>
</div>
        );
    };

    CompanyProfile.propType={
        Yrityksenimi:PropTypes.string.isRequired,
        Avoimetpaikat:PropTypes.arrayOf(PropTypes.string).isRequired,
        kuvaus:PropTypes.string.isRequired,
        arvostelut:PropTypes.arrayOf(PropTypes.string).isRequired,
        kuvaus:PropTypes.string.isRequired,
        arvoja:PropTypes.string.isRequired,

    };




};