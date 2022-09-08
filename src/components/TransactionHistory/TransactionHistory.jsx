import PropTypes from 'prop-types'
import { TransactionTable, TransactionTableHead, TransactionTableBody, TransactionTableBodyContent } from './TransactionHistory.styled'

export const TransactionHistory = ({items}) => {
    const transactionItems = items.map((item) => {
            return ( 
<TransactionTableBodyContent key={item.id}>
      <TransactionTableBody>{item.type}</TransactionTableBody>
      <TransactionTableBody>{item.amount}</TransactionTableBody>
      <TransactionTableBody>{item.currency}</TransactionTableBody>
    </TransactionTableBodyContent>
              )
        })
    return (
        <TransactionTable>
        <thead>
          <tr>
            <TransactionTableHead>Type</TransactionTableHead>
            <TransactionTableHead>Amount</TransactionTableHead>
            <TransactionTableHead>Currency</TransactionTableHead>
          </tr>
        </thead>
      
        <tbody>
          {transactionItems}
        </tbody>
      </TransactionTable>
      
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        type: PropTypes.string.isRequired,
        amount: PropTypes.string.isRequired,
        currency: PropTypes.string.isRequired,
      })
    ),
};

