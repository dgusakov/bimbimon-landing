import { ReactElement } from "react";
import { ReactComponent as Stop } from "../img/stop-sign.svg";

export interface IQuestion {
  question: ReactElement;
  answer: ReactElement;
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
            question: <div>Что такое зарплата?</div>,
            answer: <div>Зарплата – самый распространённый вид дохода. Чтобы получать зарплату, нужно регулярно и добросовестно работать. Заработанные деньги люди получают 2 раза в месяц.</div>,
          },
          {
            question: <div>Что такое пенсия?</div>,
            answer: <div>Пенсия – это пособие, которое государство выплачивает людям, достигшим определенного возраста. Размер пенсии зависит от количества отработанных лет и размера зарплаты.</div>,
          },
          {
            question: <div>Что такое стипендия?</div>,
            answer: <div>Стипендия - денежное пособие, выдаваемое учащимся в учебном заведении.</div>,
          },
          {
            question: <div>Что такое премия?</div>,
            answer: <div>Премию можно получить за особые успехи и достижения.</div>,
          },
          {
            question: <div>Что такое сезонные доходы?</div>,
            answer: <div>Летом и осенью у дачников и тех людей, которые живут в сельской местности, могут появиться излишки фруктов, ягод и овощей. Если их продать, можно получить сезонный доход.</div>,
          },
          {
            question: <div>Что такое гонорар?</div>,
            answer: <div>Люди творческих профессий  - художники, писатели, композиторы, а ещё ученые часто получают не зарплату, а гонорар.</div>,
          },
          {
            question: <div>Что такое дополнительные доходы?</div>,
            answer: <div>В свободное от основной работы время можно заработать деньги теми умениями, которые у тебя есть. Например, на время стать таксистом. Или готовить детей к экзаменам – стать репетитором. Или заниматься творчеством и продавать свои поделки.</div>,
          },
        ],
      },
      {
        name: "family-spend",
        displayName: "Семейный бюджет - Расходы",
        questions: [
          {
            question: <div>Что такое семейный бюджет?</div>,
            answer: <div>Семейный бюджет – это большая копилка, в которую члены семьи собирают деньги (доходы), а потом распределяют их на разные траты (расходы).</div>,
          },
          {
            question: <div>Что такое коммунальные расходы?</div>,
            answer: <div>Коммунальные платежи - оплата счетов за электричество, газ и воду – это постоянные расходы.</div>,
          },
          {
            question: <div>Какие расходы называют повседневными?</div>,
            answer: <div>Большая часть повседневных расходов – траты на продукты питания и предметы гигиены. Одежду, обувь и предметы быта мы покупаем регулярно, но не так часто, как продукты.</div>,
          },
          {
            question: <div>Что такое непредвиденные расходы?</div>,
            answer: <div>Траты на лечение во время болезни можно отнести к непредвиденным расходам. К таким расходам можно отнести траты на ремонт внезапно вышедшей из строя техники.</div>,
          },
          {
            question: <div>Что такое транспортные расходы?</div>,
            answer: <div>Расходы на транспорт – это покупка проездных билетов и оплата бензина для личного авто.</div>,
          },
          {
            question: <div>Куда тратятся деньги из семейного бюджета?</div>,
            answer: <div>Ежемесячно деньги из семейного бюджета тратятся на разные цели. Вот основные виды расходов: постоянные, повседневные (расходы на жизнь), сезонные, непредвиденные и расходы на будущее.</div>,
          },
          {
            question: <div>Что такое расходы на будущее?</div>,
            answer: <div>Это деньги, которые мы откладываем на какие-то свои цели. Например, на ремонт, покупку нового авто или свадьбу детей.</div>,
          },
        ],
      },
      {
        name: "bank",
        displayName: "Банк",
        questions: [
          {
            question: <div>Что такое банк?</div>,
            answer: <div>Банк – это предприятие, которое проводит разные операции с деньгами. Здесь работают люди разных профессий: экономисты, бухгалтеры, кассиры, инкассаторы, консультанты и охранники. Управляет работой всего банка председатель, а в каждом отделении у него есть руководители-помощники.</div>,
          },
          {
            question: <div>Что такое вклад?</div>,
            answer: <div>Вклад – это способ увеличить свои деньги. Происходит это так: ты отдаешь в банк свои деньги на определенный срок. Банк пользуется твоими деньгами и назначает за это вознаграждение (проценты). По истечении срока можно забрать и вложенные деньги, и проценты.</div>,
          },
          {
            question: <div>Что такое кредит?</div>,
            answer: <div>Бывают ситуации, когда человеку нужно совершить крупную покупку, а накопленных денег не хватает. В этом случае можно обратиться в банк и подать заявку на кредит. Кредит – это деньги, которые банк одалживает клиенту. Клиент каждый месяц возвращает часть одолженных денег и еще дополнительную сумму – проценты.</div>,
          },
          {
            question: <div>Что такое ипотека?</div>,
            answer: <div>Ипотека – это кредит, который выдается для приобретения земельного участка, дома или квартиры. Банк даёт в долг большую сумму денег на длинный срок, человек живёт в новом доме или квартире и потихоньку отдаёт банку деньги с процентами.</div>,
          },
          {
            question: <div>Зачем люди могут прийти в банк?</div>,
            answer: <div>В отделении банка можно открыть счет, заказать и забрать банковскую карту, оплатить разные услуги, получить пенсию, открыть вклад, получить кредит, обменять валюту и оставить ценные вещи в банковской ячейке.</div>,
          },
          {
            question: <div>Что такое электронная очередь?</div>,
            answer: <div>Это умная компьютерная система, которая распределяет поток клиентов таким образом, чтобы не было очередей. Достаточно выбрать на экране услугу, которую ты хочешь получить, и взять талончик. Табло электронной очереди покажет, когда и к какому окошку тебе нужно подойти.</div>,
          },
          {
            question: <div>Что такое банковский счёт?</div>,
            answer: <div>Чтобы было удобно контролировать все денежные операции, банк выдает каждому клиенту специальный номер — номер банковского счета. Это похоже на код для замка: вы кладете свои деньги на счёт, закрываете его на кодовый замок и можете быть уверены, что никто не позаимствует их без вашего ведома.</div>,
          },
        ],
      },
      {
        name: "payments",
        displayName: "Виды оплаты",
        questions: [
          {
            question: <div>Что такое деньги?</div>,
            answer: <div>Средство для оплаты товаров и услуг и измерения их стоимости.</div>,
          },
          {
            question: <div>Что такое наличные деньги?</div>,
            answer: <div>Наличные деньги – это монеты и банкноты (купюры).</div>,
          },
          {
            question: <div>Что такое безналичные деньги?</div>,
            answer: <div>Это деньги, которые хранятся на банковском счете. Чтобы пользоваться ими, нужен электронный счет или банковская карта.</div>,
          },
          {
            question: <div>Какие виды пластиковых карт ты знаешь? Для чего они нужны?</div>,
            answer: <div>Банковские карты для безналичной оплаты товаров и услуг, транспортные карты, карты скидок и бонусные карты, топливные карты и подарочные карты из магазина.</div>,
          },
          {
            question: <div>Что такое банкоматы и платежные терминалы?</div>,
            answer: <div>Банкоматы и платёжные терминалы размещают в магазинах, торговых центрах и отделениях банков. Они предназначены для оплаты услуг и пополнения электронного кошелька. А вот положить деньги на карту или снять наличные можно только в банкомате.</div>,
          },
          {
            question: <div>Какими способами можно оплатить товары в супермаркете?</div>,
            answer: <div>Можно расплатиться обычными деньгами – монетами и купюрами. Можно воспользоваться платежным терминалом на кассе. Для этого нужно иметь при себе банковскую карту или смартфон, который имеет функцию оплаты.</div>,
          },
          {
            question: <div>Что такое POS-терминал</div>,
            answer: <div>POS-терминал – устройство для осуществления оплаты с помощью банковской карты. Оно может принимать разные карты: бесконтактные, с чипом, с магнитной полосой. Терминалы могут работать со смартфонами или со смарт-часами, если на них есть бесконтактный модуль.</div>,
          },
        ],
      },
      {
        name: "money",
        displayName: "Деньги и Валюта",
        questions: [
          {
            question: <div>Какие банкноты есть в России?</div>,
            answer: <div>В настоящее время на территории России находятся в обращении купюры 9 достоинств: 5 рублей (встречается крайне редко), 10, 50,100, 200, 500, 1000, 2000, 5000.</div>,
          },
          {
            question: <div>Что такое валюта?</div>,
            answer: <div>Слово «валюта» пришло к нам из Италии. Дословно его можно перевести так: цена, стоимость, ценность. В каждой стране пользуются своими деньгами, которые называют национальной валютой. Каждая валюта имеет свои отличительные знаки: герб, рисунки и значки.</div>,
          },
          {
            question: <div>Можно ли расплатиться в другой стране российскими рублями?</div>,
            answer: <div>Если ты отправляешься в путешествие в другую страну, нужно позаботится о покупке валюты заранее, ведь может оказаться, что в этой стране не принимают к обмену рубли. Купить иностранную валюту можно в банке или обменном пункте.</div>,
          },
          {
            question: <div>Почему нельзя делать и использовать фальшивые деньги?</div>,
            answer: <div>Производство и использование фальшивых денег – это уголовное преступление. Деньги печатать может только Национальный банк страны.</div>,
          },
          {
            question: <div>Кто такой нумизмат? Кто был первым нумизматом?</div>,
            answer: <div>Древнеримский император Август был первым нумизматом – собирателем и знатоком монет разных стран.</div>,
          },
          {
            question: <div>Как называется единая денежная единица в странах Европы?</div>,
            answer: <div>Евро – валюта 19 стран, входящих в Евросоюз, и еще 12 стран мира.</div>,
          },
          {
            question: <div>Для чего нужны деньги? Назови четыре функции</div>,
            answer: <div>Деньги выполняют четыре основные функции: они являются мерой стоимости, средством обмена, средством платежа и средством накопления.</div>,
          },
        ],
      },
      {
        name: "history",
        displayName: "История появления денег",
        questions: [
          {
            question: <div>Что такое натуральный обмен?</div>,
            answer: <div>Люди обменивались между собой теми предметами, которых у них было в избытке. Например, у одних было много рыбы, а у других бананов. Вот и обменивали рыбу на бананы.</div>,
          },
          {
            question: <div>Как появились самые первые бумажные деньги?</div>,
            answer: <div>Носить много монет с собой было тяжело и опасно. Поэтому люди стали сдавать их на хранение в специальные кладовые, а в обмен получали от владельца кладовой бумажную расписку. Этой бумажкой можно было расплатиться, ведь её всегда можно было снова обменять на монеты. Так появились бумажные деньги.</div>,
          },
          {
            question: <div>В каком государстве появились первые монеты?</div>,
            answer: <div>Первые монеты стали делать в древнем государстве Лидии.</div>,
          },
          {
            question: <div>Как называется лицевая сторона монеты?</div>,
            answer: <div>Аверс или Решка. Разговорное слово «решка» образовалось от слова «решетка» – вензель, отображающий царские инициалы в виде вязи.</div>,
          },
          {
            question: <div>Как называется обратная сторона монеты?</div>,
            answer: <div>Реверс или Орёл. Орёл - это давний символ российской государственности, который изображён на оборотной стороне монеты.</div>,
          },
          {
            question: <div>Почему в данных странах именно эти товары стали выступать в качестве денег: на островах Полинезии – раковины каури, в России – пушнина, на Аляске – золотой песок, у кочевых народов – скот?</div>,
            answer: <div>Эти товары высоко ценились, их количества было достаточно, что обеспечить полноценный товарообмен.</div>,
          },
          {
            question: <div>Как до появления денег люди расплачивались за товары?</div>,
            answer: <div>Сначала люди просто обменивали одни товары на другие. Потом стали выменивать товары на ценные вещи и металлические украшения. Еще позже начали расплачиваться слитками драгоценных металлов. А потом появились первые монеты.</div>,
          },
        ],
      },
      {
        name: "smart-economy",
        displayName: "Экономная экономика",
        questions: [
          {
            question: <div>Что такое сбережения?</div>,
            answer: <div>Деньги, отложенные на будущее</div>,
          },
          {
            question: <div>Что значит «экономить»?</div>,
            answer: <div>Экономить – значит не тратить деньги на ненужные товары, бережливо относиться к расходованию воды, газа, света.</div>,
          },
          {
            question: <div>Как можно экономить на коммунальных услугах?</div>,
            answer: <div>Уходя, выключай свет. Вытащи зарядные устройства из розеток. Замени лампы накаливания на энергосберегающие или светодиодные. Выключай кран, когда чистишь зубы. Не набирай полную ванну, купайся под душем.</div>,
          },
          {
            question: <div>Как можно экономить при покупке продуктов?</div>,
            answer: <div>Чтобы не покупать в магазине лишние товары, нужно заранее составить список покупок. Обязательно нужно пообедать перед походом за покупками в супермаркет. Иначе чувство голода будет подталкивать к покупке товаров, которые в итоге окажутся ненужными.</div>,
          },
          {
            question: <div>Как можно экономить при покупке одежды и товаров для дома?</div>,
            answer: <div>Следить за акциями в магазинах, скидка на товары может существенно уменьшить общую сумму чека. Кроме того полезно пользоваться бонусными картами магазинов.</div>,
          },
          {
            question: <div>Назови слова, противоположные по смыслу для этих слов: Дорогой - … Прибыль - … Доходы - …</div>,
            answer: <div>Дорогой – дешёвый. Прибыль – убыток. Доходы - расходы</div>,
          },
          {
            question: <div>Как сэкономить на транспортных расходах?</div>,
            answer: <div>Купив проездной билет на месяц или даже год, можно существенно сократить расходы на транспорт. Если ты временно приехал в другой город, можно купить билет сразу на несколько поездок.</div>,
          },
        ],
      },
      {
        name: "atm",
        displayName: "Как устроен банкомат",
        questions: [
          {
            question: <div>Для чего нужен банкомат?</div>,
            answer: <div>Современный банкомат – это маленький филиал банка. Каждый клиент может воспользоваться здесь разными услугами: положить на счёт или снять деньги, оплатить квитанции за свет, воду и газ, перевести деньги другому клиенту, заказать выпуск банковской карты или открыть вклад.</div>,
          },
          {
            question: <div>Для чего нужен платёжный терминал?</div>,
            answer: <div>С его помощью можно пополнить счет мобильного телефона, заплатить за свет, газ, воду, интернет, оплатить услуги телевидения. Снять с карточки деньги в терминале нельзя.</div>,
          },
          {
            question: <div>Кто такой инкассатор?</div>,
            answer: <div>Инкассатор – человек, который перевозит деньги и ценности и отвечает за их сохранность. Они привозят из банка деньги для загрузки в банкомат, и забирают те купюры, которые положили клиенты на свои счета. Банкомат перезагружается, инкассаторы забирают карты, которые банкомат «проглотил», и снова возвращаются в банк.</div>,
          },
          {
            question: <div>Можно ли открыть банкомат и забрать оттуда деньги?</div>,
            answer: <div>Открыть банкомат и забрать оттуда деньги совсем непросто! Каждое устройство имеет множество ступеней защиты. При попытке взлома завоет сирена, система безопасности отправит сигнал тревоги в полицию. Внутри банковского сейфа может быть установлена система, которая при открытии дверцы злоумышленником разбрызгает чернила.</div>,
          },
          {
            question: <div>Где в банкомате хранятся деньги?</div>,
            answer: <div>Внутри банкомата находится сейф для денег. У него толстые стенки из металла и бетона практически невозможно пробить или разрезать.</div>,
          },
          {
            question: <div>Что такое пин-код?</div>,
            answer: <div>Пин-код – это секретный шифр банковской карты, который знает только её владелец или люди, которым он доверяет. Сообщать пин-код чужим людям нельзя!</div>,
          },
          {
            question: <div>Сколько денег можно снять в банкомате?</div>,
            answer: <div>Во-первых, эта сумма не может быть больше того количества денег, которые хранятся на счете карты. Бывает, что клиент хочет снять большую сумму денег, но его банк не разрешает за один раз снимать столько средств. Кроме того, может случиться, что в банкомате уже недостаточно денег, чтобы выдать нужную сумму.</div>,
          },
        ],
      },
    ],
  },
  {
    name: "cars",
    displayName: "Автомобили",
    topics: [
      {
        name: "to-be-done",
        displayName: "Вопросы в разработке",
        questions: [
          {
            question: <div>
              <div className="mb-3">Что означает этот знак?</div>
              <Stop className="Question-img"/>
              </div>,
            answer: <div>Знак <strong>"Движение без остановки запрещенно"</strong> означает, что водитель обязан остановится на уровне установки этого знакак или стоп-линии при наличии таковой, и уступить дорогу остальным участникам движения</div>,
          },
        ],
      },
    ],
  },
];
