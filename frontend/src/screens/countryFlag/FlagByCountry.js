import ReactCountryFlag from 'react-country-flag';
import './FlagByCountry.sass'

const FlagByCountry = ({ country, name }) => {
  return (
    <div className="flag">
      <ReactCountryFlag countryCode={country} svg  style={{
                    width: '5em',
                    height: '5em',
                    objectFit: 'cover',
                    borderRadius: '50px',
                    boxShadow: 'rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px'
                }}/>
        <div>{name}</div>
    </div>
  );
};

export default FlagByCountry;