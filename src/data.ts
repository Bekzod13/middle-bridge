import program1 from './assets/program1.png';
import program2 from './assets/program2.png';
import program3 from './assets/program3.png';
import program4 from './assets/program4.png';
import cert from './assets/cert.png';

export const programs = [
    {
        id: 1,
        title: "Kasbiy Ta’lim 🌟",
        subtitle: "Bu dastur Kimlar uchun: Maxsus kasb-hunar egallashni istaganlar uchun Shartlar:",
        list: [
            '9 yoki 11-sinf guvohnomasi (o‘zbek/ingliz tilida)',
            'Minimal til darajasi (TOPIK 1 yoki ichki suhbat)',
            'Koreyada yashashga ruxsat olish uchun sog‘liq haqida ma’lumot'
        ],
        img: program1
    },
    {
        id: 2,
        title: "Til Kursi",
        subtitle: "📘 Til Kursi, Kimlar uchun: Koreys tilini o‘rganib, keyin o‘qishni davom ettirmoqchi bo‘lganlar uchun Shartlar:",
        list: [
            '9 yoki 11-sinf guvohnomasi / diplom',
            'Minimal bank hisoboti (~10,000$ atrofida,o‘zgaradi)',
            'Koreys tilini bilish talab qilinmaydi',
            'O‘qish muddati: 1 yil'
        ],
        img: program2
    },
    {
        id: 3,
        title: "Bakalavr 🎯️ ",
        subtitle: "Kimlar uchun: Maktabni tamomlab, Koreyada oliy ta’lim olishni xohlaganlar uchun Shartlar:",
        list: [
            '11-sinf guvohnomasi yoki kollej/litsey diplomi',
            'IELTS (5.5+) yoki TOPIK (darajasi o‘zgarmoqda)',
            'Motivatsion xat va tavsiyanoma',
            'Bank hisoboti va ota-ona moliyaviy kafolati'
        ],
        img: program3
    },
    {
        id: 4,
        title: "Magistratura ✅",
        subtitle: "Kimlar uchun: Bakalavrni tugatgan va mutaxassisligini chuqurlashtirmoqchi bo‘lganlar uchun Shartlar:",
        list: [
            'Bakalavr diplomi va ilovasi (ingliz/koreys tilida)',
            'IELTS (6.0+) yoki TOPIK 3+',
            'Ilmiy reja (study plan) va 1-2 tavsiyanoma',
            'Pasport, bank hisoboti, sog‘liq haqida ma’lumot'
        ],
        img: program4
    },

];

export const certs = [
    {
        id: 1,
        image: cert
    },
    {
        id: 2,
        image: cert
    },
    {
        id: 3,
        image: cert
    },
    {
        id: 4,
        image: cert
    },
    {
        id: 5,
        image: cert
    },
    {
        id: 6,
        image: cert
    },

]


export const talim = {
    "magistratura": {
        title: "MAGISTRATURA",
        description: "Janubiy Koreyada magistratura (graduate school, Master’s degree) o‘qish uchun D-2 (Talaba) vizasi talab qilinadi. Ushbu viza Koreya universitetlarining to‘liq vaqtli magistratura dasturlarida o‘qimoqchi bo‘lgan xalqaro talabalar uchun mo‘ljallangan. O‘qish muddati: 2 yil davom etadi. ",
        required_lang: {
            title: "Til talablari",
            data: [
                {
                    id: 1,
                    title: "Koreys-tili",
                    list: [
                        "TOPIK 3-4 (odatda)",
                        "Baʼzi universitetlar TOPIK 5-6 talab qilishi mumkin.."
                    ]
                },
                {
                    id: 2,
                    title: "Ingliz tilida (TOEFL/IELTS)",
                    list: [
                        "TOEFL,IBT  80+ ",
                        "IELTS: 6.0–6.5 (baʼzilar 7.0)"
                    ]
                }
            ]
        },
        required: {
            title: "TIL KURSI TA’LIM davomida ishlash va o‘qishdan keyingi imkoniyatlar",
            data: [
                {
                    id: 1,
                    title: "💼 Ishlash Imkoniyatlari (D-2 Viza)",
                    description: " D-2 vizasi bilan magistr talabalariga haftasiga 30 soat ishlash huquqi beriladi"
                },
                {
                    id: 2,
                    title: "D-10 Viza (Ish Qidirish Viza)",
                    description: "O‘qishdan keyin D-10 (ish qidirish vizasi) yoki E-7 (ixtisoslashgan ishchi vizasi) bilan Koreyada ishlash mumkin"
                },
                {
                    id: 3,
                    title: "Ish Topish",
                    description: "Magistratura bitiruvchilari Samsung, Hyundai, LG, Naver kabi yirik kompaniyalarda ish topish imkoniyatiga ega"
                }
            ]
        } 
    },
    "bakalavr": {
        title: "BAKALAVR",
        description: "Koreyada bakalavr dasturi odatda 4 yil davom etadi. O‘quv yili 2 semestrga bo‘lingan: bahor (mart–iyun) va kuz (sentabr–dekabr). Haftasiga odatda 3-4 kun dars bo‘ladi, qolgan kunlarda talaba mustaqil o‘qish yoki ish bilan shug‘ullanishi mumkin. Xalqaro talabalar uchun universitetlarda maxsus qo‘llab-quvvatlash markazlari mavjud bo‘lib, ta’lim jarayonini yanada qulay qiladi. ",
        required_lang: {
            title: "Til talablari",
            data: [
                {
                    id: 1,
                    title: "Koreys-tili",
                    list: [
                        "TOPIK 3-4 (odatda)",
                        "Baʼzi universitetlar TOPIK 5-6 talab qilishi mumkin.."
                    ]
                },
                {
                    id: 2,
                    title: "Ingliz tilida (TOEFL/IELTS)",
                    list: [
                        "TOEFL,IBT  80+ ",
                        "IELTS: 6.0–6.5 (baʼzilar 7.0)"
                    ]
                }
            ]
        },
        required: {
            title: "BAKALAVR davomida ishlash va o‘qishdan keyingi imkoniyatlar",
            data: [
                {
                    id: 1,
                    title: "💼 Viza olish (D-2 talaba vizasi)",
                    description: " D-2 vizasi bilan magistr talabalariga haftasiga 30 soat ishlash huquqi beriladi"
                },
                {
                    id: 2,
                    title: "O‘qish paytida ishlash imkoniyati",
                    description: "OD-2 vizasi bilan talabalar haftasiga 20 soat ishlash huquqiga ega.O‘qishdan keyin D-10 (ish qidirish vizasi) yoki E-7 (ixtisoslashgan ishchi vizasi) bilan Koreyada ishlash mumkin."
                }
            ]
        } 
    },
    "kasbiy-talim": {
        title: "KASBIY TA’LIM",
        description: "Janubiy Koreyada kasbiy ta’lim olish uchun D-2 (Kasbiy ta’lim/trening) vizasi talab qilinadi. Ushbu viza kasbiy o‘quv markazlarida yoki universitet qoshidagi amaliy bilim beruvchi dasturlarda o‘qimoqchi bo‘lganlar uchun mo‘ljallangan. O‘qishni tugatgandan so‘ng, E-7 (Ixtisoslashtirilgan ishchi) vizasiga o‘tish orqali Koreyada qonuniy ishlash mumkin. Kasbiy ta’lim 2 yil o’qish uchun mo’ljallangan dastur. Haftasiga 3-4 kun dars. ",
        required_lang: {
            title: "Til talablari",
            data: [
                {
                    id: 1,
                    title: "Koreys-tili",
                    list: [
                        "TOPIK 3-4 (odatda)",
                        "Baʼzi universitetlar TOPIK 5-6 talab qilishi mumkin.."
                    ]
                },
                {
                    id: 2,
                    title: "Ingliz tilida (TOEFL/IELTS)",
                    list: [
                        "TOEFL,IBT  80+ ",
                        "IELTS: 6.0–6.5 (baʼzilar 7.0)"
                    ]
                }
            ]
        },
        required: {
            title: "KASBIY TA’LIM davomida ishlash va o‘qishdan keyingi imkoniyatlar",
            data: [
                {
                    id: 1,
                    title: "💼 Viza olish (D-2 talaba vizasi)",
                    description: " D-2 vizasi bilan magistr talabalariga haftasiga 30 soat ishlash huquqi beriladi"
                },
                {
                    id: 2,
                    
                    title: "O‘qish paytida ishlash imkoniyati",
                    description: "OD-2 vizasi bilan talabalar haftasiga 20 soat ishlash huquqiga ega.O‘qishdan keyin D-10 (ish qidirish vizasi) yoki E-7 (ixtisoslashgan ishchi vizasi) bilan Koreyada ishlash mumkin."
                }
            ]
        } 
    },
    "til-kursi": {
        title: "TIL KURSI",
        description: "🇰🇷 Til kursi “PATKURS” “POD KURS” nomi bilan mashxurdir. Janubiy Koreyada til kursida o’qish uchun D-4 (ta’lim /trening) vizasi talab qilinadi. Koreyada koreys tilini koreyslardan o’rganish dasturi. Koreyada Til Kurslari: Koreys Tilini O‘rganing va Imkoniyatlaringizni Kengaytiring! Koreyada til kurslari — bu nafaqat koreys tilini o‘rganish, balki Koreya madaniyati va hayot tarzi bilan yaqindan tanishish uchun ham ajoyib imkoniyat. Til kurslari odatda universitetlar yoki til markazlari tomonidan taklif qilinadi va 3, 6 yoki 12 oylik dasturlardan iborat bo‘ladi.",
        required_lang: null,
        required: {
            title: "TIL KURSI TA’LIM davomida ishlash va o‘qishdan keyingi imkoniyatlar",
            data: [
                {
                    id: 1,
                    title: "🎓 1. Oliy ta’limga kirish",
                    description: " Til kursidan so‘ng kollej yoki universitetga hujjat topshirish imkoniyati. Tayyorlov darajasidagi imtihonlardan o‘tganingizdan so‘ng, bakalavr, magistratura yoki kasbiy ta’limga kirish mumkin."
                },
                {
                    id: 2,
                    title: "💼 2. Ishchi viza orqali ishlash",
                    description: "Til kursini bitirib, TOPIK imtihonidan muvaffaqiyatli o‘tganingizda ishchi viza olish imkoniyati.Xizmat ko‘rsatish, savdo, ishlab chiqarish, logistika yoki ofis ishlarida faoliyat yuritish mumkin."
                }
            ]
        } 
    }
}