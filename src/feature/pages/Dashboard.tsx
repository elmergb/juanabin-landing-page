import { useState } from "react";
import {
  LayoutDashboard,
  Wallet,
  Activity,
  FileText,
  Settings,
  ChevronDown,
  ChevronRight,
} from "lucide-react";

interface MenuItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  disabled?: boolean;
  children?: { label: string; href: string; disabled?: boolean }[];
}

export default function Dashboard() {
  const [expandedSections, setExpandedSections] = useState<string[]>([
    "Overview",
  ]);

  const toggleSection = (label: string) => {
    setExpandedSections((prev) =>
      prev.includes(label)
        ? prev.filter((item) => item !== label)
        : [...prev, label]
    );
  };

  const menuItems: MenuItem[] = [
    {
      icon: <LayoutDashboard className="w-4 h-4" />,
      label: "Dashboard",
      href: "/dashboard",
    },
    {
      icon: <Activity className="w-4 h-4" />,
      label: "Build",
      children: [
        { label: "Integration", href: "#integration", disabled: true },
        { label: "API Keys", href: "#api-keys", disabled: true },
        { label: "Wallets", href: "#wallets", disabled: true },
      ],
    },
    {
      icon: <Activity className="w-4 h-4" />,
      label: "Verify",
      children: [
        { label: "Contracts", href: "#contracts", disabled: true },
        { label: "Public Proof", href: "#public-proof", disabled: true },
      ],
    },
    {
      icon: <Activity className="w-4 h-4" />,
      label: "Observe",
      children: [
        { label: "Events", href: "#events", disabled: true },
        { label: "Webhooks", href: "#webhooks", disabled: true },
        { label: "Debug", href: "#debug", disabled: true },
      ],
    },
    {
      icon: <Wallet className="w-4 h-4" />,
      label: "Pay",
      children: [
        { label: "Payments", href: "#payments", disabled: true },
      ],
    },
    {
      icon: <Settings className="w-4 h-4" />,
      label: "Settle",
      children: [
        { label: "Settlement", href: "#settlement", disabled: true },
      ],
    },
    {
      icon: <FileText className="w-4 h-4" />,
      label: "Documentation",
      href: "https://github.com/JuanaBin-PH/JuanaBin-PH",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-slate-50">
      {/* Top Header Bar */}
      <header className="fixed top-0 left-0 right-0 h-14 bg-white border-b border-slate-200 z-50 flex items-center justify-between px-4">
        <div className="flex items-center gap-3">
          <div className="flex items-center gap-2">
            <LayoutDashboard className="w-5 h-5 text-slate-700" />
            <span className="font-semibold text-slate-900">JuanaBin Dashboard</span>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          <button className="px-3 py-1.5 text-xs font-medium bg-blue-50 text-blue-600 border border-blue-200 rounded-md hover:bg-blue-100 transition-colors">
            Stellar Testnet
          </button>
          <button className="px-3 py-1.5 text-xs font-medium bg-slate-100 text-slate-600 border border-slate-200 rounded-md hover:bg-slate-200 transition-colors">
            No wallet
          </button>
          <button className="px-3 py-1.5 text-xs font-medium bg-yellow-100 text-yellow-800 border border-yellow-300 rounded-md hover:bg-yellow-200 transition-colors">
            Wallet ready
          </button>
        </div>
      </header>

      <div className="flex flex-1 pt-14">
        {/* Sidebar */}
        <aside className="w-64 bg-white border-r border-slate-200 fixed left-0 top-14 bottom-0 overflow-y-auto">
          <div className="p-4">
            <div className="mb-6">
              <h2 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-2">
                JuanaBin Platform
              </h2>
            </div>

            <nav className="space-y-1">
              {menuItems.map((item) => (
                <div key={item.label}>
                  {item.children ? (
                    <>
                      <button
                        onClick={() => !item.disabled && toggleSection(item.label)}
                        disabled={item.disabled}
                        className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                          item.disabled
                            ? "text-slate-400 cursor-default"
                            : "text-slate-700 hover:bg-slate-100 cursor-pointer"
                        }`}
                      >
                        <div className="flex items-center gap-3">
                          {item.icon}
                          <span>{item.label}</span>
                        </div>
                        {!item.disabled && (expandedSections.includes(item.label) ? (
                          <ChevronDown className="w-4 h-4" />
                        ) : (
                          <ChevronRight className="w-4 h-4" />
                        ))}
                      </button>
                      {!item.disabled && expandedSections.includes(item.label) && (
                        <div className="ml-7 mt-1 space-y-1">
                          {item.children.map((child) => (
                            <span
                              key={child.href}
                              className={`block px-3 py-2 text-sm rounded-md transition-colors ${
                                child.disabled
                                  ? "text-slate-400 cursor-default"
                                  : "text-slate-600 hover:text-emerald-600 hover:bg-slate-50 cursor-pointer"
                              }`}
                            >
                              {child.label}
                            </span>
                          ))}
                        </div>
                      )}
                    </>
                  ) : (
                    <a
                      href={item.disabled ? undefined : item.href}
                      target={item.href?.startsWith("http") ? "_blank" : undefined}
                      rel={item.href?.startsWith("http") ? "noopener noreferrer" : undefined}
                      onClick={(e) => item.disabled && e.preventDefault()}
                      className={`flex items-center gap-3 px-3 py-2 text-sm rounded-md transition-colors ${
                        item.disabled
                          ? "text-slate-400 cursor-default"
                          : "text-slate-700 hover:bg-slate-100 cursor-pointer"
                      }`}
                    >
                      {item.icon}
                      <span>{item.label}</span>
                    </a>
                  )}
                </div>
              ))}
            </nav>
          </div>
        </aside>

        {/* Main Content */}
        <main className="flex-1 ml-64 p-8">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-8">
              <h1 className="text-3xl font-bold text-slate-900 mb-2">
                Dashboard
              </h1>
              <p className="text-slate-600">
                Monitor your waste management activities and earnings on the
                Stellar blockchain.
              </p>
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-600">
                    Total Earnings
                  </h3>
                  <Activity className="w-5 h-5 text-emerald-600" />
                </div>
                <p className="text-2xl font-bold text-slate-900">₱12,450</p>
                <p className="text-xs text-emerald-600 mt-1">
                  +15% from last month
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-600">
                    Waste Collected
                  </h3>
                  <Activity className="w-5 h-5 text-blue-600" />
                </div>
                <p className="text-2xl font-bold text-slate-900">450 kg</p>
                <p className="text-xs text-blue-600 mt-1">
                  +8% from last month
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg border border-slate-200">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-sm font-medium text-slate-600">
                    Transactions
                  </h3>
                  <Activity className="w-5 h-5 text-purple-600" />
                </div>
                <p className="text-2xl font-bold text-slate-900">128</p>
                <p className="text-xs text-purple-600 mt-1">
                  +22% from last month
                </p>
              </div>
            </div>

            {/* Recent Activity */}
            <div className="bg-white rounded-lg border border-slate-200">
              <div className="p-6 border-b border-slate-200">
                <h2 className="text-lg font-semibold text-slate-900">
                  Recent Activity
                </h2>
              </div>
              <div className="p-6">
                <div className="space-y-4">
                  {[1, 2, 3, 4, 5].map((item) => (
                    <div
                      key={item}
                      className="flex items-center justify-between py-3 border-b border-slate-100 last:border-0"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-full bg-emerald-100 flex items-center justify-center">
                          <Activity className="w-5 h-5 text-emerald-600" />
                        </div>
                        <div>
                          <p className="text-sm font-medium text-slate-900">
                            Waste Segregation Reward
                          </p>
                          <p className="text-xs text-slate-500">
                            2 hours ago
                          </p>
                        </div>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-semibold text-emerald-600">
                          +₱50
                        </p>
                        <p className="text-xs text-slate-500">Confirmed</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Getting Started Section */}
            <div className="mt-8 bg-gradient-to-br from-emerald-50 to-blue-50 rounded-lg border border-emerald-200 p-6">
              <h2 className="text-xl font-bold text-slate-900 mb-2">
                Getting Started with JuanaBin
              </h2>
              <p className="text-slate-600 mb-4">
                Learn how to maximize your earnings and contribute to a cleaner
                community.
              </p>
              <div className="flex gap-4">
                <button className="px-4 py-2 bg-emerald-600 text-white rounded-lg text-sm font-medium hover:bg-emerald-700 transition-colors">
                  View Guides
                </button>
                <a
                  href="/connect"
                  className="px-4 py-2 bg-white text-slate-700 rounded-lg text-sm font-medium hover:bg-slate-50 transition-colors border border-slate-200"
                >
                  Connect Wallet
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
