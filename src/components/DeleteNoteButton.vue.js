import { ref } from "vue";
import apiClient from "@/config/axios";
const props = defineProps();
const emit = defineEmits(["nota-eliminada", "error"]);
const open = ref(false);
const loading = ref(false);
const cancel = () => {
    open.value = false;
};
const confirm = async () => {
    if (loading.value)
        return;
    loading.value = true;
    try {
        await apiClient.delete(`/notas/${props.notaId}`);
        emit("nota-eliminada", props.notaId);
        open.value = false;
    }
    catch (err) {
        alert("Error al eliminar nota " + err);
        console.error("Error al eliminar nota:", err);
        emit("error", err);
    }
    finally {
        loading.value = false;
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
const __VLS_0 = {}.VDialog;
/** @type {[typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, typeof __VLS_components.VDialog, typeof __VLS_components.vDialog, ]} */ ;
// @ts-ignore
VDialog;
// @ts-ignore
const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({
    modelValue: (__VLS_ctx.open),
    maxWidth: "420px",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.open),
    maxWidth: "420px",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
// @ts-ignore
[open,];
{
    const { activator: __VLS_5 } = __VLS_3.slots;
    const [{ props }] = __VLS_getSlotParameters(__VLS_5);
    var __VLS_6 = {
        props: (props),
    };
    const __VLS_8 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    VBtn;
    // @ts-ignore
    const __VLS_9 = __VLS_asFunctionalComponent(__VLS_8, new __VLS_8({
        ...(props),
        icon: true,
        ...{ class: "ma-0 pa-0" },
        'aria-label': (`Eliminar nota ${__VLS_ctx.notaId}`),
    }));
    const __VLS_10 = __VLS_9({
        ...(props),
        icon: true,
        ...{ class: "ma-0 pa-0" },
        'aria-label': (`Eliminar nota ${__VLS_ctx.notaId}`),
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_12 } = __VLS_11.slots;
    // @ts-ignore
    [notaId,];
    const __VLS_13 = {}.VIcon;
    /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
    // @ts-ignore
    VIcon;
    // @ts-ignore
    const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
    const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
    const { default: __VLS_17 } = __VLS_16.slots;
    var __VLS_16;
    var __VLS_11;
}
const __VLS_18 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_22 } = __VLS_21.slots;
const __VLS_23 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
VCardTitle;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({
    ...{ class: "text-h6" },
}));
const __VLS_25 = __VLS_24({
    ...{ class: "text-h6" },
}, ...__VLS_functionalComponentArgsRest(__VLS_24));
const { default: __VLS_27 } = __VLS_26.slots;
var __VLS_26;
const __VLS_28 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
VCardText;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({}));
const __VLS_30 = __VLS_29({}, ...__VLS_functionalComponentArgsRest(__VLS_29));
const { default: __VLS_32 } = __VLS_31.slots;
if (__VLS_ctx.notaTitle) {
    // @ts-ignore
    [notaTitle,];
    __VLS_asFunctionalElement(__VLS_elements.strong, __VLS_elements.strong)({});
    (__VLS_ctx.notaTitle);
    // @ts-ignore
    [notaTitle,];
}
else {
    __VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({});
    (__VLS_ctx.notaId);
    // @ts-ignore
    [notaId,];
}
var __VLS_31;
const __VLS_33 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
VCardActions;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({}));
const __VLS_35 = __VLS_34({}, ...__VLS_functionalComponentArgsRest(__VLS_34));
const { default: __VLS_37 } = __VLS_36.slots;
const __VLS_38 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
VSpacer;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({}));
const __VLS_40 = __VLS_39({}, ...__VLS_functionalComponentArgsRest(__VLS_39));
const __VLS_43 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({
    ...{ 'onClick': {} },
    text: true,
    disabled: (__VLS_ctx.loading),
}));
const __VLS_45 = __VLS_44({
    ...{ 'onClick': {} },
    text: true,
    disabled: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_44));
let __VLS_47;
let __VLS_48;
const __VLS_49 = ({ click: {} },
    { onClick: (__VLS_ctx.cancel) });
const { default: __VLS_50 } = __VLS_46.slots;
// @ts-ignore
[loading, cancel,];
var __VLS_46;
const __VLS_51 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_52 = __VLS_asFunctionalComponent(__VLS_51, new __VLS_51({
    ...{ 'onClick': {} },
    color: "red darken-1",
    loading: (__VLS_ctx.loading),
    disabled: (__VLS_ctx.loading),
}));
const __VLS_53 = __VLS_52({
    ...{ 'onClick': {} },
    color: "red darken-1",
    loading: (__VLS_ctx.loading),
    disabled: (__VLS_ctx.loading),
}, ...__VLS_functionalComponentArgsRest(__VLS_52));
let __VLS_55;
let __VLS_56;
const __VLS_57 = ({ click: {} },
    { onClick: (__VLS_ctx.confirm) });
const { default: __VLS_58 } = __VLS_54.slots;
// @ts-ignore
[loading, loading, confirm,];
var __VLS_54;
var __VLS_36;
var __VLS_21;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['ma-0']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-0']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
// @ts-ignore
var __VLS_7 = __VLS_6;
const __VLS_base = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
const __VLS_export = {};
export default {};
