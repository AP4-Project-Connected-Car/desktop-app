import DataCard from '../DataCard';

export default function RelativeData() {
    return (
        <DataCard className="relative-data">
            <div className="cursor-container">
                <div className="cursor-top"></div>
                <div className="cursor-ref"></div>
                <div className="cursor-bottom"></div>
            </div>
            <div className="data-div"></div>
        </DataCard>
    );
}
