import { ref } from "vue";
import apiClient from "@/config/axios";
const dialog = ref(false);
const name = ref("");
const username = ref("");
const email = ref("");
const password = ref("");
const confirmPassword = ref("");
const visible = ref(false);
const visibleConfirm = ref(false);
const emit = defineEmits(["register-success", "go-login"]);
const handleRegister = async () => {
    if (password.value !== confirmPassword.value) {
        alert("Las contraseñas no coinciden");
        return;
    }
    try {
        const { data } = await apiClient.post('/auth/register', {
            nombre: name.value,
            nombre_usuario: username.value,
            correo: email.value,
            contrasenia: password.value,
        });
        dialog.value = true;
        emit("register-success");
    }
    catch (err) {
        console.error("Error en el registro:", err);
        alert("Error al registrar usuario :" + err);
    }
};
const closeDialog = () => {
    dialog.value = false;
    emit("register-success");
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
    color: "gray darken-3",
}));
const __VLS_12 = __VLS_11({
    ...{ class: "mx-auto pa-12 pb-8" },
    elevation: "8",
    maxWidth: "448",
    rounded: "lg",
    color: "gray darken-3",
}, ...__VLS_functionalComponentArgsRest(__VLS_11));
const { default: __VLS_14 } = __VLS_13.slots;
__VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
    ...{ class: "text-h5 text-center mb-6 text-yellow-darken-2 font-weight-bold" },
});
const __VLS_15 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_16 = __VLS_asFunctionalComponent(__VLS_15, new __VLS_15({
    modelValue: (__VLS_ctx.name),
    density: "compact",
    label: "Nombre Completo",
    prependInnerIcon: "mdi-account-circle-outline",
    variant: "outlined",
    color: "yellow darken-2",
}));
const __VLS_17 = __VLS_16({
    modelValue: (__VLS_ctx.name),
    density: "compact",
    label: "Nombre Completo",
    prependInnerIcon: "mdi-account-circle-outline",
    variant: "outlined",
    color: "yellow darken-2",
}, ...__VLS_functionalComponentArgsRest(__VLS_16));
// @ts-ignore
[name,];
const __VLS_20 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(__VLS_20, new __VLS_20({
    modelValue: (__VLS_ctx.username),
    density: "compact",
    label: "Nombre de Usuario",
    prependInnerIcon: "mdi-account-outline",
    variant: "outlined",
    color: "yellow darken-2",
}));
const __VLS_22 = __VLS_21({
    modelValue: (__VLS_ctx.username),
    density: "compact",
    label: "Nombre de Usuario",
    prependInnerIcon: "mdi-account-outline",
    variant: "outlined",
    color: "yellow darken-2",
}, ...__VLS_functionalComponentArgsRest(__VLS_21));
// @ts-ignore
[username,];
const __VLS_25 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_26 = __VLS_asFunctionalComponent(__VLS_25, new __VLS_25({
    modelValue: (__VLS_ctx.email),
    density: "compact",
    label: "Correo Electrónico",
    prependInnerIcon: "mdi-email-outline",
    variant: "outlined",
    color: "yellow darken-2",
    type: "email",
}));
const __VLS_27 = __VLS_26({
    modelValue: (__VLS_ctx.email),
    density: "compact",
    label: "Correo Electrónico",
    prependInnerIcon: "mdi-email-outline",
    variant: "outlined",
    color: "yellow darken-2",
    type: "email",
}, ...__VLS_functionalComponentArgsRest(__VLS_26));
// @ts-ignore
[email,];
const __VLS_30 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_31 = __VLS_asFunctionalComponent(__VLS_30, new __VLS_30({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.password),
    appendInnerIcon: (__VLS_ctx.visible ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visible ? 'text' : 'password'),
    density: "compact",
    label: "Contraseña",
    prependInnerIcon: "mdi-lock-outline",
    variant: "outlined",
    color: "yellow darken-2",
}));
const __VLS_32 = __VLS_31({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.password),
    appendInnerIcon: (__VLS_ctx.visible ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visible ? 'text' : 'password'),
    density: "compact",
    label: "Contraseña",
    prependInnerIcon: "mdi-lock-outline",
    variant: "outlined",
    color: "yellow darken-2",
}, ...__VLS_functionalComponentArgsRest(__VLS_31));
let __VLS_34;
let __VLS_35;
const __VLS_36 = ({ 'click:appendInner': {} },
    { 'onClick:appendInner': (...[$event]) => {
            __VLS_ctx.visible = !__VLS_ctx.visible;
            // @ts-ignore
            [password, visible, visible, visible, visible,];
        } });
var __VLS_33;
const __VLS_38 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.confirmPassword),
    appendInnerIcon: (__VLS_ctx.visibleConfirm ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visibleConfirm ? 'text' : 'password'),
    density: "compact",
    label: "Confirmar Contraseña",
    prependInnerIcon: "mdi-lock-check-outline",
    variant: "outlined",
    color: "yellow darken-2",
}));
const __VLS_40 = __VLS_39({
    ...{ 'onClick:appendInner': {} },
    modelValue: (__VLS_ctx.confirmPassword),
    appendInnerIcon: (__VLS_ctx.visibleConfirm ? 'mdi-eye-off' : 'mdi-eye'),
    type: (__VLS_ctx.visibleConfirm ? 'text' : 'password'),
    density: "compact",
    label: "Confirmar Contraseña",
    prependInnerIcon: "mdi-lock-check-outline",
    variant: "outlined",
    color: "yellow darken-2",
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
let __VLS_42;
let __VLS_43;
const __VLS_44 = ({ 'click:appendInner': {} },
    { 'onClick:appendInner': (...[$event]) => {
            __VLS_ctx.visibleConfirm = !__VLS_ctx.visibleConfirm;
            // @ts-ignore
            [confirmPassword, visibleConfirm, visibleConfirm, visibleConfirm, visibleConfirm,];
        } });
var __VLS_41;
const __VLS_46 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_47 = __VLS_asFunctionalComponent(__VLS_46, new __VLS_46({
    ...{ 'onClick': {} },
    ...{ class: "mt-6 mb-4" },
    color: "yellow darken-2",
    size: "large",
    variant: "tonal",
    block: true,
}));
const __VLS_48 = __VLS_47({
    ...{ 'onClick': {} },
    ...{ class: "mt-6 mb-4" },
    color: "yellow darken-2",
    size: "large",
    variant: "tonal",
    block: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_47));
let __VLS_50;
let __VLS_51;
const __VLS_52 = ({ click: {} },
    { onClick: (__VLS_ctx.handleRegister) });
const { default: __VLS_53 } = __VLS_49.slots;
// @ts-ignore
[handleRegister,];
var __VLS_49;
const __VLS_54 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
VCardText;
// @ts-ignore
const __VLS_55 = __VLS_asFunctionalComponent(__VLS_54, new __VLS_54({
    ...{ class: "text-center mt-2" },
}));
const __VLS_56 = __VLS_55({
    ...{ class: "text-center mt-2" },
}, ...__VLS_functionalComponentArgsRest(__VLS_55));
const { default: __VLS_58 } = __VLS_57.slots;
__VLS_asFunctionalElement(__VLS_elements.a, __VLS_elements.a)({
    ...{ onClick: (...[$event]) => {
            __VLS_ctx.$emit('go-login');
            // @ts-ignore
            [$emit,];
        } },
    ...{ class: "text-yellow-darken-2 text-decoration-none" },
    href: "#",
});
const __VLS_59 = {}.VIcon;
/** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
// @ts-ignore
VIcon;
// @ts-ignore
const __VLS_60 = __VLS_asFunctionalComponent(__VLS_59, new __VLS_59({
    icon: "mdi-chevron-right",
}));
const __VLS_61 = __VLS_60({
    icon: "mdi-chevron-right",
}, ...__VLS_functionalComponentArgsRest(__VLS_60));
var __VLS_57;
var __VLS_13;
const __VLS_64 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
VDialog;
// @ts-ignore
const __VLS_65 = __VLS_asFunctionalComponent(__VLS_64, new __VLS_64({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "400",
}));
const __VLS_66 = __VLS_65({
    modelValue: (__VLS_ctx.dialog),
    maxWidth: "400",
}, ...__VLS_functionalComponentArgsRest(__VLS_65));
const { default: __VLS_68 } = __VLS_67.slots;
// @ts-ignore
[dialog,];
const __VLS_69 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_70 = __VLS_asFunctionalComponent(__VLS_69, new __VLS_69({}));
const __VLS_71 = __VLS_70({}, ...__VLS_functionalComponentArgsRest(__VLS_70));
const { default: __VLS_73 } = __VLS_72.slots;
const __VLS_74 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
VCardTitle;
// @ts-ignore
const __VLS_75 = __VLS_asFunctionalComponent(__VLS_74, new __VLS_74({
    ...{ class: "text-h6 font-weight-bold" },
}));
const __VLS_76 = __VLS_75({
    ...{ class: "text-h6 font-weight-bold" },
}, ...__VLS_functionalComponentArgsRest(__VLS_75));
const { default: __VLS_78 } = __VLS_77.slots;
var __VLS_77;
const __VLS_79 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
VCardText;
// @ts-ignore
const __VLS_80 = __VLS_asFunctionalComponent(__VLS_79, new __VLS_79({}));
const __VLS_81 = __VLS_80({}, ...__VLS_functionalComponentArgsRest(__VLS_80));
const { default: __VLS_83 } = __VLS_82.slots;
var __VLS_82;
const __VLS_84 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
VCardActions;
// @ts-ignore
const __VLS_85 = __VLS_asFunctionalComponent(__VLS_84, new __VLS_84({
    ...{ class: "justify-end" },
}));
const __VLS_86 = __VLS_85({
    ...{ class: "justify-end" },
}, ...__VLS_functionalComponentArgsRest(__VLS_85));
const { default: __VLS_88 } = __VLS_87.slots;
const __VLS_89 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_90 = __VLS_asFunctionalComponent(__VLS_89, new __VLS_89({
    ...{ 'onClick': {} },
    color: "yellow darken-2",
    text: true,
}));
const __VLS_91 = __VLS_90({
    ...{ 'onClick': {} },
    color: "yellow darken-2",
    text: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_90));
let __VLS_93;
let __VLS_94;
const __VLS_95 = ({ click: {} },
    { onClick: (__VLS_ctx.closeDialog) });
const { default: __VLS_96 } = __VLS_92.slots;
// @ts-ignore
[closeDialog,];
var __VLS_92;
var __VLS_87;
var __VLS_72;
var __VLS_67;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-center']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mx-auto']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-12']} */ ;
/** @type {__VLS_StyleScopedClasses['pb-8']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h5']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-6']} */ ;
/** @type {__VLS_StyleScopedClasses['text-yellow-darken-2']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-6']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mt-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-yellow-darken-2']} */ ;
/** @type {__VLS_StyleScopedClasses['text-decoration-none']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
