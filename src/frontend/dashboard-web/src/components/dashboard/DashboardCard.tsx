type Props = {
    title: string;
    value: string;
    subtitle?: string;
    backgroundColor?: string;
};

function DashboardCard({
    title,
    value,
    subtitle,
    backgroundColor = "#ffffff",
}: Props) {
    return (
        <article
            style={{
                background: backgroundColor,
                padding: "24px",
                borderRadius: "18px",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                minHeight: "160px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                transition: "transform 0.2s ease, box-shadow 0.2s ease",
            }}
        >
            <div>
                <p
                    style={{
                        fontSize: "0.9rem",
                        fontWeight: 700,
                        color: "#475569",
                        marginBottom: "10px",
                        textTransform: "uppercase",
                        letterSpacing: "0.04em",
                    }}
                >
                    {title}
                </p>

                <h3
                    style={{
                        fontSize: "1.8rem",
                        lineHeight: 1.2,
                        color: "#0f172a",
                    }}
                >
                    {value}
                </h3>

                {subtitle && (
                    <p
                        style={{
                            marginTop: "8px",
                            fontSize: "0.95rem",
                            color: "#64748b",
                        }}
                    >
                        {subtitle}
                    </p>
                )}
            </div>

            <p
                style={{
                    marginTop: "20px",
                    fontSize: "0.95rem",
                    color: "#64748b",
                }}
            >
                Updated just now
            </p>
        </article>
    );
}

export default DashboardCard;