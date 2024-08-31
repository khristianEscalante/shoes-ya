<template>
    <div class="flex h-screen">
      <!-- Sidebar -->
      <aside
        class="h-full group/sidebar flex flex-col shrink-0 lg:w-[300px] w-[250px] transition-all duration-300 ease-in-out fixed lg:relative z-40 inset-y-0 left-0 bg-gray-900 border-r border-r-dashed border-r-neutral-200"
        id="sidenav-main"
      >
        <router-link to="/" class="flex shrink-0 px-8 gap-x-3 items-center h-[96px]">
            <svg xmlns="http://www.w3.org/2000/svg" class="size-6" viewBox="0 0 32 32">
                    <path fill="#FFFFFF"
                        d="M4.725 6.175q-.091.058-.172.138l-2.91 2.91a2.183 2.183 0 0 0-.018 3.066l.019.02l.09.099l.346.374c.3.323.731.788 1.263 1.354a285 285 0 0 0 4.129 4.308c3.168 3.233 6.973 6.932 9.24 8.456c2.553 1.724 4.873 2.695 6.567 3.236c.848.27 1.538.434 2.025.53a12 12 0 0 0 .728.121l.035.004c.675.107 1.272.126 1.803.015a2.66 2.66 0 0 0 1.377-.739l.7-.7q.078-.078.136-.169a3.05 3.05 0 0 0 1-2.262c-.117-1.293-1.337-2.04-2.417-2.7a4.6 4.6 0 0 1-1.428-1.1l-.795-1.856h.007a1.05 1.05 0 1 0 0-2.1h-.907l-.644-1.504a1.05 1.05 0 0 0-.39-2.026h-.478l-.532-1.241a1.05 1.05 0 0 0-.05-2.099H22.6l-.411-.96c-.062-.15-.1-.258-.132-.35a2.54 2.54 0 0 0-.72-1.137l-.52-.521a2.15 2.15 0 0 0-.847-.502v-.45c-.625-1.885-2.905-2.542-4.434-1.395l-2.128-2.17a2.063 2.063 0 0 0-.021-2.925a3.113 3.113 0 0 0-4.395 0zm9.462 9.18l.003-.745c0-1.7-.66-3.32-1.84-4.53L8.04 5.684l2.365-2.368a1.058 1.058 0 0 1 1.587.1a2.056 2.056 0 0 0 0 2.9l4.43 4.442a2.147 2.147 0 0 0 2.98 0l.52.52a.7.7 0 0 1 .245.379l.003.01c.043.124.096.274.18.469l.074.174h-.944c-.58 0-1.05.47-1.05 1.05a1.06 1.06 0 0 0 1.05 1.05h1.844l.531 1.24h-.785c-.58 0-1.05.47-1.05 1.05a1.06 1.06 0 0 0 1.05 1.05h1.685l.612 1.43h-.977c-.58 0-1.05.47-1.05 1.05c0 .29.12.55.31.74s.45.3.74.31h1.877l1.133 2.646a5.1 5.1 0 0 0 2.227 2.012l.003.002c.503.307 1.438.877 1.463 1.162c0 .056-.055.227-.305.507a21.6 21.6 0 0 1-4.997-1.242c-2.942-1.132-5.983-3.143-7.118-6.701l-.001-.002c-.405-1.26-1.318-2.727-2.376-4.163zM3.055 10.891a.17.17 0 0 1 0-.215L5.29 8.44q.301.295.7.693a99 99 0 0 1 3.231 3.388c1.208 1.33 2.447 2.785 3.466 4.167c1.034 1.403 1.781 2.652 2.082 3.587a11 11 0 0 0 .148.435l-11.86-9.817z" />
                </svg>
          <p class="text-white font-bold">Shoes-ya</p>
        </router-link>
  
        <div class="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>
  
        <div class="flex items-center justify-between px-8 py-5">
          <div class="flex items-center mr-5">
            <div class="mr-5">
              <div class="inline-block relative shrink-0 cursor-pointer rounded-[.95rem]">
                <img
                  class="w-[40px] h-[40px] shrink-0 inline-block rounded-[.95rem]"
                  src="https://raw.githubusercontent.com/Loopple/loopple-public-assets/main/riva-dashboard-tailwind/img/avatars/avatar1.jpg"
                  alt="avatar image"
                />
              </div>
            </div>
            <div class="mr-2">
              <a
                href="javascript:void(0)"
                class="dark:hover:text-primary hover:text-primary transition-colors duration-200 ease-in-out text-[1.075rem] font-medium dark:text-neutral-400/90 text-secondary-inverse"
                >Robert Jason</a
              >
              <span class="text-secondary-dark dark:text-stone-500 font-medium block text-[0.85rem]">
                SEO Manager
              </span>
            </div>
          </div>
          <a
            class="inline-flex relative items-center group justify-end text-base font-medium leading-normal text-center align-middle cursor-pointer rounded-[.95rem] transition-colors duration-150 ease-in-out text-dark bg-transparent shadow-none border-0"
            href="javascript:void(0)"
          >
            <span
              class="leading-none transition-colors duration-200 ease-in-out peer shrink-0 group-hover:text-primary text-secondary-dark"
            ></span>
          </a>
        </div>
  
        <div class="hidden border-b border-dashed lg:block dark:border-neutral-700/70 border-neutral-200"></div>
  
        <div class="relative pl-3 my-5">
          <div class="flex flex-col w-full font-medium">
            <!-- menu item -->
            <div>
              <span
                class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]"
              >
                <a
                  href="javascript:;"
                  class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >Sales</a
                >
              </span>
            </div>
  
            <!-- menu item -->
            <div>
              <span
                class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]"
              >
                <a
                  href="javascript:;"
                  class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >Profile</a
                >
              </span>
            </div>
  
            <!-- menu item -->
            <div>
              <span
                class="select-none flex items-center px-4 py-[.775rem] cursor-pointer my-[.4rem] rounded-[.95rem]"
              >
                <a
                  href="javascript:;"
                  class="flex items-center flex-grow text-[1.15rem] dark:text-neutral-400/75 text-stone-500 hover:text-dark"
                  >Settings</a
                >
              </span>
            </div>
          </div>
        </div>
      </aside>
      <!-- Main content -->
      <div
        class="flex-grow h-full transition-all duration-300 ease-in-out">
        <router-view />
      </div>
    </div>
  </template>
  
  <script setup>
  </script>
  