import React from 'react';
import PropTypes from 'prop-types';
import getTimeZone from '../../../lib/TimeZone';

function TimeZoneBlock(props) {
    const { timezone } = props;

    const time = getTimeZone(timezone);

    return (
        <div className='timezone'>
            <div className="option">
                <span className='name-option'>Часовой пояс</span> <span className='option-value'>{time > 0 && '+'}{time}</span>
            </div>
        </div>
    );
}

TimeZoneBlock.propTypes = {
    timezone: PropTypes.number.isRequired,
};

export default TimeZoneBlock;
