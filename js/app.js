const translations = {
    ar: {
        home: "الصفحة الرئيسية",
        rules: "القانون الداخلي للمؤسسة",
        about: "من نحن",
        mainTitle: "«مدارس جودة التعليم»",
        heroSubtitle: "بوابة التعلم الرقمي المتقدمة - نحو تعليم أفضل وأبسط لأبنائنا",
        primaryBtn: "دروسي للابتدائي",
        middleBtn: "دروسي للمتوسط",
        teacherBtn: "فضاء الأساتذة"
    },
    en: {
        home: "Home",
        rules: "Internal Rules",
        about: "About Us",
        mainTitle: "«Quality Education Schools»",
        heroSubtitle: "Advanced Digital Learning Portal - Towards Better Education",
        primaryBtn: "Primary School",
        middleBtn: "Middle School",
        teacherBtn: "Teachers Space"
    }
};

function changeLanguage(lang) {
    const elements = document.querySelectorAll("[data-i18n]");
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (translations[lang][key]) {
            el.textContent = translations[lang][key];
        }
    });

    if (lang === 'en') {
        document.documentElement.setAttribute('dir', 'ltr');
        document.documentElement.setAttribute('lang', 'en');
    } else {
        document.documentElement.setAttribute('dir', 'rtl');
        document.documentElement.setAttribute('lang', 'ar');
    }
}