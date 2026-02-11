import React, { useState, useEffect } from 'react';
import { 
  Calendar, TrendingUp, AlertTriangle, Newspaper, Settings, 
  ChevronRight, Bell, ArrowUpRight, ShieldAlert, CheckCircle2, 
  X, Share, PlusSquare 
} from 'lucide-react';

// --- Assets/Components within App ---

const InstallPrompt = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    const isStandalone = window.matchMedia('(display-mode: standalone)').matches;
    if (isIOS && !isStandalone) setShow(true);
  }, []);

  if (!show) return null;
  return (
    <div className="fixed bottom-24 left-4 right-4 bg-white text-black p-4 rounded-2xl shadow-2xl z-[100] animate-bounce">
      <button onClick={() => setShow(false)} className="absolute top-2 right-2"><X size={18} /></button>
      <p className="text-xs font-bold mb-2 text-center">Install Trading Sentinel</p>
      <div className="flex flex-col gap-2 text-[10px] text-gray-600">
        <div className="flex items-center gap-2">1. Tap Share <Share size={14} className="text-blue-500"/></div>
        <div className="flex items-center gap-2">2. "Add to Home Screen" <PlusSquare size={14}/></div>
      </div>
    </div>
  );
};

// ... Insert all the Component code (Dashboard, Calendar, etc.) from the first message here ...

const App = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [calendarData] = useState(() => generateCalendarData());

  return (
    <div className="min-h-screen bg-black">
      <main className="px-5 pt-2 max-w-md mx-auto">
        {activeTab === 'dashboard' && <Dashboard calendarData={calendarData} />}
        {activeTab === 'calendar' && <CalendarView calendarData={calendarData} />}
        {activeTab === 'news' && <NewsFeed />}
        {activeTab === 'settings' && <SettingsView />}
      </main>
      <InstallPrompt />
      <TabBar activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
};

export default App;