const SIZE = {
    MOBILE_S: '320px',
    MOBILE_M: '375px',
    MOBILE_L: '440px',
    TABLET: '768px',
    LAPTOP: '1024px',
    LAPTOP_L: '1440px',
    DESCTOP: '2560px'
}

export const RESPONSIVE = {
    LAPTOP: {
        WIDTH: SIZE.LAPTOP,
        TABLE_GRID: {
            CONTAINER_PADDING: '0px',
            TAPBLE_GAP: '4px',
            CELL_PADDING: '4px',
            VALUE_CELL_BORDER: '1px',
            VALUE_CELL_FONT_SIZE: '14px',
            TITLE_CELL_FONT_SIZE: '18px',
            CONTAINER_HEAD_PADDING_RIGHT: '15px'
        }
    },
    TABLET: {
        WIDTH: SIZE.TABLET,
        TABLE_GRID: {
            TABLE_DISPLAY_SECOND_PART: 'none',
            TABLE_GRID_TEMPLATE_COLUMNS: '1fr 1fr',
            CELL_PADDING: '4px',
            VALUE_CELL_FONT_SIZE: '16px',
            TITLE_CELL_FONT_SIZE: '25px',
            TAPBLE_GAP: '1px',
            CELL_BORDER_RADIUS: '2px',
            CONTAINER_HEAD_PADDING_RIGHT: '0px'
        }
    },
    MOBILE: {
        WIDTH: SIZE.MOBILE_L,
        TABLE_GRID: {
            CELL_PADDING: '2px',
            VALUE_CELL_FONT_SIZE: '12px',
            TAPBLE_GAP: '2px',
            TITLE_CELL_FONT_SIZE: '14px',
        }
    }
};