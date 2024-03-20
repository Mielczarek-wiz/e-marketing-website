<template>
  <header className="h-1/6 w-full md:w-2/3 lg:w-1/2 mx-auto sticky top-0">
    <nav className="h-full">
      <menu
        className="h-full flex flex-row justify-center items-center space-x-5 p-2 bg-gradient-to-r from-cyan-400 via-sky-500 to-cyan-400 px-4 md:rounded-b-full"
      >
        <img src="../assets/logo.png" alt="Logo" className="h-10 w-10 hidden md:block" />
        <slot></slot>
      </menu>
    </nav>
  </header>
</template>
