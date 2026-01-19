
import React, { useState, useEffect } from 'react';
import { ZION_URL } from './constants';

const App: React.FC = () => {
  // Helper to determine the initial URL based on priority:
  // 1. URL Query Parameter (?url=...)
  // 2. Local Storage (Saved from previous session)
  // 3. Default constant (ZION_URL)
  const getInitialUrl = () => {
    try {
      const params = new URLSearchParams(window.location.search);
      const queryUrl = params.get('url');
      if (queryUrl && queryUrl.startsWith('http')) return queryUrl;
      
      const savedUrl = localStorage.getItem('custom_app_url');
      if (savedUrl) return savedUrl;
    } catch (e) {
      console.error("Storage/URL access error", e);
    }
    return ZION_URL;
  };

  const [url, setUrl] = useState(getInitialUrl());
  const [tempUrl, setTempUrl] = useState(url);
  const [isConfigOpen, setIsConfigOpen] = useState(false);

  // Synchronize internal input if URL is changed externally (e.g. via state)
  useEffect(() => {
    setTempUrl(url);
  }, [url]);

  const handleApply = (e: React.FormEvent) => {
    e.preventDefault();
    const cleanUrl = tempUrl.trim();
    if (cleanUrl) {
      setUrl(cleanUrl);
      localStorage.setItem('custom_app_url', cleanUrl);
      setIsConfigOpen(false);
    }
  };

  const handleReset = () => {
    localStorage.removeItem('custom_app_url');
    setUrl(ZION_URL);
    setTempUrl(ZION_URL);
    setIsConfigOpen(false);
  };

  return (
    <div className="h-screen w-full bg-black overflow-hidden flex flex-col relative">
      {/* 
        Desktop-only URL Config Tool 
        Visible only on screens larger than 768px (md breakpoint)
      */}
      <div className="hidden md:block absolute top-6 right-6 z-50">
        {!isConfigOpen ? (
          <button 
            onClick={() => setIsConfigOpen(true)}
            className="bg-white/90 hover:bg-white text-slate-900 text-xs font-bold py-3 px-5 rounded-full shadow-2xl backdrop-blur-xl transition-all flex items-center gap-2 border border-slate-200 active:scale-95 group"
          >
            <svg 
              className="group-hover:rotate-90 transition-transform duration-300"
              xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"
            >
              <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.1a2 2 0 0 1-1-1.72v-.51a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73V4a2 2 0 0 0-2-2z"/>
              <circle cx="12" cy="12" r="3"/>
            </svg>
            CONFIGURE PREVIEW
          </button>
        ) : (
          <div className="bg-white p-6 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.3)] border border-slate-100 w-96 animate-in fade-in zoom-in duration-300">
            <div className="flex justify-between items-center mb-6">
              <div>
                <h3 className="font-extrabold text-slate-900 text-lg tracking-tight">App Configuration</h3>
                <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Desktop Developer Tool</p>
              </div>
              <button 
                type="button"
                onClick={() => setIsConfigOpen(false)}
                className="p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400 hover:text-slate-600"
              >
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M18 6 6 18"/><path d="m6 6 12 12"/>
                </svg>
              </button>
            </div>
            
            <form onSubmit={handleApply} className="space-y-6">
              <div>
                <label className="block text-[11px] uppercase tracking-[0.15em] font-black text-slate-400 mb-2 ml-1">
                  Target App URL
                </label>
                <input 
                  type="url" 
                  value={tempUrl}
                  onChange={(e) => setTempUrl(e.target.value)}
                  placeholder="https://your-custom-app.com"
                  className="w-full px-4 py-3 text-sm font-medium border-2 border-slate-100 rounded-xl focus:outline-none focus:border-slate-900 transition-all bg-slate-50/50 text-slate-800 shadow-sm"
                  autoFocus
                  required
                />
                <p className="mt-2 text-[10px] text-slate-400 leading-relaxed px-1">
                  Input any website to see it rendered in the full-screen app view. Changes are saved locally.
                </p>
              </div>
              
              <div className="flex gap-3 pt-2">
                <button 
                  type="button"
                  onClick={handleReset}
                  className="flex-1 bg-slate-100 text-slate-600 text-[11px] font-black py-4 rounded-xl hover:bg-slate-200 transition-colors uppercase tracking-widest active:scale-95"
                >
                  Reset Default
                </button>
                <button 
                  type="submit"
                  className="flex-[2] bg-slate-900 text-white text-[11px] font-black py-4 rounded-xl hover:bg-black transition-all shadow-lg active:scale-95 uppercase tracking-widest"
                >
                  Update App
                </button>
              </div>
            </form>
          </div>
        )}
      </div>

      {/* Main Content Area - Full Screen WebView */}
      <div className="flex-1 relative overflow-hidden animate-in fade-in duration-1000 bg-white">
        <iframe 
          key={url} // Forces a complete reload of the component when the URL changes
          src={url}
          className="w-full h-full border-none no-scrollbar select-none"
          title="Custom App Preview"
          allow="camera; microphone; geolocation; autoplay; fullscreen"
          sandbox="allow-scripts allow-forms allow-popups allow-same-origin allow-downloads allow-modals"
          loading="eager"
        />
        
        {/* Subtle overlay to handle iframe focus/drag issues in some browsers */}
        <div className="absolute inset-0 pointer-events-none border-[12px] border-black/5 opacity-0 hover:opacity-100 transition-opacity" />
      </div>
    </div>
  );
};

export default App;
