import Vue from "https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js";

new Vue({
  el: "#app",
  data() {
    return {
      form: {
        name: "",
        value: "",
      },
      contacts: [],
    };
  },
  computed: {
    canCreate() {
      return this.form.value.trim() && this.form.name.trim();
    },
  },
  methods: {
    createContact() {
      const { ...contact } = this.form;
      console.log(contact);
      this.contacts.push({ ...contact, id: Date.now(), marked: false });

      this.form.name = this.form.value = "";
    },
    markContact(id) {
      console.log(id);
      const contact = this.contacts.find((c) => c.id === id);
      contact.marked = true;
    },
    removeContact(id) {
      this.contacts = this.contacts.filter((c) => c.id !== id);
    },
  },
  async mounted() {
    this.contacts = await request("/api/contacts");
  },
});

async function request(url, method = "GET", data = null) {
  try {
    const headers = {};
    let body;

    if (data) {
      headera["Content-Type"] = "application/json";
      body = JSON.stringify(data);
    }

    const response = await fetch(url, {
      method,
      headers,
      body,
    });
    return await response.json();
  } catch (err) {
    console.warn("Error", err.message);
  }
}
