import React from 'react';
import './ErrorEnableGeolocation.css';

function ErrorEnableGeolocation() {
  return (
    <div className="initial-error">
        <p className="initial-error-text">В вашем браузере открючено автроматическое определение местоположения</p>
        <p className="initial-error-text">Дайте разрешение на геолокацию или выберите другой браузер</p>
    </div>
  );
}

export default ErrorEnableGeolocation;
