

export const NAV_ITEMS_CONFIG = {
    HOME: { href: '/', label: 'Мои планы', icon: './map.svg', id: 1 },
    NEW_TRIPS: { href: '/new-trips', label: 'Добавить новое', icon: './plus.svg', id: 2 },
    FAVORITES: { href: '/favorites', label: 'Избранное', icon: './favorite.svg', id: 3 },
    SETTINGS: { href: '/settings', label: 'Настройки', icon: './settings.svg', id: 4 },
}

export const PAGES = {
    CITY_DETAILS: (city: string) => `/new-trips/${city}/`,
}

export const NAV_ITEMS = Object.values(NAV_ITEMS_CONFIG)
