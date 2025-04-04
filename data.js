
const allCountries=[
    {
      "Страна": "Абхазия",
      "Столица": "Сухум",
      "Площадь": "8 600",
      "Население": "243 564",
      "Континент": "Азия"
    },
    {
      "Страна": "Австралия",
      "Столица": "Канберра",
      "Площадь": "7 686 850",
      "Население": "24 238 610",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Австрия",
      "Столица": "Вена",
      "Площадь": "83 858",
      "Население": "8 741 753",
      "Континент": "Европа"
    },
    {
      "Страна": "Азербайджан",
      "Столица": "Баку",
      "Площадь": "86 600",
      "Население": "9 705 600",
      "Континент": "Азия"
    },
    {
      "Страна": "Албания",
      "Столица": "Тирана",
      "Площадь": "28 748",
      "Население": "2 866 026",
      "Континент": "Европа"
    },
    {
      "Страна": "Алжир",
      "Столица": "Алжир",
      "Площадь": "2 381 740",
      "Население": "39 813 722",
      "Континент": "Африка"
    },
    {
      "Страна": "Ангола",
      "Столица": "Луанда",
      "Площадь": "1 246 700",
      "Население": "25 831 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Андорра",
      "Столица": "Андорра-ла-Велья",
      "Площадь": "468",
      "Население": "78 014",
      "Континент": "Европа"
    },
    {
      "Страна": "Антигуа и Барбуда",
      "Столица": "Сент-Джонс",
      "Площадь": "442",
      "Население": "93 581",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Аргентина",
      "Столица": "Буэнос-Айрес",
      "Площадь": "2 766 890",
      "Население": "46 082 160",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Армения",
      "Столица": "Ереван",
      "Площадь": "29 741",
      "Население": "2 995 100",
      "Континент": "Азия"
    },
    {
      "Страна": "Афганистан",
      "Столица": "Кабул",
      "Площадь": "647 500",
      "Население": "29 822 848",
      "Континент": "Азия"
    },
    {
      "Страна": "Багамские Острова",
      "Столица": "Нассау",
      "Площадь": "13 940",
      "Население": "393 000",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Бангладеш",
      "Столица": "Дакка",
      "Площадь": "144 000",
      "Население": "169 828 911",
      "Континент": "Азия"
    },
    {
      "Страна": "Барбадос",
      "Столица": "Бриджтаун",
      "Площадь": "430",
      "Население": "291 495",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Бахрейн",
      "Столица": "Манама",
      "Площадь": "701",
      "Население": "1 397 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Белиз",
      "Столица": "Бельмопан",
      "Площадь": "22 966",
      "Население": "377 968",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Белоруссия",
      "Столица": "Минск",
      "Площадь": "207 595",
      "Население": "9 413 446",
      "Континент": "Европа"
    },
    {
      "Страна": "Бельгия",
      "Столица": "Брюссель",
      "Площадь": "30 528",
      "Население": "11 250 585",
      "Континент": "Европа"
    },
    {
      "Страна": "Бенин",
      "Столица": "Порто-Ново",
      "Площадь": "112 620",
      "Население": "11 167 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Болгария",
      "Столица": "София",
      "Площадь": "110 910",
      "Население": "7 153 784",
      "Континент": "Европа"
    },
    {
      "Страна": "Боливия",
      "Столица": "Сукре",
      "Площадь": "1 098 580",
      "Население": "10 985 059",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Босния и Герцеговина",
      "Столица": "Сараево",
      "Площадь": "51 129",
      "Население": "3 802 000",
      "Континент": "Европа"
    },
    {
      "Страна": "Ботсвана",
      "Столица": "Габороне",
      "Площадь": "600 370",
      "Население": "2 209 208",
      "Континент": "Африка"
    },
    {
      "Страна": "Бразилия",
      "Столица": "Бразилиа",
      "Площадь": "8 511 965",
      "Население": "206 081 432",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Бруней",
      "Столица": "Бандар-Сери-Бегаван",
      "Площадь": "5 770",
      "Население": "436 620",
      "Континент": "Азия"
    },
    {
      "Страна": "Буркина-Фасо",
      "Столица": "Уагадугу",
      "Площадь": "274 200",
      "Население": "19 034 397",
      "Континент": "Африка"
    },
    {
      "Страна": "Бурунди",
      "Столица": "Гитега",
      "Площадь": "27 830",
      "Население": "11 099 298",
      "Континент": "Африка"
    },
    {
      "Страна": "Бутан",
      "Столица": "Тхимпху",
      "Площадь": "47 000",
      "Население": "784 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Вануату",
      "Столица": "Порт-Вила",
      "Площадь": "12 200",
      "Население": "289 700",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Ватикан",
      "Столица": "Ватикан",
      "Площадь": "0.44",
      "Население": "842",
      "Континент": "Европа"
    },
    {
      "Страна": "Великобритания",
      "Столица": "Лондон",
      "Площадь": "244 820",
      "Население": "65 341 183",
      "Континент": "Европа"
    },
    {
      "Страна": "Венгрия",
      "Столица": "Будапешт",
      "Площадь": "93 030",
      "Население": "9 604 000",
      "Континент": "Европа"
    },
    {
      "Страна": "Венесуэла",
      "Столица": "Каракас",
      "Площадь": "912 050",
      "Население": "31 028 637",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Восточный Тимор",
      "Столица": "Дили",
      "Площадь": "14 874",
      "Население": "1 167 242",
      "Континент": "Азия"
    },
    {
      "Страна": "Вьетнам",
      "Столица": "Ханой",
      "Площадь": "329 560",
      "Население": "91 713 300",
      "Континент": "Азия"
    },
    {
      "Страна": "Габон",
      "Столица": "Либревиль",
      "Площадь": "267 667",
      "Население": "1 811 079",
      "Континент": "Африка"
    },
    {
      "Страна": "Гаити",
      "Столица": "Порт-о-Пренс",
      "Площадь": "27 750",
      "Население": "10 911 819",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Гайана",
      "Столица": "Джорджтаун",
      "Площадь": "214 970",
      "Население": "741 962",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Гамбия",
      "Столица": "Банжул",
      "Площадь": "11 300",
      "Население": "2 025 527",
      "Континент": "Африка"
    },
    {
      "Страна": "Гана",
      "Столица": "Аккра",
      "Площадь": "238 540",
      "Население": "28 308 301",
      "Континент": "Африка"
    },
    {
      "Страна": "Гватемала",
      "Столица": "Гватемала",
      "Площадь": "108 890",
      "Население": "16 555 556",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Гвинея",
      "Столица": "Конакри",
      "Площадь": "245 857",
      "Население": "10 628 972",
      "Континент": "Африка"
    },
    {
      "Страна": "Гвинея-Бисау",
      "Столица": "Бисау",
      "Площадь": "36 120",
      "Население": "1 547 754",
      "Континент": "Африка"
    },
    {
      "Страна": "Германия",
      "Столица": "Берлин",
      "Площадь": "357 021",
      "Население": "82 175 684",
      "Континент": "Европа"
    },
    {
      "Страна": "Гондурас",
      "Столица": "Тегусигальпа",
      "Площадь": "112 090",
      "Население": "8 721 014",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Государство Палестина",
      "Столица": "Иерусалим (Рамалла)",
      "Площадь": "6 020",
      "Население": "4 816 503",
      "Континент": "Азия"
    },
    {
      "Страна": "Гренада",
      "Столица": "Сент-Джорджес",
      "Площадь": "340",
      "Население": "110 566",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Греция",
      "Столица": "Афины",
      "Площадь": "131 940",
      "Население": "10 482 487",
      "Континент": "Европа"
    },
    {
      "Страна": "Грузия",
      "Столица": "Тбилиси",
      "Площадь": "69 700",
      "Население": "3 720 400",
      "Континент": "Азия"
    },
    {
      "Страна": "Дания",
      "Столица": "Копенгаген",
      "Площадь": "43 094",
      "Население": "5 707 251",
      "Континент": "Европа"
    },
    {
      "Страна": "Джибути",
      "Столица": "Джибути",
      "Площадь": "22 000",
      "Население": "890 179",
      "Континент": "Африка"
    },
    {
      "Страна": "Доминика",
      "Столица": "Розо",
      "Площадь": "754",
      "Население": "69 393",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Доминиканская Республика",
      "Столица": "Санто-Доминго",
      "Площадь": "48 730",
      "Население": "10 075 045",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "ДР Конго",
      "Столица": "Киншаса",
      "Площадь": "2 345 410",
      "Население": "85 026 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Египет",
      "Столица": "Каир",
      "Площадь": "1 001 450",
      "Население": "91 701 723",
      "Континент": "Африка"
    },
    {
      "Страна": "Замбия",
      "Столица": "Лусака",
      "Площадь": "752 614",
      "Население": "19 610 769",
      "Континент": "Африка"
    },
    {
      "Страна": "Зимбабве",
      "Столица": "Хараре",
      "Площадь": "390 580",
      "Население": "15 967 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Израиль",
      "Столица": "Иерусалим",
      "Площадь": "22 072",
      "Население": "8 585 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Индия",
      "Столица": "Нью-Дели",
      "Площадь": "3 287 590",
      "Население": "1 268 961 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Индонезия",
      "Столица": "Джакарта",
      "Площадь": "1 904 556",
      "Население": "255 461 700",
      "Континент": "Азия"
    },
    {
      "Страна": "Иордания",
      "Столица": "Амман",
      "Площадь": "89 400",
      "Население": "9 813 095",
      "Континент": "Азия"
    },
    {
      "Страна": "Ирак",
      "Столица": "Багдад",
      "Площадь": "437 072",
      "Население": "37 883 543",
      "Континент": "Азия"
    },
    {
      "Страна": "Иран",
      "Столица": "Тегеран",
      "Площадь": "1 648 000",
      "Население": "80 840 713",
      "Континент": "Азия"
    },
    {
      "Страна": "Ирландия",
      "Столица": "Дублин",
      "Площадь": "70 273",
      "Население": "4 658 530",
      "Континент": "Европа"
    },
    {
      "Страна": "Исландия",
      "Столица": "Рейкьявик",
      "Площадь": "103 000",
      "Население": "332 529",
      "Континент": "Европа"
    },
    {
      "Страна": "Испания",
      "Столица": "Мадрид",
      "Площадь": "497 304",
      "Население": "46 438 422",
      "Континент": "Европа"
    },
    {
      "Страна": "Италия",
      "Столица": "Рим",
      "Площадь": "301 340",
      "Население": "60 665 551",
      "Континент": "Европа"
    },
    {
      "Страна": "Йемен",
      "Столица": "Сана",
      "Площадь": "527 970",
      "Население": "27 478 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Кабо-Верде",
      "Столица": "Прая",
      "Площадь": "4 033",
      "Население": "538 535",
      "Континент": "Африка"
    },
    {
      "Страна": "Казахстан",
      "Столица": "Астана",
      "Площадь": "2 724 900",
      "Население": "17 753 200",
      "Континент": "Азия"
    },
    {
      "Страна": "Камбоджа",
      "Столица": "Пномпень",
      "Площадь": "181 040",
      "Население": "15 288 489",
      "Континент": "Азия"
    },
    {
      "Страна": "Камерун",
      "Столица": "Яунде",
      "Площадь": "475 440",
      "Население": "23 924 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Канада",
      "Столица": "Оттава",
      "Площадь": "9 976 139",
      "Население": "36 286 425",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Катар",
      "Столица": "Доха",
      "Площадь": "11 437",
      "Население": "2 553 393",
      "Континент": "Азия"
    },
    {
      "Страна": "Кения",
      "Столица": "Найроби",
      "Площадь": "582 650",
      "Население": "57 564 296",
      "Континент": "Африка"
    },
    {
      "Страна": "Кипр",
      "Столица": "Никосия",
      "Площадь": "9 250",
      "Население": "848 319",
      "Континент": "Азия"
    },
    {
      "Страна": "Киргизия",
      "Столица": "Бишкек",
      "Площадь": "198 500",
      "Население": "6 019 500",
      "Континент": "Азия"
    },
    {
      "Страна": "Кирибати",
      "Столица": "Южная Тарава",
      "Площадь": "717",
      "Население": "109 693",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Китай",
      "Столица": "Пекин",
      "Площадь": "9 640 821",
      "Население": "1 411 778 724",
      "Континент": "Азия"
    },
    {
      "Страна": "КНДР",
      "Столица": "Пхеньян",
      "Площадь": "120 540",
      "Население": "25 281 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Колумбия",
      "Столица": "Богота",
      "Площадь": "1 138 910",
      "Население": "49 258 494",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Коморские Острова",
      "Столица": "Морони",
      "Площадь": "2 235",
      "Население": "806 153",
      "Континент": "Африка"
    },
    {
      "Страна": "Коста-Рика",
      "Столица": "Сан-Хосе",
      "Площадь": "51 100",
      "Население": "4 890 379",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Кот-д'Ивуар",
      "Столица": "Ямусукро",
      "Площадь": "322 460",
      "Население": "23 254 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Куба",
      "Столица": "Гавана",
      "Площадь": "110 860",
      "Население": "11 236 348",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Кувейт",
      "Столица": "Эль-Кувейт",
      "Площадь": "17 820",
      "Население": "4 330 308",
      "Континент": "Азия"
    },
    {
      "Страна": "Лаос",
      "Столица": "Вьентьян",
      "Площадь": "236 800",
      "Население": "6 492 400",
      "Континент": "Азия"
    },
    {
      "Страна": "Латвия",
      "Столица": "Рига",
      "Площадь": "64 589",
      "Население": "1 968 957",
      "Континент": "Европа"
    },
    {
      "Страна": "Лесото",
      "Столица": "Масеру",
      "Площадь": "30 355",
      "Население": "2 007 201",
      "Континент": "Африка"
    },
    {
      "Страна": "Либерия",
      "Столица": "Монровия",
      "Площадь": "111 370",
      "Население": "4 001 855",
      "Континент": "Африка"
    },
    {
      "Страна": "Ливан",
      "Столица": "Бейрут",
      "Площадь": "10 452",
      "Население": "5 988 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Ливия",
      "Столица": "Триполи",
      "Площадь": "1 759 540",
      "Население": "6 244 174",
      "Континент": "Африка"
    },
    {
      "Страна": "Литва",
      "Столица": "Вильнюс",
      "Площадь": "65 200",
      "Население": "2 888 558",
      "Континент": "Европа"
    },
    {
      "Страна": "Лихтенштейн",
      "Столица": "Вадуц",
      "Площадь": "160",
      "Население": "37 662",
      "Континент": "Европа"
    },
    {
      "Страна": "Люксембург",
      "Столица": "Люксембург",
      "Площадь": "2 586",
      "Население": "576 249",
      "Континент": "Европа"
    },
    {
      "Страна": "Маврикий",
      "Столица": "Порт-Луи",
      "Площадь": "2 040",
      "Население": "1 263 747",
      "Континент": "Африка"
    },
    {
      "Страна": "Мавритания",
      "Столица": "Нуакшот",
      "Площадь": "1 030 700",
      "Население": "3 537 368",
      "Континент": "Африка"
    },
    {
      "Страна": "Мадагаскар",
      "Столица": "Антананариву",
      "Площадь": "587 040",
      "Население": "28 680 342",
      "Континент": "Африка"
    },
    {
      "Страна": "Малави",
      "Столица": "Лилонгве",
      "Площадь": "118 480",
      "Население": "18 563 749",
      "Континент": "Африка"
    },
    {
      "Страна": "Малайзия",
      "Столица": "Куала-Лумпур",
      "Площадь": "329 750",
      "Население": "31 790 277",
      "Континент": "Азия"
    },
    {
      "Страна": "Мали",
      "Столица": "Бамако",
      "Площадь": "1 240 000",
      "Население": "18 135 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Мальдивские Острова",
      "Столица": "Мале",
      "Площадь": "300",
      "Население": "402 071",
      "Континент": "Азия"
    },
    {
      "Страна": "Мальта",
      "Столица": "Валлетта",
      "Площадь": "316",
      "Население": "434 403",
      "Континент": "Европа"
    },
    {
      "Страна": "Марокко",
      "Столица": "Рабат",
      "Площадь": "446 550",
      "Население": "34 817 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Маршалловы Острова",
      "Столица": "Маджуро",
      "Площадь": "181",
      "Население": "55 717",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Мексика",
      "Столица": "Мехико",
      "Площадь": "1 972 550",
      "Население": "133 649 565",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Мозамбик",
      "Столица": "Мапуту",
      "Площадь": "801 590",
      "Население": "26 423 623",
      "Континент": "Африка"
    },
    {
      "Страна": "Молдавия",
      "Столица": "Кишинёв",
      "Площадь": "33 846",
      "Население": "3 553 056",
      "Континент": "Европа"
    },
    {
      "Страна": "Монако",
      "Столица": "Монако",
      "Площадь": "2.02",
      "Население": "38 400",
      "Континент": "Европа"
    },
    {
      "Страна": "Монголия",
      "Столица": "Улан-Батор",
      "Площадь": "1 564 116",
      "Население": "3 081 677",
      "Континент": "Азия"
    },
    {
      "Страна": "Мьянма",
      "Столица": "Нейпьидо",
      "Площадь": "678 500",
      "Население": "51 419 420",
      "Континент": "Азия"
    },
    {
      "Страна": "Намибия",
      "Столица": "Виндхук",
      "Площадь": "825 418",
      "Население": "2 436 469",
      "Континент": "Африка"
    },
    {
      "Страна": "Науру",
      "Столица": "[нет столицы]",
      "Площадь": "21.3",
      "Население": "10 800",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Непал",
      "Столица": "Катманду",
      "Площадь": "140 800",
      "Население": "29 192 480",
      "Континент": "Азия"
    },
    {
      "Страна": "Нигер",
      "Столица": "Ниамей",
      "Площадь": "1 267 000",
      "Население": "20 715 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Нигерия",
      "Столица": "Абуджа",
      "Площадь": "923 768",
      "Население": "186 988 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Нидерланды",
      "Столица": "Амстердам",
      "Площадь": "41 526",
      "Население": "16 979 120",
      "Континент": "Европа"
    },
    {
      "Страна": "Никарагуа",
      "Столица": "Манагуа",
      "Площадь": "129 494",
      "Население": "6 262 703",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Новая Зеландия",
      "Столица": "Веллингтон",
      "Площадь": "268 680",
      "Население": "4 722 321",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Норвегия",
      "Столица": "Осло",
      "Площадь": "385 186",
      "Население": "5 213 985",
      "Континент": "Европа"
    },
    {
      "Страна": "ОАЭ",
      "Столица": "Абу-Даби",
      "Площадь": "82 880",
      "Население": "9 267 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Оман",
      "Столица": "Маскат",
      "Площадь": "309 500",
      "Население": "4 523 401",
      "Континент": "Азия"
    },
    {
      "Страна": "Пакистан",
      "Столица": "Исламабад",
      "Площадь": "881 913",
      "Население": "196 174 380",
      "Континент": "Азия"
    },
    {
      "Страна": "Палау",
      "Столица": "Нгерулмуд",
      "Площадь": "458",
      "Население": "17 661",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Панама",
      "Столица": "Панама",
      "Площадь": "78 200",
      "Население": "4 037 043",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Папуа - Новая Гвинея",
      "Столица": "Порт-Морсби",
      "Площадь": "463 840",
      "Население": "8 151 300",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Парагвай",
      "Столица": "Асунсьон",
      "Площадь": "406 750",
      "Население": "6 854 536",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Перу",
      "Столица": "Лима",
      "Площадь": "1 285 220",
      "Население": "31 488 625",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Польша",
      "Столица": "Варшава",
      "Площадь": "312 685",
      "Население": "37 967 209",
      "Континент": "Европа"
    },
    {
      "Страна": "Португалия",
      "Столица": "Лиссабон",
      "Площадь": "92 082",
      "Население": "10 347 892",
      "Континент": "Европа"
    },
    {
      "Страна": "Республика Конго",
      "Столица": "Браззавиль",
      "Площадь": "342 000",
      "Население": "4 741 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Республика Корея",
      "Столица": "Сеул",
      "Площадь": "98 480",
      "Население": "51 664 244",
      "Континент": "Азия"
    },
    {
      "Страна": "Россия",
      "Столица": "Москва",
      "Площадь": "17 234 287",
      "Население": "147 182 123",
      "Континент": "Европа"
    },
    {
      "Страна": "Руанда",
      "Столица": "Кигали",
      "Площадь": "26 338",
      "Население": "11 533 446",
      "Континент": "Африка"
    },
    {
      "Страна": "Румыния",
      "Столица": "Бухарест",
      "Площадь": "237 500",
      "Население": "19 053 815",
      "Континент": "Европа"
    },
    {
      "Страна": "Сальвадор",
      "Столица": "Сан-Сальвадор",
      "Площадь": "21 040",
      "Население": "6 460 271",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Самоа",
      "Столица": "Апиа",
      "Площадь": "2 860",
      "Население": "194 899",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Сан-Марино",
      "Столица": "Сан-Марино",
      "Площадь": "61",
      "Население": "33 005",
      "Континент": "Европа"
    },
    {
      "Страна": "Сан-Томе и Принсипи",
      "Столица": "Сан-Томе",
      "Площадь": "1 001",
      "Население": "194 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Саудовская Аравия",
      "Столица": "Эр-Рияд",
      "Площадь": "2 218 000",
      "Население": "31 015 999",
      "Континент": "Азия"
    },
    {
      "Страна": "Северная Македония",
      "Столица": "Скопье",
      "Площадь": "25 333",
      "Население": "2 071 278",
      "Континент": "Европа"
    },
    {
      "Страна": "Сейшельские Острова",
      "Столица": "Виктория",
      "Площадь": "455",
      "Население": "93 186",
      "Континент": "Африка"
    },
    {
      "Страна": "Сенегал",
      "Столица": "Дакар",
      "Площадь": "196 190",
      "Население": "14 799 859",
      "Континент": "Африка"
    },
    {
      "Страна": "Сент-Винсент и Гренадины",
      "Столица": "Кингстаун",
      "Площадь": "389",
      "Население": "110 255",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Сент-Китс и Невис",
      "Столица": "Бастер",
      "Площадь": "261",
      "Население": "52 329",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Сент-Люсия",
      "Столица": "Кастри",
      "Площадь": "620",
      "Население": "172 818",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Сербия",
      "Столица": "Белград",
      "Площадь": "88 361",
      "Население": "9 846 582",
      "Континент": "Европа"
    },
    {
      "Страна": "Сингапур",
      "Столица": "Сингапур",
      "Площадь": "714",
      "Население": "5 607 300",
      "Континент": "Азия"
    },
    {
      "Страна": "Сирия",
      "Столица": "Дамаск",
      "Площадь": "185 180",
      "Население": "17 185 170",
      "Континент": "Азия"
    },
    {
      "Страна": "Словакия",
      "Столица": "Братислава",
      "Площадь": "48 845",
      "Население": "5 426 252",
      "Континент": "Европа"
    },
    {
      "Страна": "Словения",
      "Столица": "Любляна",
      "Площадь": "20 253",
      "Население": "2 064 188",
      "Континент": "Европа"
    },
    {
      "Страна": "Соломоновы Острова",
      "Столица": "Хониара",
      "Площадь": "28 450",
      "Население": "651 700",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Сомали",
      "Столица": "Могадишо",
      "Площадь": "637 657",
      "Население": "12 316 895",
      "Континент": "Африка"
    },
    {
      "Страна": "Судан",
      "Столица": "Хартум",
      "Площадь": "1 886 068",
      "Население": "41 176 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Суринам",
      "Столица": "Парамарибо",
      "Площадь": "163 270",
      "Население": "558 773",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "США",
      "Столица": "Вашингтон",
      "Площадь": "9 522 057",
      "Население": "322 762 018",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Сьерра-Леоне",
      "Столица": "Фритаун",
      "Площадь": "71 740",
      "Население": "7 075 641",
      "Континент": "Африка"
    },
    {
      "Страна": "Таджикистан",
      "Столица": "Душанбе",
      "Площадь": "143 100",
      "Население": "8 551 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Таиланд",
      "Столица": "Бангкок",
      "Площадь": "514 000",
      "Население": "68 147 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Танзания",
      "Столица": "Додома",
      "Площадь": "948 087",
      "Население": "50 142 938",
      "Континент": "Африка"
    },
    {
      "Страна": "Того",
      "Столица": "Ломе",
      "Площадь": "56 785",
      "Население": "7 143 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Тонга",
      "Столица": "Нукуалофа",
      "Площадь": "748",
      "Население": "106 440",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Тринидад и Тобаго",
      "Столица": "Порт-оф-Спейн",
      "Площадь": "5 128",
      "Население": "1 349 667",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Тувалу",
      "Столица": "Фунафути",
      "Площадь": "26",
      "Население": "10 782",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Тунис",
      "Столица": "Тунис",
      "Площадь": "163 610",
      "Население": "11 154 372",
      "Континент": "Африка"
    },
    {
      "Страна": "Туркмения",
      "Столица": "Ашхабад",
      "Площадь": "491 200",
      "Население": "5 439 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Турция",
      "Столица": "Анкара",
      "Площадь": "780 580",
      "Население": "78 741 053",
      "Континент": "Азия"
    },
    {
      "Страна": "Уганда",
      "Столица": "Кампала",
      "Площадь": "236 040",
      "Население": "36 860 700",
      "Континент": "Африка"
    },
    {
      "Страна": "Узбекистан",
      "Столица": "Ташкент",
      "Площадь": "447 400",
      "Население": "31 807 000",
      "Континент": "Азия"
    },
    {
      "Страна": "Украина",
      "Столица": "Киев",
      "Площадь": "467 544",
      "Население": "23 374 326",
      "Континент": "Европа"
    },
    {
      "Страна": "Уругвай",
      "Столица": "Монтевидео",
      "Площадь": "176 220",
      "Население": "3 480 222",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Федеративные Штаты Микронезии",
      "Столица": "Паликир",
      "Площадь": "702",
      "Население": "105 681",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Фиджи",
      "Столица": "Сува",
      "Площадь": "18 270",
      "Население": "903 207",
      "Континент": "Австралия и Океания"
    },
    {
      "Страна": "Филиппины",
      "Столица": "Манила",
      "Площадь": "300 000",
      "Население": "102 980 480",
      "Континент": "Азия"
    },
    {
      "Страна": "Финляндия",
      "Столица": "Хельсинки",
      "Площадь": "337 030",
      "Население": "5 487 308",
      "Континент": "Европа"
    },
    {
      "Страна": "Франция",
      "Столица": "Париж",
      "Площадь": "547 030",
      "Население": "64 513 242",
      "Континент": "Европа"
    },
    {
      "Страна": "Хорватия",
      "Столица": "Загреб",
      "Площадь": "56 542",
      "Население": "4 190 669",
      "Континент": "Европа"
    },
    {
      "Страна": "ЦАР",
      "Столица": "Банги",
      "Площадь": "622 984",
      "Население": "5 277 959",
      "Континент": "Африка"
    },
    {
      "Страна": "Чад",
      "Столица": "Нджамена",
      "Площадь": "1 284 000",
      "Население": "14 497 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Черногория",
      "Столица": "Подгорица",
      "Площадь": "14 026",
      "Население": "622 218",
      "Континент": "Европа"
    },
    {
      "Страна": "Чехия",
      "Столица": "Прага",
      "Площадь": "78 866",
      "Население": "10 524 167",
      "Континент": "Европа"
    },
    {
      "Страна": "Чили",
      "Столица": "Сантьяго",
      "Площадь": "756 950",
      "Население": "18 006 407",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Швейцария",
      "Столица": "Берн",
      "Площадь": "41 290",
      "Население": "8 325 194",
      "Континент": "Европа"
    },
    {
      "Страна": "Швеция",
      "Столица": "Стокгольм",
      "Площадь": "449 964",
      "Население": "9 851 017",
      "Континент": "Европа"
    },
    {
      "Страна": "Шри-Ланка",
      "Столица": "Шри-Джаяварденепура-Котте",
      "Площадь": "65 610",
      "Население": "21 866 445",
      "Континент": "Азия"
    },
    {
      "Страна": "Эквадор",
      "Столица": "Кито",
      "Площадь": "283 560",
      "Население": "16 599 593",
      "Континент": "Южная Америка"
    },
    {
      "Страна": "Экваториальная Гвинея",
      "Столица": "Малабо",
      "Площадь": "28 051",
      "Население": "1 222 442",
      "Континент": "Африка"
    },
    {
      "Страна": "Эритрея",
      "Столица": "Асмэра",
      "Площадь": "121 320",
      "Население": "5 352 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Эсватини",
      "Столица": "Мбабане",
      "Площадь": "17 363",
      "Население": "1 419 623",
      "Континент": "Африка"
    },
    {
      "Страна": "Эстония",
      "Столица": "Таллин",
      "Площадь": "45 226",
      "Население": "1 315 944",
      "Континент": "Европа"
    },
    {
      "Страна": "Эфиопия",
      "Столица": "Аддис-Абеба",
      "Площадь": "1 127 127",
      "Население": "101 853 000",
      "Континент": "Африка"
    },
    {
      "Страна": "ЮАР",
      "Столица": "Претория",
      "Площадь": "1 219 912",
      "Население": "55 908 900",
      "Континент": "Африка"
    },
    {
      "Страна": "Южная Осетия",
      "Столица": "Цхинвал",
      "Площадь": "3 900",
      "Население": "53 532",
      "Континент": "Азия"
    },
    {
      "Страна": "Южный Судан",
      "Столица": "Джуба",
      "Площадь": "619 745",
      "Население": "12 733 000",
      "Континент": "Африка"
    },
    {
      "Страна": "Ямайка",
      "Столица": "Кингстон",
      "Площадь": "10 990",
      "Население": "2 723 000",
      "Континент": "Северная Америка"
    },
    {
      "Страна": "Япония",
      "Столица": "Токио",
      "Площадь": "377 944",
      "Население": "127 103 388",
      "Континент": "Азия"
    }
  ]

  let countries = allCountries.filter(country =>  country.Континент);