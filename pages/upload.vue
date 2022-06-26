<template>
  <div>
    <form class="form-style-7">
      <ul>
        <li>
          <label for="title">Title</label>
          <input
            type="text"
            name="title"
            maxlength="100"
            v-model="form.title"
          />
          <span>Enter title here</span>
        </li>
        <li>
          <label for="price">Price</label>
          <input
            type="number"
            name="price"
            maxlength="100"
            v-model="form.price"
          />
          <span>Enter price here</span>
        </li>
        <li>
          <label for="category">Category</label>
          <input
            type="text"
            name="category"
            maxlength="100"
            v-model="form.category"
          />
          <span>Enter price here</span>
        </li>
        <li>
          <label for="description">Description</label>
          <textarea name="description" v-model="form.description"></textarea>
          <span>Enter Description here</span>
        </li>
        <li>
          <label for="image">Image</label>
          <input
            name="image"
            type="file"
            accept="image/jpeg, image/png, image/jpg"
            @change="onFileChanged"
          />
          <span>Say something about yourself</span>
        </li>
        <li>
          <label for="rating">Rating</label>
          <textarea name="rating" v-model="form.rating"></textarea>
          <span>Enter Description here</span>
        </li>
        <li>
          <button type="button" @click="submitForm">Send This</button>
        </li>
      </ul>
    </form>
  </div>
</template>

<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "",
  data() {
    return {
      form: {
        title: "",
        price: 0,
        category: "",
        description: "",
        rating: 0,
      },
      selectedFile: null,
    };
  },
  methods: {
    ...mapActions("products", ["createProduct"]),
    adjust_textarea(h) {
      h.style.height = "20px";
      h.style.height = h.scrollHeight + "px";
    },
    async submitForm() {
      let formData = new FormData();
      formData.append("file", this.selectedFile);
      formData.append("data", JSON.stringify(this.form));
      console.log("formData", formData);
      await this.createProduct(formData);
    },
    onFileChanged(e) {
      this.selectedFile = e.target.files[0];
    },
  },
};
</script>

<style>
.form-style-7 {
  max-width: 400px;
  margin: 50px auto;
  background: #fff;
  border-radius: 2px;
  padding: 20px;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-7 h1 {
  display: block;
  text-align: center;
  padding: 0;
  margin: 0px 0px 20px 0px;
  color: #5c5c5c;
  font-size: x-large;
}
.form-style-7 ul {
  list-style: none;
  padding: 0;
  margin: 0;
}
.form-style-7 li {
  display: block;
  padding: 9px;
  border: 1px solid #dddddd;
  margin-bottom: 30px;
  border-radius: 3px;
}
.form-style-7 li:last-child {
  border: none;
  margin-bottom: 0px;
  text-align: center;
}
.form-style-7 li > label {
  display: block;
  float: left;
  margin-top: -19px;
  background: #ffffff;
  height: 14px;
  padding: 2px 5px 2px 5px;
  color: #b9b9b9;
  font-size: 14px;
  overflow: hidden;
  font-family: Arial, Helvetica, sans-serif;
}
.form-style-7 input[type="text"],
.form-style-7 input[type="date"],
.form-style-7 input[type="datetime"],
.form-style-7 input[type="email"],
.form-style-7 input[type="number"],
.form-style-7 input[type="search"],
.form-style-7 input[type="time"],
.form-style-7 input[type="url"],
.form-style-7 input[type="password"],
.form-style-7 textarea,
.form-style-7 select {
  box-sizing: border-box;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  width: 100%;
  display: block;
  outline: none;
  border: none;
  height: 25px;
  line-height: 25px;
  font-size: 16px;
  padding: 0;
  font-family: Georgia, "Times New Roman", Times, serif;
}
.form-style-7 input[type="text"]:focus,
.form-style-7 input[type="date"]:focus,
.form-style-7 input[type="datetime"]:focus,
.form-style-7 input[type="email"]:focus,
.form-style-7 input[type="number"]:focus,
.form-style-7 input[type="search"]:focus,
.form-style-7 input[type="time"]:focus,
.form-style-7 input[type="url"]:focus,
.form-style-7 input[type="password"]:focus,
.form-style-7 textarea:focus,
.form-style-7 select:focus {
}
.form-style-7 li > span {
  background: #f3f3f3;
  display: block;
  padding: 3px;
  margin: 0 -9px -9px -9px;
  text-align: center;
  color: #c0c0c0;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 11px;
}
.form-style-7 textarea {
  resize: none;
}
.form-style-7 input[type="submit"],
.form-style-7 input[type="button"] {
  background: #2471ff;
  border: none;
  padding: 10px 20px 10px 20px;
  border-bottom: 3px solid #5994ff;
  border-radius: 3px;
  color: #d2e2ff;
}
.form-style-7 input[type="submit"]:hover,
.form-style-7 input[type="button"]:hover {
  background: #6b9fff;
  color: #fff;
}

.form-style-7 button {
  background: #2471ff;
  border: none;
  padding: 10px 20px 10px 20px;
  border-bottom: 3px solid #5994ff;
  border-radius: 3px;
  color: #d2e2ff;
}
.form-style-7 button:hover {
  background: #6b9fff;
  color: #fff;
}
</style>
