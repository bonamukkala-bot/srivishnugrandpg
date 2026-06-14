import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bed, Layout, ShieldAlert, Award } from "lucide-react";

type SharingOption = 2 | 3 | 4;

interface InteractiveElement {
  id: string;
  name: string;
  desc: string;
  x: number;
  y: number;
  width: number;
  height: number;
  type: "bed" | "wardrobe" | "desk" | "washroom" | "divider";
}

export function FloorPlan() {
  const [sharing, setSharing] = useState<SharingOption>(2);
  const [hoveredElement, setHoveredElement] = useState<InteractiveElement | null>(null);

  // SVG dimensions: viewBox="0 0 600 400"
  // Floor plan layout definitions
  const layouts: Record<SharingOption, InteractiveElement[]> = {
    2: [
      // Washroom top-left
      { id: "washroom", name: "Attached Washroom", desc: "Premium tiled washroom equipped with a hot geyser, modern vanity sink, and top-tier fixtures.", x: 20, y: 20, width: 140, height: 130, type: "washroom" },
      // Beds (balanced left and right)
      { id: "bed1", name: "Resident Bed A (Twin Bed)", desc: "Premium single mattress, hypoallergenic bedding, and integrated headboard charger outlet.", x: 190, y: 30, width: 90, height: 150, type: "bed" },
      { id: "bed2", name: "Resident Bed B (Twin Bed)", desc: "Premium single mattress, hypoallergenic bedding, and integrated headboard charger outlet.", x: 490, y: 30, width: 90, height: 150, type: "bed" },
      // Wardrobes distributed to different walls
      { id: "wardrobe1", name: "Wardrobe & Locker A", desc: "Personal dual-door wardrobe with built-in steel secure electronic locker for gadgets.", x: 20, y: 240, width: 70, height: 60, type: "wardrobe" },
      { id: "wardrobe2", name: "Wardrobe & Locker B", desc: "Personal dual-door wardrobe with built-in steel secure electronic locker for gadgets.", x: 500, y: 310, width: 70, height: 60, type: "wardrobe" }
    ],
    3: [
      // Washroom top-left
      { id: "washroom", name: "Attached Washroom", desc: "Premium tiled washroom equipped with a hot geyser, modern vanity sink, and top-tier fixtures.", x: 20, y: 20, width: 140, height: 130, type: "washroom" },
      // Beds (three sharing)
      { id: "bed1", name: "Private Bed Zone A", desc: "Curtain-partitioned single sharing zone with dedicated reading light and power outlet.", x: 190, y: 30, width: 90, height: 140, type: "bed" },
      { id: "bed2", name: "Private Bed Zone B", desc: "Curtain-partitioned single sharing zone with dedicated reading light and power outlet.", x: 310, y: 30, width: 90, height: 140, type: "bed" },
      { id: "bed3", name: "Private Bed Zone C", desc: "Curtain-partitioned single sharing zone with dedicated reading light and power outlet.", x: 490, y: 30, width: 90, height: 140, type: "bed" },
      // Partition curtain lines
      { id: "curtain1", name: "Curtained Privacy Zone", desc: "Noise-reducing heavy privacy drapes creating personal boundaries for residents.", x: 295, y: 30, width: 5, height: 140, type: "divider" },
      { id: "curtain2", name: "Curtained Privacy Zone", desc: "Noise-reducing heavy privacy drapes creating personal boundaries for residents.", x: 415, y: 30, width: 5, height: 140, type: "divider" },
      // Wardrobes distributed to different walls
      { id: "wardrobe1", name: "Wardrobe & Locker A", desc: "Personal dual-door wardrobe with built-in steel secure electronic locker for gadgets.", x: 20, y: 240, width: 75, height: 50, type: "wardrobe" },
      { id: "wardrobe2", name: "Wardrobe & Locker B", desc: "Personal dual-door wardrobe with built-in steel secure electronic locker for gadgets.", x: 250, y: 320, width: 75, height: 50, type: "wardrobe" },
      { id: "wardrobe3", name: "Wardrobe & Locker C", desc: "Personal dual-door wardrobe with built-in steel secure electronic locker for gadgets.", x: 495, y: 320, width: 75, height: 50, type: "wardrobe" }
    ],
    4: [
      // Washroom top-left
      { id: "washroom", name: "Attached Washroom", desc: "Premium tiled washroom equipped with a hot geyser, modern vanity sink, and top-tier fixtures.", x: 20, y: 20, width: 140, height: 130, type: "washroom" },
      // Beds (four sharing)
      { id: "bed1", name: "Private Bed Zone A", desc: "Curtain-partitioned bed space. Ideal for budget-conscious residents seeking private corners.", x: 180, y: 30, width: 80, height: 130, type: "bed" },
      { id: "bed2", name: "Private Bed Zone B", desc: "Curtain-partitioned bed space. Ideal for budget-conscious residents seeking private corners.", x: 280, y: 30, width: 80, height: 130, type: "bed" },
      { id: "bed3", name: "Private Bed Zone C", desc: "Curtain-partitioned bed space. Ideal for budget-conscious residents seeking private corners.", x: 380, y: 30, width: 80, height: 130, type: "bed" },
      { id: "bed4", name: "Private Bed Zone D", desc: "Curtain-partitioned bed space. Ideal for budget-conscious residents seeking private corners.", x: 500, y: 30, width: 80, height: 130, type: "bed" },
      // Curtains
      { id: "curtain1", name: "Curtained Privacy Zone", desc: "Heavy light-blocking ceiling drapes providing personal space.", x: 270, y: 30, width: 4, height: 130, type: "divider" },
      { id: "curtain2", name: "Curtained Privacy Zone", desc: "Heavy light-blocking ceiling drapes providing personal space.", x: 370, y: 30, width: 4, height: 130, type: "divider" },
      { id: "curtain3", name: "Curtained Privacy Zone", desc: "Heavy light-blocking ceiling drapes providing personal space.", x: 470, y: 30, width: 4, height: 130, type: "divider" },
      // Wardrobes distributed to different walls
      { id: "wardrobe1", name: "Wardrobe & Locker A", desc: "Personal secure locker and deep wardrobe storage space.", x: 20, y: 220, width: 65, height: 45, type: "wardrobe" },
      { id: "wardrobe2", name: "Wardrobe & Locker B", desc: "Personal secure locker and deep wardrobe storage space.", x: 180, y: 320, width: 65, height: 45, type: "wardrobe" },
      { id: "wardrobe3", name: "Wardrobe & Locker C", desc: "Personal secure locker and deep wardrobe storage space.", x: 330, y: 320, width: 65, height: 45, type: "wardrobe" },
      { id: "wardrobe4", name: "Wardrobe & Locker D", desc: "Personal secure locker and deep wardrobe storage space.", x: 500, y: 320, width: 65, height: 45, type: "wardrobe" }
    ]
  };

  const getElementColor = (type: string, isHovered: boolean) => {
    if (isHovered) return "fill-[#D4AF37]/20 stroke-[#D4AF37] stroke-2";
    switch (type) {
      case "washroom": return "fill-sky-500/5 stroke-sky-500/40";
      case "bed": return "fill-emerald-500/5 stroke-emerald-500/40";
      case "wardrobe": return "fill-amber-500/5 stroke-amber-500/40";
      case "desk": return "fill-indigo-500/5 stroke-indigo-500/40";
      case "divider": return "fill-rose-500/5 stroke-rose-500/30 stroke-dasharray-[4]";
      default: return "fill-white/5 stroke-white/20";
    }
  };

  const getIconColor = (type: string) => {
    switch (type) {
      case "washroom": return "text-sky-400";
      case "bed": return "text-emerald-400";
      case "wardrobe": return "text-amber-400";
      case "desk": return "text-indigo-400";
      case "divider": return "text-rose-400";
      default: return "text-white/60";
    }
  };

  return (
    <section id="floorplan" className="relative py-24 md:py-32 bg-gradient-to-b from-[#050e23] via-[#050e23] to-[#0a1a3a]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.06),transparent_60%)]" />
      <div className="max-w-7xl mx-auto px-6 relative">
        {/* Section Header */}
        <div className="text-center mb-14">
          <div className="text-xs tracking-[0.35em] uppercase text-[#D4AF37] mb-3">
            Interactive Room Tour
          </div>
          <h2 className="font-display text-4xl md:text-5xl text-white">
            Explore Your <span className="text-gold-gradient italic">Suite Layout</span>
          </h2>
          <p className="mt-3 text-white/55 text-sm max-w-xl mx-auto">
            Hover over elements in the diagram to inspect beds, personal lockers, and work desks.
          </p>
        </div>

        {/* Tab Buttons */}
        <div className="flex justify-center gap-3 mb-10">
          {([2, 3, 4] as SharingOption[]).map((num) => (
            <button
              key={num}
              onClick={() => {
                setSharing(num);
                setHoveredElement(null);
              }}
              className={`px-6 py-2.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-300 ${
                sharing === num
                  ? "bg-gradient-to-r from-[#D4AF37] to-[#B8941F] text-[#0a1a3a] shadow-[0_4px_20px_rgba(212,175,55,0.3)]"
                  : "bg-white/[0.03] border border-white/10 text-white/70 hover:bg-white/[0.08]"
              }`}
            >
              {num} Sharing Layout
            </button>
          ))}
        </div>

        {/* Layout Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          {/* SVG Diagram Column */}
          <div className="lg:col-span-8 glass rounded-3xl p-4 md:p-6 border border-white/10 relative overflow-hidden bg-white/[0.01]">
            <div className="aspect-[3/2] w-full relative">
              <svg
                viewBox="0 0 600 400"
                className="w-full h-full text-white font-sans select-none"
                onClick={() => setHoveredElement(null)}
              >
                {/* Room Border Wall */}
                <rect
                  x="5"
                  y="5"
                  width="590"
                  height="390"
                  rx="16"
                  className="fill-none stroke-white/20 stroke-4"
                />

                {/* Common Walking Space Labels */}
                <text
                  x="370"
                  y="220"
                  textAnchor="middle"
                  className="fill-white/10 font-semibold tracking-[0.2em] text-[15px]"
                >
                  COMMON WALKING AREA
                </text>

                <g className="cursor-pointer">
                  {layouts[sharing].map((el) => {
                    const isHovered = hoveredElement?.id === el.id;
                    return (
                      <g
                        key={el.id}
                        onMouseEnter={() => setHoveredElement(el)}
                        onMouseLeave={() => setHoveredElement(null)}
                        onClick={(e) => {
                          e.stopPropagation();
                          setHoveredElement(el);
                        }}
                      >
                        {/* Interactive Area Block */}
                        <rect
                          x={el.x}
                          y={el.y}
                          width={el.width}
                          height={el.height}
                          rx={el.type === "divider" ? "0" : "8"}
                          className={`transition-all duration-300 ${getElementColor(el.type, isHovered)}`}
                        />

                        {/* Visual details based on element type */}
                        {el.type === "bed" && (
                          <>
                            {/* Pillow outline */}
                            <rect
                              x={el.x + el.width * 0.15}
                              y={el.y + el.height * 0.08}
                              width={el.width * 0.7}
                              height={el.height * 0.2}
                              rx="4"
                              className={`transition-all duration-300 fill-none ${isHovered ? "stroke-[#D4AF37]" : "stroke-emerald-400/30"}`}
                            />
                            {/* Sheets lines */}
                            <line
                              x1={el.x + el.width * 0.15}
                              y1={el.y + el.height * 0.4}
                              x2={el.x + el.width * 0.85}
                              y2={el.y + el.height * 0.4}
                              className={`transition-all duration-300 ${isHovered ? "stroke-[#D4AF37]" : "stroke-emerald-400/20"}`}
                            />
                          </>
                        )}

                        {el.type === "washroom" && (
                          <>
                            {/* Inner door indicator */}
                            <path
                              d={`M ${el.x + el.width} ${el.y + el.height * 0.5} A ${el.width * 0.25} ${el.width * 0.25} 0 0 1 ${el.x + el.width - el.width * 0.25} ${el.y + el.height * 0.75}`}
                              className="fill-none stroke-sky-400/30 stroke-2"
                            />
                            {/* Sink circle */}
                            <circle
                              cx={el.x + el.width * 0.3}
                              cy={el.y + el.height * 0.3}
                              r={el.width * 0.12}
                              className="fill-none stroke-sky-400/20 stroke"
                            />
                          </>
                        )}

                        {/* Label Text inside element */}
                        <text
                          x={el.x + el.width / 2}
                          y={el.y + el.height / 2 + 4}
                          textAnchor="middle"
                          className={`text-[9px] font-semibold tracking-wider transition-all duration-300 uppercase ${
                            isHovered ? "fill-[#D4AF37]" : "fill-white/70"
                          }`}
                        >
                          {el.name.split(" ")[0]}
                        </text>
                      </g>
                    );
                  })}
                </g>
              </svg>
            </div>

            {/* Custom Tooltip */}
            <AnimatePresence>
              {hoveredElement && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  className="absolute bottom-6 left-6 right-6 p-4 rounded-xl glass-dark border border-[#D4AF37]/30 pointer-events-none"
                >
                  <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full bg-[#D4AF37]`} />
                    <h4 className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold">{hoveredElement.name}</h4>
                  </div>
                  <p className="text-white/80 text-[11px] mt-1">{hoveredElement.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Details Sidebar Column */}
          <div className="lg:col-span-4 h-full">
            <div className="glass rounded-3xl p-6 md:p-8 border border-white/10 min-h-[350px] lg:min-h-[440px] flex flex-col justify-between">
              <div>
                <h3 className="font-display text-2xl text-white mb-4 flex items-center gap-2">
                  <Layout className="w-5 h-5 text-[#D4AF37]" /> Inside the Room
                </h3>
                <p className="text-white/60 text-xs leading-relaxed mb-6">
                  Every suite is custom engineered to maximize individual privacy, personal storage, and ergonomics for IT professionals and executives.
                </p>

                {/* Live Details Panel */}
                <div className="rounded-2xl bg-white/[0.02] border border-white/5 p-5 min-h-[160px] flex flex-col justify-center">
                  {hoveredElement ? (
                    <motion.div
                      key={hoveredElement.id}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-2"
                    >
                      <div className="flex items-center gap-2">
                        <span className={`p-1.5 rounded-lg bg-[#D4AF37]/10 ${getIconColor(hoveredElement.type)}`}>
                          <Bed className="w-4 h-4" />
                        </span>
                        <h4 className="text-white font-medium text-sm">{hoveredElement.name}</h4>
                      </div>
                      <p className="text-white/65 text-xs leading-relaxed">{hoveredElement.desc}</p>
                    </motion.div>
                  ) : (
                    <div className="text-center py-4 text-white/45 text-xs">
                      <Award className="w-8 h-8 text-[#D4AF37]/35 mx-auto mb-2" />
                      Hover over any element in the diagram to inspect its specifications.
                    </div>
                  )}
                </div>
              </div>

              {/* General features footer */}
              <div className="mt-8 pt-4 border-t border-white/5 flex items-center gap-3">
                <ShieldAlert className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <span className="text-[10px] text-white/50 leading-normal uppercase tracking-wider">
                  24/7 CCTV Access · Secured Electronic Cabinets · Daily Sanitization
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default FloorPlan;
