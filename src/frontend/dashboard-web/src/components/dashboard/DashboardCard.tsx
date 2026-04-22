type Props = {
    title: string;
    value: string;
    subtitle?: string;
    backgroundColor?: string;
    isLoading?: boolean;
    isError?: boolean;
    lastUpdated?: string | null;
};

function DashboardCard({
    title,
    value,
    subtitle,
    backgroundColor = "var(--surface)",
    isLoading = false,
    isError = false,
    lastUpdated = null,
}: Props) {
    let valueClassName = "widget-value";
    if (isLoading) valueClassName += " loading";
    if (isError) valueClassName += " error";

    return (
        <article className="widget-card" style={{ background: backgroundColor }}>
            <div>
                <p className="widget-title">{title}</p>
                <h3 className={valueClassName}>
                    {isLoading ? "Loading..." : isError ? "Error" : value}
                </h3>
                {subtitle && <p className="widget-subtitle">{subtitle}</p>}
            </div>

            <div className="widget-footer">
                {lastUpdated ? `Updated at ${lastUpdated}` : "Up to date"}
            </div>
        </article>
    );
}

export default DashboardCard;