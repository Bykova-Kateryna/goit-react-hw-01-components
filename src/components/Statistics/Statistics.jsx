
import PropTypes from 'prop-types'
import { StatisticsSection } from './Statistics.styled'

export const Statistics = ({title, stats}) => {
    const list = stats.map((stat) => {
            return ( <li key={stat.id}>
                <span>{stat.label}</span>
                <span>{stat.percentage}%</span>
              </li>)
        })
    return (
    <StatisticsSection>
    {title ? <h2>{title}</h2> : ''}
    <ul>
    {list}
    </ul>
    </StatisticsSection>
    )
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.array
}