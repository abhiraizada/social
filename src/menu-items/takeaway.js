import { IconTypography, IconPalette, IconShadow, IconWindmill } from '@tabler/icons';

const icons = {
    IconTypography,
    IconPalette,
    IconShadow,
    IconWindmill
};


const takeaway = {
    id: 'takeaway',
    title: 'Takeaway',
    type: 'group',
    children: [
        
        
        {
            id: 'takeaway-orders',
            title: 'Orders',
            type: 'item',
            url: '/utils/takeaway-orders',
            icon: icons.IconShadow,
            breadcrumbs: false
        },
        
    ]
};

export default takeaway;
