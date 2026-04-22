type Props = {
    children: React.ReactNode;
};

function AppShell({ children }: Props) {
    return (
        <div>
            <header style={{ padding: "16px", background: "#8fb9b2ff", color: "#2e4464ff" }}>
                <h1>Daily Dashboard</h1>
            </header>

            <main style={{ padding: "16px" }}>
                {children}
            </main>
        </div>
    );
}

export default AppShell;