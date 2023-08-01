<template>
    <footer class="main-footer">
        <div class="container">
            <div class="col__main-footer logo-col__main-footer">
                <GlobalFooterLogo />
                <div class="copyright__main-footer mobile-hide-link">
                    © 2023 Impacto Glancie
                </div>
            </div>

                <div class="col__main-footer col-nav__main-footer first-col-nav__main-footer">
                    <nav>
                        <li>
                            Каталог
                        </li>
                        <li>
                            Новая коллекция
                        </li>
                        <li>
                            Комплекты
                        </li>
                        <li>
                            Комплекты
                        </li>
                    </nav>
                    <div class="copyright__main-footer mobile-view-link">
                        © 2023 Impacto Glancie
                    </div>
                    <a href="#" class="bottom-link-footer  mobile-hide-link" >
                        Пользовательское соглашение
                    </a>
                </div>
                <div class="col__main-footer col-nav__main-footer">
                    <nav>
                        <li>
                            Трусики
                        </li>
                        <li>
                            Купальники
                        </li>
                        <li>
                            Боди
                        </li>
                    </nav>
                    <div class="mobile-links__main-footer">
                        <a href="#" class="bottom-link-footer mobile-view-link">
                            Пользовательское соглашение
                        </a>
                        <a href="#" class="bottom-link-footer mobile-view-link">
                            Политика конфиденциальности
                        </a>
                    </div>
                </div>
                <div class="col__main-footer col-nav__main-footer">
                    <nav>
                        <li>
                            Гарантия
                        </li>
                        <li>
                            Доставка
                        </li>
                        <li>
                            Контакты
                        </li>
                    </nav>
                    <a href="#" class="bottom-link-footer mobile-hide-link">
                        Политика конфиденциальности
                    </a>
                    <div class="mobile-360-view-link">
                        © 2023 Impacto Glancie
                    </div>
                </div>

            <div class="col__main-footer phone-col__main-footer">
                <div class="phone-footer-wrapper">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 5V19" stroke="#F9F9F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M5 12H19" stroke="#F9F9F2" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                    <a href="tel:+78003451034">
                        7 800 345 10 34
                    </a>
                </div>
                <button class="call-me__main-footer white-btn">
                    Перезвонить мне
                </button>
                <div class="mobile-360-view-link">
                    Пользовательское соглашение
                </div>
                <div class="mobile-360-view-link">
                    Политика конфиденциальности
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    export default {
        name: "AppFooter"
    }
</script>

<style lang="scss" scoped>
    @import "assets/scss/global";

    .main-footer{
        background-color: $main-green;
        color: #fff;
        margin-top: size(100, 1920);
        padding-top: size(80, 1920);
        padding-bottom: size(80, 1920);
        .container{
            flex-direction: row;
            justify-content: space-between;

            .mobile-hide-link{
                display: block;
            }
            
            .mobile-360-view-link{
                display: none;
            }
            
            .mobile-view-link{
                display: none;
            }

            .footer-logo{
                margin-bottom: size(140, 1920);
            }

            .nav-wrapper__main-footer{
                display: flex;
                justify-content: space-between;
                width: size(486, 1920);
                .col__main-footer{
                    width: size(155, 1920);
                }
            }


            .col__main-footer{
                display: flex;
                flex-direction: column;
                justify-content: space-between;


                .copyright__main-footer, .bottom-link-footer{
                    letter-spacing: size(0.4, 1920);
                    font-size: size(16, 1920);
                    color: rgba(249, 249, 242, 0.50);
                }

                nav{
                    li{
                        margin-bottom: size(10, 1920);
                        font-size: size(18, 1920);
                        letter-spacing: size(0.45, 1920);
                    }
                }

                .call-me__main-footer{
                    text-transform: uppercase;
                    font-size: size(20, 1920);
                    width: size(190, 1920);
                    padding: size(19, 1920) 0 size(19, 1920) 0;
                }

                .phone-footer-wrapper{
                    display: flex;
                    align-items: center;
                    margin-bottom: size(20, 1920);

                    svg{
                        margin-right: size(4, 1920);
                    }

                    a{
                        text-transform: uppercase;
                        font-size: size(36, 1920);
                        color: #fff;
                    }
                }
            }

            .phone-col__main-footer{
                justify-content: flex-start;

            }
        }
    }

    @media screen and (max-width: 1366px){
        .main-footer{
            margin-top: size(100, 1366);
            padding-top: size(80, 1366);
            padding-bottom: size(80, 1366);
            .container{
                .footer-logo{
                    margin-bottom: size(140, 1366);
                }

                .nav-wrapper__main-footer{
                    width: size(486, 1366);
                    .col__main-footer{
                        width: size(155, 1366);
                    }
                }


                .col__main-footer{

                    .copyright__main-footer, .bottom-link-footer{
                        letter-spacing: size(0.4, 1366);
                        font-size: size(16, 1366);
                        color: rgba(249, 249, 242, 0.50);
                    }

                    nav{
                        li{
                            margin-bottom: size(10, 1366);
                            font-size: size(18, 1366);
                            letter-spacing: size(0.45, 1366);
                        }
                    }

                    .call-me__main-footer{
                        font-size: size(20, 1366);
                        width: size(190, 1366);
                        padding: size(19, 1366) 0 size(19, 1366) 0;
                    }

                    .phone-footer-wrapper{
                        margin-bottom: size(20, 1366);

                        svg{
                            margin-right: size(4, 1366);
                        }

                        a{
                            font-size: size(36, 1366);
                        }
                    }
                }

            }
        }
    }

    @media screen and (max-width: 768px){

        .main-footer{
            margin-top: size(100, 768);
            padding-top: size(80, 768);
            padding-bottom: size(80, 768);
            .container{
                flex-wrap: wrap;

                .mobile-hide-link{
                    display: none!important;
                }

                .mobile-view-link{
                    display: block!important;
                    margin-bottom: size(10, 768);
                }

                .first-col-nav__main-footer{
                    margin-left: size(60, 768);
                }

                .col-nav__main-footer{
                    width: size(130, 768);
                }

                .footer-logo{
                    margin-bottom: size(140, 768);
                }

                .nav-wrapper__main-footer{
                    width: size(486, 768);
                    .col__main-footer{
                        width: size(155, 768);
                    }
                }


                .col__main-footer{



                    .copyright__main-footer, .bottom-link-footer{
                        letter-spacing: size(0.4, 768);
                        font-size: size(16, 768);
                        color: rgba(249, 249, 242, 0.50);
                        width: max-content;
                        display: block;
                    }

                    nav{


                        li{
                            margin-bottom: size(10, 768);
                            font-size: size(18, 768);
                            letter-spacing: size(0.45, 768);
                        }
                    }

                    .call-me__main-footer{
                        font-size: size(20, 768);
                        width: size(190, 768);
                        padding: size(19, 768) 0 size(19, 768) 0;
                    }


                    .phone-footer-wrapper{
                        margin-bottom: size(0, 768);
                        margin-top: size(-110, 768);



                        svg{
                            margin-right: size(4, 768);
                        }

                        a{
                            font-size: size(36, 768);
                        }
                    }
                }

            }
        }
    }

    @media screen and (max-width: 360px){

        .main-footer{
            margin-top: size(100, 360);
            padding-top: size(80, 360);
            padding-bottom: size(80, 360);
            .container{
                flex-wrap: wrap;

                .mobile-360-view-link{
                    display: block;
                    color: rgba(249, 249, 242, 0.50);
                    margin-top: size(10, 360);
                }
                
                .logo-col__main-footer{
                    width: size(320, 360);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }

                .mobile-hide-link{
                    display: none!important;
                }

                .mobile-view-link{
                    display: none!important;
                    margin-bottom: size(10, 360);
                }

                .first-col-nav__main-footer{
                    margin-left: size(0, 360);
                }

                .col-nav__main-footer{
                    width: size(155, 360);
                    margin-bottom: size(20, 360);
                }

                .footer-logo{
                    margin-bottom: size(30, 360);
                }

                .nav-wrapper__main-footer{
                    width: size(486, 360);
                    .col__main-footer{
                        width: size(155, 360);
                    }
                }


                .col__main-footer{

                    .copyright__main-footer, .bottom-link-footer{
                        letter-spacing: size(0.4, 360);
                        font-size: size(16, 360);
                        color: rgba(249, 249, 242, 0.50);
                        width: max-content;
                        display: block;
                    }

                    nav{


                        li{
                            margin-bottom: size(10, 360);
                            font-size: size(18, 360);
                            letter-spacing: size(0.45, 360);
                        }
                    }

                    .call-me__main-footer{
                        font-size: size(20, 360);
                        width: size(150, 360);
                        padding: size(19, 360) 0 size(19, 360) 0;
                        margin-top: size(20, 360);
                    }


                    .phone-footer-wrapper{
                        margin-bottom: size(0, 360);
                        margin-top: size(0, 360);

                        svg{
                            margin-right: size(4, 360);
                            width: size(24, 360);
                            height: size(24, 360);
                        }

                        a{
                            font-size: size(28, 360);
                        }
                    }
                }

                .phone-col__main-footer{
                    margin-top: size(-40, 360);
                }
            }
        }
    }
</style>