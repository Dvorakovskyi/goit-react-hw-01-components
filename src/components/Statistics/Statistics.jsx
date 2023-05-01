import PropTypes from 'prop-types';
import { StyledStatistics, StaledTitle, StyledStatisticsList, StyledStatisticsItem } from './Statistics.styled';

const Statisticts = ({title, stats}) => {
    return (
        <StyledStatistics>
            <StaledTitle>{title}</StaledTitle>
            <StyledStatisticsList>
                {stats.map(({id, label, percentage}) =>
                    <StyledStatisticsItem key={id}
                        style={{backgroundColor: getRandomHexColor()}}
                    >
                    <span>{label}</span>
                    <span>{percentage}%</span>
                </StyledStatisticsItem>
                )}
            </StyledStatisticsList>
        </StyledStatistics>
    )
};

Statisticts.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

export default Statisticts;