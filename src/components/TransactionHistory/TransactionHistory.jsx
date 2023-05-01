import PropTypes from 'prop-types';
import { StyledTransitionTable, StyledTableHead, StyledTd, StyledTbody } from './TransactionHistory.styled';

const TransactionHistory = ({ items }) => {
    return (
        <StyledTransitionTable className="transaction-history">
            <thead>
                <tr>
                    <StyledTableHead>Type</StyledTableHead>
                    <StyledTableHead>Amount</StyledTableHead>
                    <StyledTableHead>Currency</StyledTableHead>
                </tr>
            </thead>
            <StyledTbody>
                {items.map(({id, type, amount, currency}) =>
                <tr key={id}>
                    <StyledTd> {type}</StyledTd>
                    <StyledTd>{amount}</StyledTd>
                    <StyledTd>{currency}</StyledTd>
                </tr>)}
            </StyledTbody>
        </StyledTransitionTable>
    )
};

TransactionHistory.propTypes = {
    items: PropTypes.array.isRequired,
};

export default TransactionHistory;