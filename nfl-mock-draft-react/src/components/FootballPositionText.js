import React from 'react';

const footballPositionPrettyValuesMap = {
    QUARTERBACK: 'Quarterback',
    RUNNING_BACK: 'Running Back',
    FULLBACK: 'Fullback',
    TIGHT_END: 'Tight End',
    WIDE_RECEIVER: 'Wide Receiver',
    OFFENSIVE_TACKLE: 'Tackle',
    OFFENSIVE_GUARD: 'Guard',
    OFFENSIVE_CENTER: 'Center',
    DEFENSIVE_END: 'Defensive End',
    DEFENSIVE_TACKLE: 'Defensive Tackle',
    EDGE_RUSHER: 'Edge Rusher',
    OUTSIDE_LINEBACKER: 'Outside Linebacker',
    INSIDE_LINEBACKER: 'Inside Linebacker',
    CORNERBACK: 'Cornerback',
    SAFETY: 'Safety',
    PUNTER: 'Punter',
    KICKER: 'Kicker',
    SPECIAL_TEAMS: 'Special Teams',
};

const FootballPositionText = (props) => {

    return (
        <span>{footballPositionPrettyValuesMap[props.position]}</span>
    );
};

export default FootballPositionText;
