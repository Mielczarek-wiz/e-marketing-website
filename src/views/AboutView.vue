<script setup>
import TeamMemberComponent from '@/components/TeamMemberComponent.vue'
</script>

<template>
  <section className="m-2 p-2 space-y-4 h-full">
    <div className="space-y-1">
      <div className="flex bg-gradient-to-r from-transparent via-sky-500 to-transparent">
        <h3 className="py-6 font-semibold text-xl mx-auto">Our Company</h3>
      </div>
      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-1/2 m-2 p-2">
          <p className="mx-4 mb-2 text-md">
            <i className="text-it">UltraMarine</i> aims to provide unique and high quality fish
            products. We go beyond the traditional fish market by offering fresh and rare fish
            species and using sustainable practices throughout the supply chain.
          </p>
          <p className="mx-4 mb-2 text-md">
            The company serves the restaurant market, (aka fine dining establishments), and retail
            customers.
          </p>
          <p className="mx-4 mb-2 text-md">
            The <i className="text-it">UltraMarine</i> team has extensive industry knowledge in
            fisheries, food supply and business management. We have experience in establishing
            partnerships with fish suppliers and developing sustainability strategies.
          </p>
          <p className="mx-4 mb-2 text-md">
            Our unique range of fish products containing rare species and the personalisation of our
            offer gives us an unparalleled competitive advantage. The only risk factors are sudden,
            abrupt and unpredictable changes in the fish market.
          </p>
        </div>
        <div className="flex items-center justify-center lg:w-1/2">
          <img src="/Fish.png" alt="fish" className="hidden md:block rounded-full w-3/4" />
        </div>
      </div>
    </div>
    <div className="space-y-1">
      <div className="flex bg-gradient-to-r from-transparent via-sky-500 to-transparent">
        <h3 className="py-6 font-semibold text-xl mx-auto text-center">Our Team</h3>
      </div>
      <div className="flex flex-wrap justify-evenly">
        <TeamMemberComponent
          name="Chad Stevens"
          job="General Director"
          text1="Master's degree in management, specialising in fisheries management."
          text2="15 years' experience in the fishing industry, previously serving as a director in a company specialising in sustainable fisheries."
          img="/adam-nowak.png"
        />
        <TeamMemberComponent
          name="Ann Smith"
          job="Production Manager"
          text1="Food Engineer."
          text2="Experience in seafood production."
          img="/anna-kowalska.png"
        />
        <TeamMemberComponent
          name="Charles Newcastle"
          job="Sales Manager"
          text1="Master's degree in management."
          text2="More than 10 years' experience in managing a sales team in the food sector."
          img="/karol-nowicki.png"
        />
        <TeamMemberComponent
          name="Monique Cherryton"
          job="Financial Manager"
          text1="Bachelor's degree in economics."
          text2="Worked as chief accountant at the food company FOODEX."
          img="/monika-wisniewska.png"
        />
      </div>
    </div>
  </section>
</template>
