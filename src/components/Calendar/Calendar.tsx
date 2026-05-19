import React, { useState } from "react";
import { IconChevronLeft } from "../../icons/IconChevronLeft/IconChevronLeft";
import { IconChevronRight } from "../../icons/IconChevronRight/IconChevronRight";
import { Button } from "../Button/Button";
import {
  StyledCalendar,
  StyledDayHeader,
  StyledChipsRow,
  StyledChip,
  StyledArrowBtn,
  StyledWeekdaysRow,
  StyledWeekday,
  StyledDayGrid,
  StyledDayCell,
  StyledDayCellInner,
  StyledMonthYearView,
  StyledSegmentedControl,
  StyledSegment,
  StyledGridThree,
  StyledGridCell,
  StyledButtonsRow,
} from "./style";

type CalendarView = "day" | "month" | "year";

const MONTHS = [
  "Январь", "Февраль", "Март", "Апрель", "Май", "Июнь",
  "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь",
];

const WEEKDAYS = ["ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ", "ВС"];

export interface CalendarProps {
  value?: string | null;
  onChange?: (value: string) => void;
  className?: string;
  style?: React.CSSProperties;
}

const parseDate = (v?: string | null): Date | null => {
  if (!v) return null;
  const [d, m, y] = v.split(".").map(Number);
  if (!d || !m || !y) return null;
  return new Date(y, m - 1, d);
};

export const Calendar: React.FC<CalendarProps> = ({
  value,
  onChange,
  className,
  style,
}) => {
  const today = new Date();
  const selected = parseDate(value);

  const [view, setView] = useState<CalendarView>("day");
  const [displayedMonth, setDisplayedMonth] = useState(
    selected?.getMonth() ?? today.getMonth()
  );
  const [displayedYear, setDisplayedYear] = useState(
    selected?.getFullYear() ?? today.getFullYear()
  );
  const [pendingMonth, setPendingMonth] = useState(displayedMonth);
  const [pendingYear, setPendingYear] = useState(displayedYear);

  // Day grid
  const daysInMonth = new Date(displayedYear, displayedMonth + 1, 0).getDate();
  const firstDayRaw = new Date(displayedYear, displayedMonth, 1).getDay();
  const offset = firstDayRaw === 0 ? 6 : firstDayRaw - 1;
  const cells = Array.from({ length: offset + daysInMonth }, (_, i) =>
    i < offset ? null : i - offset + 1
  );

  const isSelected = (day: number) =>
    !!selected &&
    selected.getDate() === day &&
    selected.getMonth() === displayedMonth &&
    selected.getFullYear() === displayedYear;

  const isToday = (day: number) =>
    today.getDate() === day &&
    today.getMonth() === displayedMonth &&
    today.getFullYear() === displayedYear;

  const handleDayClick = (day: number) => {
    const d = String(day).padStart(2, "0");
    const m = String(displayedMonth + 1).padStart(2, "0");
    onChange?.(`${d}.${m}.${displayedYear}`);
  };

  const prevMonth = () => {
    if (displayedMonth === 0) {
      setDisplayedMonth(11);
      setDisplayedYear((y) => y - 1);
    } else {
      setDisplayedMonth((m) => m - 1);
    }
  };

  const nextMonth = () => {
    if (displayedMonth === 11) {
      setDisplayedMonth(0);
      setDisplayedYear((y) => y + 1);
    } else {
      setDisplayedMonth((m) => m + 1);
    }
  };

  const openMonthView = () => {
    setPendingMonth(displayedMonth);
    setPendingYear(displayedYear);
    setView("month");
  };

  const openYearView = () => {
    setPendingMonth(displayedMonth);
    setPendingYear(displayedYear);
    setView("year");
  };

  const handleConfirm = () => {
    setDisplayedMonth(pendingMonth);
    setDisplayedYear(pendingYear);
    setView("day");
  };

  const handleCancel = () => {
    setView("day");
  };

  const yearStart = pendingYear - 5;
  const years = Array.from({ length: 12 }, (_, i) => yearStart + i);

  if (view === "month") {
    return (
      <StyledCalendar className={className} style={style}>
        <StyledMonthYearView>
          <StyledSegmentedControl>
            <StyledSegment onClick={openMonthView} $active>
              {MONTHS[pendingMonth]}
            </StyledSegment>
            <StyledSegment onClick={openYearView} $active={false}>
              {pendingYear}
            </StyledSegment>
          </StyledSegmentedControl>

          <StyledGridThree>
            {MONTHS.map((name, i) => (
              <StyledGridCell
                key={name}
                $active={i === pendingMonth}
                onClick={() => setPendingMonth(i)}
              >
                {name}
              </StyledGridCell>
            ))}
          </StyledGridThree>

          <StyledButtonsRow>
            <Button variant="secondary" size="l" width="full" onClick={handleCancel}>Отменить</Button>
            <Button variant="primary" size="l" width="full" onClick={handleConfirm}>Подтвердить</Button>
          </StyledButtonsRow>
        </StyledMonthYearView>
      </StyledCalendar>
    );
  }

  if (view === "year") {
    return (
      <StyledCalendar className={className} style={style}>
        <StyledMonthYearView>
          <StyledSegmentedControl>
            <StyledSegment onClick={openMonthView} $active={false}>
              {MONTHS[pendingMonth]}
            </StyledSegment>
            <StyledSegment onClick={openYearView} $active>
              {pendingYear}
            </StyledSegment>
          </StyledSegmentedControl>

          <StyledGridThree>
            {years.map((year) => (
              <StyledGridCell
                key={year}
                $active={year === pendingYear}
                onClick={() => setPendingYear(year)}
              >
                {year}
              </StyledGridCell>
            ))}
          </StyledGridThree>

          <StyledButtonsRow>
            <Button variant="secondary" size="l" width="full" onClick={handleCancel}>Отменить</Button>
            <Button variant="primary" size="l" width="full" onClick={handleConfirm}>Подтвердить</Button>
          </StyledButtonsRow>
        </StyledMonthYearView>
      </StyledCalendar>
    );
  }

  return (
    <StyledCalendar className={className} style={style}>
      <StyledDayHeader>
        <StyledChipsRow>
          <StyledChip onClick={openMonthView}>{MONTHS[displayedMonth]}</StyledChip>
          <StyledChip onClick={openYearView}>{displayedYear}</StyledChip>
        </StyledChipsRow>
        <StyledChipsRow>
          <StyledArrowBtn onClick={prevMonth} aria-label="Предыдущий месяц">
            <IconChevronLeft width={24} height={24} />
          </StyledArrowBtn>
          <StyledArrowBtn onClick={nextMonth} aria-label="Следующий месяц">
            <IconChevronRight width={24} height={24} />
          </StyledArrowBtn>
        </StyledChipsRow>
      </StyledDayHeader>

      <StyledWeekdaysRow>
        {WEEKDAYS.map((d) => (
          <StyledWeekday key={d}>{d}</StyledWeekday>
        ))}
      </StyledWeekdaysRow>

      <StyledDayGrid>
        {cells.map((day, i) =>
          day === null ? (
            <div key={`empty-${i}`} />
          ) : (
            <StyledDayCell key={day} onClick={() => handleDayClick(day)}>
              <StyledDayCellInner
                $selected={isSelected(day)}
                $today={isToday(day)}
              >
                {day}
              </StyledDayCellInner>
            </StyledDayCell>
          )
        )}
      </StyledDayGrid>
    </StyledCalendar>
  );
};

export default Calendar;
