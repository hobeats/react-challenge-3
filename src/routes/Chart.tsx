import { useQuery } from "react-query";
import { fetchCoinHistory } from "../api";
import ApexChart from "react-apexcharts";

interface IHistorical {
  time_open: string;
  time_close: string;
  open: number;
  high: number;
  low: number;
  close: number;
  volume: number;
  market_cap: number;
}
interface ChartProps {
  coinId: string;
}
function Chart({ coinId }: ChartProps) {
  const { isLoading, data } = useQuery<IHistorical[]>(["ohlcv", coinId], () =>
    fetchCoinHistory(coinId)
  );
  return (
    <div>
      {isLoading ? (
        "Loading Chart..."
      ) : (
        <ApexChart
          type="candlestick"
          series={[
            {
              name: "Price",
              data: data?.map((price) => ({
                x: price.time_close, // 날짜
                y: [price.open, price.high, price.low, price.close], // 시가, 고가, 저가, 종가
              })) ?? []
            },
          ]}
          options={{
            theme: {
              mode: "dark",
            },
            chart: {
              type: 'candlestick',
              height: 350,
              width: 500,
              background:"transparent"
            },
            stroke:{
              width:1,
            },
            xaxis:{
              type:'datetime',
            },
            yaxis:{
              labels:{
                show:false
              }
            },
           
          }}
        />
      )}
    </div>
  );
}

export default Chart;
