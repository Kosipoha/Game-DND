const translations = {
  ru: {
    realm: "ЗЕМЛИ НА ГРАНИ СУМЕРЕК",
    title: "ХРОНИКИ\nПОГРАНИЧЬЯ",
    tagline: "Тактический автобатлер в мире легенд и стали",
    play: "Играть",
    settings: "Настройки",
    exit: "Выход",
    chapter: "ПЕРВАЯ ГЛАВА",
    createTitle: "Создание персонажа",
    createIntro: "Выбери происхождение и путь. Характеристики назначаются автоматически.",
    raceHeading: "Происхождение",
    classHeading: "Класс",
    heroName: "Имя героя",
    attributes: "Характеристики",
    fixedValues: "база + класс",
    racialTrait: "Особенность происхождения",
    classAbility: "Способность класса",
    createHero: "Создать героя",
    back: "Назад",
    heroReady: "ГЕРОЙ ГОТОВ",
    readyTitle: "Путь только начинается",
    editHero: "Изменить героя",
    farewell: "ДО СЛЕДУЮЩЕЙ ВСТРЕЧИ",
    exitTitle: "Путешествие поставлено на паузу",
    exitCopy: "Чтобы выйти из игры, закройте эту вкладку.",
    version: "ВЕРСИЯ 0.1.0",
    options: "ПАРАМЕТРЫ ИГРЫ",
    music: "Музыка",
    volume: "Громкость",
    musicCredit: "Музыка: «Medieval Dream» — Frank Schröter",
    license: "Лицензия CC BY 4.0",
    close: "Готово",
    chooseRace: "Выбрать происхождение",
    chooseClass: "Выбрать класс",
    raceHuman: "Человек",
    raceHumanDesc: "Универсальность и быстрая адаптация к новым условиям.",
    raceElf: "Эльф",
    raceElfDesc: "Внимательность, ловкость и тяга к знаниям.",
    raceDwarf: "Дварф",
    raceDwarfDesc: "Крепкое телосложение и несгибаемая стойкость.",
    raceOrc: "Орк",
    raceOrcDesc: "Мощь и выносливость для суровых испытаний.",
    traitVersatile: "Находчивость",
    traitVersatileDesc: "Раз в сражение герой может перебросить одну неудачную проверку.",
    traitKeenSenses: "Острый слух",
    traitKeenSensesDesc: "Лучше замечает угрозы и получает преимущество при обнаружении засад.",
    traitStoneborn: "Каменная закалка",
    traitStonebornDesc: "Снижает первый полученный за бой урон на 2.",
    traitFierce: "Неукротимый дух",
    traitFierceDesc: "Один раз за бой остаётся на ногах после удара, который должен был его одолеть.",
    classWarrior: "Воин",
    classWarriorRole: "Защита и ближний бой",
    classWarriorDesc: "Держит передовую и прикрывает союзников.",
    classRogue: "Плут",
    classRogueRole: "Скорость и точечный урон",
    classRogueDesc: "Бьёт первым и находит слабые места противника.",
    classMonk: "Монах",
    classMonkRole: "Манёвренность и контроль",
    classMonkDesc: "Сочетает стремительные атаки с внутренней дисциплиной.",
    classRanger: "Следопыт",
    classRangerRole: "Дальний бой и выбор цели",
    classRangerDesc: "Выслеживает опаснейших врагов и атакует издали.",
    abilityGuard: "Стойка стража",
    abilityGuardDesc: "Раз за бой стойка стража уменьшает следующий полученный урон на 4.",
    abilityAmbush: "Внезапный выпад",
    abilityAmbushDesc: "Раз за бой атакуй с преимуществом и нанеси дополнительно 4 урона.",
    abilityFocus: "Сосредоточение",
    abilityFocusDesc: "Раз за бой восстанови 4 здоровья и уменьши следующий удар на 2.",
    abilityMark: "Метка охотника",
    abilityMarkDesc: "Раз за бой пометь врага: следующая успешная атака нанесёт +3 урона.",
    statStrength: "Сила",
    statDexterity: "Ловкость",
    statConstitution: "Телосложение",
    statIntelligence: "Интеллект",
    statWisdom: "Мудрость",
    statCharisma: "Харизма",
    baseValue: "Основа",
    classBonus: "Класс",
    readyStats: "Характеристики",
    readyTraits: "Особенности",
    noBonus: "без прибавки",
    worldTitle: "Окрестности Медного Брода",
    level: "УРОВЕНЬ",
    dayLabel: "ДЕНЬ",
    advanceDay: "Следующий день",
    health: "Здоровье",
    experience: "Опыт",
    coins: "Монеты",
    equipment: "Снаряжение",
    conditions: "Состояние",
    basePlusClass: "база + класс",
    worldMap: "КАРТА ОКРЕСТНОСТЕЙ",
    regionName: "Пограничье",
    mapScale: "СЕВЕРНЫЙ ТРАКТ",
    siteCity: "Медный Брод",
    siteSlime: "Поле слизи",
    siteGoblins: "Пещера гоблинов",
    siteKobolds: "Нора кобольдов",
    siteWolves: "Волчья чаща",
    siteBandits: "Лагерь налётчиков",
    siteShrine: "Затопленное святилище",
    currentLocation: "Вы здесь",
    available: "Доступно",
    levelLocked: "Закрыто по уровню",
    selectedLocation: "ВЫБРАННОЕ МЕСТО",
    threats: "Замеченные противники",
    combatComing: "Разведка доступна; сражения подключим следующим шагом.",
    requiredLevel: "Требуется уровень",
    safeHaven: "Поселение",
    dangerLevel: "Угроза",
    siteCityDesc: "Медный Брод — последний безопасный приют на тракте. Герой начинает здесь без дома и с тремя медяками.",
    siteSlimeDesc: "Затопленный луг за старой мельницей. Между кочками замечены дрожащие полупрозрачные комки.",
    siteGoblinsDesc: "Старая шахта у каменного кряжа. У входа видны дозорные и следы маленьких сапог.",
    siteKoboldsDesc: "Нора под руинами заставы. Из трещин доносятся голоса и звон самодельных ловушек.",
    siteWolvesDesc: "Сосновая чаща за трактом. Между деревьями мелькают силуэты голодной стаи.",
    siteBanditsDesc: "Старый мост перекрыт бандитами. Они проверяют каждого путника и не любят свидетелей.",
    siteShrineDesc: "Каменное святилище ушло под воду. Внутри блуждают беспокойные огни и стражи из костей.",
    noThreats: "В поселении противников не замечено.",
    enemyGreenSlime: "Зелёная слизь",
    enemyLesserSlime: "Молодая слизь",
    enemyGoblinRaider: "Гоблин-налётчик",
    enemyGoblinSlinger: "Гоблин-пращник",
    enemyKoboldScout: "Кобольд-разведчик",
    enemyKoboldTrapper: "Кобольд-ловчий",
    enemyAshWolf: "Пепельный волк",
    enemyWolfAlpha: "Вожак стаи",
    enemyBanditCutpurse: "Бандит с ножом",
    enemyBanditLookout: "Дозорный налётчиков",
    enemyBoneSentinel: "Костяной страж",
    enemyWisp: "Болотный огонёк",
    enemyEach: "каждый",
    gearWeapon: "Оружие",
    gearArmor: "Броня",
    gearSword: "Зазубренный меч",
    gearChainVest: "Поношенный жилет",
    gearDaggers: "Парные ножи",
    gearDarkCloak: "Тёмный плащ",
    gearHandWraps: "Льняные бинты",
    gearNoviceRobe: "Одежда послушника",
    gearShortbow: "Короткий лук",
    gearHuntingLeathers: "Охотничья кожа",
    conditionHomeless: "Без крова",
    homelessEffect: "Отдых восстанавливает меньше здоровья, пока не найдёшь ночлег.",
    conditionInjured: "Ранен",
    injuryEffect: "Следующий день уйдёт на отдых и восстановление.",
    conditionSheltered: "Есть ночлег",
    shelteredEffect: "Безопасный сон помогает быстрее восстановиться.",
    conditionReady: "Готов к пути",
    readyConditionEffect: "Здоровье полное, герой готов отправиться в путь.",
    dayRested: "День прошёл в отдыхе: здоровье восстановлено.",
    dayQuiet: "День прошёл спокойно. На тракте новых вестей нет.",
    eventDay: "СОБЫТИЕ ДНЯ",
    eventCartTitle: "Телега у городских ворот",
    eventCartDescription: "Торговая телега застряла в грязи, а хозяин зовёт на помощь. Сила поможет сдвинуть её быстрее.",
    eventCartHelp: "Помочь вытолкнуть телегу",
    eventCartAvoid: "Обойти стороной",
    eventWorkSuccess: "Удачно помог: торговец заплатил 5 монет.",
    eventWorkInjury: "Телега сдвинулась, но сорвала тебя на камни. Получено 2 урона; заработано 2 монеты.",
    eventCartAvoided: "Ты не вмешался и нашёл у обочины 1 монету.",
    eventColdTitle: "Холодная ночь",
    eventColdDescription: "Ночью ударил мороз. За 4 монеты можно снять место в тёплой конюшне; иначе придётся ночевать под открытым небом.",
    eventRentBed: "Заплатить 4 монеты за ночлег",
    eventSleepOutside: "Остаться под открытым небом",
    eventRentSuccess: "Ты нашёл ночлег. Дебафф «Без крова» снят.",
    eventSleepHurt: "Ты пережил ночь под открытым небом, но промёрз до костей. Получено 2 урона.",
    levelRequirement: "Откроется с уровня",
    mapLabelPines: "СОСНОВЫЙ ЛЕС",
    mapLabelMarsh: "НИЗИННЫЕ БОЛОТА",
    mapLabelRidge: "КАМЕННЫЙ КРЯЖ",
    battleIntro: "В глубине этой области уже слышны враги.",
    enterArea: "Войти в область",
    combatEncounter: "СТОЛКНОВЕНИЕ",
    yourHero: "ВАШ ГЕРОЙ",
    enemy: "ПРОТИВНИК",
    armorClass: "Защита",
    rollPrompt: "Бросок появится после действия",
    attack: "Атаковать",
    battleLog: "Ход боя",
    returnToMap: "Вернуться на карту",
    restartGame: "Начать игру заново",
    roundLabel: "РАУНД",
    hit: "попадание",
    miss: "промах",
    critical: "критический удар",
    damageDealt: "Урон нанесён",
    damageReceived: "Получен урон",
    attackRoll: "Атака",
    enemyAttackRoll: "Ответ врага",
    advantage: "с преимуществом",
    versus: "против",
    abilityActivated: "Способность применена",
    enemyNext: "Следующий противник",
    battleWon: "ПОБЕДА",
    battleLost: "ПОРАЖЕНИЕ",
    battleWonText: "Все замеченные противники повержены.",
    battleLostText: "Герой выбыл из боя и нуждается в отдыхе.",
    xpEarned: "Получено опыта",
    levelUp: "Новый уровень",
    weaponStat: "Оружие",
    attackDisabled: "Нельзя атаковать без сознания",
    townLocation: "МЕДНЫЙ БРОД · ГОРОДСКИЕ ВОРОТА",
    townName: "Медный Брод",
    townIntro: "Найди работу, снаряжение и ночлег перед следующей вылазкой.",
    cityServices: "УСЛУГИ ГОРОДА",
    servicesHeading: "Передышка и учёба",
    innTitle: "Ночлег в конюшне",
    innDescription: "Восстанови здоровье и сними состояние «Без крова».",
    rentBed: "Снять место",
    coinsShort: "медяков",
    trainingTitle: "Занятия у старого сержанта",
    trainingDescription: "Получи 30 опыта за тренировку. Нужны время и плата.",
    train: "Тренироваться",
    townMarket: "РЫНОК У ГОРОДСКИХ ВОРОТ",
    shopHeading: "Лавка снаряжения",
    heroBelongings: "ИМУЩЕСТВО ГЕРОЯ",
    inventoryHeading: "Инвентарь",
    openTown: "Войти в город",
    itemWeapon: "Оружие",
    itemArmor: "Броня",
    itemConsumable: "Расходник",
    itemMaterial: "Материал",
    buy: "Купить",
    equip: "Надеть",
    equipped: "Надето",
    sell: "Продать",
    useItem: "Использовать",
    noInventory: "Пока пусто.",
    weaponDamage: "Урон",
    weaponBonus: "к атаке",
    armorBonus: "Защита",
    healAmount: "Лечение",
    sellValue: "Цена продажи",
    itemIronSword: "Кованый меч",
    itemReinforcedVest: "Усиленный жилет",
    itemSteelDaggers: "Стальные кинжалы",
    itemShadowCloak: "Плащ теней",
    itemWeightedWraps: "Утяжелённые бинты",
    itemTravelRobe: "Дорожная ряса",
    itemLongbow: "Длинный лук",
    itemReinforcedLeathers: "Усиленная кожаная броня",
    itemHealingTonic: "Лечебный тоник",
    itemSlimeGel: "Сгусток слизи",
    itemGoblinToken: "Трофей гоблина",
    itemKoboldScale: "Чешуя кобольда",
    itemWolfPelt: "Волчья шкура",
    itemBanditPurse: "Кошель налётчика",
    itemBoneShard: "Костяной осколок",
    itemWispEssence: "Эссенция огонька",
    itemScavengedBlade: "Трофейный клинок",
    itemScaleVest: "Чешуйчатый жилет",
    notEnoughCoins: "Не хватает монет.",
    alreadyOwned: "Уже есть в инвентаре.",
    serviceRestSuccess: "Ночь под крышей восстановила здоровье и сняла дебафф «Без крова».",
    trainingSuccess: "Тренировка завершена: +30 опыта.",
    itemUsed: "Тоник восстановил здоровье.",
    enemyLoot: "Добыча",
    coinsFound: "монет найдено",
    lootFound: "Найден предмет",
    lootNone: "В этот раз добычи не нашлось.",
    inventoryChanged: "Инвентарь обновлён.",
    requiredClass: "Не подходит этому классу",
    contractBoard: "ДОСКА ГОРОДСКИХ ПОРУЧЕНИЙ",
    contractHeading: "Контракты",
    contractSlimes: "Слизь на тракте",
    contractSlimesDesc: "Уничтожь три комка слизи на залитом лугу.",
    contractWolves: "Тихая чаща",
    contractWolvesDesc: "Прогони трёх волков из сосновой чащи.",
    contractBandits: "Плата за мост",
    contractBanditsDesc: "Разбери заставу налётчиков у старого моста.",
    contractShrine: "Огни под водой",
    contractShrineDesc: "Очисти святилище от костяных стражей и огоньков.",
    acceptContract: "Взять заказ",
    contractInProgress: "В работе",
    contractReady: "Вернуться за наградой",
    contractClaimed: "Выполнено",
    contractLocked: "Откроется с уровня",
    contractBusy: "Сначала заверши активный заказ",
    contractProgress: "Прогресс",
    contractReward: "Награда",
    contractAccepted: "Заказ принят. Цель отмечена в журнале.",
    contractClaimNotice: "Награда за контракт получена.",
    contractBattleProgress: "Продвижение по контракту",
    contractBoardEmpty: "Все доступные поручения выполнены.",
    contractOneAtATime: "Можно взять только один контракт за раз."
  },
  en: {
    realm: "LANDS AT THE EDGE OF DUSK",
    title: "CHRONICLES\nOF THE MARCHES",
    tagline: "A tactical autobattler of legends and steel",
    play: "Play",
    settings: "Settings",
    exit: "Quit",
    chapter: "CHAPTER ONE",
    createTitle: "Create a Character",
    createIntro: "Choose an ancestry and a path. Attributes are assigned automatically.",
    raceHeading: "Ancestry",
    classHeading: "Class",
    heroName: "Hero name",
    attributes: "Attributes",
    fixedValues: "base + class",
    racialTrait: "Ancestry trait",
    classAbility: "Class ability",
    createHero: "Create hero",
    back: "Back",
    heroReady: "HERO READY",
    readyTitle: "The journey is just beginning",
    editHero: "Edit hero",
    farewell: "UNTIL WE MEET AGAIN",
    exitTitle: "Your journey is paused",
    exitCopy: "Close this browser tab to leave the game.",
    version: "VERSION 0.1.0",
    options: "GAME OPTIONS",
    music: "Music",
    volume: "Volume",
    musicCredit: "Music: “Medieval Dream” by Frank Schröter",
    license: "CC BY 4.0 License",
    close: "Done",
    chooseRace: "Choose ancestry",
    chooseClass: "Choose class",
    raceHuman: "Human",
    raceHumanDesc: "Versatile and quick to adapt to unfamiliar places.",
    raceElf: "Elf",
    raceElfDesc: "Perceptive, agile, and drawn to knowledge.",
    raceDwarf: "Dwarf",
    raceDwarfDesc: "Sturdy by nature and unshakable under pressure.",
    raceOrc: "Orc",
    raceOrcDesc: "Powerful and resilient in the harshest trials.",
    traitVersatile: "Resourceful",
    traitVersatileDesc: "Once per battle, reroll one failed check.",
    traitKeenSenses: "Keen Senses",
    traitKeenSensesDesc: "More alert to danger and better at spotting ambushes.",
    traitStoneborn: "Stoneborn",
    traitStonebornDesc: "Reduces the first damage taken in battle by 2.",
    traitFierce: "Defiant Spirit",
    traitFierceDesc: "Once per battle, stay standing after a blow that would defeat you.",
    classWarrior: "Warrior",
    classWarriorRole: "Defense and melee",
    classWarriorDesc: "Holds the front line and shields allies.",
    classRogue: "Rogue",
    classRogueRole: "Speed and precision damage",
    classRogueDesc: "Strikes first and finds an enemy's weak point.",
    classMonk: "Monk",
    classMonkRole: "Mobility and control",
    classMonkDesc: "Pairs swift attacks with disciplined focus.",
    classRanger: "Ranger",
    classRangerRole: "Ranged combat and target choice",
    classRangerDesc: "Tracks dangerous foes and attacks from afar.",
    abilityGuard: "Guardian Stance",
    abilityGuardDesc: "Once per battle, brace to reduce the next damage taken by 4.",
    abilityAmbush: "Sudden Strike",
    abilityAmbushDesc: "Once per battle, attack with advantage and deal 4 additional damage.",
    abilityFocus: "Focused Breath",
    abilityFocusDesc: "Once per battle, restore 4 health and reduce the next hit by 2.",
    abilityMark: "Hunter's Mark",
    abilityMarkDesc: "Once per battle, mark a foe; your next successful attack deals +3 damage.",
    statStrength: "Strength",
    statDexterity: "Dexterity",
    statConstitution: "Constitution",
    statIntelligence: "Intelligence",
    statWisdom: "Wisdom",
    statCharisma: "Charisma",
    baseValue: "Base",
    classBonus: "Class",
    readyStats: "Attributes",
    readyTraits: "Traits",
    noBonus: "no bonus",
    worldTitle: "Around Copperford",
    level: "LEVEL",
    dayLabel: "DAY",
    advanceDay: "Advance a day",
    health: "Health",
    experience: "Experience",
    coins: "Coins",
    equipment: "Equipment",
    conditions: "Conditions",
    basePlusClass: "base + class",
    worldMap: "THE BORDERLANDS",
    regionName: "The Marches",
    mapScale: "THE NORTH ROAD",
    siteCity: "Copperford",
    siteSlime: "Slime Field",
    siteGoblins: "Goblin Cave",
    siteKobolds: "Kobold Warren",
    siteWolves: "Ashwood Thicket",
    siteBandits: "Roadside Bandit Camp",
    siteShrine: "Sunken Shrine",
    currentLocation: "You are here",
    available: "Available",
    levelLocked: "Level locked",
    selectedLocation: "SELECTED LOCATION",
    threats: "Spotted enemies",
    combatComing: "Scouting is available; battles are the next step.",
    requiredLevel: "Required level",
    safeHaven: "Settlement",
    dangerLevel: "Threat",
    siteCityDesc: "Copperford is the last safe refuge on the road. Your journey begins here, homeless, with three coppers.",
    siteSlimeDesc: "A flooded meadow beyond the old mill. Translucent shapes tremble between the hummocks.",
    siteGoblinsDesc: "An abandoned mine by the rocky ridge. Sentries and small bootprints have been spotted at the entrance.",
    siteKoboldsDesc: "A warren beneath the ruined watch. Voices and the clink of crude traps echo from its cracks.",
    siteWolvesDesc: "A pine thicket beyond the road. Hungry shapes move between the trees.",
    siteBanditsDesc: "Bandits have blocked the old bridge. They search every traveler and leave few witnesses.",
    siteShrineDesc: "The stone shrine has sunk beneath the water. Uneasy lights and bone sentinels wander within.",
    noThreats: "No enemies have been spotted in the settlement.",
    enemyGreenSlime: "Green Slime",
    enemyLesserSlime: "Lesser Slime",
    enemyGoblinRaider: "Goblin Raider",
    enemyGoblinSlinger: "Goblin Slinger",
    enemyKoboldScout: "Kobold Scout",
    enemyKoboldTrapper: "Kobold Trapper",
    enemyAshWolf: "Ash Wolf",
    enemyWolfAlpha: "Pack Leader",
    enemyBanditCutpurse: "Bandit Cutpurse",
    enemyBanditLookout: "Bandit Lookout",
    enemyBoneSentinel: "Bone Sentinel",
    enemyWisp: "Marsh Wisp",
    enemyEach: "each",
    gearWeapon: "Weapon",
    gearArmor: "Armor",
    gearSword: "Notched Sword",
    gearChainVest: "Worn Vest",
    gearDaggers: "Paired Knives",
    gearDarkCloak: "Dark Cloak",
    gearHandWraps: "Linen Hand Wraps",
    gearNoviceRobe: "Novice Garb",
    gearShortbow: "Shortbow",
    gearHuntingLeathers: "Hunting Leathers",
    conditionHomeless: "Homeless",
    homelessEffect: "Rest restores less health until you find shelter.",
    conditionInjured: "Injured",
    injuryEffect: "The next day will be spent resting and recovering.",
    conditionSheltered: "Sheltered",
    shelteredEffect: "A safe bed helps you recover faster.",
    conditionReady: "Ready for the road",
    readyConditionEffect: "At full health and ready to travel.",
    dayRested: "You spend the day resting and recover some health.",
    dayQuiet: "A quiet day passes. No new word reaches the road.",
    eventDay: "EVENT OF THE DAY",
    eventCartTitle: "A Cart at the City Gate",
    eventCartDescription: "A merchant's cart is stuck in the mud. Strength will make it easier to push free.",
    eventCartHelp: "Help push the cart free",
    eventCartAvoid: "Walk on by",
    eventWorkSuccess: "You lend a hand and earn 5 coins.",
    eventWorkInjury: "The cart lurches and throws you onto the stones. You take 2 damage and earn 2 coins.",
    eventCartAvoided: "You keep walking and find 1 coin by the roadside.",
    eventColdTitle: "A Bitter Night",
    eventColdDescription: "Frost settles after dark. A stable bed costs 4 coins; otherwise you must sleep outside.",
    eventRentBed: "Pay 4 coins for a bed",
    eventSleepOutside: "Sleep under the open sky",
    eventRentSuccess: "You find a bed for the night. The Homeless condition is gone.",
    eventSleepHurt: "You make it through the night outside, chilled to the bone. You take 2 damage.",
    levelRequirement: "Unlocks at level",
    mapLabelPines: "PINEWOOD",
    mapLabelMarsh: "LOW MARSHES",
    mapLabelRidge: "STONE RIDGE",
    battleIntro: "You hear movement deeper in the area.",
    enterArea: "Enter area",
    combatEncounter: "ENCOUNTER",
    yourHero: "YOUR HERO",
    enemy: "ENEMY",
    armorClass: "Defense",
    rollPrompt: "Your roll will appear after an action",
    attack: "Attack",
    battleLog: "Battle log",
    returnToMap: "Return to map",
    restartGame: "Start a new game",
    roundLabel: "ROUND",
    hit: "hit",
    miss: "miss",
    critical: "critical hit",
    damageDealt: "Damage dealt",
    damageReceived: "Damage taken",
    attackRoll: "Attack",
    enemyAttackRoll: "Enemy strike",
    advantage: "with advantage",
    versus: "vs",
    abilityActivated: "Ability used",
    enemyNext: "Next enemy",
    battleWon: "VICTORY",
    battleLost: "DEFEAT",
    battleWonText: "All spotted enemies have been defeated.",
    battleLostText: "Your hero is down and needs to rest.",
    xpEarned: "Experience gained",
    levelUp: "Level up",
    weaponStat: "Weapon",
    attackDisabled: "You cannot attack while down",
    townLocation: "COPPERFORD · CITY GATE",
    townName: "Copperford",
    townIntro: "Find work, supplies, and a bed before your next expedition.",
    cityServices: "CITY SERVICES",
    servicesHeading: "Rest and training",
    innTitle: "A Bed in the Stable",
    innDescription: "Restore your health and remove the Homeless condition.",
    rentBed: "Rent a bed",
    coinsShort: "coins",
    trainingTitle: "Lessons from the Old Sergeant",
    trainingDescription: "Gain 30 experience through training. It costs time and coin.",
    train: "Train",
    townMarket: "MARKET BY THE CITY GATE",
    shopHeading: "Supply Shop",
    heroBelongings: "HERO'S BELONGINGS",
    inventoryHeading: "Inventory",
    openTown: "Enter town",
    itemWeapon: "Weapon",
    itemArmor: "Armor",
    itemConsumable: "Consumable",
    itemMaterial: "Material",
    buy: "Buy",
    equip: "Equip",
    equipped: "Equipped",
    sell: "Sell",
    useItem: "Use",
    noInventory: "Nothing here yet.",
    weaponDamage: "Damage",
    weaponBonus: "to hit",
    armorBonus: "Defense",
    healAmount: "Healing",
    sellValue: "Sale value",
    itemIronSword: "Forged Sword",
    itemReinforcedVest: "Reinforced Vest",
    itemSteelDaggers: "Steel Daggers",
    itemShadowCloak: "Shadow Cloak",
    itemWeightedWraps: "Weighted Wraps",
    itemTravelRobe: "Travel Robe",
    itemLongbow: "Longbow",
    itemReinforcedLeathers: "Reinforced Leathers",
    itemHealingTonic: "Healing Tonic",
    itemSlimeGel: "Slime Gel",
    itemGoblinToken: "Goblin Trophy",
    itemKoboldScale: "Kobold Scale",
    itemWolfPelt: "Wolf Pelt",
    itemBanditPurse: "Bandit Purse",
    itemBoneShard: "Bone Shard",
    itemWispEssence: "Wisp Essence",
    itemScavengedBlade: "Scavenged Blade",
    itemScaleVest: "Scale Vest",
    notEnoughCoins: "Not enough coins.",
    alreadyOwned: "Already in your inventory.",
    serviceRestSuccess: "A night under a roof restores your health and removes Homeless.",
    trainingSuccess: "Training complete: +30 experience.",
    itemUsed: "The tonic restores your health.",
    enemyLoot: "Loot",
    coinsFound: "coins found",
    lootFound: "Found item",
    lootNone: "No useful loot this time.",
    inventoryChanged: "Inventory updated.",
    requiredClass: "Not usable by this class",
    contractBoard: "CITY NOTICEBOARD",
    contractHeading: "Contracts",
    contractSlimes: "Roadside Slimes",
    contractSlimesDesc: "Clear three slimes from the flooded meadow.",
    contractWolves: "Quiet the Thicket",
    contractWolvesDesc: "Drive three wolves from the pine thicket.",
    contractBandits: "Bridge Toll",
    contractBanditsDesc: "Break the bandit holdout at the old bridge.",
    contractShrine: "Lights Below",
    contractShrineDesc: "Purge the shrine of its bone sentinels and wisps.",
    acceptContract: "Accept contract",
    contractInProgress: "In progress",
    contractReady: "Return for reward",
    contractClaimed: "Completed",
    contractLocked: "Unlocks at level",
    contractBusy: "Finish your active contract first",
    contractProgress: "Progress",
    contractReward: "Reward",
    contractAccepted: "Contract accepted. The objective is now in your journal.",
    contractClaimNotice: "Contract reward claimed.",
    contractBattleProgress: "Contract progress",
    contractBoardEmpty: "All available contracts are complete.",
    contractOneAtATime: "You can accept one contract at a time."
  }
};

const attributeKeys = ["strength", "dexterity", "constitution", "intelligence", "wisdom", "charisma"];
const attributes = {
  strength: { key: "statStrength", short: "STR" },
  dexterity: { key: "statDexterity", short: "DEX" },
  constitution: { key: "statConstitution", short: "CON" },
  intelligence: { key: "statIntelligence", short: "INT" },
  wisdom: { key: "statWisdom", short: "WIS" },
  charisma: { key: "statCharisma", short: "CHA" }
};

const ancestries = [
  { id: "human", name: "raceHuman", description: "raceHumanDesc", mark: "H", trait: "traitVersatile", traitDescription: "traitVersatileDesc", stats: { strength: 10, dexterity: 10, constitution: 10, intelligence: 10, wisdom: 10, charisma: 10 } },
  { id: "elf", name: "raceElf", description: "raceElfDesc", mark: "E", trait: "traitKeenSenses", traitDescription: "traitKeenSensesDesc", stats: { strength: 8, dexterity: 12, constitution: 9, intelligence: 12, wisdom: 11, charisma: 10 } },
  { id: "dwarf", name: "raceDwarf", description: "raceDwarfDesc", mark: "D", trait: "traitStoneborn", traitDescription: "traitStonebornDesc", stats: { strength: 12, dexterity: 8, constitution: 13, intelligence: 9, wisdom: 11, charisma: 9 } },
  { id: "orc", name: "raceOrc", description: "raceOrcDesc", mark: "O", trait: "traitFierce", traitDescription: "traitFierceDesc", stats: { strength: 13, dexterity: 9, constitution: 12, intelligence: 8, wisdom: 9, charisma: 10 } }
];

const characterClasses = [
  { id: "warrior", name: "classWarrior", role: "classWarriorRole", description: "classWarriorDesc", ability: "abilityGuard", abilityDescription: "abilityGuardDesc", bonus: { strength: 2, constitution: 1 } },
  { id: "rogue", name: "classRogue", role: "classRogueRole", description: "classRogueDesc", ability: "abilityAmbush", abilityDescription: "abilityAmbushDesc", bonus: { dexterity: 2, intelligence: 1 } },
  { id: "monk", name: "classMonk", role: "classMonkRole", description: "classMonkDesc", ability: "abilityFocus", abilityDescription: "abilityFocusDesc", bonus: { dexterity: 1, wisdom: 2 } },
  { id: "ranger", name: "classRanger", role: "classRangerRole", description: "classRangerDesc", ability: "abilityMark", abilityDescription: "abilityMarkDesc", bonus: { dexterity: 1, wisdom: 1 } }
];

const starterLoadouts = {
  warrior: { weapon: "rusty-sword", armor: "patched-vest" },
  rogue: { weapon: "paired-knives", armor: "dark-cloak" },
  monk: { weapon: "hand-wraps", armor: "novice-robe" },
  ranger: { weapon: "shortbow", armor: "hunting-leathers" }
};

const itemCatalog = {
  "rusty-sword": { name: "gearSword", type: "weapon", stat: "strength", damageDie: 8, attackBonus: 0, price: 0, sellPrice: 2, compatibleClass: "warrior" },
  "patched-vest": { name: "gearChainVest", type: "armor", defense: 2, price: 0, sellPrice: 2, compatibleClass: "warrior" },
  "paired-knives": { name: "gearDaggers", type: "weapon", stat: "dexterity", damageDie: 6, attackBonus: 0, price: 0, sellPrice: 2, compatibleClass: "rogue" },
  "dark-cloak": { name: "gearDarkCloak", type: "armor", defense: 1, price: 0, sellPrice: 2, compatibleClass: "rogue" },
  "hand-wraps": { name: "gearHandWraps", type: "weapon", stat: "dexterity", damageDie: 6, attackBonus: 0, price: 0, sellPrice: 2, compatibleClass: "monk" },
  "novice-robe": { name: "gearNoviceRobe", type: "armor", defense: 0, price: 0, sellPrice: 2, compatibleClass: "monk" },
  shortbow: { name: "gearShortbow", type: "weapon", stat: "dexterity", damageDie: 8, attackBonus: 0, price: 0, sellPrice: 2, compatibleClass: "ranger" },
  "hunting-leathers": { name: "gearHuntingLeathers", type: "armor", defense: 1, price: 0, sellPrice: 2, compatibleClass: "ranger" },
  "iron-sword": { name: "itemIronSword", type: "weapon", stat: "strength", damageDie: 10, attackBonus: 1, price: 22, sellPrice: 11, compatibleClass: "warrior" },
  "reinforced-vest": { name: "itemReinforcedVest", type: "armor", defense: 3, price: 20, sellPrice: 10, compatibleClass: "warrior" },
  "steel-daggers": { name: "itemSteelDaggers", type: "weapon", stat: "dexterity", damageDie: 8, attackBonus: 1, price: 20, sellPrice: 10, compatibleClass: "rogue" },
  "shadow-cloak": { name: "itemShadowCloak", type: "armor", defense: 2, price: 18, sellPrice: 9, compatibleClass: "rogue" },
  "weighted-wraps": { name: "itemWeightedWraps", type: "weapon", stat: "dexterity", damageDie: 8, attackBonus: 1, price: 18, sellPrice: 9, compatibleClass: "monk" },
  "travel-robe": { name: "itemTravelRobe", type: "armor", defense: 1, price: 16, sellPrice: 8, compatibleClass: "monk" },
  longbow: { name: "itemLongbow", type: "weapon", stat: "dexterity", damageDie: 10, attackBonus: 1, price: 24, sellPrice: 12, compatibleClass: "ranger" },
  "reinforced-leathers": { name: "itemReinforcedLeathers", type: "armor", defense: 2, price: 18, sellPrice: 9, compatibleClass: "ranger" },
  "healing-tonic": { name: "itemHealingTonic", type: "consumable", healing: 8, price: 7, sellPrice: 3 },
  "slime-gel": { name: "itemSlimeGel", type: "material", price: 0, sellPrice: 4 },
  "goblin-token": { name: "itemGoblinToken", type: "material", price: 0, sellPrice: 6 },
  "kobold-scale": { name: "itemKoboldScale", type: "material", price: 0, sellPrice: 7 },
  "wolf-pelt": { name: "itemWolfPelt", type: "material", price: 0, sellPrice: 5 },
  "bandit-purse": { name: "itemBanditPurse", type: "material", price: 0, sellPrice: 8 },
  "bone-shard": { name: "itemBoneShard", type: "material", price: 0, sellPrice: 7 },
  "wisp-essence": { name: "itemWispEssence", type: "material", price: 0, sellPrice: 11 },
  "scavenged-blade": { name: "itemScavengedBlade", type: "weapon", stat: "class", damageDie: 8, attackBonus: 1, price: 0, sellPrice: 9, compatibleClass: "any" },
  "scale-vest": { name: "itemScaleVest", type: "armor", defense: 2, price: 0, sellPrice: 9, compatibleClass: "any" }
};

const shopStock = {
  warrior: ["iron-sword", "reinforced-vest", "healing-tonic"],
  rogue: ["steel-daggers", "shadow-cloak", "healing-tonic"],
  monk: ["weighted-wraps", "travel-robe", "healing-tonic"],
  ranger: ["longbow", "reinforced-leathers", "healing-tonic"]
};

const enemyDrops = {
  enemyGreenSlime: { coins: [1, 3], drops: [{ itemId: "slime-gel", chance: 0.65 }] },
  enemyLesserSlime: { coins: [1, 2], drops: [{ itemId: "slime-gel", chance: 0.5 }] },
  enemyGoblinRaider: { coins: [2, 4], drops: [{ itemId: "goblin-token", chance: 0.55 }, { itemId: "scavenged-blade", chance: 0.12 }] },
  enemyGoblinSlinger: { coins: [2, 4], drops: [{ itemId: "goblin-token", chance: 0.45 }, { itemId: "scavenged-blade", chance: 0.08 }] },
  enemyKoboldScout: { coins: [2, 4], drops: [{ itemId: "kobold-scale", chance: 0.55 }, { itemId: "scale-vest", chance: 0.1 }] },
  enemyKoboldTrapper: { coins: [2, 5], drops: [{ itemId: "kobold-scale", chance: 0.6 }, { itemId: "scale-vest", chance: 0.15 }] },
  enemyAshWolf: { coins: [1, 3], drops: [{ itemId: "wolf-pelt", chance: 0.62 }] },
  enemyWolfAlpha: { coins: [3, 5], drops: [{ itemId: "wolf-pelt", chance: 0.9 }] },
  enemyBanditCutpurse: { coins: [3, 6], drops: [{ itemId: "bandit-purse", chance: 0.4 }] },
  enemyBanditLookout: { coins: [3, 7], drops: [{ itemId: "bandit-purse", chance: 0.65 }] },
  enemyBoneSentinel: { coins: [2, 4], drops: [{ itemId: "bone-shard", chance: 0.7 }] },
  enemyWisp: { coins: [3, 6], drops: [{ itemId: "wisp-essence", chance: 0.72 }] }
};

const weaponRules = {
  warrior: { item: "gearSword", stat: "strength", die: 8, armor: 2 },
  rogue: { item: "gearDaggers", stat: "dexterity", die: 6, armor: 1 },
  monk: { item: "gearHandWraps", stat: "dexterity", die: 6, armor: 0 },
  ranger: { item: "gearShortbow", stat: "dexterity", die: 8, armor: 1 }
};

const worldLocations = [
  { id: "city", name: "siteCity", description: "siteCityDesc", level: 1, x: "16%", y: "74%", enemies: [] },
  { id: "slime-field", name: "siteSlime", description: "siteSlimeDesc", level: 1, x: "47%", y: "57%", enemies: [
    { name: "enemyGreenSlime", kind: "slime", count: 2, health: 8, defense: 10, attackBonus: 2, damage: 3, experience: 12 },
    { name: "enemyLesserSlime", kind: "slime", count: 1, health: 4, defense: 9, attackBonus: 1, damage: 2, experience: 6 }
  ] },
  { id: "goblin-cave", name: "siteGoblins", description: "siteGoblinsDesc", level: 2, x: "69%", y: "45%", enemies: [
    { name: "enemyGoblinRaider", kind: "goblin", count: 2, health: 12, defense: 12, attackBonus: 3, damage: 4, experience: 20 },
    { name: "enemyGoblinSlinger", kind: "goblin", count: 1, health: 7, defense: 11, attackBonus: 2, damage: 3, experience: 16 }
  ] },
  { id: "kobold-den", name: "siteKobolds", description: "siteKoboldsDesc", level: 3, x: "39%", y: "23%", enemies: [
    { name: "enemyKoboldScout", kind: "kobold", count: 2, health: 8, defense: 11, attackBonus: 3, damage: 3, experience: 16 },
    { name: "enemyKoboldTrapper", kind: "kobold", count: 1, health: 10, defense: 12, attackBonus: 2, damage: 4, experience: 20 }
  ] },
  { id: "wolf-den", name: "siteWolves", description: "siteWolvesDesc", level: 1, x: "26%", y: "45%", enemies: [
    { name: "enemyAshWolf", kind: "wolf", count: 2, health: 7, defense: 11, attackBonus: 2, damage: 3, experience: 14 },
    { name: "enemyWolfAlpha", kind: "wolf", count: 1, health: 12, defense: 12, attackBonus: 3, damage: 4, experience: 24 }
  ] },
  { id: "bandit-camp", name: "siteBandits", description: "siteBanditsDesc", level: 2, x: "86%", y: "82%", enemies: [
    { name: "enemyBanditCutpurse", kind: "bandit", count: 2, health: 10, defense: 12, attackBonus: 3, damage: 4, experience: 20 },
    { name: "enemyBanditLookout", kind: "bandit", count: 1, health: 8, defense: 12, attackBonus: 3, damage: 3, experience: 18 }
  ] },
  { id: "sunken-shrine", name: "siteShrine", description: "siteShrineDesc", level: 4, x: "86%", y: "28%", enemies: [
    { name: "enemyBoneSentinel", kind: "undead", count: 2, health: 14, defense: 13, attackBonus: 4, damage: 4, experience: 26 },
    { name: "enemyWisp", kind: "wisp", count: 1, health: 12, defense: 14, attackBonus: 4, damage: 5, experience: 32 }
  ] }
];

const dailyEvents = {
  2: { title: "eventCartTitle", description: "eventCartDescription", choices: ["eventCartHelp", "eventCartAvoid"] },
  4: { title: "eventColdTitle", description: "eventColdDescription", choices: ["eventRentBed", "eventSleepOutside"] }
};

const townContracts = [
  { id: "slime-clearance", title: "contractSlimes", description: "contractSlimesDesc", enemies: ["enemyGreenSlime", "enemyLesserSlime"], requiredKills: 3, rewardCoins: 12, rewardExperience: 20, level: 1 },
  { id: "wolf-cull", title: "contractWolves", description: "contractWolvesDesc", enemies: ["enemyAshWolf", "enemyWolfAlpha"], requiredKills: 3, rewardCoins: 18, rewardExperience: 28, level: 1 },
  { id: "bandit-toll", title: "contractBandits", description: "contractBanditsDesc", enemies: ["enemyBanditCutpurse", "enemyBanditLookout"], requiredKills: 3, rewardCoins: 30, rewardExperience: 40, level: 2 },
  { id: "sunken-lights", title: "contractShrine", description: "contractShrineDesc", enemies: ["enemyBoneSentinel", "enemyWisp"], requiredKills: 3, rewardCoins: 45, rewardExperience: 55, level: 4 }
];

function readStoredJson(key) {
  try {
    return JSON.parse(localStorage.getItem(key) || "null");
  } catch {
    return null;
  }
}

function calculateStats(ancestryId, classId) {
  const ancestry = ancestries.find((option) => option.id === ancestryId) || ancestries[0];
  const characterClass = characterClasses.find((option) => option.id === classId) || characterClasses[0];
  return Object.fromEntries(attributeKeys.map((key) => [key, ancestry.stats[key] + (characterClass.bonus[key] || 0)]));
}

function canEquipItem(itemId, type, classId) {
  const item = itemCatalog[itemId];
  return Boolean(item && item.type === type && (item.compatibleClass === "any" || item.compatibleClass === classId));
}

function getEquippedWeapon() {
  const classWeapon = weaponRules[confirmedCharacter?.classId] || weaponRules.warrior;
  const item = itemCatalog[heroProgress?.equippedWeaponId];
  if (!item || item.type !== "weapon") return { ...classWeapon, name: classWeapon.item, damageDie: classWeapon.die, attackBonus: 0 };
  return { ...item, name: item.name, stat: item.stat === "class" ? classWeapon.stat : item.stat };
}

function getEquippedArmor() {
  const classArmor = weaponRules[confirmedCharacter?.classId] || weaponRules.warrior;
  const item = itemCatalog[heroProgress?.equippedArmorId];
  return item?.type === "armor" ? item : { name: "gearArmor", defense: classArmor.armor };
}

function addInventoryItem(itemId, quantity = 1) {
  if (!itemCatalog[itemId] || quantity <= 0) return;
  const stack = heroProgress.inventory.find((entry) => entry.itemId === itemId);
  if (stack) stack.quantity += quantity;
  else heroProgress.inventory.push({ itemId, quantity });
}

function removeInventoryItem(itemId, quantity = 1) {
  const stack = heroProgress.inventory.find((entry) => entry.itemId === itemId);
  if (!stack) return false;
  stack.quantity -= quantity;
  if (stack.quantity <= 0) heroProgress.inventory = heroProgress.inventory.filter((entry) => entry !== stack);
  return true;
}

function getMaxHealth(character, level = 1) {
  const constitution = calculateStats(character?.ancestryId, character?.classId).constitution;
  return 14 + Math.floor((constitution - 10) / 2) + (Math.max(1, Number(level) || 1) - 1) * 3;
}

function createInitialProgress(character) {
  const loadout = starterLoadouts[character?.classId] || starterLoadouts.warrior;
  return {
    day: 1,
    level: 1,
    experience: 0,
    coins: 3,
    health: getMaxHealth(character),
    homeless: true,
    inventory: [{ itemId: loadout.weapon, quantity: 1 }, { itemId: loadout.armor, quantity: 1 }],
    equippedWeaponId: loadout.weapon,
    equippedArmorId: loadout.armor,
    pendingEventDay: null,
    activeContractId: null,
    contractKills: 0,
    completedContractIds: [],
    currentLocationId: "city",
    selectedLocationId: "city"
  };
}

const languageButtons = document.querySelectorAll("[data-language]");
const settingsDialog = document.querySelector("#settingsDialog");
const music = document.querySelector("#themeMusic");
const musicEnabled = document.querySelector("#musicEnabled");
const musicVolume = document.querySelector("#musicVolume");
const volumeValue = document.querySelector("#volumeValue");
const characterNameInput = document.querySelector("#characterName");
const builderPortrait = document.querySelector("#builderPortrait");
const heroPortrait = document.querySelector("#heroPortrait");
const savedCharacter = readStoredJson("marches-character");
const savedProgress = savedCharacter ? readStoredJson("marches-world") : null;
const selectedCharacter = {
  ancestryId: ancestries.some((ancestry) => ancestry.id === savedCharacter?.ancestryId) ? savedCharacter.ancestryId : "human",
  classId: characterClasses.some((characterClass) => characterClass.id === savedCharacter?.classId) ? savedCharacter.classId : "warrior",
  name: typeof savedCharacter?.name === "string" ? savedCharacter.name : ""
};
let confirmedCharacter = savedCharacter && typeof savedCharacter === "object" ? savedCharacter : null;
let heroProgress = { ...createInitialProgress(confirmedCharacter), ...(savedProgress || {}) };
heroProgress.day = Math.max(1, Number(heroProgress.day) || 1);
heroProgress.level = Math.max(1, Number(heroProgress.level) || 1);
heroProgress.experience = Math.max(0, Number(heroProgress.experience) || 0);
heroProgress.coins = Math.max(0, Number(heroProgress.coins) || 0);
heroProgress.health = Math.min(getMaxHealth(confirmedCharacter, heroProgress.level), Math.max(0, Number(heroProgress.health ?? getMaxHealth(confirmedCharacter, heroProgress.level))));
heroProgress.homeless = heroProgress.homeless !== false;
heroProgress.activeContractId = townContracts.some((contract) => contract.id === heroProgress.activeContractId) ? heroProgress.activeContractId : null;
heroProgress.contractKills = Math.max(0, Math.floor(Number(heroProgress.contractKills) || 0));
heroProgress.completedContractIds = Array.isArray(heroProgress.completedContractIds)
  ? [...new Set(heroProgress.completedContractIds.filter((id) => townContracts.some((contract) => contract.id === id)))]
  : [];
if (heroProgress.completedContractIds.includes(heroProgress.activeContractId)) heroProgress.activeContractId = null;
heroProgress.selectedLocationId = worldLocations.some((location) => location.id === heroProgress.selectedLocationId) ? heroProgress.selectedLocationId : "city";
const defaultLoadout = starterLoadouts[confirmedCharacter?.classId] || starterLoadouts.warrior;
heroProgress.inventory = Array.isArray(heroProgress.inventory)
  ? heroProgress.inventory.filter((entry) => itemCatalog[entry.itemId] && Number(entry.quantity) > 0).map((entry) => ({ itemId: entry.itemId, quantity: Math.floor(Number(entry.quantity)) }))
  : [];
for (const itemId of [defaultLoadout.weapon, defaultLoadout.armor]) {
  if (!heroProgress.inventory.some((entry) => entry.itemId === itemId)) heroProgress.inventory.push({ itemId, quantity: 1 });
}
if (!canEquipItem(heroProgress.equippedWeaponId, "weapon", confirmedCharacter?.classId) || !heroProgress.inventory.some((entry) => entry.itemId === heroProgress.equippedWeaponId)) heroProgress.equippedWeaponId = defaultLoadout.weapon;
if (!canEquipItem(heroProgress.equippedArmorId, "armor", confirmedCharacter?.classId) || !heroProgress.inventory.some((entry) => entry.itemId === heroProgress.equippedArmorId)) heroProgress.equippedArmorId = defaultLoadout.armor;
let activeBattle = null;
let language = localStorage.getItem("marches-language") || "ru";
let audioStarted = false;

function setLanguage(nextLanguage) {
  language = translations[nextLanguage] ? nextLanguage : "ru";
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const translation = translations[language][element.dataset.i18n];
    if (translation !== undefined) element.textContent = translation;
  });
  languageButtons.forEach((button) => {
    const isActive = button.dataset.language === language;
    button.classList.toggle("is-active", isActive);
    button.setAttribute("aria-pressed", String(isActive));
  });
  localStorage.setItem("marches-language", language);
  renderCharacterBuilder();
  renderWorld();
  renderTown();
  if (activeBattle) renderBattle();
}

function setMusicEnabled(enabled) {
  musicEnabled.checked = enabled;
  localStorage.setItem("marches-music-enabled", String(enabled));
  if (!enabled) {
    music.pause();
  } else {
    startMusic();
  }
}

function updateVolume() {
  const volume = Number(musicVolume.value);
  music.volume = volume / 100;
  volumeValue.value = `${volume}%`;
  volumeValue.textContent = `${volume}%`;
  localStorage.setItem("marches-music-volume", String(volume));
}

function startMusic() {
  if (!musicEnabled.checked) return;
  music.play().then(() => {
    audioStarted = true;
  }).catch(() => {});
}

function showView(name) {
  document.querySelectorAll("[data-view]").forEach((view) => {
    view.hidden = view.dataset.view !== name;
  });
}

languageButtons.forEach((button) => {
  button.addEventListener("click", () => setLanguage(button.dataset.language));
});

document.querySelector("#playButton").addEventListener("click", () => {
  startMusic();
  if (confirmedCharacter) {
    renderWorld();
    showView("world");
    const pendingEvent = dailyEvents[heroProgress.pendingEventDay];
    if (pendingEvent) showDayEvent(pendingEvent);
  } else {
    showView("character");
  }
});

document.querySelector("#settingsButton").addEventListener("click", () => {
  startMusic();
  settingsDialog.showModal();
});

document.querySelector("#exitButton").addEventListener("click", () => {
  showView("exit");
});

document.querySelectorAll("[data-view-button]").forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewButton));
});

function renderStats(container, ancestry, characterClass) {
  const fragment = document.createDocumentFragment();
  attributeKeys.forEach((key) => {
    const baseValue = ancestry.stats[key];
    const bonus = characterClass.bonus[key] || 0;
    const total = baseValue + bonus;
    const item = document.createElement("div");
    item.className = "stat-item";
    item.setAttribute("role", "img");
    item.setAttribute("aria-label", `${translations[language][attributes[key].key]}: ${total}`);
    item.title = `${translations[language].baseValue}: ${baseValue}; ${translations[language].classBonus}: ${bonus || 0}`;

    const label = document.createElement("span");
    label.className = "stat-short";
    label.textContent = attributes[key].short;
    const value = document.createElement("strong");
    value.className = "stat-value";
    value.textContent = String(total);
    const formula = document.createElement("span");
    formula.className = "stat-formula";
    formula.textContent = bonus ? `${baseValue} +${bonus}` : `${baseValue} ·`;
    item.append(label, value, formula);
    fragment.append(item);
  });
  container.replaceChildren(fragment);
}

function drawPortrait(canvas, ancestryId, classId) {
  const context = canvas.getContext("2d");
  const palette = {
    human: { skin: "#bc805d", hair: "#392821", cloth: "#526b62" },
    elf: { skin: "#e0c29a", hair: "#c2a75f", cloth: "#4e7265" },
    dwarf: { skin: "#cc8d62", hair: "#805039", cloth: "#79583b" },
    orc: { skin: "#91a36c", hair: "#34412e", cloth: "#536345" }
  }[ancestryId] || { skin: "#bc805d", hair: "#392821", cloth: "#526b62" };
  const ancestry = ancestries.find((option) => option.id === ancestryId) || ancestries[0];
  const characterClass = characterClasses.find((option) => option.id === classId) || characterClasses[0];
  context.imageSmoothingEnabled = false;
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#1c2a27";
  context.fillRect(0, 0, 64, 72);
  context.fillStyle = "#293a32";
  context.fillRect(4, 4, 56, 64);
  context.fillStyle = "#1a2420";
  context.fillRect(10, 55, 44, 13);
  context.fillStyle = palette.cloth;
  context.fillRect(11, 51, 42, 19);
  context.fillRect(17, 47, 30, 8);
  context.fillStyle = "#d2ae6c";
  context.fillRect(29, 49, 6, 18);
  context.fillStyle = palette.skin;
  context.fillRect(26, 42, 12, 12);
  context.fillRect(18, 19, 28, 27);
  context.fillRect(15, 27, 4, 11);
  context.fillRect(45, 27, 4, 11);
  context.fillStyle = palette.hair;
  context.fillRect(18, 13, 28, 9);
  context.fillRect(14, 18, 7, 12);
  context.fillRect(43, 18, 7, 12);
  context.fillRect(20, 10, 22, 5);
  context.fillStyle = "#25231e";
  context.fillRect(23, 29, 4, 3);
  context.fillRect(37, 29, 4, 3);
  context.fillStyle = "#eadcc0";
  context.fillRect(24, 29, 2, 2);
  context.fillRect(38, 29, 2, 2);
  context.fillStyle = "#7b4436";
  context.fillRect(29, 39, 8, 2);

  if (ancestryId === "elf") {
    context.fillStyle = palette.skin;
    context.beginPath();
    context.moveTo(17, 26);
    context.lineTo(5, 20);
    context.lineTo(16, 34);
    context.closePath();
    context.fill();
    context.beginPath();
    context.moveTo(47, 26);
    context.lineTo(59, 20);
    context.lineTo(48, 34);
    context.closePath();
    context.fill();
  }

  if (ancestryId === "orc") {
    context.fillStyle = "#eee0bc";
    context.fillRect(21, 40, 4, 6);
    context.fillRect(41, 40, 4, 6);
  }

  if (ancestryId === "dwarf") {
    context.fillStyle = palette.hair;
    context.fillRect(20, 38, 24, 11);
    context.fillRect(24, 46, 16, 5);
    context.fillStyle = "#d7b17a";
    context.fillRect(28, 42, 8, 3);
  }

  if (classId === "warrior") {
    context.fillStyle = "#9ba69b";
    context.fillRect(51, 17, 4, 38);
    context.fillStyle = "#c5a15e";
    context.fillRect(47, 33, 12, 3);
  } else if (classId === "rogue") {
    context.fillStyle = "#202a28";
    context.fillRect(15, 13, 34, 7);
    context.fillStyle = "#b3b8a8";
    context.fillRect(52, 39, 3, 14);
  } else if (classId === "monk") {
    context.fillStyle = "#d2ae6c";
    context.fillRect(17, 14, 30, 4);
    context.fillRect(22, 37, 4, 4);
    context.fillRect(39, 37, 4, 4);
  } else {
    context.fillStyle = "#bb9560";
    context.fillRect(51, 19, 3, 36);
    context.fillRect(48, 23, 3, 4);
    context.fillRect(54, 23, 3, 4);
    context.fillRect(48, 47, 3, 4);
    context.fillRect(54, 47, 3, 4);
  }

  context.strokeStyle = "rgba(220, 190, 123, 0.72)";
  context.lineWidth = 1;
  context.strokeRect(4.5, 4.5, 55, 63);
  canvas.setAttribute("aria-label", `${translations[language][ancestry.name]} · ${translations[language][characterClass.name]}`);
}

function renderCharacterBuilder() {
  if (!characterNameInput) return;
  const ancestry = ancestries.find((option) => option.id === selectedCharacter.ancestryId) || ancestries[0];
  const characterClass = characterClasses.find((option) => option.id === selectedCharacter.classId) || characterClasses[0];
  drawPortrait(builderPortrait, ancestry.id, characterClass.id);
  const raceOptions = document.querySelector("#raceOptions");
  const classOptions = document.querySelector("#classOptions");

  raceOptions.replaceChildren(...ancestries.map((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "race-option";
    button.setAttribute("aria-pressed", String(option.id === ancestry.id));
    button.setAttribute("aria-label", `${translations[language][option.name]}. ${translations[language][option.description]}`);
    const mark = document.createElement("span");
    mark.className = "option-mark";
    mark.textContent = option.mark;
    const copy = document.createElement("span");
    copy.className = "option-copy";
    const name = document.createElement("strong");
    name.textContent = translations[language][option.name];
    const description = document.createElement("span");
    description.textContent = translations[language][option.description];
    copy.append(name, description);
    button.append(mark, copy);
    button.addEventListener("click", () => {
      selectedCharacter.ancestryId = option.id;
      renderCharacterBuilder();
    });
    return button;
  }));

  classOptions.replaceChildren(...characterClasses.map((option) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "class-option";
    button.setAttribute("aria-pressed", String(option.id === characterClass.id));
    button.setAttribute("aria-label", `${translations[language][option.name]}. ${translations[language][option.description]}`);
    const name = document.createElement("strong");
    name.textContent = translations[language][option.name];
    const role = document.createElement("span");
    role.className = "class-role";
    role.textContent = translations[language][option.role];
    const description = document.createElement("span");
    description.className = "class-description";
    description.textContent = translations[language][option.description];
    const bonuses = attributeKeys.filter((key) => option.bonus[key]).map((key) => `+${option.bonus[key]} ${attributes[key].short}`);
    const bonus = document.createElement("span");
    bonus.className = "class-bonus";
    bonus.textContent = bonuses.join(" · ");
    button.append(name, role, description, bonus);
    button.addEventListener("click", () => {
      selectedCharacter.classId = option.id;
      renderCharacterBuilder();
    });
    return button;
  }));

  characterNameInput.value = selectedCharacter.name || (language === "ru" ? "Аэлрин" : "Aelrin");
  document.querySelector("#previewBuild").textContent = `${translations[language][ancestry.name]} · ${translations[language][characterClass.name]}`;
  document.querySelector("#racialTraitName").textContent = translations[language][ancestry.trait];
  document.querySelector("#racialTraitDescription").textContent = translations[language][ancestry.traitDescription];
  document.querySelector("#classAbilityName").textContent = translations[language][characterClass.ability];
  document.querySelector("#classAbilityDescription").textContent = translations[language][characterClass.abilityDescription];
  renderStats(document.querySelector("#statsGrid"), ancestry, characterClass);
}

function saveWorldProgress() {
  localStorage.setItem("marches-world", JSON.stringify(heroProgress));
}

function translation(key) {
  return translations[language][key] || key;
}

function renderLocationDetails() {
  const location = worldLocations.find((option) => option.id === heroProgress.selectedLocationId) || worldLocations[0];
  const locked = heroProgress.level < location.level;
  const recommendation = document.querySelector("#locationRecommendation");
  const description = document.querySelector("#locationDescription");
  recommendation.textContent = locked
    ? `${translation("levelRequirement")} ${location.level}`
    : location.id === "city" ? translation("safeHaven") : `${translation("dangerLevel")} ${location.level}`;
  recommendation.classList.toggle("is-locked", locked);
  document.querySelector("#locationTitle").textContent = translation(location.name);
  description.textContent = locked
    ? `${translation(location.description)} ${translation("levelRequirement")} ${location.level}.`
    : translation(location.description);

  const roster = document.querySelector("#enemyRoster");
  if (locked) {
    roster.replaceChildren();
    return;
  }
  if (!location.enemies.length) {
    const empty = document.createElement("p");
    empty.className = "no-enemies";
    empty.textContent = translation("noThreats");
    roster.replaceChildren(empty);
    return;
  }

  roster.replaceChildren(...location.enemies.map((enemy) => {
    const row = document.createElement("div");
    row.className = "enemy-entry";
    const glyph = document.createElement("span");
    glyph.className = `enemy-glyph enemy-glyph--${enemy.kind}`;
    glyph.setAttribute("aria-hidden", "true");
    const details = document.createElement("span");
    details.className = "enemy-copy";
    const name = document.createElement("strong");
    name.textContent = translation(enemy.name);
    const count = document.createElement("span");
    count.textContent = `×${enemy.count} · ${enemy.health} HP ${translation("enemyEach")}`;
    details.append(name, count);
    row.append(glyph, details);
    return row;
  }));
}

function renderWorld() {
  if (!confirmedCharacter) return;
  const ancestry = ancestries.find((option) => option.id === confirmedCharacter.ancestryId) || ancestries[0];
  const characterClass = characterClasses.find((option) => option.id === confirmedCharacter.classId) || characterClasses[0];
  const maxHealth = getMaxHealth(confirmedCharacter, heroProgress.level);
  heroProgress.health = Math.min(maxHealth, heroProgress.health);
  const currentLocation = worldLocations.find((location) => location.id === heroProgress.currentLocationId) || worldLocations[0];

  drawPortrait(heroPortrait, ancestry.id, characterClass.id);
  document.querySelector("#heroName").textContent = confirmedCharacter.name || translation(ancestry.name);
  document.querySelector("#heroLevel").textContent = `${translation("level")} ${heroProgress.level}`;
  document.querySelector("#heroBuild").textContent = `${translation(ancestry.name)} · ${translation(characterClass.name)}`;
  document.querySelector("#worldSubtitle").textContent = `${translation("dayLabel")} ${heroProgress.day} · ${translation(currentLocation.name)}`;
  document.querySelector("#dayCounter").textContent = `${translation("dayLabel")} ${heroProgress.day}`;
  document.querySelector("#healthValue").textContent = `${heroProgress.health} / ${maxHealth}`;
  const healthBar = document.querySelector("#healthBar");
  healthBar.max = maxHealth;
  healthBar.value = heroProgress.health;
  document.querySelector("#experienceValue").textContent = `${heroProgress.experience} / 100`;
  document.querySelector("#experienceBar").value = heroProgress.experience % 100;
  document.querySelector("#coinValue").textContent = String(heroProgress.coins);
  renderStats(document.querySelector("#worldStats"), ancestry, characterClass);

  const equipment = [
    { slot: "gearWeapon", item: getEquippedWeapon().name },
    { slot: "gearArmor", item: getEquippedArmor().name }
  ].map((item) => {
    const row = document.createElement("li");
    const slot = document.createElement("span");
    slot.textContent = translation(item.slot);
    const name = document.createElement("strong");
    name.textContent = translation(item.item);
    row.append(slot, name);
    return row;
  });
  document.querySelector("#equipmentList").replaceChildren(...equipment);

  const conditions = [];
  if (heroProgress.homeless) conditions.push(["conditionHomeless", "homelessEffect", "homeless"]);
  if (heroProgress.health < maxHealth) conditions.push(["conditionInjured", "injuryEffect", "injured"]);
  if (!heroProgress.homeless) conditions.push(["conditionSheltered", "shelteredEffect", "sheltered"]);
  if (!conditions.length) conditions.push(["conditionReady", "readyConditionEffect", "ready"]);
  document.querySelector("#conditionList").replaceChildren(...conditions.map(([titleKey, detailKey, kind]) => {
    const item = document.createElement("div");
    item.className = `condition-item condition-item--${kind}`;
    const title = document.createElement("strong");
    title.textContent = translation(titleKey);
    const detail = document.createElement("span");
    detail.textContent = translation(detailKey);
    item.append(title, detail);
    return item;
  }));

  document.querySelectorAll(".map-location").forEach((button) => {
    const location = worldLocations.find((option) => option.id === button.dataset.location);
    if (!location) return;
    const locked = heroProgress.level < location.level;
    const selected = location.id === heroProgress.selectedLocationId;
    button.disabled = locked;
    button.classList.toggle("is-selected", selected);
    button.setAttribute("aria-pressed", String(selected));
    button.style.setProperty("--x", location.x);
    button.style.setProperty("--y", location.y);
    button.querySelector(".map-location-state").textContent = locked
      ? `${translation("levelRequirement")} ${location.level}`
      : location.id === heroProgress.currentLocationId ? translation("currentLocation") : translation("available");
  });
  renderLocationDetails();
  const selectedLocation = worldLocations.find((location) => location.id === heroProgress.selectedLocationId) || worldLocations[0];
  const enterButton = document.querySelector("#enterLocationButton");
  enterButton.hidden = heroProgress.level < selectedLocation.level;
  enterButton.disabled = selectedLocation.id !== "city" && heroProgress.health <= 0;
  enterButton.textContent = translation(selectedLocation.id === "city" ? "openTown" : "enterArea");
}

function itemDescription(item) {
  if (item.type === "weapon") {
    const weapon = item.stat === "class" ? weaponRules[confirmedCharacter.classId] : item;
    const stat = weapon.stat || "strength";
    return `1d${item.damageDie} ${attributes[stat].short} · +${item.attackBonus} ${translation("weaponBonus")}`;
  }
  if (item.type === "armor") return `${translation("armorBonus")} +${item.defense}`;
  if (item.type === "consumable") return `${translation("healAmount")} +${item.healing} HP`;
  return `${translation("sellValue")}: ${item.sellPrice} ${translation("coinsShort")}`;
}

function drawItemSprite(canvas, itemId) {
  const context = canvas.getContext("2d");
  const item = itemCatalog[itemId];
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.save();
  context.translate(canvas.width / 2, canvas.height / 2);
  if (item.type === "weapon") {
    context.rotate(-Math.PI / 4);
    context.fillStyle = "#d8d0b8";
    context.fillRect(-2, -13, 4, 18);
    context.fillStyle = "#f0dfb1";
    context.fillRect(-1, -12, 1, 13);
    context.fillStyle = "#c2a15e";
    context.fillRect(-5, 3, 10, 2);
    context.fillStyle = "#7d5140";
    context.fillRect(-1, 5, 2, 8);
    context.fillRect(-3, 12, 6, 2);
  } else if (item.type === "armor") {
    context.fillStyle = "#697d72";
    context.beginPath();
    context.moveTo(0, -14);
    context.lineTo(12, -9);
    context.lineTo(10, 5);
    context.lineTo(0, 14);
    context.lineTo(-10, 5);
    context.lineTo(-12, -9);
    context.closePath();
    context.fill();
    context.strokeStyle = "#d3ae69";
    context.lineWidth = 2;
    context.stroke();
    context.fillStyle = "#dbc891";
    context.fillRect(-1, -9, 2, 17);
    context.fillRect(-7, -2, 14, 2);
  } else if (item.type === "consumable") {
    context.fillStyle = "#d3ae69";
    context.fillRect(-4, -13, 8, 4);
    context.fillRect(-6, -9, 12, 19);
    context.fillStyle = "#904c3b";
    context.fillRect(-4, 1, 8, 7);
    context.fillStyle = "#f0dfb1";
    context.fillRect(-2, -6, 2, 5);
    context.strokeStyle = "#e9d8a6";
    context.strokeRect(-6.5, -9.5, 13, 20);
  } else {
    const color = itemId === "wolf-pelt" ? "#9ba69b"
      : itemId === "wisp-essence" ? "#91c7be"
        : itemId === "bone-shard" ? "#d9d3ba"
          : itemId === "bandit-purse" ? "#c09b5f"
            : itemId === "slime-gel" ? "#8eac65" : "#8b7b62";
    const glow = context.createRadialGradient(-3, -4, 2, 0, 0, 15);
    glow.addColorStop(0, "#fff0c1");
    glow.addColorStop(0.25, color);
    glow.addColorStop(1, "rgba(21, 33, 27, 0.1)");
    context.fillStyle = glow;
    context.beginPath();
    context.arc(0, 0, 13, 0, Math.PI * 2);
    context.fill();
    context.fillStyle = "rgba(241, 228, 194, 0.82)";
    context.fillRect(-2, -3, 3, 3);
  }
  context.restore();
}

function renderShop() {
  const stock = shopStock[confirmedCharacter.classId] || shopStock.warrior;
  const shop = document.querySelector("#townShop");
  shop.replaceChildren(...stock.map((itemId) => {
    const item = itemCatalog[itemId];
    const row = document.createElement("article");
    row.className = "shop-item";
    const sprite = document.createElement("canvas");
    sprite.className = `item-sprite item-sprite--${item.type}`;
    sprite.width = 40;
    sprite.height = 40;
    sprite.setAttribute("role", "img");
    sprite.setAttribute("aria-label", translation(item.name));
    drawItemSprite(sprite, itemId);
    const copy = document.createElement("div");
    copy.className = "shop-item-copy";
    const name = document.createElement("strong");
    name.textContent = translation(item.name);
    const detail = document.createElement("span");
    detail.textContent = itemDescription(item);
    copy.append(name, detail);
    const button = document.createElement("button");
    button.type = "button";
    button.className = "shop-buy-button";
    const owned = item.type !== "consumable" && heroProgress.inventory.some((entry) => entry.itemId === itemId);
    button.textContent = owned ? translation("alreadyOwned") : `${translation("buy")} · ${item.price} ${translation("coinsShort")}`;
    button.disabled = owned || heroProgress.coins < item.price;
    button.addEventListener("click", () => buyTownItem(itemId));
    row.append(sprite, copy, button);
    return row;
  }));
}

function renderInventory() {
  const inventory = document.querySelector("#townInventory");
  if (!heroProgress.inventory.length) {
    const empty = document.createElement("p");
    empty.className = "inventory-empty";
    empty.textContent = translation("noInventory");
    inventory.replaceChildren(empty);
    return;
  }
  inventory.replaceChildren(...heroProgress.inventory.map((entry) => {
    const item = itemCatalog[entry.itemId];
    if (!item) return null;
    const row = document.createElement("article");
    row.className = "inventory-item";
    const sprite = document.createElement("canvas");
    sprite.className = `item-sprite item-sprite--${item.type}`;
    sprite.width = 40;
    sprite.height = 40;
    sprite.setAttribute("role", "img");
    sprite.setAttribute("aria-label", translation(item.name));
    drawItemSprite(sprite, entry.itemId);
    const copy = document.createElement("div");
    copy.className = "inventory-item-copy";
    const type = document.createElement("span");
    type.className = "inventory-type";
    type.textContent = translation(item.type === "weapon" ? "itemWeapon" : item.type === "armor" ? "itemArmor" : item.type === "consumable" ? "itemConsumable" : "itemMaterial");
    const name = document.createElement("strong");
    name.textContent = `${translation(item.name)}${entry.quantity > 1 ? ` ×${entry.quantity}` : ""}`;
    const detail = document.createElement("span");
    detail.textContent = itemDescription(item);
    copy.append(type, name, detail);
    const actions = document.createElement("div");
    actions.className = "inventory-item-actions";
    if (item.type === "weapon" || item.type === "armor") {
      const equipped = item.type === "weapon" ? heroProgress.equippedWeaponId === entry.itemId : heroProgress.equippedArmorId === entry.itemId;
      const button = document.createElement("button");
      button.type = "button";
      button.className = "inventory-action";
      button.textContent = translation(equipped ? "equipped" : "equip");
      button.disabled = equipped || !canEquipItem(entry.itemId, item.type, confirmedCharacter.classId);
      button.addEventListener("click", () => equipTownItem(entry.itemId));
      actions.append(button);
    } else if (item.type === "consumable") {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "inventory-action";
      button.textContent = translation("useItem");
      button.disabled = heroProgress.health >= getMaxHealth(confirmedCharacter, heroProgress.level);
      button.addEventListener("click", () => useTownItem(entry.itemId));
      actions.append(button);
    } else {
      const button = document.createElement("button");
      button.type = "button";
      button.className = "inventory-action";
      button.textContent = `${translation("sell")} · ${item.sellPrice}`;
      button.addEventListener("click", () => sellTownItem(entry.itemId));
      actions.append(button);
    }
    row.append(sprite, copy, actions);
    return row;
  }).filter(Boolean));
}

function renderTownContracts() {
  const container = document.querySelector("#townContracts");
  if (!container) return;
  const activeContract = townContracts.find((contract) => contract.id === heroProgress.activeContractId);
  container.replaceChildren(...townContracts.map((contract) => {
    const completed = heroProgress.completedContractIds.includes(contract.id);
    const isActive = activeContract?.id === contract.id;
    const locked = heroProgress.level < contract.level;
    const ready = isActive && heroProgress.contractKills >= contract.requiredKills;
    const card = document.createElement("article");
    card.className = `contract-card${isActive ? " is-active" : ""}${ready ? " is-ready" : ""}`;
    const copy = document.createElement("div");
    copy.className = "contract-copy";
    const title = document.createElement("h4");
    title.textContent = translation(contract.title);
    const description = document.createElement("p");
    description.textContent = translation(contract.description);
    const reward = document.createElement("span");
    reward.className = "contract-reward";
    reward.textContent = `${translation("contractReward")}: ${contract.rewardCoins} ${translation("coinsShort")} · ${contract.rewardExperience} XP`;
    copy.append(title, description, reward);

    const action = document.createElement("button");
    action.type = "button";
    action.className = "contract-action";
    if (completed) {
      action.textContent = translation("contractClaimed");
      action.disabled = true;
    } else if (ready) {
      action.textContent = translation("contractReady");
      action.addEventListener("click", () => claimTownContract(contract.id));
    } else if (isActive) {
      action.textContent = `${translation("contractProgress")}: ${heroProgress.contractKills}/${contract.requiredKills}`;
      action.disabled = true;
    } else if (locked) {
      action.textContent = `${translation("contractLocked")} ${contract.level}`;
      action.disabled = true;
    } else if (activeContract) {
      action.textContent = translation("contractBusy");
      action.disabled = true;
    } else {
      action.textContent = translation("acceptContract");
      action.addEventListener("click", () => acceptTownContract(contract.id));
    }

    card.append(copy, action);
    if (isActive) {
      const progress = document.createElement("progress");
      progress.className = "contract-progress-bar";
      progress.max = contract.requiredKills;
      progress.value = Math.min(heroProgress.contractKills, contract.requiredKills);
      card.append(progress);
    }
    return card;
  }));
}

function acceptTownContract(contractId) {
  const contract = townContracts.find((entry) => entry.id === contractId);
  if (!contract || heroProgress.activeContractId || heroProgress.level < contract.level || heroProgress.completedContractIds.includes(contractId)) return;
  heroProgress.activeContractId = contract.id;
  heroProgress.contractKills = 0;
  saveWorldProgress();
  renderTownContracts();
  showTownNotice(translation("contractAccepted"));
}

function claimTownContract(contractId) {
  const contract = townContracts.find((entry) => entry.id === contractId);
  if (!contract || heroProgress.activeContractId !== contractId || heroProgress.contractKills < contract.requiredKills) return;
  heroProgress.coins += contract.rewardCoins;
  const levelsGained = grantExperience(contract.rewardExperience);
  heroProgress.completedContractIds.push(contract.id);
  heroProgress.activeContractId = null;
  heroProgress.contractKills = 0;
  saveWorldProgress();
  renderTown();
  renderWorld();
  const levelMessage = levelsGained ? ` ${translation("levelUp")}: ${heroProgress.level}.` : "";
  showTownNotice(`${translation("contractClaimNotice")} +${contract.rewardCoins} ${translation("coinsShort")}, +${contract.rewardExperience} XP.${levelMessage}`);
}

function recordContractKill(enemy) {
  const contract = townContracts.find((entry) => entry.id === heroProgress.activeContractId);
  if (!contract || !contract.enemies.includes(enemy.name) || heroProgress.contractKills >= contract.requiredKills) return;
  heroProgress.contractKills += 1;
  const progress = `${translation("contractProgress")}: ${heroProgress.contractKills}/${contract.requiredKills}`;
  addBattleLog(`${translation("contractBattleProgress")}: ${progress}.`);
  saveWorldProgress();
}

function renderTown() {
  if (!confirmedCharacter || !document.querySelector("#townCoins")) return;
  const ancestry = ancestries.find((option) => option.id === confirmedCharacter.ancestryId) || ancestries[0];
  const characterClass = characterClasses.find((option) => option.id === confirmedCharacter.classId) || characterClasses[0];
  document.querySelector("#townCoins").textContent = String(heroProgress.coins);
  document.querySelector("#townHeroLevel").textContent = `${translation("level")} ${heroProgress.level}`;
  document.querySelector("#townHeroName").textContent = confirmedCharacter.name || translation(ancestry.name);
  document.querySelector("#townHeroBuild").textContent = `${translation(ancestry.name)} · ${translation(characterClass.name)}`;
  document.querySelector("#townExperience").textContent = `${heroProgress.experience} / 100`;
  document.querySelector("#townExperienceBar").value = heroProgress.experience % 100;
  document.querySelector("#innButton").disabled = heroProgress.coins < 5 || (!heroProgress.homeless && heroProgress.health === getMaxHealth(confirmedCharacter, heroProgress.level));
  document.querySelector("#trainingButton").disabled = heroProgress.coins < 12;
  renderShop();
  renderInventory();
  renderTownContracts();
}

function showTownNotice(message) {
  const notice = document.querySelector("#townNotice");
  notice.textContent = message;
  notice.hidden = false;
}

function finishCityService(message) {
  heroProgress.day += 1;
  const event = dailyEvents[heroProgress.day];
  heroProgress.pendingEventDay = event ? heroProgress.day : null;
  saveWorldProgress();
  renderTown();
  renderWorld();
  showTownNotice(message);
  if (event) showDayEvent(event);
}

function grantExperience(amount) {
  const previousMaxHealth = getMaxHealth(confirmedCharacter, heroProgress.level);
  heroProgress.experience += amount;
  let levelsGained = 0;
  while (heroProgress.experience >= 100) {
    heroProgress.experience -= 100;
    heroProgress.level += 1;
    levelsGained += 1;
  }
  const nextMaxHealth = getMaxHealth(confirmedCharacter, heroProgress.level);
  heroProgress.health = Math.min(nextMaxHealth, heroProgress.health + nextMaxHealth - previousMaxHealth);
  return levelsGained;
}

function buyTownItem(itemId) {
  const item = itemCatalog[itemId];
  if (!item || heroProgress.coins < item.price || (item.type !== "consumable" && heroProgress.inventory.some((entry) => entry.itemId === itemId))) return;
  heroProgress.coins -= item.price;
  addInventoryItem(itemId);
  saveWorldProgress();
  renderTown();
  renderWorld();
  showTownNotice(translation("inventoryChanged"));
}

function equipTownItem(itemId) {
  const item = itemCatalog[itemId];
  if (!item || !canEquipItem(itemId, item.type, confirmedCharacter.classId)) return;
  if (item.type === "weapon") heroProgress.equippedWeaponId = itemId;
  else if (item.type === "armor") heroProgress.equippedArmorId = itemId;
  else return;
  saveWorldProgress();
  renderTown();
  renderWorld();
  showTownNotice(translation("inventoryChanged"));
}

function sellTownItem(itemId) {
  const item = itemCatalog[itemId];
  if (!item || item.type !== "material" || !removeInventoryItem(itemId)) return;
  heroProgress.coins += item.sellPrice;
  saveWorldProgress();
  renderTown();
  renderWorld();
  showTownNotice(`${translation("sell")}: +${item.sellPrice} ${translation("coinsShort")}.`);
}

function useTownItem(itemId) {
  const item = itemCatalog[itemId];
  if (!item || item.type !== "consumable" || heroProgress.health >= getMaxHealth(confirmedCharacter, heroProgress.level)) return;
  if (!removeInventoryItem(itemId)) return;
  heroProgress.health = Math.min(getMaxHealth(confirmedCharacter, heroProgress.level), heroProgress.health + item.healing);
  saveWorldProgress();
  renderTown();
  renderWorld();
  showTownNotice(translation("itemUsed"));
}

function restAtInn() {
  if (heroProgress.coins < 5) return;
  heroProgress.coins -= 5;
  heroProgress.day += 1;
  heroProgress.homeless = false;
  heroProgress.currentLocationId = "city";
  heroProgress.health = getMaxHealth(confirmedCharacter, heroProgress.level);
  const event = dailyEvents[heroProgress.day];
  heroProgress.pendingEventDay = event ? heroProgress.day : null;
  saveWorldProgress();
  renderTown();
  renderWorld();
  showTownNotice(translation("serviceRestSuccess"));
  if (event) showDayEvent(event);
}

function trainInTown() {
  if (heroProgress.coins < 12) return;
  heroProgress.coins -= 12;
  const levelsGained = grantExperience(30);
  finishCityService(`${translation("trainingSuccess")}${levelsGained ? ` ${translation("levelUp")}: ${heroProgress.level}.` : ""}`);
}

function enterSelectedLocation() {
  if (heroProgress.selectedLocationId === "city") {
    renderTown();
    showView("town");
  } else {
    startBattle();
  }
}

function showWorldNotice(message) {
  const notice = document.querySelector("#worldNotice");
  notice.textContent = message;
  notice.hidden = false;
}

function showDayEvent(event) {
  document.querySelector("#eventDayLabel").textContent = `${translation("eventDay")} · ${translation("dayLabel")} ${heroProgress.day}`;
  document.querySelector("#eventTitle").textContent = translation(event.title);
  document.querySelector("#eventDescription").textContent = translation(event.description);
  const choices = event.choices.map((choiceKey) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = "event-choice";
    button.textContent = translation(choiceKey);
    button.disabled = choiceKey === "eventRentBed" && heroProgress.coins < 4;
    button.addEventListener("click", () => resolveDayEvent(choiceKey));
    return button;
  });
  document.querySelector("#eventChoices").replaceChildren(...choices);
  document.querySelector("#eventDialog").showModal();
}

function resolveDayEvent(choice) {
  let result;
  if (choice === "eventCartHelp") {
    if (calculateStats(confirmedCharacter.ancestryId, confirmedCharacter.classId).strength >= 12) {
      heroProgress.coins += 5;
      result = translation("eventWorkSuccess");
    } else {
      heroProgress.coins += 2;
      heroProgress.health = Math.max(1, heroProgress.health - 2);
      result = translation("eventWorkInjury");
    }
  } else if (choice === "eventCartAvoid") {
    heroProgress.coins += 1;
    result = translation("eventCartAvoided");
  } else if (choice === "eventRentBed") {
    heroProgress.coins -= 4;
    heroProgress.homeless = false;
    result = translation("eventRentSuccess");
  } else {
    heroProgress.health = Math.max(1, heroProgress.health - 2);
    result = translation("eventSleepHurt");
  }
  heroProgress.pendingEventDay = null;
  document.querySelector("#eventDialog").close();
  saveWorldProgress();
  renderWorld();
  if (!document.querySelector('[data-view="town"]').hidden) showTownNotice(result);
  else showWorldNotice(result);
}

function advanceWorldDay() {
  heroProgress.day += 1;
  const maxHealth = getMaxHealth(confirmedCharacter, heroProgress.level);
  if (heroProgress.health < maxHealth) {
    const healing = heroProgress.homeless ? 1 : 4;
    heroProgress.health = Math.min(maxHealth, heroProgress.health + healing);
    saveWorldProgress();
    renderWorld();
    showWorldNotice(translation("dayRested"));
    return;
  }
  const event = dailyEvents[heroProgress.day];
  heroProgress.pendingEventDay = event ? heroProgress.day : null;
  saveWorldProgress();
  renderWorld();
  if (event) showDayEvent(event);
  else showWorldNotice(translation("dayQuiet"));
}

document.querySelectorAll(".map-location").forEach((button) => {
  button.addEventListener("click", () => {
    heroProgress.selectedLocationId = button.dataset.location;
    saveWorldProgress();
    document.querySelector("#worldNotice").hidden = true;
    renderWorld();
  });
});

document.querySelector("#advanceDayButton").addEventListener("click", advanceWorldDay);
document.querySelector("#eventDialog").addEventListener("cancel", (event) => event.preventDefault());

const combatHeroPortrait = document.querySelector("#combatHeroPortrait");
const enemyPortrait = document.querySelector("#enemyPortrait");

function rollD20() {
  return Math.floor(Math.random() * 20) + 1;
}

function rollDamageDie(sides, critical = false) {
  const rolls = critical ? 2 : 1;
  return Array.from({ length: rolls }, () => Math.floor(Math.random() * sides) + 1)
    .reduce((total, result) => total + result, 0);
}

function abilityModifier(score) {
  return Math.floor((score - 10) / 2);
}

function getHeroArmorClass() {
  const stats = calculateStats(confirmedCharacter.ancestryId, confirmedCharacter.classId);
  return 10 + abilityModifier(stats.dexterity) + getEquippedArmor().defense;
}

function currentBattleEnemy() {
  if (!activeBattle) return null;
  const index = Math.min(activeBattle.enemyIndex, activeBattle.enemies.length - 1);
  return activeBattle.enemies[index] || null;
}

function addBattleLog(message) {
  activeBattle.logs.unshift(message);
  activeBattle.logs.length = Math.min(activeBattle.logs.length, 8);
}

function animateD20(result, summary) {
  const display = document.querySelector("#d20Display");
  display.classList.remove("is-rolling");
  void display.offsetWidth;
  display.classList.add("is-rolling");
  document.querySelector("#d20Result").textContent = String(result);
  document.querySelector("#rollSummary").textContent = summary;
}

function drawEnemyPortrait(canvas, enemy) {
  const context = canvas.getContext("2d");
  context.clearRect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "#1c2a27";
  context.fillRect(0, 0, 64, 72);
  context.fillStyle = "#293a32";
  context.fillRect(4, 4, 56, 64);
  if (enemy.kind === "slime") {
    context.fillStyle = enemy.name === "enemyLesserSlime" ? "#9ba56a" : "#6e995c";
    context.fillRect(14, 33, 36, 24);
    context.fillRect(19, 26, 26, 8);
    context.fillRect(25, 21, 14, 6);
    context.fillStyle = "#283227";
    context.fillRect(23, 40, 4, 5);
    context.fillRect(38, 40, 4, 5);
    context.fillStyle = "rgba(231, 236, 173, 0.6)";
    context.fillRect(18, 35, 5, 4);
  } else if (enemy.kind === "wolf") {
    context.fillStyle = enemy.name === "enemyWolfAlpha" ? "#9c7854" : "#727f76";
    context.beginPath();
    context.moveTo(12, 39);
    context.lineTo(15, 29);
    context.lineTo(12, 17);
    context.lineTo(24, 23);
    context.lineTo(34, 20);
    context.lineTo(47, 15);
    context.lineTo(45, 28);
    context.lineTo(53, 38);
    context.lineTo(45, 49);
    context.lineTo(21, 49);
    context.closePath();
    context.fill();
    context.fillRect(21, 46, 5, 11);
    context.fillRect(41, 46, 5, 11);
    context.fillStyle = "#d2ae6c";
    context.fillRect(34, 30, 4, 3);
    context.fillRect(45, 29, 4, 3);
    context.fillStyle = "#e4d7ba";
    context.fillRect(49, 37, 5, 3);
  } else if (enemy.kind === "undead") {
    context.fillStyle = "#596762";
    context.fillRect(15, 43, 34, 23);
    context.fillRect(20, 39, 24, 7);
    context.fillStyle = "#c6c3a9";
    context.fillRect(19, 17, 26, 24);
    context.fillRect(15, 25, 4, 10);
    context.fillRect(45, 25, 4, 10);
    context.fillStyle = "#28322e";
    context.fillRect(24, 25, 6, 6);
    context.fillRect(35, 25, 6, 6);
    context.fillRect(28, 36, 8, 3);
    context.fillStyle = "#d0ae68";
    context.fillRect(26, 26, 3, 3);
    context.fillRect(37, 26, 3, 3);
    context.fillStyle = "#b3b39e";
    context.fillRect(11, 42, 4, 21);
  } else if (enemy.kind === "wisp") {
    const glow = context.createRadialGradient(32, 34, 2, 32, 34, 24);
    glow.addColorStop(0, "rgba(223, 255, 213, 0.95)");
    glow.addColorStop(0.24, "rgba(132, 201, 168, 0.78)");
    glow.addColorStop(1, "rgba(80, 148, 157, 0)");
    context.fillStyle = glow;
    context.fillRect(6, 8, 52, 52);
    context.fillStyle = "rgba(160, 224, 185, 0.85)";
    context.beginPath();
    context.moveTo(32, 14);
    context.lineTo(43, 29);
    context.lineTo(39, 43);
    context.lineTo(32, 52);
    context.lineTo(24, 42);
    context.lineTo(21, 28);
    context.closePath();
    context.fill();
    context.fillStyle = "#334b49";
    context.fillRect(26, 30, 3, 4);
    context.fillRect(36, 30, 3, 4);
  } else {
    const goblin = enemy.kind === "goblin";
    const skin = goblin ? "#859457" : "#879b85";
    const cloth = goblin ? "#7d5140" : "#596b65";
    context.fillStyle = cloth;
    context.fillRect(13, 47, 38, 20);
    context.fillRect(19, 42, 26, 9);
    context.fillStyle = skin;
    context.fillRect(20, 19, 24, 27);
    context.fillRect(15, 27, 6, 8);
    context.fillRect(43, 27, 6, 8);
    context.fillStyle = goblin ? "#a5a96c" : "#c2a077";
    context.beginPath();
    context.moveTo(18, 24);
    context.lineTo(7, 18);
    context.lineTo(17, 33);
    context.closePath();
    context.fill();
    context.beginPath();
    context.moveTo(46, 24);
    context.lineTo(57, 18);
    context.lineTo(47, 33);
    context.closePath();
    context.fill();
    context.fillStyle = "#281f1b";
    context.fillRect(24, 29, 4, 3);
    context.fillRect(37, 29, 4, 3);
    context.fillStyle = "#d2ae6c";
    context.fillRect(17, 17, 30, 5);
  }
  context.strokeStyle = "rgba(220, 190, 123, 0.72)";
  context.strokeRect(4.5, 4.5, 55, 63);
  canvas.setAttribute("aria-label", translation(enemy.name));
}

function renderBattle() {
  if (!activeBattle) return;
  const location = worldLocations.find((option) => option.id === activeBattle.locationId) || worldLocations[0];
  const enemy = currentBattleEnemy();
  if (!enemy) return;
  const ancestry = ancestries.find((option) => option.id === confirmedCharacter.ancestryId) || ancestries[0];
  const characterClass = characterClasses.find((option) => option.id === confirmedCharacter.classId) || characterClasses[0];
  const weapon = getEquippedWeapon();
  const maxHealth = getMaxHealth(confirmedCharacter, heroProgress.level);

  document.querySelector("#combatTitle").textContent = translation(location.name);
  document.querySelector("#combatRound").textContent = `${translation("roundLabel")} ${activeBattle.round}`;
  document.querySelector("#combatHeroName").textContent = confirmedCharacter.name || translation(ancestry.name);
  document.querySelector("#combatHeroBuild").textContent = `${translation(characterClass.name)} · ${translation(weapon.name)} · 1d${weapon.damageDie}`;
  document.querySelector("#combatHeroHealth").textContent = `${heroProgress.health} / ${maxHealth}`;
  const heroHealthBar = document.querySelector("#combatHeroHealthBar");
  heroHealthBar.max = maxHealth;
  heroHealthBar.value = heroProgress.health;
  document.querySelector("#combatHeroDefense").textContent = String(getHeroArmorClass());
  document.querySelector("#enemyName").textContent = translation(enemy.name);
  document.querySelector("#enemyNumber").textContent = `${translation("enemy")} ${Math.min(activeBattle.enemyIndex + 1, activeBattle.enemies.length)} / ${activeBattle.enemies.length}`;
  document.querySelector("#enemyHealth").textContent = `${enemy.health} / ${enemy.maxHealth}`;
  const enemyHealthBar = document.querySelector("#enemyHealthBar");
  enemyHealthBar.max = enemy.maxHealth;
  enemyHealthBar.value = enemy.health;
  document.querySelector("#enemyDefense").textContent = String(enemy.defense);
  drawPortrait(combatHeroPortrait, ancestry.id, characterClass.id);
  drawEnemyPortrait(enemyPortrait, enemy);

  const attackButton = document.querySelector("#attackButton");
  attackButton.textContent = `${translation("attack")} · ${translation(weapon.item)} (${attributes[weapon.stat].short})`;
  const abilityButton = document.querySelector("#abilityButton");
  abilityButton.textContent = `${translation(characterClass.ability)}${activeBattle.abilityUsed ? " · ✓" : ""}`;
  abilityButton.disabled = activeBattle.abilityUsed || activeBattle.outcome !== null;
  document.querySelector("#abilityHint").textContent = translation(characterClass.abilityDescription);

  document.querySelector("#combatActions").hidden = activeBattle.outcome !== null;
  const resultPanel = document.querySelector("#combatResult");
  resultPanel.hidden = activeBattle.outcome === null;
  if (activeBattle.outcome) {
    const won = activeBattle.outcome === "victory";
    document.querySelector("#combatResultEyebrow").textContent = translation(won ? "battleWon" : "battleLost");
    document.querySelector("#combatResultTitle").textContent = translation(won ? "battleWon" : "battleLost");
    let resultText = won
      ? `${translation("battleWonText")} ${translation("xpEarned")}: ${activeBattle.xpAwarded}.`
      : translation("battleLostText");
    if (won && activeBattle.levelsGained > 0) resultText += ` ${translation("levelUp")}: ${heroProgress.level}.`;
    document.querySelector("#combatResultDescription").textContent = resultText;
  }

  document.querySelector("#combatLog").replaceChildren(...activeBattle.logs.map((message) => {
    const entry = document.createElement("li");
    entry.textContent = message;
    return entry;
  }));
}

function startBattle() {
  const location = worldLocations.find((option) => option.id === heroProgress.selectedLocationId);
  if (!location || location.id === "city" || heroProgress.level < location.level || heroProgress.health <= 0) return;
  const enemies = location.enemies.flatMap((entry) => Array.from({ length: entry.count }, () => ({
    name: entry.name,
    kind: entry.kind,
    health: entry.health,
    maxHealth: entry.health,
    defense: entry.defense,
    attackBonus: entry.attackBonus,
    damage: entry.damage,
    experience: entry.experience,
    loot: enemyDrops[entry.name]
  })));
  if (!enemies.length) return;
  heroProgress.currentLocationId = location.id;
  activeBattle = {
    locationId: location.id,
    enemies,
    enemyIndex: 0,
    round: 1,
    abilityUsed: false,
    guardNextHit: 0,
    markBonus: 0,
    xpAwarded: 0,
    levelsGained: 0,
    outcome: null,
    logs: [`${translation("enterArea")}: ${translation(location.name)}`]
  };
  saveWorldProgress();
  showView("combat");
  renderBattle();
}

function finishBattle(outcome) {
  activeBattle.outcome = outcome;
  addBattleLog(translation(outcome === "victory" ? "battleWon" : "battleLost"));
  saveWorldProgress();
  renderBattle();
  renderWorld();
}

function awardEnemyExperience(enemy) {
  activeBattle.xpAwarded += enemy.experience;
  activeBattle.levelsGained += grantExperience(enemy.experience);
}

function awardEnemyLoot(enemy) {
  if (!enemy.loot) return;
  const [minimum, maximum] = enemy.loot.coins;
  const coins = Math.floor(Math.random() * (maximum - minimum + 1)) + minimum;
  heroProgress.coins += coins;
  addBattleLog(`${translation("enemyLoot")}: ${coins} ${translation("coinsFound")}.`);
  enemy.loot.drops.forEach((drop) => {
    if (Math.random() >= drop.chance) return;
    addInventoryItem(drop.itemId);
    addBattleLog(`${translation("lootFound")}: ${translation(itemCatalog[drop.itemId].name)}.`);
  });
}

function defeatCurrentEnemy() {
  const enemy = currentBattleEnemy();
  awardEnemyLoot(enemy);
  awardEnemyExperience(enemy);
  recordContractKill(enemy);
  activeBattle.enemyIndex += 1;
  saveWorldProgress();
  if (activeBattle.enemyIndex >= activeBattle.enemies.length) {
    finishBattle("victory");
    return;
  }
  addBattleLog(`${translation("enemyNext")}: ${translation(currentBattleEnemy().name)}.`);
  activeBattle.round += 1;
  renderBattle();
  renderWorld();
}

function enemyTurn() {
  if (!activeBattle || activeBattle.outcome) return;
  const enemy = currentBattleEnemy();
  const roll = rollD20();
  const defense = getHeroArmorClass();
  const total = roll + enemy.attackBonus;
  const hit = roll === 20 || (roll !== 1 && total >= defense);
  let summary = `${translation("enemyAttackRoll")}: d20 ${roll} + ${enemy.attackBonus} = ${total} ${translation("versus")} ${translation("armorClass")} ${defense} · ${translation(hit ? "hit" : "miss")}.`;
  animateD20(roll, summary);
  if (hit) {
    const rawDamage = enemy.damage * (roll === 20 ? 2 : 1);
    const blocked = Math.min(rawDamage, activeBattle.guardNextHit);
    const damage = Math.max(0, rawDamage - blocked);
    activeBattle.guardNextHit = 0;
    heroProgress.health = Math.max(0, heroProgress.health - damage);
    summary += ` ${translation("damageReceived")}: ${damage}${blocked ? ` (-${blocked})` : ""}.`;
    animateD20(roll, summary);
    addBattleLog(`${translation(enemy.name)}: ${summary}`);
    if (heroProgress.health <= 0) {
      finishBattle("defeat");
      return;
    }
  } else {
    addBattleLog(`${translation(enemy.name)}: ${summary}`);
  }
  activeBattle.round += 1;
  saveWorldProgress();
  renderBattle();
  renderWorld();
}

function resolvePlayerAttack({ advantage = false, bonusDamage = 0 } = {}) {
  if (!activeBattle || activeBattle.outcome) return;
  const enemy = currentBattleEnemy();
  const characterClass = characterClasses.find((option) => option.id === confirmedCharacter.classId) || characterClasses[0];
  const weapon = getEquippedWeapon();
  const stats = calculateStats(confirmedCharacter.ancestryId, characterClass.id);
  const modifier = abilityModifier(stats[weapon.stat]);
  const rolls = advantage ? [rollD20(), rollD20()] : [rollD20()];
  const roll = Math.max(...rolls);
  const weaponBonus = weapon.attackBonus || 0;
  const total = roll + modifier + weaponBonus;
  const critical = roll === 20;
  const hit = critical || (roll !== 1 && total >= enemy.defense);
  const shownRolls = rolls.join(" / ");
  let summary = `${translation("attackRoll")}: d20 ${shownRolls}${advantage ? ` (${translation("advantage")})` : ""} + ${modifier} (${attributes[weapon.stat].short})${weaponBonus ? ` + ${weaponBonus}` : ""} = ${total} ${translation("versus")} ${translation("armorClass")} ${enemy.defense} · ${translation(hit ? critical ? "critical" : "hit" : "miss")}.`;
  animateD20(roll, summary);

  if (hit) {
    const markedBonus = activeBattle.markBonus;
    const damage = Math.max(1, rollDamageDie(weapon.damageDie, critical) + Math.max(0, modifier) + bonusDamage + markedBonus);
    activeBattle.markBonus = 0;
    enemy.health = Math.max(0, enemy.health - damage);
    summary += ` ${translation("damageDealt")}: ${damage}.`;
    animateD20(roll, summary);
    addBattleLog(`${translation("attack")}: ${summary}`);
    if (enemy.health <= 0) {
      defeatCurrentEnemy();
      return;
    }
  } else {
    addBattleLog(`${translation("attack")}: ${summary}`);
  }
  enemyTurn();
}

function activateBattleAbility() {
  if (!activeBattle || activeBattle.outcome || activeBattle.abilityUsed) return;
  const characterClass = confirmedCharacter.classId;
  activeBattle.abilityUsed = true;
  if (characterClass === "warrior") {
    activeBattle.guardNextHit = 4;
    addBattleLog(`${translation("abilityActivated")}: ${translation("abilityGuard")}.`);
    document.querySelector("#rollSummary").textContent = translation("abilityGuardDesc");
    enemyTurn();
  } else if (characterClass === "rogue") {
    resolvePlayerAttack({ advantage: true, bonusDamage: 4 });
  } else if (characterClass === "monk") {
    const maxHealth = getMaxHealth(confirmedCharacter, heroProgress.level);
    const restored = Math.min(4, maxHealth - heroProgress.health);
    heroProgress.health += restored;
    activeBattle.guardNextHit = 2;
    addBattleLog(`${translation("abilityActivated")}: ${translation("abilityFocus")} · +${restored} HP.`);
    document.querySelector("#rollSummary").textContent = translation("abilityFocusDesc");
    enemyTurn();
  } else {
    activeBattle.markBonus = 3;
    addBattleLog(`${translation("abilityActivated")}: ${translation("abilityMark")}.`);
    document.querySelector("#rollSummary").textContent = translation("abilityMarkDesc");
    enemyTurn();
  }
}

document.querySelector("#enterLocationButton").addEventListener("click", enterSelectedLocation);
document.querySelector("#attackButton").addEventListener("click", () => resolvePlayerAttack());
document.querySelector("#abilityButton").addEventListener("click", activateBattleAbility);
document.querySelector("#townMapButton").addEventListener("click", () => showView("world"));
document.querySelector("#innButton").addEventListener("click", restAtInn);
document.querySelector("#trainingButton").addEventListener("click", trainInTown);
document.querySelector("#returnFromCombatButton").addEventListener("click", () => {
  activeBattle = null;
  renderWorld();
  showView("world");
});

document.querySelector("#restartGameButton").addEventListener("click", () => {
  localStorage.removeItem("marches-character");
  localStorage.removeItem("marches-world");
  confirmedCharacter = null;
  Object.assign(selectedCharacter, { ancestryId: "human", classId: "warrior", name: "" });
  heroProgress = createInitialProgress(null);
  activeBattle = null;
  renderCharacterBuilder();
  showView("character");
});

characterNameInput.addEventListener("input", () => {
  selectedCharacter.name = characterNameInput.value.slice(0, 24);
});

document.querySelector("#createCharacterButton").addEventListener("click", () => {
  const isNewHero = !confirmedCharacter;
  const previousClass = confirmedCharacter?.classId;
  confirmedCharacter = {
    ancestryId: selectedCharacter.ancestryId,
    classId: selectedCharacter.classId,
    name: characterNameInput.value.trim() || (language === "ru" ? "Безымянный странник" : "Nameless Wanderer")
  };
  selectedCharacter.name = confirmedCharacter.name;
  localStorage.setItem("marches-character", JSON.stringify(confirmedCharacter));
  if (isNewHero) heroProgress = createInitialProgress(confirmedCharacter);
  else {
    if (previousClass !== confirmedCharacter.classId) {
      const loadout = starterLoadouts[confirmedCharacter.classId] || starterLoadouts.warrior;
      for (const itemId of [loadout.weapon, loadout.armor]) addInventoryItem(itemId);
      heroProgress.equippedWeaponId = loadout.weapon;
      heroProgress.equippedArmorId = loadout.armor;
    }
    heroProgress.health = Math.min(heroProgress.health, getMaxHealth(confirmedCharacter, heroProgress.level));
  }
  saveWorldProgress();
  renderCharacterBuilder();
  renderWorld();
  showView("world");
});

musicEnabled.addEventListener("change", () => setMusicEnabled(musicEnabled.checked));
musicVolume.addEventListener("input", updateVolume);

settingsDialog.addEventListener("click", (event) => {
  if (event.target === settingsDialog) settingsDialog.close();
});

music.volume = Number(localStorage.getItem("marches-music-volume") ?? 35) / 100;
musicVolume.value = String(Math.round(music.volume * 100));
musicEnabled.checked = localStorage.getItem("marches-music-enabled") !== "false";
updateVolume();
setLanguage(language);
startMusic();
document.addEventListener("pointerdown", () => {
  if (!audioStarted) startMusic();
}, { once: true });

document.addEventListener("visibilitychange", () => {
  if (document.hidden) music.pause();
  else startMusic();
});

const canvas = document.querySelector("#landscape");
const context = canvas.getContext("2d");
const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
let sceneWidth = 0;
let sceneHeight = 0;

function resizeScene() {
  const pixelRatio = Math.min(window.devicePixelRatio || 1, 2);
  sceneWidth = canvas.clientWidth;
  sceneHeight = canvas.clientHeight;
  canvas.width = Math.round(sceneWidth * pixelRatio);
  canvas.height = Math.round(sceneHeight * pixelRatio);
  context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
  drawScene(0);
}

function drawMountain(points, color) {
  context.beginPath();
  context.moveTo(points[0][0] * sceneWidth, sceneHeight);
  points.forEach(([x, y]) => context.lineTo(x * sceneWidth, y * sceneHeight));
  context.lineTo(points[points.length - 1][0] * sceneWidth, sceneHeight);
  context.closePath();
  context.fillStyle = color;
  context.fill();
}

function drawPine(x, base, size, color) {
  context.fillStyle = color;
  context.fillRect(x - size * 0.035, base - size * 0.23, size * 0.07, size * 0.23);
  for (let layer = 0; layer < 3; layer += 1) {
    const top = base - size * (0.32 + layer * 0.22);
    const width = size * (0.38 - layer * 0.055);
    context.beginPath();
    context.moveTo(x, top - size * 0.24);
    context.lineTo(x - width, top + size * 0.16);
    context.lineTo(x + width, top + size * 0.16);
    context.closePath();
    context.fill();
  }
}

function drawCastle(time) {
  const scale = Math.min(sceneWidth * 0.29, sceneHeight * 0.43);
  const x = sceneWidth * 0.69;
  const base = sceneHeight * 0.72;
  const stone = "#26312c";
  context.fillStyle = "#172321";
  context.beginPath();
  context.moveTo(x - scale * 0.62, base + scale * 0.23);
  context.lineTo(x - scale * 0.4, base - scale * 0.37);
  context.lineTo(x - scale * 0.15, base - scale * 0.24);
  context.lineTo(x + scale * 0.08, base - scale * 0.48);
  context.lineTo(x + scale * 0.34, base - scale * 0.32);
  context.lineTo(x + scale * 0.62, base + scale * 0.23);
  context.closePath();
  context.fill();

  context.fillStyle = stone;
  context.fillRect(x - scale * 0.46, base - scale * 0.42, scale * 0.92, scale * 0.46);
  context.fillRect(x - scale * 0.58, base - scale * 0.66, scale * 0.23, scale * 0.7);
  context.fillRect(x + scale * 0.35, base - scale * 0.72, scale * 0.23, scale * 0.76);
  context.fillRect(x - scale * 0.17, base - scale * 0.58, scale * 0.34, scale * 0.62);

  for (let index = 0; index < 5; index += 1) {
    const crenelX = x - scale * 0.46 + index * scale * 0.22;
    context.fillRect(crenelX, base - scale * 0.48, scale * 0.1, scale * 0.1);
  }

  for (const towerX of [x - scale * 0.58, x - scale * 0.17, x + scale * 0.35]) {
    const towerWidth = towerX === x - scale * 0.17 ? scale * 0.34 : scale * 0.23;
    const towerHeight = towerX === x - scale * 0.17 ? scale * 0.58 : scale * 0.7;
    context.beginPath();
    context.moveTo(towerX - scale * 0.035, base - towerHeight);
    context.lineTo(towerX + towerWidth / 2, base - towerHeight - scale * 0.19);
    context.lineTo(towerX + towerWidth + scale * 0.035, base - towerHeight);
    context.closePath();
    context.fill();
  }

  const glow = 0.64 + Math.sin(time * 3.5) * 0.12;
  context.fillStyle = `rgba(237, 167, 82, ${glow})`;
  for (const [windowX, windowY] of [
    [x - scale * 0.48, base - scale * 0.36],
    [x - scale * 0.04, base - scale * 0.48],
    [x + scale * 0.42, base - scale * 0.55],
    [x + scale * 0.12, base - scale * 0.19]
  ]) {
    context.fillRect(windowX, windowY, scale * 0.045, scale * 0.09);
  }
}

function drawScene(time) {
  if (!sceneWidth || !sceneHeight) return;
  const sky = context.createLinearGradient(0, 0, 0, sceneHeight);
  sky.addColorStop(0, "#111e24");
  sky.addColorStop(0.48, "#314642");
  sky.addColorStop(0.78, "#986147");
  sky.addColorStop(1, "#25352f");
  context.fillStyle = sky;
  context.fillRect(0, 0, sceneWidth, sceneHeight);

  for (let index = 0; index < 74; index += 1) {
    const x = ((index * 127.1) % 997) / 997 * sceneWidth;
    const y = ((index * 71.7) % 599) / 599 * sceneHeight * 0.48;
    const flicker = 0.38 + Math.sin(time * 1.8 + index) * 0.18;
    context.fillStyle = `rgba(240, 225, 190, ${flicker})`;
    context.fillRect(x, y, index % 5 === 0 ? 2 : 1, index % 5 === 0 ? 2 : 1);
  }

  const moonX = sceneWidth * 0.23;
  const moonY = sceneHeight * 0.2;
  const moonGlow = context.createRadialGradient(moonX, moonY, 2, moonX, moonY, sceneHeight * 0.13);
  moonGlow.addColorStop(0, "rgba(234, 213, 164, 0.72)");
  moonGlow.addColorStop(0.12, "rgba(234, 213, 164, 0.2)");
  moonGlow.addColorStop(1, "rgba(234, 213, 164, 0)");
  context.fillStyle = moonGlow;
  context.fillRect(moonX - sceneHeight * 0.13, moonY - sceneHeight * 0.13, sceneHeight * 0.26, sceneHeight * 0.26);
  context.beginPath();
  context.arc(moonX, moonY, Math.max(9, sceneHeight * 0.018), 0, Math.PI * 2);
  context.fillStyle = "#e8d8ae";
  context.fill();

  drawMountain([[0, 0.56], [0.11, 0.37], [0.2, 0.54], [0.33, 0.31], [0.46, 0.56], [0.59, 0.39], [0.75, 0.57], [0.9, 0.35], [1, 0.53]], "#263737");
  drawMountain([[0, 0.66], [0.13, 0.48], [0.25, 0.64], [0.43, 0.43], [0.57, 0.65], [0.76, 0.46], [0.91, 0.63], [1, 0.49]], "#293a34");
  drawCastle(time);
  drawMountain([[0, 0.76], [0.16, 0.65], [0.3, 0.74], [0.49, 0.61], [0.64, 0.76], [0.82, 0.64], [1, 0.74]], "#1c2b27");

  const ground = context.createLinearGradient(0, sceneHeight * 0.73, 0, sceneHeight);
  ground.addColorStop(0, "#26372d");
  ground.addColorStop(1, "#111b19");
  context.fillStyle = ground;
  context.fillRect(0, sceneHeight * 0.73, sceneWidth, sceneHeight * 0.27);

  const treeScale = Math.min(sceneHeight * 0.2, 150);
  for (let index = 0; index < 9; index += 1) {
    const edge = index < 5 ? index : index - 4;
    const side = index < 5 ? 1 : -1;
    const x = side === 1 ? edge * treeScale * 0.46 : sceneWidth - edge * treeScale * 0.47;
    drawPine(x, sceneHeight * (0.91 - (edge % 2) * 0.04), treeScale * (0.78 + (edge % 3) * 0.13), "#14221f");
  }

  if (!reducedMotion) {
    for (let index = 0; index < 12; index += 1) {
      const drift = (time * (7 + index % 3) + index * 83) % sceneWidth;
      const x = (drift + (index % 2) * sceneWidth * 0.3) % sceneWidth;
      const y = sceneHeight * (0.71 + ((index * 31) % 25) / 100);
      context.beginPath();
      context.arc(x, y, 1.3 + Math.sin(time * 2 + index) * 0.5, 0, Math.PI * 2);
      context.fillStyle = `rgba(223, 187, 111, ${0.38 + Math.sin(time * 2 + index) * 0.2})`;
      context.fill();
    }
  }
}

function animateScene(timestamp) {
  drawScene(timestamp / 1000);
  if (!reducedMotion) window.requestAnimationFrame(animateScene);
}

window.addEventListener("resize", resizeScene);
resizeScene();
if (!reducedMotion) window.requestAnimationFrame(animateScene);