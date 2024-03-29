import { ReactElement } from "react";
import { ReactComponent as Sign11 } from "./img/RU_road_sign_1.1.svg";
import { ReactComponent as Sign12 } from "./img/RU_road_sign_1.2.svg";
import { ReactComponent as Sign1111 } from "./img/RU_road_sign_1.11.1.svg";
import { ReactComponent as Sign1112 } from "./img/RU_road_sign_1.11.2.svg";
import { ReactComponent as Sign1121 } from "./img/RU_road_sign_1.12.1.svg";
import { ReactComponent as Sign1122 } from "./img/RU_road_sign_1.12.2.svg";
import { ReactComponent as Sign122 } from "./img/RU_road_sign_1.22.svg";
import { ReactComponent as Sign123 } from "./img/RU_road_sign_1.23.svg";
import { ReactComponent as Sign21 } from "./img/RU_road_sign_2.1.svg";
import { ReactComponent as Sign24 } from "./img/RU_road_sign_2.4.svg";
import { ReactComponent as Sign31 } from "./img/RU_road_sign_3.1.svg";
import { ReactComponent as Sign32 } from "./img/RU_road_sign_3.2.svg";
import { ReactComponent as Sign320 } from "./img/RU_road_sign_3.20.svg";
import { ReactComponent as Sign32460 } from "./img/RU_road_sign_3.24-60.svg";
import { ReactComponent as Sign5155 } from "./img/RU_road_sign_5.15.5.svg";
import { ReactComponent as Sign5191 } from "./img/RU_road_sign_5.19.1.svg";
import { ReactComponent as Sign5192 } from "./img/RU_road_sign_5.19.2.svg";

export interface IQuestion {
  topicName: string;
  questionName: string;
  id: string;
  question: ReactElement;
  answer: ReactElement;
}

export interface ITopic {
  id: any;
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
    displayName: "Откуда берутся деньги?",
    topics: [
      {
        id: "family-income",
        name: "family-income",
        displayName: "Семейный бюджет - Доходы",
        questions: [
          {
            topicName: "family-income",
            questionName: "question-1",
            id: "question-1",
            question: <div>Что такое зарплата?</div>,
            answer: (
              <div>
                <strong>Зарплата</strong> – самый распространённый вид дохода.
                Чтобы получать зарплату, нужно регулярно и добросовестно
                работать. Заработанные деньги люди получают 2 раза в месяц.
              </div>
            ),
          },
          {
            topicName: "family-income",
            questionName: "question-2",
            id: "question-2",
            question: <div>Что такое пенсия?</div>,
            answer: (
              <div>
                <strong>Пенсия</strong> – это пособие, которое государство
                выплачивает людям, достигшим определенного возраста. Размер
                пенсии зависит от количества отработанных лет и размера
                зарплаты.
              </div>
            ),
          },
          {
            topicName: "family-income",
            questionName: "question-3",
            id: "question-3",
            question: <div>Что такое стипендия?</div>,
            answer: (
              <div>
                <strong>Стипендия</strong> - денежное пособие, выдаваемое
                учащимся в учебном заведении.
              </div>
            ),
          },
          {
            topicName: "family-income",
            questionName: "question-4",
            id: "question-4",
            question: <div>Что такое премия?</div>,
            answer: (
              <div>
                <strong>Премия</strong> - это деньги, которые платят за особые
                успехи и достижения.
              </div>
            ),
          },
          {
            topicName: "family-income",
            questionName: "question-5",
            id: "question-5",
            question: <div>Что такое сезонные доходы?</div>,
            answer: (
              <div>
                Летом и осенью у дачников и тех людей, которые живут в сельской
                местности, могут появиться излишки фруктов, ягод и овощей. Если
                их продать, можно получить сезонный доход.
              </div>
            ),
          },
          {
            topicName: "family-income",
            questionName: "question-6",
            id: "question-6",
            question: <div>Что такое гонорар?</div>,
            answer: (
              <div>
                Люди творческих профессий - художники, писатели, композиторы, а
                ещё ученые часто получают не зарплату, а гонорар.
              </div>
            ),
          },
          {
            topicName: "family-income",
            questionName: "question-7",
            id: "question-7",
            question: <div>Что такое дополнительные доходы?</div>,
            answer: (
              <div>
                В свободное от основной работы время можно заработать деньги
                теми умениями, которые у тебя есть. Например, на время стать
                таксистом. Или готовить детей к экзаменам – стать репетитором.
                Или заниматься творчеством и продавать свои поделки.
              </div>
            ),
          },
        ],
      },
      {
        id: "family-spend",
        name: "family-spend",
        displayName: "Семейный бюджет - Расходы",
        questions: [
          {
            topicName: "family-spend",
            questionName: "question-8",
            id: "question-8",
            question: <div>Что такое семейный бюджет?</div>,
            answer: (
              <div>
                Семейный бюджет – это большая копилка, в которую члены семьи
                собирают деньги (доходы), а потом распределяют их на разные
                траты (расходы).
              </div>
            ),
          },
          {
            topicName: "family-spend",
            questionName: "question-9",
            id: "question-9",
            question: <div>Что такое коммунальные расходы?</div>,
            answer: (
              <div>
                Коммунальные платежи - оплата счетов за электричество, газ и
                воду – это постоянные расходы.
              </div>
            ),
          },
          {
            topicName: "family-spend",
            questionName: "question-10",
            id: "question-10",
            question: <div>Какие расходы называют повседневными?</div>,
            answer: (
              <div>
                Большая часть повседневных расходов – траты на продукты питания
                и предметы гигиены. Одежду, обувь и предметы быта мы покупаем
                регулярно, но не так часто, как продукты.
              </div>
            ),
          },
          {
            topicName: "family-spend",
            questionName: "question-11",
            id: "question-11",
            question: <div>Что такое непредвиденные расходы?</div>,
            answer: (
              <div>
                Траты на лечение во время болезни можно отнести к непредвиденным
                расходам. К таким расходам можно отнести траты на ремонт
                внезапно вышедшей из строя техники.
              </div>
            ),
          },
          {
            topicName: "family-spend",
            questionName: "question-12",
            id: "question-12",
            question: <div>Что такое транспортные расходы?</div>,
            answer: (
              <div>
                Расходы на транспорт – это покупка проездных билетов и оплата
                бензина для личного авто.
              </div>
            ),
          },
          {
            topicName: "family-spend",
            questionName: "question-13",
            id: "question-13",
            question: <div>Куда тратятся деньги из семейного бюджета?</div>,
            answer: (
              <div>
                Ежемесячно деньги из семейного бюджета тратятся на разные цели.
                Вот основные виды расходов: постоянные, повседневные (расходы на
                жизнь), сезонные, непредвиденные и расходы на будущее.
              </div>
            ),
          },
          {
            topicName: "family-spend",
            questionName: "question-14",
            id: "question-14",
            question: <div>Что такое расходы на будущее?</div>,
            answer: (
              <div>
                Это деньги, которые мы откладываем на какие-то свои цели.
                Например, на ремонт, покупку нового авто или свадьбу детей.
              </div>
            ),
          },
        ],
      },
      {
        id: "bank",
        name: "bank",
        displayName: "Банк",
        questions: [
          {
            topicName: "bank",
            questionName: "question-15",
            id: "question-15",
            question: <div>Что такое банк?</div>,
            answer: (
              <div>
                Банк – это предприятие, которое проводит разные операции с
                деньгами. Здесь работают люди разных профессий: экономисты,
                бухгалтеры, кассиры, инкассаторы, консультанты и охранники.
                Управляет работой всего банка председатель, а в каждом отделении
                у него есть руководители-помощники.
              </div>
            ),
          },
          {
            topicName: "bank",
            questionName: "question-16",
            id: "question-16",
            question: <div>Что такое вклад?</div>,
            answer: (
              <div>
                Вклад – это способ увеличить свои деньги. Происходит это так: ты
                отдаешь в банк свои деньги на определенный срок. Банк пользуется
                твоими деньгами и назначает за это вознаграждение (проценты). По
                истечении срока можно забрать и вложенные деньги, и проценты.
              </div>
            ),
          },
          {
            topicName: "bank",
            questionName: "question-17",
            id: "question-17",
            question: <div>Что такое кредит?</div>,
            answer: (
              <div>
                Бывают ситуации, когда человеку нужно совершить крупную покупку,
                а накопленных денег не хватает. В этом случае можно обратиться в
                банк и подать заявку на кредит. Кредит – это деньги, которые
                банк одалживает клиенту. Клиент каждый месяц возвращает часть
                одолженных денег и еще дополнительную сумму – проценты.
              </div>
            ),
          },
          {
            topicName: "bank",
            questionName: "question-18",
            id: "question-18",
            question: <div>Что такое ипотека?</div>,
            answer: (
              <div>
                Ипотека – это кредит, который выдается для приобретения
                земельного участка, дома или квартиры. Банк даёт в долг большую
                сумму денег на длинный срок, человек живёт в новом доме или
                квартире и потихоньку отдаёт банку деньги с процентами.
              </div>
            ),
          },
          {
            topicName: "bank",
            questionName: "question-19",
            id: "question-19",
            question: <div>Зачем люди могут прийти в банк?</div>,
            answer: (
              <div>
                В отделении банка можно открыть счет, заказать и забрать
                банковскую карту, оплатить разные услуги, получить пенсию,
                открыть вклад, получить кредит, обменять валюту и оставить
                ценные вещи в банковской ячейке.
              </div>
            ),
          },
          {
            topicName: "bank",
            questionName: "question-20",
            id: "question-20",
            question: <div>Что такое электронная очередь?</div>,
            answer: (
              <div>
                Это умная компьютерная система, которая распределяет поток
                клиентов таким образом, чтобы не было очередей. Достаточно
                выбрать на экране услугу, которую ты хочешь получить, и взять
                талончик. Табло электронной очереди покажет, когда и к какому
                окошку тебе нужно подойти.
              </div>
            ),
          },
          {
            topicName: "bank",
            questionName: "question-21",
            id: "question-21",
            question: <div>Что такое банковский счёт?</div>,
            answer: (
              <div>
                Чтобы было удобно контролировать все денежные операции, банк
                выдает каждому клиенту специальный номер — номер банковского
                счета. Это похоже на код для замка: вы кладете свои деньги на
                счёт, закрываете его на кодовый замок и можете быть уверены, что
                никто не позаимствует их без вашего ведома.
              </div>
            ),
          },
        ],
      },
      {
        id: "payments",
        name: "payments",
        displayName: "Виды оплаты",
        questions: [
          {
            topicName: "payments",
            questionName: "question-22",
            id: "question-22",
            question: <div>Что такое деньги?</div>,
            answer: (
              <div>
                Средство для оплаты товаров и услуг и измерения их стоимости.
              </div>
            ),
          },
          {
            topicName: "payments",
            questionName: "question-23",
            id: "question-23",
            question: <div>Что такое наличные деньги?</div>,
            answer: (
              <div>Наличные деньги – это монеты и банкноты (купюры).</div>
            ),
          },
          {
            topicName: "payments",
            questionName: "question-24",
            id: "question-24",
            question: <div>Что такое безналичные деньги?</div>,
            answer: (
              <div>
                Это деньги, которые хранятся на банковском счете. Чтобы
                пользоваться ими, нужен электронный счет или банковская карта.
              </div>
            ),
          },
          {
            topicName: "payments",
            questionName: "question-25",
            id: "question-25",
            question: (
              <div>
                Какие виды пластиковых карт ты знаешь? Для чего они нужны?
              </div>
            ),
            answer: (
              <div>
                Банковские карты для безналичной оплаты товаров и услуг,
                транспортные карты, карты скидок и бонусные карты, топливные
                карты и подарочные карты из магазина.
              </div>
            ),
          },
          {
            topicName: "payments",
            questionName: "question-26",
            id: "question-26",
            question: <div>Что такое банкоматы и платежные терминалы?</div>,
            answer: (
              <div>
                Банкоматы и платёжные терминалы размещают в магазинах, торговых
                центрах и отделениях банков. Они предназначены для оплаты услуг
                и пополнения электронного кошелька. А вот положить деньги на
                карту или снять наличные можно только в банкомате.
              </div>
            ),
          },
          {
            topicName: "payments",
            questionName: "question-27",
            id: "question-27",
            question: (
              <div>Какими способами можно оплатить товары в супермаркете?</div>
            ),
            answer: (
              <div>
                Можно расплатиться обычными деньгами – монетами и купюрами.
                Можно воспользоваться платежным терминалом на кассе. Для этого
                нужно иметь при себе банковскую карту или смартфон, который
                имеет функцию оплаты.
              </div>
            ),
          },
          {
            topicName: "payments",
            questionName: "question-28",
            id: "question-28",
            question: <div>Что такое POS-терминал</div>,
            answer: (
              <div>
                POS-терминал – устройство для осуществления оплаты с помощью
                банковской карты. Оно может принимать разные карты:
                бесконтактные, с чипом, с магнитной полосой. Терминалы могут
                работать со смартфонами или со смарт-часами, если на них есть
                бесконтактный модуль.
              </div>
            ),
          },
        ],
      },
      {
        id: 'money',
        name: "money",
        displayName: "Деньги и Валюта",
        questions: [
          {
            topicName: "money",
            questionName: "question-29",
            id: "question-29",
            question: <div>Какие банкноты есть в России?</div>,
            answer: (
              <div>
                В настоящее время на территории России находятся в обращении
                купюры 9 достоинств: 5 рублей (встречается крайне редко), 10,
                50, 100, 200, 500, 1000, 2000, 5000.
              </div>
            ),
          },
          {
            topicName: "money",
            questionName: "question-30",
            id: "question-30",
            question: <div>Что такое валюта?</div>,
            answer: (
              <div>
                Слово «валюта» пришло к нам из Италии. Дословно его можно
                перевести так: цена, стоимость, ценность. В каждой стране
                пользуются своими деньгами, которые называют национальной
                валютой. Каждая валюта имеет свои отличительные знаки: герб,
                рисунки и значки.
              </div>
            ),
          },
          {
            topicName: "money",
            questionName: "question-31",
            id: "question-31",
            question: (
              <div>
                Можно ли расплатиться в другой стране российскими рублями?
              </div>
            ),
            answer: (
              <div>
                Если ты отправляешься в путешествие в другую страну, нужно
                позаботится о покупке валюты заранее, ведь может оказаться, что
                в этой стране не принимают к обмену рубли. Купить иностранную
                валюту можно в банке или обменном пункте.
              </div>
            ),
          },
          {
            topicName: "money",
            questionName: "question-32",
            id: "question-32",
            question: (
              <div>Почему нельзя делать и использовать фальшивые деньги?</div>
            ),
            answer: (
              <div>
                Производство и использование фальшивых денег – это уголовное
                преступление. Деньги печатать может только Национальный банк
                страны.
              </div>
            ),
          },
          {
            topicName: "money",
            questionName: "question-33",
            id: "question-33",
            question: <div>Кто такой нумизмат? Кто был первым нумизматом?</div>,
            answer: (
              <div>
                Древнеримский император Август был первым нумизматом –
                собирателем и знатоком монет разных стран.
              </div>
            ),
          },
          {
            topicName: "money",
            questionName: "question-34",
            id: "question-34",
            question: (
              <div>
                Как называется единая денежная единица в странах Европы?
              </div>
            ),
            answer: (
              <div>
                Евро – валюта 19 стран, входящих в Евросоюз, и еще 12 стран
                мира.
              </div>
            ),
          },
          {
            topicName: "money",
            questionName: "question-35",
            id: "question-35",
            question: <div>Для чего нужны деньги? Назови четыре функции</div>,
            answer: (
              <div>
                Деньги выполняют четыре основные функции: они являются мерой
                стоимости, средством обмена, средством платежа и средством
                накопления.
              </div>
            ),
          },
        ],
      },
      {
        id: 'history',
        name: "history",
        displayName: "История появления денег",
        questions: [
          {
            topicName: "history",
            questionName: "question-36",
            id: "question-36",
            question: <div>Что такое натуральный обмен?</div>,
            answer: (
              <div>
                Люди обменивались между собой теми предметами, которых у них
                было в избытке. Например, у одних было много рыбы, а у других
                бананов. Вот и обменивали рыбу на бананы.
              </div>
            ),
          },
          {
            topicName: "history",
            questionName: "question-37",
            id: "question-37",
            question: <div>Как появились самые первые бумажные деньги?</div>,
            answer: (
              <div>
                Носить много монет с собой было тяжело и опасно. Поэтому люди
                стали сдавать их на хранение в специальные кладовые, а в обмен
                получали от владельца кладовой бумажную расписку. Этой бумажкой
                можно было расплатиться, ведь её всегда можно было снова
                обменять на монеты. Так появились бумажные деньги.
              </div>
            ),
          },
          {
            topicName: "history",
            questionName: "question-38",
            id: "question-38",
            question: <div>В каком государстве появились первые монеты?</div>,
            answer: (
              <div>Первые монеты стали делать в древнем государстве Лидии.</div>
            ),
          },
          {
            topicName: "history",
            questionName: "question-39",
            id: "question-39",
            question: <div>Как называется лицевая сторона монеты?</div>,
            answer: (
              <div>
                Аверс или Решка. Разговорное слово «решка» образовалось от слова
                «решетка» – вензель, отображающий царские инициалы в виде вязи.
              </div>
            ),
          },
          {
            topicName: "history",
            questionName: "question-40",
            id: "question-40",
            question: <div>Как называется обратная сторона монеты?</div>,
            answer: (
              <div>
                Реверс или Орёл. Орёл - это давний символ российской
                государственности, который изображён на оборотной стороне
                монеты.
              </div>
            ),
          },
          {
            topicName: "history",
            questionName: "question-41",
            id: "question-41",
            question: (
              <div>
                Почему в данных странах именно эти товары стали выступать в
                качестве денег: на островах Полинезии – раковины каури, в России
                – пушнина, на Аляске – золотой песок, у кочевых народов – скот?
              </div>
            ),
            answer: (
              <div>
                Эти товары высоко ценились, их количества было достаточно, что
                обеспечить полноценный товарообмен.
              </div>
            ),
          },
          {
            topicName: "history",
            questionName: "question-42",
            id: "question-42",
            question: (
              <div>Как до появления денег люди расплачивались за товары?</div>
            ),
            answer: (
              <div>
                Сначала люди просто обменивали одни товары на другие. Потом
                стали выменивать товары на ценные вещи и металлические
                украшения. Еще позже начали расплачиваться слитками драгоценных
                металлов. А потом появились первые монеты.
              </div>
            ),
          },
        ],
      },
      {
        id: 'smart-economy',
        name: "smart-economy",
        displayName: "Экономная экономика",
        questions: [
          {
            topicName: "smart-economy",
            questionName: "question-43",
            id: "question-43",
            question: <div>Что такое сбережения?</div>,
            answer: <div>Деньги, отложенные на будущее</div>,
          },
          {
            topicName: "smart-economy",
            questionName: "question-44",
            id: "question-44",
            question: <div>Что значит «экономить»?</div>,
            answer: (
              <div>
                Экономить – значит не тратить деньги на ненужные товары,
                бережливо относиться к расходованию воды, газа, света.
              </div>
            ),
          },
          {
            topicName: "smart-economy",
            questionName: "question-45",
            id: "question-45",
            question: <div>Как можно экономить на коммунальных услугах?</div>,
            answer: (
              <div>
                Уходя, выключай свет. Вытащи зарядные устройства из розеток.
                Замени лампы накаливания на энергосберегающие или светодиодные.
                Выключай кран, когда чистишь зубы. Не набирай полную ванну,
                купайся под душем.
              </div>
            ),
          },
          {
            topicName: "smart-economy",
            questionName: "question-46",
            id: "question-46",
            question: <div>Как можно экономить при покупке продуктов?</div>,
            answer: (
              <div>
                Чтобы не покупать в магазине лишние товары, нужно заранее
                составить список покупок. Обязательно нужно пообедать перед
                походом за покупками в супермаркет. Иначе чувство голода будет
                подталкивать к покупке товаров, которые в итоге окажутся
                ненужными.
              </div>
            ),
          },
          {
            topicName: "smart-economy",
            questionName: "question-47",
            id: "question-47",
            question: (
              <div>
                Как можно экономить при покупке одежды и товаров для дома?
              </div>
            ),
            answer: (
              <div>
                Следить за акциями в магазинах, скидка на товары может
                существенно уменьшить общую сумму чека. Кроме того полезно
                пользоваться бонусными картами магазинов.
              </div>
            ),
          },
          {
            topicName: "smart-economy",
            questionName: "question-48",
            id: "question-48",
            question: (
              <div>
                Назови слова, противоположные по смыслу для этих слов:
                <br />
                Дорогой - …<br />
                Прибыль - …<br />
                Доходы - …
              </div>
            ),
            answer: (
              <div>
                Дорогой – дешёвый.
                <br />
                Прибыль – убыток.
                <br />
                Доходы - расходы
              </div>
            ),
          },
          {
            topicName: "smart-economy",
            questionName: "question-49",
            id: "question-49",
            question: <div>Как сэкономить на транспортных расходах?</div>,
            answer: (
              <div>
                Купив проездной билет на месяц или даже год, можно существенно
                сократить расходы на транспорт. Если ты временно приехал в
                другой город, можно купить билет сразу на несколько поездок.
              </div>
            ),
          },
        ],
      },
      {
        id: 'atm',
        name: "atm",
        displayName: "Как устроен банкомат",
        questions: [
          {
            topicName: "atm",
            questionName: "question-50",
            id: "question-50",
            question: <div>Для чего нужен банкомат?</div>,
            answer: (
              <div>
                Современный банкомат – это маленький филиал банка. Каждый клиент
                может воспользоваться здесь разными услугами: положить на счёт
                или снять деньги, оплатить квитанции за свет, воду и газ,
                перевести деньги другому клиенту, заказать выпуск банковской
                карты или открыть вклад.
              </div>
            ),
          },
          {
            topicName: "atm",
            questionName: "question-51",
            id: "question-51",
            question: <div>Для чего нужен платёжный терминал?</div>,
            answer: (
              <div>
                С его помощью можно пополнить счет мобильного телефона,
                заплатить за свет, газ, воду, интернет, оплатить услуги
                телевидения. Снять с карточки деньги в терминале нельзя.
              </div>
            ),
          },
          {
            topicName: "atm",
            questionName: "question-52",
            id: "question-52",
            question: <div>Кто такой инкассатор?</div>,
            answer: (
              <div>
                Инкассатор – человек, который перевозит деньги и ценности и
                отвечает за их сохранность. Они привозят из банка деньги для
                загрузки в банкомат, и забирают те купюры, которые положили
                клиенты на свои счета. Банкомат перезагружается, инкассаторы
                забирают карты, которые банкомат «проглотил», и снова
                возвращаются в банк.
              </div>
            ),
          },
          {
            topicName: "atm",
            questionName: "question-53",
            id: "question-53",
            question: (
              <div>Можно ли открыть банкомат и забрать оттуда деньги?</div>
            ),
            answer: (
              <div>
                Открыть банкомат и забрать оттуда деньги совсем непросто! Каждое
                устройство имеет множество ступеней защиты. При попытке взлома
                завоет сирена, система безопасности отправит сигнал тревоги в
                полицию. Внутри банковского сейфа может быть установлена
                система, которая при открытии дверцы злоумышленником разбрызгает
                чернила.
              </div>
            ),
          },
          {
            topicName: "atm",
            questionName: "question-54",
            id: "question-54",
            question: <div>Где в банкомате хранятся деньги?</div>,
            answer: (
              <div>
                Внутри банкомата находится сейф для денег. У него толстые стенки
                из металла и бетона, которые практически невозможно пробить или
                разрезать.
              </div>
            ),
          },
          {
            topicName: "atm",
            questionName: "question-55",
            id: "question-55",
            question: <div>Что такое пин-код?</div>,
            answer: (
              <div>
                Пин-код – это секретный шифр банковской карты, который знает
                только её владелец или люди, которым он доверяет. Сообщать
                пин-код чужим людям нельзя!
              </div>
            ),
          },
          {
            topicName: "atm",
            questionName: "question-56",
            id: "question-56",
            question: <div>Сколько денег можно снять в банкомате?</div>,
            answer: (
              <div>
                Во-первых, эта сумма не может быть больше того количества денег,
                которые хранятся на счете карты. Бывает, что клиент хочет снять
                большую сумму денег, но его банк не разрешает за один раз
                снимать столько средств. Кроме того, может случиться, что в
                банкомате уже недостаточно денег, чтобы выдать нужную сумму.
              </div>
            ),
          },
        ],
      },
    ],
  },
  {
    name: "cars",
    displayName: "Как устроены машины?",
    topics: [
      {
        id: 'how-cars-are-made',
        name: "how-cars-are-made",
        displayName: "Как делают автомобили",
        questions: [
          {
            topicName: "how-cars-are-made",
            questionName: "question-57",
            id: "question-57",
            question: (
              <div>
                Почему большую часть операций по сборке автомобиля делают
                роботы?
              </div>
            ),
            answer: (
              <div>
                Человек может допустить ошибку, а робот не ошибается, потому что
                действует строго по заданной программе.
              </div>
            ),
          },
          {
            topicName: "how-cars-are-made",
            questionName: "question-58",
            id: "question-58",
            question: <div>Зачем машину помещают в дождевальную камеру?</div>,
            answer: (
              <div>
                Готовый автомобиль проходит проверку на герметичность в
                дождевальной камере. Машину со всех сторон обливают водой под
                большим напором.
              </div>
            ),
          },
          {
            topicName: "how-cars-are-made",
            questionName: "question-59",
            id: "question-59",
            question: (
              <div>Что на заводе называют шутливым термином «свадьба»?</div>
            ),
            answer: (
              <div>
                Процесс соединения кузова и мотора в шутку называют «свадьбой».
              </div>
            ),
          },
          {
            topicName: "how-cars-are-made",
            questionName: "question-60",
            id: "question-60",
            question: <div>Что такое конвейер?</div>,
            answer: (
              <div>
                Конвейер – это движущаяся лента, которая автоматически
                доставляет автомобиль от первого этапа сборки к последнему. Без
                конвейера на сборку одной машины уходило бы в десять раз больше
                времени!
              </div>
            ),
          },
          {
            topicName: "how-cars-are-made",
            questionName: "question-61",
            id: "question-61",
            question: <div>Для чего кузов окунают в три ванны?</div>,
            answer: (
              <div>
                Кузов окунают по очереди в три ванны, чтобы обезжирить металл и
                нанести грунтовку, которая защитит машину от ржавчины.
              </div>
            ),
          },
          {
            topicName: "how-cars-are-made",
            questionName: "question-62",
            id: "question-62",
            question: (
              <div>Все ли детали автомобиля производят на одном заводе?</div>
            ),
            answer: (
              <div>
                Нет, детали автомобиля производят на разных заводах. Потом
                детали привозят на сборочный завод, чтобы из них собрать готовый
                автомобиль.
              </div>
            ),
          },
          {
            topicName: "how-cars-are-made",
            questionName: "question-63",
            id: "question-63",
            question: <div>Перечисли этапы сборки автомобиля.</div>,
            answer: (
              <div>
                <ol>
                  <li>Сваривают каркас.</li>
                  <li>К каркасу крепят детали и сваривают их между собой.</li>
                  <li>Кузов обрабатывают грунтовкой.</li>
                  <li>Кузов красят.</li>
                  <li>Соединяют кузов и мотор.</li>
                  <li>Устанавливают оборудование.</li>
                </ol>
              </div>
            ),
          },
        ],
      },
      {
        id: 'highway-code',
        name: "highway-code",
        displayName: "Правила дорожного движения",
        questions: [
          {
            topicName: "highway-code",
            questionName: "question-64",
            id: "question-64",
            question: (
              <div>
                <div className="mb-1">
                  Что обозначают эти предупреждающие знаки?
                </div>
                <Sign11 className="Question-img-sm m-1" />
                <Sign12 className="Question-img-sm m-1" />
              </div>
            ),
            answer: (
              <div>
                <Sign11 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Знак 1.1</strong> Предупреждает о приближении к ж/д
                  переезду со шлагбаумом.
                </div>
                <Sign12 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Знак 1.2</strong> Предупреждает о приближении к ж/д
                  переезду без шлагбаума.
                </div>
              </div>
            ),
          },
          {
            topicName: "highway-code",
            questionName: "question-65",
            id: "question-65",
            question: (
              <div>
                <div className="mb-1">
                  Что обозначают эти запрещающие знаки?
                </div>
                <Sign31 className="Question-img-sm m-1" />
                <Sign32 className="Question-img-sm m-1" />
              </div>
            ),
            answer: (
              <div>
                <Sign31 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Въезд запрещён.</strong> Запрещается въезд всех
                  транспортных средств в данном направлении.
                </div>
                <Sign32 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Движение запрещено.</strong> Запрещается движение всех
                  транспортных средств.
                </div>
              </div>
            ),
          },
          {
            topicName: "highway-code",
            questionName: "question-66",
            id: "question-66",
            question: (
              <div>
                <div className="mb-1">
                  Что обозначают эти предупреждающие знаки?
                </div>
                <Sign122 className="Question-img-sm m-1" />
                <Sign123 className="Question-img-sm m-1" />
              </div>
            ),
            answer: (
              <div>
                <Sign122 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Пешеходный переход.</strong> Приближаясь к
                  нерегулируемому пешеходному переходу, водитель должен повысить
                  внимание, быть готовым, чтобы снизить скорость или
                  остановиться, уступая дорогу пешеходам, переходящим проезжую
                  часть.
                </div>
                <Sign123 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Дети.</strong> Участок дороги вблизи детского
                  учреждения, на проезжей части которого возможно появление
                  детей. Следует снизить скорость, повысить внимание.
                </div>
              </div>
            ),
          },
          {
            topicName: "highway-code",
            questionName: "question-67",
            id: "question-67",
            question: (
              <div>
                <div className="mb-1">
                  Что обозначают эти предупреждающие знаки?
                </div>
                <Sign1111 className="Question-img-sm m-1" />
                <Sign1112 className="Question-img-sm m-1" />
                <Sign1121 className="Question-img-sm m-1" />
                <Sign1122 className="Question-img-sm m-1" />
              </div>
            ),
            answer: (
              <div>
                Это знаки, предупреждающие, что впереди опасный поворот (опасные
                повороты).
              </div>
            ),
          },
          {
            topicName: "highway-code",
            questionName: "question-68",
            id: "question-68",
            question: (
              <div>
                <div className="mb-1">Что обозначают эти знаки приоритета?</div>
                <Sign21 className="Question-img-sm m-1" />
                <Sign24 className="Question-img-sm m-1" />
              </div>
            ),
            answer: (
              <div>
                <Sign21 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Главная дорога.</strong> Дорога, на которой
                  предоставлено право преимущественного проезда перекрестков, не
                  регулируемых регулировщиком, светофором.
                </div>
                <Sign24 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Уступите дорогу.</strong> Водитель должен уступить
                  дорогу транспортным средствам, движущимся по пересекаемой
                  дороге.
                </div>
              </div>
            ),
          },
          {
            topicName: "highway-code",
            questionName: "question-69",
            id: "question-69",
            question: (
              <div>
                <div className="mb-1">
                  Что обозначают эти запрещающие знаки?
                </div>
                <Sign320 className="Question-img-sm m-1" />
                <Sign32460 className="Question-img-sm m-1" />
              </div>
            ),
            answer: (
              <div>
                <Sign320 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Обгон запрещён.</strong> Запрещается обгон всех
                  транспортных средств, кроме тихоходных.
                </div>
                <Sign32460 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Ограничение максимальной скорости.</strong>{" "}
                  Запрещается движение со скоростью (км/ч), превышающей
                  указанную на знаке.
                </div>
              </div>
            ),
          },
          {
            topicName: "highway-code",
            questionName: "question-70",
            id: "question-70",
            question: (
              <div>
                <div className="mb-1">
                  Что обозначают эти знаки особых предписаний?
                </div>
                <Sign5155 className="Question-img-sm m-1" />
                <Sign5192 className="Question-img-sm m-1" />
                <Sign5191 className="Question-img-sm m-1" />
              </div>
            ),
            answer: (
              <div>
                <Sign5155 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Направления движения по полосам.</strong> Число полос
                  и разрешенные направления движения по каждой из них.
                </div>
                <Sign5192 className="Question-img-sm m-1" />
                <Sign5191 className="Question-img-sm m-1" />
                <div className="mb-1">
                  <strong>Пешеходный переход</strong>
                </div>
              </div>
            ),
          },
        ],
      },
      {
        id: 'safety',
        name: "safety",
        displayName: "Правила безопасности",
        questions: [
          {
            topicName: "safety",
            questionName: "question-71",
            id: "question-71",
            question: (
              <div>Назови главные устройства защиты водителя и пассажиров.</div>
            ),
            answer: (
              <div>
                Ремень безопасности - лучшее из когда-либо придуманных устройств
                защиты водителя и пассажиров. Вместе с подушкой безопасности
                ремни спасли жизнь многим людям. Но если человек не
                пристегнётся, подушка может серьёзно травмировать грудную клетку
                при аварии.
              </div>
            ),
          },
          {
            topicName: "safety",
            questionName: "question-72",
            id: "question-72",
            question: <div>Что такое краш-тест? Как его проводят?</div>,
            answer: (
              <div>
                Испытания на прочность и безопасность называют краш-тестами. Во
                время испытаний машина на скорости сталкивается с прочным
                неподвижным препятствием. Внутри автомобиля находится манекен,
                оборудованный датчиками. Они передают на компьютер сигналы о
                полученных манекеном повреждениях.
              </div>
            ),
          },
          {
            topicName: "safety",
            questionName: "question-73",
            id: "question-73",
            question: (
              <div>
                Какое специальное средство безопасности предусмотрено для детей
                до 12 лет?
              </div>
            ),
            answer: (
              <div>
                Дети до 12 лет могут ездить в автомобиле только в специальном
                кресле, оборудованном ремнями безопасности. Размер и форма
                кресла меняются в зависимости от возраста юного пассажира.
              </div>
            ),
          },
          {
            topicName: "safety",
            questionName: "question-74",
            id: "question-74",
            question: (
              <div>Как устроено лобовое стекло современного автомобиля?</div>
            ),
            answer: (
              <div>
                Это не стекло, а многослойный «бутерброд» из плёнок и
                прозрачного полимера. При ударе такое стекло не разбивается, а
                растрескивается, не раня водителя.
              </div>
            ),
          },
          {
            topicName: "safety",
            questionName: "question-75",
            id: "question-75",
            question: <div>Что такое ABS?</div>,
            answer: (
              <div>
                <strong>ABS</strong> - антиблокировочная система. Она позволяет
                избежать блокировки тормозов и дать водителю возможность рулить
                при экстренном торможении.
              </div>
            ),
          },
          {
            topicName: "safety",
            questionName: "question-76",
            id: "question-76",
            question: <div>Что такое слепые зоны?</div>,
            answer: (
              <div>
                Слепые зоны — участки дороги, которые невозможно увидеть в
                зеркала автомобиля. Они таят в себе опасности для участников
                движения. Легковой автомобиль может вытолкнуть другую машину с
                соседней полосы при перестроении, если та окажется в слепой
                зоне.
              </div>
            ),
          },
          {
            topicName: "safety",
            questionName: "question-77",
            id: "question-77",
            question: <div>Какие виды автомобильной резины существуют?</div>,
            answer: <div>Летняя, зимняя не шипованная и зимняя с шипами.</div>,
          },
        ],
      },
      {
        id: 'construction',
        name: "construction",
        displayName: "Общее строение автомобиля",
        questions: [
          {
            topicName: "construction",
            questionName: "question-78",
            id: "question-78",
            question: <div>Что такое подвеска автомобиля?</div>,
            answer: (
              <div>
                Чтобы сделать езду более комфортной, инженеры изобрели подвеску.
                С её помощью колёса присоединяются к кузову. Подвеска позволяет
                плавно проезжать ямы и неровности дороги.
              </div>
            ),
          },
          {
            topicName: "construction",
            questionName: "question-79",
            id: "question-79",
            question: <div>Как поворачиваются колеса автомобиля?</div>,
            answer: (
              <div>
                Водитель управляет поворотом колес с помощью руля, закреплённого
                на рулевой колонке.
              </div>
            ),
          },
          {
            topicName: "construction",
            questionName: "question-80",
            id: "question-80",
            question: <div>Для чего нужны амортизаторы?</div>,
            answer: (
              <div>
                Амортизаторы делают езду более плавной, позволяя мягко проезжать
                ямы и кочки.
              </div>
            ),
          },
          {
            topicName: "construction",
            questionName: "question-81",
            id: "question-81",
            question: (
              <div>
                Что такое коробка передач? Какие бывают коробки передач?
              </div>
            ),
            answer: (
              <div>
                Когда машина трогается с места, колёса крутятся медленно, но
                двигатель работает на полную мощность. При движении по шоссе
                колёса крутятся быстро, а двигатель работает в обычном режиме и
                дополнительная мощность нужна только для того, чтобы увеличить
                скорость. Для работы в разных режимах нужна{" "}
                <strong>коробка передач</strong>. Бывают автоматическая и
                механическая коробки.
              </div>
            ),
          },
          {
            topicName: "construction",
            questionName: "question-82",
            id: "question-82",
            question: <div>Что такое двигатель?</div>,
            answer: (
              <div>
                <strong>Двигатель</strong> – сердце автомобиля. В нём бензин или
                дизельное топливо сгорает, и освобождается энергия, необходимая
                для движения. Она превращается в механическую энергию, которая
                крутит колёса.
              </div>
            ),
          },
          {
            topicName: "construction",
            questionName: "question-83",
            id: "question-83",
            question: <div>Для чего нужен аккумулятор?</div>,
            answer: (
              <div>
                <strong>Аккумулятор</strong> нужен для питания оборудования при
                неработающем двигателе. А ещё он помогает стартеру заводить
                автомобиль.
              </div>
            ),
          },
          {
            topicName: "construction",
            questionName: "question-84",
            id: "question-84",
            question: <div>Какие бывают тормоза?</div>,
            answer: (
              <div>
                <strong>Тормоза</strong> бывают дисковые и барабанные. У
                большинства автомобилей дисковые тормоза.
              </div>
            ),
          },
        ],
      },
      {
        id: 'lessons',
        name: "lessons",
        displayName: "Уроки на учебной площадке",
        questions: [
          {
            topicName: "lessons",
            questionName: "question-85",
            id: "question-85",
            question: <div>Что показывает тахометр?</div>,
            answer: <div>Тахометр показывает обороты двигателя.</div>,
          },
          {
            topicName: "lessons",
            questionName: "question-86",
            id: "question-86",
            question: <div>Что показывает спидометр?</div>,
            answer: (
              <div>
                Спидометр показывает скорость автомобиля в данный момент
                времени.
              </div>
            ),
          },
          {
            topicName: "lessons",
            questionName: "question-87",
            id: "question-87",
            question: (
              <div>Что должен сделать водитель перед началом движения?</div>
            ),
            answer: (
              <div>
                Водитель должен пристегнуть ремни безопасности, настроить
                водительское кресло так, чтобы без проблем доставать до педалей.
                Потом завести двигатель и убедиться, что можно безопасно
                начинать движение.
              </div>
            ),
          },
          {
            topicName: "lessons",
            questionName: "question-88",
            id: "question-88",
            question: <div>От чего зависит длина тормозного пути?</div>,
            answer: (
              <div>
                Длина тормозного пути зависит от веса автомобиля, его скорости,
                погоды, состояния дороги и качества шин.
              </div>
            ),
          },
          {
            topicName: "lessons",
            questionName: "question-89",
            id: "question-89",
            question: (
              <div>
                Какой автомобиль остановится быстрее: легковой или грузовой?
              </div>
            ),
            answer: (
              <div>
                При движении с одинаковой скоростью тормозной пусть легкового
                автомобиля будет намного меньше, чем у грузового.
              </div>
            ),
          },
          {
            topicName: "lessons",
            questionName: "question-90",
            id: "question-90",
            question: (
              <div>
                На какой дороге длина тормозного пути будет самой большой: на
                сухой, в гололёд, на мокрой?
              </div>
            ),
            answer: (
              <div>При гололёде длина тормозного пути будет самой длинной.</div>
            ),
          },
          {
            topicName: "lessons",
            questionName: "question-91",
            id: "question-91",
            question: (
              <div>
                Что обязательно должно быть в автомобиле на случай
                непредвиденных обстоятельств?
              </div>
            ),
            answer: (
              <div>
                Каждый автомобиль должен быть оборудован аптечкой, насосом для
                колёс, запасным колесом и ключами для замены колеса.
              </div>
            ),
          },
        ],
      },
      {
        id: 'service',
        name: "service",
        displayName: "Обслуживание автомобиля",
        questions: [
          {
            topicName: "service",
            questionName: "question-92",
            id: "question-92",
            question: <div>Что находится под капотом автомобиля?</div>,
            answer: (
              <div>
                Под капотом автомобиля находятся все основные узлы, отвечающие
                за движение, скорость, маневренность и торможение. Самые тяжёлые
                части – двигатель и трансмиссия – располагаются низко, чтобы
                машины сохраняла равновесие и не опрокидывалась на разворотах.
              </div>
            ),
          },
          {
            topicName: "service",
            questionName: "question-93",
            id: "question-93",
            question: <div>Что водитель должен регулярно проверять?</div>,
            answer: (
              <div>
                Опытный водитель регулярно открывает капот, чтобы проверить
                уровни важных жидкостей: масла, охлаждающей и тормозной
                жидкостей, моющего раствора в омывательном бачке.
              </div>
            ),
          },
          {
            topicName: "service",
            questionName: "question-94",
            id: "question-94",
            question: <div>Зачем водители приезжают в автосервис?</div>,
            answer: (
              <div>
                В автосервис водители приезжают не только в случае, когда
                автомобилю требуется ремонт. Даже в исправной машине нужно
                регулярно проверять работоспособность узлов и механизмов и
                проводить техническое обслуживание.
              </div>
            ),
          },
          {
            topicName: "service",
            questionName: "question-95",
            id: "question-95",
            question: <div>Что такое шиномонтаж?</div>,
            answer: (
              <div>
                Чтобы получить автомобильное колесо, нужно соединить покрышку и
                диск. Этот процесс называют шиномонтажом. А ещё так называются
                автомастерские, где можно сделать монтаж, балансировку шин и
                залатать прокол или порез.
              </div>
            ),
          },
          {
            topicName: "service",
            questionName: "question-96",
            id: "question-96",
            question: <div>Для чего делают балансировку колёс?</div>,
            answer: (
              <div>
                Чтобы машина не потеряла устойчивость, и правильно работала
                подвеска, обязательно делают балансировку колёс.
              </div>
            ),
          },
          {
            topicName: "service",
            questionName: "question-97",
            id: "question-97",
            question: <div>Для чего автомобиль поднимают на подъёмнике?</div>,
            answer: (
              <div>
                Чтобы провести ремонт и обслуживание, автомобиль поднимают на
                высоту человеческого роста с помощью автоподъёмника. Диагностику
                систем проводят с помощью компьютера. Во время технического
                обслуживания проводят замену масла.
              </div>
            ),
          },
          {
            topicName: "service",
            questionName: "question-98",
            id: "question-98",
            question: (
              <div>
                Как доставить в автомастерскую пострадавший в аварии автомобиль?
              </div>
            ),
            answer: (
              <div>
                Если автомобиль серьёзно пострадал в аварии, его привозят в
                ремонтную мастерскую на эвакуаторе.
              </div>
            ),
          },
        ],
      },
      {
        id: "first-aid",
        name: "first-aid",
        displayName: "Оказание первой помощи при ДТП",
        questions: [
          {
            topicName: "first-aid",
            questionName: "question-99",
            id: "question-99",
            question: <div>Что должно лежать в аптечке?</div>,
            answer: (
              <div>
                Жгут для остановки крови, устройство для искусственного дыхания,
                бинты, лейкопластырь, перчатки, ножницы.
              </div>
            ),
          },
          {
            topicName: "first-aid",
            questionName: "question-100",
            id: "question-100",
            question: <div>Какой номер нужно набрать, чтобы вызвать МЧС?</div>,
            answer: <div>112</div>,
          },
          {
            topicName: "first-aid",
            questionName: "question-101",
            id: "question-101",
            question: (
              <div>Какой номер нужно набрать, чтобы вызвать скорую помощь?</div>
            ),
            answer: <div>112 или 103</div>,
          },
          {
            topicName: "first-aid",
            questionName: "question-102",
            id: "question-102",
            question: <div>Что нужно делать, если рядом произошло ДТП?</div>,
            answer: (
              <div>
                Необходимо сразу вызвать скорую помощь и сотрудников ДПС.
              </div>
            ),
          },
          {
            topicName: "first-aid",
            questionName: "question-103",
            id: "question-103",
            question: (
              <div>
                Какой номер нужно набрать, чтобы вызвать сотрудников полиции?
              </div>
            ),
            answer: <div>112 или 102</div>,
          },
          {
            topicName: "first-aid",
            questionName: "question-104",
            id: "question-104",
            question: (
              <div>
                Какой номер нужно набрать, чтобы вызвать пожарную команду?
              </div>
            ),
            answer: <div>112 или 101</div>,
          },
          {
            topicName: "first-aid",
            questionName: "question-105",
            id: "question-105",
            question: (
              <div>
                Какую информацию нужно сообщить, когда звонишь по телефону
                экстренных служб?
              </div>
            ),
            answer: (
              <div>
                Необходимо сообщить свои имя и фамилию, по возможности
                максимально точное место, где произошло ДТП, описать ситуацию и
                назвать количество пострадавших.
              </div>
            ),
          },
        ],
      },
      {
        id: 'tech-stuff',
        name: "tech-stuff",
        displayName: "Знание устройств и механизмов",
        questions: [
          {
            topicName: "tech-stuff",
            questionName: "question-106",
            id: "question-106",
            question: <div>Как устроены дисковые тормоза?</div>,
            answer: (
              <div>
                Диск закреплён на колесе и вращается вместе с ним. Когда
                водитель нажимает на тормоз, колодка прижимается к диску, и
                вращение колеса замедляется.
              </div>
            ),
          },
          {
            topicName: "tech-stuff",
            questionName: "question-107",
            id: "question-107",
            question: <div>Как устроены барабанные тормоза?</div>,
            answer: (
              <div>
                В барабанных тормозах колодки находятся внутри цилиндра,
                похожего на барабан. При давлении на педаль колодки прижимаются
                к цилиндру и замедляют колесо.
              </div>
            ),
          },
          {
            topicName: "tech-stuff",
            questionName: "question-108",
            id: "question-108",
            question: <div>Расскажи об устройстве, поворачивающем колеса.</div>,
            answer: (
              <div>
                На конце рулевой колонки находится шестерня, через которую
                вращательное движение руля передаётся на зубчатую рулевую рейку.
                Оттуда через тяги усилие переходит к колёсам, и они
                поворачиваются.
              </div>
            ),
          },
          {
            topicName: "tech-stuff",
            questionName: "question-109",
            id: "question-109",
            question: <div>Что находится в руле?</div>,
            answer: (
              <div>
                В руле прячется не только звуковой сигнал, но и очень важное
                средство безопасности – подушка! Если случится столкновение,
                водитель не успеет даже моргнуть, а подушка надуется и защитит
                от удара.
              </div>
            ),
          },
          {
            topicName: "tech-stuff",
            questionName: "question-110",
            id: "question-110",
            question: <div>Как работает ABS?</div>,
            answer: (
              <div>
                Если в автомобиле нет ABS, колёса блокируются, скользят и лишают
                водителя возможности маневрировать. Автомобиль будет ехать по
                прямой, будто у него нет руля.
                <br />
                Если автомобиль оснащен ABS, от водителя требуется лишь
                посильнее нажать на педаль тормоза и спокойно работать рулём.
              </div>
            ),
          },
          {
            topicName: "tech-stuff",
            questionName: "question-111",
            id: "question-111",
            question: <div>Как устроена подвеска автомобиля?</div>,
            answer: (
              <div>
                В подвеске есть стойка, рычаги, тяги, пружины и амортизаторы.
                Энергия удара, возникающего от наезда колеса на неровность
                дороги, передаётся на упругие пружины подвески и гасится.
              </div>
            ),
          },
          {
            topicName: "tech-stuff",
            questionName: "question-112",
            id: "question-112",
            question: <div>Как работают амортизаторы?</div>,
            answer: (
              <div>
                Когда колесо наезжает на неровность, энергия с него поступает на
                амортизатор. До этого его пружина находится в состоянии покоя, а
                вот после – сжимается. Она не позволяет удару перейти с ходовой
                части на кузов.
              </div>
            ),
          },
        ],
      },
      {
        id: 'city-drive',
        name: "city-drive",
        displayName: "Езда по городу",
        questions: [
          {
            topicName: "city-drive",
            questionName: "question-113",
            id: "question-113",
            question: (
              <div>
                Как можно понять, какие маневры собирается совершить едущий
                впереди или рядом автомобиль?
              </div>
            ),
            answer: (
              <div>
                О манёврах, которые планирует совершить едущий впереди
                автомобиль можно узнать по световым сигналам.
              </div>
            ),
          },
          {
            topicName: "city-drive",
            questionName: "question-114",
            id: "question-114",
            question: (
              <div>
                Светятся белые задние фонари. Какой манёвр совершает водитель?
              </div>
            ),
            answer: (
              <div>
                Белый свет задних фонарей сообщает, что машина будет двигаться
                задом.
              </div>
            ),
          },
          {
            topicName: "city-drive",
            questionName: "question-115",
            id: "question-115",
            question: (
              <div>Мигают передние и задние жёлтые огни. Что это значит?</div>
            ),
            answer: (
              <div>
                Если у автомобиля мигают передние и задние жёлтые огни, водитель
                предупреждает об экстренной остановке или какой-то неисправности
                в машине.
              </div>
            ),
          },
          {
            topicName: "city-drive",
            questionName: "question-116",
            id: "question-116",
            question: (
              <div>
                Сколько педалей у машины с автоматической коробкой передач?
              </div>
            ),
            answer: (
              <div>
                Для управления машиной с автоматической коробкой достаточно двух
                педалей: тормоз и газ. А передачи умный механизм переключает без
                участия человека.
              </div>
            ),
          },
          {
            topicName: "city-drive",
            questionName: "question-117",
            id: "question-117",
            question: (
              <div>
                Какие педали у автомобиля с механической коробкой передач?
              </div>
            ),
            answer: (
              <div>
                У автомобиля с механической коробкой передач три педали:
                сцепление, тормоз и газ.
              </div>
            ),
          },
          {
            topicName: "city-drive",
            questionName: "question-118",
            id: "question-118",
            question: (
              <div>
                Какие буквы используются в российских автомобильных номерах?
              </div>
            ),
            answer: (
              <div>
                На номерных знаках в России используются только те буквы,
                которые присутствуют и в кириллице, и в латинице. Таких букв
                только 12: А, В, Е, К, М, Н, О, Р, С, Т, У, Х.
              </div>
            ),
          },
          {
            topicName: "city-drive",
            questionName: "question-119",
            id: "question-119",
            question: (
              <div>
                Как водитель показывает, что собирается поворачивать вправо или
                влево?
              </div>
            ),
            answer: (
              <div>
                Под рулем находится рычаг указателя поворота. Водитель
                переключает рычаг в нужную сторону, и у автомобиля начинает
                мигать правый или левый указатель поворота.
              </div>
            ),
          },
        ],
      },
      {
        id: "difficult-ride",
        name: "difficult-ride",
        displayName: "Езда в сложных условиях",
        questions: [
          {
            topicName: "difficult-ride",
            questionName: "question-120",
            id: "question-120",
            question: (
              <div>
                Что такое дистанция между автомобилями? Зачем ее соблюдать?
              </div>
            ),
            answer: (
              <div>
                Дистанция – это расстояние между автомобилями, следующими друг
                за другом. Её нужно соблюдать, чтобы успеть среагировать на
                действия водителя, едущего в автомобиле перед тобой.
              </div>
            ),
          },
          {
            topicName: "difficult-ride",
            questionName: "question-121",
            id: "question-121",
            question: (
              <div>Когда нужно увеличить дистанцию между автомобилями?</div>
            ),
            answer: (
              <div>
                Дистанцию следует увеличить при неблагоприятных погодных
                условиях и на неосвещенной дороге.
              </div>
            ),
          },
          {
            topicName: "difficult-ride",
            questionName: "question-122",
            id: "question-122",
            question: <div>Для чего нужны противотуманные фары?</div>,
            answer: (
              <div>
                Противотуманные фары включают в дополнение к основному свету в
                условиях плохой видимости (снег, дождь, туман){" "}
              </div>
            ),
          },
          {
            topicName: "difficult-ride",
            questionName: "question-123",
            id: "question-123",
            question: (
              <div>
                Какое стиль управления менее опасный: плавный или резкий?
              </div>
            ),
            answer: (
              <div>
                Автомобиль перемещается гораздо безопаснее, когда действия
                водителя плавные. В большинстве случаев и нажатие, и отпускание
                педалей тормоза и газа должны быть плавными. Кроме того стоит
                избегать резких поворотов руля.
              </div>
            ),
          },
          {
            topicName: "difficult-ride",
            questionName: "question-124",
            id: "question-124",
            question: <div>Что такое габаритные огни?</div>,
            answer: (
              <div>
                Габаритные огни в тёмное время позволяют водителям определять
                размеры автомобилей, движущихся рядом и навстречу.
              </div>
            ),
          },
          {
            topicName: "difficult-ride",
            questionName: "question-125",
            id: "question-125",
            question: <div>Для чего нужны дневные ходовые огни?</div>,
            answer: (
              <div>
                Дневные ходовые огни улучшают видимость автомобиля в светлое
                время суток.
              </div>
            ),
          },
          {
            topicName: "difficult-ride",
            questionName: "question-126",
            id: "question-126",
            question: <div>Что такое ближний и дальний свет?</div>,
            answer: (
              <div>
                Фары ближнего света освещают дорогу впереди авто на 40 метров.
                При больших скоростях на трассе этого бывает недостаточно, тогда
                включают дальний свет.
              </div>
            ),
          },
        ],
      },
    ],
  },
];
