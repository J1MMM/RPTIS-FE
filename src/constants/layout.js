export const HEADER_HEIGHT = 60;
export const PANEL_WIDTH_OPEN = 250;
export const PANEL_WIDTH_CLSOE = 80;

// Responsive breakpoints
export const BREAKPOINTS = {
    xs: 0,
    sm: 600,
    md: 900,
    lg: 1200,
    xl: 1536,
};

// Responsive sidebar widths
export const RESPONSIVE_SIDEBAR_WIDTHS = {
    mobile: {
        open: PANEL_WIDTH_OPEN,
        closed: 0, // Hidden on mobile when closed
    },
    tablet: {
        open: PANEL_WIDTH_OPEN,
        closed: PANEL_WIDTH_CLSOE,
    },
    desktop: {
        open: PANEL_WIDTH_OPEN,
        closed: PANEL_WIDTH_CLSOE,
    },
};