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
    <b-button @click="signOut" v-else variant="danger" class="logoutBtn"
      >Log Out</b-button
    >
    <div class="cardWrapper planWrapper" v-if="plan">
      <button @click="isPlanActive = false" v-if="isPlanActive" class="cancelBtn">Cancel</button>
      <p>
        <span class="planHeading">Current Plan Details</span>
        <span v-if="isPlanActive" class="text-primary headingPrompt"
          >Active</span
        ><span v-else class="text-danger headingPrompt">Cancelled</span>
      </p>
      <h6>{{ plan.type.charAt(0).toUpperCase() + plan.type.slice(1) }}</h6>

      <h4>
        <span class="price">{{ mapping[plan.timePeriod][plan.type] }}</span
        >/{{ plan.timePeriod == "yearly" ? "yr" : "mo" }}
      </h4>

      <button @click="plan = null; isPlanActive = true" class="planBtn">Change Plan</button>
      <div class="activationPrompt">
        Your subscription has started on
        {{ monthMapping[activationDate.getMonth()] }}&nbsp;{{
          activationDate.getDate()
        }},&nbsp;{{ activationDate.getFullYear() }} and will auto renew on
        {{ monthMapping[renewDate.getMonth()] }}&nbsp;{{
          renewDate.getDate()
        }},&nbsp;{{ renewDate.getFullYear() }}.
      </div>
    </div>
    <Tutorial v-if="user && !plan" :userDetails="user" @planUpdate="fetchData"/>
  </div>
</template>

<script>
export default {
  name: "IndexPage",
  computed: {
    activationDate() {
      if (!this.plan) return "";
      let date = Date(this.plan.createdOn.toString());
      let date2 = new Date(date);
      return date2;
    },
    renewDate() {
      if (!this.plan) return "";
      let newDate = this.activationDate;
      if (this.plan.timePeriod == "yearly") {
        newDate.setFullYear(this.activationDate.getFullYear() + 1);
      } else {
        newDate.setMonth(this.activationDate.getMonth() + 1);
      }
      return newDate;
    },
  },
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
      // plan: {
      //   type: "premium",
      //   timePeriod: "yearly",
      //   createdOn: "1669575488956",
      // },
      plan: null,
      isPlanActive: true,
      mapping: {
        monthly: {
          mobile: 100,
          basic: 200,
          standard: 500,
          premium: 700,
        },
        yearly: {
          mobile: 1000,
          basic: 2000,
          standard: 5000,
          premium: 7000,
        },
      },
      monthMapping: [
        "Jan",
        "Feb",
        "Mar",
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
    };
  },
  methods: {
    signUp(event) {
      event.preventDefault();
      this.$fire.auth
        .createUserWithEmailAndPassword(this.form.email, this.form.password)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log("User signed In!");
          this.user = user;
          this.fetchData();
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
          this.signInForm = false;
          this.fetchData();
          this.user = user;
        })
        .catch((error) => {
          const errorMessage = error.message;
          alert(errorMessage);
          console.log(errorMessage);
        });
    },
    signOut() {
      this.plan = null
      this.isPlanActive = true
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
    fetchData() {
      this.$fire.firestore
        .collection("plans")
        .get()
        .then((snapshot) => {
          snapshot.forEach((doc) => {
            if (doc.id == this.user.uid) {
              this.plan = { ...doc.data() };
            }
            console.log(this.plan);
          });
        });
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
.planWrapper {
  padding: 15px;
}
.planHeading {
  font-size: 1.1rem;
  font-weight: 500;
}
.headingPrompt {
  font-size: 0.7rem;
  padding: 4px 8px;
  border-radius: 8px;
}
.text-primary {
  background: #b6d2fb;
}
.text-danger {
  background: rgb(240, 174, 174);
}
.price {
  font-weight: 600;
}
.planBtn {
  background-color: white;
  border: 2px solid #87b1f1;
  border-radius: 4px;
  color: #1e4c90;
  padding: 4px 10px;
  font-size: 0.9rem;
  margin: 15px auto;
}
.activationPrompt {
  background-color: rgb(241, 239, 239);
  padding: 5px;
  font-size: 0.8rem;
  font-weight: 500;
}
.cancelBtn {
  position: absolute;
  top: 20px;
  right: 10px;
  color: #1e4c90;
  background: none;
  border: none;
  font-size: 0.9rem;
  font-weight: 500;
}
</style>
