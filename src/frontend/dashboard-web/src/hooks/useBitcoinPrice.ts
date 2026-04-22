import { useEffect, useState } from "react";

type BitcoinState = {
    price: string;
    loading: boolean;
    error: string | null;
    lastUpdated: string | null;
};

export function useBitcoinPrice(): BitcoinState {
    const [price, setPrice] = useState<string>("--");
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);

    useEffect(() => {
        async function fetchBitcoin() {
            try {
                setLoading(true);

                const response = await fetch(
                    "https://api.coinbase.com/v2/prices/BTC-USD/spot"
                );

                const data = await response.json();

                setPrice(`$${Number(data.data.amount).toLocaleString()}`);
                setLastUpdated(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
                setError(null);
            } catch (err) {
                setError("Errore nel recupero dati");
            } finally {
                setLoading(false);
            }
        }

        fetchBitcoin();
    }, []);

    return { price, loading, error, lastUpdated };
}