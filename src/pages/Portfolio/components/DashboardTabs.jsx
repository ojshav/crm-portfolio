import React, { useState } from "react";
import { BarChart3, Users, RefreshCw, DollarSign } from "lucide-react"; // Example icons


const DashboardTabs = () => {
  const [activeTab, setActiveTab] = useState("revenue");

  const tabs = [
    { id: "marketing", label: "Marketing Campaigns", icon: BarChart3, image: 'https://images.ctfassets.net/w8fc6tgspyjz/4dnp5k9i3N7LqRBEmXcbi6/782ee0317f4d57e4580700b9d848831b/marketing_campaigns_dashboards.png?fm=avif&q=50' },
    { id: "clients", label: "Client Portals", icon: Users, image: 'https://images.ctfassets.net/w8fc6tgspyjz/3uz6U06a8XABJfBHjjfce4/dd60077a0f12d46ca1f3a98a911e9570/client_portals_dashboards.png?fm=avif&q=50' },
    { id: "renewals", label: "Renewal Dashboards", icon: RefreshCw, image: 'https://images.ctfassets.net/w8fc6tgspyjz/630Mg9LyH6PcWTsLPceRmN/01d3f42c6506da3c16c0e390ddc3bd6a/CRM-visualization.png?fm=avif&q=50' },
    { id: "revenue", label: "Revenue Dashboards", icon: DollarSign, image: 'https://images.ctfassets.net/w8fc6tgspyjz/4e0decoLODBcdDGPtxJWn/6aba42a337d02c5118207675c2fee6f7/sales_overviews_dashboards.png?fm=avif&q=50' },
  ];

  const activeImage = tabs.find((tab) => tab.id === activeTab)?.image;

  return (
    <div className="bg-white py-12 px-4 sm:px-8 lg:px-12 flex flex-col items-center">
      {/* Heading */}
      <h1 className="text-2xl sm:text-3xl lg:text-5xl font-bold text-center text-gray-900 mb-8">
        Everything you want to measure <br />is right in front of you
      </h1>

      {/* Tabs */}
      <div className="flex flex-wrap justify-center gap-3 mb-10">
        {tabs.map(({ id, label, icon: Icon }) => (
          <button
            key={id}
            onClick={() => setActiveTab(id)}
            className={`flex items-center space-x-2 px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-200 
              ${
                activeTab === id
                  ? "bg-black text-white shadow-md"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              }`}
          >
            <Icon size={16} />
            <span>{label}</span>
          </button>
        ))}
      </div>

      {/* Image Container */}
      <div className="w-full max-w-5xl bg-gray-100 rounded-2xl shadow-md overflow-hidden">
        <img
          src={activeImage}
          alt={activeTab}
          className="w-full h-auto object-cover"
        />
      </div>
    </div>
  );
};

export default DashboardTabs;
