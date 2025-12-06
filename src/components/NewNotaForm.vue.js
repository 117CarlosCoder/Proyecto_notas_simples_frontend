import { ref } from "vue";
import apiClient from "@/config/axios";
const emit = defineEmits(["nota-creada"]);
const open = ref(false);
const titulo = ref("");
const descripcion = ref("");
const valid = ref(false);
const form = ref(null);
const close = () => {
    open.value = false;
    titulo.value = "";
    descripcion.value = "";
    valid.value = false;
};
const submit = async () => {
    if (!form.value?.validate?.())
        return;
    try {
        //const token = localStorage.getItem("jwt");
        const { data } = await apiClient.post('/notas', {
            titulo: titulo.value,
            descripcion: descripcion.value,
        });
        close();
        emit("nota-creada");
    }
    catch (err) {
        console.error("Error al crear nota:", err);
        alert("Error al crear nota: " + err);
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
    maxWidth: "500px",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.open),
    maxWidth: "500px",
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
const { default: __VLS_4 } = __VLS_3.slots;
// @ts-ignore
[open,];
{
    const { activator: __VLS_5 } = __VLS_3.slots;
    const [{ props }] = __VLS_getSlotParameters(__VLS_5);
    const __VLS_6 = {}.VBtn;
    /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
    // @ts-ignore
    VBtn;
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({
        ...(props),
        color: "yellow darken-2",
        variant: "tonal",
        ...{ class: "mb-4" },
    }));
    const __VLS_8 = __VLS_7({
        ...(props),
        color: "yellow darken-2",
        variant: "tonal",
        ...{ class: "mb-4" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    const { default: __VLS_10 } = __VLS_9.slots;
    var __VLS_9;
}
const __VLS_11 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({}));
const __VLS_13 = __VLS_12({}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_15 } = __VLS_14.slots;
const __VLS_16 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
VCardTitle;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({}));
const __VLS_18 = __VLS_17({}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_20 } = __VLS_19.slots;
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "text-h6" },
});
var __VLS_19;
const __VLS_21 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
VCardText;
// @ts-ignore
const __VLS_22 = __VLS_asFunctionalComponent(__VLS_21, new __VLS_21({}));
const __VLS_23 = __VLS_22({}, ...__VLS_functionalComponentArgsRest(__VLS_22));
const { default: __VLS_25 } = __VLS_24.slots;
const __VLS_26 = {}.VForm;
/** @type {[typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ]} */ ;
// @ts-ignore
VForm;
// @ts-ignore
const __VLS_27 = __VLS_asFunctionalComponent(__VLS_26, new __VLS_26({
    ref: "form",
    modelValue: (__VLS_ctx.valid),
}));
const __VLS_28 = __VLS_27({
    ref: "form",
    modelValue: (__VLS_ctx.valid),
}, ...__VLS_functionalComponentArgsRest(__VLS_27));
/** @type {typeof __VLS_ctx.form} */ ;
var __VLS_30 = {};
const { default: __VLS_32 } = __VLS_29.slots;
// @ts-ignore
[valid, form,];
const __VLS_33 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_34 = __VLS_asFunctionalComponent(__VLS_33, new __VLS_33({
    modelValue: (__VLS_ctx.titulo),
    label: "Título",
    rules: ([(v) => !!v || 'El título es obligatorio']),
    required: true,
}));
const __VLS_35 = __VLS_34({
    modelValue: (__VLS_ctx.titulo),
    label: "Título",
    rules: ([(v) => !!v || 'El título es obligatorio']),
    required: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_34));
// @ts-ignore
[titulo,];
const __VLS_38 = {}.VTextarea;
/** @type {[typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ]} */ ;
// @ts-ignore
VTextarea;
// @ts-ignore
const __VLS_39 = __VLS_asFunctionalComponent(__VLS_38, new __VLS_38({
    modelValue: (__VLS_ctx.descripcion),
    label: "Descripción",
    rules: ([(v) => !!v || 'La descripción es obligatoria']),
    required: true,
}));
const __VLS_40 = __VLS_39({
    modelValue: (__VLS_ctx.descripcion),
    label: "Descripción",
    rules: ([(v) => !!v || 'La descripción es obligatoria']),
    required: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_39));
// @ts-ignore
[descripcion,];
var __VLS_29;
var __VLS_24;
const __VLS_43 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
VCardActions;
// @ts-ignore
const __VLS_44 = __VLS_asFunctionalComponent(__VLS_43, new __VLS_43({}));
const __VLS_45 = __VLS_44({}, ...__VLS_functionalComponentArgsRest(__VLS_44));
const { default: __VLS_47 } = __VLS_46.slots;
const __VLS_48 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
VSpacer;
// @ts-ignore
const __VLS_49 = __VLS_asFunctionalComponent(__VLS_48, new __VLS_48({}));
const __VLS_50 = __VLS_49({}, ...__VLS_functionalComponentArgsRest(__VLS_49));
const __VLS_53 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_54 = __VLS_asFunctionalComponent(__VLS_53, new __VLS_53({
    ...{ 'onClick': {} },
    text: true,
}));
const __VLS_55 = __VLS_54({
    ...{ 'onClick': {} },
    text: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_54));
let __VLS_57;
let __VLS_58;
const __VLS_59 = ({ click: {} },
    { onClick: (__VLS_ctx.close) });
const { default: __VLS_60 } = __VLS_56.slots;
// @ts-ignore
[close,];
var __VLS_56;
const __VLS_61 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_62 = __VLS_asFunctionalComponent(__VLS_61, new __VLS_61({
    ...{ 'onClick': {} },
    color: "yellow darken-2",
    disabled: (!__VLS_ctx.valid),
}));
const __VLS_63 = __VLS_62({
    ...{ 'onClick': {} },
    color: "yellow darken-2",
    disabled: (!__VLS_ctx.valid),
}, ...__VLS_functionalComponentArgsRest(__VLS_62));
let __VLS_65;
let __VLS_66;
const __VLS_67 = ({ click: {} },
    { onClick: (__VLS_ctx.submit) });
const { default: __VLS_68 } = __VLS_64.slots;
// @ts-ignore
[valid, submit,];
var __VLS_64;
var __VLS_46;
var __VLS_14;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
// @ts-ignore
var __VLS_31 = __VLS_30;
const __VLS_export = (await import('vue')).defineComponent({
    emits: {},
});
export default {};
