import { ref, onMounted } from "vue";
import apiClient from "@/config/axios";
import { useRouter } from "vue-router";
import UpdateNotaForm from "../../../components/UpdateNotaForm.vue";
import NewNotaForm from "../../../components/NewNotaForm.vue";
import DeleteNotaButton from "../../../components/DeleteNoteButton.vue";
import LogoutButton from "../../../components/LogoutButton.vue";
const notas = ref([]);
const router = useRouter();
const fetchNotas = async () => {
    try {
        //const token = localStorage.getItem("jwt");
        const response = await apiClient.get(`/notas/user`);
        if (Array.isArray(response.data) && response.data.length > 0) {
            notas.value = response.data;
        }
        else {
            notas.value = [];
        }
    }
    catch (err) {
        console.error("Error al cargar notas:", err);
        alert("Error al cargar notas: " + err);
        notas.value = [];
        localStorage.removeItem("jwt");
        router.push({ name: "Home" });
    }
};
const onNotaActualizada = (notaActualizada) => {
    const idx = notas.value.findIndex((n) => n.codigo_nota === notaActualizada.codigo_nota);
    if (idx !== -1) {
        notas.value.splice(idx, 1, notaActualizada);
    }
    else {
        notas.value.unshift(notaActualizada);
    }
};
const onNotaEliminada = (id) => {
    const idx = notas.value.findIndex((n) => n.codigo_nota === id);
    if (idx !== -1)
        notas.value.splice(idx, 1);
};
const formatDate = (fecha) => {
    return new Date(fecha).toLocaleString();
};
onMounted(fetchNotas);
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
    fluid: true,
}));
const __VLS_2 = __VLS_1({
    fluid: true,
}, ...__VLS_functionalComponentArgsRest(__VLS_1));
var __VLS_4 = {};
const { default: __VLS_5 } = __VLS_3.slots;
const __VLS_6 = {}.VRow;
/** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
// @ts-ignore
VRow;
// @ts-ignore
const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({}));
const __VLS_8 = __VLS_7({}, ...__VLS_functionalComponentArgsRest(__VLS_7));
const { default: __VLS_10 } = __VLS_9.slots;
const __VLS_11 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
VCol;
// @ts-ignore
const __VLS_12 = __VLS_asFunctionalComponent(__VLS_11, new __VLS_11({
    cols: "12",
}));
const __VLS_13 = __VLS_12({
    cols: "12",
}, ...__VLS_functionalComponentArgsRest(__VLS_12));
const { default: __VLS_15 } = __VLS_14.slots;
const __VLS_16 = {}.VCol;
/** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
// @ts-ignore
VCol;
// @ts-ignore
const __VLS_17 = __VLS_asFunctionalComponent(__VLS_16, new __VLS_16({
    cols: "12",
    ...{ class: "d-flex justify-end align-center mb-4" },
}));
const __VLS_18 = __VLS_17({
    cols: "12",
    ...{ class: "d-flex justify-end align-center mb-4" },
}, ...__VLS_functionalComponentArgsRest(__VLS_17));
const { default: __VLS_20 } = __VLS_19.slots;
/** @type {[typeof LogoutButton, ]} */ ;
// @ts-ignore
const __VLS_21 = __VLS_asFunctionalComponent(LogoutButton, new LogoutButton({}));
const __VLS_22 = __VLS_21({}, ...__VLS_functionalComponentArgsRest(__VLS_21));
var __VLS_19;
__VLS_asFunctionalElement(__VLS_elements.h1, __VLS_elements.h1)({
    ...{ class: "text-h4 font-weight-bold mb-4" },
});
/** @type {[typeof NewNotaForm, ]} */ ;
// @ts-ignore
const __VLS_25 = __VLS_asFunctionalComponent(NewNotaForm, new NewNotaForm({
    ...{ 'onNotaCreada': {} },
}));
const __VLS_26 = __VLS_25({
    ...{ 'onNotaCreada': {} },
}, ...__VLS_functionalComponentArgsRest(__VLS_25));
let __VLS_28;
let __VLS_29;
const __VLS_30 = ({ notaCreada: {} },
    { onNotaCreada: (__VLS_ctx.fetchNotas) });
// @ts-ignore
[fetchNotas,];
var __VLS_27;
if (__VLS_ctx.notas.length === 0) {
    // @ts-ignore
    [notas,];
    const __VLS_32 = {}.VCard;
    /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
    // @ts-ignore
    VCard;
    // @ts-ignore
    const __VLS_33 = __VLS_asFunctionalComponent(__VLS_32, new __VLS_32({
        color: "yellow lighten-4",
        ...{ class: "pa-6" },
    }));
    const __VLS_34 = __VLS_33({
        color: "yellow lighten-4",
        ...{ class: "pa-6" },
    }, ...__VLS_functionalComponentArgsRest(__VLS_33));
    const { default: __VLS_36 } = __VLS_35.slots;
    var __VLS_35;
}
else {
    const __VLS_37 = {}.VRow;
    /** @type {[typeof __VLS_components.VRow, typeof __VLS_components.vRow, typeof __VLS_components.VRow, typeof __VLS_components.vRow, ]} */ ;
    // @ts-ignore
    VRow;
    // @ts-ignore
    const __VLS_38 = __VLS_asFunctionalComponent(__VLS_37, new __VLS_37({}));
    const __VLS_39 = __VLS_38({}, ...__VLS_functionalComponentArgsRest(__VLS_38));
    const { default: __VLS_41 } = __VLS_40.slots;
    for (const [nota] of __VLS_getVForSourceType((__VLS_ctx.notas))) {
        // @ts-ignore
        [notas,];
        const __VLS_42 = {}.VCol;
        /** @type {[typeof __VLS_components.VCol, typeof __VLS_components.vCol, typeof __VLS_components.VCol, typeof __VLS_components.vCol, ]} */ ;
        // @ts-ignore
        VCol;
        // @ts-ignore
        const __VLS_43 = __VLS_asFunctionalComponent(__VLS_42, new __VLS_42({
            key: (nota.codigo_nota),
            cols: "12",
            md: "6",
        }));
        const __VLS_44 = __VLS_43({
            key: (nota.codigo_nota),
            cols: "12",
            md: "6",
        }, ...__VLS_functionalComponentArgsRest(__VLS_43));
        const { default: __VLS_46 } = __VLS_45.slots;
        const __VLS_47 = {}.VCard;
        /** @type {[typeof __VLS_components.VCard, typeof __VLS_components.vCard, typeof __VLS_components.VCard, typeof __VLS_components.vCard, ]} */ ;
        // @ts-ignore
        VCard;
        // @ts-ignore
        const __VLS_48 = __VLS_asFunctionalComponent(__VLS_47, new __VLS_47({
            ...{ class: "pa-4 mb-4" },
            ...{ style: {} },
        }));
        const __VLS_49 = __VLS_48({
            ...{ class: "pa-4 mb-4" },
            ...{ style: {} },
        }, ...__VLS_functionalComponentArgsRest(__VLS_48));
        const { default: __VLS_51 } = __VLS_50.slots;
        __VLS_asFunctionalElement(__VLS_elements.div, __VLS_elements.div)({
            ...{ class: "action-buttons" },
        });
        /** @type {[typeof UpdateNotaForm, typeof UpdateNotaForm, ]} */ ;
        // @ts-ignore
        const __VLS_52 = __VLS_asFunctionalComponent(UpdateNotaForm, new UpdateNotaForm({
            ...{ 'onNotaActualizada': {} },
            nota: (nota),
        }));
        const __VLS_53 = __VLS_52({
            ...{ 'onNotaActualizada': {} },
            nota: (nota),
        }, ...__VLS_functionalComponentArgsRest(__VLS_52));
        let __VLS_55;
        let __VLS_56;
        const __VLS_57 = ({ notaActualizada: {} },
            { onNotaActualizada: (__VLS_ctx.onNotaActualizada) });
        const { default: __VLS_58 } = __VLS_54.slots;
        // @ts-ignore
        [onNotaActualizada,];
        {
            const { activator: __VLS_59 } = __VLS_54.slots;
            const [{ props }] = __VLS_getSlotParameters(__VLS_59);
            const __VLS_60 = {}.VBtn;
            /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
            // @ts-ignore
            VBtn;
            // @ts-ignore
            const __VLS_61 = __VLS_asFunctionalComponent(__VLS_60, new __VLS_60({
                ...(props),
                icon: true,
                ...{ class: "action-btn" },
                variant: "tonal",
                color: "yellow darken-2",
                'aria-label': (`Editar nota ${nota.codigo_nota}`),
            }));
            const __VLS_62 = __VLS_61({
                ...(props),
                icon: true,
                ...{ class: "action-btn" },
                variant: "tonal",
                color: "yellow darken-2",
                'aria-label': (`Editar nota ${nota.codigo_nota}`),
            }, ...__VLS_functionalComponentArgsRest(__VLS_61));
            const { default: __VLS_64 } = __VLS_63.slots;
            const __VLS_65 = {}.VIcon;
            /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
            // @ts-ignore
            VIcon;
            // @ts-ignore
            const __VLS_66 = __VLS_asFunctionalComponent(__VLS_65, new __VLS_65({}));
            const __VLS_67 = __VLS_66({}, ...__VLS_functionalComponentArgsRest(__VLS_66));
            const { default: __VLS_69 } = __VLS_68.slots;
            var __VLS_68;
            var __VLS_63;
        }
        var __VLS_54;
        /** @type {[typeof DeleteNotaButton, typeof DeleteNotaButton, ]} */ ;
        // @ts-ignore
        const __VLS_70 = __VLS_asFunctionalComponent(DeleteNotaButton, new DeleteNotaButton({
            ...{ 'onNotaEliminada': {} },
            notaId: (nota.codigo_nota),
            notaTitle: (nota.titulo),
        }));
        const __VLS_71 = __VLS_70({
            ...{ 'onNotaEliminada': {} },
            notaId: (nota.codigo_nota),
            notaTitle: (nota.titulo),
        }, ...__VLS_functionalComponentArgsRest(__VLS_70));
        let __VLS_73;
        let __VLS_74;
        const __VLS_75 = ({ notaEliminada: {} },
            { onNotaEliminada: (__VLS_ctx.onNotaEliminada) });
        const { default: __VLS_76 } = __VLS_72.slots;
        // @ts-ignore
        [onNotaEliminada,];
        {
            const { activator: __VLS_77 } = __VLS_72.slots;
            const [{ props }] = __VLS_getSlotParameters(__VLS_77);
            const __VLS_78 = {}.VBtn;
            /** @type {[typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, typeof __VLS_components.VBtn, typeof __VLS_components.vBtn, ]} */ ;
            // @ts-ignore
            VBtn;
            // @ts-ignore
            const __VLS_79 = __VLS_asFunctionalComponent(__VLS_78, new __VLS_78({
                ...(props),
                icon: true,
                ...{ class: "action-btn" },
                variant: "tonal",
                color: "red lighten-2",
                'aria-label': (`Eliminar nota ${nota.codigo_nota}`),
            }));
            const __VLS_80 = __VLS_79({
                ...(props),
                icon: true,
                ...{ class: "action-btn" },
                variant: "tonal",
                color: "red lighten-2",
                'aria-label': (`Eliminar nota ${nota.codigo_nota}`),
            }, ...__VLS_functionalComponentArgsRest(__VLS_79));
            const { default: __VLS_82 } = __VLS_81.slots;
            const __VLS_83 = {}.VIcon;
            /** @type {[typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, typeof __VLS_components.VIcon, typeof __VLS_components.vIcon, ]} */ ;
            // @ts-ignore
            VIcon;
            // @ts-ignore
            const __VLS_84 = __VLS_asFunctionalComponent(__VLS_83, new __VLS_83({}));
            const __VLS_85 = __VLS_84({}, ...__VLS_functionalComponentArgsRest(__VLS_84));
            const { default: __VLS_87 } = __VLS_86.slots;
            var __VLS_86;
            var __VLS_81;
        }
        var __VLS_72;
        __VLS_asFunctionalElement(__VLS_elements.h2, __VLS_elements.h2)({
            ...{ class: "text-h6" },
        });
        (nota.titulo);
        __VLS_asFunctionalElement(__VLS_elements.br)({});
        __VLS_asFunctionalElement(__VLS_elements.p, __VLS_elements.p)({
            ...{ style: {} },
        });
        (nota.descripcion);
        __VLS_asFunctionalElement(__VLS_elements.br)({});
        __VLS_asFunctionalElement(__VLS_elements.small, __VLS_elements.small)({});
        (__VLS_ctx.formatDate(nota.fecha_creacion));
        // @ts-ignore
        [formatDate,];
        var __VLS_50;
        var __VLS_45;
    }
    var __VLS_40;
}
var __VLS_14;
var __VLS_9;
var __VLS_3;
/** @type {__VLS_StyleScopedClasses['d-flex']} */ ;
/** @type {__VLS_StyleScopedClasses['justify-end']} */ ;
/** @type {__VLS_StyleScopedClasses['align-center']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h4']} */ ;
/** @type {__VLS_StyleScopedClasses['font-weight-bold']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-6']} */ ;
/** @type {__VLS_StyleScopedClasses['pa-4']} */ ;
/** @type {__VLS_StyleScopedClasses['mb-4']} */ ;
/** @type {__VLS_StyleScopedClasses['action-buttons']} */ ;
/** @type {__VLS_StyleScopedClasses['action-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['action-btn']} */ ;
/** @type {__VLS_StyleScopedClasses['text-h6']} */ ;
const __VLS_export = (await import('vue')).defineComponent({});
export default {};
