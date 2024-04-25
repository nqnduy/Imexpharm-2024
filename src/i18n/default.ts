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
        { name: 'Tầm nhìn', link: './tam-nhin' },
        { name: 'Câu chuyện', link: './cau-chuyen', chapter: 'https://drive.google.com/file/d/17MYnaHrwNg3IAT1BfkBMjBCgoW7tKuSa/view' },
        { name: 'Kết quả', link: './ket-qua', chapter: 'https://drive.google.com/file/d/1_3EDJQDlawsMUQpLYerH_Yw3X9idCvSd/view' },
        { name: 'Quản trị', link: './quan-tri', chapter: 'https://drive.google.com/file/d/1snEQ5DgT-abSOS2uBbKDKk6kWC-Hg8D1/view' },
        { name: 'Đổi mới', link: './doi-moi', chapter: 'https://drive.google.com/file/d/1-Ajj7O_Ufx12QV4G-5U_h7x4kFA21r2I/view' },
        { name: 'Báo cáo', link: './bao-cao' },
        { name: 'Liên hệ', link: './lien-he' }
    ],
    en: [
        { name: 'Home', link: './' },
        { name: 'Vision', link: './tam-nhin' },
        { name: 'Story', link: './cau-chuyen', chapter: 'https://drive.google.com/file/d/1nCw-G86_RrQ7ZlnFXHBVUwVMo_xkHQmM/view' },
        { name: 'Achievements', link: './ket-qua', chapter: 'https://drive.google.com/file/d/14ua67_y5GthGVvRMfBL1eZO6Y4PmuTal/view' },
        { name: 'Governance', link: './quan-tri', chapter: 'https://drive.google.com/file/d/1cIMsRwAosEjQ_Wd6QUgxKx1x5Iagufsr/view' },
        { name: 'Innovation', link: './doi-moi', chapter: 'https://drive.google.com/file/d/1Rzn9zkA_qtaiyObXioiwKedJpl6jhRbw/view' },
        { name: 'Financials', link: './bao-cao' },
        { name: 'Contact', link: './lien-he' },
    ]
} as const