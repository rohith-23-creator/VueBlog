<template>
  <div v-if="error">
    <h2>{{ error }}</h2>
  </div>
  <div v-if="post" class="post">
    <h2>{{ post.title }}</h2>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>
    <Spinner />
  </div>
</template>
<script>
import getPost from "../../composables/getPost";
import Spinner from "../components/Spinner";

export default {
  components: {
    Spinner,
  },
  props: ["id"],
  setup(props) {
    const { post, error, load } = getPost(props.id);
    load();

    return { post, error };
  },
};
</script>
<style></style>
