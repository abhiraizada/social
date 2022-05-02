// assets
import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';
import TableRestaurantIcon from '@mui/icons-material/TableRestaurant';

// constant
const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};

// ==============================|| UTILITIES MENU ITEMS ||============================== //

const dinein = {
    id: 'dinein',
    title: 'DineIn',
    type: 'group',
    children: [
        
        {
            id: 'util-tables',
            title: 'Tables',
            type: 'item',
            url: '/utils/util-color',
            icon: TableRestaurantIcon,
            breadcrumbs: false
        },
        {
            id: 'util-orders',
            title: 'Orders',
            type: 'item',
            url: '/utils/util-shadow',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        // {
        //     id: 'icons',
        //     title: 'Icons',
        //     type: 'collapse',
        //     icon: icons.IconWindmill,
        //     children: [
        //         {
        //             id: 'tabler-icons',
        //             title: 'Tabler Icons',
        //             type: 'item',
        //             url: '/icons/tabler-icons',
        //             breadcrumbs: false
        //         },
        //         {
        //             id: 'material-icons',
        //             title: 'Material Icons',
        //             type: 'item',
        //             url: '/icons/material-icons',
        //             breadcrumbs: false
        //         }
        //     ]
        // }
    ]
};

export default dinein;
