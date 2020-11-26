<template>
    <div class="topNavAndContent">
        <TopNav/>
        <div class="content">
            <div class="introduction">
                <h3>MoonUI</h3>
                <h3>一个简单易上手的UI框架</h3>
            </div>
            <div class="link">
                <router-link class="get" to="/doc">Get Start</router-link>
                <a class="git" href="https://github.com/Amayw/MoonUI3">Github</a>
            </div>
        </div>
    </div>
    <div class="introduction">
        <ul>
            <li>
                <m-icon icon="vuejs"></m-icon>
                <h2>基于 Vue 3</h2>
                <p>这是我在学习Vue3是做的一个UI组件库</p>
            </li>
            <li>
                <m-icon icon="ts"></m-icon>
                <h2>基于 Typescript</h2>
                <p>源代码采用 Typescript 书写(非严格检查)</p>
            </li>
            <li>
                <m-icon icon="ui1"></m-icon>
                <h2>代码易读</h2>
                <sp>每个组件的源代码都规范书写，极其易读</sp>
            </li>
        </ul>


    </div>
</template>

<script>
    import TopNav from '../components/TopNav.vue';
    import Icon from '../components/Icon.vue';

    export default {
        name: 'Home',
        components: {
            TopNav,
            'm-icon': Icon
        }
    };
</script>

<style lang="scss" scoped>
    $light-color: #fcd75a;
    $dark-color: #424a63;
    .topNavAndContent {
        background: linear-gradient(145deg, rgba(240, 241, 245, 1) 0%, rgba(221, 233, 249, 1) 100%);
        clip-path: ellipse(80% 60% at 50% 40%);

        > .content {
            display: flex;
            flex-direction: column;
            align-items: center;
            padding-bottom: 80px;

            > .introduction {
                display: flex;
                flex-direction: column;
                justify-content: center;
                align-items: center;
                margin: 20px 0;
                color: $dark-color;
            }

            > .link {
                display: flex;
                align-items: center;

                > a {
                    margin: 5px;
                    padding: 8px;
                    border-radius: 16px;

                    &.get {
                        background: $light-color;
                        color: white;
                    }

                    &.git {
                        border: 1px solid $light-color;
                        color: $light-color;
                    }

                    &:hover {
                        text-decoration: underline;
                    }
                }
            }
        }
    }

    .introduction {
        margin: 64px auto;
        padding: 0 16px;
        @media (min-width: 800px) {
            width: 800px;
            >ul {
                >li {
                    width: 50%;
                }
            }
        }
        @media (min-width: 1200px) {
            width: 1200px;
            >ul {
                >li {
                    width: 33.3333%;
                }
            }
        }
        >ul {
            display: flex;
            flex-wrap: wrap;

            > li {
                margin: 16px 0;
                display: grid;
                justify-content: start;
                align-content: space-between;
                grid-template-areas:"icon title" "icon text";
                grid-template-columns: 80px auto;
                grid-template-rows: 1fr auto;

                > .icon {
                    grid-area: icon;
                    width: 64px;
                    height: 64px;
                }

                > h3 {
                    grid-area: title;
                    font-size: 28px;
                }

                > p {
                    grid-area: text
                }
            }
        }

    }


</style>

