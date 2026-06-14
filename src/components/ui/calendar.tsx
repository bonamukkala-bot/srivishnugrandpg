import * as React from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { cn } from "@/lib/utils"

export interface CalendarProps {
  mode?: "single"
  selected?: Date
  onSelect?: (date: Date | undefined) => void
  className?: string
}

export function Calendar({
  selected,
  onSelect,
  className,
}: CalendarProps) {
  const [currentDate, setCurrentDate] = React.useState(selected || new Date())
  const year = currentDate.getFullYear()
  const month = currentDate.getMonth()

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December"
  ]

  const getDaysInMonth = (y: number, m: number) => new Date(y, m + 1, 0).getDate()
  const getFirstDayOfMonth = (y: number, m: number) => new Date(y, m, 1).getDay()

  const daysInMonth = getDaysInMonth(year, month)
  const firstDay = getFirstDayOfMonth(year, month)

  const days = Array.from({ length: daysInMonth }, (_, i) => i + 1)
  const emptyDays = Array.from({ length: firstDay }, (_, i) => i)

  const handlePrevMonth = () => {
    setCurrentDate(new Date(year, month - 1, 1))
  }

  const handleNextMonth = () => {
    setCurrentDate(new Date(year, month + 1, 1))
  }

  const handleSelectDay = (day: number) => {
    if (onSelect) {
      onSelect(new Date(year, month, day))
    }
  }

  return (
    <div className={cn("p-3 w-[280px] bg-[#0a1a3a] border border-white/10 rounded-lg shadow-xl", className)}>
      <div className="flex justify-between items-center mb-3">
        <button
          type="button"
          onClick={handlePrevMonth}
          className="p-1 hover:bg-white/10 rounded text-white transition-colors"
        >
          <ChevronLeft className="h-4 w-4" />
        </button>
        <span className="text-xs font-semibold tracking-wider text-white uppercase">
          {monthNames[month]} {year}
        </span>
        <button
          type="button"
          onClick={handleNextMonth}
          className="p-1 hover:bg-white/10 rounded text-white transition-colors"
        >
          <ChevronRight className="h-4 w-4" />
        </button>
      </div>

      <div className="grid grid-cols-7 gap-1 text-center text-[10px] font-semibold text-white/40 mb-2 uppercase">
        <span>Su</span><span>Mo</span><span>Tu</span><span>We</span><span>Th</span><span>Fr</span><span>Sa</span>
      </div>

      <div className="grid grid-cols-7 gap-1">
        {emptyDays.map((_, i) => (
          <div key={`empty-${i}`} />
        ))}
        {days.map((day) => {
          const isSelected = selected &&
            selected.getDate() === day &&
            selected.getMonth() === month &&
            selected.getFullYear() === year

          return (
            <button
              key={day}
              type="button"
              onClick={() => handleSelectDay(day)}
              className={cn(
                "h-8 w-8 text-xs rounded-full flex items-center justify-center transition-all",
                isSelected
                  ? "bg-[#D4AF37] text-[#0a1a3a] font-bold shadow-[0_2px_10px_rgba(212,175,55,0.4)]"
                  : "text-white/80 hover:bg-white/10"
              )}
            >
              {day}
            </button>
          )
        })}
      </div>
    </div>
  )
}

export default Calendar;
