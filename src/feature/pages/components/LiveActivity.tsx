import { Link } from "react-router-dom";
import { siteConfig } from "../../../config/site";

const transactions = [
  {
    time: "21:42",
    officer: "BRGY-014",
    type: "PET Plastic",
    weight: "850 g",
    jbin: 0.85,
  },
  {
    time: "21:37",
    officer: "BRGY-009",
    type: "Sachet",
    weight: "420 g",
    jbin: 0.21,
  },
  {
    time: "21:31",
    officer: "BRGY-021",
    type: "Organic",
    weight: "1.2 kg",
    jbin: 0.24,
  },
  {
    time: "21:25",
    officer: "BRGY-006",
    type: "PET Plastic",
    weight: "650 g",
    jbin: 0.65,
  },
];

function TransactionLink() {
  return (
    <Link
      to="/connect"
      className="text-xs font-semibold text-emerald-600 hover:text-emerald-700 underline"
    >
      View
    </Link>
  );
}

export default function LiveActivity() {
  return (
    <section id="activity" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
      <div className="max-w-7xl mx-auto">
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-4">
            <span className="w-3 h-3 bg-emerald-500 rounded-full" />
            <span className="text-xs font-semibold text-emerald-700">
              Stellar Testnet
            </span>
          </div>
          <h2 className="text-4xl font-bold text-slate-900 mb-4">
            Live Activity
          </h2>
          <p className="text-lg text-slate-600">
            See how verified collection events can be recorded transparently on
            Stellar Testnet.
          </p>
        </div>
        <div className="bg-white rounded-2xl overflow-hidden shadow-lg">
          <div className="hidden md:block overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="bg-slate-50 border-b">
                  {[
                    "Timestamp",
                    "Officer ID",
                    "Waste Type",
                    "Weight",
                    "JBIN",
                    "Stellar Tx",
                  ].map((heading) => (
                    <th
                      key={heading}
                      className="px-6 py-4 text-left text-xs font-semibold text-slate-600"
                    >
                      {heading}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {transactions.map((tx) => (
                  <tr
                    key={`${tx.time}-${tx.officer}`}
                    className="border-b hover:bg-slate-50"
                  >
                    <td className="px-6 py-4 text-sm text-slate-900">
                      {tx.time}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-900 font-mono">
                      {tx.officer}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {tx.type}
                    </td>
                    <td className="px-6 py-4 text-sm text-slate-600">
                      {tx.weight}
                    </td>
                    <td className="px-6 py-4 text-sm font-semibold text-emerald-600">
                      {tx.jbin}
                    </td>
                    <td className="px-6 py-4">
                      <TransactionLink />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="md:hidden p-4 space-y-4">
            {transactions.map((tx) => (
              <div
                key={`${tx.time}-${tx.officer}`}
                className="bg-slate-50 rounded-lg p-4 border"
              >
                <div className="flex justify-between mb-2">
                  <span className="text-xs font-semibold text-slate-500">
                    {tx.time}
                  </span>
                  <TransactionLink />
                </div>
                <p className="font-semibold text-slate-900 mb-1">{tx.type}</p>
                <div className="flex justify-between text-sm">
                  <span className="text-slate-600">{tx.weight}</span>
                  <span className="font-semibold text-emerald-600">
                    {tx.jbin} JBIN
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <span className="inline-block bg-slate-100 text-slate-600 text-xs font-semibold px-3 py-1 rounded-full">
            DEMO DATA
          </span>
        </div>
      </div>
    </section>
  );
}
