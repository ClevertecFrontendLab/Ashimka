import Desserts from '~/assets/icons/desserts.svg';
import Drinks from '~/assets/icons/drinks.svg';
import First from '~/assets/icons/first-courses.svg';
import Grilled from '~/assets/icons/grilled.svg';
import Healthy from '~/assets/icons/healthy.svg';
import Kids from '~/assets/icons/kids.svg';
import National from '~/assets/icons/national.svg';
import Preserves from '~/assets/icons/preserves.svg';
import Salat from '~/assets/icons/salat.svg';
import Sauces from '~/assets/icons/sauces.svg';
import Second from '~/assets/icons/second-courses.svg';
import Snacks from '~/assets/icons/snacks.svg';
import Vegan from '~/assets/icons/vegan.svg';

export const menu = [
    {
        id: 1,
        name: 'Салаты',
        icon: Salat,
        link: '/salads',
        products: [
            { id: 1, name: 'Мясные салаты', link: '/salads/meat' },
            { id: 2, name: 'Рыбные салаты', link: '/salads/fish' },
            { id: 3, name: 'Овощные салаты', link: '/salads/vegetable' },
            { id: 4, name: 'Теплые салаты', link: '/salads/warm' },
        ],
    },
    {
        id: 2,
        name: 'Закуски',
        icon: Snacks,
        link: '/snacks',
        products: [
            { id: 1, name: 'Мясные закуски', link: '/snacks/meat' },
            { id: 2, name: 'Рыбные закуски', link: '/snacks/fish' },
            { id: 3, name: 'Овощные закуски', link: '/snacks/vegetable' },
            { id: 4, name: 'Теплые закуски', link: '/snacks/warm' },
            { id: 5, name: 'Бутерброды', link: '/snacks/sandwiches' },
            { id: 6, name: 'Фастфуд', link: '/snacks/fastfood' },
        ],
    },
    {
        id: 3,
        name: 'Первые блюда',
        icon: First,
        link: '/first-courses',
        products: [
            { id: 1, name: 'Мясные супы', link: '/first-courses/meat-soups' },
            { id: 2, name: 'Овощные супы', link: '/first-courses/vegetable-soups' },
            { id: 3, name: 'Бульоны', link: '/first-courses/broths' },
            { id: 4, name: 'Холодные супы', link: '/first-courses/cold-soups' },
            { id: 5, name: 'Диетические супы', link: '/first-courses/diet-soups' },
        ],
    },
    {
        id: 4,
        name: 'Вторые блюда',
        icon: Second,
        link: '/second-courses',
        products: [
            { id: 1, name: 'Мясные', link: '/second-courses/meat' },
            { id: 2, name: 'Рыбные', link: '/second-courses/fish' },
            { id: 3, name: 'Овощные', link: '/second-courses/vegetable' },
            { id: 4, name: 'Из птицы', link: '/second-courses/poultry' },
            { id: 5, name: 'Из грибов', link: '/second-courses/mushrooms' },
            { id: 6, name: 'Из субпродуктов', link: '/second-courses/offal' },
            { id: 7, name: 'На пару', link: '/second-courses/steamed' },
            { id: 8, name: 'Пельмени, вареники', link: '/second-courses/dumplings' },
            { id: 9, name: 'Мучные гарниры', link: '/second-courses/flour-garnishes' },
            { id: 10, name: 'Овощные гарниры', link: '/second-courses/vegetable-garnishes' },
            { id: 11, name: 'Пицца', link: '/second-courses/pizza' },
            { id: 12, name: 'Суши', link: '/second-courses/sushi' },
        ],
    },
    {
        id: 5,
        name: 'Десерты и выпечка',
        icon: Desserts,
        link: '/desserts',
        products: [
            { id: 1, name: 'Блины и оладьи', link: '/desserts/pancakes' },
            { id: 2, name: 'Пироги и пончики', link: '/desserts/pies' },
            { id: 3, name: 'Торты', link: '/desserts/cakes' },
            { id: 4, name: 'Рулеты', link: '/desserts/rolls' },
            { id: 5, name: 'Кексы и маффины', link: '/desserts/muffins' },
            { id: 6, name: 'Сырники и ватрушки', link: '/desserts/cottage-cheese-pancakes' },
            { id: 7, name: 'Из слоеного теста', link: '/desserts/puff-pastry' },
            { id: 8, name: 'Из заварного теста', link: '/desserts/choux-pastry' },
            { id: 9, name: 'Из дрожжевого теста', link: '/desserts/yeast-dough' },
            { id: 10, name: 'Булочки и сдоба', link: '/desserts/buns' },
            { id: 11, name: 'Хлеб', link: '/desserts/bread' },
            { id: 12, name: 'Тесто на пиццу', link: '/desserts/pizza-dough' },
            { id: 13, name: 'Кремы', link: '/desserts/creams' },
        ],
    },
    {
        id: 6,
        name: 'Блюда на гриле',
        icon: Grilled,
        link: '/grilled-dishes',
        products: [
            { id: 1, name: 'Говядина', link: '/grilled-dishes/beef' },
            { id: 2, name: 'Свинина', link: '/grilled-dishes/pork' },
            { id: 3, name: 'Птица', link: '/grilled-dishes/chicken' },
            { id: 4, name: 'Рыба', link: '/grilled-dishes/fish' },
            { id: 5, name: 'Грибы', link: '/grilled-dishes/mushrooms' },
            { id: 6, name: 'Овощи', link: '/grilled-dishes/vegetables' },
        ],
    },
    {
        id: 7,
        name: 'Веганская кухня',
        icon: Vegan,
        link: '/vegan-cuisine',
        products: [
            { id: 1, name: 'Закуски', link: '/vegan-cuisine/snacks' },
            { id: 2, name: 'Первые блюда', link: '/vegan-cuisine/first-courses' },
            { id: 3, name: 'Вторые блюда', link: '/vegan-cuisine/second-courses' },
            { id: 4, name: 'Гарниры', link: '/vegan-cuisine/side-dishes' },
            { id: 5, name: 'Десерты', link: '/vegan-cuisine/desserts' },
            { id: 6, name: 'Выпечка', link: '/vegan-cuisine/baking' },
            { id: 7, name: 'Сыроедческие блюда', link: '/vegan-cuisine/raw-food' },
            { id: 8, name: 'Напитки', link: '/vegan-cuisine/drinks' },
        ],
    },
    {
        id: 8,
        name: 'Детские блюда',
        icon: Kids,
        link: '/kids-meals',
        products: [
            { id: 1, name: 'Первые блюда', link: '/kids-meals/first-courses' },
            { id: 2, name: 'Вторые блюда', link: '/kids-meals/second-courses' },
            { id: 3, name: 'Гарниры', link: '/kids-meals/side-dishes' },
            { id: 4, name: 'Выпечка', link: '/kids-meals/baking' },
            { id: 5, name: 'Без глютена', link: '/kids-meals/gluten-free' },
            { id: 6, name: 'Без сахара', link: '/kids-meals/sugar-free' },
            { id: 7, name: 'Без аллергенов', link: '/kids-meals/allergen-free' },
            { id: 8, name: 'Блюда для прикорма', link: '/kids-meals/first-food' },
        ],
    },
    {
        id: 9,
        name: 'Лечебное питание',
        icon: Healthy,
        link: '/healthy-eating',
        products: [
            { id: 1, name: 'Детская диета', link: '/healthy-eating/child-diet' },
            { id: 2, name: 'Диета №1', link: '/healthy-eating/diet-1' },
            { id: 3, name: 'Диета №2', link: '/healthy-eating/diet-2' },
            { id: 4, name: 'Диета №3', link: '/healthy-eating/diet-3' },
            { id: 5, name: 'Диета №4', link: '/healthy-eating/diet-4' },
            { id: 6, name: 'Диета №5', link: '/healthy-eating/diet-5' },
            { id: 7, name: 'Диета №6', link: '/healthy-eating/diet-6' },
            { id: 8, name: 'Диета №7', link: '/healthy-eating/diet-7' },
            { id: 9, name: 'Диета №8', link: '/healthy-eating/diet-8' },
            { id: 10, name: 'Диета №9', link: '/healthy-eating/diet-9' },
            { id: 11, name: 'Диета №10', link: '/healthy-eating/diet-10' },
            { id: 12, name: 'Диета №11', link: '/healthy-eating/diet-11' },
            { id: 13, name: 'Диета №12', link: '/healthy-eating/diet-12' },
            { id: 14, name: 'Диета №13', link: '/healthy-eating/diet-13' },
            { id: 15, name: 'Диета №14', link: '/healthy-eating/diet-14' },
            { id: 16, name: 'Без глютена', link: '/healthy-eating/gluten-free' },
            { id: 17, name: 'Без аллергенов', link: '/healthy-eating/allergen-free' },
        ],
    },
    {
        id: 10,
        name: 'Национальные блюда',
        icon: National,
        link: '/national-cuisine',
        products: [
            { id: 1, name: 'Американская кухня', link: '/national-cuisine/american' },
            { id: 2, name: 'Армянская кухня', link: '/national-cuisine/armenian' },
            { id: 3, name: 'Греческая кухня', link: '/national-cuisine/greek' },
            { id: 4, name: 'Грузинская кухня', link: '/national-cuisine/georgian' },
            { id: 5, name: 'Итальянская кухня', link: '/national-cuisine/italian' },
            { id: 6, name: 'Испанская кухня', link: '/national-cuisine/spanish' },
            { id: 7, name: 'Китайская кухня', link: '/national-cuisine/chinese' },
            { id: 8, name: 'Мексиканская кухня', link: '/national-cuisine/mexican' },
            { id: 9, name: 'Паназиатская кухня', link: '/national-cuisine/pan-asian' },
            { id: 10, name: 'Русская кухня', link: '/national-cuisine/russian' },
            { id: 11, name: 'Турецкая кухня', link: '/national-cuisine/turkish' },
            { id: 12, name: 'Французская кухня', link: '/national-cuisine/french' },
            { id: 13, name: 'Шведская кухня', link: '/national-cuisine/swedish' },
            { id: 14, name: 'Японская кухня', link: '/national-cuisine/japanese' },
            { id: 15, name: 'Другая кухня', link: '/national-cuisine/other' },
        ],
    },
    {
        id: 11,
        name: 'Соусы',
        icon: Sauces,
        link: '/sauces',
        products: [
            { id: 1, name: 'Соусы мясные', link: '/sauces/meat' },
            { id: 2, name: 'Соусы сырные', link: '/sauces/cheese' },
            { id: 3, name: 'Маринады', link: '/sauces/marinades' },
        ],
    },
    {
        id: 12,
        name: 'Напитки',
        icon: Drinks,
        link: '/drinks',
        products: [
            { id: 1, name: 'Соки и фреши', link: '/drinks/juices' },
            { id: 2, name: 'Смузи', link: '/drinks/smoothies' },
            { id: 3, name: 'Компоты', link: '/drinks/compotes' },
            { id: 4, name: 'Кисели', link: '/drinks/jellies' },
            { id: 5, name: 'Кофе', link: '/drinks/coffee' },
            { id: 6, name: 'Лечебный чай', link: '/drinks/medicinal-tea' },
            { id: 7, name: 'Квас', link: '/drinks/kvas' },
            { id: 8, name: 'Коктейли', link: '/drinks/cocktails' },
            { id: 9, name: 'Алкогольные', link: '/drinks/alcoholic' },
        ],
    },
    {
        id: 13,
        name: 'Домашние заготовки',
        icon: Preserves,
        link: '/preserves',
        products: [
            { id: 1, name: 'Мясные заготовки', link: '/preserves/meat' },
            { id: 2, name: 'Рыбные заготовки', link: '/preserves/fish' },
            { id: 3, name: 'Из огурцов', link: '/preserves/cucumbers' },
            { id: 4, name: 'Из томатов', link: '/preserves/tomatoes' },
            { id: 5, name: 'Из грибов', link: '/preserves/mushrooms' },
            { id: 6, name: 'Овощные заготовки', link: '/preserves/vegetables' },
            { id: 7, name: 'Салаты, икра', link: '/preserves/salads' },
            { id: 8, name: 'Из фруктов и ягод', link: '/preserves/fruits' },
        ],
    },
];
