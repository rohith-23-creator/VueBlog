<template>
  <div class="posts-list">
    <div v-for="post in posts" class="singlePost" :key="post.id">
      <SinglePost :post="post" />
    </div>
  </div>
</template>
<script>
import SinglePost from "./SinglePost";
export default {
  components: {
    SinglePost,
  },
  props: ["posts"],
};
</script>
