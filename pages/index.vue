<template>
    <main>
        <section class="presentation-section">
            <div class="container">
                <h1>
                    Женское Белье — КАПСУЛЬНАЯ КОЛЛЕКЦИЯ
                </h1>
                <p class="main-heading-descr">
                    Комплекты из органического хлопка, безопасного для твоего тела и окружающей среды
                </p>
                <NuxtLink  to="/catalog">
                    <button class="to-catalog__presentation-section white-btn">
                        Перейти в каталог
                    </button>
                </NuxtLink>
            </div>
        </section>
        <div class="container">
            <section class="main-categories">
                <h3>
                    Выбрать по категориям
                </h3>
                <div class="categories-wrapper__main-categories">
                    <NuxtLink to="/">
                        <div class="category__main-categories bodysuit-category">
                            <span class="category-name">
                                Боди
                            </span>
                        </div>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <div class="category__main-categories middle-category__main-categories">
                            <span class="category-name">
                                Пижамы
                            </span>
                        </div>
                    </NuxtLink>
                    <div class="category__main-categories ">
                        <NuxtLink to="/">
                            <div class="last-category-inner__main-categories">
                                <span class="category-name">
                                    Трусики
                                </span>
                            </div>
                        </NuxtLink>
                        <NuxtLink  to="/catalog">
                            <button class="to-all-categoties grey-btn">
                                Смотреть все категории
                            </button>
                        </NuxtLink>
                    </div>
                </div>
            </section>
            <MainPageNewArrivals/>
            <section class="nice-body-section">
                <h3>
                    приятно k телу и планете
                </h3>
                <div class="nice-body-inner-wrapper">
                    <div class="left-col__nice-body">
                        <div class="left-col__nice-body-inner">
                            <h4>
                                Наша компания специализируется на производстве экологически чистого белья
                            </h4>
                            <p>
                                Мы используем только натуральные и органические материалы, такие как хлопок и лён,
                                в процессе производства, безопасные для вашего тела и окружающей среды.
                            </p>
                            <img src="public/images/main-page/chika1.png" alt="">
                        </div>
                        <div class="middle-in__nice-body mobile-middle-in__nice-body">
                            <img src="public/images/main-page/chika2.png" alt="">
                            <NuxtLink to="/">
                                <button class="more__nice-body grey-btn">
                                    Узнать больше
                                </button>
                            </NuxtLink>
                        </div>
                    </div>

                    <div class="right-col__nice-body">
                        <div class="middle-in__nice-body">
                            <img src="public/images/main-page/chika2.png" alt="">
                            <button class="more__nice-body grey-btn">
                                Узнать больше
                            </button>
                        </div>
                        <div class="right-in__nice-body">
                            <img src="public/images/main-page/chika3.png" alt="">
                            <div class="right-in__nice-body-inner">
                                <h4>
                                    Кроме того, мы стремимся сделать нашу продукцию доступной
                                </h4>
                                <p>
                                    Чтобы каждый мог пользоваться экологически чистым бельём, мы не завышаем стоимость и
                                    предлагаем его по разумной цене.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <section class="main-callback-section">
            <div class="container">
                <img src="public/images/main-page/form-chicka.png" alt="">
                <form action="/" class="main-callback-form">
                    <h3>
                        стань первым, кто узнает
                    </h3>
                    <p>
                        Присоединяйся к нам, чтобы быть в курсе последних обновлений и получать специальные скидки
                        и предложения.
                    </p>
                    <div class="main-callback-form-inner">
                        <input type="email" placeholder="Введите адрес электронной почты">
                        <button class="white-btn">
                            Подписаться
                        </button>
                    </div>
                    <label class="form-checkbox-wrapper ">
                        <span class="privacy-label">Даю согласие на обработку персональных данных</span>
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </form>
            </div>
        </section>
        <div class="container">
            <BlogMainNews/>
        </div>
    </main>
</template>

<script>
    import MainNews from "../components/blog/MainNews";

    export default {
        components: {MainNews}
    }
</script>

<style lang="scss" scoped>
    @import "assets/scss/global";

    .form-checkbox-wrapper {
        display: block;
        position: relative;
        padding-left: 35px;
        margin-bottom: 12px;
        cursor: pointer;
        font-size: 22px;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
    }

    /* Hide the browser's default checkbox */
    .form-checkbox-wrapper input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
    }

    /* Create a custom checkbox */
    .checkmark {
        position: absolute;
        top: 0;
        left: 0;
        height: 25px;
        width: 25px;
        border: 1px solid white;
        background-color: $main-green;
    }

    /* On mouse-over, add a grey background color */
    .form-checkbox-wrapper:hover input ~ .checkmark {
        background-color: #ccc;
    }

    /* When the checkbox is checked, add a blue background */
    .form-checkbox-wrapper input:checked ~ .checkmark {
        background-color: $main-green;
        border: solid 1px white;
    }

    /* Create the checkmark/indicator (hidden when not checked) */
    .checkmark:after {
        content: "✓";
        position: absolute;
        display: none;

    }

    /* Show the checkmark when checked */
    .form-checkbox-wrapper input:checked ~ .checkmark:after {
        display: block;
    }

    /* Style the checkmark/indicator */
    .form-checkbox-wrapper .checkmark:after {
        left: 3px;
        bottom: 18px;
        width: 5px;
        height: 10px;

    }


    .presentation-section {
        background-image: url('../public/images/main-page/main-banner.png');
        background-size: cover;
        background-position: center center;
        padding-top: size(100, 1920);
        padding-bottom: size(100, 1920);
        margin-bottom: size(103, 1920);

        h1 {
            color: #fff;
            font-size: size(100, 1920);
            text-transform: uppercase;
            font-weight: 400;
            max-width: size(740, 1920);
        }

        p {
            font-size: size(20, 1920);
            text-transform: uppercase;
            color: #fff;
        }

        .to-catalog__presentation-section {
            width: size(350, 1920);
            margin-top: size(40, 1920);
        }
    }

    .main-categories {
        margin-bottom: size(100, 1920);

        h3 {
            margin-bottom: size(50, 1920);
        }

        .categories-wrapper__main-categories {
            display: flex;
            justify-content: space-between;

            .category__main-categories {
                background-size: cover;
                background-position: center center;
                width: size(410, 1920);
                height: size(500, 1920);

                .to-all-categoties {
                    width: size(410, 1920);
                    margin-top: size(30, 1920);
                }
            }

            .bodysuit-category {
                padding-top: size(10, 1920);
                padding-left: size(20, 1920);
                background-image: url('../public/images/main-page/category1.png');
            }

            .middle-category__main-categories {
                margin-top: size(30, 1920);
                padding-top: size(10, 1920);
                padding-left: size(20, 1920);
                background-image: url('../public/images/main-page/category2.png');
            }

            .last-category-inner__main-categories {
                padding-top: size(10, 1920);
                padding-left: size(20, 1920);
                height: size(290, 1920);
                width: size(410, 1920);
                background-size: cover;
                background-position: center center;
                background-image: url('../public/images/main-page/category3.png');
            }

            .category-name {
                text-transform: uppercase;
                font-size: size(52, 1920);
                color: #fff;
            }
        }
    }

    .nice-body-section {
        margin-bottom: size(150, 1920);

        h3 {
            margin-bottom: size(30, 1920);
        }

        .nice-body-inner-wrapper {
            display: flex;
            justify-content: space-between;

            .left-col__nice-body {
                width: size(525, 1920);
                display: flex;
                flex-direction: column;

                h4 {
                    text-transform: uppercase;
                    font-size: size(24, 1920);
                    margin-bottom: size(10, 1920);
                }

                p {
                    margin-bottom: size(40, 1920);
                    font-size: size(18, 1920);
                    color: #70756E;
                }

                img {
                    width: size(410, 1920);
                    height: size(400, 1920);
                    object-fit: contain;
                    align-self: end;
                }
            }

            .mobile-middle-in__nice-body{
                display: none;
            }

            .right-col__nice-body {
                width: size(740, 1920);
                display: flex;
                flex-direction: column;
                


                .middle-in__nice-body {
                    width: size(300, 1920);
                    z-index: 3;

                    .more__nice-body {
                        width: size(190, 1920);
                        margin-top: size(30, 1920);
                        font-size: size(20, 1920);
                        padding: size(19, 1920) 0 size(19, 1920) 0;
                    }

                    img {
                        width: size(300, 1920);
                        object-fit: cover;
                    }
                }

                .right-in__nice-body {
                    align-self: flex-end;
                    z-index: 2;
                    margin-top: size(-367, 1920);
                    width: size(520, 1920);

                    h4 {
                        margin-top: size(40, 1920);
                        font-size: size(24, 1920);
                        color: $iml-black-txt;
                        text-transform: uppercase;
                        margin-bottom: size(10, 1920);
                    }

                    p {
                        color: #70756E;
                        font-size: size(18, 1920);
                    }

                    img {
                        width: size(520, 1920);

                    }
                }
            }
        }
    }

    .main-callback-section{
        background-color: $main-green;
        color: #fff;
        height: size(400, 1920);
        margin-bottom: size(100, 1920);

        .container{
            flex-direction: row;

            img{
                width: size(550, 1920);
                height: size(500, 1920);
                margin-top: size(-100, 1920);
                margin-right: size(110, 1920);
            }

            .main-callback-form{
                margin-top: size(67, 1920);
                width: size(630, 1920);

                h3{
                    color: #fff;
                    margin-bottom: size(10, 1920);
                }

                p{
                    font-size: size(18, 1920);
                    letter-spacing: size(0.45, 1920);
                    margin-bottom: size(40, 1920);
                }

                .main-callback-form-inner{
                    display: flex;
                    justify-content: space-between;
                    align-items: flex-end;
                    margin-bottom: size(20, 1920);

                    input{
                        width: size(410, 1920);
                        height: size(32, 1920);
                        border-bottom: solid size(1, 1920) #fff;
                        font-size: size(16, 1920);
                    }

                    .white-btn{
                        padding:  size(19, 1920) size(50, 1920) size(19, 1920) size(50, 1920);
                        font-size: size(20, 1920);
                        letter-spacing: size(0.5, 1920);
                        text-transform: uppercase;
                    }
                }

                #privacy-policy__main-callback-form{
                    margin-right: size(10, 1920);
                }
                
                .privacy-label{
                    color: rgba(249, 249, 242, 0.50);
                    letter-spacing: size(0.4, 1920);
                    font-size: size(16, 1920);
                }
            }
        }
    }

    @media screen and (max-width: 1366px){
        .presentation-section {
            padding-top: size(100, 1366);
            padding-bottom: size(100, 1366);
            margin-bottom: size(103, 1366);

            h1 {
                font-size: size(100, 1366);
                max-width: size(740, 1366);
            }

            p {
                font-size: size(20, 1366);
            }

            .to-catalog__presentation-section {
                width: size(350, 1366);
                margin-top: size(40, 1366);
            }
        }

        .main-categories {
            margin-bottom: size(100, 1366);

            h3 {
                margin-bottom: size(50, 1366);
            }

            .categories-wrapper__main-categories {

                .category__main-categories {
                    width: size(410, 1366);
                    height: size(500, 1366);

                    .to-all-categoties {
                        width: size(410, 1366);
                        margin-top: size(30, 1366);
                    }
                }

                .bodysuit-category {
                    padding-top: size(10, 1366);
                    padding-left: size(20, 1366);
                }

                .middle-category__main-categories {
                    margin-top: size(30, 1366);
                    padding-top: size(10, 1366);
                    padding-left: size(20, 1366);
                }

                .last-category-inner__main-categories {
                    padding-top: size(10, 1366);
                    padding-left: size(20, 1366);
                    height: size(290, 1366);
                    width: size(410, 1366);
                }

                .category-name {
                    font-size: size(52, 1366);
                }
            }
        }

        .nice-body-section {
            margin-bottom: size(150, 1366);

            h3 {
                margin-bottom: size(30, 1366);
            }

            .nice-body-inner-wrapper {

                .left-col__nice-body {
                    width: size(525, 1366);

                    h4 {
                        font-size: size(24, 1366);
                        margin-bottom: size(10, 1366);
                    }

                    p {
                        margin-bottom: size(40, 1366);
                        font-size: size(18, 1366);
                    }

                    img {
                        width: size(410, 1366);
                        height: size(400, 1366);
                    }
                }

                .right-col__nice-body {
                    width: size(740, 1366);

                    .middle-in__nice-body {
                        width: size(300, 1366);
                        z-index: 3;

                        .more__nice-body {
                            width: size(190, 1366);
                            margin-top: size(30, 1366);
                            font-size: size(20, 1366);
                            padding: size(19, 1366) 0 size(19, 1366) 0;
                        }

                        img {
                            width: size(300, 1366);
                        }
                    }

                    .right-in__nice-body {
                        margin-top: size(-367, 1366);
                        width: size(520, 1366);

                        h4 {
                            margin-top: size(40, 1366);
                            font-size: size(24, 1366);
                            margin-bottom: size(10, 1366);
                        }

                        p {
                            font-size: size(18, 1366);
                        }

                        img {
                            width: size(520, 1366);

                        }
                    }
                }
            }
        }

        .main-callback-section{
            height: size(400, 1366);
            margin-bottom: size(100, 1366);

            .container{

                img{
                    width: size(550, 1366);
                    height: size(500, 1366);
                    margin-top: size(-100, 1366);
                    margin-right: size(110, 1366);
                }

                .main-callback-form{
                    margin-top: size(67, 1366);
                    width: size(630, 1366);

                    h3{
                        margin-bottom: size(10, 1366);
                    }

                    p{
                        font-size: size(18, 1366);
                        letter-spacing: size(0.45, 1366);
                        margin-bottom: size(40, 1366);
                    }

                    .main-callback-form-inner{

                        margin-bottom: size(20, 1366);

                        input{
                            width: size(410, 1366);
                            height: size(32, 1366);
                            border-bottom: solid size(1, 1366) #fff;
                            font-size: size(16, 1366);
                        }

                        .white-btn{
                            padding:  size(19, 1366) size(50, 1366) size(19, 1366) size(50, 1366);
                            font-size: size(20, 1366);
                            letter-spacing: size(0.5, 1366);
                            text-transform: uppercase;
                        }
                    }

                    #privacy-policy__main-callback-form{
                        margin-right: size(10, 1366);
                    }

                    .privacy-label{
                        color: rgba(249, 249, 242, 0.50);
                        letter-spacing: size(0.4, 1366);
                        font-size: size(16, 1366);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 1366px){
        .presentation-section {
            padding-top: size(100, 1366);
            padding-bottom: size(100, 1366);
            margin-bottom: size(103, 1366);

            h1 {
                font-size: size(100, 1366);
                max-width: size(740, 1366);
            }

            p {
                font-size: size(20, 1366);
            }

            .to-catalog__presentation-section {
                width: size(350, 1366);
                margin-top: size(40, 1366);
            }
        }

        .main-categories {
            margin-bottom: size(100, 1366);

            h3 {
                margin-bottom: size(50, 1366);
            }

            .categories-wrapper__main-categories {

                .category__main-categories {
                    width: size(410, 1366);
                    height: size(500, 1366);

                    .to-all-categoties {
                        width: size(410, 1366);
                        margin-top: size(30, 1366);
                    }
                }

                .bodysuit-category {
                    padding-top: size(10, 1366);
                    padding-left: size(20, 1366);
                }

                .middle-category__main-categories {
                    margin-top: size(30, 1366);
                    padding-top: size(10, 1366);
                    padding-left: size(20, 1366);
                }

                .last-category-inner__main-categories {
                    padding-top: size(10, 1366);
                    padding-left: size(20, 1366);
                    height: size(290, 1366);
                    width: size(410, 1366);
                }

                .category-name {
                    font-size: size(52, 1366);
                }
            }
        }

        .nice-body-section {
            margin-bottom: size(150, 1366);

            h3 {
                margin-bottom: size(30, 1366);
            }

            .nice-body-inner-wrapper {

                .left-col__nice-body {
                    width: size(525, 1366);

                    h4 {
                        font-size: size(24, 1366);
                        margin-bottom: size(10, 1366);
                    }

                    p {
                        margin-bottom: size(40, 1366);
                        font-size: size(18, 1366);
                    }

                    img {
                        width: size(410, 1366);
                        height: size(400, 1366);
                    }
                }

                .right-col__nice-body {
                    width: size(740, 1366);

                    .middle-in__nice-body {
                        width: size(300, 1366);
                        z-index: 3;

                        .more__nice-body {
                            width: size(190, 1366);
                            margin-top: size(30, 1366);
                            font-size: size(20, 1366);
                            padding: size(19, 1366) 0 size(19, 1366) 0;
                        }

                        img {
                            width: size(300, 1366);
                        }
                    }

                    .right-in__nice-body {
                        margin-top: size(-367, 1366);
                        width: size(520, 1366);

                        h4 {
                            margin-top: size(40, 1366);
                            font-size: size(24, 1366);
                            margin-bottom: size(10, 1366);
                        }

                        p {
                            font-size: size(18, 1366);
                        }

                        img {
                            width: size(520, 1366);

                        }
                    }
                }
            }
        }

        .main-callback-section{
            height: size(400, 1366);
            margin-bottom: size(100, 1366);

            .container{

                img{
                    width: size(550, 1366);
                    height: size(500, 1366);
                    margin-top: size(-100, 1366);
                    margin-right: size(110, 1366);
                }

                .main-callback-form{
                    margin-top: size(67, 1366);
                    width: size(630, 1366);

                    h3{
                        margin-bottom: size(10, 1366);
                    }

                    p{
                        font-size: size(18, 1366);
                        letter-spacing: size(0.45, 1366);
                        margin-bottom: size(40, 1366);
                    }

                    .main-callback-form-inner{

                        margin-bottom: size(20, 1366);

                        input{
                            width: size(410, 1366);
                            height: size(32, 1366);
                            border-bottom: solid size(1, 1366) #fff;
                            font-size: size(16, 1366);
                        }

                        .white-btn{
                            padding:  size(19, 1366) size(50, 1366) size(19, 1366) size(50, 1366);
                            font-size: size(20, 1366);
                            letter-spacing: size(0.5, 1366);
                            text-transform: uppercase;
                        }
                    }

                    #privacy-policy__main-callback-form{
                        margin-right: size(10, 1366);
                    }

                    .privacy-label{
                        color: rgba(249, 249, 242, 0.50);
                        letter-spacing: size(0.4, 1366);
                        font-size: size(16, 1366);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px){
        .presentation-section {
            padding-top: size(100, 768);
            padding-bottom: size(100, 768);
            margin-bottom: size(103, 768);
            background-image: url('../public/images/main-page/main-banner-adapt.png');

            h1 {
                font-size: size(100, 768);
                max-width: size(740, 768);
            }

            p {
                font-size: size(20, 768);
            }

            .to-catalog__presentation-section {
                width: size(350, 768);
                height: size(60, 768);
                margin-top: size(40, 768);
                font-size: size(20, 768);
            }
        }

        .main-categories {
            margin-bottom: size(100, 768);

            h3 {
                margin-bottom: size(50, 768);
            }

            .categories-wrapper__main-categories {

                .category__main-categories {
                    width: size(220, 768);
                    height: size(500, 768);

                    .to-all-categoties {
                        width: size(220, 768);
                        margin-top: size(30, 768);
                    }
                }

                .bodysuit-category {
                    padding-top: size(10, 768);
                    padding-left: size(20, 768);
                }

                .middle-category__main-categories {
                    margin-top: size(30, 768);
                    padding-top: size(10, 768);
                    padding-left: size(20, 768);
                }

                .last-category-inner__main-categories {
                    padding-top: size(10, 768);
                    padding-left: size(20, 768);
                    height: size(290, 768);
                    width: size(220, 768);
                }

                .to-all-categoties{
                    padding-left: 0;
                    padding-right: 0;
                    padding-top: size(16, 768);
                    padding-bottom: size(16, 768);
                }

                .category-name {
                    font-size: size(52, 768);
                }
            }
        }

        .nice-body-section {
            margin-bottom: size(70, 768);

            h3 {
                margin-bottom: size(30, 768);
            }

            .nice-body-inner-wrapper {
                flex-direction: column;

                .mobile-middle-in__nice-body{
                    display: block;
                    width: auto;
                    margin-top: size(-160, 1920);
                    img{
                        width: size(220, 768)!important;
                        height: size(400, 768)!important;
                        margin-bottom: size(30, 768);
                    }

                    .more__nice-body{
                        width: size(220, 768);
                    }
                }

                .left-col__nice-body {
                    width: size(700, 768);
                    flex-direction: row;
                    margin-bottom: size(30, 768);

                    .left-col__nice-body-inner{
                        width: size(480, 768);
                        margin-right: size(20, 768);
                    }

                    h4 {
                        font-size: size(24, 768);
                        margin-bottom: size(10, 768);
                    }

                    p {
                        margin-bottom: size(40, 768);
                        font-size: size(18, 768);
                        letter-spacing: size(0.45, 768);
                    }

                    img {
                        object-position: top;
                        width: size(460, 768);
                        height: size(250, 768);
                        object-fit: cover;
                    }
                }


                .right-col__nice-body {
                    width: size(700, 768);

                    .middle-in__nice-body {
                        width: size(300, 768);
                        z-index: 3;
                        display: none;

                        .more__nice-body {
                            width: size(190, 768);
                            margin-top: size(30, 768);
                            font-size: size(20, 768);
                            padding: size(19, 768) size(50, 768) size(19, 768) size(50, 768);
                        }

                        img {
                            width: size(300, 768);
                        }
                    }

                    .right-in__nice-body {
                        margin-top: size(0, 768);
                        width: size(700, 768);
                        position: relative;
                        display: flex;
                        align-self: flex-start;

                        h4 {
                            margin-top: size(0, 768);
                            font-size: size(24, 768);
                            margin-bottom: size(10, 768);
                        }

                        p {
                            font-size: size(18, 768);
                            letter-spacing: size(0.45, 768);
                        }

                        img {
                            width: size(340, 768);
                            margin-right: size(20, 768);
                        }
                    }
                }
            }
        }

        .main-callback-section{
            height: size(740, 768);
            margin-bottom: size(100, 768);

            .container{

                flex-direction: column-reverse;

                img{
                    width: 97vw;
                    height: size(370, 768);
                    margin-top: size(0, 768);
                    margin-right: size(0, 768);
                    object-fit: cover;
                    object-position: bottom;
                    transform: scale(1.1);
                }

                .main-callback-form{
                    margin-top: size(50, 768);
                    margin-bottom: size(50, 768);
                    margin-left: size(78, 768);
                    width: size(620, 768);

                    h3{
                        margin-bottom: size(10, 768);
                        font-size: size(52, 768);
                    }

                    p{
                        font-size: size(18, 768);
                        letter-spacing: size(0.45, 768);
                        margin-bottom: size(40, 768);
                    }

                    .main-callback-form-inner{

                        margin-bottom: size(20, 768);

                        input{
                            width: size(410, 768);
                            height: size(32, 768);
                            border-bottom: solid size(1, 768) #fff;
                            font-size: size(16, 768);
                        }

                        .white-btn{

                            padding:  size(19, 768) size(40, 768) size(19, 768) size(40, 768);
                            font-size: size(20, 768);
                            letter-spacing: size(0.5, 768);
                            text-transform: uppercase;
                        }
                    }

                    #privacy-policy__main-callback-form{
                        margin-right: size(10, 768);
                    }

                    .privacy-label{
                        color: rgba(249, 249, 242, 0.50);
                        letter-spacing: size(0.4, 768);
                        font-size: size(16, 768);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 360px){
        .presentation-section {
            padding-top: size(100, 360);
            padding-bottom: size(100, 360);
            margin-bottom: size(40, 360);
            background: linear-gradient(24deg, rgba(164, 164, 164, 0.50) 53.63%, rgba(160, 160, 159, 0.00) 100%), url('../public/images/main-page/main-banner-adapt.png'), lightgray 50% / cover no-repeat left;

            h1 {
                font-size: size(36, 360);
                max-width: size(740, 360);
            }

            p {
                font-size: size(20, 360);
                letter-spacing: size(0.5, 360);
            }

            .to-catalog__presentation-section {
                width: size(320, 360);
                height: size(60, 360);
                margin-top: size(40, 360);
                font-size: size(20, 360);
            }
        }

        .main-categories {
            margin-bottom: size(120, 360);

            h3 {
                margin-bottom: size(50, 360);
            }

            .categories-wrapper__main-categories {

                flex-direction: column;

                .category__main-categories {
                    width: size(320, 360);
                    height: size(250, 360);

                    .to-all-categoties {
                        width: size(220, 360);
                        margin-top: size(30, 360);
                    }
                }

                .bodysuit-category {
                    padding-top: size(10, 360);
                    padding-left: size(20, 360);
                }

                .middle-category__main-categories {
                    margin-top: size(20, 360);
                    padding-top: size(10, 360);
                    padding-left: size(20, 360);
                    margin-bottom: size(20, 368);
                }

                .last-category-inner__main-categories {
                    padding-top: size(10, 360);
                    padding-left: size(20, 360);
                    height: size(250, 360);
                    width: size(320, 360);
                }

                .to-all-categoties{
                    padding-left: 0;
                    padding-right: 0;
                    padding-top: size(16, 360);
                    padding-bottom: size(16, 360);
                    width: size(320, 360)!important;
                }

                .category-name {
                    font-size: size(30, 360);
                }
            }
        }

        .nice-body-section {
            margin-bottom: size(40, 360);

            h3 {
                margin-bottom: size(30, 360);
            }

            .nice-body-inner-wrapper {
                flex-direction: column;

                .mobile-middle-in__nice-body{
                    display: block;
                    width: auto;
                    margin-top: size(-160, 1920);
                    img{
                        width: size(320, 360)!important;
                        height: size(250, 360)!important;
                        margin-bottom: size(30, 360);
                        object-position: center!important;
                    }

                    .more__nice-body{
                        width: size(320, 360);
                        padding-top: size(16, 360);
                        padding-bottom: size(16, 360);
                    }
                }

                .left-col__nice-body {
                    width: size(320, 360);
                    flex-direction: column;
                    margin-bottom: size(30, 360);

                    .left-col__nice-body-inner{
                        width: size(320, 360);
                        margin-right: size(20, 360);
                        
                        img{
                            display: none;
                        }
                    }

                    h4 {
                        font-size: size(24, 360);
                        margin-bottom: size(10, 360);
                    }

                    p {
                        margin-bottom: size(40, 360);
                        font-size: size(18, 360);
                        letter-spacing: size(0.45, 360);
                    }

                    img {
                        object-position: top;
                        width: size(320, 360);
                        height: size(250, 360);
                        object-fit: cover;
                    }
                }


                .right-col__nice-body {
                    width: size(320, 360);

                    .middle-in__nice-body {
                        width: size(300, 360);
                        z-index: 3;
                        display: none;

                        .more__nice-body {
                            width: size(320, 360);
                            margin-top: size(30, 360);
                            font-size: size(20, 360);
                            padding: size(19, 360) size(50, 360) size(19, 360) size(50, 360);
                        }

                        img {
                            width: size(300, 360);

                        }
                    }

                    .right-in__nice-body {
                        margin-top: size(0, 360);
                        width: size(320, 360);
                        position: relative;
                        display: flex;
                        flex-direction: column;
                        align-self: flex-start;

                        h4 {
                            margin-top: size(0, 360);
                            font-size: size(24, 360);
                            margin-bottom: size(10, 360);
                        }

                        p {
                            font-size: size(18, 360);
                            letter-spacing: size(0.45, 360);
                        }

                        img {
                            width: size(340, 360);
                            margin-right: size(20, 360);
                            margin-bottom: size(30, 360);
                        }
                    }
                }
            }
        }

        .main-callback-section{
            height: size(740, 360);
            margin-bottom: size(100, 360);

            .container{

                flex-direction: column-reverse;

                img{
                    width: 99vw;
                    height: size(370, 360);
                    margin-top: size(0, 360);
                    margin-right: size(0, 360);
                    object-fit: cover;
                    object-position: bottom;
                    transform: scale(1.13);
                }

                .main-callback-form{
                    margin-top: size(50, 360);
                    margin-bottom: size(50, 360);
                    margin-left: size(0, 360);
                    width: size(320, 360);

                    h3{
                        margin-bottom: size(10, 360);
                        font-size: size(36, 360);
                    }

                    p{
                        font-size: size(18, 360);
                        letter-spacing: size(0.45, 360);
                        margin-bottom: size(40, 360);
                    }

                    .main-callback-form-inner{
                        flex-direction: column;
                        margin-bottom: size(20, 360);

                        input{
                            width: size(320, 360);
                            height: size(32, 360);
                            border-bottom: solid size(1, 360) #fff;
                            font-size: size(16, 360);
                            margin-bottom: size(20, 360);
                        }

                        .white-btn{
                            width: size(320, 360);
                            padding:  size(19, 360) size(40, 360) size(19, 360) size(40, 360);
                            font-size: size(20, 360);
                            letter-spacing: size(0.5, 360);
                            text-transform: uppercase;
                        }
                    }

                    #privacy-policy__main-callback-form{
                        margin-right: size(10, 360);
                    }

                    .privacy-label{
                        color: rgba(249, 249, 242, 0.50);
                        letter-spacing: size(0.4, 360);
                        font-size: size(16, 360);
                    }
                }
            }
        }
    }

</style>