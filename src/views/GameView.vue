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
      this.addLogMessage('Monster', 'attack', damage)
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
      this.winner = 'Monster'
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
  <div id="game" className="w-2/3 mx-auto grid grid-flow-row gap-4 py-2">
    <section id="monster" className="text-center p-2 shadow-md rounded-md bg-cyan-100 space-y-2">
      <h2 className="text-center text-lg italic">Monster Health</h2>
      <div className="w-full h-10 bg-red-600">
        <div className="w-full h-full bg-green-600" :style="monsterBarStyles"></div>
      </div>
    </section>
    <section id="player" className="text-center p-2 shadow-md rounded-md bg-cyan-100 space-y-2">
      <h2 className="text-center text-lg italic">Your Health</h2>
      <div className="w-full h-10 bg-red-600">
        <div className="w-full h-full bg-green-600" :style="playerBarStyles"></div>
      </div>
    </section>
    <section v-if="winner" className="text-center p-2 shadow-md rounded-md bg-cyan-100">
      <h2 className="text-center text-lg italic">Game Over!</h2>
      <h3 v-if="winner === 'Monster'">You lost!</h3>
      <h3 v-else-if="winner === 'Player'">You Win!</h3>
      <h3 v-else>It's a draw!</h3>
      <button
        @click="newGame"
        className="border border-cyan-700 bg-cyan-700 hover:bg-cyan-500 hover:border-none w-48 py-4 rounded-md text-white"
      >
        New Game
      </button>
    </section>
    <section v-else className="grid grid-cols-2 gap-2 place-items-center">
      <button
        @click="attackMonster"
        className="border border-cyan-700 bg-cyan-700 hover:bg-cyan-500 hover:border-none w-48 py-4 rounded-md text-white"
      >
        ATTACK
      </button>
      <button
        @click="specialAttack"
        className="border border-cyan-700 bg-cyan-700 hover:bg-cyan-500 hover:border-none w-48 py-4 rounded-md text-white disabled:cursor-not-allowed disabled:bg-gray-400 disabled:border-gray-400 disabled:text-gray-800"
        :disabled="canUseSpecialAttack"
      >
        ULTIMATE
      </button>
      <button
        @click="healPlayer"
        className="border border-cyan-700 bg-cyan-700 hover:bg-cyan-500 hover:border-none  w-48 py-4 rounded-md text-white"
      >
        HEAL
      </button>
      <button
        @click="surrender"
        className="border border-cyan-700 bg-cyan-700 hover:bg-cyan-500 hover:border-none w-48 py-4 rounded-md text-white "
      >
        SURRENDER
      </button>
    </section>
    <section
      id="log"
      className="text-center p-2 shadow-md rounded-md bg-cyan-100 max-h-56 overflow-y-auto"
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
</template>
