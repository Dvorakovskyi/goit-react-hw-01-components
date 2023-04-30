import PropTypes from 'prop-types';

const Statisticts = ({title, stats}) => {
    return (
        <section className="statistics">
            <h2 className="title">{title}</h2>
            <ul className="stat-list">
                {stats.map(({id, label, percentage}) =>
                <li className="item" key={id}>
                    <span className="label">{label}</span>
                    <span className="percentage">{percentage}%</span>
                </li>
                )}
            </ul>
        </section>
    )
};

Statisticts.propTypes = {
    title: PropTypes.string,
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
}

export default Statisticts;