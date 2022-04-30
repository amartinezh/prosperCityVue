<template>
  <div class="profile">
    <div class="user">
      <img
        :src="photo" alt="not founded" class="rounded-circle img"
      />
      <div class="content">
        <p class="name">{{ name }}</p>
        <p class="description mt-1">{{ description }}</p>
      </div>
      <i
        class="bi bi-pencil"
        data-bs-toggle="modal"
        data-bs-target="#exampleModal"
        data-bs-whatever="@mdo"
      ></i>
      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">Profile</h5>
              <button
                type="button"
                class="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            <div class="modal-body">
              <img
                :src="photo" alt="not founded" class="rounded-circle img2"
              />
              <form>
                <div class="mb-2">
                  <label for="recipient-photo" class="col-form-label">
                    Image(url)
                    <input
                      type="text" class="form-control" id=
                      "recipient-photo" v-model="photoData"
                    />
                  </label>
                </div>
                <div class="mb-2">
                  <label for="recipient-name" class="col-form-label">
                    Name:
                    <input
                      type="text" class="form-control" id=
                      "recipient-name" v-model="nameData"
                    />
                  </label>
                </div>
                <div class="mb-2 ms-0">
                  <label for="recipient-description" class="col-form-label">
                    Description:
                    <input
                      type="text" class="form-control" id=
                      "recipient-description" v-model="descriptionData" maxlength="42"
                    />
                  </label>
                </div>
              </form>
            </div>
            <div class="modal-footer">
              <button
                type="button"
                @click="updateInfo"
                class="btn btn-outline-primary"
                data-bs-dismiss="modal"
                aria-label="Close"
              >
                Save and close
              </button>
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

  beforeMount() {
    this.nameData = this.name;
    this.photoData = this.photo;
    this.descriptionData = this.description;
  },

  data() {
    return {
      nameData: '',
      photoData: '',
      descriptionData: '',
    };
  },

  props: {
    name: {
      type: String,
      required: true,
    },
    photo: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
  },

  methods: {
    updateInfo() {
      this.$emit('getData', {
        name: this.nameData,
        description: this.descriptionData,
        photo: this.photoData,
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
  width: 100%;
  height: 80px;
  background: #ffffff;
  border-radius: 8px;
}

.content {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  width: 300px;
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
  font-family: "Inter";
  font-weight: 700;
  color: #000000;
  margin-bottom: 0px;
  font-size: 1rem;
}

.description {
  font-family: "Inter";
  font-weight: 400;
  color: #000000;
  font-size: 0.7rem;
}

.bi {
  color: blue;
  margin-left: 270px;
}
</style>
