export interface IQuestion {
  question: string;
  answer: string;
}

export interface ITopic {
  name: string;
  displayName: string;
  questions: IQuestion[];
}

export interface IGame {
  name: string;
  displayName: string;
  topics: ITopic[];
}

export function getGame(name: string | undefined) {
    const mathes = Questions.filter((el: IGame) => el.name === name);
    switch (mathes.length) {
      case 0:
        throw new Error(`Game ${name} not found`);
      case 1:
        return mathes[0];
      default:
        throw new Error(`More than 1 game with name ${name} found`);
    }
  }
  
  export function getGameTopic(
    gameName: string | undefined,
    topicName: string | undefined
  ) {
    const game = getGame(gameName);
    const mathes = game.topics.filter((el: ITopic) => el.name === topicName);
    switch (mathes.length) {
      case 0:
        throw new Error(`Topic ${topicName} for game ${gameName} not found`);
      case 1:
        return mathes[0];
      default:
        throw new Error(
          `More than 1 topic with ${topicName} found for game ${gameName}`
        );
    }
  }

export const Questions: IGame[] = [
  {
    name: "money",
    displayName: "Откуда берутся деньги",
    topics: [
      {
        name: "family-income",
        displayName: "Семейный бюджет - Доходы",
        questions: [
          {
            question: "Что такое зарплата?",
            answer:
              "Зарплата – самый распространённый вид дохода. Чтобы получать зарплату, нужно регулярно и добросовестно работать. Заработанные деньги люди получают 2 раза в месяц.",
          },
          {
            question: "Что такое пенсия?",
            answer:
              "Пенсия – это пособие, которое государство выплачивает людям, достигшим определенного возраста. Размер пенсии зависит от количества отработанных лет и размера зарплаты.",
          },
          {
            question: "Что такое стипендия?",
            answer:
              "Стипендия - денежное пособие, выдаваемое учащимся в учебном заведении.",
          },
          {
            question: "Что такое премия?",
            answer: "Премию можно получить за особые успехи и достижения.",
          },
          {
            question: "Что такое сезонные доходы?",
            answer:
              "Летом и осенью у дачников и тех людей, которые живут в сельской местности, могут появиться излишки фруктов, ягод и овощей. Если их продать, можно получить сезонный доход.",
          },
          {
            question: "Что такое гонорар?",
            answer:
              "Люди творческих профессий  - художники, писатели, композиторы, а ещё ученые часто получают не зарплату, а гонорар.",
          },
          {
            question: "Что такое дополнительные доходы?",
            answer:
              "В свободное от основной работы время можно заработать деньги теми умениями, которые у тебя есть. Например, на время стать таксистом. Или готовить детей к экзаменам – стать репетитором. Или заниматься творчеством и продавать свои поделки.",
          },
        ],
      },
      {
        name: "family-spend",
        displayName: "Семейный бюджет - Расходы",
        questions: [
          {
            question: "Что такое семейный бюджет?",
            answer:
              "Семейный бюджет – это большая копилка, в которую члены семьи собирают деньги (доходы), а потом распределяют их на разные траты (расходы).",
          },
          {
            question: "Что такое коммунальные расходы?",
            answer:
              "Коммунальные платежи - оплата счетов за электричество, газ и воду – это постоянные расходы.",
          },
          {
            question: "Какие расходы называют повседневными?",
            answer:
              "Большая часть повседневных расходов – траты на продукты питания и предметы гигиены. Одежду, обувь и предметы быта мы покупаем регулярно, но не так часто, как продукты.",
          },
          {
            question: "Что такое непредвиденные расходы?",
            answer:
              "Траты на лечение во время болезни можно отнести к непредвиденным расходам. К таким расходам можно отнести траты на ремонт внезапно вышедшей из строя техники.",
          },
          {
            question: "Что такое транспортные расходы?",
            answer:
              "Расходы на транспорт – это покупка проездных билетов и оплата бензина для личного авто.",
          },
          {
            question: "Куда тратятся деньги из семейного бюджета?",
            answer:
              "Ежемесячно деньги из семейного бюджета тратятся на разные цели. Вот основные виды расходов: постоянные, повседневные (расходы на жизнь), сезонные, непредвиденные и расходы на будущее.",
          },
          {
            question: "Что такое расходы на будущее?",
            answer:
              "Это деньги, которые мы откладываем на какие-то свои цели. Например, на ремонт, покупку нового авто или свадьбу детей.",
          },
        ],
      },
      {
        name: "bank",
        displayName: "Банк",
        questions: [
          {
            question: "Что такое банк?",
            answer:
              "Банк – это предприятие, которое проводит разные операции с деньгами. Здесь работают люди разных профессий: экономисты, бухгалтеры, кассиры, инкассаторы, консультанты и охранники. Управляет работой всего банка председатель, а в каждом отделении у него есть руководители-помощники.",
          },
          {
            question: "Что такое вклад?",
            answer:
              "Вклад – это способ увеличить свои деньги. Происходит это так: ты отдаешь в банк свои деньги на определенный срок. Банк пользуется твоими деньгами и назначает за это вознаграждение (проценты). По истечении срока можно забрать и вложенные деньги, и проценты.",
          },
          {
            question: "Что такое кредит?",
            answer:
              "Бывают ситуации, когда человеку нужно совершить крупную покупку, а накопленных денег не хватает. В этом случае можно обратиться в банк и подать заявку на кредит. Кредит – это деньги, которые банк одалживает клиенту. Клиент каждый месяц возвращает часть одолженных денег и еще дополнительную сумму – проценты.",
          },
          {
            question: "Что такое ипотека?",
            answer:
              "Ипотека – это кредит, который выдается для приобретения земельного участка, дома или квартиры. Банк даёт в долг большую сумму денег на длинный срок, человек живёт в новом доме или квартире и потихоньку отдаёт банку деньги с процентами.",
          },
          {
            question: "Зачем люди могут прийти в банк?",
            answer:
              "В отделении банка можно открыть счет, заказать и забрать банковскую карту, оплатить разные услуги, получить пенсию, открыть вклад, получить кредит, обменять валюту и оставить ценные вещи в банковской ячейке.",
          },
          {
            question: "Что такое электронная очередь?",
            answer:
              "Это умная компьютерная система, которая распределяет поток клиентов таким образом, чтобы не было очередей. Достаточно выбрать на экране услугу, которую ты хочешь получить, и взять талончик. Табло электронной очереди покажет, когда и к какому окошку тебе нужно подойти.",
          },
          {
            question: "Что такое банковский счёт?",
            answer:
              "Чтобы было удобно контролировать все денежные операции, банк выдает каждому клиенту специальный номер — номер банковского счета. Это похоже на код для замка: вы кладете свои деньги на счёт, закрываете его на кодовый замок и можете быть уверены, что никто не позаимствует их без вашего ведома.",
          },
        ],
      },
      {
        name: "payments",
        displayName: "Виды оплаты",
        questions: [
          {
            question: "Что такое деньги?",
            answer:
              "Средство для оплаты товаров и услуг и измерения их стоимости.",
          },
          {
            question: "Что такое наличные деньги?",
            answer:
              "Наличные деньги – это монеты и банкноты (купюры).",
          },
          {
            question: "Что такое безналичные деньги?",
            answer:
              "Это деньги, которые хранятся на банковском счете. Чтобы пользоваться ими, нужен электронный счет или банковская карта.",
          },
          {
            question: "Какие виды пластиковых карт ты знаешь? Для чего они нужны?",
            answer:
              "Банковские карты для безналичной оплаты товаров и услуг, транспортные карты, карты скидок и бонусные карты, топливные карты и подарочные карты из магазина.",
          },
          {
            question: "Что такое банкоматы и платежные терминалы?",
            answer:
              "Банкоматы и платёжные терминалы размещают в магазинах, торговых центрах и отделениях банков. Они предназначены для оплаты услуг и пополнения электронного кошелька. А вот положить деньги на карту или снять наличные можно только в банкомате.",
          },
          {
            question: "Какими способами можно оплатить товары в супермаркете?",
            answer:
              "Можно расплатиться обычными деньгами – монетами и купюрами. Можно воспользоваться платежным терминалом на кассе. Для этого нужно иметь при себе банковскую карту или смартфон, который имеет функцию оплаты.",
          },
          {
            question: "Что такое POS-терминал",
            answer:
              "POS-терминал – устройство для осуществления оплаты с помощью банковской карты. Оно может принимать разные карты: бесконтактные, с чипом, с магнитной полосой. Терминалы могут работать с со смартфонами или со смарт-часами, если на них есть бесконтактный модуль.",
          },
        ],
      },
      {
        name: "money",
        displayName: "Деньги и Валюта",
        questions: [
          {
            question: "Какие банкноты есть в России?",
            answer:
              "В настоящее время на территории России находятся в обращении купюры 9 достоинств: 5 рублей (встречается крайне редко), 10, 50,100, 200, 500, 1000, 2000, 5000.",
          },
          {
            question: "Что такое валюта?",
            answer:
              "Слово «валюта» пришло к нам из Италии. Дословно его можно перевести так: цена, стоимость, ценность. В каждой стране пользуются своими деньгами, которые называют национальной валютой. Каждая валюта имеет свои отличительные знаки: герб, рисунки и значки.",
          },
          {
            question: "Можно ли расплатиться в другой стране российскими рублями?",
            answer:
              "Если ты отправляешься в путешествие в другую страну, нужно позаботится о покупке валюты заранее, ведь может оказаться, что в этой стране не принимают к обмену рубли. Купить иностранную валюту можно в банке или обменном пункте.",
          },
          {
            question: "Почему нельзя делать и использовать фальшивые деньги?",
            answer:
              "Производство и использование фальшивых денег – это уголовное преступление. Деньги печатать может только Национальный банк страны.",
          },
          {
            question: "Кто такой нумизмат? Кто был первым нумизматом?",
            answer:
              "Древнеримский император Август был первым нумизматом – собирателем и знатоком монет разных стран.",
          },
          {
            question: "Как называется единая денежная единица в странах Европы?",
            answer:
              "Евро – валюта 19 стран, входящих в Евросоюз, и еще 12 стран мира.",
          },
          {
            question: "Для чего нужны деньги? Назови четыре функции",
            answer:
              "Деньги выполняют четыре основные функции: они являются мерой стоимости, средством обмена, средством платежа и средством накопления.",
          },
        ],
      },
      {
        name: "history",
        displayName: "История появления денег",
        questions: [
          {
            question: "Что такое натуральный обмен?",
            answer:
              "Люди обменивались между собой теми предметами, которых у них было в избытке. Например, у одних было много рыбы, а у других бананов. Вот и обменивали рыбу на бананы.",
          },
          {
            question: "Как появились самые первые бумажные деньги?",
            answer:
              "Носить много монет с собой было тяжело и опасно. Поэтому люди стали сдавать их на хранение в специальные кладовые, а в обмен получали от владельца кладовой бумажную расписку. Этой бумажкой можно было расплатиться, ведь её всегда можно было снова обменять на монеты. Так появились бумажные деньги.",
          },
          {
            question: "В каком государстве появились первые монеты?",
            answer:
              "Первые монеты стали делать в древнем государстве Лидии.",
          },
          {
            question: "Как называется лицевая сторона монеты?",
            answer:
              "Аверс или Решка. Разговорное слово «решка» образовалось от слова «решетка» – вензель, отображающий царские инициалы в виде вязи.",
          },
          {
            question: "Как называется обратная сторона монеты?",
            answer:
              "Реверс или Орёл. Орёл - это давний символ российской государственности, который изображён на оборотной стороне монеты.",
          },
          {
            question: "Почему в данных странах именно эти товары стали выступать в качестве денег: на островах Полинезии – раковины каури, в России – пушнина, на Аляске – золотой песок, у кочевых народов – скот?",
            answer:
              "Эти товары высоко ценились, их количества было достаточно, что обеспечить полноценный товарообмен.",
          },
          {
            question: "Как до появления денег люди расплачивались за товары?",
            answer:
              "Сначала люди просто обменивали одни товары на другие. Потом стали выменивать товары на ценные вещи и металлические украшения. Еще позже начали расплачиваться слитками драгоценных металлов. А потом появились первые монеты.",
          },
        ],
      },
      {
        name: "smart-economy",
        displayName: "Экономная экономика",
        questions: [
          {
            question: "Что такое сбережения?",
            answer:
              "Деньги, отложенные на будущее",
          },
          {
            question: "Что значит «экономить»?",
            answer:
              "Экономить – значит не тратить деньги на ненужные товары, бережливо относиться к расходованию воды, газа, света.",
          },
          {
            question: "Как можно экономить на коммунальных услугах?",
            answer:
              "Уходя, выключай свет. Вытащи зарядные устройства из розеток. Замени лампы накаливания на энергосберегающие или светодиодные. Выключай кран, когда чистишь зубы. Не набирай полную ванну, купайся под душем.",
          },
          {
            question: "Как можно экономить при покупке продуктов?",
            answer:
              "Чтобы не покупать в магазине лишние товары, нужно заранее составить список покупок. Обязательно нужно пообедать перед походом за покупками в супермаркет. Иначе чувство голода будет подталкивать к покупке товаров, которые в итоге окажутся ненужными.",
          },
          {
            question: "Как можно экономить при покупке одежды и товаров для дома?",
            answer:
              "Следить за акциями в магазинах, скидка на товары может существенно уменьшить общую сумму чека. Кроме того полезно пользоваться бонусными картами магазинов.",
          },
          {
            question: "Назови слова, противоположные по смыслу для этих слов: Дорогой - … Прибыль - … Доходы - …",
            answer:
              "Дорогой – дешёвый. Прибыль – убыток. Доходы - расходы",
          },
          {
            question: "Как сэкономить на транспортных расходах?",
            answer:
              "Купив проездной билет на месяц или даже год, можно существенно сократить расходы на транспорт. Если ты временно приехал в другой город, можно купить билет сразу на несколько поездок.",
          },
        ],
      },
      {
        name: "atm",
        displayName: "Как устроен банкомат",
        questions: [
          {
            question: "Для чего нужен банкомат?",
            answer:
              "Современный банкомат – это маленький филиал банка. Каждый клиент может воспользоваться здесь разными услугами: положить на счёт или снять деньги, оплатить квитанции за свет, воду и газ, перевести деньги другому клиенту, заказать выпуск банковской карты или открыть вклад.",
          },
          {
            question: "Для чего нужен платёжный терминал?",
            answer:
              "С его помощью можно пополнить счет мобильного телефона, заплатить за свет, газ, воду, интернет, оплатить услуги телевидения. Снять с карточки деньги в терминале нельзя.",
          },
          {
            question: "Кто такой инкассатор?",
            answer:
              "Инкассатор – человек, который перевозит деньги и ценности и отвечает за их сохранность. Они привозят из банка деньги для загрузки в банкомат, и забирают те купюры, которые положили клиенты на свои счета. Банкомат перезагружается, инкассаторы забирают карты, которые банкомат «проглотил», и снова возвращаются в банк.",
          },
          {
            question: "Можно ли открыть банкомат и забрать оттуда деньги?",
            answer:
              "Открыть банкомат и забрать оттуда деньги совсем непросто! Каждое устройство имеет множество ступеней защиты. При попытке взлома завоет сирена, система безопасности отправит сигнал тревоги в полицию. Внутри банковского сейфа может быть установлена система, которая при открытии дверцы злоумышленником разбрызгает чернила.",
          },
          {
            question: "Где в банкомате хранятся деньги?",
            answer:
              "Внутри банкомата находится сейф для денег. У него толстые стенки из металла и бетона практически невозможно пробить или разрезать.",
          },
          {
            question: "Что такое пин-код?",
            answer:
              "Пин-код – это секретный шифр банковской карты, который знает только её владелец или люди, которым он доверяет. Сообщать пин-код чужим людям нельзя!",
          },
          {
            question: "Сколько денег можно снять в банкомате?",
            answer:
              "Во-первых, эта сумма не может быть больше того количества денег, которые хранятся на счете карты. Бывает, что клиент хочет снять большую сумму денег, но его банк не разрешает за один раз снимать столько средств. Кроме того, может случиться, что в банкомате уже недостаточно денег, чтобы выдать нужную сумму.",
          },
        ],
      },
    ],
  },
];
