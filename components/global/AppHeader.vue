<template>
    <header class="main-header">
        <div class="container">
            <div class="header-top">
                <div class="col__header-top">
                    <div class="row__col__header-top mobile-hide__main-header">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M6 11.1579L19 5L12.8421 18L11.4737 12.5263L6 11.1579Z" stroke="#DAD7CD"
                                  stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        </svg>
                        <NuxtLink  :to="'/cities/' + 'spb'">
                            <span class="region-name__main-header">
                                Санкт-Петербург
                            </span>
                        </NuxtLink>
                        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8 3.33325V12.6666" stroke="#DAD7CD" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                            <path d="M3.3335 8H12.6668" stroke="#DAD7CD" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                        <span class="phone__main-header">
                            <a href="tel:+78003451034">
                                7 800 345 10 34
                            </a>
                        </span>
                    </div>
                    <div class="row__col__header-top search__main-header">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 18C14.866 18 18 14.866 18 11C18 7.13401 14.866 4 11 4C7.13401 4 4 7.13401 4 11C4 14.866 7.13401 18 11 18Z"
                                  stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            <path d="M20 20L17 17" stroke="#333934" stroke-width="2" stroke-linecap="round"
                                  stroke-linejoin="round"/>
                        </svg>
                    </div>
                </div>
                <div class="col__header-top">
                    <NuxtLink to="/">
                        <Logo/>
                    </NuxtLink>
                </div>
                <div class="col__header-top right-col__header-top">
                    <div class="row__col__header-top mobile-hide__main-header">
                        <nav>
                            <NuxtLink  to="/guarantee">
                                <li>
                                    Гарантия
                                </li>
                            </NuxtLink>
                            <NuxtLink  to="/ship">
                                <li>
                                    Доставка
                                </li>
                            </NuxtLink>
                            <NuxtLink  to="/contacts">
                                <li>
                                    Контакты
                                </li>
                            </NuxtLink>
                        </nav>
                    </div>
                    <div class="row__col__header-top icons__header-top">
                        <NuxtLink to="/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M19 21V19C19 17.9391 18.5786 16.9217 17.8284 16.1716C17.0783 15.4214 16.0609 15 15 15H9C7.93913 15 6.92172 15.4214 6.17157 16.1716C5.42143 16.9217 5 17.9391 5 19V21"
                                      stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M12 11C14.2091 11 16 9.20914 16 7C16 4.79086 14.2091 3 12 3C9.79086 3 8 4.79086 8 7C8 9.20914 9.79086 11 12 11Z"
                                      stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </NuxtLink>

                        <NuxtLink to="/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M20.4134 4.58753C19.9121 4.08434 19.3164 3.68508 18.6606 3.41266C18.0047 3.14023 17.3015 3 16.5914 3C15.8812 3 15.178 3.14023 14.5222 3.41266C13.8663 3.68508 13.2707 4.08434 12.7694 4.58753L12 5.36717L11.2306 4.58753C10.7293 4.08434 10.1337 3.68508 9.47781 3.41266C8.82195 3.14023 8.11878 3 7.40863 3C6.69847 3 5.9953 3.14023 5.33944 3.41266C4.68358 3.68508 4.08793 4.08434 3.58665 4.58753C1.46832 6.70656 1.33842 10.2849 4.00631 13.0037L12 21L19.9937 13.0037C22.6616 10.2849 22.5317 6.70656 20.4134 4.58753Z"
                                      stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </NuxtLink>

                        <NuxtLink to="/">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M6 2L3 6V20C3 20.5304 3.21071 21.0391 3.58579 21.4142C3.96086 21.7893 4.46957 22 5 22H19C19.5304 22 20.0391 21.7893 20.4142 21.4142C20.7893 21.0391 21 20.5304 21 20V6L18 2H6Z"
                                      stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M3 6H21" stroke="#333934" stroke-width="2" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M16 10C16 11.0609 15.5786 12.0783 14.8284 12.8284C14.0783 13.5786 13.0609 14 12 14C10.9391 14 9.92172 13.5786 9.17157 12.8284C8.42143 12.0783 8 11.0609 8 10"
                                      stroke="#333934" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </NuxtLink>

                    </div>
                </div>
            </div>
            <div class="header-bottom">
                <nav>
                    <NuxtLink  to="/catalog">
                        <li>
                            Каталог
                        </li>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <li>
                            Новая коллекция
                        </li>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <li>
                            Комплекты
                        </li>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <li>
                            Бюстгальтеры
                        </li>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <li>
                            трусики
                        </li>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <li>
                            Купальники
                        </li>
                    </NuxtLink>
                    <NuxtLink to="/">
                        <li>
                            боди
                        </li>
                    </NuxtLink>
                </nav>
            </div>
        </div>
    </header>
</template>

<script>
    import Logo from "./Logo";

    export default {
        name: 'MainHeader',
        components: {Logo}
    }
</script>

<style lang="scss" scoped>
    @import "assets/scss/global";

    .main-header {
        margin-bottom: size(40, 1920);

        .header-top {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding-top: size(20, 1920);
            border-bottom: size(1, 1920) solid #DAD7CD;

            .logo-svg {
                width: size(120, 1920);
                height: size(50, 1920);
            }

            .row__col__header-top {
                font-size: size(16, 1920);
                color: #333934;
                display: flex;
                align-items: center;
                margin-bottom: size(30, 1920);

                .phone__main-header {
                    a {
                        color: $iml-black-txt;
                    }
                }

                svg {
                    width: size(24, 1920);
                    height: size(24, 1920);
                    margin-right: size(4, 1920);
                }

                .region-name__main-header {
                    margin-right: size(30, 1920);
                    color: #333934;
                }

                nav {
                    display: flex;

                    li {
                        color: #333934;
                        margin-left: size(30, 1920);
                    }
                }
            }

            .icons__header-top {
                justify-content: flex-end;

                svg {
                    margin-right: size(20, 1920);
                }
            }

        }

        .header-bottom {
            nav {
                display: flex;
                justify-content: center;
                margin-top: size(30, 1920);

                li {
                    margin-right: size(30, 1920);
                    font-size: size(20, 1920);
                    color: $iml-black-txt;
                    text-align: center;
                    font-style: normal;
                    font-weight: 400;
                    line-height: normal;
                    letter-spacing: size(0.5, 1920);
                    text-transform: uppercase;
                }
            }
        }
    }

    @media screen and (max-width: 1366px) {
        .main-header {
            margin-bottom: size(40, 1366);

            .header-top {
                padding-top: size(20, 1366);
                border-bottom: size(1, 1366) solid #DAD7CD;

                .logo-svg {
                    width: size(120, 1366);
                    height: size(50, 1366);
                }

                .row__col__header-top {
                    font-size: size(16, 1366);
                    margin-bottom: size(30, 1366);

                    svg {
                        width: size(24, 1366);
                        height: size(24, 1366);
                        margin-right: size(4, 1366);
                    }

                    .region-name__main-header {
                        margin-right: size(30, 1366);
                    }

                    nav {
                        li {
                            margin-left: size(30, 1366);
                            font-size: size(18, 1366)
                        }
                    }
                }

                .icons__header-top {
                    svg {
                        margin-right: size(20, 1366);
                    }
                }

            }

            .header-bottom {
                nav {
                    margin-top: size(30, 1366);

                    li {
                        margin-right: size(30, 1366);
                        font-size: size(20, 1366);
                        letter-spacing: size(0.5, 1366);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 768px) {
        .main-header {
            margin-bottom: size(40, 768);

            .header-top {
                padding-top: size(20, 768);
                padding-bottom: size(30, 768);
                border-bottom: size(1, 768) solid #DAD7CD;

                .logo-svg {
                    width: size(120, 768);
                    height: size(50, 768);
                }

                .search__main-header {
                    width: size(112, 768);
                }

                .row__col__header-top {
                    font-size: size(16, 768);
                    margin-bottom: size(0, 768);


                    svg {
                        width: size(24, 768);
                        height: size(24, 768);
                        margin-right: size(4, 768);
                    }

                    .region-name__main-header {
                        margin-right: size(30, 768);
                    }

                    nav {
                        li {
                            margin-left: size(30, 768);
                            font-size: size(18, 768)
                        }
                    }
                }

                .icons__header-top {
                    svg {
                        margin-right: size(20, 768);
                    }
                }

                .mobile-hide__main-header {
                    margin-bottom: size(30, 768);
                }

            }

            .header-bottom {
                nav {
                    margin-top: size(30, 768);
                    display: flex;
                    padding-left: size(13, 768);
                    padding-right: size(13, 768);
                    justify-content: space-between;

                    li {
                        margin-right: size(0, 768);
                        font-size: size(20, 768);
                        letter-spacing: size(0.5, 768);
                    }
                }
            }
        }
    }

    @media screen and (max-width: 360px) {
        .main-header {
            margin-bottom: size(0, 360);

            .header-top {
                padding-top: size(20, 360);
                padding-bottom: size(30, 360);
                border-bottom: none;

                .logo-svg {
                    width: size(120, 360);
                    height: size(50, 360);
                }

                .search__main-header {
                    width: size(24, 360);

                }

                .row__col__header-top {
                    font-size: size(16, 360);
                    margin-bottom: size(0, 360);


                    svg {
                        width: size(24, 360);
                        height: size(24, 360);
                        margin-right: size(4, 360);
                    }

                    .region-name__main-header {
                        margin-right: size(30, 360);
                    }

                    nav {
                        li {
                            margin-left: size(30, 360);
                            font-size: size(18, 360)
                        }
                    }
                }

                .icons__header-top {
                    svg {
                        margin-right: size(0, 360);
                    }

                    a:nth-child(2) {
                        display: none;
                    }

                    a:nth-child(3) {
                        display: none;
                    }
                }

                .mobile-hide__main-header {
                    display: none;
                }

            }

            .header-bottom {
                display: none;
            }
        }
    }
</style>