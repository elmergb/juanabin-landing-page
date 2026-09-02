import { useState } from 'react'
import { motion } from 'framer-motion'

const wasteTypes = [
  { key: 'pet', label: 'PET Plastic', max: 10, jbinRate: 1, co2Rate: 3, jbinLabel: '1.0 JBIN/kg', co2Label: '3.0 kg CO2e/kg', initial: 3 },
  { key: 'sachet', label: 'Sachet / Film', max: 10, jbinRate: 0.5, co2Rate: 2, jbinLabel: '0.5 JBIN/kg', co2Label: '2.0 kg CO2e/kg', initial: 2 },
  { key: 'organic', label: 'Organic Waste', max: 20, jbinRate: 0.2, co2Rate: 0.5, jbinLabel: '0.2 JBIN/kg', co2Label: '0.5 kg CO2e/kg', initial: 5 },
]

export default function Calculator() {
  const [weights, setWeights] = useState(Object.fromEntries(wasteTypes.map(({ key, initial }) => [key, initial])))
  const totalJbin = wasteTypes.reduce((total, waste) => total + weights[waste.key] * waste.jbinRate, 0)
  const totalCO2 = wasteTypes.reduce((total, waste) => total + weights[waste.key] * waste.co2Rate, 0)

  const updateWeight = (key, value) => setWeights((current) => ({ ...current, [key]: Number(value) }))

  return <section id="calculator" className="py-20 px-4 sm:px-6 lg:px-8 bg-emerald-50">
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12"><h2 className="text-4xl font-bold text-slate-900 mb-4">Turn Waste Into Impact</h2><p className="text-lg text-slate-600">Adjust the amount of waste collected to see an illustrative estimate of potential JBIN rewards and CO2e avoided.</p></div>
      <div className="bg-white rounded-2xl p-8 shadow-lg">
        <div className="space-y-8 mb-12">
          {wasteTypes.map((waste) => <div key={waste.key}>
            <div className="flex justify-between mb-3"><label htmlFor={`${waste.key}-weight`} className="text-sm font-semibold text-slate-900">{waste.label}</label><span className="text-sm font-bold text-emerald-600">{weights[waste.key]} kg</span></div>
            <input id={`${waste.key}-weight`} type="range" min="0" max={waste.max} step="0.1" value={weights[waste.key]} onChange={(event) => updateWeight(waste.key, event.target.value)} className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-emerald-600" />
            <div className="flex justify-between mt-2 text-xs text-slate-500"><span>{waste.jbinLabel}</span><span>{waste.co2Label}</span></div>
          </div>)}
        </div>
        <div className="grid md:grid-cols-2 gap-6 pt-8 border-t">
          <motion.div key={totalJbin} initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="bg-gradient-to-br from-emerald-50 to-emerald-100 rounded-xl p-6"><p className="text-sm text-slate-600 mb-2">Estimated JBIN Earned</p><p className="text-4xl font-bold text-emerald-600">{totalJbin.toFixed(2)} JBIN</p></motion.div>
          <motion.div key={totalCO2} initial={{ scale: 0.95 }} animate={{ scale: 1 }} className="bg-gradient-to-br from-slate-50 to-slate-100 rounded-xl p-6"><p className="text-sm text-slate-600 mb-2">Estimated CO2e Avoided</p><p className="text-4xl font-bold text-slate-900">{totalCO2.toFixed(2)} kg</p></motion.div>
        </div>
        <p className="text-xs text-slate-500 mt-6 text-center">Illustrative estimates only. Actual rewards depend on verified barangay collection rates and program rules.</p>
      </div>
    </div>
  </section>
}
