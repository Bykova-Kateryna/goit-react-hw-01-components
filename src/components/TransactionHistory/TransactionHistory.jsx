import PropTypes from 'prop-types'

export const TransactionHistory = ({items}) => {
    const transactionItems = items.map((item) => {
            return ( 
<tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
              )
        })
    return (
        <table>
        <thead>
          <tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </tr>
        </thead>
      
        <tbody>
          {transactionItems}
        </tbody>
      </table>
      
    )
}

TransactionHistory.propTypes = {
    items: PropTypes.array
}

