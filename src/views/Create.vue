<template lang="">
  <div class="create">
    <form @submit.prevent="formHandler">
      <label>Title : </label>
      <input v-model="title" type="text" required />
      <label>Content</label>
      <textarea v-model="body" required></textarea>
      <label>Tags (hit enter to add a tag)</label>
      <input v-model="tag" type="text" @keydown.enter.prevent="handleKeyDown" />
      <div class="pill" v-for="tag in tags" :key="tag">#{{ tag }}</div>

      <button>Add Post</button>
    </form>
  </div>
</template>
<script>
import { ref } from "vue";
import { useRouter } from "vue-router";

export default {
  setup() {
    const title = ref("");
    const body = ref("");
    const tag = ref("");
    const tags = ref([]);
    const router = useRouter();

    const handleKeyDown = () => {
      if (!tags.value.includes(tag.value)) {
        tag.value = tag.value.trim();
        tags.value.push(tag.value);
      }
      tag.value = "";
    };

    const formHandler = async () => {
      const post = {
        title: title.value,
        body: body.value,
        tags: tags.value,
      };

      await fetch("http://localhost:3000/posts", {
        method: "POST",
        headers: { "Content-type": "application/json" },
        body: JSON.stringify(post),
      });
      router.push({
        name: "Home",
      });
    };

    return { title, tag, body, tags, handleKeyDown, formHandler };
  },
};
</script>
<style>
form {
  max-width: 480px;
  margin: 0 auto;
  text-align: left;
  font: inherit;
}
input,
textarea {
  display: block;
  margin: 10px 0;
  width: 100%;
  box-sizing: border-box;
  padding: 10px;
  border: 1px solid #eee;
  font: inherit;
  font-weight: 400;
  line-height: 24px;
  color: #1e2129;
}
textarea {
  height: 160px;
  resize: none;
}
label {
  display: inline-block;
  margin-top: 30px;
  position: relative;
  font-size: 20px;
  color: #1e2139;
  margin-bottom: 10px;
}

button {
  display: block;
  margin-top: 30px;
  background: #0a192f;
  color: white;
  border: 1px solid #0a192f;
  padding: 8px 16px;
  font-size: 18px;
  cursor: pointer;
}

input:focus,
textarea:focus {
  border: 1px solid #0a192f;
  outline: 1px solid #0a192f;
}

button:hover {
  opacity: 0.8;
}

.pill {
  display: inline-block;
  margin: 10px 10px 0 0;
  color: #444;
  background: #ddd;
  padding: 8px;
  border-radius: 20px;
  font-size: 14px;
}

@media (max-width: 500px) {
  form {
    width: 330px;
  }
}

@media (max-width: 330px) {
  form {
    width: 250px;
    font-size: 14px;
  }

  label,
  button {
    font-size: 16px;
  }
}
</style>
