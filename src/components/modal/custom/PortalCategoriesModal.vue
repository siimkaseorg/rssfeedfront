<template>
  <Modal :modal-is-open="portalCategoriesModalIsOpen" @event-close-modal="$emit('event-close-modal')">

    <template #title>
      Vali {{portalOption.portalName}} teemad
    </template>


    <template #body>

      <div v-for="categoryOption in portalOption.categoryOptions" :key="categoryOption.categoryId" class="form-check text-start">
        <input @change="executePortalCategoryCheckboxChange(categoryOption.categoryId, $event.target.checked)" class="form-check-input" type="checkbox" value="" id="checkDefault">
        <label class="form-check-label" for="checkDefault">
          {{ categoryOption.categoryName }}
        </label>
      </div>

    </template>


    <template #buttons>
      <button @click="$emit('event-cancelled-categories-selection')" type="submit" class="btn btn-outline-primary me-3">Tühista</button>
      <button @click="$emit('event-close-modal')" type="submit" class="btn btn-outline-success">Salvesta klategooria valikud</button>
    </template>

  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: 'PortalCategoriesModal',
  components: {Modal},
  props: {
    portalCategoriesModalIsOpen: Boolean,
    portalOption: Object
  },
   methods: {

     executePortalCategoryCheckboxChange(categoryId, isChecked) {

       let updatedPortalCategorySelection = {
         portalId: this.portalOption.portalId,
         categoryId: categoryId,
         isChecked: isChecked
       }

       this.$emit('event-portal-category-updated', updatedPortalCategorySelection)

     },

   }
}
</script>