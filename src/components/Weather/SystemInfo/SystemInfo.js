import React from 'react';
import PropTypes from 'prop-types';
import dataHours from '../../../lib/dataHours';

function SystemInfo(props) {
    const { sys } = props;
  return (
    <div className='system-information'>
        <div className="option">
            <span className='name-option'>Начало рассвета</span> <span className='option-value'>{dataHours(sys.sunrise)}</span>
        </div>
        <div className="option">
            <span className='name-option'>Начало заката</span> <span className='option-value'>{dataHours(sys.sunset)}</span>
        </div>
        <div className="option">
            <span className='name-option'>Код страны</span> <span className='option-value'>{sys.country}</span>
        </div>
    </div>
  );
}

SystemInfo.propTypes = {
    sys: PropTypes.object.isRequired,
};

export default SystemInfo;
