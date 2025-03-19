import './StatItem.css'

export default function StatItem({ amount, concept }) {
  return (
    <div className="stats__item">
      <div className="stats__amount">{amount}</div>
      <div className="stats__concept">{concept}</div>
    </div>
  );
}