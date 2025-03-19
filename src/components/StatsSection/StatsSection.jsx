
import StatItem from '../StatItem/StatItem'
import './StatsSection.css'


export default function StatsSection() {
  return (
    <section className="stats-section">
      <h1 className="stats-section__title">
        Get <span className="stats-section__highlight">insights</span> that help your business grow.
      </h1>
      <p className="stats-section__description">
        Discover the benefits of data analytics and make better decisions regarding revenue, customer experience, and overall efficiency.
      </p>
      <div className="stats">
        <StatItem amount="10k+" concept="companies" />
        <StatItem amount="314" concept="templates" />
        <StatItem amount="12M+" concept="queries" />
      </div>
    </section>
  );
}