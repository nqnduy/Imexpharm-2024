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
        { name: 'Trang chủ', link: './' },
        { name: 'Tầm nhìn', link: './tam-nhin', chapter: '#' },
        { name: 'Câu chuyện', link: './cau-chuyen', chapter: '#' },
        { name: 'Kết quả', link: './ket-qua', chapter: '#' },
        { name: 'Quản trị', link: './quan-tri', chapter: '#' },
        { name: 'Đổi mới', link: './doi-moi', chapter: '#' },
        { name: 'Báo cáo', link: './bao-cao' },
        { name: 'Liên hệ', link: './lien-he' }
    ],
    en: [
        { name: 'Home', link: '/' },
        { name: 'Vision', link: '/tam-nhin', chapter: '#' },
        { name: 'Story', link: '/cau-chuyen', chapter: '#' },
        { name: 'Achievements', link: '/ket-qua', chapter: '#' },
        { name: 'Governance', link: '/quan-tri', chapter: '#' },
        { name: 'Innovation', link: '/doi-moi', chapter: '#' },
        { name: 'Financials', link: '/bao-cao' },
        { name: 'Contact', link: '/lien-he' },
    ]
} as const