
function Transaction({transacType, value, disponibility}) {
    
    return (
        <section className="account">
        <div className="account-content-wrapper">
          <h3 className="account-title">{transacType}</h3>
          <p className="account-amount">{value}</p>
          <p className="account-amount-description">{disponibility}</p>
        </div>
        <div className="account-content-wrapper cta">
          <button className="transaction-button">View transactions</button>
        </div>
      </section>
    )
}

export default Transaction