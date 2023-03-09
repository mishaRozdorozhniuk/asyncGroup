import React from 'react';
import MatchResult from "./MatchResult";
import './MatchResults.css'

const MatchResults = () => {
    const bgGreen = 'linear-gradient(180deg, #54B052 0%, #287226 100%)'
    const bgGrey = 'linear-gradient(180deg, #F1F1F1 0%, #9E9E9E 100%)'

    return (
        <section className="match__result-main">
            <MatchResult time="13:00"
                         firstTeam="Sunderland"
                         secondTeam="West Brom"
                         bgGrey={bgGrey}
                         bgGreen={bgGreen}
                         red="red"
                         transparent=""/>
            <MatchResult time="15:00"
                         firstTeam="Deportive Alavés"
                         secondTeam="Levante UD"
                         locked={true}
                         bgGrey={bgGrey} />
            <MatchResult time="17:00"
                         firstTeam="Brescia"
                         secondTeam="Parma"
                         bgGrey={bgGrey}
                         bgGreen={bgGreen}
                         green="#54B052" red='red'/>
            <MatchResult time="21:00"
                         firstTeam="Jong AZ"
                         secondTeam="Jong PSV"
                         bgGrey={bgGrey}
                         green="green"
                         unvailable/>
        </section>
    );
};

export default MatchResults;