function Sidebar() {
    const menuItems = ["Dashboard", "Markets", "Weather", "Notes"];

    return (
        <aside
            style={{
                width: "240px",
                background: "#ffffff",
                borderRadius: "24px",
                padding: "24px 18px",
                boxShadow: "0 10px 30px rgba(15, 23, 42, 0.08)",
                display: "flex",
                flexDirection: "column",
                gap: "24px",
            }}
        >
            <div>
                <p
                    style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        letterSpacing: "0.08em",
                        textTransform: "uppercase",
                        color: "#7c8aa0",
                        marginBottom: "8px",
                    }}
                >
                    Yama
                </p>

                <h2
                    style={{
                        fontSize: "1.4rem",
                        color: "#0f172a",
                        lineHeight: 1.2,
                    }}
                >
                    Dashboard
                </h2>
            </div>

            <nav>
                <ul
                    style={{
                        listStyle: "none",
                        padding: 0,
                        margin: 0,
                        display: "flex",
                        flexDirection: "column",
                        gap: "10px",
                    }}
                >
                    {menuItems.map((item, index) => {
                        const isActive = index === 0;

                        return (
                            <li key={item}>
                                <button
                                    type="button"
                                    style={{
                                        width: "100%",
                                        border: "none",
                                        borderRadius: "14px",
                                        padding: "12px 14px",
                                        textAlign: "left",
                                        background: isActive ? "#dff3ee" : "transparent",
                                        color: isActive ? "#1f2937" : "#64748b",
                                        fontSize: "0.98rem",
                                        fontWeight: isActive ? 700 : 500,
                                        cursor: "pointer",
                                    }}
                                >
                                    {item}
                                </button>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <div
                style={{
                    marginTop: "auto",
                    padding: "16px",
                    borderRadius: "18px",
                    background: "linear-gradient(135deg, #b7d7d2 0%, #7db8b0 100%)",
                    color: "#0f172a",
                }}
            >
                <p
                    style={{
                        fontSize: "0.8rem",
                        fontWeight: 700,
                        textTransform: "uppercase",
                        marginBottom: "8px",
                        opacity: 0.8,
                    }}
                >
                    Focus
                </p>

                <p
                    style={{
                        fontSize: "0.95rem",
                        lineHeight: 1.4,
                    }}
                >
                    Keep your daily essentials visible and simple.
                </p>
            </div>
        </aside>
    );
}

export default Sidebar;