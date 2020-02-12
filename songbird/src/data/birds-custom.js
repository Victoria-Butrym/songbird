const birdsData = [
  [
    // домашние
    {
      id: 1,
      name: "Гусь",
      species: "Anser anser rubrirostris",
      description:
        "Как и лебеди, гуси моногамны — пару себе они выбирают раз и навсегда, примерно в возрасте трёх лет. Если партнёр погибает, то траур у гуся может растянуться на несколько лет",
      image: "https://live.staticflickr.com/962/26928597097_35f114f07c_3k.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YTUXOCTUEM/Anser_anser_rubrirostris-FL%20flight%20nr%20Flower%20Lake_%20RuoErGai_%20Sichuan%2029May12%203200m%20LS111021.mp3"
    },
    {
      id: 2,
      name: "Утка",
      species: "Mareca strepera strepera",
      description:
        "В Ирландии, в центральном парке Дублина живёт множество уток. Во время конфликта между Великобританией и Ирландией в 1916 году, когда боевые действия велись в том числе и на территории парка, каждый день обе враждующих стороны на время прекращали огонь, чтобы смотритель парка мог спокойно покормить живущих там уток",
      image: "https://live.staticflickr.com/7284/9171501087_af69d05de0_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RNMRWBXEZJ/XC436359-Krakeenden%2C%20flight%20call%2C%20260918%2C%200147%20uur.mp3"
    },
    {
      id: 3,
      name: "Индейка",
      species: "Meleagris gallopavo",
      description:
        "У индюков принято лежачего не бить, поэтому тот, кто лег и вытянул шею, считает себя спасенным от расправы",
      image: "https://live.staticflickr.com/3529/4066156216_2b60133573_b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/PMWEVMCFBB/XC520057-20180511_193802%2B090433.mp3"
    },
    {
      id: 4,
      name: "Волнистый попугайчик",
      species: "Melopsittacus undulatus",
      description:
        "Группа исследователей из карельского университета установила, что попугаи дают своим отпрыскам отдельные звуковые имена, на которые они отзываются. Птенцы заучивают каждый свое имя, повторяют и помнят его на протяжении всей жизни",
      image: "https://live.staticflickr.com/6079/6099946608_ea1b61a083_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/EHGWCIGILC/XC335522-budgerigar-snp2.mp3"
    },
    {
      id: 5,
      name: "Курица",
      species: "Gallus gallus",
      description:
        "Куры способны «рассказывать» друг другу о том, что видят перед собой. Для людей такой «разговор» воспринимается как бессвязная череда кудахтанья и простых щелчков клювом",
      image: "https://live.staticflickr.com/7453/27615562365_8e6273e06e_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/UKNISVRBBF/XC502076-20190801-555.mp3"
    },
    {
      id: 6,
      name: "Цесарка",
      species: "Numida meleagris",
      description:
        "Узнать цесарку можно по длинному корпусу овальной формы, маленькой оголенной голове с красной мясистой бородкой и необычным украшением. На темени красуется маленький рогообразный отросток. Клюв не очень большой, но интересный – сжат с обеих сторон, на фото и видео это заметно",
      image: "//live.staticflickr.com/65535/48001688317_7c49f4e402_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GQMCPIVNXX/XC507927-Helmeted%20Guineafowl.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Голубь",
      species: "Passer domesticus",
      description:
        "Многим кажется, что голуби в основном средних размеров, темно-серого цвета и живут на улицах города. Большинство из них, да, но это только один из видов. Голуби живут по всему миру, и многие из них выглядят очень красиво. К примеру, существуют фруктовые голуби, которые удивляют своими яркими зелеными, красными и желтыми оттенками.",
      image: "//live.staticflickr.com/7924/46822054612_847f835f45_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC346731-LS102383%20Speckled%20Pigeon%20song%20A.mp3"
    },
    {
      id: 2,
      name: "Свиристель",
      species: "Bombycilla garrulus",
      description:
        "У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.",
      image: "https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"
    },
    {
      id: 3,
      name: "Синица",
      species: "Parus major",
      description:
        "В щебетании синиц различают более 40 различных звуковых сочетаний. Поют они практически круглый год, немного затихая только зимой. Синицы настоящие санитары леса. Одна пара синиц в период гнездования оберегает от вредителей десятки деревьев.",
      image: "https://live.staticflickr.com//65535//49366042493_c48c81d58d.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/RFGQDPLDEC/XC518417-Kj%C3%B8ttmeis%20XC%20Helg%C3%B8ya%20Elias%20A.%20Ryberg20200108133922_079.mp3"
    },
    {
      id: 4,
      name: "Снегирь",
      species: "Pyrrhula pyrrhula pyrrhula",
      description:
        "У снегирей великолепно развита способность к подражанию разным звукам. Некоторые из этих птичек могут запомнить и насвистывать по несколько весьма сложных мелодий. Всё, что нужно — это терпение, чтобы обучить птицу",
      image: "//live.staticflickr.com/7922/46542693444_c2ee9a7a69_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/QAJPWEPSTL/XC522969-GT0912.mp3"
    },
    {
      id: 5,
      name: "Воробей",
      species: "Passer domesticus",
      description:
        "Воробьи являются самыми известными и узнаваемыми пернатыми. Их легко узнать по пестрому оперению и задорному чириканью. Воробьи относятся к синатропному виду — они селятся поблизости к человеческому жилищу.",
      image: "https://live.staticflickr.com//65535//49366595303_06cf65b07e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/CXFHOPIVAS/XC503224-191020_0134.mp3"
    },
    {
      id: 6,
      name: "Ворона",
      species: "Corvus corone",
      description:
        "Ворон – крупная птица. Длина тела достигает 70 сантиметров, размах крыльев – до полутора метров. Вороны населяют окрестности Тауэра. В Англии бытует поверье, что в день, когда черные вороны улетят от Тауэра, монархия рухнет.",
      image: "//live.staticflickr.com/1870/42501481790_785d23aa36_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC527090-2018-10-30%20Ouessant%20Corneille%20noire%20cri%20tres%20module.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Мухоловка",
      species: "Ficedula albicollis",
      description:
        "Все мухоловки имеют широкий клюв, на котором хорошо выделяется хребет надклювья. Возле основания клюва и по краям располагаются упругие щетинки, прикрывающие у некоторых видов даже ноздри. Они помогают птицам прямо на лету ловить насекомых",
      image: "//live.staticflickr.com/914/43028599141_ec0f7dd603_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/INCBVJJLBJ/XC508448-Default%20Project.mp3"
    },
    {
      id: 2,
      name: "Садовая камышевка",
      species: "Acrocephalus dumetorum",
      description:
        "Камышовка обладает не внушительными размерами – всего 15-16 см в длину и 15 грамм – в массе тела. Оперение сверху имеет серо-бурый цвет, что касается грудинки и животика, то они бежево-оливкового цвета. На кончиках крыльев присутствует светлая каёмка",
      image:
        "https://cs8.pikabu.ru/post_img/2016/05/23/11/146403248712258273.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/CIHYZWBHFL/XC506000-201906081234-Busks%C3%A5ngare_S_Storjungfrun_H%C3%A4lsingland.mp3"
    },
    {
      id: 3,
      name: "Жаворонок",
      species: "Alauda arvensis",
      description:
        "Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.",
      image: "https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"
    },
    {
      id: 4,
      name: "Скворец",
      species: "Sturnus vulgaris",
      description:
        "Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.",
      image: "https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"
    },
    {
      id: 5,
      name: "Ласточка",
      species: "Delichon urbicum",
      description:
        "Для ласточек характерно негромкое щебетание. Песни ласточек не смолкают на протяжении всего лета. Исследователи различают у птиц до 6 щебечущих звуков: «вит», «ви-вит», «чивит», «чиривит» и т.п. Ласточки любят петь дуэтом.",
      image: "https://live.staticflickr.com//65535//48539007512_5029d2a9a0.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489247-190724_09.10h_huiszwaluw_biesbosch_amaliahoeve_roep_100%2Bex_fouragerend_gezien_%20%282%29.mp3"
    },
    {
      id: 6,
      name: "Жулан",
      species: "Lanius collurio",
      description:
        "По внешним характеристикам, жулана сложно выделить из общей массы птиц ведь, преимущественно, его тело раскрашено в серый цвет. У жулана присутствует выразительная черная полоска вдоль глаз, кстати, сами глаза тоже – темные, радужка глаза сливается с оболочкой. ",
      image: "//live.staticflickr.com/4165/34129323810_74cfd5bf7f_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GUGEPXPKNV/XC422855-Red%20backed%20Shrike%20Santon%20Downham%204-6-13%20%2811%29.MP3"
    }
  ],
  [
    {
      id: 1,
      name: "Жаворонок",
      species: "Alauda arvensis",
      description:
        "Жаворонки — перелетные птицы. С начала сентября они отлетают на юг. Возвращаются они в начале марта, независимо от того, сошел снег или нет. По прилету жаворонков определяли наступление весны и пору, когда пора пахать землю.",
      image: "https://live.staticflickr.com/65535/47105096764_f751fba568.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC462158-Skowronek_Alauda_arvensis_Poland_Jarek_Matusiak_%20-006%20skowronek%20%282%29.mp3"
    },
    {
      id: 2,
      name: "Соловей",
      species: "Luscinia luscinia",
      description:
        "Соловьи поют с начала мая и до конца лета. Каждая песня соловья состоит из 12 повторяющихся элементов, которые еще называют коленами. Кроме собственных трелей, соловьи легко и хорошо перенимают пение других птиц.",
      image: "https://live.staticflickr.com/7605/27669397735_f3c21758f2.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/HILVWSADVL/XC513809-R07_0052%20Thrush%20Nightingale%20Snipe.mp3"
    },
    {
      id: 3,
      name: "Скворец",
      species: "Sturnus vulgaris",
      description:
        "Скворцы - перелётные птицы. Синхронный перелет больших стай скворцов называется мурмурацией. Это красивое и завораживающее явление – множество птиц будто танцуют в воздухе, образуя замысловатые фигуры, которые уменьшаются и увеличиваются в небе.",
      image: "https://live.staticflickr.com/65535/49357593971_9509fe1d7c.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC515519-2020.01.01_17.24_01.MP3"
    },
    {
      id: 4,
      name: "Иволга",
      species: "Oriolus oriolus",
      description:
        "Мелодичность голоса иволги сравнивают со звучанием флейты. Человеку сложно разглядеть иволгу, так как она обитает высоко на деревьях. Иволга не только очень красивая, но и  полезная птица. Она уничтожает ядовитых гусениц, которых не поедают другие птицы.",
      image: "https://live.staticflickr.com/65535/47102184004_58a93380b9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GYAUIPUVNM/XC491801-2019.07.07_06.28_01.mp3"
    },
    {
      id: 5,
      name: "Свиристель",
      species: "Bombycilla garrulus",
      description:
        "У свиристели очень цепкие коготки, что помогает птице удерживаться на ветках и склевывать ягоды, которые труднее всего достать. В период ухаживаний самец предлагает самке ягоду или другое угощение. Если самка его принимает, то птицы создают пару.",
      image: "https://live.staticflickr.com//65535//49367433842_1b06da0e6b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/ZNCDXTUOFL/XC517421-AB-004%20%282%29%20jemio%C5%82uszka.mp3"
    },
    {
      id: 6,
      name: "Щегол",
      species: "Carduelis carduelis",
      description:
        "Щеглы поют красиво и мелодично. И в природе, и в неволе они щебечут почти круглый год. В пении щегла различают более 20 переливчатых трелей. Щеглы привыкают к людям, и даже могут возвратиться к хозяину после того, как их выпустили на волю",
      image: "https://live.staticflickr.com//65535//49366257253_db3ce48b9a.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC489265-190724_07.58h_putter_biesbosch_%20boompjes%20langs%20open%20water_zang_1ex_ad_niet%20gezien_.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Сапсан",
      species: "Falco peregrinus",
      description:
        "Эти соколы в основном питаются птицами средней величины, включая певчих птиц, куликов, водоплавающих и голубей. По приблизительным оценкам, почти одна пятая часть общей численности птичьего населения становится жертвой сапсана",
      image: "//live.staticflickr.com/7641/26186128614_3d69063917_k.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC493703-Pilgrimsfalk_04.mp3"
    },
    {
      id: 2,
      name: "Пустельга",
      species: "Falco tinnunculus",
      description:
        "Рацион питания пустельги состоит, в основном, из грызунов: мышей, полевок, землероек. Птица также может охотиться на летучих мышей, ящериц, лягушек, насекомых и дождевых червей. Нападает и на птиц, например, на воробьев и голубиных птенцов. Добычу пустельга убивает, ударив жертву клювом в затылок",
      image: "//live.staticflickr.com/4307/35898298662_e7b84e29ce_h.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/NRUIFMFTXY/XC527307-Common%20Kestrel%20Jalman%202%20170602_3249.mp3"
    },
    {
      id: 3,
      name: "Беркут",
      species: "Aquila chrysaetos",
      description:
        "На протяжении веков птицы этого вида были одними из самых почитаемых: их использовали в соколиной охоте. Евразийские подвиды использовались для охоты и умерщвления такой крупной добычи, как серые волки",
      image: "//live.staticflickr.com/65535/49023316151_683aecbab9_k.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/QLZIXALYUM/XC504831-Aquila%20chrysaetos.mp3"
    },
    {
      id: 4,
      name: "Гарпия",
      species: "Pithecophaga jefferyi",
      description:
        "Южноамериканская гарпия является крупнейшим и наиболее мощным хищником, обитающим на территории Северной и Южной Америки, и одним из крупнейших сохранившихся видов орлов в мире",
      image: "//live.staticflickr.com/567/23137654392_c6e1cb0ef0_b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/GNYVMVEMZX/XC379328-PhilippineEagle_PieterPelser.mp3"
    },
    {
      id: 5,
      name: "Белоплечий орлан",
      species: "Haliaeetus pelagicus",
      description:
        "Отличающаяся огромным жёлтым клювом, эта птица в основном охотится на рыб и водоплавающих птиц. Её любимым лакомством являются лосось и форель. В среднем, это самый тяжёлый орёл в мире: некоторые особи достигают 9 килограммов веса.",
      image: "//live.staticflickr.com/3093/2792120970_fb6fd298bd_z.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/LELYWQKUZX/XC489769-Haliaeetus%20pelagicus%20190719_002%2C25A1.MP3"
    },
    {
      id: 6,
      name: "Кондор",
      species: "Vultur gryphus",
      description:
        "Достигая до 12 килограммов веса, калифорнийский кондор является крупнейшей североамериканской наземной птицей и одним из крупнейших хищников в мире",
      image: "//live.staticflickr.com/8638/16065181483_63db309544_k.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/DISAQFOZJP/CONDOR%20Andean_20_CRAR-UNORCH_Santiago_CH_SEP00_Guillermo%20Egli%20%28Egli%202002%29.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Глухарь",
      species: "Tetrao urogallus",
      description:
        "Глухарь не часто использует свои крылья по назначению – летает он редко. А если и полетит куда-нибудь, то как правило, поднимается не выше деревьев",
      image: "//live.staticflickr.com/5567/31674528235_753ebcd7b6_b.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC490642-Tj%C3%A4der_03.mp3"
    },
    {
      id: 2,
      name: "Клуша",
      species: "Larus fuscus",
      description:
        "Птица отличается длинными крыльями, что придает элегантность ее полету. Летает клуша хорошо, за пищей отправляется далеко от берега, в открытое море. Во время пения птица вначале опускает голову внизу, после чего поднимает ее резко вверх",
      image: "//live.staticflickr.com/805/40140511965_131e74ef44_k.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487330-Goeland%20brun%20alarme%20en%20vol.mp3"
    },
    {
      id: 3,
      name: "Гага",
      species: "Somateria mollissima",
      description:
        "Среда обитания гаги – прибрежные морские воды. Птицы летают низко над водой, они отлично плавают и ныряют на глубину до 5 метров. Но такая глубина, для этих уток не предел, они могут погружаться на глубину до 20 метров. Гага может находиться под водой до 3-х минут",
      image: "//live.staticflickr.com/7817/47484016001_9db90feab5_k.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487987-2018-07-25%20Blonduos%20180725%20Eider%20a%20duvet%20divers%20grognement%20%286%29.mp3"
    },
    {
      id: 4,
      name: "Тупик",
      species: "Fratercula arctica",
      description:
        "Тупики быстро ходят по земле и даже могут бежать, но делают это вразвалку. Птицы отлично приспособлены к плаванию и нырянию, дыхание под водой задерживают на минуту. Летают тупики низко над водой и достаточно быстро (развивают скорость около 80 км/ч",
      image: "//live.staticflickr.com/4746/26583468508_2806555fe4_h.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC487912-2018-07-23%20Latrabjarg%20180721%20Macareux%20moine%20chant%20%286%29.mp3"
    },
    {
      id: 5,
      name: "Хохотунья",
      species: "Larus cachinnans",
      description:
        "Этот вид, как правило, очень шумный и хорошо известен своим громким смехом. Хохотуньи общаются как с помощью звука, так и с помощью зыка тела",
      image: "//live.staticflickr.com/8119/28624722394_4949bf4d3c_k.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MDYOYLDBVM/XC508259-boththth.mp3"
    },
    {
      id: 6,
      name: "Камнешарка",
      species: "Arenaria interpres",
      description:
        "Своё название камнешарка получила из-за способа добычи пропитания – она переворачивает все прибрежные камешки, ракушки и другие небольшие предметы. За эту особенность птица получила своё имя и в английском языке (Ruddy Turnstone), и в немецком (Steinwalzer)",
      image: "//live.staticflickr.com/6232/6427489323_bde6b7ffa5_n.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC526793-2019-10-06%20Sein%20Tourneierre%20a%20collier%20divers%20cris.mp3"
    }
  ]
];

export default birdsData;
