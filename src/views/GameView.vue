<script setup>
  import SideBarAddComponent from "@/components/SideBarAddComponent.vue"
  import PopupComponent from "@/components/PopupComponent.vue"
</script>

<script>
const getRandomValue = (min = 5, max = 12) => {
  return Math.floor(Math.random() * (max - min)) + min
}
export default {
  data() {
    return {
      monsterHealth: 100,
      playerHealth: 100,
      currentRound: 0,
      winner: null,
      logs: []
    }
  },
  computed: {
    monsterBarStyles() {
      if (this.monsterHealth <= 0) {
        return { width: '0%' }
      }
      return { width: this.monsterHealth + '%' }
    },
    playerBarStyles() {
      if (this.playerHealth <= 0) {
        return { width: '0%' }
      }
      return { width: this.playerHealth + '%' }
    },
    canUseSpecialAttack() {
      return this.currentRound % 3 !== 0
    }
  },
  watch: {
    playerHealth(value) {
      if (value <= 0 && this.monsterHealth <= 0) {
        this.winner = 'Draw'
      } else if (value <= 0) {
        this.winner = 'Monster'
      }
    },
    monsterHealth(value) {
      if (value <= 0 && this.playerHealth <= 0) {
        this.winner = 'Draw'
      } else if (value <= 0) {
        this.winner = 'Player'
      }
    }
  },
  methods: {
    attackMonster() {
      this.currentRound++
      const damage = getRandomValue()
      this.monsterHealth -= damage
      this.addLogMessage('Player', 'attack', damage)
      this.attackPlayer()
    },
    attackPlayer() {
      const damage = getRandomValue(8, 15)
      this.addLogMessage('Kraken', 'attack', damage)
      this.playerHealth -= damage
    },
    specialAttack() {
      this.currentRound++
      const damage = getRandomValue(10, 25)
      this.addLogMessage('Player', 'attack', damage)
      this.monsterHealth -= damage
      this.attackPlayer()
    },
    healPlayer() {
      this.currentRound++
      const healValue = getRandomValue(8, 20)
      this.addLogMessage('Player', 'heal', healValue)
      if (this.playerHealth + healValue > 100) {
        this.playerHealth = 100
      } else {
        this.playerHealth += healValue
      }
      this.attackPlayer()
    },
    surrender() {
      this.winner = 'Kraken'
    },
    newGame() {
      this.monsterHealth = 100
      this.playerHealth = 100
      this.currentRound = 0
      this.winner = null
      this.logs = []
    },
    addLogMessage(who, what, value) {
      this.logs.unshift({
        actionBy: who,
        actionType: what,
        actionValue: value
      })
    }
  }
}
</script>

<template>
  <PopupComponent v-if="winner == 'Monster'" title="You lost" text="Don't worry you can still taste our delicious fish!" buttonText="Buy fish now!"/>
  <PopupComponent v-if="winner == 'Draw'" title="Oh well" text="You didn't manage to defeat the Kraken but don't worry!" buttonText="Buy fish nonetheless!"/>
  <PopupComponent v-if="winner == 'Player'" title="Victory!" text="You won! You can of feast on our delicious fish!" buttonText="Take me there!"/>
  <div className="flex flex-col lg:flex-row">
    <SideBarAddComponent className="bg-sky-500 mx-4 p-4 rounded-3xl shadow-lg hidden lg:block w-1/6"/>
    <div id="game" className="w-2/3 mx-auto grid grid-flow-row gap-4 py-2">
      <section id="monster" className="text-center p-2 shadow-md rounded-md bg-cyan-100 space-y-2">
        <h2 className="text-center text-lg italic">Kraken's Health</h2>
        <div className="w-full h-10 rounded-full bg-red-800">
          <div className="w-full h-full rounded-full bg-lime-500 transition-all duration-500" :style="monsterBarStyles"></div>
        </div>
      </section>
      <section id="player" className="text-center p-2 shadow-md rounded-md bg-cyan-100 space-y-2">
        <h2 className="text-center text-lg italic">Your Health</h2>
        <div className="w-full h-10 rounded-full bg-red-800">
          <div className="w-full h-full rounded-full bg-lime-500 transition-all duration-500" :style="playerBarStyles"></div>
        </div>
      </section>
      <section v-if="winner" className="text-center p-2 shadow-md rounded-md bg-cyan-100">
        <h2 className="text-center text-lg italic">Game Over!</h2>
        <h3 v-if="winner === 'Monster'">You lost!</h3>
        <h3 v-else-if="winner === 'Player'">You Win!</h3>
        <h3 v-else>It's a draw!</h3>
        <button
          @click="newGame"
          className="bg-sky-500 hover:bg-white w-48 py-4 rounded-full text-white hover:text-black transition-colors duration-500"
        >
          New Game
        </button>
      </section>
      <section v-else className="grid grid-cols-1 md:grid-cols-2 gap-2 place-items-center">
        <button
          @click="attackMonster"
          className="border border-cyan-700 bg-sky-500 hover:bg-white hover:border-none w-48 py-4 rounded-full text-white hover:text-black transition-colors duration-500"
        >
          ATTACK
        </button>
        <button
          @click="specialAttack"
          className="border border-cyan-700 bg-sky-500 hover:bg-white hover:border-none w-48 py-4 rounded-full text-white hover:text-black transition-colors duration-500 disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-800"
          :disabled="canUseSpecialAttack"
        >
          ULTIMATE
        </button>
        <button
          @click="healPlayer"
          className="border border-cyan-700 bg-sky-500 hover:bg-white hover:border-none w-48 py-4 rounded-full text-white hover:text-black transition-colors duration-500"
        >
          HEAL
        </button>
        <button
          @click="surrender"
          className="border border-cyan-700 bg-sky-500 hover:bg-white hover:border-none w-48 py-4 rounded-full text-white hover:text-black transition-colors duration-500"
        >
          SURRENDER
        </button>
      </section>
      <section
        id="log"
        className="text-center p-2 shadow-md rounded-md bg-cyan-100 max-h-56 overflow-y-auto h-96"
      >
        <h2 className="text-center text-lg italic font-bold">Battle Log</h2>
        <ul className="m-0 p-0 list-none space-y-2">
          <li v-for="log in logs" :key="log">
            <span :class="log.actionBy === 'Player' ? 'text-orange-400' : 'text-blue-700'"
              >{{ log.actionBy }}
            </span>
            <span v-if="log.actionType === 'heal'">
              heals himself for

              <span className="text-green-600">{{ log.actionValue }}</span></span
            >
            <span v-else>
              attacks and deals
              <span className="text-red-600">{{ log.actionValue }}</span></span
            >
          </li>
        </ul>
      </section>
    </div>
    <SideBarAddComponent className="bg-sky-500 p-4 rounded-3xl shadow-lg w-full md:w-2/3 lg:w-1/6 md:mx-auto lg:mx-4"/>
  </div>
</template>
