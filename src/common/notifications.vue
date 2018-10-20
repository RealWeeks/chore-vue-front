<script>
import VueNotifications from 'vue-notifications'
export default {
  name: 'notifications-mixin',
  data () {
    return {}
  },
  notifications: {
    showSuccessMsg: {
      type: VueNotifications.types.success,
      title: 'Success',
      message: 'That\'s the success!'
    },
    showInfoMsg: {
      type: VueNotifications.types.info,
      title: 'Info',
      message: 'Here is some info for you'
    },
    showWarnMsg: {
      type: VueNotifications.types.warn,
      title: 'Warning',
      message: 'That\'s the kind of warning'
    },
    showErrorMsg: {
      type: VueNotifications.types.error,
      title: 'Error',
      message: 'That\'s the error'
    }
  }
}
</script>
