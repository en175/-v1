import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalStore = defineStore('modal', () => {
    const petitionModalVisible = ref(false)
    const evidenceModalVisible = ref(false)
    const claimModalVisible = ref(false)
    const factModalVisible = ref(false)
    const focusModalVisible = ref(false)
    const doubtModalVisible = ref(false)
    const defenseModalVisible = ref(false)

    const showPetitionModal = () => (petitionModalVisible.value = true)
    const showEvidenceModal = () => (evidenceModalVisible.value = true)
    const showClaimModal = () => (claimModalVisible.value = true)
    const showFactModal = () => (factModalVisible.value = true)
    const showFocusModal = () => (focusModalVisible.value = true)
    const showDoubtModal = () => (doubtModalVisible.value = true)
    const showDefenseModal = () => (defenseModalVisible.value = true)

    return {
        petitionModalVisible,
        evidenceModalVisible,
        claimModalVisible,
        factModalVisible,
        focusModalVisible,
        doubtModalVisible,
        defenseModalVisible,
        showPetitionModal,
        showEvidenceModal,
        showClaimModal,
        showFactModal,
        showFocusModal,
        showDoubtModal,
        showDefenseModal
    }
})
