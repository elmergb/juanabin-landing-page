import { motion } from "framer-motion";
import { jsPDF } from "jspdf";

const complianceItems = [
  "Waste diversion records",
  "Household participation tracking",
  "Collection weights and verification",
  "Reward distribution records",
  "Digital audit trails",
  "Exportable reports",
];

const reportRows = [
  ["Reporting Period", "August 2026"],
  ["Total Waste Collected (kg)", "128.4"],
  ["Households Participating", "47"],
  ["Estimated CO2e Avoided (kg)", "214.6"],
  ["JBIN Distributed", "86.7"],
];

function escapeCsvValue(value: string) {
  return `"${value.replaceAll('"', '""')}"`;
}

function exportReportCsv() {
  const csv = [["Metric", "Value"], ...reportRows]
    .map((row) => row.map(escapeCsvValue).join(","))
    .join("\r\n");
  const blob = new Blob([`\uFEFF${csv}\r\n`], { type: "text/csv;charset=utf-8" });
  const downloadUrl = URL.createObjectURL(blob);
  const link = document.createElement("a");

  link.href = downloadUrl;
  link.download = "barangay-waste-diversion-report.csv";
  document.body.appendChild(link);
  link.click();
  link.remove();
  URL.revokeObjectURL(downloadUrl);
}

function generateReportPdf() {
  const pdfDocument = new jsPDF();
  const pageWidth = pdfDocument.internal.pageSize.getWidth();
  const tableLeft = 20;
  const tableWidth = pageWidth - tableLeft * 2;
  const rowHeight = 12;

  pdfDocument.setFillColor(5, 150, 105);
  pdfDocument.rect(0, 0, pageWidth, 42, "F");
  pdfDocument.setTextColor(255, 255, 255);
  pdfDocument.setFont("helvetica", "bold");
  pdfDocument.setFontSize(19);
  pdfDocument.text("JuanaBin", tableLeft, 17);
  pdfDocument.setFontSize(13);
  pdfDocument.text("Barangay Waste Diversion Report", tableLeft, 29);
  pdfDocument.setFont("helvetica", "normal");
  pdfDocument.setFontSize(9);
  pdfDocument.text("Environmental records and impact summary", tableLeft, 36);

  pdfDocument.setTextColor(71, 85, 105);
  pdfDocument.setFontSize(9);
  pdfDocument.text("REPORTING PERIOD", tableLeft, 57);
  pdfDocument.setTextColor(15, 23, 42);
  pdfDocument.setFont("helvetica", "bold");
  pdfDocument.setFontSize(12);
  pdfDocument.text("August 2026", tableLeft, 65);

  const tableTop = 78;
  pdfDocument.setFillColor(15, 23, 42);
  pdfDocument.roundedRect(tableLeft, tableTop, tableWidth, rowHeight, 2, 2, "F");
  pdfDocument.setTextColor(255, 255, 255);
  pdfDocument.setFontSize(10);
  pdfDocument.text("METRIC", tableLeft + 6, tableTop + 8);
  pdfDocument.text("VALUE", tableLeft + tableWidth - 45, tableTop + 8);

  reportRows.slice(1).forEach(([metric, value], index) => {
    const rowTop = tableTop + rowHeight + index * rowHeight;
    pdfDocument.setFillColor(index % 2 === 0 ? 240 : 255, 253, 250);
    pdfDocument.rect(tableLeft, rowTop, tableWidth, rowHeight, "F");
    pdfDocument.setDrawColor(226, 232, 240);
    pdfDocument.line(tableLeft, rowTop + rowHeight, tableLeft + tableWidth, rowTop + rowHeight);
    pdfDocument.setTextColor(51, 65, 85);
    pdfDocument.setFont("helvetica", "normal");
    pdfDocument.text(metric, tableLeft + 6, rowTop + 8);
    pdfDocument.setFont("helvetica", "bold");
    pdfDocument.setTextColor(5, 150, 105);
    pdfDocument.text(value, tableLeft + tableWidth - 45, rowTop + 8);
  });

  pdfDocument.setTextColor(100, 116, 139);
  pdfDocument.setFont("helvetica", "normal");
  pdfDocument.setFontSize(8);
  pdfDocument.text(
    "Prepared by JuanaBin | For documentation and reporting purposes",
    tableLeft,
    155,
  );
  pdfDocument.setDrawColor(203, 213, 225);
  pdfDocument.line(tableLeft, 160, pageWidth - tableLeft, 160);
  pdfDocument.text("Generated September 3, 2026", tableLeft, 170);
  pdfDocument.text("RA 9003 and EPR Act reporting support", tableLeft, 177);

  pdfDocument.save("barangay-waste-diversion-report.pdf");
}

export default function Compliance() {
  return (
    <section id="compliance" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold text-slate-900 mb-4">
              Built for Transparent Barangay Operations
            </h2>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              JuanaBin is designed to help organize waste diversion records,
              household participation, collection weights, reward distribution
              records, digital audit trails, and exportable reports for LGU
              administrators and environmental officers.
            </p>
            <ul className="space-y-4">
              {complianceItems.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <span className="text-emerald-600 mt-1">✓</span>
                  <span className="text-slate-700">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-sm text-slate-500 mt-8">
              Designed to support documentation and reporting workflows related
              to RA 9003 and the EPR Act.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="bg-gradient-to-br from-slate-50 to-emerald-50 rounded-2xl p-8 border border-emerald-100"
          >
            <div className="bg-white rounded-xl p-6 shadow-lg">
              <p className="text-xs font-semibold text-slate-500 mb-4">
                BARANGAY WASTE DIVERSION REPORT
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-xs text-slate-500 mb-1">
                    Reporting Period
                  </p>
                  <p className="text-lg font-bold text-slate-900">
                    August 2026
                  </p>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      Total Waste Collected
                    </p>
                    <p className="text-xl font-bold text-slate-900">128.4 kg</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      Households Participating
                    </p>
                    <p className="text-xl font-bold text-slate-900">47</p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      Estimated CO2e Avoided
                    </p>
                    <p className="text-xl font-bold text-slate-900">214.6 kg</p>
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 mb-1">
                      JBIN Distributed
                    </p>
                    <p className="text-xl font-bold text-emerald-600">86.7</p>
                  </div>
                </div>
              </div>
              <div className="flex gap-3 mt-6">
                <button
                  type="button"
                  onClick={exportReportCsv}
                  className="flex-1 px-3 py-2 bg-emerald-600 text-white text-xs font-semibold rounded-lg hover:bg-emerald-700 transition-colors"
                >
                  Export CSV
                </button>
                <button
                  type="button"
                  onClick={generateReportPdf}
                  className="flex-1 px-3 py-2 bg-slate-200 text-slate-900 text-xs font-semibold rounded-lg hover:bg-slate-300 transition-colors"
                >
                  Generate PDF
                </button>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
