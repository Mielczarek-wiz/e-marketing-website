<template>
  <div className="m-2 p-2">
    <div className="flex">
      <h2 className="m-2 p-2 pb-6 font-bold text-2xl mx-auto">Contact</h2>
    </div>
    <div className="mx-auto p-2 align-middle self-center w-full flex flex-col md:flex-row justify-evenly">
      <div className="flex flex-col items-left">
        <h3 className="mb-2 font-semibold text-lg">
          Ultramarine
        </h3>
        <span className="ml-6 mb-2 text-md">Address: 42 Long St. New Carthage 21-370</span>
        <span className="ml-6 mb-2 text-md">Phone: (+48) 111 222 333</span>
        <span className="ml-6 mb-2 text-md">E-mail: contact@ultramarine.com</span>
        <div className="flex items-center justify-center">
          <img src="/src/assets/logo.png" alt="logo" className="w-48 m-6"/>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <form action="#" className="space-y-2 m-4">
          <div>
            <label for="email" className="mb-2 text-sm">Your email</label>
            <input type="email" id="email"
              className="w-72 lg:w-96 block p-3 shadow-sm border text-sm rounded-lg bg-white border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
              placeholder="your@mail.com" required>
          </div>
          <div>
            <label for="subject" className="mb-2 text-sm">Subject</label>
            <input type="text" id="subject"
              className="w-72 lg:w-96 block p-3 shadow-sm border text-sm rounded-lg bg-white border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500"
              placeholder="Let us know how we can help you" required>
          </div>
          <div class="sm:col-span-2">
            <label for="message" className="mb-2 text-sm">Your
              message</label>
            <textarea id="message" rows="6"
            className="w-72 lg:w-96 block p-3 shadow-sm border text-sm rounded-lg bg-white border-gray-600 placeholder-gray-400 focus:ring-primary-500 focus:border-primary-500 resize-none"
              placeholder="Your message..." required></textarea>
          </div>
          <button type="submit"
            class="bg-white p-4 text-sm rounded-lg hover:bg-red-700 hover:text-white transition-colors duration-500 shadow-lg">Send
            message</button>
        </form>
      </div>
    </div>
  </div>
</template>

<style></style>
