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
      name: "Орёл",
      species: "Aquila nipalensis",
      description:
        "В древние времена орел был символом солнца. Орлы часто парят над землей, при этом скорость их перемещения может достигать 240 км/ч. Иллюзия медленного движения происходит из-за высоты полета – более 700 метров",
      image: "https://live.staticflickr.com//4835//43867392960_7105d71e19.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/KTBTZAHSXF/10_Aquila_nipalensis_al02D85.mp3"
    },
    {
      id: 2,
      name: "Коршун",
      species: "Milvus migrans",
      description:
        "Коршуны – крупные хищники, в высоту они достигают около полуметра, а вес взрослых особей достигает 1 кг. Крылья узкие и длинные, их размах составляет 1,5 м. Коршуны часто гнездятся большими стаями и даже образуют крупные колонии.",
      image: "https://live.staticflickr.com//65535//48701190276_ee2a9ed594.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/SDPCHKOHRH/XC485740-2019-06-22%20Selenga%20Milan%20brun%20cris%20de%20quemandage%203.mp3"
    },
    {
      id: 3,
      name: "Лунь",
      species: "Circus cyaneus",
      description:
        "Лунь – это небольшой сокол. Питается в основном мышевидными грызунами, основа его рациона – полёвки, хомяки, мыши. Оперение луня может быть пепельно-серым. С такой птицей связано сравнение «седой, как лунь».",
      image: "https://live.staticflickr.com/65535/49322743903_32f3922d9e.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/BLMSIUFTFU/XC513498-190709_1175_Cir.cyan-f.mp3"
    },
    {
      id: 4,
      name: "Сокол",
      species: "Falco peregrinus",
      description:
        "Латинское название сокола Falco произошло от слова «серп» из-за серповидной формы крыльев. Длинные и широкие крылья позволяют соколу высоко подниматься в небо и свободно парить. Скорость полёта сокола достигает 280-320 километров в час.",
      image: "https://live.staticflickr.com//65535//49310710607_92a3a145a9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC496049-Pilgrimsfalk_06.mp3"
    },
    {
      id: 5,
      name: "Ястреб",
      species: "Accipiter gentilis",
      description:
        "Для всех ястребов характерны широкие и короткие крылья. Ещё один отличительный признак - белые «брови» над глазами. Славянские дружинники размещали изображение ястреба на своих знаменах, как символ отваги, мощи и безжалостности к врагам.",
      image: "https://live.staticflickr.com//65535//49024617331_b9d0d2c9b3.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/MMEJYLOPDO/XC512740-Duvh%C3%B6k_09.mp3"
    },
    {
      id: 6,
      name: "Филин",
      species: "Bubo bubo",
      description:
        "Полет филина бесшумный, зрение очень острое. Эти особенности делают птицу непревзойденным ночным охотником. У филина нет естественных врагов, ни один зверь не охотится на взрослых птиц. А вот на птенцов нападают лисы и волки.",
      image: "https://live.staticflickr.com/65535/48137123012_393653c2e4.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WNLIDKJKXT/XC518386-sense%20t%C3%ADtol.mp3"
    }
  ],
  [
    {
      id: 1,
      name: "Альбатрос",
      species: "Diomedea exulans",
      description:
        "Альбатрос - самая крупная летающая птица в мире. Размах крыльев достигает три с половиной, вес - десять килограммов. Большую часть жизни альбатросы проводят в воздухе, покрывая над океанскими просторами огромные расстояния",
      image: "https://live.staticflickr.com/7557/16260253965_8e9430cb66.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/WOEAFQRMUD/XC293087-Diomedea%20exulans151120_T254.mp3"
    },
    {
      id: 2,
      name: "Олуша",
      species: "Sula nebouxii",
      description:
        "Особенностью голубоногой олуши является не только насыщенный ярко-синий цвет лапок, но еще и тот факт, что они очень теплые. В то время как другие виды птиц греют кладки своим телом, голубоногая олуша делает это с помощью лапок",
      image: "https://live.staticflickr.com/800/40645471394_4422e69ed8.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/YHKQPPJDVP/XC411507-171217_1491%20BF%20Booby%205ft%20IDLP%201230%20mp3%20amp.mp3"
    },
    {
      id: 3,
      name: "Буревестник",
      species: "Puffinus griseus",
      description:
        "Размеры буревестниковых разные. Самые маленькие из них в длину составляют до 25 см, самые большие - до 1 м, при размахе крыльев около 2 м. Существует поверье, что появление буревестника в воздухе предвещает бурю, о чем говорит само название птицы.",
      image: "https://live.staticflickr.com//607//22136056020_935cb113f9.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XQEVNREHJY/SHEARWATER%20Christmas%20Island_04_Motu_Isla%20de%20Pascua-Easter%20Island_CH_4MAR03_Alvaro%20Jaramillo.mp3"
    },
    {
      id: 4,
      name: "Пеликан",
      species: "Pelecanus",
      description:
        "Пеликаны — обитатели морей и рек. Ходят они неуклюже, но хорошо летают и плавают. Питаются в основном рыбой, устраивают коллективные охоты — выстроившись полукругом хлопают по воде крыльями и клювами и вытесняют напуганную рыбу на мелководье.",
      image: "https://live.staticflickr.com/7885/46523771945_9496c2a191.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/XAMHIHFTZG/XC331138-call1.mp3"
    },
    {
      id: 5,
      name: "Пингвин",
      species: "Aptenodytes forsteri",
      description:
        "Самец императорского пингвина достигает роста 130 см, его масса может приближаться к 50 кг. Из всех современных пингвинов этот вид – самый крупный. Питание пингвина состоит из рыбы, кальмаров и криля. Охотятся птицы в океане большими группами.",
      image: "https://live.staticflickr.com/5202/5252413926_8e013a3efd.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/OOECIWCSWV/XC449827-LS100829%20King%20Penguin%20call%20A.mp3"
    },
    {
      id: 6,
      name: "Чайка",
      species: "Larus argentatus",
      description:
        "Чайки населяют берега морей, озёр, рек, водохранилищ, болот, часто гнездятся на островах. С конца прошлого века чайки стали появляться в крупных городах, где устраивает гнёзда на крышах зданий. Все чайки ведут колониальный образ жизни.",
      image: "https://live.staticflickr.com/65535/48577115317_7034201dde.jpg",
      audio:
        "https://www.xeno-canto.org/sounds/uploaded/VOLIQOYWKG/XC501190-190801_06.50h_zilvermeeuw_duinen%20van%20goeree_roep_2ex_overvliegend_gezien_.mp3"
    }
  ]
];

export default birdsData;
