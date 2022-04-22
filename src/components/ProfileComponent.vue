<template>
  <div class="profile">
    <div class="user">
      <img :src="image" alt="
      profile icon" class="rounded-circle img">
      <div class="content">
        <p class="name">{{name}}</p>
        <p class="description">{{description}}</p>
      </div>
      <i class="bi bi-pencil" data-bs-toggle="modal" data-bs-target=
      "#exampleModal" data-bs-whatever="@mdo" style="width: 20px; height: 20px"></i>
      <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby=
        "exampleModalLabel" aria-hidden="true">
          <div class="modal-dialog">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">Profile</h5>
                <button type="button" class="btn-close" data-bs-dismiss=
                "modal" aria-label="Close" @click="clear"></button>
              </div>
              <div class="modal-body">
                <img :src="image" alt="
                profile icon" class="rounded-circle img2">
                <form>
                  <div class="mb-3">
                  <label for="recipient-image" class="col-form-label">
                    Image:
                    <input type="text" class="form-control" id="recipient-image" v-model="image">
                  </label>
                  </div>
                  <div class="mb-3">
                  <label for="recipient-name" class="col-form-label">
                    Name:
                    <input type="text" class="form-control" id="recipient-name" v-model="name">
                  </label>
                  </div>
                  <div class="mb-3">
                  <label for="recipient-description" class="col-form-label">
                    Description:
                    <input type="text" class="form-control" id=
                    "recipient-description" v-model="description">
                  </label>
                  </div>
                </form>
              </div>
              <div class="modal-footer">
                <button type="button" @click="updateInfo" class=
                "btn btn-primary" data-bs-dismiss=
                "modal" aria-label="Close">Save and close</button>
              </div>
            </div>
          </div>
      </div>
    </div>
  </div>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ProfileComponent',

  data() {
    return {
      name: 'Leonidas Esteban',
      description: 'alllinks.co/leonidasesteban.com',
      image: 'https://i.ibb.co/yVGxFPR/2.png',
    };
  },

  methods: {
    updateInfo() {
      this.$emit('getData', {
        name: this.name,
        description: this.description,
        image: this.image,
      });
    },
  },
});
</script>

<style>

.user {
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 8px;
  width: 60%;
  height: 80px;
  background: #FFFFFF;
  border-radius: 8px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 219px;
  height: 42px;
}

.img {
  width: 54px;
  height: 54px;
  margin: 0px 30px;
}

.img2 {
  width: 70px;
  height: 70px;
  margin-bottom: 11px;
}

.name {
  font-family: 'Inter';
  font-weight: 700;
  color: #000000;
  margin-bottom: 0px;
}

.description {
  font-family: 'Inter';
  font-weight: 400;
  color: #000000;
}

.bi {
  color: blue;
  margin-left: 22px;
}

</style>
