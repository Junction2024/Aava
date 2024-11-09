import React from 'react';
import PropTypes from 'prop-types';

const WorkerProfile = ({
  etuNimi,
  sukuNimi,
  ika,
  sahkoposti,
  tyokokemusLista,
  taidotLista,
  kuvaus,
  arvoja,
  suosittelija,
  nykyinenTyopaikka,
}) => {
  return (
    <div className="worker-profile">
      <div className="profile-header">
        <h2>{`${etuNimi} ${sukuNimi}`}</h2>
        <p>{`Ikä: ${ika}`}</p>
        <p>{`Nykyinen Työpaikka: ${nykyinenTyopaikka}`}</p>
      </div>

      <div className="profile-details">
        <h3>Kuvaus</h3>
        <p>{kuvaus}</p>

        <h3>Sähköposti</h3>
        <p>{sahkoposti}</p>

        <h3>Työkokemus</h3>
        <ul>
          {tyokokemusLista.map((kokemus, index) => (
            <li key={index}>{kokemus}</li>
          ))}
        </ul>

        <h3>Taidot</h3>
        <ul>
          {taidotLista.map((taito, index) => (
            <li key={index}>{taito}</li>
          ))}
        </ul>

        <h3>Arvot</h3>
        <p>{arvoja}</p>

        <h3>Suosittelija</h3>
        <ul>
          {suosittelija.map((kommentti, index) => (
            <li key={index}>{kommentti}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

WorkerProfile.propTypes = {
  etuNimi: PropTypes.string.isRequired,
  sukuNimi: PropTypes.string.isRequired,
  ika: PropTypes.number.isRequired,
  sahkoposti: PropTypes.string.isRequired,
  tyokokemusLista: PropTypes.arrayOf(PropTypes.string).isRequired,
  taidotLista: PropTypes.arrayOf(PropTypes.string).isRequired,
  kuvaus: PropTypes.string.isRequired,
  arvoja: PropTypes.string.isRequired,
  suosittelija: PropTypes.arrayOf(PropTypes.string).isRequired,
  nykyinenTyopaikka: PropTypes.string.isRequired,
};

export default WorkerProfile;