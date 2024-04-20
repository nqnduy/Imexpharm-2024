export const languages = {
    vi: 'Việt Nam',
    en: 'English',
};
export const defaultLang = 'vi';
export const showDefaultLang = false;

export const ui = {
    vi: {
        // 'nav.home': 'Home',
        // 'nav.about': 'About',
        // 'nav.twitter': 'Twitter',
    },
    en: {
        // 'nav.home': 'Accueil',
        // 'nav.about': 'À propos',
    },
} as const;

export const menu = {
    vi: [
        { name: 'Trang chủ', link: '/' },
        { name: 'Tầm nhìn', link: '/tam-nhin' },
        { name: 'Câu chuyện', link: '/cau-chuyen' },
        { name: 'Kết quả', link: '/ket-qua' },
        { name: 'Quản trị', link: '/quan-tri' },
        { name: 'Đổi mới', link: '/doi-moi' },
        { name: 'Báo cáo', link: '/bao-cao' },
        { name: 'Liên hệ', link: '/lien-he' }
    ],
    en: [
        { name: 'Home', link: '/' },
        { name: 'Vision', link: '/tam-nhin' },
        { name: 'Story', link: '/cau-chuyen' },
        { name: 'Result', link: '/ket-qua' },
        { name: 'Administration', link: '/quan-tri' },
        { name: 'Renew', link: '/doi-moi' },
        { name: 'Report', link: '/bao-cao' },
        { name: 'Contact', link: '/lien-he' },
    ]
} as const