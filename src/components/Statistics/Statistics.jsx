import { getRandomHexColor } from './randomColor';
import PropTypes from 'prop-types';
import {
  StatisticsSection,
  StatisticsTitle,
  StatisticsList,
  StatisticsItemSection,
  StatisticsItem,
} from './Statistics.styled';

export const Statistics = ({ title, stats }) => {
  return (
    <StatisticsSection>
      {title && <StatisticsTitle>{title}</StatisticsTitle>}
      <StatisticsList>
        {stats.map(stat => {
          let randomBGColor = getRandomHexColor();
          return (
            <StatisticsItem
              style={{
                backgroundColor: `${randomBGColor}`,
              }}
              key={stat.id}
            >
              <StatisticsItemSection>{stat.label}</StatisticsItemSection>
              <StatisticsItemSection>{stat.percentage}%</StatisticsItemSection>
            </StatisticsItem>
          );
        })}
      </StatisticsList>
    </StatisticsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired,
    })
  ),
};
