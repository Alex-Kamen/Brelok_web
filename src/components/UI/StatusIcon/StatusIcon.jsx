import React from 'react';
import {Device} from "../../../models/Device";
import classes from "./StatusIcon.module.css";

const StatusIcon = ({status}) => {

    if (+status === Device.ACTIVE) {
        return (
            <div>
                <div className={[classes.status__icon, classes.active].join(' ')}></div>
            </div>
        );
    } else if (+status === Device.DEACTIVATE) {
        return (
            <div>
                <div className={[classes.status__icon, classes.error].join(' ')}></div>
            </div>
        );
    } else if (+status === Device.RINGING) {
        return (
            <div>
                <div className={[classes.status__icon, classes.ring].join(' ')}></div>
            </div>
        );
    }
};

export default StatusIcon;
