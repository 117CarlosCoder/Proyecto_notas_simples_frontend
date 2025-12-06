import { ref } from "vue";
import { useRouter } from "vue-router";
const router = useRouter();
const loading = ref(false);
const logout = () => {
    loading.value = true;
    localStorage.removeItem("jwt");
    setTimeout(() => {
        loading.value = false;
        router.push("/home");
    }, 200);
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ 'onClick': {} },
    color: "yellow lighten-2",
    variant: "tonal",
    loading: (__VLS_ctx.loading),
}));
const __VLS_2 = __VLS_1({
    ...{ 'onClick': {} },
    color: "yellow lighten-2",
    variant: "tonal",
    loading: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
let __VLS_4;
let __VLS_5;
const __VLS_6 = ({ click: {} },
    { onClick: (__VLS_ctx.logout) });
var __VLS_7 = {};
const { default: __VLS_8 } = __VLS_3.slots;
// @ts-ignore
[loading, logout,];
const __VLS_9 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
VIcon;
// @ts-ignore
const __VLS_10 = __VLS_asFunctionalComponent(__VLS_9, new __VLS_9({
    left: true,
}));
const __VLS_11 = __VLS_10({
    left: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_10));
const { default: __VLS_13 } = __VLS_12.slots;
var __VLS_12;
var __VLS_3;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
