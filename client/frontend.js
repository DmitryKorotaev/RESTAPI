import Vue from "https://cdn.jsdelivr.net/npm/vue@2.7.8/dist/vue.esm.browser.js";

new Vue({
  el: "#app",
  data() {
    return {
      form: {
        name: "",
        value: "",
      },
      contacts: [
        {
          id: 1,
          name: "Dima",
          value: "12345678",
          marked: false,
        },
      ],
    };
  },
  methods: {
    createContact() {
      const { ...contact } = this.form;
      console.log(contact);
      this.contacts.push({ ...contact, id: Date.now() });

      this.form.name = this.form.value = "";
    },
    markContact(id) {
      console.log(id);
      const contact = this.contacts.find((c) => c.id === id);
      contact.marked = true;
    },
    removeContact(id) {},
  },
});
