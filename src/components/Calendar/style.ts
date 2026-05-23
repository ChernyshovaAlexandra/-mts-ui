import styled, { css } from "styled-components";
import {
  mts_bg_inverted,
  mts_bg_lower,
  mts_bg_modal,
  mts_radius_12,
  mts_radius_16,
  mts_radius_32,
  mts_radius_8,
  mts_text_inverted,
  mts_text_primary,
  mts_text_secondary,
} from "../../consts";

export const StyledCalendar = styled.div`
  background: ${mts_bg_modal};
  border-radius: ${mts_radius_32};
  box-shadow: 0 4px 24px 0 rgba(0, 0, 0, 0.12), 0 12px 20px 0 rgba(0, 0, 0, 0.14);
  padding: 20px 12px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  font-family: "MTS Compact", Arial, sans-serif;
  box-sizing: border-box;
`;

export const StyledDayHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 8px;
`;

export const StyledChipsRow = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

export const StyledChip = styled.button`
  background: ${mts_bg_lower};
  border: none;
  border-radius: ${mts_radius_12};
  padding: 6px 12px;
  height: 32px;
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: 14px;
  font-weight: 500;
  line-height: 20px;
  color: ${mts_text_primary};
  cursor: pointer;
  white-space: nowrap;

  &:hover {
    background: #e2e5eb;
  }
`;

export const StyledArrowBtn = styled.button`
  background: ${mts_bg_lower};
  border: none;
  border-radius: ${mts_radius_32};
  width: 32px;
  height: 32px;
  padding: 4px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  color: ${mts_text_primary};

  &:hover {
    background: #e2e5eb;
  }
`;

export const StyledWeekdaysRow = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const StyledWeekday = styled.div`
  font-size: 12px;
  font-weight: 500;
  line-height: 16px;
  color: ${mts_text_secondary};
  text-align: center;
  text-transform: uppercase;
`;

export const StyledDayGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
`;

export const StyledDayCell = styled.button`
  display: flex;
  padding: 4px 12.714px 4px 13px;
  justify-content: center;
  align-items: center;
  flex: 1 0 0;
  align-self: stretch;
  max-width: 53px;
  border: none;
  background: none;
  cursor: pointer;
`;

export const StyledDayCellInner = styled.span<{
  $selected: boolean;
  $today: boolean;
}>`
  position: relative;
  width: 36px;
  height: 36px;
  border-radius: ${mts_radius_12};
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 28px;
  font-feature-settings: 'liga' off, 'clig' off;
  text-align: center;
  color: ${mts_text_primary};

  ${({ $selected }) =>
    $selected &&
    css`
      background: ${mts_bg_inverted};
      color: ${mts_text_inverted};
    `}

  ${({ $today, $selected }) =>
    $today &&
    !$selected &&
    css`
      &::after {
        content: "";
        position: absolute;
        bottom: 3px;
        left: 50%;
        transform: translateX(-50%);
        width: 4px;
        height: 4px;
        border-radius: 50%;
        background: ${mts_text_secondary};
      }
    `}

  ${StyledDayCell}:hover & {
    background: ${({ $selected }) => ($selected ? mts_bg_inverted : mts_bg_lower)};
  }
`;

// Month / Year views

export const StyledMonthYearView = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  width: 100%;
`;

export const StyledSegmentedControl = styled.div`
  display: flex;
  align-items: center;
  background: ${mts_bg_lower};
  border-radius: ${mts_radius_12};
  padding: 4px;
  width: 100%;
`;

export const StyledSegment = styled.button<{ $active: boolean }>`
  flex: 1;
  height: 24px;
  border: none;
  border-radius: ${mts_radius_8};
  font-family: "MTS Wide", Arial, sans-serif;
  font-size: 10px;
  font-weight: 700;
  line-height: 12px;
  letter-spacing: 0.5px;
  text-transform: uppercase;
  cursor: pointer;
  color: ${mts_text_primary};
  transition: background 0.15s;

  ${({ $active }) =>
    $active
      ? css`
          background: #ffffff;
        `
      : css`
          background: transparent;
        `}
`;

export const StyledGridThree = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
`;

export const StyledGridCell = styled.button<{ $active: boolean }>`
  position: relative;
  height: 44px;
  border: none;
  border-radius: ${mts_radius_16};
  font-family: "MTS Compact", Arial, sans-serif;
  font-size: 20px;
  font-weight: 400;
  line-height: 28px;
  text-align: center;
  cursor: pointer;
  overflow: hidden;
  color: ${({ $active }) => ($active ? mts_text_inverted : mts_text_primary)};
  background: ${({ $active }) => ($active ? mts_bg_inverted : "transparent")};

  &:hover {
    background: ${({ $active }) => ($active ? mts_bg_inverted : mts_bg_lower)};
  }
`;

export const StyledButtonsRow = styled.div`
  display: flex;
  gap: 12px;
  width: 100%;
`;
