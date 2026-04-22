type Props = {
    title: string;
    value: string;
};

function DashboardCard({ title, value }: Props) {
    return (
        <div
            style={{
                background: "#bcafe0ff",
                padding: "16px",
                borderRadius: "8px",
                boxShadow: "0 2px 6px rgba(51, 17, 114, 0.1)",
            }}
        >
            <h3>{title}</h3>
            <p>{value}</p>
        </div>
    );
}

export default DashboardCard;