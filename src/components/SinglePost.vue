<template>
  <div class="post">
    <router-link :to="{ name: 'Details', params: { id: post.id } }">
      <h3>
        {{ post.title }}
      </h3>
    </router-link>

    <p>{{ preview }}</p>
    <span v-for="tag in post.tags" :key="tag"> #{{ tag }} </span>
  </div>
</template>
<script>
import { computed } from "vue";
export default {
  props: ["post"],

  setup(props) {
    const preview = computed(() => {
      return props.post.body.substring(0, 100) + " ...";
    });
    return { preview };
  },
};
</script>

<style>
.post {
  margin: 0 40px 30px;
  padding-bottom: 30px;
  border-bottom: 1px dashed #e7e7e7;
}

.post h3 {
  display: inline-block;
  position: relative;
  font-size: 26px;
  color: #64ffda;
  margin-top: 30px;
  margin-bottom: 10px;
  max-width: 400px;
}

.post h3::before {
  content: "";
  display: block;
  position: absolute;
  width: 100%;
  height: 100%;
  background: #0a192f;
  z-index: -1;
  left: -30px;
  padding-right: 40px;
  transform: rotateZ(-1deg);
}

.post p {
  font-weight: 500;
  padding: 1rem 0;
  color: #0a192f;
}

span {
  display: inline-block;
  margin: 10px 10px 0 0;
  background: #64ffda;
  color: #0a192f;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}
</style>
