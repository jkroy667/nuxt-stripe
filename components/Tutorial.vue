<template>
  <div class="planWrapper">
    <h4 class="heading">Choose the right plan for you</h4>
    <div class="outer">
      <div class="left">
        <div class="b1">
          <div class="btnWrapper">
            <button
              class="planToggleBtn"
              :class="{ selectedToggleBtn: monthlySelected }"
              @click="monthlySelected = true"
            >
              Monthly
            </button>
            <button
              class="planToggleBtn"
              :class="{ selectedToggleBtn: !monthlySelected }"
              @click="monthlySelected = false"
            >
              Yearly
            </button>
          </div>
        </div>
        <div class="b2">Monthly Price</div>
        <div class="b3">Video Quality</div>
        <div class="b4">Resolution</div>
        <div class="b5 lastPrompt">Devices you can use to watch</div>
      </div>
      <div class="right">
        <div class="plan">
          <div class="b1">
            <button
              class="planBtn"
              :class="{ selectedPlanBtn: planSelected == 'mobile' }"
              @click="planSelected = 'mobile'"
            >
              Mobile
            </button>
          </div>
          <div class="b2" v-if="monthlySelected" :class="{ selectedPlanText: planSelected == 'mobile' }">100</div>
          <div class="b2" v-else :class="{ selectedPlanText: planSelected == 'mobile' }">1000</div>
          <div class="b3" :class="{ selectedPlanText: planSelected == 'mobile' }">Good</div>
          <div class="b4" :class="{ selectedPlanText: planSelected == 'mobile' }">480p</div>
          <div class="b5" :class="{ selectedPlanText: planSelected == 'mobile' }">
            <p>Phone</p>
            <p>Tablet</p>
            <p>&nbsp;</p>
            <p>&nbsp;</p>
          </div>
        </div>
        <div class="plan">
          <div class="b1">
            <button
              class="planBtn"
              :class="{ selectedPlanBtn: planSelected == 'basic' }"
              @click="planSelected = 'basic'"
            >
              Basic
            </button>
          </div>
          <div class="b2" v-if="monthlySelected" :class="{ selectedPlanText: planSelected == 'basic' }">200</div>
          <div class="b2" v-else :class="{ selectedPlanText: planSelected == 'basic' }">2000</div>
          <div class="b3" :class="{ selectedPlanText: planSelected == 'basic' }">Good</div>
          <div class="b4" :class="{ selectedPlanText: planSelected == 'basic' }">480p</div>
          <div class="b5" :class="{ selectedPlanText: planSelected == 'basic' }">
            <p>Phone</p>
            <p>Tablet</p>
            <p>Computer</p>
            <p>TV</p>
          </div>
        </div>
        <div class="plan">
          <div class="b1">
            <button
              class="planBtn"
              :class="{ selectedPlanBtn: planSelected == 'standard' }"
              @click="planSelected = 'standard'"
            >
              Standard
            </button>
          </div>
          <div class="b2" v-if="monthlySelected" :class="{ selectedPlanText: planSelected == 'standard' }">500</div>
          <div class="b2" v-else :class="{ selectedPlanText: planSelected == 'standard' }">5000</div>
          <div class="b3" :class="{ selectedPlanText: planSelected == 'standard' }">Better</div>
          <div class="b4" :class="{ selectedPlanText: planSelected == 'standard' }">1080p</div>
          <div class="b5" :class="{ selectedPlanText: planSelected == 'standard' }">
            <p>Phone</p>
            <p>Tablet</p>
            <p>Computer</p>
            <p>TV</p>
          </div>
        </div>
        <div class="plan">
          <div class="b1">
            <button
              class="planBtn"
              :class="{ selectedPlanBtn: planSelected == 'premium' }"
              @click="planSelected = 'premium'"
            >
              Premium
            </button>
          </div>
          <div class="b2" v-if="monthlySelected" :class="{ selectedPlanText: planSelected == 'premium' }">700</div>
          <div class="b2" v-else :class="{ selectedPlanText: planSelected == 'premium' }">7000</div>
          <div class="b3" :class="{ selectedPlanText: planSelected == 'premium' }">Best</div>
          <div class="b4" :class="{ selectedPlanText: planSelected == 'premium' }">4K+HDR</div>
          <div class="b5" :class="{ selectedPlanText: planSelected == 'premium' }">
            <p>Phone</p>
            <p>Tablet</p>
            <p>Computer</p>
            <p>TV</p>
          </div>
        </div>
      </div>
    </div>
    <button class="lastBtn">Next</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      monthlySelected: true,
      planSelected: "",
    };
  },
  methods: {},
};
</script>

<style scoped>
.planWrapper {
  background-color: white;
  border-radius: 10px;
  width: 80%;
  height: 600px;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.heading {
  text-align: center;
  margin-top: 20px;
  height: 10%;
}
.outer {
  width: 90%;
  height: 70%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.left {
  width: 30%;
  height: 100%;
}
.right {
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.plan {
  width: 25%;
  height: 100%;
}
.b1 {
  height: 25%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  font-size: 1.1rem;

}

.b2, .b3, .b4 {
  height: 10%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid rgb(172, 170, 170);
}
.b5 {
  height: 45%;
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
}
.lastPrompt {
  justify-content: flex-start;
  margin-top: 10px;
}
.btnWrapper {
  border-radius: 40px;
  width: auto;
  height: 60%;
  padding: 15px;
  background-color: #1e4c90;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}
.planToggleBtn {
  border: none;
  background: none;
  color: white;
  padding: 10px;
  min-width: 100px;
}
.selectedToggleBtn {
  border-radius: 40px;
  background-color: white;
  color: #1e4c90;
}
.planBtn {
  background-color: #7893bc;
  border: none;
  height: 80%;
  width: 80%;
  color: white;
}
.selectedPlanBtn {
  background-color: #1e4c90;
}
.selectedPlanText {
  color: #1e4c90;
  font-weight: 600;
}
.lastBtn {
  width: 40%;
  height: 10%;
  padding: 10px;
  background-color: #1e4c90;
  color: white;
  font-weight: 600;
  border: none;
  border-radius: 10px;
  margin-bottom: 20px;
}
</style>