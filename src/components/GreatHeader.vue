<template>
  <header className="h-1/6 w-dvw">
    <nav className="h-full w-full ">
      <menu
        className="h-full w-full flex flex-row justify-center items-center space-x-5 p-2 bg-gradient-to-br from-cyan-500 to-sky-500 px-4 rounded-b-md"
      >
        <!-- Add logo here -->
        <slot></slot>
      </menu>
    </nav>
  </header>
</template>
