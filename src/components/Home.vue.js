import { ref } from "vue";
import { useRouter } from "vue-router";
import LoginForm from "@/components/Login.vue";
const dialog = ref(false);
const showRegister = ref(false);
const router = useRouter();
function onLoginSuccess() {
    dialog.value = false;
    router.push({ name: "NotasPage" });
}
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
const __VLS_0 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
VContainer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "fill-height d-flex flex-column align-center justify-center" },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "fill-height d-flex flex-column align-center justify-center" },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
const { default: __VLS_5 } = __VLS_3.slots;
const __VLS_6 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
    ...{ class: "pa-8 text-center" },
    color: "amber lighten-4",
    elevation: "10",
    rounded: "xl",
    maxWidth: "500",
}));
const __VLS_8 = __VLS_7({
    ...{ class: "pa-8 text-center" },
    color: "amber lighten-4",
    elevation: "10",
    rounded: "xl",
    maxWidth: "500",
}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_10 } = __VLS_9.slots;
const __VLS_11 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
VContainer;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    ...{ class: "d-flex justify-center align-center" },
    ...{ style: {} },
}));
const __VLS_13 = __VLS_12({
    ...{ class: "d-flex justify-center align-center" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_15 } = __VLS_14.slots;
const __VLS_16 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
VIcon;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    size: "96",
    color: "black darken-2",
}));
const __VLS_18 = __VLS_17({
    size: "96",
    color: "black darken-2",
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_20 } = __VLS_19.slots;
var __VLS_19;
var __VLS_14;
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-h4 font-weight-bold mb-2" },
});
__VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
    ...{ class: "text-subtitle-1 mb-6" },
});
const __VLS_21 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({
    ...{ 'onClick': {} },
    color: "black darken-3",
    size: "large",
    ...{ class: "text-yellow font-weight-bold" },
}));
const __VLS_23 = __VLS_22({
    ...{ 'onClick': {} },
    color: "black darken-3",
    size: "large",
    ...{ class: "text-yellow font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_22));
let __VLS_25;
let __VLS_26;
const __VLS_27 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.dialog = true;
            // @ts-ignore
            [dialog,];
        } });
const { default: __VLS_28 } = __VLS_24.slots;
var __VLS_24;
var __VLS_9;
const __VLS_29 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
VDialog;
// @ts-ignore
const __VLS_30 = __VLS_asFunctionalComponent(__VLS_29, new __VLS_29({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "400",
    persistent: true,
}));
const __VLS_31 = __VLS_30({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "400",
    persistent: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_30));
const { default: __VLS_33 } = __VLS_32.slots;
// @ts-ignore
[dialog,];
const __VLS_34 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_35 = __VLS_asFunctionalComponent(__VLS_34, new __VLS_34({}));
const __VLS_36 = __VLS_35({}, ...__VLS_functionalComponentArgsRest(__VLS_35));
const { default: __VLS_38 } = __VLS_37.slots;
const __VLS_39 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_40 = __VLS_asFunctionalComponent(__VLS_39, new __VLS_39({
    ...{ 'onClick': {} },
    icon: true,
    ...{ class: "dialog-close-btn" },
    'aria-label': "Cerrar",
}));
const __VLS_41 = __VLS_40({
    ...{ 'onClick': {} },
    icon: true,
    ...{ class: "dialog-close-btn" },
    'aria-label': "Cerrar",
}, ...__VLS_functionalComponentArgsRest(__VLS_40));
let __VLS_43;
let __VLS_44;
const __VLS_45 = ({ click: {} },
    { onClick: (...[$event]) => {
            __VLS_ctx.dialog = false;
            // @ts-ignore
            [dialog,];
        } });
const { default: __VLS_46 } = __VLS_42.slots;
const __VLS_47 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
VIcon;
// @ts-ignore
const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({}));
const __VLS_49 = __VLS_48({}, ...__VLS_functionalComponentArgsRest(__VLS_48));
const { default: __VLS_51 } = __VLS_50.slots;
var __VLS_50;
var __VLS_42;
const __VLS_52 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
VCardText;
// @ts-ignore
const __VLS_53 = __VLS_asFunctionalComponent(__VLS_52, new __VLS_52({}));
const __VLS_54 = __VLS_53({}, ...__VLS_functionalComponentArgsRest(__VLS_53));
const { default: __VLS_56 } = __VLS_55.slots;
if (!__VLS_ctx.showRegister) {
    // @ts-ignore
    [showRegister,];
    /** @type {[typeof LoginForm, ]} */ ;
    // @ts-ignore
    const __VLS_57 = __VLS_asFunctionalComponent(LoginForm, new LoginForm({
        ...{ 'onLoginSuccess': {} },
        ...{ 'onGoRegister': {} },
    }));
    const __VLS_58 = __VLS_57({
        ...{ 'onLoginSuccess': {} },
        ...{ 'onGoRegister': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_57));
    let __VLS_60;
    let __VLS_61;
    const __VLS_62 = ({ loginSuccess: {} },
        { onLoginSuccess: (__VLS_ctx.onLoginSuccess) });
    const __VLS_63 = ({ goRegister: {} },
        { onGoRegister: (...[$event]) => {
                if (!(!__VLS_ctx.showRegister))
                    return;
                __VLS_ctx.showRegister = true;
                // @ts-ignore
                [showRegister, onLoginSuccess,];
            } });
    var __VLS_59;
}
else {
    const __VLS_65 = {}.RegisterForm;
    /** @type {[typeof __VLS_components.RegisterForm, ]} */ ;
    // @ts-ignore
    RegisterForm;
    // @ts-ignore
    const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({
        ...{ 'onRegisterSuccess': {} },
        ...{ 'onGoLogin': {} },
    }));
    const __VLS_67 = __VLS_66({
        ...{ 'onRegisterSuccess': {} },
        ...{ 'onGoLogin': {} },
    }, ...__VLS_functionalComponentArgsRest(__VLS_66));
    let __VLS_69;
    let __VLS_70;
    const __VLS_71 = ({ registerSuccess: {} },
        { onRegisterSuccess: (...[$event]) => {
                if (!!(!__VLS_ctx.showRegister))
                    return;
                __VLS_ctx.showRegister = false;
                // @ts-ignore
                [showRegister,];
            } });
    const __VLS_72 = ({ goLogin: {} },
        { onGoLogin: (...[$event]) => {
                if (!!(!__VLS_ctx.showRegister))
                    return;
                __VLS_ctx.showRegister = false;
                // @ts-ignore
                [showRegister,];
            } });
    var __VLS_68;
}
var __VLS_55;
var __VLS_37;
var __VLS_32;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['fill-height']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['flex-column']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-yellow']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['dialog-close-btn']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
