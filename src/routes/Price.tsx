import { useQuery } from "react-query";
import { fetchCoinHistory, fetchCoinTickers } from "../api";

interface PriceProps {
  coinId: string;
}

interface PriceData {
  id: string;
  name: string;
  symbol: string;
  rank: number;
  circulating_supply: number;
  total_supply: number;
  max_supply: number;
  beta_value: number;
  first_data_at: string;
  last_updated: string;
  quotes: {
    USD: {
      ath_date: string;
      ath_price: number;
      market_cap: number;
      market_cap_change_24h: number;
      percent_change_1h: number;
      percent_change_1y: number;
      percent_change_6h: number;
      percent_change_7d: number;
      percent_change_12h: number;
      percent_change_15m: number;
      percent_change_24h: number;
      percent_change_30d: number;
      percent_change_30m: number;
      percent_from_price_ath: number;
      price: number;
      volume_24h: number;
      volume_24h_change_24h: number;
    };
  };
}

function Price({ coinId }: PriceProps) {
  const { isLoading: tickersLoading, data: tickersData } = useQuery<PriceData>(
    ["tickers", coinId],
    () => fetchCoinTickers(coinId)
  );
  return (
    <div>
      {tickersLoading ? (
        "Loading..."
      ) : (
        <>
        <div>First Data at : {tickersData?.first_data_at}</div>
        <div>ATH DATE : {tickersData?.quotes.USD.ath_date}</div>
        <div>ATH Price : $ {tickersData?.quotes.USD.ath_price.toFixed(2)}</div>
        <div>Price : $ {tickersData?.quotes.USD.price.toFixed(2)}</div>
        <div>Percent Change 15m : {tickersData?.quotes.USD.percent_change_15m} %</div>
        <div>Percent Change 1h : {tickersData?.quotes.USD.percent_change_1h} %</div>
        <div>Percent Change 12h : {tickersData?.quotes.USD.percent_change_12h} %</div>
        <div>Percent Change 24h : {tickersData?.quotes.USD.percent_change_24h} %</div>
        </>
      )}
    </div>
  );
}

export default Price;
