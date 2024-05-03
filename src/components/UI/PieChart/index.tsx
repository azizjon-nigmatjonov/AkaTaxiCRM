import { useState } from "react";
import { Pie } from "@visx/shape";
import { Group } from "@visx/group";
import { Text } from "@visx/text";
interface Coin {
  // data: object;
  symbol: string;
  amount: number;
  color: string;
  inUSD: number;
}

export default function PieChart({ coins }: { coins: Coin[] }) {
  const [active, setActive] = useState<Coin | null>(null);
  const width: number = 200;
  const half: number = width / 2;
//  const amount = Object.values(coins);
  return (
    <div className="flex justify-center w-[100%]">
      <svg width={width} height={width}>
        <Group top={half} left={half}>
          <Pie
            data={coins}
            pieValue={(data: Coin) => data.amount*data.inUSD}
            outerRadius={half}
            innerRadius={({ data }: { data: Coin }) => {
              const size: number =
                active && active.symbol === data.symbol ? 12 : 8;
              return half - size;
            }}
            padAngle={0.01}
          >
            {(pie) => {
              return pie.arcs.map((arc) => {
                return (
                  <g
                    key={arc.data.symbol}
                    onMouseEnter={() => setActive(arc.data)}
                    onMouseLeave={() => setActive(null)}
                  >
                    <path d={`${pie.path(arc)}`} fill={arc.data.color}></path>
                  </g>
                );
              });
            }}
          </Pie>
          {active ? (
            <>
              <Text textAnchor="middle" fill="#000" fontSize={30} dy={-10}>
                {`$${Math.floor(active.amount * active.inUSD)}`}
              </Text>
              <Text
                textAnchor="middle"
                fill={active.color}
                fontSize={14}
                dy={30}
              >
                {`${active.amount} ${active.symbol}`}
              </Text>
            </>
          ) : (
            <>
              <Text textAnchor="middle" fill="#000" fontSize={30} dy={-10}>
                8,421 ta
              </Text>
              <Text textAnchor="middle" fill="#858592" fontSize={14} dy={30}>
                Haftalik yangi yo‘lovchilar
              </Text>
            </>
          )}
        </Group>
      </svg>
    </div>
  );
}
