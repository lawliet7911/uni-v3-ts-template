<script setup lang="ts">
import { onLaunch, onShow, onHide } from "@dcloudio/uni-app";
import { useUserStore } from "./stores/user";
const user = useUserStore()
onLaunch(() => {
  user.SET_USER({
    user: 'lawliet',
    age: 18
  })
  console.log("App Launch");
  console.log(user.userInfo);
});
onShow(() => {
  console.log("App Show");
});
onHide(() => {
  console.log("App Hide");
});
</script>
<style></style>
