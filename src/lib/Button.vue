<template>
    <button class="moon-button" :class="classes" :disabled="disabled">
        <slot/>
    </button>
</template>

<script lang="ts">
    import {computed} from 'vue';
    export default {
        name: 'MoonButton',
        props:{
            theme:{
                type:String,
                default:'button'
            },
            size:{
                type:String,
                default:'normal'
            },
            level:{
                type:String,
                default:'normal'
            },
            disabled:{
                type:Boolean,
                default:false
            }
        },
        setup(props){
            const {theme,size,level,disabled}=props;
            const classes=computed(()=>{
                return {[`moon-theme-${theme}`]:theme,
                        [`moon-size-${size}`]:size,
                        [`moon-level-${level}`]:level,}
            })
            return {classes}
        }
    };
</script>

<style lang="scss">
    $h:32px;
    $border-color:#d9d9d9;
    $color:#333;
    $blue:#40a9ff;
    $radius:4px;
    $red: red;
    $grey: grey;
    .moon-button{
        display:inline-flex;
        justify-content: center;
        align-items: center;
        white-space: nowrap;
        box-sizing: border-box;
        border: 1px solid $border-color;
        padding: 0 12px;
        height:$h;
        border-radius: $radius;
        color: $color;
        cursor: pointer;
        background: white;
        box-shadow: 0 1px 0 fade_out(black, 0.95);
        &+&{
            margin-left:8px;
        }
        &:hover,
        &:focus{
            color:$blue;
            border-color:$blue;
        }
        &:focus{
            outline:none;
        }
        &::-moz-focus-inner{
            border: 0;
        }

        &.moon-theme-link{
            border-color: transparent;
            box-shadow: none;
            color: $blue;
            &:hover,&:focus{
                color: lighten($blue, 10%);
            }

            &.moon-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }
        &.moon-theme-text{
            border-color: transparent;
            box-shadow: none;
            color: inherit;
            &:hover,&:focus{
                background: darken(white, 5%);
            }

            &.moon-level-main {
                color: $blue;
                &:hover,
                &:focus {
                    color: darken($blue, 10%);
                }
            }
            &.moon-level-danger {
                color: $red;
                &:hover,
                &:focus {
                    color: darken($red, 10%);
                }
            }
        }

        &.moon-theme-button {
            &.moon-level-main {
                background: $blue;
                color: white;
                border-color: $blue;
                &:hover,
                &:focus {
                    background: darken($blue, 10%);
                    border-color: darken($blue, 10%);
                }
            }
            &.moon-level-danger {
                background: $red;
                border-color: $red;
                color: white;
                &:hover,
                &:focus {
                    background: darken($red, 10%);
                    border-color: darken($red, 10%);
                }
            }
        }

        &.moon-size-big{
            font-size: 24px;
            height: $h + 16px;
            padding: 0 16px
        }

        &.moon-size-small{
            font-size: 12px;
            height: $h - 12px;
            padding: 0 4px
        }

        &.moon-theme-button {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
                &:hover {
                    border-color: $grey;
                }
            }
        }
        &.moon-theme-link, &.moon-theme-text {
            &[disabled] {
                cursor: not-allowed;
                color: $grey;
            }
        }



    }
</style>