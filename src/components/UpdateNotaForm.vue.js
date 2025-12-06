import { ref, watch } from "vue";
import apiClient from "@/config/axios";
const props = defineProps();
const emit = defineEmits(["nota-actualizada"]);
const open = ref(false);
const titulo = ref(props.nota?.titulo ?? "");
const descripcion = ref(props.nota?.descripcion ?? "");
const valid = ref(false);
const form = ref(null);
watch(() => props.nota, (newVal) => {
    if (newVal) {
        titulo.value = newVal.titulo ?? "";
        descripcion.value = newVal.descripcion ?? "";
    }
}, { immediate: true });
watch(open, (val) => {
    if (val === true) {
        titulo.value = props.nota?.titulo ?? "";
        descripcion.value = props.nota?.descripcion ?? "";
        valid.value = false;
    }
});
const onCancel = () => {
    open.value = false;
    titulo.value = props.nota?.titulo ?? "";
    descripcion.value = props.nota?.descripcion ?? "";
    valid.value = false;
};
const onSubmit = async () => {
    if (!form.value?.validate?.())
        return;
    try {
        //const token = localStorage.getItem("jwt");
        const id = props.nota.codigo_nota;
        const payload = { titulo: titulo.value, descripcion: descripcion.value };
        const response = await apiClient.patch(`/notas/${id}`, payload);
        const notaActualizada = response?.data ?? { ...props.nota, ...payload };
        emit("nota-actualizada", notaActualizada);
        open.value = false;
    }
    catch (err) {
        console.error("Error al actualizar nota:", err);
        alert("Error al actualizar nota: " + err);
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
    maxWidth: "600px",
}));
const __VLS_2 = __VLS_1({
    modelValue: (__VLS_ctx.open),
    maxWidth: "600px",
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
        color: "secondary",
        small: true,
    }));
    const __VLS_10 = __VLS_9({
        ...(props),
        color: "secondary",
        small: true,
    }, ...__VLS_functionalComponentArgsRest(__VLS_9));
    const { default: __VLS_12 } = __VLS_11.slots;
    var __VLS_11;
}
const __VLS_13 = {}.VCard;
/** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
// @ts-ignore
VCard;
// @ts-ignore
const __VLS_14 = __VLS_asFunctionalComponent(__VLS_13, new __VLS_13({}));
const __VLS_15 = __VLS_14({}, ...__VLS_functionalComponentArgsRest(__VLS_14));
const { default: __VLS_17 } = __VLS_16.slots;
const __VLS_18 = {}.VCardTitle;
/** @type {[typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, typeof __VLS_components.VCardTitle, typeof __VLS_components.vCardTitle, ]} */ ;
// @ts-ignore
VCardTitle;
// @ts-ignore
const __VLS_19 = __VLS_asFunctionalComponent(__VLS_18, new __VLS_18({}));
const __VLS_20 = __VLS_19({}, ...__VLS_functionalComponentArgsRest(__VLS_19));
const { default: __VLS_22 } = __VLS_21.slots;
__VLS_asFunctionalElement(__VLS_elements.span, __VLS_elements.span)({
    ...{ class: "text-h6" },
});
var __VLS_21;
const __VLS_23 = {}.VCardText;
/** @type {[typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, typeof __VLS_components.VCardText, typeof __VLS_components.vCardText, ]} */ ;
// @ts-ignore
VCardText;
// @ts-ignore
const __VLS_24 = __VLS_asFunctionalComponent(__VLS_23, new __VLS_23({}));
const __VLS_25 = __VLS_24({}, ...__VLS_functionalComponentArgsRest(__VLS_24));
const { default: __VLS_27 } = __VLS_26.slots;
const __VLS_28 = {}.VForm;
/** @type {[typeof __VLS_components.VForm, typeof __VLS_components.vForm, typeof __VLS_components.VForm, typeof __VLS_components.vForm, ]} */ ;
// @ts-ignore
VForm;
// @ts-ignore
const __VLS_29 = __VLS_asFunctionalComponent(__VLS_28, new __VLS_28({
    ref: "form",
    modelValue: (__VLS_ctx.valid),
}));
const __VLS_30 = __VLS_29({
    ref: "form",
    modelValue: (__VLS_ctx.valid),
}, ...__VLS_functionalComponentArgsRest(__VLS_29));
/** @type {typeof __VLS_ctx.form} */ ;
var __VLS_32 = {};
const { default: __VLS_34 } = __VLS_31.slots;
// @ts-ignore
[valid, form,];
const __VLS_35 = {}.VTextField;
/** @type {[typeof __VLS_components.VTextField, typeof __VLS_components.vTextField, ]} */ ;
// @ts-ignore
VTextField;
// @ts-ignore
const __VLS_36 = __VLS_asFunctionalComponent(__VLS_35, new __VLS_35({
    modelValue: (__VLS_ctx.titulo),
    label: "Título",
    rules: ([(v) => !!v || 'El título es obligatorio']),
    required: true,
}));
const __VLS_37 = __VLS_36({
    modelValue: (__VLS_ctx.titulo),
    label: "Título",
    rules: ([(v) => !!v || 'El título es obligatorio']),
    required: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_36));
// @ts-ignore
[titulo,];
const __VLS_40 = {}.VTextarea;
/** @type {[typeof __VLS_components.VTextarea, typeof __VLS_components.vTextarea, ]} */ ;
// @ts-ignore
VTextarea;
// @ts-ignore
const __VLS_41 = __VLS_asFunctionalComponent(__VLS_40, new __VLS_40({
    modelValue: (__VLS_ctx.descripcion),
    label: "Descripción",
    rules: ([(v) => !!v || 'La descripción es obligatoria']),
    required: true,
}));
const __VLS_42 = __VLS_41({
    modelValue: (__VLS_ctx.descripcion),
    label: "Descripción",
    rules: ([(v) => !!v || 'La descripción es obligatoria']),
    required: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_41));
// @ts-ignore
[descripcion,];
var __VLS_31;
var __VLS_26;
const __VLS_45 = {}.VCardActions;
/** @type {[typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, typeof __VLS_components.VCardActions, typeof __VLS_components.vCardActions, ]} */ ;
// @ts-ignore
VCardActions;
// @ts-ignore
const __VLS_46 = __VLS_asFunctionalComponent(__VLS_45, new __VLS_45({}));
const __VLS_47 = __VLS_46({}, ...__VLS_functionalComponentArgsRest(__VLS_46));
const { default: __VLS_49 } = __VLS_48.slots;
const __VLS_50 = {}.VSpacer;
/** @type {[typeof __VLS_components.VSpacer, typeof __VLS_components.vSpacer, ]} */ ;
// @ts-ignore
VSpacer;
// @ts-ignore
const __VLS_51 = __VLS_asFunctionalComponent(__VLS_50, new __VLS_50({}));
const __VLS_52 = __VLS_51({}, ...__VLS_functionalComponentArgsRest(__VLS_51));
const __VLS_55 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_56 = __VLS_asFunctionalComponent(__VLS_55, new __VLS_55({
    ...{ 'onClick': {} },
    text: true,
}));
const __VLS_57 = __VLS_56({
    ...{ 'onClick': {} },
    text: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_56));
let __VLS_59;
let __VLS_60;
const __VLS_61 = ({ click: {} },
    { onClick: (__VLS_ctx.onCancel) });
const { default: __VLS_62 } = __VLS_58.slots;
// @ts-ignore
[onCancel,];
var __VLS_58;
const __VLS_63 = {}.VBtn;
/** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
// @ts-ignore
VBtn;
// @ts-ignore
const __VLS_64 = __VLS_asFunctionalComponent(__VLS_63, new __VLS_63({
    ...{ 'onClick': {} },
    color: "yellow darken-2",
    disabled: (!__VLS_ctx.valid),
}));
const __VLS_65 = __VLS_64({
    ...{ 'onClick': {} },
    color: "yellow darken-2",
    disabled: (!__VLS_ctx.valid),
}, ...__VLS_functionalComponentArgsRest(__VLS_64));
let __VLS_67;
let __VLS_68;
const __VLS_69 = ({ click: {} },
    { onClick: (__VLS_ctx.onSubmit) });
const { default: __VLS_70 } = __VLS_66.slots;
// @ts-ignore
[valid, onSubmit,];
var __VLS_66;
var __VLS_48;
var __VLS_16;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
// @ts-ignore
var __VLS_7 = __VLS_6, __VLS_33 = __VLS_32;
const __VLS_base = (await import('vue')).defineComponent({
    emits: {},
    __typeProps: {},
});
const __VLS_export = {};
export default {};
