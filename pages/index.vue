<template>
  <div class="wrapper">
    <div class="cardWrapper" v-if="!user">
      <b-form @submit="signIn" v-if="signInForm">
        <h5 class="formHeading">Login to your account</h5>
        <br />
        <b-form-group
          id="input-group-1"
          label="Email"
          label-for="input-1"
          description=""
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <label for="text-password">Password</label>
        <b-form-input
          type="password"
          id="text-password"
          aria-describedby="password-help-block"
          v-model="form.password"
        ></b-form-input>
        <br />
        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Remember Me</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <button type="submit" class="submitForm">Sign In</button>
        <br />
        <p class="bottomText">
          New to MyApp?<button class="switch" @click="showSignUp">
            Sign Up
          </button>
        </p>
      </b-form>

      <b-form @submit="signUp" v-else-if="signUpForm">
        <h5 class="formHeading">Create Account</h5>
        <br />
        <b-form-group id="input-group-2" label="Name" label-for="input-2">
          <b-form-input
            id="input-2"
            v-model="form.name"
            placeholder="Enter name"
            required
          ></b-form-input>
        </b-form-group>
        <b-form-group
          id="input-group-1"
          label="Email"
          label-for="input-1"
          description=""
        >
          <b-form-input
            id="input-1"
            v-model="form.email"
            type="email"
            placeholder="Enter email"
            required
          ></b-form-input>
        </b-form-group>

        <label for="text-password">Password</label>
        <b-form-input
          type="password"
          id="text-password"
          aria-describedby="password-help-block"
          v-model="form.password"
        ></b-form-input>
        <br />
        <b-form-group id="input-group-4" v-slot="{ ariaDescribedby }">
          <b-form-checkbox-group
            v-model="form.checked"
            id="checkboxes-4"
            :aria-describedby="ariaDescribedby"
          >
            <b-form-checkbox value="me">Remember Me</b-form-checkbox>
          </b-form-checkbox-group>
        </b-form-group>

        <button type="submit" class="submitForm">Sign Up</button>
        <p class="bottomText">
          Already have an account?<button class="switch" @click="showSignIn">
            Login
          </button>
        </p>
      </b-form>
    </div>
    <b-button @click="signOut" v-else variant="danger" class="logoutBtn">Log Out</b-button>
    <Tutorial v-if="user"/>
    <!-- <Tutorial /> -->
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  data() {
    return {
      form: {
        name: "",
        email: "",
        password: "",
      },
      user: null,
      signInForm: true,
      signUpForm: false,
    };
  },
  methods: {
    signUp(event) {
      event.preventDefault()
      this.$fire.auth
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed In!");
          this.user = user;
        })
        .catch((error) => {
          // const errorCode = error.code;
          const errorMessage = error.message;
          console.log(errorMessage);
        });
    },
    signIn(event) {
      event.preventDefault();
      this.$fire.auth
        .signInWithEmailAndPassword(this.form.email, this.form.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed in!");
          this.user = user;
          this.signInForm = false;
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
          console.log(errorMessage);
        });
    },
    signOut() {
      console.log("signing out");
      this.$fire.auth.signOut();
      this.user = null;
      this.signInForm = true;
      this.reset();
    },
    showSignUp(event) {
      event.preventDefault();
      this.signInForm = false;
      this.signUpForm = true;
    },
    showSignIn(event) {
      event.preventDefault();
      this.signInForm = true;
      this.signUpForm = false;
    },
    reset() {
      this.form = {
        name: "",
        email: "",
        password: "",
      };
    },
  },
};
</script>

<style scoped>
.wrapper {
  background-color: #1e4c90;
  min-height: 100vh;
  width: 100vw;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.cardWrapper {
  background-color: white;
  padding: 30px;
  position: fixed;
  width: 80%;
  height: auto;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  max-width: 400px;
  border-radius: 10px;
}
.switch {
  background: none;
  border: none;
  color: #1e4c90;
}
.submitForm {
  width: 100%;
  border-radius: 8px;
  background-color: #1e4c90;
  color: white;
  padding-top: 10px;
  padding-bottom: 10px;
}
.bottomText {
  margin-top: 20px;
  padding: auto;
  text-align: center;
}
.formHeading {
  text-align: center;
}
.logoutBtn {
  position: fixed;
  top: 10px;
  right: 10px;
}
</style>
