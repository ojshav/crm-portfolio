import React from 'react';
import {
    Search, CheckSquare, Calendar, FileText, Users, Target, ClipboardList,
    BarChart3, Clock, Layers, MessageSquare, Settings, Folder, PenTool,
    PieChart, Flag, ListChecks, Timer, Database, Tag, HelpCircle, Wand2,
    Bell, AlignLeft, Edit, Eye, Zap, Square, QrCode, SlidersHorizontal,
    Globe, CreditCard, Inbox, Share2, Video, Phone, Laptop, Briefcase,
    Bookmark, Cpu, Cloud, GitBranch, Lock, UserPlus, FilePlus, Sparkles,
    Shield, Layout, Table, LineChart, Map, Box, Monitor, Wifi, Key,
    Compass, BarChart, AlignCenter, AlignRight, Star, History, ShoppingCart,
    Grid, Columns, Info
} from 'lucide-react';
import { motion } from 'framer-motion';

import Card1Img from '@/assets/home/bigbox1.png';
import Card1TextImg from '@/assets/home/bigbox1-1.png';

import Card2Img from '@/assets/home/bigbox2.png';
import Card2TextImg from '@/assets/home/bigbox2-2.png';

import Card3Img from '@/assets/home/bigbox3.png';
import Card3TextImg from '@/assets/home/bigbox3-3.png';

import Card4Img from '@/assets/home/bigbox4.png';
import Card4TextImg from '@/assets/home/bigbox4-4.png';
import { Link } from 'react-router-dom';


export default function FeaturesSection() {
    const smallBoxes = [
        { icon: Search, text: "Connected Search" },
        { icon: CheckSquare, text: "Tasks" },
        { icon: Calendar, text: "Calendar" },
        { icon: FileText, text: "Docs" },
        { icon: Users, text: "Teams" },
        { icon: Target, text: "Goals" },
        { icon: ClipboardList, text: "Forms" },
        { icon: BarChart3, text: "Reporting" },
        { icon: Clock, text: "Time Tracking" },
        { icon: Layers, text: "Workflows" },
        { icon: MessageSquare, text: "Chat" },
        { icon: Settings, text: "Integrations" },
        { icon: Folder, text: "Projects" },
        { icon: PenTool, text: "Whiteboards" },
        { icon: PieChart, text: "Analytics" },
        { icon: Flag, text: "Milestones" },
        { icon: ListChecks, text: "Checklists" },
        { icon: Timer, text: "Time Estimates" },
        { icon: Database, text: "Dashboards" },
        { icon: Tag, text: "Tags" },
        { icon: HelpCircle, text: "24/7 Support" },
        { icon: Wand2, text: "AI Tools" },
        { icon: Bell, text: "Reminders" },
        { icon: AlignLeft, text: "Wikis" },
        { icon: Edit, text: "Proofing" },
        { icon: Eye, text: "Portfolios" },
        { icon: Zap, text: "Sprints" },
        { icon: Square, text: "Custom Status" },
        { icon: QrCode, text: "Custom Fields" },
        { icon: SlidersHorizontal, text: "Automations" },
        { icon: Globe, text: "Everything View" },
        { icon: CreditCard, text: "Billing" },
        { icon: Inbox, text: "Inbox" },
        { icon: Share2, text: "Collaboration" },
        { icon: Video, text: "Video Calls" },
        { icon: Phone, text: "Phone Support" },
        { icon: Laptop, text: "Devices" },
        { icon: Briefcase, text: "Portfolios" },
        { icon: Bookmark, text: "Bookmarks" },
        { icon: Cpu, text: "API Calls" },
        { icon: Cloud, text: "Cloud Sync" },
        { icon: GitBranch, text: "Kanban Boards" },
        { icon: Lock, text: "Security" },
        { icon: UserPlus, text: "Guests" },
        { icon: FilePlus, text: "Templates" },
        { icon: Sparkles, text: "AI Writer" },
        { icon: Shield, text: "Compliance" },
        { icon: Layout, text: "Layouts" },
        { icon: Table, text: "Spreadsheets" },
        { icon: LineChart, text: "Gantt Charts" },
        { icon: Map, text: "Roadmaps" },
        { icon: Box, text: "Dependencies" },
        { icon: Monitor, text: "Workload Tools" },
        { icon: Wifi, text: "Integrations" },
        { icon: Key, text: "Single Sign-On" },
        { icon: Compass, text: "Navigation" },
        { icon: BarChart, text: "Reports" },
        { icon: AlignCenter, text: "Mind Maps" },
        { icon: AlignRight, text: "Priorities" },
        { icon: Star, text: "Favorites" },
        { icon: History, text: "Activity Log" },
        { icon: ShoppingCart, text: "Store" },
        { icon: Grid, text: "Grids" },
        { icon: Info, text: "Info Hub" }
    ];

    const bigCards = [
        { img: Card1Img, textImg: Card1TextImg, text: "Projects", class: "card1" },
        { img: Card2Img, textImg: Card2TextImg, text: "Docs", class: "card2" },
        { img: Card3Img, textImg: Card3TextImg, text: "Whiteboards", class: "card3" },
        { img: Card4Img, textImg: Card4TextImg, text: "Dashboards", class: "card4" }
    ];

    return (
        <div className="w-full bg-white py-8 md:py-16 px-4">
            {/* Custom styles for radial gradient */}
            <style jsx>{`
                .center-glow {
                    background: radial-gradient(ellipse at center, rgba(147, 197, 253, 0.2) 0%, rgba(147, 197, 253, 0.08) 90%, transparent 90%);
                }
                .small-box {
                    background: rgba(255, 255, 255, 0.9);
                    backdrop-filter: blur(4px);
                    border: 2px solid rgba(229, 231, 235, 0.6);
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                    transition: all 0.2s ease;
                }
                .small-box:hover {
                    border-color: rgb(147, 51, 234);
                }
                .card {
                    position: relative;
                    overflow: hidden;
                    z-index: 10;
                    border-radius: 1.5rem;
                    backdrop-filter: blur(4px);
                    border: 2px solid rgba(229, 231, 235, 0.6);
                    box-shadow: 0px 2px 4px rgba(0, 0, 0, 0.1);
                    transition: all 0.2s ease;
                }
                .card:hover {
                    border-color: rgb(147, 51, 234);
                }
                .card1::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    height: 20%;
                    background: radial-gradient(
                        circle at 50% 0%,
                        rgba(250, 204, 21, 0.45) 0%,
                        rgba(250, 204, 21, 0.2) 40%,
                        rgba(250, 204, 21, 0.1) 60%,
                        transparent 100%
                    );
                    filter: blur(30px);
                    pointer-events: none;
                    z-index: 0;
                    border-radius: inherit;
                }
                .card2::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    height: 20%;
                    background: radial-gradient(
                        circle at 50% 0%,
                        rgba(59, 130, 246, 0.45) 0%,
                        rgba(59, 130, 246, 0.2) 40%,
                        rgba(59, 130, 246, 0.1) 60%,
                        transparent 100%
                    );
                    filter: blur(30px);
                    pointer-events: none;
                    z-index: 0;
                    border-radius: inherit;
                }
                .card3::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    height: 20%;
                    background: radial-gradient(
                        circle at 50% 0%,
                        rgba(139, 92, 246, 0.45) 0%,
                        rgba(139, 92, 246, 0.2) 40%,
                        rgba(139, 92, 246, 0.1) 60%,
                        transparent 100%
                    );
                    filter: blur(30px);
                    pointer-events: none;
                    z-index: 0;
                    border-radius: inherit;
                }
                .card4::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 50%;
                    transform: translateX(-50%);
                    width: 100%;
                    height: 20%;
                    background: radial-gradient(
                        circle at 50% 0%,
                        rgba(236, 72, 153, 0.45) 0%,
                        rgba(236, 72, 153, 0.2) 40%,
                        rgba(236, 72, 153, 0.1) 60%,
                        transparent 100%
                    );
                    filter: blur(30px);
                    pointer-events: none;
                    z-index: 0;
                    border-radius: inherit;
                }
            `}</style>

            {/* Header Section */}
            <div className="max-w-6xl mx-auto text-center mb-8 md:mb-16">
                <p className="text-purple-500 text-sm font-medium mb-4">Features</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                    Every feature your team needs<br />
                    to complete work faster
                </h2>
                <p className="text-gray-600 text-base md:text-lg mb-6 md:mb-8">
                    100+ features to take productivity to the next level.
                </p>
                <Link to="/services">
                    <button className="bg-black text-white px-6 py-3 rounded-xl font-medium hover:bg-gray-800 transition-colors">
                        Discover all features
                    </button>
                </Link>
            </div>

            {/* Grid Container with fade effect */}
            <div className="relative max-w-[1400px] mx-auto">
                {/* Enhanced fade overlay with center glow */}
                <div className="absolute inset-0 pointer-events-none">
                    {/* Center radial glow */}
                    <div className="absolute inset-0 center-glow hidden lg:block"></div>

                    {/* Desktop Fade Effects */}
                    <div className="hidden lg:block">
                        <div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
                        <div className="absolute top-0 bottom-0 left-0 w-32 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-32 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
                        
                        {/* Corner fades for smoother blend */}
                        <div className="absolute top-0 left-0 w-24 h-24 bg-gradient-to-br from-white to-transparent z-15"></div>
                        <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-white to-transparent z-15"></div>
                        <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-white to-transparent z-15"></div>
                        <div className="absolute bottom-0 right-0 w-24 h-24 bg-gradient-to-tl from-white to-transparent z-15"></div>
                    </div>

                    {/* Mobile/Tablet Fade Effects */}
                    <div className="lg:hidden">
                        <div className="absolute top-0 left-0 right-0 h-16 bg-gradient-to-b from-white via-white/80 to-transparent z-10"></div>
                        <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white via-white/80 to-transparent z-10"></div>
                        <div className="absolute top-0 bottom-0 left-0 w-8 bg-gradient-to-r from-white via-white/80 to-transparent z-10"></div>
                        <div className="absolute top-0 bottom-0 right-0 w-8 bg-gradient-to-l from-white via-white/80 to-transparent z-10"></div>
                    </div>
                </div>

                {/* Mobile Layout (4 columns with 4 big cards) */}
                <div className="block sm:hidden p-4">
                    {/* Mobile Grid */}
                    <div className="grid grid-cols-4 gap-2">
                        {/* Big Cards for Mobile */}
                        {/* {bigCards.map((card, index) => (
                            <div key={`mobile-big-${index}`} className={`card ${card.class} bg-white border border-gray-200 rounded-2xl p-2 aspect-square flex flex-col items-center justify-between font-semibold`}>
                                <div className="flex-1 flex items-center justify-center">
                                    <img src={card.img} alt={card.text} className="max-h-16 object-contain" />
                                </div>
                                <div className="hidden md:flex items-center gap-1 mt-1">
                                    <img src={card.textImg} alt={`${card.text} Icon`} className="w-3 h-3" />
                                    <span className="text-black font-bold text-xs">{card.text}</span>
                                </div>
                            </div>
                        ))} */}
                        
                        {/* Small boxes for mobile - first 12 */}
                        {smallBoxes.slice(0, 24).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`mobile-small-${index}`} className="small-box rounded-2xl p-2 aspect-square flex flex-col items-center justify-center text-xs">
                                    <IconComponent size={12} className="mb-1 text-purple-900" />
                                    <span className="text-xs text-center leading-tight">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Tablet Layout (6 columns) */}
                <div className="hidden sm:block md:hidden p-6">
                    <div className="grid grid-cols-6 gap-3">
                        {/* Big Cards for Tablet */}
                        {bigCards.map((card, index) => (
                            <div key={`tablet-big-${index}`} className={`card ${card.class} bg-white border border-gray-200 rounded-3xl p-3 col-span-2 row-span-2 aspect-square flex flex-col items-center justify-between font-semibold`}>
                                <div className="flex-1 flex items-center justify-center">
                                    <img src={card.img} alt={card.text} className="max-h-24 object-contain" />
                                </div>
                                <div className="flex items-center gap-2 mt-2">
                                    <img src={card.textImg} alt={`${card.text} Icon`} className="w-4 h-4" />
                                    <span className="text-black font-bold text-sm">{card.text}</span>
                                </div>
                            </div>
                        ))}
                        
                        {/* Small boxes for tablet - first 24 */}
                        {smallBoxes.slice(0, 24).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`tablet-small-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={16} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Medium Desktop Layout (8 columns) */}
                <div className="hidden md:block lg:hidden p-6">
                    <div className="grid grid-cols-8 gap-3">
                        {/* First row of small boxes */}
                        {smallBoxes.slice(0, 8).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-top-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {/* Second row with small boxes and big cards */}
                        {smallBoxes.slice(8, 10).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-mid1-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {/* First two big cards */}
                        {bigCards.slice(0, 2).map((card, index) => (
                            <div key={`md-big-1-${index}`} className={`card ${card.class} bg-white border border-gray-200 rounded-3xl p-3 col-span-2 row-span-2 aspect-square flex flex-col items-center justify-between font-semibold`}>
                                <div className="flex-1 flex items-center justify-center">
                                    <img src={card.img} alt={card.text} className="max-h-28 object-contain" />
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <img src={card.textImg} alt={`${card.text} Icon`} className="w-5 h-5" />
                                    <span className="text-black font-bold text-base">{card.text}</span>
                                </div>
                            </div>
                        ))}
                        
                        {smallBoxes.slice(10, 12).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-mid2-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {/* Third row */}
                        {smallBoxes.slice(12, 14).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-mid3-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {smallBoxes.slice(14, 16).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-mid4-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {/* Fourth row with remaining big cards */}
                        {smallBoxes.slice(16, 18).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-bot1-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {/* Last two big cards */}
                        {bigCards.slice(2, 4).map((card, index) => (
                            <div key={`md-big-2-${index}`} className={`card ${card.class} bg-white border border-gray-200 rounded-3xl p-3 col-span-2 row-span-2 aspect-square flex flex-col items-center justify-between font-semibold`}>
                                <div className="flex-1 flex items-center justify-center">
                                    <img src={card.img} alt={card.text} className="max-h-28 object-contain" />
                                </div>
                                <div className="flex items-center gap-2 mt-3">
                                    <img src={card.textImg} alt={`${card.text} Icon`} className="w-5 h-5" />
                                    <span className="text-black font-bold text-base">{card.text}</span>
                                </div>
                            </div>
                        ))}
                        
                        {smallBoxes.slice(18, 20).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-bot2-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {/* Fifth row */}
                        {smallBoxes.slice(20, 22).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-bot3-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {smallBoxes.slice(22, 24).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-bot4-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {/* Bottom row */}
                        {smallBoxes.slice(24, 32).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`md-small-bottom-${index}`} className="small-box rounded-3xl p-3 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={18} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>

                {/* Desktop Layout (10 columns) - Original Layout */}
                <div className="hidden lg:block p-8">
                    <div className="grid grid-cols-10 gap-3">
                        {/* Row 1 - Top row */}
                        {smallBoxes.slice(0, 10).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row1-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}

                        {/* Row 2 - Second row */}
                        {smallBoxes.slice(10, 20).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row2-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}

                        {/* Row 3 - First row with large cards */}
                        {smallBoxes.slice(20, 23).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row3-small-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}

                        {/* First big card */}
                        <div className="card card1 bg-white border border-gray-200 rounded-3xl px-1 py-4 col-span-2 row-span-2 aspect-square flex flex-col items-center justify-between font-semibold">
                            <div className="flex-1 flex items-center justify-center">
                                <img src={Card1Img} alt="Projects Preview" className="max-h-40 object-contain" />
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <img src={Card1TextImg} alt="Projects Icon" className="w-6 h-6" />
                                <span className="text-black font-bold text-lg">Projects</span>
                            </div>
                        </div>

                        {/* Second big card */}
                        <div className="card card2 bg-white border border-gray-200 rounded-3xl px-1 py-4 col-span-2 row-span-2 aspect-square flex flex-col items-center justify-between font-semibold">
                            <div className="flex-1 flex items-center justify-center">
                                <img src={Card2Img} alt="Docs Preview" className="max-h-40 object-contain" />
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <img src={Card2TextImg} alt="Docs Icon" className="w-6 h-6" />
                                <span className="text-black font-bold text-lg">Docs</span>
                            </div>
                        </div>

                        {smallBoxes.slice(23, 26).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row3-end-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}

                        {/* Row 4 - Second row with large cards */}
                        {smallBoxes.slice(26, 29).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row4-small-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {/* Large cards span here */}
                        {smallBoxes.slice(29, 32).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row4-end-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}

                        {/* Row 5 - Third row with large cards */}
                        {smallBoxes.slice(32, 35).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row5-small-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}

                        {/* Third big card */}
                        <div className="card card3 bg-white border border-gray-200 rounded-3xl px-1 py-4 col-span-2 row-span-2 aspect-square flex flex-col items-center justify-between font-semibold">
                            <div className="flex-1 flex items-center justify-center">
                                <img src={Card3Img} alt="Whiteboards Preview" className="max-h-40 object-contain" />
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <img src={Card3TextImg} alt="Whiteboards Icon" className="w-6 h-6" />
                                <span className="text-black font-bold text-lg">Whiteboards</span>
                            </div>
                        </div>

                        {/* Fourth big card */}
                        <div className="card card4 bg-white border border-gray-200 rounded-3xl px-1 py-4 col-span-2 row-span-2 aspect-square flex flex-col items-center justify-between font-semibold">
                            <div className="flex-1 flex items-center justify-center">
                                <img src={Card4Img} alt="Dashboards Preview" className="max-h-40 object-contain" />
                            </div>
                            <div className="flex items-center gap-2 mt-4">
                                <img src={Card4TextImg} alt="Dashboards Icon" className="w-6 h-6" />
                                <span className="text-black font-bold text-lg">Dashboards</span>
                            </div>
                        </div>

                        {smallBoxes.slice(35, 38).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row5-end-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}

                        {/* Row 6 - Fourth row with large cards */}
                        {smallBoxes.slice(38, 41).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row6-small-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                        
                        {/* Large cards span here */}
                        {smallBoxes.slice(41, 44).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row6-end-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}

                        {/* Row 7 - Bottom row */}
                        {smallBoxes.slice(44, 54).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row7-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}

                        {/* Row 8 - Last bottom row */}
                        {smallBoxes.slice(54, 64).map((item, index) => {
                            const IconComponent = item.icon;
                            return (
                                <div key={`lg-row8-${index}`} className="small-box rounded-3xl p-4 aspect-square flex flex-col items-center justify-center text-sm">
                                    <IconComponent size={20} className="mb-2 text-purple-900" />
                                    <span className="text-xs text-center">{item.text}</span>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
        </div>
    );
}
