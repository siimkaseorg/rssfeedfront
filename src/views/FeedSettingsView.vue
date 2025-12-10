<template>
  <div class="container text-center">
    <div class="row justify-content-center">
      <PortalCategoriesModal :portal-categories-modal-is-open="portalCategoriesModalIsOpen"
                             :portal-option="portalOption"
                             @event-close-modal="closePortalCategoriesModal"
                             @event-portal-category-updated="updatePortalCategorySelection"
                             @event-cancelled-categories-selection="restorePortalOptionsFromSessionStorage"
      />
      <div class="col">
        <h1>Vali uudiseid portaalist:</h1>
        <hr>
      </div>
    </div>
    <div class="row justify-content-center text-start">
      <div class="col col-3">

        <div v-for="portalOption in portalOptions" :key="portalOption.portalId + portalOption.portalIsChosen" class="form-check mb-1">
          <input @change="executePortalCheckboxChange(portalOption, $event.target.checked)" class="form-check-input" type="checkbox" >
          <label class="form-check-label">
            {{ portalOption.portalName }}
          </label>
        </div>

        <div class="form-check mb-1">
          <button type="submit" class="btn btn-outline-success mt-3">Salvesta</button>
        </div>

      </div>
    </div>
  </div>
</template>

<script>
import PortalOptionsService from "@/services/PortalOptionsService";
import PortalCategoriesModal from "@/components/modal/custom/PortalCategoriesModal.vue";
import Modal from "@/components/modal/Modal.vue";

export default {
  name: 'FeedSettingsView',
  components: {Modal, PortalCategoriesModal},
  data() {
    return {
      portalCategoriesModalIsOpen: false,

      portalOption: {
        portalId: 0,
        portalName: '',
        portalIsChosen: false,
        categoryOptions: [
          {
            categoryId: 0,
            categoryName: '',
            categoryIsChosen: false
          }
        ]
      },

      portalOptions: [
        {
          portalId: 0,
          portalName: '',
          portalIsChosen: false,
          categoryOptions: [
            {
              categoryId: 0,
              categoryName: '',
              categoryIsChosen: false
            }
          ]
        }
      ]


    }
  },
  methods: {
    executePortalCheckboxChange(portalOption, isChecked) {
      if (isChecked) {
        sessionStorage.setItem('portalOptions', JSON.stringify(this.portalOptions))
        this.portalOption = portalOption
        this.portalOption.portalIsChosen = true
        this.portalCategoriesModalIsOpen = true

      } else {
        this.portalOption.portalIsChosen = isChecked;
      }


    },

    updatePortalCategorySelection(updatedPortalCategorySelection) {
      const  portalId = updatedPortalCategorySelection.portalId
      const  categoryId = updatedPortalCategorySelection.categoryId
      const  isChecked = updatedPortalCategorySelection.isChecked

      // loop through portalOptions to find the correct portal
      for (const portal of this.portalOptions) {
        if (portal.portalId === portalId) {

          // loop through categoryOptions to find the correct category
          for (const category of portal.categoryOptions) {
            if (category.categoryId === categoryId) {
              category.categoryIsChosen = isChecked
              return // we're done, exit the method
            }
          }

          // no need to keep looping portals once matched
          return
        }
      }
    },

    restorePortalOptionsFromSessionStorage() {
      this.portalOptions = JSON.parse(sessionStorage.getItem('portalOptions'))
      this.closePortalCategoriesModal()
    },


    getPortalOptions() {
      PortalOptionsService.sendPortalOptionsRequest()
          .then(response => this.portalOptions = response.data)
    },

    closePortalCategoriesModal() {
      this.portalCategoriesModalIsOpen = false
    },

  },
  beforeMount() {
    this.getPortalOptions()
  }
}
</script>