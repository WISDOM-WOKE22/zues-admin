import { useCollection } from "../../Hooks/UseCollection"
import { projectFirestore } from "../../Firebase/FirebaseConfig"
import './Transaction.css'
import { useParams } from "react-router-dom"

export default function Transactions() {
  const { id } = useParams()
  const { documents } = useCollection(
    "Transactions",
    ["uid","==",id]
  )

  const updateTransaction = (id) => {
    projectFirestore.collection('Transactions')
    .doc(id).update({ status: 'Approved' })
  }
    //  console.log(documents[1])
  return (
    <div className="transaction-container">
      <h2>User Transactions</h2>
      <div className="transaction-list">
        {documents && documents.map(transaction => (
          <li>
            <span>{transaction.type}</span>
            <span>{transaction.amount}</span>
            <span>{transaction.time}</span>
            <span>{transaction.pair}</span>
            <span>{transaction.status}</span>
            <button
             onClick={() => updateTransaction(transaction.id)}>Approve</button>
          </li>
        ))}
        {!documents && <div>No Transaction yet</div>}
      </div>
    </div>
  )
}
