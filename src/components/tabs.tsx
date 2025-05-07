import { useState } from "react";

interface Tab {
  label: string;
  content: React.ReactNode;
}

interface TabsProps {
  tabs: Tab[];
  defaultTabIndex?: number;
}

const Tabs = ({ tabs = [], defaultTabIndex = 0 }: TabsProps) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultTabIndex);

  if (tabs.length === 0) {
    return null;
  }

  const handleTabClick = (index: number) => {
    setActiveTabIndex(index);
  };

  const activeTab = tabs[activeTabIndex];

  return (
    <div className="w-full">
      <div className="flex border-b border-gray-200">
        {tabs.map((tab, index) => (
          <button
            key={index}
            onClick={() => handleTabClick(index)}
            className={`px-4 py-2 font-medium text-sm focus:outline-none transition-colors
              ${
                activeTabIndex === index
                  ? "text-purple-600 border-b-2 border-purple-600"
                  : "text-gray-500 hover:text-gray-700"
              }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      <div id={`panel-${activeTabIndex}`} className="mt-4">
        {activeTab?.content}
      </div>
    </div>
  );
};
export default Tabs;
