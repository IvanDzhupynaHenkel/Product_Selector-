import { useRecentItems } from "../../contexts/RecentItemsContext";
import { Clock, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router";
import { useState } from "react";

export function RecentItemsSidebar() {
  const { recentItems, clearRecentItems } = useRecentItems();
  const [isCollapsed, setIsCollapsed] = useState(true);

  if (recentItems.length === 0) {
    return (
      <aside className={`${isCollapsed ? 'w-14' : 'w-80'} bg-white border-l border-slate-200 flex flex-col overflow-hidden transition-all duration-300`}>
        <div className="px-3 py-4 border-b border-slate-200 flex items-center justify-between">
          <button
            onClick={() => setIsCollapsed(!isCollapsed)}
            className="flex items-center gap-2 hover:bg-slate-100 rounded-md p-1.5 transition-colors group w-full"
            title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
          >
            <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
            {!isCollapsed && (
              <>
                <h2 className="font-semibold text-slate-900 text-sm flex-1 text-left">Recent Items</h2>
                {isCollapsed ? (
                  <ChevronLeft className="w-4 h-4 text-slate-400" />
                ) : (
                  <ChevronRight className="w-4 h-4 text-slate-400" />
                )}
              </>
            )}
          </button>
        </div>
        {!isCollapsed && (
          <div className="flex-1 flex items-center justify-center px-6 py-12">
            <div className="text-center">
              <Clock className="w-12 h-12 text-slate-300 mx-auto mb-3" />
              <p className="text-sm text-slate-500">No recent items yet</p>
              <p className="text-xs text-slate-400 mt-1">
                Products you view will appear here
              </p>
            </div>
          </div>
        )}
      </aside>
    );
  }

  return (
    <aside className={`${isCollapsed ? 'w-14' : 'w-80'} bg-white border-l border-slate-200 flex flex-col overflow-hidden transition-all duration-300`}>
      <div className="px-3 py-4 border-b border-slate-200 flex items-center justify-between">
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="flex items-center gap-2 hover:bg-slate-100 rounded-md p-1.5 transition-colors group flex-1 min-w-0"
          title={isCollapsed ? "Expand sidebar" : "Collapse sidebar"}
        >
          <Clock className="w-4 h-4 text-slate-400 flex-shrink-0" />
          {!isCollapsed && (
            <>
              <h2 className="font-semibold text-slate-900 text-sm flex-1 text-left">Recent Items</h2>
              <span className="px-1.5 py-0.5 bg-slate-100 text-slate-600 text-xs rounded-full flex-shrink-0">
                {recentItems.length}
              </span>
              <ChevronRight className="w-4 h-4 text-slate-400 flex-shrink-0" />
            </>
          )}
        </button>
        {!isCollapsed && (
          <button
            onClick={clearRecentItems}
            className="text-xs text-slate-500 hover:text-slate-700 hover:underline ml-2"
          >
            Clear all
          </button>
        )}
      </div>

      {!isCollapsed && (
        <div className="flex-1 overflow-y-auto">
          <div className="p-3 space-y-2">
            {recentItems.map((item) => (
              <Link
                key={item.id}
                to={item.type === "product" ? `/product/${item.id}` : `/category/${item.id}`}
                className="block bg-slate-50 hover:bg-slate-100 rounded-lg p-3 transition-colors group"
              >
                <div className="flex items-start gap-3">
                  <img
                    src={item.imageUrl}
                    alt={item.name}
                    className="w-12 h-12 object-cover rounded-md bg-white flex-shrink-0"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm text-slate-900 truncate group-hover:text-slate-700">
                      {item.name}
                    </h3>
                    <p className="text-xs text-slate-500 font-mono mt-0.5">{item.code}</p>
                    <p className="text-xs text-slate-400 mt-1">
                      {formatTimestamp(item.timestamp)}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}
    </aside>
  );
}

function formatTimestamp(timestamp: number): string {
  const now = Date.now();
  const diff = now - timestamp;
  const minutes = Math.floor(diff / 60000);
  const hours = Math.floor(diff / 3600000);
  const days = Math.floor(diff / 86400000);

  if (minutes < 1) return "Just now";
  if (minutes < 60) return `${minutes}m ago`;
  if (hours < 24) return `${hours}h ago`;
  if (days < 7) return `${days}d ago`;
  return new Date(timestamp).toLocaleDateString();
}