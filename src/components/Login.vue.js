import { ref } from "vue";
import apiClient from "@/config/axios";
const visible = ref(false);
const username = ref("");
const password = ref("");
const emit = defineEmits(["login-success", "go-register"]);
const handleLogin = async () => {
    try {
        const { data } = await apiClient.post('/auth/login', {
            nombre_usuario: username.value,
            contrasenia: password.value,
        });
        localStorage.setItem("jwt", data.token);
        emit("login-success");
    }
    catch (err) {
        console.error("Error de login:", err);
        alert("Error de login: " + err);
        alert("Usuario o contraseña incorrectos");
    }
};
debugger; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_ctx = {
    ...{},
    ...{},
    ...{},
    ...{},
    ...{},
};
let __VLS_elements;
let __VLS_components;
let __VLS_directives;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({});
const __VLS_0 = {}.VContainer;
/** @type {[typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, typeof __VLS_components.VContainer, typeof __VLS_components.vContainer, ]} */ ;
// @ts-ignore
VContainer;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    ...{ class: "d-flex justify-center align-center" },
    ...{ style: {} },
}));
const __VLS_2 = __VLS_1({
    ...{ class: "d-flex justify-center align-center" },
    ...{ style: {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
const __VLS_5 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
VIcon;
// @ts-ignore
const __VLS_6 = __VLS_asFunctionalComponent(__VLS_5, new __VLS_5({
    size: "96",
    color: "yellow darken-2",
}));
const __VLS_7 = __VLS_6({
    size: "96",
    color: "yellow darken-2",
}, ...__VLS_functionalComponentArgsRest(__VLS_6));
const { default: __VLS_9 } = __VLS_8.slots;
var __VLS_8;
var __VLS_3;
const __VLS_10 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_11 = __VLS_asFunctionalComponent(__VLS_10, new __VLS_10({
    ...{ class: "mx-auto pa-12 pb-8" },
    elevation: "8",
    maxWidth: "448",
    rounded: "lg",
    color: "gray darken-100",
}));
const __VLS_12 = __VLS_11({
    ...{ class: "mx-auto pa-12 pb-8" },
    elevation: "8",
    maxWidth: "448",
    rounded: "lg",
    color: "gray darken-100",
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_14 } = __VLS_13.slots;
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "text-subtitle-1 text-medium-emphasis mb-2" },
});
const __VLS_15 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    modelValue: (__VLS_ctx.username),
    density: "compact",
    placeholder: "Nombre de Usuario",
    prependInnerIcon: "mdi-account-outline",
    variant: "outlined",
    color: "yellow darken-2",
}));
const __VLS_17 = __VLS_16({
    modelValue: (__VLS_ctx.username),
    density: "compact",
    placeholder: "Nombre de Usuario",
    prependInnerIcon: "mdi-account-outline",
    variant: "outlined",
    color: "yellow darken-2",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[username,];
__VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
    ...{ class: "text-subtitle-1 text-medium-emphasis mt-4 mb-2" },
});
const __VLS_20 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.password),
    appendInnerIcon: (__VLS_ctx.visible ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visible ? 'text' : 'password'),
    density: "compact",
    placeholder: "Ingrese su contraseña",
    prependInnerIcon: "mdi-lock-outline",
    variant: "outlined",
    color: "yellow darken-2",
}));
const __VLS_22 = __VLS_21({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.password),
    appendInnerIcon: (__VLS_ctx.visible ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visible ? 'text' : 'password'),
    density: "compact",
    placeholder: "Ingrese su contraseña",
    prependInnerIcon: "mdi-lock-outline",
    variant: "outlined",
    color: "yellow darken-2",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
let __VLS_24;
let __VLS_25;
const __VLS_26 = ({ 'click:appendInner': {} },
    { 'onClick:appendInner': (...[$event]) => {
            __VLS_ctx.visible = !__VLS_ctx.visible;
            // @ts-ignore
            [password, visible, visible, visible, visible,];
        } });
var __VLS_23;
const __VLS_28 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ...{ 'onClick': {} },
    ...{ class: "mt-6 mb-4" },
    color: "yellow darken-2",
    size: "large",
    variant: "tonal",
    block: true,
}));
const __VLS_30 = __VLS_29({
    ...{ 'onClick': {} },
    ...{ class: "mt-6 mb-4" },
    color: "yellow darken-2",
    size: "large",
    variant: "tonal",
    block: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
let __VLS_32;
let __VLS_33;
const __VLS_34 = ({ click: {} },
    { onClick: (__VLS_ctx.handleLogin) });
const { default: __VLS_35 } = __VLS_31.slots;
// @ts-ignore
[handleLogin,];
var __VLS_31;
const __VLS_36 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
VCardText;
// @ts-ignore
const __VLS_37 = __VLS_asFunctionalComponent(__VLS_36, new __VLS_36({
    ...{ class: "text-center mt-2" },
}));
const __VLS_38 = __VLS_37({
    ...{ class: "text-center mt-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_37));
const { default: __VLS_40 } = __VLS_39.slots;
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('go-register');
            // @ts-ignore
            [$emit,];
        } },
    ...{ class: "text-yellow-darken-2 text-decoration-none" },
    href: "#",
});
const __VLS_41 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
VIcon;
// @ts-ignore
const __VLS_42 = __VLS_asFunctionalComponent(__VLS_41, new __VLS_41({
    icon: "mdi-chevron-right",
}));
const __VLS_43 = __VLS_42({
    icon: "mdi-chevron-right",
}, ...__VLS_functionalComponentArgsRest(__VLS_42));
var __VLS_39;
var __VLS_13;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-12']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-medium-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-subtitle-1']} */ ;
/** @type {__VLS_StyleScopedClasses['text-medium-emphasis']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-2']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-yellow-darken-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-decoration-none']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    setup: () => ({}),
});
export default {};
