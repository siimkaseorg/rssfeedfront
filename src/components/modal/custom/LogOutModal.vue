<template>
  <Modal :modal-is-open="logOutModalIsOpen"
         @event-close-modal="$emit('event-close-modal')"
  >
    <template #title>
      Logi välja?
    </template>

    <template #body>
      <img src="https://media.tenor.com/e0F7DX7CmOgAAAAM/forrest-gump-running.gif" class="img-thumbnail">
    </template>

    <template #buttons>
      <button @click="$emit('event-close-modal')" type="submit" class="btn btn-outline-secondary me-3">Sulge</button>
      <button @click="$emit('event-log-out-executed')" type="submit" class="btn btn-outline-success">Jah</button>
    </template>

  </Modal>
</template>

<script>
import Modal from "@/components/modal/Modal.vue";

export default {
  name: 'LogOutModal',
  components: {Modal},
  props: {
    logOutModalIsOpen: Boolean
  }
}
</script>