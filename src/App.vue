<template>
  <div id="app">
    <header class="header">
      <div class="container">
        <div class="inner">
          <div class="logo"/>
          <nav class="main-nav">
            <router-link
              exact
              :to="{name: $routeNames.Home}">Home</router-link>
            <router-link :to="{name: $routeNames.About}">About</router-link>
            <router-link disabled :to="{name: $routeNames.Users}">Users</router-link>
          </nav>
        </div>
      </div>
    </header>
    <main class="content">
      <router-view/>
    </main>
  </div>
</template>
