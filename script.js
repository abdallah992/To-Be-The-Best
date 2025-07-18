// بيانات اللغات مع صور رمزية
const languagesData = [
    {
        name: "الألمانية",
        img: "https://flagcdn.com/w320/de.png",
        youtube: [
            {title: "Madrasetna Breaktime", url: "https://www.youtube.com/@Madrasetnabreaktime"},
            {title: "Deutsch für Araber الألمانيّة للعرب", url: "https://youtube.com/@deutsch.fuer.araber?si=gT0-qwL0ZACEUdCB"},
            {title: "Deutsch Für Araber", url: "https://youtube.com/@deutschmitarabien?si=7NVe2L0uXeDFWlKs"},
            {title: "Yousif Nasser", url: "https://youtube.com/@yousifnasser8685?si=DxVkrcTOLm9AKORO"}
        ],
        downloads: [
            {title: "ملزمة قواعد ألماني PDF", url: "https://example.com/german-pdf"}
        ],
        platforms: [
            {title: "ادراك", url: "https://www.edraak.org/"},
            {title: "Busuu", url: "https://www.busuu.com/"},
            {title: "Memrise", url: "https://www.memrise.com/"}
        ],
        apps: [
            {title: "تطبيق Duolingo للألمانية", url: "https://play.google.com/store/apps/details?id=com.duolingo"},
            {title: "تطبيق Babbel للألمانية", url: "https://www.babbel.com/ar/app"}
        ]
    },
    {
        name: "الفرنسية",
        img: "https://flagcdn.com/w320/fr.png",
        youtube: [
            {title: "Madrasetna Breaktime", url: "https://www.youtube.com/@Madrasetnabreaktime"},
            {title: "Cours Bouchra", url: "https://youtube.com/@coursbouchra?si=2L31bnlR4S-OxsDP"},
            {title: "Learn English & French with Asmae", url: "https://youtube.com/@learnenglishwithasmae?si=nKTisgP5s-TX6Knu"},

        ],
        downloads: [
            {title: "ملزمة فرنسي PDF", url: "https://example.com/french-pdf"}
        ],
        platforms: [
            {title: "ادراك", url: "https://www.edraak.org/"},
            {title: "رواق", url: "https://www.rwaq.org/"},
            {title: "Busuu", url: "https://www.busuu.com/"},
            {title: "Memrise", url: "https://www.memrise.com/"}
        ],
        apps: [
            {title: "تطبيق Mondly للفرنسية", url: "https://play.google.com/store/apps/details?id=com.atistudios.mondly.fr"},
            {title: "تطبيق Busuu للفرنسية", url: "https://www.busuu.com/ar/app"}
        ]
    },
    {
        name: "الإيطالية",
        img: "https://flagcdn.com/w320/it.png",
        youtube: [
            {title: "Madrasetna Breaktime", url: "https://www.youtube.com/@Madrasetnabreaktime"},
            {title: "Monde de Nadia Chikhaoui", url: "https://youtube.com/@mondedenadiachikhaoui5849?si=MZWyb_5Kr2s7yAS5"},
            {title: "The Segurendos", url: "https://youtube.com/@thesegurendos?si=jJ-0bLGVcXTwZn2e"}
        ],
        downloads: [
            {title: "ملزمة إيطالي PDF", url: "https://example.com/italian-pdf"}
        ],
        platforms: [
            {title: "ادراك", url: "https://www.edraak.org/"},
            {title: "رواق", url: "https://www.rwaq.org/"},
            {title: "Busuu", url: "https://www.busuu.com/"},
            {title: "Memrise", url: "https://www.memrise.com/"}
        ],
        apps: [
            {title: "تطبيق Duolingo للإيطالية", url: "https://play.google.com/store/apps/details?id=com.duolingo"},
            {title: "تطبيق Busuu للإيطالية", url: "https://www.busuu.com/ar/app"}
        ]
    },
    {
        name: "الإسبانية",
        img: "https://flagcdn.com/w320/es.png",
        youtube: [
            {title: "Madrasetna Breaktime", url: "https://www.youtube.com/@Madrasetnabreaktime"},
            {title: "What's up Spain", url: "https://youtube.com/channel/UCtDAIVlTPeB1L9CORifGS1Q?si=RFnNz1D2tZHOe_q2"},
            {title: "Learn Spanish With EyaKh", url: "https://youtube.com/@learnspanish_with_eyakhas?si=IqtGYBq-PkV-Ytmv"}
        ],
        downloads: [
            {title: "ملزمة إسباني PDF", url: "https://example.com/spanish-pdf"}
        ],
        platforms: [
            {title: "ادراك", url: "https://www.edraak.org/"},
            {title: "Busuu", url: "https://www.busuu.com/"},
            {title: "Memrise", url: "https://www.memrise.com/"}
        ],
        apps: [
            {title: "تطبيق Duolingo للإسبانية", url: "https://play.google.com/store/apps/details?id=com.duolingo"},
            {title: "تطبيق Mondly للإسبانية", url: "https://play.google.com/store/apps/details?id=com.atistudios.mondly.es"}
        ]
    },
    {
        name: "الصينية",
        img: "https://flagcdn.com/w320/cn.png",
        youtube: [
            {title: "Madrasetna Breaktime", url: "https://www.youtube.com/@Madrasetnabreaktime"},
            {title: "Chinese with Yanyan", url: "https://youtube.com/@chinesewithyanyan?si=NKjQrLjPI4d7zntE"}
        ],
        downloads: [
            {title: "ملزمة صيني PDF", url: "https://example.com/chinese-pdf"}
        ],
        platforms: [
            {title: "ادراك", url: "https://www.edraak.org/"},
            {title: "رواق", url: "https://www.rwaq.org/"},
            {title: "Busuu", url: "https://www.busuu.com/"},
            {title: "Memrise", url: "https://www.memrise.com/"}
        ],
        apps: [
            {title: "تطبيق HelloChinese للصينية", url: "https://play.google.com/store/apps/details?id=com.hellochinese"},
            {title: "تطبيق Duolingo للصينية", url: "https://play.google.com/store/apps/details?id=com.duolingo"}
        ]
    }
];

// إنشاء واجهة الموقع ديناميكياً مع مؤثرات دخول
const container = document.querySelector('.languages-container');

languagesData.forEach((lang, idx) => {
    // قسم اللغة
    const section = document.createElement('div');
    section.className = 'language-section';

    // عنوان وصورة اللغة
    const titleDiv = document.createElement('div');
    titleDiv.className = 'language-title';

    const img = document.createElement('img');
    img.className = 'language-img';
    img.src = lang.img;
    img.alt = `رمز ${lang.name}`;
    titleDiv.appendChild(img);

    // اسم اللغة
    const titleText = document.createElement('span');
    titleText.textContent = lang.name;
    titleDiv.appendChild(titleText);

    section.appendChild(titleDiv);

    // الفئات الأربعة
    [
        {key: 'youtube', label: 'قنوات يوتيوب'},
        {key: 'downloads', label: 'روابط تنزيل الملازم'},
        {key: 'platforms', label: 'منصات تعليمية'},
        {key: 'apps', label: 'تطبيقات لتعلم اللغة'}
    ].forEach(cat => {
        const categoryDiv = document.createElement('div');
        categoryDiv.className = 'links-category';

        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'category-title';
        categoryTitle.textContent = cat.label;
        categoryDiv.appendChild(categoryTitle);

        const list = document.createElement('ul');
        list.className = 'links-list';

        // تأكد أن القسم موجود في البيانات
        if (lang[cat.key]) {
            lang[cat.key].forEach((link, i) => {
                const li = document.createElement('li');
                const a = document.createElement('a');
                a.href = link.url;
                a.target = '_blank';
                a.textContent = link.title;
                li.appendChild(a);
                list.appendChild(li);
            });
        }

        categoryDiv.appendChild(list);
        section.appendChild(categoryDiv);
    });

    container.appendChild(section);
});

// مؤثر دخول لجميع الأقسام بشكل متتالي
window.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('.language-section');
    sections.forEach((sec, i) => {
        setTimeout(() => {
            sec.classList.add('visible');
        }, 350 + i * 250); // تأخير زمني بين ظهور كل قسم
    });
});
// زر تفعيل الوضع الليلي
const darkBtn = document.getElementById('toggle-dark');

darkBtn.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
    // حفظ حالة الوضع الليلي في localStorage
    if(document.body.classList.contains('dark-mode')){
        localStorage.setItem('dark-mode', 'on');
        darkBtn.textContent = 'الوضع العادي';
    } else {
        localStorage.setItem('dark-mode', 'off');
        darkBtn.textContent = 'الوضع الليلي';
    }
});

// عند فتح الموقع، استرجع حالة الوضع الليلي
window.addEventListener('DOMContentLoaded', () => {
    if(localStorage.getItem('dark-mode') === 'on'){
        document.body.classList.add('dark-mode');
        darkBtn.textContent = 'الوضع العادي';
    }
});