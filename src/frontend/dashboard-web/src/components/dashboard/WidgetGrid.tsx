import DashboardCard from "./DashboardCard";
import { widgets } from "../../data/mockWidgets";

function WidgetGrid() {
    return (
        <div
            style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
                gap: "16px",
            }}
        >
            {widgets.map((w) => (
                <DashboardCard key={w.id} title={w.title} value={w.value} />
            ))}
        </div>
    );
}

export default WidgetGrid;