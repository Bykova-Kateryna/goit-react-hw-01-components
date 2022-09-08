import { getRandomHexColor } from './randomColor'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components';
import { StatisticsSection, StatisticsTitle, StatisticsList, StatisticsItemSection, StatisticsItem } from './Statistics.styled'




export const Statistics = ({title, stats}) => {
    const list = stats.map((stat) => {
        let randomBGColor = getRandomHexColor();
            return ( 
                <StatisticsItem style={{
                    backgroundColor: `${randomBGColor}`,
                  }} key={stat.id}>
                <StatisticsItemSection>{stat.label}</StatisticsItemSection>
                <StatisticsItemSection>{stat.percentage}%</StatisticsItemSection>
              </StatisticsItem>
            )
        })
    return (
    <StatisticsSection>
    {title ? <StatisticsTitle>{title}</StatisticsTitle> : ''}
    <StatisticsList>
    {list}
    </StatisticsList>
    </StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}
