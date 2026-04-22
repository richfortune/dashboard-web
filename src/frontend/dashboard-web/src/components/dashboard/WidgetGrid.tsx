import DashboardCard from "./DashboardCard";
import { widgets } from "../../data/mockWidgets";

function WidgetGrid() {
    return (
        <section>
            <div
                style={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    marginBottom: "18px",
                    gap: "12px",
                    flexWrap: "wrap",
                }}
            >
                <div>
                    <h2
                        style={{
                            fontSize: "1.5rem",
                            color: "#0f172a",
                            marginBottom: "4px",
                        }}
                    >
                        Overview
                    </h2>
                    <p
                        style={{
                            color: "#64748b",
                            fontSize: "0.95rem",
                        }}
                    >
                        Your most relevant daily widgets in one place.
                    </p>
                </div>
            </div>

            <div
                style={{
                    display: "grid",
                    gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
                    gap: "20px",
                }}
            >
                {widgets.map((widget) => (
                    <DashboardCard
                        key={widget.id}
                        title={widget.title}
                        value={widget.value}
                        backgroundColor={widget.backgroundColor}
                    />
                ))}
            </div>
        </section>
    );
}

export default WidgetGrid;