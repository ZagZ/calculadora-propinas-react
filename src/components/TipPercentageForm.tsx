import { Dispatch, SetStateAction } from "react";

const tipOptions = [
  {
    id: "tip-10",
    value: 0.1,
    label: "10%",
  },
  {
    id: "tip-20",
    value: 0.2,
    label: "20%",
  },
  {
    id: "tip-50",
    value: 0.5,
    label: "50%",
  },
];

interface TipPercentageFormProps {
  tip: number;
  setTip: Dispatch<SetStateAction<number>>;
}

export default function TipPercentageForm({
  tip,
  setTip,
}: TipPercentageFormProps) {
  return (
    <div>
      <h3 className="font-black text-2xl mb-3">Propina</h3>
      <form>
        {tipOptions.map((tipOption) => (
          <div key={tipOption.id} className="flex gap-2 items-center">
            <label htmlFor="">{tipOption.label}</label>
            <input
              type="radio"
              name="tip"
              id={tipOption.id}
              value={tipOption.value}
              onChange={(e) => setTip(+e.target.value)}
              checked={tip === tipOption.value}
            />
          </div>
        ))}
      </form>
    </div>
  );
}
