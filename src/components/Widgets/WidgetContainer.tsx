import React, { useEffect, useState } from "react";
import { WIDGET_API } from "../../constants";
import { WidgetItem } from "./WidgetItem";
import { svgIcon } from "../../constants/constants";
import useFetch from "../../hooks/useFetch";

interface Coin {
    id: string;
    name: string;
    symbol: string;
    price_usd: string;
    percent_change_24h: string;
}
interface ApiResponse {
    data: Coin[];
}
export const WidgetContainer: React.FC = () => {
    const [coins, setCoins] = useState<Coin[]>([]);
    const { data, error, isLoading } = useFetch<ApiResponse>({
        url: WIDGET_API,
        method: 'GET',
    });

    useEffect(() => {
        if (data && (data.data)) {
            setCoins(() => (
                data.data.filter((item: any) => svgIcon.includes(item.symbol.toLowerCase()))
            ))
        }
    }, [data]);

    if (isLoading) {
        return <p>Loading...</p>;
    }

    if (error) {
        return <p>Error: {error.message}</p>;
    }

    return (
        <div className='container coinblock_wrap_container flex flex-nowrap sm-flex-wrap justify-center align-stretch col-gap-4 row-gap-10'>
            {coins.map((coin) => (
                <WidgetItem
                    key={coin.id}
                    coinName={coin.name}
                    coinSymbol={coin.symbol}
                    coinPrice={coin.price_usd}
                    change={coin.percent_change_24h}
                />
            ))}
        </div>
    );
};
