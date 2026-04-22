import Sidebar from "./Sidebar";

type Props = {
    children: React.ReactNode;
};

function AppShell({ children }: Props) {
    return (
        <div
            style={{
                minHeight: "100vh",
                padding: "16px 12px",
            }}
        >
            <div className="app-layout">
                <Sidebar />

                <div>
                    <header className="app-header">
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