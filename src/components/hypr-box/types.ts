import { lgStyle, mdStyle, smStyle } from "./styles";

export const SPEED_MID = 'md' as const;
export const SPEED_SLOW = 'sm' as const;
export const SPEED_FAST = 'lg' as const;

export const SIZE_LG = 'lg' as const;
export const SIZE_MED = 'md' as const;
export const SIZE_SM = 'sm' as const;

export type SPEED = typeof SPEED_FAST | typeof SPEED_MID | typeof SPEED_SLOW;
export type SIZE = typeof SIZE_LG | typeof SIZE_MED | typeof SIZE_SM;

export const SIZE_MAP: Record<typeof SIZE_LG | typeof SIZE_MED | typeof SIZE_SM, string> = {
    [SIZE_LG]: lgStyle,
    [SIZE_MED]: mdStyle,
    [SIZE_SM]: smStyle,
};

export const SPEED_MAP: Record<SPEED, number> = {
    [SPEED_FAST]: 0.2,
    [SPEED_MID]: 0.4,
    [SPEED_SLOW]: 0.8,
};

