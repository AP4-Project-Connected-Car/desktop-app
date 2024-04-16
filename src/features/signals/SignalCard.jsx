export default function SignalCard({ name, imgName }) {
    return (
        <div className="data-card">
            <h3>{ name }</h3>
            <img src={ imgName } alt={name} />
        </div>
    );
}