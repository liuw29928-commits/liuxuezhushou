import React, { useState, useEffect, useRef } from 'react';
import { 
  Search, 
  MessageSquare, 
  Home,
  ChevronLeft, 
  Star, 
  MapPin, 
  Share2, 
  Send,
  CheckCircle2,
  ThumbsUp,
  MessageCircle,
  ArrowRight,
  Filter,
  ArrowUpDown,
  GraduationCap,
  ChevronDown
} from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { Apartment, Review, Post, ViewType } from './types';
import { APARTMENTS, REVIEWS, POSTS } from './data';
import { streamAIChat } from './services/aiService';

// --- Components ---

const BottomNav = ({ currentView, setView }: { currentView: ViewType, setView: (v: ViewType) => void }) => (
  <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-100 flex justify-around items-center py-3 px-6 z-50">
    <button 
      onClick={() => setView('home')}
      className={`flex flex-col items-center gap-1 ${currentView === 'home' ? 'text-blue-600' : 'text-gray-400'}`}
    >
      <Home size={24} />
      <span className="text-[10px] font-medium">主页</span>
    </button>
    <div className="h-8 w-[1px] bg-gray-100" />
    <button 
      onClick={() => setView('ai-chat')}
      className={`flex flex-col items-center gap-1 ${currentView === 'ai-chat' ? 'text-blue-600' : 'text-gray-400'}`}
    >
      <MessageSquare size={24} />
      <span className="text-[10px] font-medium">AI 顾问</span>
    </button>
  </div>
);

const AdBanner = () => (
  <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-4 rounded-2xl border border-blue-100 mb-6 relative overflow-hidden group">
    <div className="absolute top-0 right-0 bg-blue-600 text-white text-[8px] px-2 py-0.5 rounded-bl-lg font-bold">AD</div>
    <div className="flex items-center gap-4">
      <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-2xl">📦</div>
      <div className="flex-1">
        <h4 className="text-sm font-bold text-blue-900">七海国际：留学生行李托运</h4>
        <p className="text-[10px] text-blue-700/70 mt-0.5">全球门到门服务，下单即享95折优惠</p>
      </div>
      <button className="bg-blue-600 text-white text-[10px] font-bold px-3 py-1.5 rounded-lg active:scale-95 transition-all">
        立即领取
      </button>
    </div>
  </div>
);

const ApartmentCard = ({ apartment, onClick }: { apartment: Apartment, onClick: () => void, key?: string | number }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / width);
      setCurrentImg(index);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="bg-white rounded-2xl overflow-hidden shadow-sm border border-gray-100 mb-4 cursor-pointer"
      onClick={onClick}
    >
      <div className="p-4">
        <h3 className="text-lg font-bold text-gray-900 flex items-center gap-2">
          <span className="text-xl">🏠</span> {apartment.name}
        </h3>
        <p className="text-xs text-gray-500 mt-1 flex items-center gap-1">
          <MapPin size={12} /> {apartment.location} · {apartment.distance}
        </p>
      </div>
      
      <div className="relative h-56 group">
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full overflow-x-auto flex snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {apartment.images.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt={apartment.name} 
              className="w-full h-full object-cover flex-shrink-0 snap-center"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>
        
        {/* Image Index Indicator */}
        <div className="absolute top-3 right-3 bg-black/40 backdrop-blur-md text-white text-[10px] px-2 py-1 rounded-lg font-bold">
          {currentImg + 1} / {apartment.images.length}
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
          {apartment.images.map((_, i) => (
            <div 
              key={i}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                currentImg === i ? 'w-4 bg-white' : 'w-1.5 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-4">
        <div className="flex items-center justify-between mb-3">
          <div className="flex items-center gap-1">
            <span className="text-sm font-bold text-gray-900">综合评分</span>
            <div className="flex items-center text-yellow-500">
              <Star size={14} fill="currentColor" />
              <span className="text-sm font-bold ml-1">{apartment.rating}</span>
            </div>
            <span className="text-xs text-gray-400">/ 5 ({apartment.reviewCount}条评价)</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-4">
          {apartment.tags.map(tag => (
            <span key={tag} className="text-[10px] px-2 py-1 bg-gray-50 text-gray-500 rounded-md font-medium">
              {tag}
            </span>
          ))}
        </div>

        <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 mb-6">
          <div className="flex items-start gap-2">
            <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
            <p className="text-[10px] text-blue-800/70 leading-relaxed font-medium">
              声明：本平台所有评价内容均基于第三方公开信息、住户真实反馈及实地调研数据收集整理，旨在为留学生提供多维度的客观参考。
            </p>
          </div>
        </div>

        <div className="bg-gray-50 p-3 rounded-xl">
          <div className="flex items-center gap-1.5 mb-2">
            <span className="text-[10px] font-bold text-gray-900 bg-white px-2 py-0.5 rounded-md border border-gray-100 shadow-sm">
              综合评价
            </span>
          </div>
          <div className="flex items-start gap-2">
            <p className="text-xs text-gray-600 leading-relaxed">
              {apartment.latestReview}
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

const AIChatView = ({ 
  onBack, 
  initialQuestion, 
  messages, 
  setMessages 
}: { 
  onBack: () => void, 
  initialQuestion?: string,
  messages: {role: 'user' | 'ai', content: string, image?: string}[],
  setMessages: React.Dispatch<React.SetStateAction<{role: 'user' | 'ai', content: string, image?: string}[]>>
}) => {
  const [input, setInput] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const hasSentInitial = useRef(false);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async (overrideInput?: string) => {
    const textToSend = overrideInput || input;
    if (!textToSend.trim()) return;
    
    const userMsg = textToSend;
    setMessages(prev => [...prev, { role: 'user', content: userMsg }]);
    if (!overrideInput) setInput('');
    setIsTyping(true);

    try {
      let aiResponse = '';
      let aiImage = '';
      
      // Map history for the AI
      const history = [...messages, { role: 'user', content: userMsg }].map(m => ({
        role: (m.role === 'ai' ? 'model' : 'user') as 'model' | 'user',
        parts: [{ text: m.content }]
      }));

      const stream = streamAIChat(history);
      console.log("Starting stream for:", userMsg);
      
      for await (const chunk of stream) {
        console.log("Received chunk:", chunk);
        const chunkText = chunk.text || "";
        
        if (chunkText) {
          aiResponse += chunkText;

          setMessages(prev => {
            const lastMsg = prev[prev.length - 1];
            if (lastMsg && lastMsg.role === 'user') {
              // First chunk of AI response, append it
              return [...prev, { role: 'ai', content: aiResponse }];
            } else {
              // Subsequent chunks, update the last AI message
              const newMessages = [...prev];
              newMessages[newMessages.length - 1] = { 
                ...newMessages[newMessages.length - 1],
                content: aiResponse
              };
              return newMessages;
            }
          });
        }
      }
    } catch (error) {
      console.error("Chat Error:", error);
      setMessages(prev => [...prev, { 
        role: 'ai', 
        content: `抱歉，连接AI服务时出错：${error instanceof Error ? error.message : '未知错误'}。请检查网络或API Key是否有效。` 
      }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    if (initialQuestion && !hasSentInitial.current) {
      hasSentInitial.current = true;
      handleSend(initialQuestion);
    }
  }, [initialQuestion]);

  return (
    <div className="fixed inset-0 bg-white z-[100] flex flex-col">
      <div className="p-4 border-b border-gray-100 flex items-center gap-4">
        <button onClick={onBack} className="p-1"><ChevronLeft size={24} /></button>
        <h2 className="text-lg font-bold">AI租房顾问</h2>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-4 space-y-4 bg-gray-50">
        {messages.map((msg, i) => (
          <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`max-w-[85%] p-3 rounded-2xl text-sm ${
              msg.role === 'user' 
                ? 'bg-blue-600 text-white rounded-tr-none' 
                : 'bg-white text-gray-800 shadow-sm rounded-tl-none border border-gray-100'
            }`}>
              {msg.role === 'ai' && i === 0 && (
                <div className="bg-blue-50 text-blue-600 text-[10px] p-2 rounded-lg mb-2 flex items-center gap-1">
                  <span className="font-bold">⚠️ 信息来源于平台真实用户评价及公开资料，仅供参考</span>
                </div>
              )}
              <div className="whitespace-pre-wrap leading-relaxed">{msg.content}</div>
              {msg.image && (
                <img src={msg.image} alt="AI Generated" className="mt-2 rounded-lg w-full" referrerPolicy="no-referrer" />
              )}
              {msg.role === 'ai' && i > 0 && (
                <div className="mt-3 pt-3 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[10px] text-gray-400">📎 参考来源：12条用户评价</span>
                  <button className="text-[10px] text-blue-600 font-bold flex items-center gap-1">
                    查看该公寓详情 <ArrowRight size={10} />
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
        {isTyping && (
          <div className="flex justify-start">
            <div className="bg-white p-3 rounded-2xl shadow-sm border border-gray-100 rounded-tl-none">
              <div className="flex gap-1">
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce" />
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.2s]" />
                <div className="w-1.5 h-1.5 bg-gray-300 rounded-full animate-bounce [animation-delay:0.4s]" />
              </div>
            </div>
          </div>
        )}
      </div>

      <div className="p-4 bg-white border-t border-gray-100 pb-8">
        <div className="bg-gray-100 rounded-full px-4 py-2 flex items-center gap-2">
          <input 
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
            placeholder="继续提问..." 
            className="flex-1 bg-transparent border-none outline-none text-sm py-1"
          />
          <button 
            onClick={handleSend}
            disabled={!input.trim() || isTyping}
            className={`p-1 rounded-full ${input.trim() ? 'text-blue-600' : 'text-gray-400'}`}
          >
            <Send size={20} />
          </button>
        </div>
      </div>
    </div>
  );
};

const ApartmentDetailView = ({ apartment, onBack }: { apartment: Apartment, onBack: () => void }) => {
  const [currentImg, setCurrentImg] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const width = scrollRef.current.offsetWidth;
      const scrollLeft = scrollRef.current.scrollLeft;
      const index = Math.round(scrollLeft / width);
      setCurrentImg(index);
    }
  };

  return (
    <div className="fixed inset-0 bg-white z-[100] overflow-y-auto pb-20 no-scrollbar">
      <div className="relative h-80">
        <div className="absolute top-4 left-4 right-4 flex justify-between z-10">
          <button onClick={onBack} className="bg-black/30 p-2 rounded-full text-white backdrop-blur-sm">
            <ChevronLeft size={24} />
          </button>
          <button className="bg-black/30 p-2 rounded-full text-white backdrop-blur-sm">
            <Share2 size={24} />
          </button>
        </div>
        
        <div 
          ref={scrollRef}
          onScroll={handleScroll}
          className="h-full overflow-x-auto flex snap-x snap-mandatory no-scrollbar scroll-smooth"
        >
          {apartment.images.map((img, i) => (
            <img 
              key={i} 
              src={img} 
              alt={apartment.name} 
              className="w-full h-full object-cover flex-shrink-0 snap-center"
              referrerPolicy="no-referrer"
            />
          ))}
        </div>

        {/* Image Index Indicator */}
        <div className="absolute bottom-4 right-4 bg-black/40 backdrop-blur-md text-white text-xs px-3 py-1.5 rounded-full font-bold">
          {currentImg + 1} / {apartment.images.length}
        </div>

        {/* Indicator Dots */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {apartment.images.map((_, i) => (
            <div 
              key={i}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentImg === i ? 'w-5 bg-white' : 'w-2 bg-white/50'
              }`}
            />
          ))}
        </div>
      </div>

      <div className="p-5">
        <h1 className="text-2xl font-bold text-gray-900">{apartment.name}</h1>
        <p className="text-sm text-gray-500 mt-2 flex items-center gap-1">
          <MapPin size={14} /> {apartment.location} · {apartment.distance}
        </p>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded-full" /> 📊 评分雷达
          </h3>
          <div className="grid grid-cols-2 gap-4">
            {Object.entries(apartment.scores).map(([key, val]) => (
              <div key={key} className="flex items-center justify-between bg-gray-50 p-3 rounded-xl">
                <span className="text-xs text-gray-600">
                  {key === 'value' ? '性价比' : 
                   key === 'noise' ? '隔音' :
                   key === 'network' ? '网络' :
                   key === 'hygiene' ? '卫生' :
                   key === 'heating' ? '暖气' : '管理'}
                </span>
                <div className="flex items-center text-yellow-500">
                  <Star size={12} fill="currentColor" />
                  <span className="text-xs font-bold ml-1">{val}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded-full" /> 🏷️ 用户最常提到
          </h3>
          <div className="flex flex-wrap gap-2">
            {['隔音差', '位置好', '网速不错', '暖气问题', '前台服务差'].map(tag => (
              <span key={tag} className="px-3 py-1.5 bg-blue-50 text-blue-600 rounded-full text-xs font-medium">
                [{tag}]
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8">
          <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
            <span className="w-1 h-5 bg-blue-600 rounded-full" /> 📝 平台深度评价
          </h3>
          <div className="bg-blue-50/50 p-4 rounded-2xl border border-blue-100/50 mb-4">
            <div className="flex items-start gap-2">
              <CheckCircle2 size={16} className="text-blue-600 mt-0.5 flex-shrink-0" />
              <p className="text-[10px] text-blue-800/70 leading-relaxed font-medium">
                声明：本评价内容由平台专家团队基于第三方公开信息、住户真实反馈及实地调研数据深度分析汇总而成，旨在为留学生提供专业、客观的决策参考。
              </p>
            </div>
          </div>
          <div className="bg-gray-50 p-5 rounded-2xl border border-gray-100">
            <p className="text-sm text-gray-700 leading-relaxed whitespace-pre-wrap">
              {apartment.latestReview}
            </p>
          </div>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-100 flex gap-3 z-[110]">
        <button className="flex-1 py-3 bg-blue-600 text-white rounded-xl font-bold text-sm">🔗 查看可预订平台</button>
      </div>
    </div>
  );
};

// --- Main App ---

export default function App() {
  const [view, setView] = useState<ViewType>('home');
  const [selectedApartment, setSelectedApartment] = useState<Apartment | null>(null);
  const [searchMode, setSearchMode] = useState<'search' | 'ai'>('search');
  const [isSearchExpanded, setIsSearchExpanded] = useState(false);
  const [activeCity, setActiveCity] = useState('全部');
  const [aiInitialQuestion, setAiInitialQuestion] = useState<string | undefined>(undefined);
  const [searchQuery, setSearchQuery] = useState('');
  const [chatMessages, setChatMessages] = useState<{role: 'user' | 'ai', content: string, image?: string}[]>([
    { role: 'ai', content: '你好！我是租房AI助手，你可以问我任何关于海外租房的问题~' }
  ]);
  const [selectedSchool, setSelectedSchool] = useState<string>('全部');
  const [roomTypeFilter, setRoomTypeFilter] = useState<string>('全部');
  const [sortOrder, setSortOrder] = useState<'popularity' | 'rating' | 'distance'>('popularity');
  const [showFilters, setShowFilters] = useState(false);

  const schoolsByCity: { [key: string]: string[] } = {
    '全部': ['KCL', 'UCL', 'LSE', 'IC', 'UoM', 'MMU', 'UoE', 'UoG', 'NCL', 'UoN', 'UoB', 'UoL', 'UoS', 'SHU'],
    '伦敦': ['KCL', 'UCL', 'LSE', 'IC'],
    '曼彻斯特': ['UoM', 'MMU'],
    '爱丁堡': ['UoE'],
    '格拉斯哥': ['UoG'],
    '纽卡斯尔': ['NCL'],
    '诺丁汉': ['UoN'],
    '伯明翰': ['UoB'],
    '利物浦': ['UoL'],
    '谢菲尔德': ['UoS', 'SHU'],
  };

  const currentSchools = ['全部', ...(schoolsByCity[activeCity] || [])];
  const roomTypes = ['全部', 'Studio', 'En-suite', 'Non-En-suite', 'One Bed', 'Two Bed'];

  const filteredApartments = APARTMENTS.filter(a => {
    const matchesCity = activeCity === '全部' || a.city === activeCity;
    const matchesSearch = searchQuery.trim() === '' || 
      a.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.city.toLowerCase().includes(searchQuery.toLowerCase()) ||
      a.location.toLowerCase().includes(searchQuery.toLowerCase());
    
    // Safety check for roomTypes to prevent white screen
    const matchesRoomType = roomTypeFilter === '全部' || (a.roomTypes && a.roomTypes.includes(roomTypeFilter as any));
    const matchesSchool = selectedSchool === '全部' || (a.schoolDistances && a.schoolDistances[selectedSchool] !== undefined);
    
    return matchesCity && matchesSearch && matchesRoomType && matchesSchool;
  }).sort((a, b) => {
    if (sortOrder === 'rating') return b.rating - a.rating;
    if (sortOrder === 'popularity') return b.reviewCount - a.reviewCount;
    if (sortOrder === 'distance' && selectedSchool !== '全部') {
      const distA = a.schoolDistances?.[selectedSchool] ?? 999;
      const distB = b.schoolDistances?.[selectedSchool] ?? 999;
      return distA - distB;
    }
    return 0;
  });

  useEffect(() => {
    if (selectedSchool !== '全部') {
      setSortOrder('distance');
    }
  }, [selectedSchool]);

  // Reset school when city changes if the school is not in the new city
  useEffect(() => {
    if (activeCity !== '全部' && selectedSchool !== '全部') {
      const citySchools = schoolsByCity[activeCity] || [];
      if (!citySchools.includes(selectedSchool)) {
        setSelectedSchool('全部');
      }
    }
  }, [activeCity]);

  const handleApartmentClick = (apt: Apartment) => {
    setSelectedApartment(apt);
    setView('detail');
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900 pb-24">
      {/* Header / Search */}
      {view === 'home' && (
        <div className="bg-white p-4 sticky top-0 z-40 shadow-sm">
          <div className={`relative transition-all duration-300 ${isSearchExpanded ? 'mb-4' : ''}`}>
            <div 
              onClick={() => setIsSearchExpanded(true)}
              className="bg-gray-100 rounded-full px-4 py-3 flex items-center gap-2"
            >
              <Search size={18} className="text-gray-400" />
              <input 
                readOnly={!isSearchExpanded}
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && searchQuery.trim()) {
                    if (searchMode === 'ai') {
                      setAiInitialQuestion(searchQuery);
                      setView('ai-chat');
                      setSearchQuery('');
                      setIsSearchExpanded(false);
                    } else {
                      alert(`搜索: ${searchQuery}`);
                    }
                  }
                }}
                placeholder="搜索公寓 / 问AI任何问题..." 
                className="bg-transparent border-none outline-none text-sm flex-1"
              />
              <button 
                onClick={(e) => {
                  e.stopPropagation();
                  if (searchQuery.trim()) {
                    if (searchMode === 'ai') {
                      setAiInitialQuestion(searchQuery);
                      setView('ai-chat');
                      setSearchQuery('');
                      setIsSearchExpanded(false);
                    } else {
                      alert(`搜索: ${searchQuery}`);
                    }
                  }
                }}
                className="bg-blue-600 text-white text-xs px-3 py-1.5 rounded-full font-bold"
              >
                发送
              </button>
            </div>
            
            <AnimatePresence>
              {isSearchExpanded && (
                <motion.div 
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="mt-4 p-4 bg-white rounded-2xl border border-gray-100 shadow-xl"
                >
                  <div className="flex gap-2 mb-6">
                    <button 
                      onClick={() => setSearchMode('search')}
                      className={`flex-1 py-3 rounded-xl flex flex-col items-center gap-1 transition-all ${searchMode === 'search' ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-500'}`}
                    >
                      <Search size={20} />
                      <span className="text-[10px] font-bold">🔍 搜索公寓资料</span>
                    </button>
                    <button 
                      onClick={() => setSearchMode('ai')}
                      className={`flex-1 py-3 rounded-xl flex flex-col items-center gap-1 transition-all ${searchMode === 'ai' ? 'bg-blue-600 text-white' : 'bg-gray-50 text-gray-500'}`}
                    >
                      <MessageSquare size={20} />
                      <span className="text-[10px] font-bold">🤖 问问AI租房问题</span>
                    </button>
                  </div>
                  
                  {searchMode === 'ai' ? (
                    <div>
                      <p className="text-xs font-bold text-gray-400 mb-3">💡 试试这样问：</p>
                      <div className="space-y-2">
                        {[
                          'VITA公寓曼彻斯特怎么样？',
                          '伦敦留学生租房要注意什么？',
                          'IQ和VITA哪个性价比更高？'
                        ].map(q => (
                          <button 
                            key={q} 
                            onClick={() => {
                              setAiInitialQuestion(q);
                              setView('ai-chat');
                            }}
                            className="w-full text-left p-3 bg-gray-50 rounded-xl text-xs text-gray-700 hover:bg-blue-50 transition-colors"
                          >
                            · {q}
                          </button>
                        ))}
                      </div>
                    </div>
                  ) : (
                    <div className="text-center py-4 text-gray-400 text-xs">
                      输入公寓名称、城市或院校关键词
                    </div>
                  )}
                  
                  <button 
                    onClick={() => setIsSearchExpanded(false)}
                    className="w-full mt-4 py-2 text-xs text-gray-400 font-medium"
                  >
                    收起
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {!isSearchExpanded && (
            <>
              <div className="flex gap-4 overflow-x-auto no-scrollbar mt-2">
                {['全部', '伦敦', '曼彻斯特', '爱丁堡', '格拉斯哥', '纽卡斯尔', '诺丁汉', '利兹', '利物浦', '伯明翰'].map(city => (
                  <button 
                    key={city}
                    onClick={() => setActiveCity(city)}
                    className={`flex-shrink-0 text-sm font-bold pb-1 transition-all ${activeCity === city ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-400'}`}
                  >
                    {city}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-3 mt-3 overflow-x-auto no-scrollbar">
                <button 
                  onClick={() => setShowFilters(!showFilters)}
                  className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-bold transition-all ${showFilters ? 'bg-blue-600 text-white' : 'bg-gray-100 text-gray-600'}`}
                >
                  <Filter size={14} /> 筛选 & 排序
                </button>
                
                <div className="flex items-center gap-2 flex-shrink-0">
                  <GraduationCap size={14} className="text-gray-400" />
                  <select 
                    value={selectedSchool}
                    onChange={(e) => setSelectedSchool(e.target.value)}
                    className="bg-transparent text-xs font-bold text-gray-700 outline-none cursor-pointer"
                  >
                    {currentSchools.map(s => <option key={s} value={s}>{s === '全部' ? '选择学校' : s}</option>)}
                  </select>
                </div>

                <div className="h-4 w-[1px] bg-gray-200 flex-shrink-0" />

                <div className="flex items-center gap-1 flex-shrink-0">
                  <ArrowUpDown size={14} className="text-gray-400" />
                  <select 
                    value={sortOrder}
                    onChange={(e) => setSortOrder(e.target.value as any)}
                    className="bg-transparent text-xs font-bold text-gray-700 outline-none cursor-pointer"
                  >
                    <option value="popularity">按热度</option>
                    <option value="rating">按评分</option>
                    <option value="distance">按距离</option>
                  </select>
                </div>
              </div>

              <AnimatePresence>
                {showFilters && (
                  <motion.div 
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden"
                  >
                    <div className="pt-4 pb-2">
                      <p className="text-[10px] font-bold text-gray-400 mb-2 uppercase tracking-wider">房型筛选</p>
                      <div className="flex flex-wrap gap-2">
                        {roomTypes.map(type => (
                          <button 
                            key={type}
                            onClick={() => setRoomTypeFilter(type)}
                            className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all ${roomTypeFilter === type ? 'bg-blue-50 text-blue-600 border border-blue-200' : 'bg-gray-50 text-gray-500 border border-transparent'}`}
                          >
                            {type}
                          </button>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </>
          )}
        </div>
      )}

      {/* Content Area */}
      <main className="max-w-md mx-auto">
        {view === 'home' && (
          <div className="p-4">
            <AdBanner />
            {filteredApartments.slice(0, 2).map(apt => (
              <ApartmentCard key={apt.id} apartment={apt} onClick={() => handleApartmentClick(apt)} />
            ))}
            
            <div className="bg-gray-100 p-4 rounded-2xl mb-6 text-center">
              <p className="text-[10px] text-gray-400 mb-2">赞助商广告</p>
              <img src="https://picsum.photos/seed/travel/600/200" className="w-full h-24 object-cover rounded-xl mb-2" referrerPolicy="no-referrer" />
              <p className="text-xs font-bold">汇丰银行留学生账户：开户即享£100奖励</p>
            </div>

            {filteredApartments.slice(2).map(apt => (
              <ApartmentCard key={apt.id} apartment={apt} onClick={() => handleApartmentClick(apt)} />
            ))}
          </div>
        )}
      </main>

      {/* Overlays */}
      <AnimatePresence>
        {view === 'ai-chat' && (
          <AIChatView 
            messages={chatMessages}
            setMessages={setChatMessages}
            initialQuestion={aiInitialQuestion}
            onBack={() => {
              setAiInitialQuestion(undefined);
              setView('home');
            }} 
          />
        )}
        {view === 'detail' && selectedApartment && (
          <ApartmentDetailView apartment={selectedApartment} onBack={() => setView('home')} />
        )}
      </AnimatePresence>

      {/* Navigation */}
      {view === 'home' && (
        <BottomNav currentView={view} setView={setView} />
      )}
    </div>
  );
}
