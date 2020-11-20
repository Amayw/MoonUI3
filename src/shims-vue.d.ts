declare module '*.vue' {
    import { ComponentOptions } from 'vue'
    const componentOptions: ComponentOptions
    export default componentOptions
}

declare module '*.md' {
    // @ts-ignore
    import { ComponentOptions } from 'md'
    const componentOptions: ComponentOptions
    export default componentOptions
}