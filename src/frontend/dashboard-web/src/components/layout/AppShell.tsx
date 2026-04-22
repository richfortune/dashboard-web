import Sidebar from "./Sidebar";

type Props = {
    children: React.ReactNode;
};

function AppShell({ children }: Props) {
    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "24px 16px",
            }}
        >
            <div
                style={{
                    maxWidth: "1280px",
                    margin: "0 auto",
                    display: "grid",
                    gridTemplateColumns: "240px 1fr",
                    gap: "24px",
                    alignItems: "start",
                }}
            >
                <Sidebar />

                <div>
                    <header
                        style={{
                            background: "linear-gradient(135deg, #b7d7d2 0%, #7db8b0 100%)",
                            color: "#0f172a",
                            borderRadius: "24px",
                            padding: "32px",
                            boxShadow: "0 10px 30px rgba(15, 23, 42, 0.10)",
                            marginBottom: "24px",
                        }}
                    >
                        <p
                            style={{
                                fontSize: "14px",
                                fontWeight: 600,
                                letterSpacing: "0.08em",
                                textTransform: "uppercase",
                                opacity: 0.75,
                                marginBottom: "8px",
                            }}
                        >
                            Yama Dashboard
                        </p>

                        <h1
                            style={{
                                fontSize: "clamp(2rem, 4vw, 4rem)",
                                lineHeight: 1.1,
                                marginBottom: "10px",
                            }}
                        >
                            Daily Dashboard
                        </h1>

                        <p
                            style={{
                                fontSize: "1rem",
                                color: "#1f2937",
                                maxWidth: "700px",
                            }}
                        >
                            A clean and simple place to collect your most useful daily
                            information.
                        </p>
                    </header>

                    <main>{children}</main>
                </div>
            </div>
        </div>
    );
}

export default AppShell;